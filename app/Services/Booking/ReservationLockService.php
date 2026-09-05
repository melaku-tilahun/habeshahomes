<?php

namespace App\Services\Booking;

use Carbon\Carbon;
use Illuminate\Support\Facades\Redis;

class ReservationLockService
{
    protected int $ttlSeconds = 600; // 10 minutes

    public function __construct()
    {
        $this->ttlSeconds = (int) config('habeshahomes.reservation_lock_minutes', 10) * 60;
    }

    /**
     * Atomically attempt to reserve dates for a property using a Redis Lua script.
     * Returns lock key if successful, null if dates are already locked.
     */
    public function lock(int $propertyId, string $start, string $end, int $userId): ?string
    {
        $lockKey = $this->buildLockKey($propertyId, $start, $end);
        $dates = $this->getDatesInRange($start, $end);

        if (empty($dates)) {
            return null;
        }

        $dateKeys = array_map(fn($date) => "property:{$propertyId}:date:{$date}", $dates);

        $reservationData = json_encode([
            'user_id' => $userId,
            'property_id' => $propertyId,
            'start' => $start,
            'end' => $end,
            'locked_at' => now()->toIso8601String(),
        ]);

        // Atomic Lua script: verifies no dates are locked by another user, then locks all dates atomically
        $lua = <<<'LUA'
local userId = ARGV[1]
local ttl = tonumber(ARGV[2])
local lockKey = ARGV[3]
local reservationData = ARGV[4]

for i, key in ipairs(KEYS) do
    local val = redis.call('GET', key)
    if val and tostring(val) ~= tostring(userId) then
        return 0
    end
end

for i, key in ipairs(KEYS) do
    redis.call('SETEX', key, ttl, userId)
end

redis.call('SETEX', lockKey, ttl, reservationData)
return 1
LUA;

        $args = array_merge($dateKeys, [
            (string) $userId,
            (string) $this->ttlSeconds,
            $lockKey,
            $reservationData,
        ]);

        $result = Redis::eval($lua, count($dateKeys), ...$args);

        return $result === 1 || $result === '1' ? $lockKey : null;
    }

    /**
     * Atomically release a reservation lock and all associated date keys.
     */
    public function release(string $lockKey): void
    {
        $redis = Redis::connection();
        $data = $redis->get($lockKey);

        if ($data) {
            $lock = json_decode($data, true);
            if (is_array($lock) && isset($lock['property_id'], $lock['start'], $lock['end'])) {
                $dates = $this->getDatesInRange($lock['start'], $lock['end']);
                $dateKeys = array_map(fn($d) => "property:{$lock['property_id']}:date:{$d}", $dates);

                $lua = <<<'LUA'
local lockKey = KEYS[1]
redis.call('DEL', lockKey)
for i = 2, #KEYS do
    redis.call('DEL', KEYS[i])
end
return 1
LUA;
                $evalArgs = array_merge([$lockKey], $dateKeys);
                Redis::eval($lua, count($dateKeys) + 1, ...$evalArgs);
                return;
            }
            $redis->del($lockKey);
        }
    }

    /**
     * Extend a lock's TTL atomically.
     */
    public function extend(string $lockKey, int $additionalSeconds = 300): bool
    {
        $redis = Redis::connection();
        $data = $redis->get($lockKey);

        if (!$data) {
            return false;
        }

        $lock = json_decode($data, true);
        if (!is_array($lock) || !isset($lock['property_id'], $lock['start'], $lock['end'])) {
            return false;
        }

        $dates = $this->getDatesInRange($lock['start'], $lock['end']);
        $dateKeys = array_map(fn($d) => "property:{$lock['property_id']}:date:{$d}", $dates);
        $newTtl = $this->ttlSeconds + $additionalSeconds;

        $lua = <<<'LUA'
local ttl = tonumber(ARGV[1])
local lockKey = KEYS[1]
if redis.call('EXISTS', lockKey) == 0 then
    return 0
end
redis.call('EXPIRE', lockKey, ttl)
for i = 2, #KEYS do
    redis.call('EXPIRE', KEYS[i], ttl)
end
return 1
LUA;

        $evalArgs = array_merge([$lockKey], $dateKeys, [(string) $newTtl]);
        $result = Redis::eval($lua, count($dateKeys) + 1, ...$evalArgs);
        return $result === 1 || $result === '1';
    }

    /**
     * Check if dates are locked by another user.
     */
    public function isLockedByAnother(int $propertyId, string $start, string $end, int $userId): bool
    {
        $redis = Redis::connection();
        $dates = $this->getDatesInRange($start, $end);

        foreach ($dates as $date) {
            $existing = $redis->get("property:{$propertyId}:date:{$date}");
            if ($existing && (int) $existing !== $userId) {
                return true;
            }
        }

        return false;
    }

    public function buildLockKey(int $propertyId, string $start, string $end): string
    {
        return "reservation:{$propertyId}:{$start}:{$end}";
    }

    protected function getDatesInRange(string $start, string $end): array
    {
        $dates = [];
        $current = Carbon::parse($start);
        $endDate = Carbon::parse($end);

        while ($current->lt($endDate)) {
            $dates[] = $current->format('Y-m-d');
            $current->addDay();
        }

        return $dates;
    }
}
