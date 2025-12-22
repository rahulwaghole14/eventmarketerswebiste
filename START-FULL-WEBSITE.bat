@echo off
title MarketBrand.ai - Full Website
color 0A

echo.
echo ========================================
echo     MarketBrand.ai Full Website
echo ========================================
echo.

:: Change to the correct directory
cd /d "%~dp0"
echo Current directory: %CD%
echo.

:: Kill any existing processes
echo Cleaning up existing processes...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do (
    echo Killing process %%a on port 3000...
    taskkill /f /pid %%a >nul 2>&1
)
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8080') do (
    echo Killing process %%a on port 8080...
    taskkill /f /pid %%a >nul 2>&1
)
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3001') do (
    echo Killing process %%a on port 3001...
    taskkill /f /pid %%a >nul 2>&1
)

:: Clear Next.js cache
echo Clearing Next.js cache...
if exist ".next" rmdir /s /q ".next" >nul 2>&1

echo.
echo ========================================
echo     Starting Full Website
echo ========================================
echo.
echo 🚀 Starting Next.js development server...
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


