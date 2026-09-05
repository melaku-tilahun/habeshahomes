<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookingRequest;
use App\Models\Booking;
use App\Models\Property;
use App\Services\Booking\BookingPipeline;
use App\Services\Booking\CalendarService;
use App\Services\Invoice\InvoiceGenerator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    protected BookingPipeline $pipeline;
    protected CalendarService $calendar;
    protected InvoiceGenerator $invoice;

    public function __construct(
        BookingPipeline $pipeline,
        CalendarService $calendar,
        InvoiceGenerator $invoice
    ) {
        $this->pipeline = $pipeline;
        $this->calendar = $calendar;
        $this->invoice = $invoice;
    }

    /**
     * Check availability for a property.
     */
    public function availability(Request $request, Property $property): JsonResponse
    {
        $request->validate([
            'check_in' => ['required', 'date', 'after_or_equal:today'],
            'check_out' => ['required', 'date', 'after:check_in'],
            'month' => ['nullable', 'date_format:Y-m'],
        ]);

        $isAvailable = $this->calendar->checkAvailability(
            $property->id,
            $request->check_in,
            $request->check_out
        );

        $calendar = $request->month
            ? $this->calendar->getCalendar($property->id, $request->month)
            : null;

        $price = $property->listing_type === 'holiday_let'
            ? $this->calendar->calculatePrice($property->id, $request->check_in, $request->check_out, (float) $property->price)
            : (float) $property->price;

        return response()->json([
            'available' => $isAvailable,
            'calendar' => $calendar,
            'estimated_price' => $price,
            'currency' => $property->currency,
        ]);
    }

    /**
     * Initiate a booking.
     */
    public function store(BookingRequest $request, Property $property): JsonResponse
    {
        try {
            $booking = $this->pipeline->initiate($property, $request->validated());

            return response()->json([
                'message' => 'Booking initiated successfully.',
                'booking' => [
                    'id' => $booking->id,
                    'status' => $booking->status,
                    'total_amount' => (float) $booking->total_amount,
                    'platform_fee' => (float) $booking->platform_fee,
                    'reserved_until' => $booking->reserved_until?->toIso8601String(),
                ],
                'payment_url' => $this->getPaymentUrl($booking),
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    /**
     * Finalize a booking after payment.
     */
    public function finalize(Request $request, Booking $booking): JsonResponse
    {
        $this->authorize('finalize', $booking);

        try {
            $booking = $this->pipeline->finalize($booking, $request->all());

            // Generate invoice
            $invoiceUrl = $this->invoice->generate($booking);

            return response()->json([
                'message' => 'Booking confirmed.',
                'booking' => [
                    'id' => $booking->id,
                    'status' => $booking->status,
                    'confirmed_at' => $booking->confirmed_at?->toIso8601String(),
                ],
                'invoice_url' => $invoiceUrl,
            ]);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    /**
     * Cancel a booking.
     */
    public function cancel(Request $request, Booking $booking): JsonResponse
    {
        $this->authorize('cancel', $booking);

        try {
            $booking = $this->pipeline->cancel($booking, $request->input('reason', 'user_request'));

            return response()->json([
                'message' => 'Booking cancelled.',
                'booking' => [
                    'id' => $booking->id,
                    'status' => $booking->status,
                    'cancelled_at' => $booking->cancelled_at?->toIso8601String(),
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    /**
     * List user's bookings.
     */
    public function index(Request $request): JsonResponse
    {
        $bookings = Booking::with(['property.images', 'property.user'])
            ->where('user_id', auth()->id())
            ->when($request->status, fn($q, $status) => $q->where('status', $status))
            ->orderByDesc('created_at')
            ->paginate(15);

        return response()->json($bookings);
    }

    /**
     * Show booking details.
     */
    public function show(Booking $booking): JsonResponse
    {
        $this->authorize('view', $booking);

        $booking->load(['property.images', 'property.user', 'transactions', 'review']);

        return response()->json([
            'booking' => $booking,
            'can_review' => $booking->canBeReviewed(),
        ]);
    }

    protected function getPaymentUrl(Booking $booking): ?string
    {
        // Return payment gateway checkout URL
        $transaction = $booking->transactions()->first();
        if ($transaction && $transaction->gateway === 'chapa') {
            return $transaction->gateway_response['data']['checkout_url'] ?? null;
        }
        return null;
    }
}
