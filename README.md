# HabeshaHomes

**Ethiopia's Premier Dual-Mode Real Estate Platform**

A robust, scalable Laravel 10 application supporting both **Rightmove-style** property listings and **Airbnb-style** short-term holiday rentals, built specifically for the Ethiopian market.

---

## Architecture Overview

| Layer | Technology |
|-------|-----------|
| Web Server | Nginx |
| App Server | PHP 8.2 + OPcache |
| Framework | Laravel 10.x |
| Database | MySQL 8.0 (InnoDB) |
| Cache/Queue | Redis |
| Search | Elasticsearch |
| Message Queue | RabbitMQ (optional) |
| Payment | Chapa / TeleBirr |
| Maps | Leaflet.js (OpenStreetMap) |

---

## Project Structure

```
habeshahomes/
├── app/
│   ├── Console/Commands/         # Artisan commands (reindex, etc.)
│   ├── Events/                   # Domain events
│   ├── Http/
│   │   ├── Controllers/Api/      # API controllers
│   │   ├── Requests/             # Form request validation
│   │   └── Resources/            # API resources
│   ├── Listeners/                # Event listeners
│   ├── Models/                   # Eloquent models
│   ├── Repositories/             # Repository pattern
│   └── Services/
│       ├── Booking/              # Calendar, Pipeline, Locks
│       ├── Elasticsearch/        # Indexing & Search
│       ├── Invoice/              # PDF generation
│       └── Payment/              # Chapa & TeleBirr
├── config/
│   └── habeshahomes.php          # Platform config
├── database/
│   ├── migrations/               # All migrations
│   └── seeders/                  # Ethiopian regions & demo data
├── resources/views/
│   └── invoices/                 # DomPDF invoice template
├── routes/
│   ├── api.php                   # API routes (throttled)
│   └── web.php                   # Web routes
├── scripts/
│   └── deploy.sh                 # Zero-downtime deployment
├── supervisor/
│   └── habeshahomes-worker.conf  # Queue worker config
├── nginx.conf                    # Production Nginx config
├── Dockerfile                    # Container build
└── docker-compose.yml            # Local development stack
```

---

## Quick Start

### 1. Clone & Install

```bash
git clone <repo> habeshahomes
cd habeshahomes
composer install
cp .env.example .env
php artisan key:generate
```

### 2. Environment Setup

Edit `.env`:
```env
DB_DATABASE=habeshahomes
DB_USERNAME=root
DB_PASSWORD=secret

REDIS_HOST=127.0.0.1
ELASTICSEARCH_HOSTS=localhost:9200

CHAPA_SECRET_KEY=your_chapa_secret
```

### 3. Database & Seeders

```bash
php artisan migrate
php artisan db:seed
```

### 4. Elasticsearch Indexing

```bash
php artisan search:reindex --fresh
```

### 5. Start Development Server

```bash
php artisan serve
```

Or use Docker:
```bash
docker-compose up -d
```

---

## API Endpoints

### Search (Public, Throttled: 60/min)
```
GET /api/search?q=villa&city=Addis+Ababa&price_min=10000&price_max=50000&lat=9.03&lng=38.74&radius=5
```

### Availability Check
```
GET /api/properties/{id}/availability?check_in=2024-06-01&check_out=2024-06-05
```

### Booking (Authenticated)
```
POST   /api/properties/{id}/book          # Initiate
POST   /api/bookings/{id}/finalize        # Pay & confirm
POST   /api/bookings/{id}/cancel          # Cancel
GET    /api/bookings                      # My bookings
GET    /api/bookings/{id}                 # Booking details
```

---

## Key Features

### Dual-Mode Listings
- **Rent/Sale**: Rightmove-style enquiries
- **Holiday Let**: Airbnb-style instant booking with calendar

### Availability Calendar
- Redis-based 10-minute reservation locks
- Dynamic pricing per date
- MySQL view `vw_available_properties` for fast lookups

### Elasticsearch Search
- Geo-spatial radius search
- Full-text with Ethiopian text analyzer
- Aggregations for filters
- **Degraded mode**: Auto-fallback to MySQL if ES is down

### Payment Integration
- **Chapa**: Card & bank transfer
- **TeleBirr**: Mobile money
- Idempotency keys prevent double-charging

### Security
- Sanctum API authentication
- Rate limiting on search API
- XSS protection via Blade escaping
- SQL injection prevention via Eloquent

---

## Deployment

### Server Requirements
- Ubuntu 22.04 LTS
- PHP 8.2 + FPM
- MySQL 8.0
- Redis 7+
- Elasticsearch 8.x
- Nginx
- Supervisor

### One-Command Deploy
```bash
bash scripts/deploy.sh
```

This script:
1. Pulls latest code from `develop`
2. Runs `composer install --no-dev`
3. Runs migrations
4. Clears & recaches Laravel config/routes/views/events
5. Restarts PHP-FPM, Queue Workers, and Nginx

### CI/CD
GitHub Actions workflow included in `.github/workflows/deploy.yml`:
- Runs tests on MySQL + Redis services
- Auto-deploys on push to `main` or `develop`

---

## Commands

```bash
# Reindex all properties into Elasticsearch
php artisan search:reindex --fresh

# Check application health
GET /health
```

---

## License

Proprietary - HabeshaHomes Platform
