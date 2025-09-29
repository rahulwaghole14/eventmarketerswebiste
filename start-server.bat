@echo off
echo Starting MarketBrand Website Server...
echo.
echo Server will be available at:
echo - Local: http://localhost:3000
echo - Network: http://192.168.1.17:3000
echo - Network: http://192.168.0.100:3000 (if accessible)
echo.
echo Press Ctrl+C to stop the server
echo.
npx next dev --turbopack --hostname 0.0.0.0 --port 3000
pause