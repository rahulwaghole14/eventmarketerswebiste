@echo off
title MarketBrand.ai Simple Server
color 0B

echo.
echo ========================================
echo     MarketBrand.ai Simple Server
echo ========================================
echo.

:: Create a simple HTML file for testing
echo ^<!DOCTYPE html^> > simple-test.html
echo ^<html lang="en"^> >> simple-test.html
echo ^<head^> >> simple-test.html
echo     ^<meta charset="UTF-8"^> >> simple-test.html
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^> >> simple-test.html
echo     ^<title^>MarketBrand.ai - Simple Test^</title^> >> simple-test.html
echo     ^<style^> >> simple-test.html
echo         body { >> simple-test.html
echo             font-family: 'Inter', sans-serif; >> simple-test.html
echo             display: flex; >> simple-test.html
echo             flex-direction: column; >> simple-test.html
echo             justify-content: center; >> simple-test.html
echo             align-items: center; >> simple-test.html
echo             min-height: 100vh; >> simple-test.html
echo             background: linear-gradient(135deg, #0a0a0a 0%%, #1a1a2e 50%%, #16213e 100%%); >> simple-test.html
echo             color: #ffffff; >> simple-test.html
echo             text-align: center; >> simple-test.html
echo             padding: 20px; >> simple-test.html
echo             margin: 0; >> simple-test.html
echo         } >> simple-test.html
echo         h1 { >> simple-test.html
echo             font-size: 4em; >> simple-test.html
echo             margin-bottom: 20px; >> simple-test.html
echo             background: linear-gradient(135deg, #6366f1 0%%, #8b5cf6 50%%, #06b6d4 100%%); >> simple-test.html
echo             -webkit-background-clip: text; >> simple-test.html
echo             -webkit-text-fill-color: transparent; >> simple-test.html
echo             background-clip: text; >> simple-test.html
echo             text-shadow: 0 0 30px rgba(99, 102, 241, 0.5); >> simple-test.html
echo         } >> simple-test.html
echo         p { >> simple-test.html
echo             font-size: 1.5em; >> simple-test.html
echo             color: #a1a1aa; >> simple-test.html
echo             max-width: 800px; >> simple-test.html
echo             line-height: 1.8; >> simple-test.html
echo             margin: 10px 0; >> simple-test.html
echo         } >> simple-test.html
echo         .cta { >> simple-test.html
echo             margin-top: 40px; >> simple-test.html
echo             padding: 20px 40px; >> simple-test.html
echo             background: linear-gradient(135deg, #6366f1 0%%, #8b5cf6 100%%); >> simple-test.html
echo             color: white; >> simple-test.html
echo             border-radius: 15px; >> simple-test.html
echo             text-decoration: none; >> simple-test.html
echo             font-weight: bold; >> simple-test.html
echo             font-size: 1.2em; >> simple-test.html
echo             transition: all 0.3s ease; >> simple-test.html
echo             box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4); >> simple-test.html
echo             display: inline-block; >> simple-test.html
echo         } >> simple-test.html
echo         .cta:hover { >> simple-test.html
echo             transform: translateY(-5px); >> simple-test.html
echo             box-shadow: 0 15px 40px rgba(99, 102, 241, 0.6); >> simple-test.html
echo         } >> simple-test.html
echo         .status { >> simple-test.html
echo             background: rgba(34, 197, 94, 0.2); >> simple-test.html
echo             border: 1px solid #22c55e; >> simple-test.html
echo             border-radius: 10px; >> simple-test.html
echo             padding: 15px 30px; >> simple-test.html
echo             margin: 20px 0; >> simple-test.html
echo             color: #22c55e; >> simple-test.html
echo             font-weight: bold; >> simple-test.html
echo         } >> simple-test.html
echo     ^</style^> >> simple-test.html
echo ^</head^> >> simple-test.html
echo ^<body^> >> simple-test.html
echo     ^<h1^>MarketBrand.ai^</h1^> >> simple-test.html
echo     ^<div class="status"^>✓ Server is Running Successfully!^</div^> >> simple-test.html
echo     ^<p^>This is a simple test page to confirm the server is working correctly.^</p^> >> simple-test.html
echo     ^<p^>Your beautiful website is now accessible!^</p^> >> simple-test.html
echo     ^<p^>🎨 Ultra-modern design with glassmorphism effects^</p^> >> simple-test.html
echo     ^<p^>✨ Premium animations and smooth interactions^</p^> >> simple-test.html
echo     ^<p^>📱 Fully responsive and mobile-optimized^</p^> >> simple-test.html
echo     ^<a href="#" class="cta"^>Explore Our Features^</a^> >> simple-test.html
echo ^</body^> >> simple-test.html
echo ^</html^> >> simple-test.html

:: Create simple server
echo const http = require('http'); > simple-server.js
echo const fs = require('fs'); >> simple-server.js
echo const path = require('path'); >> simple-server.js
echo. >> simple-server.js
echo const PORT = 3000; >> simple-server.js
echo const HOST = '0.0.0.0'; >> simple-server.js
echo. >> simple-server.js
echo const server = http.createServer((req, res) =^> { >> simple-server.js
echo   let filePath = path.join(__dirname, req.url === '/' ? 'simple-test.html' : req.url); >> simple-server.js
echo   if (!fs.existsSync(filePath)) { >> simple-server.js
echo     filePath = path.join(__dirname, 'simple-test.html'); >> simple-server.js
echo   } >> simple-server.js
echo   const extname = String(path.extname(filePath)).toLowerCase(); >> simple-server.js
echo   const mimeTypes = { >> simple-server.js
echo     '.html': 'text/html', >> simple-server.js
echo     '.js': 'text/javascript', >> simple-server.js
echo     '.css': 'text/css', >> simple-server.js
echo     '.png': 'image/png', >> simple-server.js
echo     '.jpg': 'image/jpg', >> simple-server.js
echo     '.svg': 'image/svg+xml' >> simple-server.js
echo   }; >> simple-server.js
echo   const contentType = mimeTypes[extname] || 'application/octet-stream'; >> simple-server.js
echo   fs.readFile(filePath, (error, content) =^> { >> simple-server.js
echo     if (error) { >> simple-server.js
echo       res.writeHead(404); >> simple-server.js
echo       res.end('404 - Page Not Found'); >> simple-server.js
echo     } else { >> simple-server.js
echo       res.writeHead(200, { 'Content-Type': contentType }); >> simple-server.js
echo       res.end(content, 'utf-8'); >> simple-server.js
echo     } >> simple-server.js
echo   }); >> simple-server.js
echo }); >> simple-server.js
echo. >> simple-server.js
echo server.listen(PORT, HOST, () =^> { >> simple-server.js
echo   console.log('🚀 MarketBrand.ai Simple Server is running!'); >> simple-server.js
echo   console.log('📍 Local: http://localhost:' + PORT); >> simple-server.js
echo   console.log('🌐 Network: http://192.168.0.100:' + PORT); >> simple-server.js
echo   console.log('✨ Your website is ready!'); >> simple-server.js
echo }); >> simple-server.js

echo ✓ Created simple server and test page
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
echo 🚀 Starting simple HTTP server...
echo.
echo 📍 Local URL:    http://localhost:3000
echo 🌐 Network URL:  http://192.168.0.100:3000
echo.
echo ✨ Your test website will be available shortly!
echo.
echo Press Ctrl+C to stop the server
echo.

:: Start the simple server
node simple-server.js

echo.
echo Server stopped.
pause


