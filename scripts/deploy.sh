#!/bin/bash
set -e

PROJECT_DIR="/var/www/habeshahomes"
BRANCH="${DEPLOY_BRANCH:-main}"
PHP_VERSION="8.2"

echo "========================================"
echo "HabeshaHomes Production Deployment"
echo "========================================"

cd "$PROJECT_DIR"

# Put application into maintenance mode
php artisan down --render="errors::503" --retry=60 || true

# 1. Pull latest code
echo "[1/8] Pulling latest code from branch: $BRANCH"
git fetch origin "$BRANCH"
git checkout "$BRANCH"
git pull origin "$BRANCH"

# 2. Install dependencies (optimized for production)
echo "[2/8] Installing Composer dependencies..."
composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader

# 3. Run migrations
echo "[3/8] Running database migrations..."
php artisan migrate --force

# 4. Storage link
php artisan storage:link || true

# 5. Clear and cache configs
echo "[5/8] Optimizing Laravel caches..."
php artisan optimize:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

# 6. Restart PHP-FPM
echo "[6/8] Reloading PHP-FPM..."
sudo systemctl reload php${PHP_VERSION}-fpm || sudo systemctl restart php${PHP_VERSION}-fpm

# 7. Restart Queue Workers & Scheduler
echo "[7/8] Restarting Queue Workers..."
sudo supervisorctl restart habeshahomes-worker:*
sudo supervisorctl restart habeshahomes-scheduler:* || true

# 8. Reload Nginx
echo "[8/8] Reloading Nginx..."
sudo nginx -t && sudo systemctl reload nginx

# Bring application back up
php artisan up

echo "========================================"
echo "Deployment completed successfully!"
echo "========================================"
