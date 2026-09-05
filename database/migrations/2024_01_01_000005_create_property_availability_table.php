<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('property_availability', function (Blueprint $table) {
            $table->id();
            $table->foreignId('property_id')->constrained()->onDelete('cascade');
            $table->date('date');
            $table->boolean('is_available')->default(true);
            $table->decimal('special_price', 15, 2)->nullable();
            $table->string('note')->nullable();
            $table->timestamps();
            $table->unique(['property_id', 'date']);
            $table->index(['property_id', 'date', 'is_available']);
        });
    }
    public function down(): void { Schema::dropIfExists('property_availability'); }
};
