@echo off
title MarketBrand.ai Website Server
color 0A

echo.
echo ========================================
echo     MarketBrand.ai Website Server
echo ========================================
echo.

:: Check if we're in the right directory
if not exist "package.json" (
    echo ERROR: Not in the correct directory!
    echo Please run this from: D:\Marketbrand\marketbrand-marketing-website
    echo.
    pause
    exit /b 1
)

echo ✓ Found package.json - we're in the right directory
echo.

:: Check if Node.js is installed
echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✓ Node.js version: %NODE_VERSION%
echo.

:: Check if npm dependencies are installed
if not exist "node_modules" (
    echo Installing dependencies...
    echo This may take a few minutes...
    npm install --legacy-peer-deps
    if %errorlevel% neq 0 (
        echo ERROR: Failed to install dependencies!
        pause
        exit /b 1
    )
    echo ✓ Dependencies installed successfully
    echo.
)

:: Kill any existing processes on port 3000
echo Checking for existing processes on port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do (
    echo Killing existing process %%a on port 3000...
    taskkill /f /pid %%a >nul 2>&1
)

:: Clear Next.js cache
echo Clearing Next.js cache...
if exist ".next" rmdir /s /q ".next" >nul 2>&1

echo.
echo ========================================
echo     Starting MarketBrand.ai Website
echo ========================================
echo.
echo 🚀 Starting development server...
echo.
echo 📍 Local URL:    http://localhost:3000
echo 🌐 Network URL:  http://192.168.0.100:3000
echo.
echo ✨ Your beautiful website will be available shortly!
echo.
echo Press Ctrl+C to stop the server
echo.

:: Start the development server
npm run dev

echo.
echo Server stopped.
pause

