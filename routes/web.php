<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// Health check for load balancers
Route::get('/health', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toIso8601String(),
        'version' => config('app.version', '1.0.0'),
    ]);
})->name('health');

// Master SPA Frontend Catch-All
Route::get('/{any?}', function () {
    return view('app');
})->where('any', '^(?!api|health|storage).*$')->name('spa');
