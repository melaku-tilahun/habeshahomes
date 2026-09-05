<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::statement("
            CREATE VIEW vw_available_properties AS
            SELECT 
                p.id AS property_id, p.title, p.listing_type, p.price, p.price_period,
                p.city, p.sub_city, p.bedrooms, p.bathrooms, p.latitude, p.longitude,
                p.status, p.is_featured,
                MIN(pa.date) AS next_available_date,
                COUNT(pa.id) AS available_days_count
            FROM properties p
            LEFT JOIN property_availability pa ON p.id = pa.property_id AND pa.is_available = true AND pa.date >= CURDATE()
            WHERE p.status = 'published' AND p.deleted_at IS NULL
            GROUP BY p.id, p.title, p.listing_type, p.price, p.price_period, p.city, p.sub_city, p.bedrooms, p.bathrooms, p.latitude, p.longitude, p.status, p.is_featured
        ");
    }
    public function down(): void { DB::statement('DROP VIEW IF EXISTS vw_available_properties'); }
};
