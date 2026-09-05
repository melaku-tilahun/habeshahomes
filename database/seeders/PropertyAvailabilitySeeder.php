<?php

namespace Database\Seeders;

use App\Models\Property;
use App\Models\PropertyAvailability;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Database\Seeder;

class PropertyAvailabilitySeeder extends Seeder
{
    public function run(): void
    {
        $holidayProperties = Property::where('listing_type', 'holiday_let')->get();
        foreach ($holidayProperties as $property) {
            $start = Carbon::today();
            $end = Carbon::today()->addMonths(6);
            foreach (CarbonPeriod::create($start, '1 day', $end->copy()->subDay()) as $date) {
                $isAvailable = rand(1, 100) > 20;
                PropertyAvailability::create(['property_id' => $property->id, 'date' => $date->format('Y-m-d'), 'is_available' => $isAvailable, 'special_price' => $isAvailable && rand(1, 100) > 80 ? $property->price * 0.85 : null]);
            }
        }
    }
}
