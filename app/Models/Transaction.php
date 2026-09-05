<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaction extends Model
{
    use HasFactory;
    protected $fillable = [
        'booking_id', 'user_id', 'gateway', 'gateway_transaction_id', 'gateway_reference',
        'amount', 'currency', 'type', 'status', 'idempotency_key', 'retry_count',
        'gateway_response', 'paid_at', 'failure_reason',
    ];
    protected $casts = [
        'amount' => 'decimal:2', 'gateway_response' => 'array', 'paid_at' => 'datetime', 'retry_count' => 'integer',
    ];
    public function booking(): BelongsTo { return $this->belongsTo(Booking::class); }
    public function user(): BelongsTo { return $this->belongsTo(User::class); }
    public function scopeSuccessful($query) { return $query->where('status', 'success'); }
    public function isSuccessful(): bool { return $this->status === 'success'; }
}
