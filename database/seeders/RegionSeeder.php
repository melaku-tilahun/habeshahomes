<?php

namespace Database\Seeders;

use App\Models\Region;
use Illuminate\Database\Seeder;

class RegionSeeder extends Seeder
{
    public function run(): void
    {
        $addisSubCities = [
            ['name' => 'Addis Ketema', 'latitude' => 9.0336, 'longitude' => 38.7408],
            ['name' => 'Akaky Kaliti', 'latitude' => 8.9125, 'longitude' => 38.7806],
            ['name' => 'Arada', 'latitude' => 9.0350, 'longitude' => 38.7500],
            ['name' => 'Bole', 'latitude' => 9.0100, 'longitude' => 38.8000],
            ['name' => 'Gullele', 'latitude' => 9.0600, 'longitude' => 38.7300],
            ['name' => 'Kirkos', 'latitude' => 9.0100, 'longitude' => 38.7600],
            ['name' => 'Kolfe Keranio', 'latitude' => 9.0200, 'longitude' => 38.7000],
            ['name' => 'Lideta', 'latitude' => 9.0100, 'longitude' => 38.7300],
            ['name' => 'Nifas Silk-Lafto', 'latitude' => 8.9800, 'longitude' => 38.7500],
            ['name' => 'Yeka', 'latitude' => 9.0400, 'longitude' => 38.8200],
            ['name' => 'Lemi Kura', 'latitude' => 8.9500, 'longitude' => 38.8500],
        ];
        foreach ($addisSubCities as $subCity) {
            Region::create([...$subCity, 'type' => 'sub_city', 'parent_name' => 'Addis Ababa']);
        }

        $cities = [
            ['name' => 'Addis Ababa', 'type' => 'city', 'latitude' => 9.0300, 'longitude' => 38.7400],
            ['name' => 'Dire Dawa', 'type' => 'city', 'latitude' => 9.6000, 'longitude' => 41.8667],
            ['name' => 'Mekelle', 'type' => 'city', 'latitude' => 13.4967, 'longitude' => 39.4753],
            ['name' => 'Gondar', 'type' => 'city', 'latitude' => 12.6000, 'longitude' => 37.4667],
            ['name' => 'Bahir Dar', 'type' => 'city', 'latitude' => 11.5800, 'longitude' => 37.3900],
            ['name' => 'Hawassa', 'type' => 'city', 'latitude' => 7.0500, 'longitude' => 38.4667],
            ['name' => 'Adama', 'type' => 'city', 'latitude' => 8.5400, 'longitude' => 39.2700],
            ['name' => 'Jimma', 'type' => 'city', 'latitude' => 7.6700, 'longitude' => 36.8300],
            ['name' => 'Dessie', 'type' => 'city', 'latitude' => 11.1300, 'longitude' => 39.6300],
            ['name' => 'Jijiga', 'type' => 'city', 'latitude' => 9.3500, 'longitude' => 42.8000],
        ];
        foreach ($cities as $city) { Region::create($city); }

        $oromiaZones = ['West Shewa', 'East Shewa', 'Arsi', 'Bale', 'Borena', 'East Hararghe', 'West Hararghe', 'East Wollega', 'West Wollega', 'Jimma', 'Illubabor', 'Buno Bedelle', 'West Guji', 'East Guji'];
        foreach ($oromiaZones as $zone) { Region::create(['name' => $zone, 'type' => 'zone', 'parent_name' => 'Oromia']); }

        $regions = ['Tigray', 'Amhara', 'Oromia', 'SNNPR', 'Sidama', 'Afar', 'Somali', 'Gambela', 'Benishangul-Gumuz', 'Harari', 'South West Ethiopia', 'Central Ethiopia'];
        foreach ($regions as $region) { Region::create(['name' => $region, 'type' => 'region']); }
    }
}
