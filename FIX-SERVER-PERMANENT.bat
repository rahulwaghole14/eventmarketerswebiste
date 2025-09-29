@echo off
title MarketBrand.ai Server Manager
color 0A

echo.
echo ========================================
echo    MarketBrand.ai Server Manager
echo ========================================
echo.

REM Change to the correct directory
cd /d "D:\Marketbrand\marketbrand-marketing-website"

REM Check if we're in the right directory
if not exist "package.json" (
    echo [ERROR] package.json not found!
    echo Please ensure this script is in the correct directory.
    echo Current directory: %CD%
    echo.
    pause
    exit /b 1
)

echo [INFO] Found package.json in: %CD%
echo.

REM Get current IP address
echo [INFO] Getting your current IP address...
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "ipv4"') do (
    set "ip=%%a"
    set "ip=!ip: =!"
    if "!ip:~0,7!"=="192.168" goto :found_ip
)

:found_ip
echo [INFO] Your IP address: %ip%
echo.

REM Kill any existing Node.js processes on port 3000
echo [INFO] Checking for existing processes on port 3000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do (
    taskkill /PID %%a /F >nul 2>&1
    echo [INFO] Killed existing process on port 3000
)

REM Clear Next.js cache
if exist ".next" (
    echo [INFO] Clearing Next.js cache...
    rmdir /s /q ".next" >nul 2>&1
    echo [INFO] Cache cleared
)

echo.
echo ========================================
echo    Starting MarketBrand.ai Server
echo ========================================
echo.
echo [INFO] Server URLs:
echo        Local:   http://localhost:3000
echo        Network: http://%ip%:3000
echo.
echo [INFO] Use the NETWORK URL to access from other devices
echo [INFO] Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

REM Start the server
npm run dev

echo.
echo [INFO] Server stopped.
pause


