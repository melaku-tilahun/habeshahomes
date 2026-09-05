<?php

namespace App\Providers;

use App\Models\Booking;
use App\Models\Property;
use App\Policies\BookingPolicy;
use App\Policies\PropertyPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        Booking::class => BookingPolicy::class,
        Property::class => PropertyPolicy::class,
    ];

    public function boot(): void
    {
        //
    }
}
