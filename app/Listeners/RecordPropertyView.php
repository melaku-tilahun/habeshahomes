<?php

namespace App\Listeners;

use App\Events\PropertyViewed;
use App\Models\PropertyView;

class RecordPropertyView
{
    public function handle(PropertyViewed $event): void
    {
        // Deduplicate: one view per IP/session per property per hour
        $sessionId = $event->sessionId ?: md5(($event->ipAddress ?? '') . ($event->userAgent ?? ''));

        $recentView = PropertyView::where('property_id', $event->property->id)
            ->where(function ($q) use ($sessionId, $event) {
                $q->where('session_id', $sessionId);
                if ($event->ipAddress) {
                    $q->orWhere('ip_address', $event->ipAddress);
                }
            })
            ->where('viewed_at', '>=', now()->subHour())
            ->exists();

        if (!$recentView) {
            PropertyView::create([
                'property_id' => $event->property->id,
                'user_id' => $event->userId,
                'ip_address' => $event->ipAddress,
                'user_agent' => $event->userAgent ? substr($event->userAgent, 0, 255) : null,
                'session_id' => substr($sessionId, 0, 255),
                'viewed_at' => now(),
            ]);
        }
    }
}
