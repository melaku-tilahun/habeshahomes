<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('booking_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->enum('gateway', ['chapa', 'telebirr', 'cash', 'bank_transfer'])->default('chapa');
            $table->string('gateway_transaction_id')->nullable()->index();
            $table->string('gateway_reference')->nullable();
            $table->decimal('amount', 15, 2);
            $table->string('currency', 3)->default('ETB');
            $table->enum('type', ['payment', 'refund', 'payout'])->default('payment');
            $table->enum('status', ['pending', 'success', 'failed', 'cancelled'])->default('pending');
            $table->string('idempotency_key')->unique();
            $table->unsignedTinyInteger('retry_count')->default(0);
            $table->json('gateway_response')->nullable();
            $table->timestamp('paid_at')->nullable();
            $table->text('failure_reason')->nullable();
            $table->timestamps();
            $table->index(['booking_id', 'status']);
            $table->index(['gateway', 'gateway_transaction_id']);
        });
    }
    public function down(): void { Schema::dropIfExists('transactions'); }
};
