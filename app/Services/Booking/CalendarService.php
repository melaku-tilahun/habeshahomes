<?php

namespace App\Services\Booking;

use App\Models\Property;
use App\Models\PropertyAvailability;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CalendarService
{
    /**
     * Check if a date range is available for a property.
     */
    public function checkAvailability(int $propertyId, string $start, string $end): bool
    {
        $startDate = Carbon::parse($start);
        $endDate = Carbon::parse($end);

        // Ensure end is after start
        if ($endDate->lte($startDate)) {
            return false;
        }

        // Get all dates in range
        $dates = [];
        foreach (CarbonPeriod::create($startDate, '1 day', $endDate->copy()->subDay()) as $date) {
            $dates[] = $date->format('Y-m-d');
        }

        if (empty($dates)) {
            return false;
        }

        // Check if all dates exist and are available
        $availableCount = PropertyAvailability::where('property_id', $propertyId)
            ->whereIn('date', $dates)
            ->where('is_available', true)
            ->count();

        return $availableCount === count($dates);
    }

    /**
     * Block a date range for a property.
     */
    public function blockDates(int $propertyId, string $start, string $end, ?string $note = null): void
    {
        $startDate = Carbon::parse($start);
        $endDate = Carbon::parse($end);

        DB::transaction(function () use ($propertyId, $startDate, $endDate, $note) {
            foreach (CarbonPeriod::create($startDate, '1 day', $endDate->copy()->subDay()) as $date) {
                PropertyAvailability::updateOrCreate(
                    [
                        'property_id' => $propertyId,
                        'date' => $date->format('Y-m-d'),
                    ],
                    [
                        'is_available' => false,
                        'note' => $note,
                    ]
                );
            }
        });
    }

    /**
     * Unblock (make available) a date range.
     */
    public function unblockDates(int $propertyId, string $start, string $end): void
    {
        $startDate = Carbon::parse($start);
        $endDate = Carbon::parse($end);

        PropertyAvailability::where('property_id', $propertyId)
            ->whereBetween('date', [$startDate->format('Y-m-d'), $endDate->copy()->subDay()->format('Y-m-d')])
            ->update(['is_available' => true, 'note' => null]);
    }

    /**
     * Get calendar data for a property (for UI rendering).
     */
    public function getCalendar(int $propertyId, string $month): array
    {
        $start = Carbon::parse($month)->startOfMonth();
        $end = $start->copy()->endOfMonth();

        $availability = PropertyAvailability::where('property_id', $propertyId)
            ->whereBetween('date', [$start->format('Y-m-d'), $end->format('Y-m-d')])
            ->get()
            ->keyBy('date');

        $days = [];
        foreach (CarbonPeriod::create($start, '1 day', $end) as $date) {
            $dateStr = $date->format('Y-m-d');
            $day = $availability->get($dateStr);

            $days[] = [
                'date' => $dateStr,
                'is_available' => $day?->is_available ?? true,
                'special_price' => $day?->special_price ? (float) $day->special_price : null,
                'is_past' => $date->isPast(),
                'is_today' => $date->isToday(),
            ];
        }

        return [
            'month' => $start->format('F Y'),
            'days' => $days,
        ];
    }

    /**
     * Calculate total price for a date range (considering special prices).
     */
    public function calculatePrice(int $propertyId, string $start, string $end, float $basePrice): float
    {
        $startDate = Carbon::parse($start);
        $endDate = Carbon::parse($end);
        $total = 0;

        $availability = PropertyAvailability::where('property_id', $propertyId)
            ->whereBetween('date', [
                $startDate->format('Y-m-d'),
                $endDate->copy()->subDay()->format('Y-m-d')
            ])
            ->get()
            ->keyBy(fn($item) => $item->date->format('Y-m-d'));

        foreach (CarbonPeriod::create($startDate, '1 day', $endDate->copy()->subDay()) as $date) {
            $dateStr = $date->format('Y-m-d');
            $day = $availability->get($dateStr);
            $total += $day?->special_price ?? $basePrice;
        }

        return $total;
    }
}
