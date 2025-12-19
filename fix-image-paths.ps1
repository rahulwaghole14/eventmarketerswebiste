# Fix image paths in React component data for static export
Get-ChildItem "out\**\*.html" -Recurse | ForEach-Object {
    $file = $_
    $content = Get-Content $file.FullName -Raw
    $changed = $false
    
    # Fix image paths in React component data
    # Convert absolute paths to relative paths based on file location
    if ($content -match '"/Medical & Diagnostics/Allopathy Clinic/') {
        # For category pages (2 levels deep)
        if ($file.FullName -match "out\\category\\[^\\]+\\index\.html") {
            $content = $content -replace '"/Medical & Diagnostics/Allopathy Clinic/', '"../../Medical & Diagnostics/Allopathy Clinic/'
            $changed = $true
            Write-Host "Fixed Medical & Diagnostics paths in: $($file.Name)"
        }
        # For root pages (1 level deep)
        elseif ($file.FullName -match "out\\[^\\]+\\index\.html") {
            $content = $content -replace '"/Medical & Diagnostics/Allopathy Clinic/', '"./Medical & Diagnostics/Allopathy Clinic/'
            $changed = $true
            Write-Host "Fixed Medical & Diagnostics paths in: $($file.Name)"
        }
    }
    
    if ($content -match '"/General/Daily Greetings/') {
        # For templates pages (2 levels deep)
        if ($file.FullName -match "out\\templates\\[^\\]+\\index\.html") {
            $content = $content -replace '"/General/Daily Greetings/', '"../../General/Daily Greetings/'
            $changed = $true
            Write-Host "Fixed General/Daily Greetings paths in: $($file.Name)"
        }
        # For deeper template pages (3+ levels deep)
        elseif ($file.FullName -match "out\\templates\\[^\\]+\\[^\\]+\\index\.html") {
            $content = $content -replace '"/General/Daily Greetings/', '"../../../General/Daily Greetings/'
            $changed = $true
            Write-Host "Fixed General/Daily Greetings paths in: $($file.Name)"
        }
    }
    
    # Fix other image paths
    if ($content -match '"/Event Planner/') {
        if ($file.FullName -match "out\\category\\[^\\]+\\index\.html") {
            $content = $content -replace '"/Event Planner/', '"../../Event Planner/'
            $changed = $true
            Write-Host "Fixed Event Planner paths in: $($file.Name)"
        }
    }
    
    if ($content -match '"/Catering/') {
        if ($file.FullName -match "out\\category\\[^\\]+\\index\.html") {
            $content = $content -replace '"/Catering/', '"../../Catering/'
            $changed = $true
            Write-Host "Fixed Catering paths in: $($file.Name)"
        }
    }
    
    if ($content -match '"/Banquat Hall/') {
        if ($file.FullName -match "out\\category\\[^\\]+\\index\.html") {
            $content = $content -replace '"/Banquat Hall/', '"../../Banquat Hall/'
            $changed = $true
            Write-Host "Fixed Banquat Hall paths in: $($file.Name)"
        }
    }
    
    if ($changed) {
        Set-Content $file.FullName $content -NoNewline
        Write-Host "Updated image paths: $($file.FullName)" -ForegroundColor Green
    }
}

Write-Host "Image path fix complete!" -ForegroundColor Cyan
