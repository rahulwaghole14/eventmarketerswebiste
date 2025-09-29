@echo off
echo ========================================
echo MarketBrand.ai Server Test
echo ========================================
echo.
echo Current directory: %CD%
echo.
echo Checking if Node.js is installed...
node --version
echo.
echo Checking if simple-server.js exists...
if exist simple-server.js (
    echo ✓ simple-server.js found
) else (
    echo ✗ simple-server.js not found
    echo Creating simple server...
    goto :create_server
)
echo.
echo Starting server...
echo.
node simple-server.js
goto :end

:create_server
echo Creating simple server file...
echo const http = require('http'); > simple-server.js
echo const fs = require('fs'); >> simple-server.js
echo const path = require('path'); >> simple-server.js
echo. >> simple-server.js
echo const PORT = 3000; >> simple-server.js
echo. >> simple-server.js
echo const server = http.createServer((req, res) =^> { >> simple-server.js
echo   let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url); >> simple-server.js
echo   if (!fs.existsSync(filePath)) { >> simple-server.js
echo     filePath = path.join(__dirname, 'index.html'); >> simple-server.js
echo   } >> simple-server.js
echo   const extname = String(path.extname(filePath)).toLowerCase(); >> simple-server.js
echo   const mimeTypes = { >> simple-server.js
echo     '.html': 'text/html', >> simple-server.js
echo     '.js': 'text/javascript', >> simple-server.js
echo     '.css': 'text/css', >> simple-server.js
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
echo server.listen(PORT, '0.0.0.0', () =^> { >> simple-server.js
echo   console.log(`🚀 MarketBrand.ai Server is running!`); >> simple-server.js
echo   console.log(`📍 Local: http://localhost:${PORT}`); >> simple-server.js
echo   console.log(`🌐 Network: http://192.168.0.100:${PORT}`); >> simple-server.js
echo   console.log(`✨ Your beautiful website is ready!`); >> simple-server.js
echo }); >> simple-server.js
echo.
echo ✓ Server file created
echo.
echo Starting server...
node simple-server.js

:end
echo.
echo ========================================
echo Server stopped. Press any key to exit...
pause


