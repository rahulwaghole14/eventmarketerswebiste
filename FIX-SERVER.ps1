Write-Host "=== MarketBrand Website Server Fix ===" -ForegroundColor Green
Write-Host ""

# Navigate to the correct directory
$targetDir = "D:\Marketbrand\marketbrand-marketing-website"
Set-Location $targetDir

Write-Host "Current directory: $(Get-Location)" -ForegroundColor Yellow
Write-Host ""

# Check if package.json exists
if (Test-Path "package.json") {
    Write-Host "✅ package.json found" -ForegroundColor Green
} else {
    Write-Host "❌ package.json NOT found" -ForegroundColor Red
    Write-Host "Directory contents:" -ForegroundColor Yellow
    Get-ChildItem
    exit 1
}

# Check if src/app directory exists
if (Test-Path "src\app") {
    Write-Host "✅ src/app directory found" -ForegroundColor Green
} else {
    Write-Host "❌ src/app directory NOT found" -ForegroundColor Red
    Write-Host "Directory contents:" -ForegroundColor Yellow
    Get-ChildItem src -ErrorAction SilentlyContinue
    exit 1
}

Write-Host ""
Write-Host "Starting server..." -ForegroundColor Cyan
Write-Host "Server will be available at:" -ForegroundColor Yellow
Write-Host "- http://localhost:3000" -ForegroundColor White
Write-Host "- http://192.168.1.17:3000" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Magenta
Write-Host ""

# Start the server
npm run dev

