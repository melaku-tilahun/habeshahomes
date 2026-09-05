<?php

namespace App\Repositories;

use App\Models\Booking;
use Illuminate\Pagination\LengthAwarePaginator;

class BookingRepository
{
    public function getHostBookings(int $hostId, array $filters = []): LengthAwarePaginator
    {
        return Booking::whereHas('property', fn($q) => $q->where('user_id', $hostId))
            ->when($filters['status'] ?? null, fn($q, $status) => $q->where('status', $status))
            ->with(['property', 'user'])
            ->latest()
            ->paginate(15);
    }

    public function getUpcomingForProperty(int $propertyId): \Illuminate\Support\Collection
    {
        return Booking::where('property_id', $propertyId)
            ->whereIn('status', ['confirmed', 'reserved'])
            ->where('check_in', '>=', today())
            ->orderBy('check_in')
            ->get();
    }

    public function getRevenueStats(int $hostId, string $period = 'month'): array
    {
        return Booking::whereHas('property', fn($q) => $q->where('user_id', $hostId))
            ->where('status', 'confirmed')
            ->where('confirmed_at', '>=', now()->subMonths(12))
            ->selectRaw("DATE_FORMAT(confirmed_at, '%Y-%m') as period, SUM(host_payout) as revenue, COUNT(*) as bookings")
            ->groupBy('period')
            ->orderBy('period')
            ->get()
            ->toArray();
    }
}
