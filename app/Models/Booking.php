<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Booking extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'property_id', 'user_id', 'agent_id', 'booking_type', 'check_in', 'check_out',
        'status', 'total_amount', 'platform_fee', 'host_payout', 'guest_count',
        'guest_message', 'host_notes', 'reserved_until', 'confirmed_at', 'cancelled_at',
    ];

    protected $casts = [
        'check_in' => 'date', 'check_out' => 'date', 'total_amount' => 'decimal:2',
        'platform_fee' => 'decimal:2', 'host_payout' => 'decimal:2',
        'reserved_until' => 'datetime', 'confirmed_at' => 'datetime', 'cancelled_at' => 'datetime',
    ];

    public function scopeActive($query) { return $query->whereIn('status', ['pending', 'reserved', 'payment_pending', 'confirmed']); }
    public function scopeConfirmed($query) { return $query->where('status', 'confirmed'); }
    public function scopeCompleted($query) { return $query->where('status', 'completed'); }
    public function property(): BelongsTo { return $this->belongsTo(Property::class); }
    public function user(): BelongsTo { return $this->belongsTo(User::class); }
    public function agent(): BelongsTo { return $this->belongsTo(User::class, 'agent_id'); }
    public function transactions(): HasMany { return $this->hasMany(Transaction::class); }
    public function review(): HasOne { return $this->hasOne(Review::class); }
    public function isCompleted(): bool { return $this->status === 'completed'; }
    public function canBeReviewed(): bool { return $this->status === 'completed' && is_null($this->review); }
}
