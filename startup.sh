#!/bin/bash

# Exit on error
set -e

# Install backend dependencies
echo "Installing backend dependencies..."
cd server
npm install
cd ..

# Install frontend dependencies and build
echo "Installing frontend dependencies and building client..."
cd client
npm install
npm run build
cd ..

# Initialize SQLite database if it doesn't exist (optional, can be handled by app logic)
# echo "Initializing database..."
# node server/db/initDb.js 

# Start the application
echo "Starting application..."
npm run start:server
