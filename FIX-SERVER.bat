@echo off
echo === MarketBrand Website Server Fix ===
echo.

REM Navigate to the correct directory
cd /d "D:\Marketbrand\marketbrand-marketing-website"

echo Current directory: %CD%
echo.

REM Check if package.json exists
if exist "package.json" (
    echo [OK] package.json found
) else (
    echo [ERROR] package.json NOT found
    echo Directory contents:
    dir
    pause
    exit /b 1
)

REM Check if src/app directory exists
if exist "src\app" (
    echo [OK] src/app directory found
) else (
    echo [ERROR] src/app directory NOT found
    echo Directory contents:
    dir src
    pause
    exit /b 1
)

echo.
echo Starting server...
echo Server will be available at:
echo - http://localhost:3000
echo - http://192.168.1.17:3000
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start the server
npm run dev

pause

