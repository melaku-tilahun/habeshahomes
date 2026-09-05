<?php

namespace App\Services\Invoice;

use App\Models\Booking;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;

class InvoiceGenerator
{
    /**
     * Generate a PDF invoice for a booking.
     */
    public function generate(Booking $booking): string
    {
        $booking->load(['property', 'user', 'transactions']);

        $data = [
            'invoice_number' => 'INV-' . str_pad($booking->id, 8, '0', STR_PAD_LEFT),
            'invoice_date' => now()->format('F d, Y'),
            'booking' => $booking,
            'property' => $booking->property,
            'guest' => $booking->user,
            'host' => $booking->property->user,
            'payment' => $booking->transactions()->successful()->first(),
            'line_items' => $this->buildLineItems($booking),
            'totals' => [
                'subtotal' => $booking->total_amount - $booking->platform_fee,
                'platform_fee' => $booking->platform_fee,
                'total' => $booking->total_amount,
            ],
        ];

        $pdf = Pdf::loadView('invoices.booking', $data);
        $pdf->setPaper('a4');

        $filename = "invoices/{$booking->id}_" . time() . ".pdf";
        Storage::disk('public')->put($filename, $pdf->output());

        return Storage::disk('public')->url($filename);
    }

    protected function buildLineItems(Booking $booking): array
    {
        $items = [];

        if ($booking->property->listing_type === 'holiday_let' && $booking->check_in && $booking->check_out) {
            $nights = $booking->check_in->diffInDays($booking->check_out);
            $items[] = [
                'description' => "Accommodation: {$booking->property->title}",
                'details' => "{$nights} nights, {$booking->guest_count} guests",
                'amount' => $booking->total_amount - $booking->platform_fee,
            ];
        } else {
            $items[] = [
                'description' => "Property: {$booking->property->title}",
                'details' => ucfirst($booking->property->listing_type) . ' - ' . $booking->property->city,
                'amount' => $booking->total_amount - $booking->platform_fee,
            ];
        }

        $items[] = [
            'description' => 'Platform Service Fee',
            'details' => '5% booking fee',
            'amount' => $booking->platform_fee,
        ];

        return $items;
    }
}
