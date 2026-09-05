<?php

namespace Database\Factories;

use App\Models\Property;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PropertyFactory extends Factory
{
    protected $model = Property::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory()->agent(),
            'title' => fake()->sentence(4),
            'description' => fake()->paragraphs(2, true),
            'listing_type' => fake()->randomElement(['holiday_let', 'rent', 'sale']),
            'property_type' => fake()->randomElement(['apartment', 'house', 'villa', 'condo']),
            'price' => fake()->randomFloat(2, 500, 50000),
            'price_period' => 'month',
            'currency' => 'ETB',
            'latitude' => 9.010793,
            'longitude' => 38.761252,
            'address' => fake()->streetAddress(),
            'city' => 'Addis Ababa',
            'sub_city' => 'Bole',
            'bedrooms' => fake()->numberBetween(1, 5),
            'bathrooms' => fake()->numberBetween(1, 4),
            'square_meters' => fake()->numberBetween(50, 400),
            'is_furnished' => fake()->boolean(),
            'amenities' => ['wifi', 'generator', 'water_tank', 'parking'],
            'status' => 'published',
            'is_featured' => false,
            'published_at' => now(),
        ];
    }

    public function holidayLet(): static
    {
        return $this->state(fn(array $attributes) => [
            'listing_type' => 'holiday_let',
            'price_period' => 'night',
        ]);
    }
}
