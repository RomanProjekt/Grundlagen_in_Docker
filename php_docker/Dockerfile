# Datei: hello-world-php/Dockerfile (docbuc/hello-world-php)
# Set the baseImage to use for subsequent instructions. FROM must be the first instruction in a Dockerfile
FROM php:7-apache

#Set the environment variable key to the value value
ENV TZ="Europe/Amsterdam"

# Copy files or folders from source to the dest path in the image's filesystem.
# COPY hello.txt /absolute/path
# COPY hello.txt relative/to/workdir or ./relative/to/workdir
COPY index.php /var/www/html