FROM debian:bookworm-slim

ENV DEBIAN_FRONTEND=noninteractive
ENV PHP_VERSION=8.2

# Install system dependencies & PHP 8.2 natively from Debian Bookworm repositories
RUN apt-get update && apt-get install -y \
    nginx \
    php8.2-fpm \
    php8.2-cli \
    php8.2-common \
    php8.2-mysql \
    php8.2-zip \
    php8.2-gd \
    php8.2-mbstring \
    php8.2-curl \
    php8.2-xml \
    php8.2-bcmath \
    php8.2-intl \
    php-redis \
    php8.2-opcache \
    supervisor \
    curl \
    git \
    unzip \
    openssl \
    default-mysql-client \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configure PHP-FPM to use Unix socket matching Nginx FastCGI configuration
RUN mkdir -p /var/run/php && chown -R www-data:www-data /var/run/php \
    && sed -i 's|^listen = .*|listen = /var/run/php/php8.2-fpm.sock|' /etc/php/${PHP_VERSION}/fpm/pool.d/www.conf \
    && sed -i 's/^;listen.owner = .*/listen.owner = www-data/' /etc/php/${PHP_VERSION}/fpm/pool.d/www.conf \
    && sed -i 's/^;listen.group = .*/listen.group = www-data/' /etc/php/${PHP_VERSION}/fpm/pool.d/www.conf \
    && sed -i 's/^;listen.mode = .*/listen.mode = 0660/' /etc/php/${PHP_VERSION}/fpm/pool.d/www.conf \
    && sed -i 's/^user = .*/user = www-data/' /etc/php/${PHP_VERSION}/fpm/pool.d/www.conf \
    && sed -i 's/^group = .*/group = www-data/' /etc/php/${PHP_VERSION}/fpm/pool.d/www.conf

# Production OPcache settings
RUN echo "opcache.enable=1" >> /etc/php/${PHP_VERSION}/fpm/conf.d/10-opcache.ini \
    && echo "opcache.memory_consumption=256" >> /etc/php/${PHP_VERSION}/fpm/conf.d/10-opcache.ini \
    && echo "opcache.interned_strings_buffer=16" >> /etc/php/${PHP_VERSION}/fpm/conf.d/10-opcache.ini \
    && echo "opcache.max_accelerated_files=20000" >> /etc/php/${PHP_VERSION}/fpm/conf.d/10-opcache.ini \
    && echo "opcache.revalidate_freq=60" >> /etc/php/${PHP_VERSION}/fpm/conf.d/10-opcache.ini \
    && echo "opcache.validate_timestamps=0" >> /etc/php/${PHP_VERSION}/fpm/conf.d/10-opcache.ini

# Generate default self-signed fallback SSL certificate (overridable via host mounts)
RUN mkdir -p /etc/ssl/certs /etc/ssl/private \
    && openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
       -keyout /etc/ssl/private/habeshahomes.key \
       -out /etc/ssl/certs/habeshahomes.crt \
       -subj "/C=ET/ST=Addis Ababa/L=Addis Ababa/O=HabeshaHomes/CN=habeshahomes.et"

# Setup app directory
WORKDIR /var/www/habeshahomes
COPY . /var/www/habeshahomes

RUN mkdir -p /var/www/habeshahomes/storage/app/public \
             /var/www/habeshahomes/storage/framework/cache/data \
             /var/www/habeshahomes/storage/framework/sessions \
             /var/www/habeshahomes/storage/framework/views \
             /var/www/habeshahomes/storage/logs \
             /var/www/habeshahomes/bootstrap/cache \
    && chown -R www-data:www-data /var/www/habeshahomes \
    && chmod -R 775 /var/www/habeshahomes/storage \
    && chmod -R 775 /var/www/habeshahomes/bootstrap/cache

# Install PHP dependencies (force HTTP 1.1 via curlrc to prevent codeload stream drops and enable source fallback)
ENV COMPOSER_ALLOW_SUPERUSER=1
ENV COMPOSER_PROCESS_TIMEOUT=2000
RUN echo "http1.1" >> /root/.curlrc \
    && composer install --no-dev --no-interaction --optimize-autoloader --no-security-blocking

# Nginx config
COPY docker/nginx/rate_limits.conf /etc/nginx/conf.d/rate_limits.conf
COPY nginx.conf /etc/nginx/sites-available/default
RUN rm -f /etc/nginx/sites-enabled/default && ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default

# Supervisor config
COPY supervisor/habeshahomes-worker.conf /etc/supervisor/conf.d/habeshahomes-worker.conf

# Start script
COPY docker/start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80 443

CMD ["/start.sh"]
