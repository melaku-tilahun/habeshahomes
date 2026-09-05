<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Region extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'type', 'parent_name', 'latitude', 'longitude'];
    protected $casts = ['latitude' => 'decimal:8', 'longitude' => 'decimal:8'];
    public function properties(): HasMany { return $this->hasMany(Property::class); }
    public function scopeCities($query) { return $query->where('type', 'city'); }
    public function scopeSubCities($query) { return $query->where('type', 'sub_city'); }
}
