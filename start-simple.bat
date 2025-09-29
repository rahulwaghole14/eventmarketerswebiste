@echo off
echo Starting MarketBrand.ai Simple Server...
echo.
cd /d "D:\Marketbrand\marketbrand-marketing-website"
echo Current directory: %CD%
echo.
echo Starting server on port 3000...
echo.
node simple-server.js
echo.
echo Server stopped. Press any key to exit...
pause


