<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SearchRequest;
use App\Http\Resources\PropertyResource;
use App\Services\Elasticsearch\ElasticsearchService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redis;

class SearchController extends Controller
{
    protected ElasticsearchService $es;
    protected string $index = 'properties';

    public function __construct(ElasticsearchService $es)
    {
        $this->es = $es;
    }

    public function __invoke(SearchRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $cacheKey = 'search:' . md5(serialize($validated));

        // Rate limiting via Redis (throttle:60,1 applied in routes)
        // Cache top results for 5 minutes
        if (empty($validated['page']) || $validated['page'] === 1) {
            $cached = Cache::store('redis')->get($cacheKey);
            if ($cached) {
                return response()->json($cached);
            }
        }

        $query = $this->buildElasticsearchQuery($validated);

        try {
            $results = $this->es->search($this->index, $query);
        } catch (\Exception $e) {
            // Degraded mode: fallback to simplified MySQL search
            return $this->fallbackSearch($validated);
        }

        $properties = $this->hydrateResults($results);
        $response = [
            'data' => PropertyResource::collection($properties),
            'meta' => [
                'total' => $results['hits']['total']['value'] ?? 0,
                'page' => $validated['page'] ?? 1,
                'per_page' => $validated['per_page'] ?? 20,
            ],
            'aggregations' => $results['aggregations'] ?? null,
        ];

        if (empty($validated['page']) || $validated['page'] === 1) {
            Cache::store('redis')->put($cacheKey, $response, 300); // 5 minutes
        }

        return response()->json($response);
    }

    protected function buildElasticsearchQuery(array $params): array
    {
        $must = [];
        $filter = [];

        // Text search
        if (!empty($params['q'])) {
            $must[] = [
                'multi_match' => [
                    'query' => $params['q'],
                    'fields' => ['title^3', 'description', 'city^2', 'sub_city'],
                    'type' => 'best_fields',
                    'fuzziness' => 'AUTO',
                ],
            ];
        }

        // Listing type filter
        if (!empty($params['listing_type'])) {
            $filter[] = ['term' => ['listing_type' => $params['listing_type']]];
        }

        // Property type filter
        if (!empty($params['property_type'])) {
            $filter[] = ['term' => ['property_type' => $params['property_type']]];
        }

        // Price range
        $priceRange = [];
        if (isset($params['price_min'])) {
            $priceRange['gte'] = (float) $params['price_min'];
        }
        if (isset($params['price_max'])) {
            $priceRange['lte'] = (float) $params['price_max'];
        }
        if (!empty($priceRange)) {
            $filter[] = ['range' => ['price' => $priceRange]];
        }

        // Bedrooms / Bathrooms
        if (isset($params['bedrooms'])) {
            $filter[] = ['term' => ['bedrooms' => (int) $params['bedrooms']]];
        }
        if (isset($params['bathrooms'])) {
            $filter[] = ['term' => ['bathrooms' => (int) $params['bathrooms']]];
        }

        // Amenities
        if (!empty($params['amenities'])) {
            foreach ((array) $params['amenities'] as $amenity) {
                $filter[] = ['term' => ['amenities' => $amenity]];
            }
        }

        // Furnished
        if (isset($params['is_furnished'])) {
            $filter[] = ['term' => ['is_furnished' => (bool) $params['is_furnished']]];
        }

        // Geo distance (radius search)
        if (!empty($params['lat']) && !empty($params['lng']) && !empty($params['radius'])) {
            $filter[] = [
                'geo_distance' => [
                    'distance' => $params['radius'] . 'km',
                    'location' => [
                        'lat' => (float) $params['lat'],
                        'lon' => (float) $params['lng'],
                    ],
                ],
            ];
        }

        // City / Sub-city
        if (!empty($params['city'])) {
            $filter[] = ['term' => ['city' => $params['city']]];
        }
        if (!empty($params['sub_city'])) {
            $filter[] = ['term' => ['sub_city' => $params['sub_city']]];
        }

        $page = $params['page'] ?? 1;
        $perPage = min($params['per_page'] ?? 20, 100);

        $sort = [];
        if (!empty($params['sort_by'])) {
            $direction = $params['sort_order'] ?? 'asc';
            if ($params['sort_by'] === 'distance' && !empty($params['lat']) && !empty($params['lng'])) {
                $sort[] = [
                    '_geo_distance' => [
                        'location' => [
                            'lat' => (float) $params['lat'],
                            'lon' => (float) $params['lng'],
                        ],
                        'order' => $direction,
                        'unit' => 'km',
                    ],
                ];
            } else {
                $sort[] = [($params['sort_by'] === 'price' ? 'price' : 'published_at') => ['order' => $direction]];
            }
        } else {
            $sort[] = ['is_featured' => ['order' => 'desc']];
            $sort[] = ['published_at' => ['order' => 'desc']];
        }

        return [
            'from' => ($page - 1) * $perPage,
            'size' => $perPage,
            'query' => [
                'bool' => [
                    'must' => $must,
                    'filter' => $filter,
                ],
            ],
            'sort' => $sort,
            'aggs' => [
                'cities' => ['terms' => ['field' => 'city', 'size' => 20]],
                'property_types' => ['terms' => ['field' => 'property_type', 'size' => 10]],
                'price_stats' => ['stats' => ['field' => 'price']],
                'bedrooms' => ['terms' => ['field' => 'bedrooms', 'size' => 10]],
            ],
            'highlight' => [
                'fields' => [
                    'title' => new \stdClass(),
                    'description' => ['fragment_size' => 150],
                ],
            ],
        ];
    }

    protected function hydrateResults(array $results): \Illuminate\Support\Collection
    {
        $ids = collect($results['hits']['hits'] ?? [])->pluck('_id')->map(fn($id) => (int) $id);

        if ($ids->isEmpty()) {
            return collect();
        }

        $properties = \App\Models\Property::with(['images', 'user'])
            ->whereIn('id', $ids)
            ->get()
            ->keyBy('id');

        // Maintain ES sort order
        return $ids->map(fn($id) => $properties->get($id))->filter();
    }

    protected function fallbackSearch(array $params): JsonResponse
    {
        $query = \App\Models\Property::published();

        if (!empty($params['q'])) {
            $q = '%' . $params['q'] . '%';
            $query->where(function ($qry) use ($q) {
                $qry->where('title', 'like', $q)
                    ->orWhere('description', 'like', $q)
                    ->orWhere('city', 'like', $q);
            });
        }

        if (!empty($params['listing_type'])) {
            $query->where('listing_type', $params['listing_type']);
        }
        if (!empty($params['property_type'])) {
            $query->where('property_type', $params['property_type']);
        }
        if (isset($params['price_min'])) {
            $query->where('price', '>=', $params['price_min']);
        }
        if (isset($params['price_max'])) {
            $query->where('price', '<=', $params['price_max']);
        }
        if (isset($params['bedrooms'])) {
            $query->where('bedrooms', $params['bedrooms']);
        }
        if (isset($params['bathrooms'])) {
            $query->where('bathrooms', $params['bathrooms']);
        }
        if (!empty($params['city'])) {
            $query->where('city', $params['city']);
        }

        $perPage = min($params['per_page'] ?? 20, 100);
        $results = $query->paginate($perPage);

        return response()->json([
            'data' => PropertyResource::collection($results),
            'meta' => [
                'total' => $results->total(),
                'page' => $results->currentPage(),
                'per_page' => $results->perPage(),
            ],
            'fallback' => true,
            'message' => 'Search operating in degraded mode (MySQL fallback).',
        ]);
    }
}
