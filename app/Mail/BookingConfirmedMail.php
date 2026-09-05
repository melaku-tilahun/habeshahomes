<?php

namespace App\Mail;

use App\Models\Booking;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class BookingConfirmedMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public function __construct(
        public Booking $booking
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "Your Booking #{$this->booking->id} is Confirmed — HabeshaHomes",
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.booking_confirmed',
            with: [
                'booking' => $this->booking,
                'property' => $this->booking->property,
                'guest' => $this->booking->user,
            ],
        );
    }

    public function attachments(): array
    {
        try {
            $data = [
                'invoice_number' => 'INV-' . str_pad($this->booking->id, 8, '0', STR_PAD_LEFT),
                'invoice_date' => now()->format('F d, Y'),
                'booking' => $this->booking,
                'property' => $this->booking->property,
                'guest' => $this->booking->user,
                'host' => $this->booking->property->user,
                'payment' => $this->booking->transactions()->first(),
                'line_items' => [
                    [
                        'description' => "Booking: {$this->booking->property->title}",
                        'details' => "Check-in: {$this->booking->check_in?->format('Y-m-d')} to {$this->booking->check_out?->format('Y-m-d')}",
                        'amount' => $this->booking->total_amount - $this->booking->platform_fee,
                    ],
                    [
                        'description' => 'Platform Fee',
                        'details' => 'Service & processing',
                        'amount' => $this->booking->platform_fee,
                    ],
                ],
                'totals' => [
                    'subtotal' => $this->booking->total_amount - $this->booking->platform_fee,
                    'platform_fee' => $this->booking->platform_fee,
                    'total' => $this->booking->total_amount,
                ],
            ];

            $pdf = Pdf::loadView('invoices.booking', $data)->setPaper('a4');

            return [
                Attachment::fromData(fn() => $pdf->output(), "Invoice-Booking-{$this->booking->id}.pdf")
                    ->withMime('application/pdf'),
            ];
        } catch (\Throwable) {
            return [];
        }
    }
}
