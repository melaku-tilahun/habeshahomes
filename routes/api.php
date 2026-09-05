<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\PropertyController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Middleware\VerifyWebhookSignature;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Public Authentication Routes
Route::prefix('auth')->middleware(['throttle:10,1'])->group(function () {
    Route::post('/register', [AuthController::class, 'register'])->name('auth.register');
    Route::post('/login', [AuthController::class, 'login'])->name('auth.login');
});

// Public Discovery & Inventory Routes (Throttled)
Route::middleware(['throttle:60,1'])->group(function () {
    // Search
    Route::get('/search', SearchController::class)->name('api.search');

    // Properties (Public browsing)
    Route::get('/properties', [PropertyController::class, 'index'])->name('api.properties.index');
    Route::get('/properties/{property}', [PropertyController::class, 'show'])->name('api.properties.show');
    Route::get('/properties/{property}/availability', [BookingController::class, 'availability'])
        ->name('api.properties.availability');
});

// Authenticated Routes (Requires Sanctum Token)
Route::middleware(['auth:sanctum'])->group(function () {
    // Auth Profile & Token Management
    Route::prefix('auth')->group(function () {
        Route::get('/me', [AuthController::class, 'me'])->name('auth.me');
        Route::put('/profile', [AuthController::class, 'updateProfile'])->name('auth.profile.update');
        Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout');
    });

    // Property Management (Agents & Hosts)
    Route::post('/properties', [PropertyController::class, 'store'])->name('api.properties.store');
    Route::put('/properties/{property}', [PropertyController::class, 'update'])->name('api.properties.update');
    Route::delete('/properties/{property}', [PropertyController::class, 'destroy'])->name('api.properties.destroy');
    Route::post('/properties/{property}/images', [PropertyController::class, 'uploadImages'])->name('api.properties.images.upload');
    Route::delete('/properties/{property}/images/{image}', [PropertyController::class, 'deleteImage'])->name('api.properties.images.delete');

    // Bookings
    Route::get('/bookings', [BookingController::class, 'index'])->name('api.bookings.index');
    Route::get('/bookings/{booking}', [BookingController::class, 'show'])->name('api.bookings.show');
    Route::post('/properties/{property}/book', [BookingController::class, 'store'])->name('api.bookings.store');
    Route::post('/bookings/{booking}/finalize', [BookingController::class, 'finalize'])->name('api.bookings.finalize');
    Route::post('/bookings/{booking}/cancel', [BookingController::class, 'cancel'])->name('api.bookings.cancel');
});

// Payment Gateways Webhooks & Callbacks (Secured with cryptographic signature verification)
Route::post('/payments/callback/{gateway}', [PaymentController::class, 'callback'])
    ->name('payment.callback')
    ->middleware(['throttle:120,1', VerifyWebhookSignature::class]);
