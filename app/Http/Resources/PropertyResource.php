<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PropertyResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => \Illuminate\Support\Str::slug($this->title) . '-' . $this->id,
            'description' => $this->description,
            'listing_type' => $this->listing_type,
            'property_type' => $this->property_type,
            'price' => (float) $this->price,
            'price_period' => $this->price_period,
            'currency' => $this->currency,
            'location' => [
                'lat' => (float) $this->latitude,
                'lng' => (float) $this->longitude,
                'address' => $this->address,
                'city' => $this->city,
                'sub_city' => $this->sub_city,
            ],
            'features' => [
                'bedrooms' => $this->bedrooms,
                'bathrooms' => $this->bathrooms,
                'square_meters' => $this->square_meters,
                'floor_number' => $this->floor_number,
                'is_furnished' => (bool) $this->is_furnished,
                'amenities' => $this->amenities ?? [],
            ],
            'media' => [
                'primary' => $this->primaryImage()?->large_path,
                'thumbnail' => $this->primaryImage()?->thumbnail_path,
                'images' => PropertyImageResource::collection($this->whenLoaded('images')),
            ],
            'host' => [
                'id' => $this->user_id,
                'name' => $this->user?->name,
                'type' => $this->user?->user_type,
                'is_verified' => (bool) $this->user?->is_verified,
            ],
            'status' => $this->status,
            'is_featured' => (bool) $this->is_featured,
            'published_at' => $this->published_at?->toIso8601String(),
        ];
    }
}
