# Copy the complete Event Planner structure to all categories
$categories = @(
    "banquet-hall", "catering", "photographer", "light-supplier",
    "dental-clinic", "eye-hospital", "ayurveda-clinic", 
    "skin-aesthetic-clinic", "homeopathy-clinic", "pathology-lab", 
    "allopathy-clinic", "physiotherapy-clinic"
)

# Read the working Event Planner page
$eventPlannerFile = "out\category\event-planner\index.html"
if (Test-Path $eventPlannerFile) {
    $eventPlannerContent = Get-Content $eventPlannerFile -Raw
    
    foreach ($category in $categories) {
        $targetFile = "out\category\$category\index.html"
        
        if (Test-Path $targetFile) {
            # Copy entire Event Planner content
            $newContent = $eventPlannerContent
            
            # Update category-specific content
            $displayName = $category -replace '-', ' ' -replace '(\w+)', { $_.Value.Substring(0,1).ToUpper() + $_.Value.Substring(1) }
            
            # Update page title and meta tags
            $newContent = $newContent -replace 'Event Planner Marketing Materials', "$displayName Marketing Materials"
            $newContent = $newContent -replace 'event-planner', $category
            
            # Update category-specific images
            switch ($category) {
                "banquet-hall" {
                    $newContent = $newContent -replace 'Event Planner/Decorator/[^"]+', 'Banquat Hall/1.png' -replace 'Event Planner/Mandap/[^"]+', 'Banquat Hall/2.png' -replace 'Event Planner/Sound/[^"]+', 'Banquat Hall/3.png' -replace 'Event Planner/Generator/[^"]+', 'Banquat Hall/4.png' -replace 'Event Planner/[^"]+', 'Banquat Hall/5.png'
                }
                "catering" {
                    $newContent = $newContent -replace 'Event Planner/Decorator/[^"]+', 'Catering/1.png' -replace 'Event Planner/Mandap/[^"]+', 'Catering/2.png' -replace 'Event Planner/Sound/[^"]+', 'Catering/3.png' -replace 'Event Planner/Generator/[^"]+', 'Catering/4.png' -replace 'Event Planner/[^"]+', 'Catering/5.png'
                }
                "photographer" {
                    $newContent = $newContent -replace 'Event Planner/Decorator/[^"]+', 'Photography/1.png' -replace 'Event Planner/Mandap/[^"]+', 'Photography/2.png' -replace 'Event Planner/Sound/[^"]+', 'Photography/3.png' -replace 'Event Planner/Generator/[^"]+', 'Photography/4.png' -replace 'Event Planner/[^"]+', 'Photography/5.png'
                }
                "light-supplier" {
                    $newContent = $newContent -replace 'Event Planner/Decorator/[^"]+', 'Light Supplier/1.png' -replace 'Event Planner/Mandap/[^"]+', 'Light Supplier/2.png' -replace 'Event Planner/Sound/[^"]+', 'Light Supplier/3.png' -replace 'Event Planner/Generator/[^"]+', 'Light Supplier/4.png' -replace 'Event Planner/[^"]+', 'Light Supplier/5.png'
                }
                default {
                    # Medical categories
                    $medicalCategory = $category -replace '-clinic', ' Clinic' -replace 'skin-aesthetic', 'Skin & Aesthetics'
                    $newContent = $newContent -replace 'Event Planner/Decorator/[^"]+', "Medical & Diagnostics/$medicalCategory/1.png" -replace 'Event Planner/Mandap/[^"]+', "Medical & Diagnostics/$medicalCategory/2.png" -replace 'Event Planner/Sound/[^"]+', "Medical & Diagnostics/$medicalCategory/3.png" -replace 'Event Planner/Generator/[^"]+', "Medical & Diagnostics/$medicalCategory/4.png" -replace 'Event Planner/[^"]+', "Medical & Diagnostics/$medicalCategory/5.png"
                }
            }
            
            # Update the script comment
            $newContent = $newContent -replace 'Create image gallery for Event Planner', "Create image gallery for $displayName"
            
            # Save the updated content
            Set-Content $targetFile $newContent -NoNewline
            Write-Host "Copied complete Event Planner structure to: $category"
        } else {
            Write-Host "File not found: $targetFile"
        }
    }
    
    Write-Host "Complete Event Planner structure copied to all categories!"
} else {
    Write-Host "Event-planner file not found: $eventPlannerFile"
}
