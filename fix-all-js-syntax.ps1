# Fix JavaScript syntax errors in all HTML files
Get-ChildItem "out\**\*.html" -Recurse | ForEach-Object {
    $file = $_
    $content = Get-Content $file.FullName -Raw
    $changed = $false
    
    # Fix Windows path separator regex
    if ($content -match "replace\(/\\/g, '/'") {
        $content = $content -replace "replace\(/\\/g, '/'", "replace(/\\\\/g, '/')"
        $changed = $true
        Write-Host "Fixed Windows path regex in: $($file.Name)"
    }
    
    # Fix path cleaning regex - missing backslash
    if ($content -match "replace\(/\^//") {
        $content = $content -replace "replace\(/\^//", "replace(/^\\//"
        $changed = $true
        Write-Host "Fixed start path regex in: $($file.Name)"
    }
    
    # Fix end path cleaning regex - missing backslash
    if ($content -match "replace\(/\/\$\//") {
        $content = $content -replace "replace\(/\/\$\//", "replace(/\\\/$/"
        $changed = $true
        Write-Host "Fixed end path regex in: $($file.Name)"
    }
    
    # Fix index path regex - missing backslash
    if ($content -match "replace\(/\/\$\//") {
        $content = $content -replace "replace\(/\/\$\//", "replace(/\\\/$/"
        $changed = $true
        Write-Host "Fixed index path regex in: $($file.Name)"
    }
    
    if ($changed) {
        Set-Content $file.FullName $content -NoNewline
        Write-Host "Updated: $($file.FullName)" -ForegroundColor Green
    }
}

Write-Host "JavaScript syntax fix complete!" -ForegroundColor Cyan
