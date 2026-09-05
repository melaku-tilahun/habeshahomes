<?php

namespace App\Listeners;

use App\Events\PropertyViewed;
use App\Models\PropertyView;

class RecordPropertyView
{
    public function handle(PropertyViewed $event): void
    {
        // Deduplicate: one view per session per property per hour
        $recentView = PropertyView::where('property_id', $event->property->id)
            ->where('session_id', $event->sessionId)
            ->where('viewed_at', '>=', now()->subHour())
            ->exists();

        if (!$recentView) {
            PropertyView::create([
                'property_id' => $event->property->id,
                'user_id' => $event->userId,
                'ip_address' => $event->ipAddress,
                'user_agent' => $event->userAgent,
                'session_id' => $event->sessionId,
                'viewed_at' => now(),
            ]);
        }
    }
}
