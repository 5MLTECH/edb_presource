# Use the official PHP image as a base
FROM php:7.4-apache

# Copy the current directory contents into the container at /var/www/html
COPY . /var/www/html

# Enable Apache mod_rewrite and headers modules
RUN a2enmod rewrite headers

# Set up the Apache configuration
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
