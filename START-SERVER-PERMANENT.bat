@echo off
echo ========================================
echo MarketBrand.ai Server Startup Script
echo ========================================
echo.

REM Change to the correct directory
cd /d "D:\Marketbrand\marketbrand-marketing-website"

REM Check if package.json exists
if not exist "package.json" (
    echo ERROR: package.json not found in current directory
    echo Current directory: %CD%
    pause
    exit /b 1
)

echo ✓ Found package.json in correct directory
echo.

REM Get the current IP address
for /f "tokens=2 delims=:" %%i in ('ipconfig ^| findstr /c:"IPv4 Address"') do (
    set "ip=%%i"
    set "ip=!ip: =!"
    goto :found_ip
)

:found_ip
echo ✓ Current IP Address: %ip%
echo.

REM Clear any existing Next.js cache
if exist ".next" (
    echo Clearing Next.js cache...
    rmdir /s /q ".next"
    echo ✓ Cache cleared
)

echo.
echo Starting MarketBrand.ai server...
echo.
echo ========================================
echo Server will be available at:
echo Local:   http://localhost:3000
echo Network: http://%ip%:3000
echo ========================================
echo.

REM Start the development server
npm run dev

pause


