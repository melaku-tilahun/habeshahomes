<?php

namespace App\Http\Controllers\Api;

use App\Events\PropertyCreated;
use App\Events\PropertyUpdated;
use App\Events\PropertyViewed;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
use App\Http\Requests\UploadPropertyImagesRequest;
use App\Http\Resources\PropertyImageResource;
use App\Http\Resources\PropertyResource;
use App\Models\Property;
use App\Models\PropertyImage;
use App\Repositories\PropertyRepository;
use App\Services\Property\PropertyImageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PropertyController extends Controller
{
    public function __construct(
        protected PropertyRepository $propertyRepository,
        protected PropertyImageService $imageService
    ) {}

    /**
     * Display a paginated listing of properties with filters.
     */
    public function index(Request $request): AnonymousResourceCollection
    {
        $query = Property::query()
            ->with(['images', 'user'])
            ->when(!$request->user()?->isAdmin(), fn($q) => $q->published())
            ->when($request->filled('listing_type'), fn($q) => $q->where('listing_type', $request->input('listing_type')))
            ->when($request->filled('property_type'), fn($q) => $q->where('property_type', $request->input('property_type')))
            ->when($request->filled('city'), fn($q) => $q->where('city', $request->input('city')))
            ->when($request->filled('sub_city'), fn($q) => $q->where('sub_city', $request->input('sub_city')))
            ->when($request->filled('min_price'), fn($q) => $q->where('price', '>=', (float) $request->input('min_price')))
            ->when($request->filled('max_price'), fn($q) => $q->where('price', '<=', (float) $request->input('max_price')))
            ->when($request->filled('bedrooms'), fn($q) => $q->where('bedrooms', '>=', (int) $request->input('bedrooms')))
            ->when($request->filled('bathrooms'), fn($q) => $q->where('bathrooms', '>=', (float) $request->input('bathrooms')))
            ->when($request->boolean('is_furnished'), fn($q) => $q->where('is_furnished', true))
            ->when($request->boolean('featured'), fn($q) => $q->featured());

        $sortBy = $request->input('sort_by', 'created_at');
        $sortOrder = $request->input('sort_order', 'desc');

        if (in_array($sortBy, ['price', 'created_at', 'published_at', 'square_meters'])) {
            $query->orderBy($sortBy, $sortOrder === 'asc' ? 'asc' : 'desc');
        } else {
            $query->latest();
        }

        $perPage = min((int) $request->input('per_page', 15), 50);
        $properties = $query->paginate($perPage);

        return PropertyResource::collection($properties);
    }

    /**
     * Display the specified property and track view count.
     */
    public function show(Property $property, Request $request): PropertyResource
    {
        $this->authorize('view', $property);

        $property->load(['images', 'user', 'region', 'reviews.user']);

        // Dispatch property viewed event for analytics
        event(new PropertyViewed($property, $request->ip(), $request->userAgent(), $request->user()?->id));

        return new PropertyResource($property);
    }

    /**
     * Store a newly created property listing.
     */
    public function store(StorePropertyRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $validated['user_id'] = $request->user()->id;
        $validated['status'] = $validated['status'] ?? 'published';

        if ($validated['status'] === 'published') {
            $validated['published_at'] = now();
        }

        $property = $this->propertyRepository->create($validated);
        $property->load(['images', 'user']);

        event(new PropertyCreated($property));

        return (new PropertyResource($property))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Update the specified property.
     */
    public function update(UpdatePropertyRequest $request, Property $property): PropertyResource
    {
        $validated = $request->validated();

        if (isset($validated['status']) && $validated['status'] === 'published' && !$property->published_at) {
            $validated['published_at'] = now();
        }

        $property = $this->propertyRepository->update($property, $validated);
        $property->load(['images', 'user']);

        event(new PropertyUpdated($property));

        return new PropertyResource($property);
    }

    /**
     * Soft delete the specified property.
     */
    public function destroy(Property $property): JsonResponse
    {
        $this->authorize('delete', $property);

        $property->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Property listing deleted successfully.',
        ]);
    }

    /**
     * Upload and attach images to the property.
     */
    public function uploadImages(UploadPropertyImagesRequest $request, Property $property): JsonResponse
    {
        $images = $this->imageService->upload(
            $property,
            $request->file('images'),
            $request->boolean('is_primary')
        );

        event(new PropertyUpdated($property->fresh()));

        return response()->json([
            'status' => 'success',
            'message' => 'Images uploaded successfully.',
            'images' => PropertyImageResource::collection($images),
        ], 201);
    }

    /**
     * Remove an image from the property.
     */
    public function deleteImage(Property $property, PropertyImage $image): JsonResponse
    {
        $this->authorize('uploadImages', $property);

        if ($image->property_id !== $property->id) {
            return response()->json(['message' => 'Image does not belong to this property.'], 404);
        }

        $this->imageService->delete($image);

        return response()->json([
            'status' => 'success',
            'message' => 'Image deleted successfully.',
        ]);
    }
}
