<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name', 'email', 'password', 'user_type', 'phone',
        'profile_photo', 'bio', 'is_verified', 'last_active_at',
    ];

    protected $hidden = ['password', 'remember_token'];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'is_verified' => 'boolean',
        'last_active_at' => 'datetime',
    ];

    public function scopeAgents($query) { return $query->where('user_type', 'agent'); }
    public function scopeAdmins($query) { return $query->where('user_type', 'admin'); }
    public function properties(): HasMany { return $this->hasMany(Property::class); }
    public function bookings(): HasMany { return $this->hasMany(Booking::class); }
    public function wishlists(): HasMany { return $this->hasMany(Wishlist::class); }
    public function reviews(): HasMany { return $this->hasMany(Review::class); }
    public function transactions(): HasMany { return $this->hasMany(Transaction::class); }
    public function isAgent(): bool { return $this->user_type === 'agent'; }
    public function isAdmin(): bool { return $this->user_type === 'admin'; }
}
