# Restore original design for all categories except event-planner (which is working)
$categories = @(
    "banquet-hall", "catering", "photographer", "light-supplier",
    "dental-clinic", "eye-hospital", "ayurveda-clinic", 
    "skin-aesthetic-clinic", "homeopathy-clinic", "pathology-lab", 
    "allopathy-clinic", "physiotherapy-clinic"
)

# Correct image mappings based on actual directory structure
$imageMappings = @{
    "banquet-hall" = @("Banquat Hall/1.png", "Banquat Hall/2.png", "Banquat Hall/3.png", "Banquat Hall/4.png", "Banquat Hall/5.png")
    "catering" = @("Catering/1.png", "Catering/2.png", "Catering/3.png", "Catering/4.png", "Catering/5.png")
    "photographer" = @("Photography/1.png", "Photography/2.png", "Photography/3.png", "Photography/4.png", "Photography/5.png")
    "light-supplier" = @("Light Supplier/1.png", "Light Supplier/2.png", "Light Supplier/3.png", "Light Supplier/4.png", "Light Supplier/5.png")
    "dental-clinic" = @("Medical & Diagnostics/Dental Clinic/1.png", "Medical & Diagnostics/Dental Clinic/2.png", "Medical & Diagnostics/Dental Clinic/3.png", "Medical & Diagnostics/Dental Clinic/4.png", "Medical & Diagnostics/Dental Clinic/5.png")
    "eye-hospital" = @("Medical & Diagnostics/Eye Hospital/1.png", "Medical & Diagnostics/Eye Hospital/2.png", "Medical & Diagnostics/Eye Hospital/3.png", "Medical & Diagnostics/Eye Hospital/4.png", "Medical & Diagnostics/Eye Hospital/5.png")
    "ayurveda-clinic" = @("Medical & Diagnostics/Ayurveda Clinic/1.png", "Medical & Diagnostics/Ayurveda Clinic/2.png", "Medical & Diagnostics/Ayurveda Clinic/3.png", "Medical & Diagnostics/Ayurveda Clinic/4.png", "Medical & Diagnostics/Ayurveda Clinic/5.png")
    "skin-aesthetic-clinic" = @("Medical & Diagnostics/Skin & Aesthetics Clinic/1.png", "Medical & Diagnostics/Skin & Aesthetics Clinic/2.png", "Medical & Diagnostics/Skin & Aesthetics Clinic/3.png", "Medical & Diagnostics/Skin & Aesthetics Clinic/4.png", "Medical & Diagnostics/Skin & Aesthetics Clinic/5.png")
    "homeopathy-clinic" = @("Medical & Diagnostics/Homeopathy Clinic/1.png", "Medical & Diagnostics/Homeopathy Clinic/2.png", "Medical & Diagnostics/Homeopathy Clinic/3.png", "Medical & Diagnostics/Homeopathy Clinic/4.png", "Medical & Diagnostics/Homeopathy Clinic/5.png")
    "pathology-lab" = @("Medical & Diagnostics/Pathology Lab/1.png", "Medical & Diagnostics/Pathology Lab/2.png", "Medical & Diagnostics/Pathology Lab/3.png", "Medical & Diagnostics/Pathology Lab/4.png", "Medical & Diagnostics/Pathology Lab/5.png")
    "allopathy-clinic" = @("Medical & Diagnostics/Allopathy Clinic/1.png", "Medical & Diagnostics/Allopathy Clinic/2.png", "Medical & Diagnostics/Allopathy Clinic/3.png", "Medical & Diagnostics/Allopathy Clinic/4.png", "Medical & Diagnostics/Allopathy Clinic/5.png")
    "physiotherapy-clinic" = @("Medical & Diagnostics/Physiotherapy Clinic/1.png", "Medical & Diagnostics/Physiotherapy Clinic/2.png", "Medical & Diagnostics/Physiotherapy Clinic/3.png", "Medical & Diagnostics/Physiotherapy Clinic/4.png", "Medical & Diagnostics/Physiotherapy Clinic/5.png")
}

foreach ($category in $categories) {
    $file = "out\category\$category\index.html"
    $backupFile = "$file.backup-final"
    
    if (Test-Path $backupFile) {
        # Restore from backup
        Copy-Item $backupFile $file -Force
        Write-Host "Restored from backup: $category"
    } else {
        Write-Host "Backup not found for: $category"
    }
}

Write-Host "Original design restoration completed!"
