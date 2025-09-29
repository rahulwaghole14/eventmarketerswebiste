@echo off
title MarketBrand.ai - Python Server
color 0A

echo.
echo ========================================
echo     MarketBrand.ai Python Server
echo ========================================
echo.

:: Change to the correct directory
cd /d "%~dp0"
echo Current directory: %CD%
echo.

:: Check if Python is installed
echo Checking Python installation...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Python is not installed!
    echo Please install Python from https://python.org
    echo.
    echo Alternatively, try using the Node.js server:
    echo Double-click: START-NOW.bat
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('python --version') do echo Python version: %%i
echo.

:: Kill any existing processes on port 3000
echo Checking for existing processes on port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do (
    echo Killing existing process %%a on port 3000...
    taskkill /f /pid %%a >nul 2>&1
)

echo.
echo ========================================
echo     Starting Python Server
echo ========================================
echo.
echo 🚀 Starting Python HTTP server...
echo.
echo 📍 Local URL:    http://localhost:3000
echo 🌐 Network URL:  http://192.168.0.100:3000
echo.
echo ✨ Your website will be available shortly!
echo.
echo Press Ctrl+C to stop the server
echo.

:: Start the Python server
python start-python-server.py

echo.
echo Server stopped.
pause


