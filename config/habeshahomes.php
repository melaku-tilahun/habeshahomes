<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Elasticsearch Configuration
    |--------------------------------------------------------------------------
    */
    'elasticsearch' => [
        'hosts' => explode(',', env('ELASTICSEARCH_HOSTS', 'localhost:9200')),
        'index' => 'properties',
    ],

    /*
    |--------------------------------------------------------------------------
    | Payment Gateway Configuration
    |--------------------------------------------------------------------------
    */
    'payment' => [
        'default' => env('PAYMENT_GATEWAY', 'chapa'),

        'chapa' => [
            'base_url' => env('CHAPA_BASE_URL', 'https://api.chapa.co/v1'),
            'secret_key' => env('CHAPA_SECRET_KEY'),
            'public_key' => env('CHAPA_PUBLIC_KEY'),
            'webhook_secret' => env('CHAPA_WEBHOOK_SECRET', env('CHAPA_SECRET_KEY')),
        ],

        'telebirr' => [
            'base_url' => env('TELEBIRR_BASE_URL', 'https://app.ethiomobilemoney.et:2121'),
            'app_id' => env('TELEBIRR_APP_ID'),
            'app_key' => env('TELEBIRR_APP_KEY'),
            'public_key' => env('TELEBIRR_PUBLIC_KEY'),
            'private_key' => env('TELEBIRR_PRIVATE_KEY'),
            'short_code' => env('TELEBIRR_SHORT_CODE'),
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Platform Settings
    |--------------------------------------------------------------------------
    */
    'platform_fee_percent' => 5.0,
    'reservation_lock_minutes' => 10,
    'search_cache_minutes' => 5,
    'max_search_results' => 100,
];
