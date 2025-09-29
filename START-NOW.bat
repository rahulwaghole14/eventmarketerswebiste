@echo off
title MarketBrand.ai - Starting Website
color 0A

echo.
echo ========================================
echo     MarketBrand.ai Website Server
echo ========================================
echo.

:: Change to the correct directory
cd /d "%~dp0"
echo Current directory: %CD%
echo.

:: Check if Node.js is installed
echo Checking Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do echo Node.js version: %%i
echo.

:: Kill any existing processes on port 3000
echo Checking for existing processes on port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do (
    echo Killing existing process %%a on port 3000...
    taskkill /f /pid %%a >nul 2>&1
)

echo.
echo ========================================
echo     Starting Simple Server
echo ========================================
echo.
echo 🚀 Starting server...
echo.
echo 📍 Local URL:    http://localhost:3000
echo 🌐 Network URL:  http://192.168.0.100:3000
echo.
echo ✨ Your website will be available shortly!
echo.
echo Press Ctrl+C to stop the server
echo.

:: Start the simple server
node server.js

echo.
echo Server stopped.
pause

