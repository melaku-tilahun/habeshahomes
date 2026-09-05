<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create(['name' => 'Habesha Admin', 'email' => 'admin@habeshahomes.et', 'password' => Hash::make('password'), 'user_type' => 'admin', 'phone' => '+251911000001', 'is_verified' => true]);
        User::create(['name' => 'Selam Real Estate', 'email' => 'agent@habeshahomes.et', 'password' => Hash::make('password'), 'user_type' => 'agent', 'phone' => '+251911000002', 'bio' => 'Leading real estate agency in Addis Ababa.', 'is_verified' => true]);
        $users = [
            ['name' => 'Abebe Kebede', 'email' => 'abebe@example.com', 'phone' => '+251911000003'],
            ['name' => 'Tigist Haile', 'email' => 'tigist@example.com', 'phone' => '+251911000004'],
            ['name' => 'Dawit Mengistu', 'email' => 'dawit@example.com', 'phone' => '+251911000005'],
        ];
        foreach ($users as $user) { User::create([...$user, 'password' => Hash::make('password'), 'user_type' => 'private']); }
    }
}
