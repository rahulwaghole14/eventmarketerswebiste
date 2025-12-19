# Fix JavaScript syntax errors in all HTML files
$htmlFiles = Get-ChildItem -Path "out" -Recurse -Filter "*.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Fix regex syntax errors (remove extra backslashes)
    $content = $content -replace '/\\\\.html\$', '/\.html\$/'
    $content = $content -replace '/\\\\/index\$', '/\/index\$/'
    $content = $content -replace '/^\\\\/', '/^\//'
    $content = $content -replace '/\\\\\$/', '/\/\$/'
    
    # Only save if changes were made
    $originalContent = Get-Content $file.FullName -Raw
    if ($content -ne $originalContent) {
        Set-Content $file.FullName $content -NoNewline
        Write-Host "Fixed JavaScript syntax in: $($file.FullName)"
    }
}

Write-Host "JavaScript syntax fix completed!"