<?php

namespace App\Providers;

use App\Events\BookingConfirmed;
use App\Events\PropertyCreated;
use App\Events\PropertyUpdated;
use App\Events\PropertyViewed;
use App\Listeners\IndexPropertyToElasticsearch;
use App\Listeners\RecordPropertyView;
use App\Listeners\SendBookingConfirmation;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        PropertyCreated::class => [
            IndexPropertyToElasticsearch::class,
        ],
        PropertyUpdated::class => [
            IndexPropertyToElasticsearch::class,
        ],
        PropertyViewed::class => [
            RecordPropertyView::class,
        ],
        BookingConfirmed::class => [
            SendBookingConfirmation::class,
        ],
    ];

    public function boot(): void
    {
        //
    }

    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
