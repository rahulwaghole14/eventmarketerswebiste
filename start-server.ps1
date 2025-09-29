Write-Host "Starting MarketBrand.ai Development Server..." -ForegroundColor Green
Set-Location "D:\Marketbrand\marketbrand-marketing-website"
Write-Host "Current directory: $(Get-Location)" -ForegroundColor Yellow
Write-Host "Installing dependencies..." -ForegroundColor Blue
npm install
Write-Host "Starting development server..." -ForegroundColor Green
npm run dev
