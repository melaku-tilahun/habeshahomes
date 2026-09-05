<?php

namespace App\Http\Middleware;

use App\Services\Payment\PaymentGatewayManager;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class VerifyWebhookSignature
{
    public function __construct(
        protected PaymentGatewayManager $paymentManager
    ) {}

    public function handle(Request $request, Closure $next): Response
    {
        $gatewayName = $request->route('gateway');

        if (!$gatewayName) {
            return response()->json(['message' => 'Payment gateway parameter missing.'], 400);
        }

        try {
            $gateway = $this->paymentManager->driver($gatewayName);
        } catch (\InvalidArgumentException $e) {
            return response()->json(['message' => 'Unsupported payment gateway.'], 400);
        }

        $signature = match ($gatewayName) {
            'chapa' => $request->header('x-chapa-signature') ?? $request->header('Chapa-Signature'),
            'telebirr' => $request->input('sign') ?? $request->header('Signature'),
            default => null,
        };

        // If in local/testing without keys configured, allow bypass only if explicitly enabled
        if (app()->environment('local', 'testing') && config('habeshahomes.payment.bypass_webhook_signature', false)) {
            return $next($request);
        }

        $payload = match ($gatewayName) {
            'chapa' => $request->getContent(),
            default => $request->all(),
        };

        if (!$gateway->verifyWebhookSignature($payload, $signature)) {
            Log::warning("Unauthorized webhook received for gateway: {$gatewayName}", [
                'ip' => $request->ip(),
                'signature' => $signature,
            ]);

            return response()->json(['message' => 'Invalid payment webhook signature.'], 401);
        }

        return $next($request);
    }
}
