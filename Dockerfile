FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive
ENV PHP_VERSION=8.2

# Install system dependencies
RUN apt-get update && apt-get install -y \
    nginx \
    php${PHP_VERSION}-fpm \
    php${PHP_VERSION}-cli \
    php${PHP_VERSION}-common \
    php${PHP_VERSION}-mysql \
    php${PHP_VERSION}-zip \
    php${PHP_VERSION}-gd \
    php${PHP_VERSION}-mbstring \
    php${PHP_VERSION}-curl \
    php${PHP_VERSION}-xml \
    php${PHP_VERSION}-bcmath \
    php${PHP_VERSION}-json \
    php${PHP_VERSION}-intl \
    php${PHP_VERSION}-redis \
    php${PHP_VERSION}-opcache \
    supervisor \
    curl \
    git \
    unzip \
    openssl \
    mysql-client \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configure PHP-FPM to use Unix socket matching Nginx FastCGI configuration
RUN mkdir -p /var/run/php && chown -R www-data:www-data /var/run/php \
    && sed -i 's/^;pid = /pid = /' /etc/php/${PHP_VERSION}/fpm/php-fpm.conf \
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
RUN chown -R www-data:www-data /var/www/habeshahomes \
    && chmod -R 775 /var/www/habeshahomes/storage \
    && chmod -R 775 /var/www/habeshahomes/bootstrap/cache

# Install dependencies
RUN composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader

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
