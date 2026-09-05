<?php

namespace Tests\Feature;

use App\Models\Booking;
use App\Models\Property;
use App\Models\Transaction;
use App\Models\User;
use App\Services\Payment\PaymentGatewayManager;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Redis;
use Tests\TestCase;

class BookingPipelineTest extends TestCase
{
    use RefreshDatabase;

    public function test_guest_can_initiate_booking(): void
    {
        Redis::shouldReceive('connection')->andReturnSelf();
        Redis::shouldReceive('get')->andReturnNull();
        Redis::shouldReceive('eval')->andReturn(1);

        $guest = User::factory()->create(['user_type' => 'guest']);
        $host = User::factory()->agent()->create();
        $property = Property::factory()->holidayLet()->create([
            'user_id' => $host->id,
            'price' => 2000,
        ]);

        $checkIn = now()->addDays(5)->format('Y-m-d');
        $checkOut = now()->addDays(8)->format('Y-m-d');

        $response = $this->actingAs($guest, 'sanctum')
            ->postJson(route('api.bookings.store', $property), [
                'check_in' => $checkIn,
                'check_out' => $checkOut,
                'guest_count' => 2,
            ]);

        $response->assertStatus(201)
            ->assertJsonStructure([
                'status',
                'booking' => [
                    'id',
                    'property_id',
                    'status',
                    'total_amount',
                ],
            ]);

        $this->assertDatabaseHas('bookings', [
            'property_id' => $property->id,
            'user_id' => $guest->id,
            'status' => 'reserved',
        ]);
    }

    public function test_payment_webhook_rejects_unauthorized_signature(): void
    {
        $response = $this->postJson(route('payment.callback', ['gateway' => 'chapa']), [
            'tx_ref' => 'HB-999-fake',
            'status' => 'success',
        ]);

        $response->assertStatus(401);
    }

    public function test_payment_webhook_with_valid_signature_is_accepted(): void
    {
        config([
            'habeshahomes.payment.chapa.webhook_secret' => 'webhook-secret-key',
        ]);

        $guest = User::factory()->create();
        $property = Property::factory()->create();
        $booking = Booking::create([
            'property_id' => $property->id,
            'user_id' => $guest->id,
            'agent_id' => $property->user_id,
            'booking_type' => 'reservation',
            'check_in' => now()->addDays(2),
            'check_out' => now()->addDays(5),
            'status' => 'reserved',
            'total_amount' => 5000,
            'platform_fee' => 250,
            'host_payout' => 4750,
            'guest_count' => 1,
        ]);

        $txRef = 'HB-' . $booking->id . '-test';
        $transaction = Transaction::create([
            'booking_id' => $booking->id,
            'user_id' => $guest->id,
            'gateway' => 'chapa',
            'gateway_reference' => $txRef,
            'amount' => 5000,
            'currency' => 'ETB',
            'type' => 'payment',
            'status' => 'pending',
            'idempotency_key' => 'idemp-123',
        ]);

        $mockGateway = \Mockery::mock(\App\Services\Payment\PaymentGatewayInterface::class);
        $mockGateway->shouldReceive('verifyWebhookSignature')->andReturn(true);
        $mockGateway->shouldReceive('verify')->with($txRef)->andReturnUsing(function () use ($transaction) {
            $transaction->update(['status' => 'success', 'paid_at' => now()]);
            return $transaction;
        });

        $manager = $this->app->make(PaymentGatewayManager::class);
        $manager->extend('chapa', fn() => $mockGateway);

        $payload = json_encode(['tx_ref' => $txRef, 'status' => 'success']);
        $signature = hash_hmac('sha256', $payload, 'webhook-secret-key');

        $response = $this->withHeader('x-chapa-signature', $signature)
            ->call('POST', route('payment.callback', ['gateway' => 'chapa']), [], [], [], [
                'CONTENT_TYPE' => 'application/json',
            ], $payload);

        $response->assertStatus(200)
            ->assertJsonPath('status', 'ok');

        $this->assertDatabaseHas('transactions', [
            'id' => $transaction->id,
            'status' => 'success',
        ]);
    }
}
