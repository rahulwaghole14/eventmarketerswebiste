# Restore the exact original structure by using the backup files
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
        # Restore from the original backup that had the proper structure
        Copy-Item $backupFile $originalFile -Force
        Write-Host "Restored original structure for: $category"
    } else {
        Write-Host "Backup not found for: $category"
    }
}

Write-Host "Original structure restored for all categories!"
