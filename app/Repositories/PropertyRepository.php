<?php

namespace App\Repositories;

use App\Models\Property;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

class PropertyRepository
{
    public function findPublished(int $id): ?Property
    {
        return Property::published()->with(['images', 'user', 'reviews'])->find($id);
    }

    public function getFeatured(int $limit = 6): Collection
    {
        return Property::published()
            ->featured()
            ->with('primaryImage')
            ->latest('published_at')
            ->limit($limit)
            ->get();
    }

    public function getByUser(int $userId, array $filters = []): LengthAwarePaginator
    {
        return Property::where('user_id', $userId)
            ->when($filters['status'] ?? null, fn($q, $status) => $q->where('status', $status))
            ->withCount('bookings')
            ->withSum('bookings as total_revenue', 'host_payout')
            ->latest()
            ->paginate(15);
    }

    public function create(array $data): Property
    {
        return Property::create($data);
    }

    public function update(Property $property, array $data): Property
    {
        $property->update($data);
        return $property->fresh();
    }
}
