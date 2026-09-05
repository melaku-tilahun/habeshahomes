<?php

namespace App\Policies;

use App\Models\Booking;
use App\Models\User;

class BookingPolicy
{
    public function view(User $user, Booking $booking): bool
    {
        return $user->id === $booking->user_id || $user->id === $booking->agent_id || $user->isAdmin();
    }

    public function finalize(User $user, Booking $booking): bool
    {
        return $user->id === $booking->user_id && in_array($booking->status, ['pending', 'reserved']);
    }

    public function cancel(User $user, Booking $booking): bool
    {
        return ($user->id === $booking->user_id || $user->id === $booking->agent_id || $user->isAdmin())
            && in_array($booking->status, ['pending', 'reserved', 'confirmed']);
    }
}
