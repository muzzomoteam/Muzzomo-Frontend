#!/bin/sh

echo "Booting muzzomo-frontend\n----------------------------------------------"

cd ..

# echo "Deleting node_modules directories"
# rm -rf node_modules

echo "Deleting dist directories"
rm -rf dist

echo "Installing node_modules"
npm install

echo "Stopping previous docker instances"
docker-compose down

echo "Building muzzomo-frontend image"
docker-compose build

echo "Launching muzzomo-frontend container"
docker-compose up