<?php

namespace App\Services\Payment;

use App\Models\Transaction;

interface PaymentGatewayInterface
{
    /**
     * Initiate a charge.
     */
    public function charge(float $amount, string $currency, string $reference, array $metadata = []): Transaction;

    /**
     * Verify a callback/webhook payment.
     */
    public function verify(string $reference): Transaction;

    /**
     * Process a refund.
     */
    public function refund(Transaction $transaction, ?float $amount = null): Transaction;

    /**
     * Verify webhook signature.
     */
    public function verifyWebhookSignature(array|string $payload, ?string $signature = null): bool;

    /**
     * Get the gateway name.
     */
    public function getName(): string;
}
