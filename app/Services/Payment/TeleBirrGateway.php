<?php

namespace App\Services\Payment;

use App\Models\Transaction;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class TeleBirrGateway implements PaymentGatewayInterface
{
    protected string $baseUrl;
    protected string $appId;
    protected string $appKey;
    protected string $publicKey;
    protected string $privateKey;

    public function __construct()
    {
        $this->baseUrl = config('habeshahomes.payment.telebirr.base_url', 'https://app.ethiomobilemoney.et:2121');
        $this->appId = (string) config('habeshahomes.payment.telebirr.app_id');
        $this->appKey = (string) config('habeshahomes.payment.telebirr.app_key');
        $this->publicKey = (string) config('habeshahomes.payment.telebirr.public_key');
        $this->privateKey = (string) config('habeshahomes.payment.telebirr.private_key');
    }

    public function charge(float $amount, string $currency, string $reference, array $metadata = []): Transaction
    {
        $idempotencyKey = Str::uuid()->toString();

        $transaction = Transaction::create([
            'booking_id' => $metadata['booking_id'] ?? null,
            'user_id' => $metadata['user_id'] ?? auth()->id(),
            'gateway' => 'telebirr',
            'gateway_reference' => $reference,
            'amount' => $amount,
            'currency' => $currency,
            'type' => 'payment',
            'status' => 'pending',
            'idempotency_key' => $idempotencyKey,
        ]);

        try {
            $nonce = Str::random(32);
            $timestamp = now()->timestamp;

            $body = [
                'appId' => $this->appId,
                'appKey' => $this->appKey,
                'nonce' => $nonce,
                'outTradeNo' => $reference,
                'totalAmount' => number_format($amount, 2, '.', ''),
                'subject' => 'HabeshaHomes Booking',
                'notifyUrl' => route('payment.callback', ['gateway' => 'telebirr']),
                'returnUrl' => $metadata['return_url'] ?? config('app.url'),
                'shortCode' => config('habeshahomes.payment.telebirr.short_code'),
            ];

            // Sign request (simplified - actual TeleBirr signing is more complex)
            $sign = $this->sign($body);
            $body['sign'] = $sign;

            $response = Http::post("{$this->baseUrl}/payment/initiate", $body);

            if ($response->successful()) {
                $data = $response->json();
                $transaction->update([
                    'gateway_transaction_id' => $data['tradeNo'] ?? null,
                    'gateway_response' => $data,
                ]);
            } else {
                $transaction->update([
                    'status' => 'failed',
                    'failure_reason' => $response->body(),
                ]);
            }
        } catch (\Exception $e) {
            Log::error('TeleBirr charge failed: ' . $e->getMessage());
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
            ->where('gateway', 'telebirr')
            ->firstOrFail();

        try {
            $response = Http::post("{$this->baseUrl}/payment/query", [
                'appId' => $this->appId,
                'appKey' => $this->appKey,
                'outTradeNo' => $reference,
            ]);

            if ($response->successful()) {
                $data = $response->json();
                $status = $data['tradeStatus'] ?? 'failed';

                $transaction->update([
                    'status' => in_array($status, ['SUCCESS', 'TRADE_SUCCESS']) ? 'success' : 'failed',
                    'gateway_response' => $data,
                    'paid_at' => in_array($status, ['SUCCESS', 'TRADE_SUCCESS']) ? now() : null,
                ]);
            }
        } catch (\Exception $e) {
            Log::error('TeleBirr verify failed: ' . $e->getMessage());
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
            'gateway' => 'telebirr',
            'gateway_reference' => 'TB-REF-' . ($transaction->gateway_reference ?? $transaction->id) . '-' . time(),
            'amount' => $refundAmount,
            'currency' => $transaction->currency,
            'type' => 'refund',
            'status' => 'pending',
            'idempotency_key' => $idempotencyKey,
        ]);

        try {
            $nonce = Str::random(32);
            $params = [
                'appId' => $this->appId,
                'nonce' => $nonce,
                'outTradeNo' => $transaction->gateway_reference,
                'refundAmount' => number_format($refundAmount, 2, '.', ''),
                'refundReason' => 'Booking cancellation refund',
            ];
            $params['sign'] = $this->sign($params);

            $response = Http::post("{$this->baseUrl}/payment/refund", $params);

            if ($response->successful()) {
                $data = $response->json();
                $status = $data['code'] ?? null;
                $isSuccess = $status === 200 || $status === '200' || ($data['tradeStatus'] ?? null) === 'SUCCESS';

                $refundTransaction->update([
                    'status' => $isSuccess ? 'success' : 'failed',
                    'gateway_response' => $data,
                    'paid_at' => $isSuccess ? now() : null,
                ]);
            } else {
                $refundTransaction->update([
                    'status' => 'failed',
                    'failure_reason' => $response->body(),
                ]);
            }
        } catch (\Exception $e) {
            Log::error('TeleBirr refund failed: ' . $e->getMessage());
            $refundTransaction->update([
                'status' => 'failed',
                'failure_reason' => $e->getMessage(),
            ]);
        }

        return $refundTransaction;
    }

    public function verifyWebhookSignature(array|string $payload, ?string $signature = null): bool
    {
        $data = is_array($payload) ? $payload : json_decode($payload, true);
        if (!is_array($data)) {
            return false;
        }

        $sign = $signature ?? ($data['sign'] ?? null);
        if (!$sign) {
            return false;
        }

        unset($data['sign'], $data['sign_type']);
        $signString = $this->buildSignString($data);

        // If public key is configured, verify with RSA
        if (!empty($this->publicKey)) {
            $formattedKey = $this->formatPublicKey($this->publicKey);
            $pubKeyResource = openssl_pkey_get_public($formattedKey);
            if ($pubKeyResource) {
                $result = openssl_verify($signString, base64_decode($sign), $pubKeyResource, OPENSSL_ALGO_SHA256);
                return $result === 1;
            }
        }

        // Fallback for environments where appKey HMAC is used
        if (!empty($this->appKey)) {
            return hash_equals(hash_hmac('sha256', $signString, $this->appKey), $sign);
        }

        return false;
    }

    public function getName(): string
    {
        return 'telebirr';
    }

    public function sign(array $data): string
    {
        unset($data['sign'], $data['sign_type']);
        $signString = $this->buildSignString($data);

        if (!empty($this->privateKey)) {
            $formattedKey = $this->formatPrivateKey($this->privateKey);
            $priKeyResource = openssl_pkey_get_private($formattedKey);
            if ($priKeyResource) {
                openssl_sign($signString, $signature, $priKeyResource, OPENSSL_ALGO_SHA256);
                return base64_encode($signature);
            }
        }

        return hash_hmac('sha256', $signString, $this->appKey);
    }

    protected function buildSignString(array $data): string
    {
        ksort($data);
        $parts = [];
        foreach ($data as $key => $value) {
            if ($value !== null && $value !== '') {
                $parts[] = "{$key}={$value}";
            }
        }
        return implode('&', $parts);
    }

    protected function formatPublicKey(string $key): string
    {
        if (str_contains($key, 'BEGIN PUBLIC KEY') || str_contains($key, 'BEGIN RSA PUBLIC KEY')) {
            return $key;
        }
        return "-----BEGIN PUBLIC KEY-----\n" . wordwrap(trim($key), 64, "\n", true) . "\n-----END PUBLIC KEY-----";
    }

    protected function formatPrivateKey(string $key): string
    {
        if (str_contains($key, 'BEGIN RSA PRIVATE KEY') || str_contains($key, 'BEGIN PRIVATE KEY')) {
            return $key;
        }
        return "-----BEGIN RSA PRIVATE KEY-----\n" . wordwrap(trim($key), 64, "\n", true) . "\n-----END RSA PRIVATE KEY-----";
    }
}
