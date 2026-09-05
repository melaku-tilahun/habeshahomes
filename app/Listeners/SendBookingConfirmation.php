<?php

namespace App\Listeners;

use App\Events\BookingConfirmed;
use App\Mail\BookingConfirmedMail;
use App\Services\Notification\SmsService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendBookingConfirmation implements ShouldQueue
{
    public function __construct(
        protected SmsService $smsService
    ) {}

    public function handle(BookingConfirmed $event): void
    {
        $booking = $event->booking;
        $booking->load(['user', 'property.user']);

        Log::info("Processing notifications for confirmed booking #{$booking->id}");

        // 1. Send Email with attached PDF Invoice
        if ($booking->user?->email) {
            try {
                Mail::to($booking->user->email)->send(new BookingConfirmedMail($booking));
                Log::info("Booking confirmation email sent to {$booking->user->email}");
            } catch (\Throwable $e) {
                Log::error("Failed to send booking confirmation email: " . $e->getMessage());
            }
        }

        // 2. Send SMS Notification
        if ($booking->user?->phone) {
            $smsMessage = "HabeshaHomes: Your booking #{$booking->id} for '{$booking->property->title}' is confirmed! Total: {$booking->total_amount} {$booking->property->currency}.";
            $this->smsService->send($booking->user->phone, $smsMessage);
        }

        // 3. Notify Property Host/Agent
        $host = $booking->property?->user;
        if ($host?->phone) {
            $hostSms = "HabeshaHomes: New confirmed booking #{$booking->id} for '{$booking->property->title}' by {$booking->user->name}.";
            $this->smsService->send($host->phone, $hostSms);
        }
    }
}
