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
        public ?string $ipAddress = null,
        public ?string $userAgent = null,
        public ?int $userId = null,
        public ?string $sessionId = null
    ) {}
}
