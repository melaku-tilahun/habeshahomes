<?php

namespace App\Services\Notification;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class SmsService
{
    /**
     * Send an SMS notification.
     */
    public function send(string $phone, string $message): bool
    {
        // Normalize phone number (Ethiopian format +251...)
        $phone = $this->normalizePhoneNumber($phone);

        if (empty($phone)) {
            Log::warning("Skipping SMS: Invalid phone number.");
            return false;
        }

        $driver = config('habeshahomes.sms.driver', 'log');

        if ($driver === 'log' || app()->environment('local', 'testing')) {
            Log::info("SMS notification dispatched to {$phone}: {$message}");
            return true;
        }

        try {
            $apiUrl = config('habeshahomes.sms.api_url');
            $apiKey = config('habeshahomes.sms.api_key');

            if (!$apiUrl || !$apiKey) {
                Log::warning("SMS gateway not configured. Message logged instead: {$message}");
                return false;
            }

            $response = Http::withHeaders([
                'Authorization' => "Bearer {$apiKey}",
                'Accept' => 'application/json',
            ])->post($apiUrl, [
                'to' => $phone,
                'message' => $message,
                'sender_id' => config('habeshahomes.sms.sender_id', 'HabeshaHome'),
            ]);

            return $response->successful();
        } catch (\Throwable $e) {
            Log::error("Failed to send SMS to {$phone}: " . $e->getMessage());
            return false;
        }
    }

    protected function normalizePhoneNumber(string $phone): string
    {
        $cleaned = preg_replace('/[^0-9+]/', '', $phone);

        if (str_starts_with($cleaned, '09')) {
            return '+251' . substr($cleaned, 1);
        }

        if (str_starts_with($cleaned, '9') && strlen($cleaned) === 9) {
            return '+251' . $cleaned;
        }

        if (str_starts_with($cleaned, '251')) {
            return '+' . $cleaned;
        }

        return $cleaned;
    }
}
