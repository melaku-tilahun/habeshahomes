<?php

namespace App\Services\Booking;

use App\Events\BookingConfirmed;
use App\Models\Booking;
use App\Models\Property;
use App\Services\Payment\PaymentGatewayInterface;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class BookingPipeline
{
    protected CalendarService $calendar;
    protected ReservationLockService $lockService;
    protected PaymentGatewayInterface $paymentGateway;

    public function __construct(
        CalendarService $calendar,
        ReservationLockService $lockService,
        PaymentGatewayInterface $paymentGateway
    ) {
        $this->calendar = $calendar;
        $this->lockService = $lockService;
        $this->paymentGateway = $paymentGateway;
    }

    /**
     * Step 1: Initiate a booking (create pending + lock dates).
     */
    public function initiate(Property $property, array $data): Booking
    {
        return DB::transaction(function () use ($property, $data) {
            $userId = auth()->id();
            $start = $data['check_in'];
            $end = $data['check_out'];

            // Verify availability
            if (!$this->calendar->checkAvailability($property->id, $start, $end)) {
                throw new \Exception('Selected dates are not available.');
            }

            // Check Redis locks
            if ($this->lockService->isLockedByAnother($property->id, $start, $end, $userId)) {
                throw new \Exception('Someone else is currently booking these dates. Please try again.');
            }

            // Calculate pricing
            $totalAmount = $property->listing_type === 'holiday_let'
                ? $this->calendar->calculatePrice($property->id, $start, $end, (float) $property->price)
                : (float) $property->price;

            $platformFee = $totalAmount * 0.05; // 5% platform fee
            $hostPayout = $totalAmount - $platformFee;

            // Create booking
            $booking = Booking::create([
                'property_id' => $property->id,
                'user_id' => $userId,
                'agent_id' => $property->user_id,
                'booking_type' => $property->listing_type === 'holiday_let' ? 'reservation' : 'enquiry',
                'check_in' => $start,
                'check_out' => $end,
                'status' => 'pending',
                'total_amount' => $totalAmount,
                'platform_fee' => $platformFee,
                'host_payout' => $hostPayout,
                'guest_count' => $data['guest_count'] ?? 1,
                'guest_message' => $data['guest_message'] ?? null,
            ]);

            // Lock dates in Redis for holiday lets
            if ($property->listing_type === 'holiday_let') {
                $lockKey = $this->lockService->lock($property->id, $start, $end, $userId);
                if (!$lockKey) {
                    throw new \Exception('Unable to lock dates. Please try again.');
                }

                $booking->update([
                    'status' => 'reserved',
                    'reserved_until' => now()->addMinutes(10),
                ]);
            }

            return $booking;
        });
    }

    /**
     * Step 2: Process payment and finalize booking.
     */
    public function finalize(Booking $booking, array $paymentData): Booking
    {
        return DB::transaction(function () use ($booking, $paymentData) {
            if ($booking->status !== 'reserved' && $booking->status !== 'pending') {
                throw new \Exception('Booking cannot be finalized. Current status: ' . $booking->status);
            }

            // Process payment
            $transaction = $this->paymentGateway->charge(
                amount: $booking->total_amount,
                currency: $booking->property->currency,
                reference: 'HB-' . $booking->id . '-' . time(),
                metadata: [
                    'booking_id' => $booking->id,
                    'property_id' => $booking->property_id,
                    'user_id' => $booking->user_id,
                ]
            );

            if (!$transaction->isSuccessful()) {
                $booking->update(['status' => 'payment_pending']);
                throw new \Exception('Payment failed: ' . $transaction->failure_reason);
            }

            // Block dates permanently
            if ($booking->property->listing_type === 'holiday_let') {
                $this->calendar->blockDates(
                    $booking->property_id,
                    $booking->check_in->format('Y-m-d'),
                    $booking->check_out->format('Y-m-d'),
                    'Booking #' . $booking->id
                );
            }

            // Release Redis lock
            if ($booking->check_in && $booking->check_out) {
                $lockKey = $this->lockService->buildLockKey(
                    $booking->property_id,
                    $booking->check_in->format('Y-m-d'),
                    $booking->check_out->format('Y-m-d')
                );
                $this->lockService->release($lockKey);
            }

            // Confirm booking
            $booking->update([
                'status' => 'confirmed',
                'confirmed_at' => now(),
            ]);

            // Fire event
            event(new BookingConfirmed($booking));

            return $booking;
        });
    }

    /**
     * Cancel a booking and unblock dates if applicable.
     */
    public function cancel(Booking $booking, string $reason = 'user_request'): Booking
    {
        return DB::transaction(function () use ($booking, $reason) {
            if (!in_array($booking->status, ['pending', 'reserved', 'confirmed'])) {
                throw new \Exception('Booking cannot be cancelled.');
            }

            $isGuest = auth()->id() === $booking->user_id;
            $status = $isGuest ? 'cancelled_by_guest' : 'cancelled_by_host';

            // Unblock dates for holiday lets
            if ($booking->property->listing_type === 'holiday_let' && $booking->check_in && $booking->check_out) {
                $this->calendar->unblockDates(
                    $booking->property_id,
                    $booking->check_in->format('Y-m-d'),
                    $booking->check_out->format('Y-m-d')
                );
            }

            // Release any Redis locks
            if ($booking->check_in && $booking->check_out) {
                $lockKey = $this->lockService->buildLockKey(
                    $booking->property_id,
                    $booking->check_in->format('Y-m-d'),
                    $booking->check_out->format('Y-m-d')
                );
                $this->lockService->release($lockKey);
            }

            $booking->update([
                'status' => $status,
                'cancelled_at' => now(),
                'host_notes' => $reason,
            ]);

            return $booking;
        });
    }

    /**
     * Mark booking as completed (after check-out).
     */
    public function complete(Booking $booking): Booking
    {
        if ($booking->status !== 'confirmed') {
            throw new \Exception('Only confirmed bookings can be completed.');
        }

        $booking->update(['status' => 'completed']);
        return $booking;
    }
}
