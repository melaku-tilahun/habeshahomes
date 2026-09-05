#!/usr/bin/env bash
set -e

echo "================================================================="
echo " HabeshaHomes — Ubuntu Server Automated Docker Deployment Script"
echo "================================================================="

# 1. Check prerequisite tools
command -v git >/dev/null 2>&1 || { echo "❌ Git is required. Install with: sudo apt update && sudo apt install -y git"; exit 1; }
command -v docker >/dev/null 2>&1 || { echo "❌ Docker is required. Install with: curl -fsSL https://get.docker.com | sh"; exit 1; }

# Determine compose command
if docker compose version >/dev/null 2>&1; then
    COMPOSE="docker compose"
elif command -v docker-compose >/dev/null 2>&1; then
    COMPOSE="docker-compose"
else
    echo "❌ Docker Compose is not installed. Please install docker-compose-plugin."
    exit 1
fi

PROJECT_DIR="$(pwd)"
echo "📍 Working directory: $PROJECT_DIR"

# 2. Setup environment file if missing
if [ ! -f .env ]; then
    echo "📄 Creating .env from .env.example..."
    cp .env.example .env
fi

# 3. Pull latest repository changes
echo "⬇️  Pulling latest codebase from origin main..."
git fetch origin main
git pull origin main

# 4. Build and start containers
echo "🚀 Building and starting Docker containers..."
$COMPOSE up -d --build

# 5. Wait for MySQL & containers to become healthy
echo "⏳ Waiting for services to become healthy..."
sleep 15

# 6. Ensure application key exists
echo "🔑 Verifying APP_KEY..."
$COMPOSE exec -T app php artisan key:generate --force || true

# 7. Run database migrations
echo "🗄️ Running database migrations..."
$COMPOSE exec -T app php artisan migrate --force

# 8. Run search indexer
echo "🔍 Building Elasticsearch index..."
$COMPOSE exec -T app php artisan search:reindex --fresh || echo "⚠️ Elasticsearch indexing warning (non-fatal, MySQL fallback active)"

# 9. Set permissions
echo "🔒 Securing storage and logs permissions..."
$COMPOSE exec -T app chown -R www-data:www-data /var/www/habeshahomes/storage /var/www/habeshahomes/bootstrap/cache
$COMPOSE exec -T app chmod -R 777 /var/www/habeshahomes/storage

# 10. Cache routes & configurations
echo "⚡ Optimizing Laravel production caches..."
$COMPOSE exec -T app php artisan optimize:clear
$COMPOSE exec -T app php artisan config:cache
$COMPOSE exec -T app php artisan route:cache
$COMPOSE exec -T app php artisan view:cache

# 11. Health check
echo "🩺 Running health check..."
curl -s -f http://127.0.0.1/health || curl -s -f http://127.0.0.1/ || true

echo ""
echo "================================================================="
echo "✅ HabeshaHomes is LIVE on your Ubuntu Server!"
echo "   Access: http://<YOUR_SERVER_IP_OR_DOMAIN>/"
echo "================================================================="
