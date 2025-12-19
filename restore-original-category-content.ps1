# Restore original category-specific content from backups
$categories = @(
    "banquet-hall", "catering", "photographer", "light-supplier",
    "dental-clinic", "eye-hospital", "ayurveda-clinic", 
    "skin-aesthetic-clinic", "homeopathy-clinic", "pathology-lab", 
    "allopathy-clinic", "physiotherapy-clinic"
)

foreach ($category in $categories) {
    $originalFile = "out\category\$category\index.html"
    $backupFile = "$originalFile.backup-final"
    
    if (Test-Path $backupFile) {
        # Restore from the backup that has original category-specific content
        Copy-Item $backupFile $originalFile -Force
        Write-Host "Restored original content for: $category"
    } else {
        Write-Host "Backup not found for: $category"
    }
}

Write-Host "Original category-specific content restored!"
