#!/bin/bash
set -e

echo "==> Starting HabeshaHomes production container..."

# Create runtime directories
mkdir -p /var/run/php /var/www/habeshahomes/storage/logs /var/www/habeshahomes/storage/framework/sessions /var/www/habeshahomes/storage/framework/views /var/www/habeshahomes/storage/framework/cache
chown -R www-data:www-data /var/run/php /var/www/habeshahomes/storage /var/www/habeshahomes/bootstrap/cache
chmod -R 775 /var/www/habeshahomes/storage /var/www/habeshahomes/bootstrap/cache

# Setup environment if not mounted
if [ ! -f /var/www/habeshahomes/.env ]; then
    echo "==> No .env detected. Copying from .env.example..."
    cp /var/www/habeshahomes/.env.example /var/www/habeshahomes/.env
fi

# Ensure application key is set
cd /var/www/habeshahomes
if ! grep -q "APP_KEY=base64:" .env; then
    echo "==> Generating application key..."
    php artisan key:generate --force || true
fi

# Storage symlink
php artisan storage:link --force || true

# Start PHP-FPM
echo "==> Starting PHP-FPM..."
service php8.2-fpm start

# Start Nginx
echo "==> Starting Nginx..."
service nginx start

# Start Supervisor
echo "==> Starting Supervisor (Queue workers & Scheduler)..."
exec /usr/bin/supervisord -n -c /etc/supervisor/supervisord.conf
