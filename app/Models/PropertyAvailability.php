<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PropertyAvailability extends Model
{
    use HasFactory;
    protected $table = 'property_availability';
    protected $fillable = ['property_id', 'date', 'is_available', 'special_price', 'note'];
    protected $casts = ['date' => 'date', 'is_available' => 'boolean', 'special_price' => 'decimal:2'];
    public function property(): BelongsTo { return $this->belongsTo(Property::class); }
    public function scopeAvailable($query) { return $query->where('is_available', true); }
    public function scopeForDateRange($query, string $start, string $end) { return $query->whereBetween('date', [$start, $end]); }
}
