<?php

namespace Tests\Unit;

use App\Services\Booking\ReservationLockService;
use Tests\TestCase;

class ReservationLockTest extends TestCase
{
    protected ReservationLockService $lockService;

    protected function setUp(): void
    {
        parent::setUp();
        $this->lockService = new ReservationLockService();
    }

    public function test_build_lock_key_formats_expected_string(): void
    {
        $key = $this->lockService->buildLockKey(42, '2026-10-01', '2026-10-05');
        $this->assertEquals('reservation:42:2026-10-01:2026-10-05', $key);
    }

    public function test_lock_fails_for_invalid_empty_date_range(): void
    {
        $lockKey = $this->lockService->lock(42, '2026-10-05', '2026-10-05', 1);
        $this->assertNull($lockKey);
    }
}
