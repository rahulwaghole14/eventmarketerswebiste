@echo off
title MarketBrand.ai - FIXED Server
color 0A

echo.
echo ========================================
echo     MarketBrand.ai FIXED Server
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

:: Create a simple HTML file
echo Creating test page...
echo ^<!DOCTYPE html^> > test.html
echo ^<html^>^<head^>^<title^>MarketBrand.ai^</title^>^</head^> >> test.html
echo ^<body style="background:black;color:white;text-align:center;padding:50px;font-family:Arial"^> >> test.html
echo ^<h1 style="color:cyan"^>MarketBrand.ai^</h1^> >> test.html
echo ^<p^>✅ Server is WORKING!^</p^> >> test.html
echo ^<p^>Port 8080 is accessible^</p^> >> test.html
echo ^</body^>^</html^> >> test.html

echo.
echo ========================================
echo     Starting FIXED Server
echo ========================================
echo.
echo 🚀 Starting server on port 8080...
echo.
echo 📍 Local URL:    http://localhost:8080
echo 🌐 Network URL:  http://192.168.0.100:8080
echo.
echo ✨ Try BOTH URLs above!
echo.
echo Press Ctrl+C to stop the server
echo.

:: Start Python server on port 8080
python -c "import http.server, socketserver; PORT=8080; Handler=http.server.SimpleHTTPRequestHandler; httpd=socketserver.TCPServer(('0.0.0.0', PORT), Handler); print('🚀 Server running on port', PORT); print('📍 Local: http://localhost:' + str(PORT)); print('🌐 Network: http://192.168.0.100:' + str(PORT)); httpd.serve_forever()"

echo.
echo Server stopped.
pause

