<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Booking\BookingPipeline;
use App\Services\Payment\PaymentGatewayManager;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PaymentController extends Controller
{
    public function __construct(
        protected PaymentGatewayManager $paymentManager,
        protected BookingPipeline $bookingPipeline
    ) {}

    public function callback(Request $request, string $gateway): JsonResponse
    {
        Log::info("Payment callback received from {$gateway}", [
            'gateway' => $gateway,
            'ip' => $request->ip(),
            'params' => $request->except(['sign']),
        ]);

        try {
            $gatewayInstance = $this->paymentManager->driver($gateway);
            $reference = $request->input('tx_ref') ?? $request->input('outTradeNo');

            if (!$reference) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Missing transaction reference.',
                ], 422);
            }

            $transaction = $gatewayInstance->verify($reference);

            if ($transaction->isSuccessful()) {
                $booking = $transaction->booking;

                if ($booking) {
                    // Idempotent: already confirmed
                    if ($booking->status === 'confirmed') {
                        return response()->json([
                            'status' => 'ok',
                            'message' => 'Booking is already confirmed.',
                            'transaction_id' => $transaction->id,
                        ]);
                    }

                    if (in_array($booking->status, ['reserved', 'pending', 'payment_pending'])) {
                        $this->bookingPipeline->finalize($booking, $request->all());
                    }
                }
            }

            return response()->json([
                'status' => 'ok',
                'transaction_id' => $transaction->id,
                'payment_status' => $transaction->status,
            ]);
        } catch (\Exception $e) {
            Log::error("Payment callback processing failed: " . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 400);
        }
    }
}
