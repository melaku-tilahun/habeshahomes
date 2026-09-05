<?php

namespace App\Services\Payment;

use App\Models\Transaction;
use Illuminate\Support\Manager;

class PaymentGatewayManager extends Manager implements PaymentGatewayInterface
{
    public function getDefaultDriver(): string
    {
        return $this->config->get('habeshahomes.payment.default', 'chapa');
    }

    public function createChapaDriver(): PaymentGatewayInterface
    {
        return $this->container->make(ChapaGateway::class);
    }

    public function createTelebirrDriver(): PaymentGatewayInterface
    {
        return $this->container->make(TeleBirrGateway::class);
    }

    public function charge(float $amount, string $currency, string $reference, array $metadata = []): Transaction
    {
        return $this->driver()->charge($amount, $currency, $reference, $metadata);
    }

    public function verify(string $reference): Transaction
    {
        return $this->driver()->verify($reference);
    }

    public function refund(Transaction $transaction, ?float $amount = null): Transaction
    {
        return $this->driver()->refund($transaction, $amount);
    }

    public function verifyWebhookSignature(array|string $payload, ?string $signature = null): bool
    {
        return $this->driver()->verifyWebhookSignature($payload, $signature);
    }

    public function getName(): string
    {
        return $this->driver()->getName();
    }
}
