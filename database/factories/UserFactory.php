<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'user_type' => 'guest',
            'phone' => '+251911' . fake()->numerify('######'),
            'remember_token' => Str::random(10),
            'is_verified' => true,
        ];
    }

    public function agent(): static
    {
        return $this->state(fn(array $attributes) => [
            'user_type' => 'agent',
        ]);
    }

    public function admin(): static
    {
        return $this->state(fn(array $attributes) => [
            'user_type' => 'admin',
        ]);
    }
}
