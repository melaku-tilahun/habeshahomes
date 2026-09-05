<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('property_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('agent_id')->nullable()->constrained('users')->nullOnDelete();
            $table->enum('booking_type', ['enquiry', 'reservation'])->default('enquiry');
            $table->date('check_in')->nullable();
            $table->date('check_out')->nullable();
            $table->enum('status', ['pending', 'reserved', 'payment_pending', 'confirmed', 'cancelled_by_guest', 'cancelled_by_host', 'completed', 'refunded'])->default('pending');
            $table->decimal('total_amount', 15, 2)->nullable();
            $table->decimal('platform_fee', 15, 2)->default(0);
            $table->decimal('host_payout', 15, 2)->nullable();
            $table->unsignedTinyInteger('guest_count')->default(1);
            $table->text('guest_message')->nullable();
            $table->text('host_notes')->nullable();
            $table->timestamp('reserved_until')->nullable();
            $table->timestamp('confirmed_at')->nullable();
            $table->timestamp('cancelled_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->index(['property_id', 'status']);
            $table->index(['user_id', 'status']);
            $table->index(['check_in', 'check_out']);
        });
    }
    public function down(): void { Schema::dropIfExists('bookings'); }
};
