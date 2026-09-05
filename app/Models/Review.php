<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    use HasFactory;
    protected $fillable = [
        'booking_id', 'property_id', 'user_id', 'agent_id', 'rating', 'comment',
        'ratings_breakdown', 'is_approved', 'approved_at',
    ];
    protected $casts = [
        'rating' => 'integer', 'ratings_breakdown' => 'array', 'is_approved' => 'boolean', 'approved_at' => 'datetime',
    ];
    public function booking(): BelongsTo { return $this->belongsTo(Booking::class); }
    public function property(): BelongsTo { return $this->belongsTo(Property::class); }
    public function user(): BelongsTo { return $this->belongsTo(User::class); }
    public function scopeApproved($query) { return $query->where('is_approved', true); }
}
