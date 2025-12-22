Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "     MarketBrand.ai Website Server" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "ERROR: Not in the correct directory!" -ForegroundColor Red
    Write-Host "Please run this from: D:\Marketbrand\marketbrand-marketing-website" -ForegroundColor Red
    Write-Host ""
    Read-Host "Press Enter to exit..."
    exit 1
}

Write-Host "✓ Found package.json - we're in the right directory" -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org" -ForegroundColor Red
    Write-Host ""
    Read-Host "Press Enter to exit..."
    exit 1
}

Write-Host ""

# Kill any existing processes on port 3000
Write-Host "Checking for existing processes on port 3000..." -ForegroundColor Yellow
$processes = netstat -ano | Select-String ":3000"
if ($processes) {
    foreach ($process in $processes) {
        $pid = ($process -split '\s+')[4]
        if ($pid -and $pid -ne "0") {
            Write-Host "Killing existing process $pid on port 3000..." -ForegroundColor Yellow
            try {
                Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
            } catch {}
        }
    }
}

# Clear Next.js cache
Write-Host "Clearing Next.js cache..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item ".next" -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "     Starting MarketBrand.ai Website" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Starting development server..." -ForegroundColor Cyan
Write-Host ""
Write-Host "📍 Local URL:    http://localhost:3000" -ForegroundColor White
Write-Host "🌐 Network URL:  http://192.168.0.100:3000" -ForegroundColor White
Write-Host ""
Write-Host "✨ Your beautiful website will be available shortly!" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Start the development server
try {
    npm run dev
} catch {
    Write-Host "Error starting npm server. Trying simple server..." -ForegroundColor Red
    Write-Host ""
    Write-Host "Starting simple server..." -ForegroundColor Yellow
    node server.js
}

Write-Host ""
Write-Host "Server stopped." -ForegroundColor Yellow
Read-Host "Press Enter to exit..."


