<?php

namespace App\Services\Payment;

use App\Models\Transaction;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class ChapaGateway implements PaymentGatewayInterface
{
    protected string $baseUrl;
    protected string $secretKey;
    protected string $webhookSecret;

    public function __construct()
    {
        $this->baseUrl = config('habeshahomes.payment.chapa.base_url', 'https://api.chapa.co/v1');
        $this->secretKey = (string) config('habeshahomes.payment.chapa.secret_key');
        $this->webhookSecret = (string) config('habeshahomes.payment.chapa.webhook_secret', $this->secretKey);
    }

    public function charge(float $amount, string $currency, string $reference, array $metadata = []): Transaction
    {
        $idempotencyKey = Str::uuid()->toString();

        $transaction = Transaction::create([
            'booking_id' => $metadata['booking_id'] ?? null,
            'user_id' => $metadata['user_id'] ?? auth()->id(),
            'gateway' => 'chapa',
            'gateway_reference' => $reference,
            'amount' => $amount,
            'currency' => $currency,
            'type' => 'payment',
            'status' => 'pending',
            'idempotency_key' => $idempotencyKey,
        ]);

        try {
            $response = Http::withToken($this->secretKey)
                ->post("{$this->baseUrl}/transaction/initialize", [
                    'amount' => number_format($amount, 2, '.', ''),
                    'currency' => $currency,
                    'tx_ref' => $reference,
                    'callback_url' => route('payment.callback', ['gateway' => 'chapa']),
                    'return_url' => $metadata['return_url'] ?? config('app.url'),
                    'customization' => [
                        'title' => 'HabeshaHomes Booking',
                        'description' => 'Property booking payment',
                    ],
                    'meta' => $metadata,
                ]);

            if ($response->successful()) {
                $data = $response->json();
                $transaction->update([
                    'gateway_transaction_id' => $data['data']['tx_ref'] ?? null,
                    'gateway_response' => $data,
                ]);
            } else {
                $transaction->update([
                    'status' => 'failed',
                    'failure_reason' => $response->body(),
                ]);
            }
        } catch (\Exception $e) {
            Log::error('Chapa charge failed: ' . $e->getMessage());
            $transaction->update([
                'status' => 'failed',
                'failure_reason' => $e->getMessage(),
            ]);
        }

        return $transaction;
    }

    public function verify(string $reference): Transaction
    {
        $transaction = Transaction::where('gateway_reference', $reference)
            ->where('gateway', 'chapa')
            ->firstOrFail();

        try {
            $response = Http::withToken($this->secretKey)
                ->get("{$this->baseUrl}/transaction/verify/{$reference}");

            if ($response->successful()) {
                $data = $response->json();
                $status = $data['data']['status'] ?? 'failed';

                $transaction->update([
                    'status' => $status === 'success' ? 'success' : 'failed',
                    'gateway_response' => $data,
                    'paid_at' => $status === 'success' ? now() : null,
                ]);
            }
        } catch (\Exception $e) {
            Log::error('Chapa verify failed: ' . $e->getMessage());
        }

        return $transaction;
    }

    public function refund(Transaction $transaction, ?float $amount = null): Transaction
    {
        $refundAmount = $amount ?? $transaction->amount;
        $idempotencyKey = Str::uuid()->toString();

        $refundTransaction = Transaction::create([
            'booking_id' => $transaction->booking_id,
            'user_id' => $transaction->user_id,
            'gateway' => 'chapa',
            'gateway_reference' => 'REF-' . ($transaction->gateway_reference ?? $transaction->id) . '-' . time(),
            'amount' => $refundAmount,
            'currency' => $transaction->currency,
            'type' => 'refund',
            'status' => 'pending',
            'idempotency_key' => $idempotencyKey,
        ]);

        try {
            $response = Http::withToken($this->secretKey)
                ->post("{$this->baseUrl}/refund", [
                    'trx_ref' => $transaction->gateway_reference,
                    'amount' => number_format($refundAmount, 2, '.', ''),
                    'reason' => 'HabeshaHomes booking cancellation refund',
                ]);

            if ($response->successful()) {
                $data = $response->json();
                $refundTransaction->update([
                    'status' => 'success',
                    'gateway_response' => $data,
                    'paid_at' => now(),
                ]);
            } else {
                $refundTransaction->update([
                    'status' => 'failed',
                    'failure_reason' => $response->body(),
                ]);
            }
        } catch (\Exception $e) {
            Log::error('Chapa refund failed: ' . $e->getMessage());
            $refundTransaction->update([
                'status' => 'failed',
                'failure_reason' => $e->getMessage(),
            ]);
        }

        return $refundTransaction;
    }

    public function verifyWebhookSignature(array|string $payload, ?string $signature = null): bool
    {
        if (empty($signature) || empty($this->webhookSecret)) {
            return false;
        }

        $content = is_string($payload) ? $payload : json_encode($payload, JSON_UNESCAPED_SLASHES);
        $expectedSignature = hash_hmac('sha256', $content, $this->webhookSecret);

        return hash_equals($expectedSignature, $signature);
    }

    public function getName(): string
    {
        return 'chapa';
    }
}
