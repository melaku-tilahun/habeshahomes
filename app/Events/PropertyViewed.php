<?php

namespace App\Events;

use App\Models\Property;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class PropertyViewed
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Property $property,
        public ?int $userId,
        public string $ipAddress,
        public string $userAgent,
        public ?string $sessionId
    ) {}
}
