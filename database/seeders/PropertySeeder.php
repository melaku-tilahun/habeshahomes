<?php

namespace Database\Seeders;

use App\Models\Property;
use App\Models\PropertyImage;
use App\Models\User;
use Illuminate\Database\Seeder;

class PropertySeeder extends Seeder
{
    public function run(): void
    {
        $agent = User::where('user_type', 'agent')->first();
        $privateUser = User::where('user_type', 'private')->first();

        $properties = [
            ['user_id' => $agent->id, 'title' => 'Luxury 3BR Apartment in Bole', 'description' => 'Stunning modern apartment near Edna Mall. 24/7 security, backup generator, underground parking.', 'listing_type' => 'rent', 'property_type' => 'apartment', 'price' => 45000, 'price_period' => 'per_month', 'city' => 'Addis Ababa', 'sub_city' => 'Bole', 'address' => 'Bole Road, Near Edna Mall', 'latitude' => 9.0105, 'longitude' => 38.8005, 'bedrooms' => 3, 'bathrooms' => 2, 'square_meters' => 145, 'floor_number' => 4, 'is_furnished' => true, 'amenities' => ['wifi', 'parking', 'generator', 'gym', 'elevator'], 'status' => 'published', 'is_featured' => true, 'published_at' => now()],
            ['user_id' => $agent->id, 'title' => 'Villa for Sale in CMC', 'description' => 'Beautiful 5-bedroom villa with garden in CMC area.', 'listing_type' => 'sale', 'property_type' => 'villa', 'price' => 18500000, 'price_period' => 'total', 'city' => 'Addis Ababa', 'sub_city' => 'Yeka', 'address' => 'CMC Road, Ayat Zone', 'latitude' => 9.0402, 'longitude' => 38.8201, 'bedrooms' => 5, 'bathrooms' => 4, 'square_meters' => 380, 'floor_number' => 2, 'is_furnished' => false, 'amenities' => ['parking', 'garden', 'security', 'servants_quarter'], 'status' => 'published', 'published_at' => now()],
            ['user_id' => $privateUser->id, 'title' => 'Cozy Studio in Hawassa', 'description' => 'Perfect holiday let near Lake Hawassa. Fully furnished with lake view.', 'listing_type' => 'holiday_let', 'property_type' => 'apartment', 'price' => 2500, 'price_period' => 'per_night', 'city' => 'Hawassa', 'address' => 'Lake Hawassa Road', 'latitude' => 7.0520, 'longitude' => 38.4680, 'bedrooms' => 1, 'bathrooms' => 1, 'square_meters' => 55, 'floor_number' => 2, 'is_furnished' => true, 'amenities' => ['wifi', 'lake_view', 'kitchen', 'ac'], 'status' => 'published', 'is_featured' => true, 'published_at' => now()],
            ['user_id' => $agent->id, 'title' => 'Commercial Space in Arada', 'description' => 'Prime commercial space for office or retail in Arada.', 'listing_type' => 'rent', 'property_type' => 'commercial', 'price' => 65000, 'price_period' => 'per_month', 'city' => 'Addis Ababa', 'sub_city' => 'Arada', 'address' => 'Churchill Avenue', 'latitude' => 9.0355, 'longitude' => 38.7510, 'bedrooms' => 0, 'bathrooms' => 2, 'square_meters' => 200, 'floor_number' => 1, 'is_furnished' => false, 'amenities' => ['parking', 'security', 'meeting_rooms'], 'status' => 'published', 'published_at' => now()],
            ['user_id' => $privateUser->id, 'title' => 'Condominium in Addis Ketema', 'description' => 'Newly built condominium, 2 bedrooms, great for small families.', 'listing_type' => 'sale', 'property_type' => 'condominium', 'price' => 3200000, 'price_period' => 'total', 'city' => 'Addis Ababa', 'sub_city' => 'Addis Ketema', 'address' => 'Merkato Area', 'latitude' => 9.0340, 'longitude' => 38.7415, 'bedrooms' => 2, 'bathrooms' => 1, 'square_meters' => 78, 'floor_number' => 5, 'is_furnished' => false, 'amenities' => ['parking', 'elevator'], 'status' => 'published', 'published_at' => now()],
        ];

        foreach ($properties as $data) {
            $property = Property::create($data);
            PropertyImage::create(['property_id' => $property->id, 'original_path' => "properties/{$property->id}/original.jpg", 'thumbnail_path' => "properties/{$property->id}/thumb.jpg", 'medium_path' => "properties/{$property->id}/medium.jpg", 'large_path' => "properties/{$property->id}/large.jpg", 'alt_text' => $property->title, 'is_primary' => true, 'sort_order' => 1]);
        }
    }
}
