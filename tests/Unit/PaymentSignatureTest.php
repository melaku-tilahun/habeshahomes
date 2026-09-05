<?php

namespace Tests\Unit;

use App\Services\Payment\ChapaGateway;
use App\Services\Payment\TeleBirrGateway;
use Tests\TestCase;

class PaymentSignatureTest extends TestCase
{
    public function test_chapa_validates_correct_hmac_sha256_signature(): void
    {
        config(['habeshahomes.payment.chapa.webhook_secret' => 'test-chapa-secret']);
        $gateway = new ChapaGateway();

        $payload = json_encode(['event' => 'charge.success', 'tx_ref' => 'HB-101-123']);
        $validSignature = hash_hmac('sha256', $payload, 'test-chapa-secret');
        $invalidSignature = 'invalid-signature-hash';

        $this->assertTrue($gateway->verifyWebhookSignature($payload, $validSignature));
        $this->assertFalse($gateway->verifyWebhookSignature($payload, $invalidSignature));
        $this->assertFalse($gateway->verifyWebhookSignature($payload, null));
    }

    public function test_telebirr_validates_sign_string(): void
    {
        config([
            'habeshahomes.payment.telebirr.app_key' => 'telebirr-secret-app-key',
            'habeshahomes.payment.telebirr.public_key' => '',
            'habeshahomes.payment.telebirr.private_key' => '',
        ]);
        $gateway = new TeleBirrGateway();

        $data = [
            'outTradeNo' => 'HB-202-456',
            'totalAmount' => '1500.00',
            'tradeStatus' => 'SUCCESS',
        ];

        $signature = $gateway->sign($data);
        $this->assertNotEmpty($signature);

        $payload = array_merge($data, ['sign' => $signature]);
        $this->assertTrue($gateway->verifyWebhookSignature($payload));

        $tamperedPayload = array_merge($data, ['totalAmount' => '10.00', 'sign' => $signature]);
        $this->assertFalse($gateway->verifyWebhookSignature($tamperedPayload));
    }
}
