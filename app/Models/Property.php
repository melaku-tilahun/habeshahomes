<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Property extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id', 'region_id', 'title', 'description', 'listing_type', 'property_type',
        'price', 'price_period', 'currency', 'latitude', 'longitude', 'address', 'city',
        'sub_city', 'bedrooms', 'bathrooms', 'square_meters', 'floor_number',
        'is_furnished', 'amenities', 'status', 'is_featured', 'published_at',
    ];

    protected $casts = [
        'price' => 'decimal:2', 'latitude' => 'decimal:8', 'longitude' => 'decimal:8',
        'is_furnished' => 'boolean', 'is_featured' => 'boolean', 'amenities' => 'array',
        'published_at' => 'datetime',
    ];

    public function scopePublished($query) { return $query->where('status', 'published'); }
    public function scopeForRent($query) { return $query->where('listing_type', 'rent'); }
    public function scopeForSale($query) { return $query->where('listing_type', 'sale'); }
    public function scopeHolidayLet($query) { return $query->where('listing_type', 'holiday_let'); }
    public function scopeFeatured($query) { return $query->where('is_featured', true); }
    public function scopeInCity($query, string $city) { return $query->where('city', $city); }
    public function scopePriceBetween($query, float $min, float $max) { return $query->whereBetween('price', [$min, $max]); }

    public function user(): BelongsTo { return $this->belongsTo(User::class); }
    public function region(): BelongsTo { return $this->belongsTo(Region::class); }
    public function images(): HasMany { return $this->hasMany(PropertyImage::class)->orderBy('sort_order'); }
    public function primaryImage(): ?PropertyImage {
        if ($this->relationLoaded('images')) {
            return $this->images->firstWhere('is_primary', true) ?? $this->images->first();
        }
        return $this->images()->where('is_primary', true)->first() ?? $this->images()->first();
    }
    public function availability(): HasMany { return $this->hasMany(PropertyAvailability::class); }
    public function bookings(): HasMany { return $this->hasMany(Booking::class); }
    public function reviews(): HasMany { return $this->hasMany(Review::class); }
    public function wishlists(): HasMany { return $this->hasMany(Wishlist::class); }
    public function views(): HasMany { return $this->hasMany(PropertyView::class); }
}
