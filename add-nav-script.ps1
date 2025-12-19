# Add navigation script to all HTML files
$htmlFiles = Get-ChildItem -Path "out" -Recurse -Filter "*.html"
$scriptTag = '<script src="nav-fix.js"></script>'

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    if ($content -notmatch "nav-fix.js") {
        # Insert before </head> tag
        $content = $content -replace "</head>", "$scriptTag`n</head>"
        Set-Content $file.FullName $content -NoNewline
        Write-Host "Added script to: $($file.FullName)"
    }
}

Write-Host "Navigation fix completed!"