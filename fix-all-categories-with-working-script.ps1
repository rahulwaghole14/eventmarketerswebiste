# Fix all categories with the working script
$categories = @(
    "banquet-hall", "catering", "photographer", "light-supplier",
    "dental-clinic", "eye-hospital", "ayurveda-clinic", 
    "skin-aesthetic-clinic", "homeopathy-clinic", "pathology-lab", 
    "physiotherapy-clinic"
)

# Image mappings for each category
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
    "physiotherapy-clinic" = @("Medical & Diagnostics/Physiotherapy Clinic/1.png", "Medical & Diagnostics/Physiotherapy Clinic/2.png", "Medical & Diagnostics/Physiotherapy Clinic/3.png", "Medical & Diagnostics/Physiotherapy Clinic/4.png", "Medical & Diagnostics/Physiotherapy Clinic/5.png")
}

foreach ($category in $categories) {
    $file = "out\category\$category\index.html"
    
    if (Test-Path $file) {
        # Read current content
        $content = Get-Content $file -Raw
        
        # Remove any existing manual script
        $content = $content -replace '// Manual image loading for file:// protocol.*?</script>', ''
        
        # Get image paths for this category
        $images = $imageMappings[$category]
        $imageTags = ""
        foreach ($img in $images) {
            $imageTags += "                        <img src='../../$img' alt='$($img -replace '.*/', '')' class='w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform' onerror='this.src=`"../../market_brand_logo.png`"'>`n"
        }
        
        # Format category name for display
        $displayName = $category -replace '-', ' ' -replace '(\w+)', { $_.Value.Substring(0,1).ToUpper() + $_.Value.Substring(1) }
        
        # Add working script
        $script = "<script>
// Manual image loading for file:// protocol - WORKING VERSION
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const loadingDiv = document.querySelector('.min-h-[400px].flex.items-center.justify-center');
        if (loadingDiv) {
            console.log('Found loading div for $category');
            const imageContainer = document.createElement('div');
            imageContainer.className = 'relative w-full pt-4 pb-12';
            imageContainer.innerHTML = `
                <div class='relative flex items-center justify-center gap-2 md:gap-3'>
                    <div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full'>
$imageTags
                    </div>
                </div>
                <div class='mt-8 flex justify-center'>
                    <a href='../../download/index.html' class='inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300'>
                        <svg class='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'></path>
                        </svg>
                        Download Templates
                    </a>
                </div>
            `;
            loadingDiv.parentNode.replaceChild(imageContainer, loadingDiv);
            console.log('Images loaded successfully for $category');
        } else {
            console.log('Loading div NOT found for $category');
        }
    }, 2000);
});
</script>
</body></html>"
        
        # Insert the script before </body>
        $content = $content -replace '</body></html>', $script
        
        Set-Content $file $content -NoNewline
        Write-Host "Fixed $category with working script"
    } else {
        Write-Host "File not found: $file"
    }
}

Write-Host "All categories fixed with working script!"
