<?php

namespace App\Services\Elasticsearch;

use App\Models\Property;
use Illuminate\Support\Facades\Log;

class PropertyIndexer
{
    protected ElasticsearchService $es;
    protected string $index = 'properties';

    public function __construct(ElasticsearchService $es)
    {
        $this->es = $es;
    }

    public function ensureIndex(): void
    {
        $this->es->createIndex($this->index, [
            'properties' => [
                'id' => ['type' => 'long'],
                'title' => [
                    'type' => 'text',
                    'analyzer' => 'ethiopian_text',
                    'fields' => [
                        'keyword' => ['type' => 'keyword'],
                    ],
                ],
                'description' => [
                    'type' => 'text',
                    'analyzer' => 'ethiopian_text',
                ],
                'listing_type' => ['type' => 'keyword'],
                'property_type' => ['type' => 'keyword'],
                'price' => ['type' => 'scaled_float', 'scaling_factor' => 100],
                'price_period' => ['type' => 'keyword'],
                'currency' => ['type' => 'keyword'],
                'location' => ['type' => 'geo_point'],
                'city' => ['type' => 'keyword'],
                'sub_city' => ['type' => 'keyword'],
                'bedrooms' => ['type' => 'byte'],
                'bathrooms' => ['type' => 'byte'],
                'square_meters' => ['type' => 'short'],
                'is_furnished' => ['type' => 'boolean'],
                'amenities' => ['type' => 'keyword'],
                'status' => ['type' => 'keyword'],
                'is_featured' => ['type' => 'boolean'],
                'user_id' => ['type' => 'long'],
                'published_at' => ['type' => 'date'],
                'created_at' => ['type' => 'date'],
            ],
        ]);
    }

    public function index(Property $property): void
    {
        if ($property->status !== 'published') {
            $this->remove($property);
            return;
        }

        try {
            $this->es->indexDocument($this->index, (string) $property->id, $this->toDocument($property));
        } catch (\Exception $e) {
            Log::error('Failed to index property ' . $property->id . ': ' . $e->getMessage());
        }
    }

    public function remove(Property $property): void
    {
        $this->es->deleteDocument($this->index, (string) $property->id);
    }

    public function reindexAll(): void
    {
        $this->es->deleteIndex($this->index);
        $this->ensureIndex();

        Property::published()->chunk(100, function ($properties) {
            foreach ($properties as $property) {
                $this->index($property);
            }
        });
    }

    protected function toDocument(Property $property): array
    {
        return [
            'id' => $property->id,
            'title' => $property->title,
            'description' => $property->description,
            'listing_type' => $property->listing_type,
            'property_type' => $property->property_type,
            'price' => (float) $property->price,
            'price_period' => $property->price_period,
            'currency' => $property->currency,
            'location' => [
                'lat' => (float) $property->latitude,
                'lon' => (float) $property->longitude,
            ],
            'city' => $property->city,
            'sub_city' => $property->sub_city,
            'bedrooms' => (int) $property->bedrooms,
            'bathrooms' => (int) $property->bathrooms,
            'square_meters' => (int) $property->square_meters,
            'is_furnished' => (bool) $property->is_furnished,
            'amenities' => $property->amenities ?? [],
            'status' => $property->status,
            'is_featured' => (bool) $property->is_featured,
            'user_id' => $property->user_id,
            'published_at' => $property->published_at?->toIso8601String(),
            'created_at' => $property->created_at->toIso8601String(),
        ];
    }
}
