# Copy nav-fix.js to all subdirectories that contain HTML files
$sourceFile = "out\nav-fix.js"
$directories = Get-ChildItem -Path "out" -Recurse -Directory

foreach ($dir in $directories) {
    $htmlFiles = Get-ChildItem -Path $dir.FullName -Filter "*.html"
    if ($htmlFiles.Count -gt 0) {
        $targetPath = Join-Path $dir.FullName "nav-fix.js"
        if (-not (Test-Path $targetPath)) {
            Copy-Item $sourceFile $targetPath -Force
            Write-Host "Copied nav-fix.js to: $($dir.FullName)"
        }
    }
}

Write-Host "Navigation fix script copied to all directories!"