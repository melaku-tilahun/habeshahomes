<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('region_id')->nullable()->constrained()->nullOnDelete();
            $table->string('title');
            $table->text('description');
            $table->enum('listing_type', ['rent', 'sale', 'holiday_let'])->default('rent');
            $table->enum('property_type', ['apartment', 'villa', 'condominium', 'house', 'commercial', 'land'])->default('apartment');
            $table->decimal('price', 15, 2);
            $table->enum('price_period', ['per_month', 'per_night', 'total'])->default('per_month');
            $table->string('currency', 3)->default('ETB');
            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 10, 8)->nullable();
            $table->string('address');
            $table->string('city');
            $table->string('sub_city')->nullable();
            $table->unsignedTinyInteger('bedrooms')->default(0);
            $table->unsignedTinyInteger('bathrooms')->default(0);
            $table->unsignedSmallInteger('square_meters')->nullable();
            $table->unsignedTinyInteger('floor_number')->nullable();
            $table->boolean('is_furnished')->default(false);
            $table->json('amenities')->nullable();
            $table->enum('status', ['draft', 'published', 'under_review', 'archived'])->default('draft');
            $table->boolean('is_featured')->default(false);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->index(['listing_type', 'status', 'published_at']);
            $table->index(['price', 'listing_type']);
            $table->index(['bedrooms', 'bathrooms']);
            $table->index(['city', 'sub_city']);
        });
    }
    public function down(): void { Schema::dropIfExists('properties'); }
};
