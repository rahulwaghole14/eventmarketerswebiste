# Fix each category to show only its own images, not Event Planner images
$categories = @(
    "banquet-hall", "catering", "photographer", "light-supplier",
    "dental-clinic", "eye-hospital", "ayurveda-clinic", 
    "skin-aesthetic-clinic", "homeopathy-clinic", "pathology-lab", 
    "allopathy-clinic", "physiotherapy-clinic"
)

# Category-specific image mappings
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
    
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Get image paths for this category
        $images = $imageMappings[$category]
        $imageTags = ""
        foreach ($img in $images) {
            $imageTags += "                        <img src='../../$img' alt='$($img -replace '.*/', '')' class='w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform' onerror='this.src=`"../../market_brand_logo.png`"'>`n"
        }
        
        # Format category name for display
        $displayName = $category -replace '-', ' ' -replace '(\w+)', { $_.Value.Substring(0,1).ToUpper() + $_.Value.Substring(1) }
        
        # Replace each Event Planner image with category-specific images
        $content = $content -replace "Event Planner/Decorator/[^']+", $images[0]
        $content = $content -replace "Event Planner/Mandap/[^']+", $images[1]
        $content = $content -replace "Event Planner/Sound/[^']+", $images[2]
        $content = $content -replace "Event Planner/Generator/[^']+", $images[3]
        
        # Remove extra images if there are more than 5
        $content = $content -replace "Event Planner/[^']+", ""
        
        # Update the script comment
        $content = $content -replace 'Create image gallery for Event Planner', "Create image gallery for $displayName"
        
        Set-Content $file $content -NoNewline
        Write-Host "Fixed $category with its own images"
    } else {
        Write-Host "File not found: $file"
    }
}

Write-Host "All categories now show their own images!"
