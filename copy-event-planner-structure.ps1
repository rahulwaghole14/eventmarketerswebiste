# Copy the working event-planner structure to all other categories
$categories = @(
    "banquet-hall", "catering", "photographer", "light-supplier",
    "dental-clinic", "eye-hospital", "ayurveda-clinic", 
    "skin-aesthetic-clinic", "homeopathy-clinic", "pathology-lab", 
    "allopathy-clinic", "physiotherapy-clinic"
)

# Read the working event-planner file
$eventPlannerFile = "out\category\event-planner\index.html"
if (Test-Path $eventPlannerFile) {
    $eventPlannerContent = Get-Content $eventPlannerFile -Raw
    
    foreach ($category in $categories) {
        $targetFile = "out\category\$category\index.html"
        
        if (Test-Path $targetFile) {
            # Create backup
            Copy-Item $targetFile "$targetFile.backup-before-copy" -Force
            
            # Copy event-planner structure but update category-specific content
            $newContent = $eventPlannerContent
            
            # Update category-specific content in the script
            $displayName = $category -replace '-', ' ' -replace '(\w+)', { $_.Value.Substring(0,1).ToUpper() + $_.Value.Substring(1) }
            
            # Update the image paths based on category
            switch ($category) {
                "banquet-hall" {
                    $newContent = $newContent -replace 'Event Planner/Decorator/[^"]+', 'Banquat Hall/$&' -replace 'Event Planner/Mandap/[^"]+', 'Banquat Hall/$&' -replace 'Event Planner/Sound/[^"]+', 'Banquat Hall/$&' -replace 'Event Planner/Generator/[^"]+', 'Banquat Hall/$&'
                }
                "catering" {
                    $newContent = $newContent -replace 'Event Planner/Decorator/[^"]+', 'Catering/$&' -replace 'Event Planner/Mandap/[^"]+', 'Catering/$&' -replace 'Event Planner/Sound/[^"]+', 'Catering/$&' -replace 'Event Planner/Generator/[^"]+', 'Catering/$&'
                }
                "photographer" {
                    $newContent = $newContent -replace 'Event Planner/Decorator/[^"]+', 'Photography/$&' -replace 'Event Planner/Mandap/[^"]+', 'Photography/$&' -replace 'Event Planner/Sound/[^"]+', 'Photography/$&' -replace 'Event Planner/Generator/[^"]+', 'Photography/$&'
                }
                "light-supplier" {
                    $newContent = $newContent -replace 'Event Planner/Decorator/[^"]+', 'Light Supplier/$&' -replace 'Event Planner/Mandap/[^"]+', 'Light Supplier/$&' -replace 'Event Planner/Sound/[^"]+', 'Light Supplier/$&' -replace 'Event Planner/Generator/[^"]+', 'Light Supplier/$&'
                }
                default {
                    # Medical categories
                    $medicalCategory = $category -replace '-clinic', ' Clinic' -replace 'skin-aesthetic', 'Skin & Aesthetics'
                    $newContent = $newContent -replace 'Event Planner/Decorator/[^"]+', "Medical & Diagnostics/$medicalCategory/`$&" -replace 'Event Planner/Mandap/[^"]+', "Medical & Diagnostics/$medicalCategory/`$&" -replace 'Event Planner/Sound/[^"]+', "Medical & Diagnostics/$medicalCategory/`$&" -replace 'Event Planner/Generator/[^"]+', "Medical & Diagnostics/$medicalCategory/`$&"
                }
            }
            
            # Update the script comment
            $newContent = $newContent -replace 'Create image gallery for Event Planner', "Create image gallery for $displayName"
            
            # Save the updated content
            Set-Content $targetFile $newContent -NoNewline
            Write-Host "Copied event-planner structure to: $category"
        } else {
            Write-Host "File not found: $targetFile"
        }
    }
    
    Write-Host "Event-planner structure copied to all categories!"
} else {
    Write-Host "Event-planner file not found: $eventPlannerFile"
}
