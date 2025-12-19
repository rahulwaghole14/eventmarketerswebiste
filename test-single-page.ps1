# Test and fix a single page first
$category = "allopathy-clinic"
$file = "out\category\$category\index.html"

if (Test-Path $file) {
    # Read current content
    $content = Get-Content $file -Raw
    
    # Remove any existing manual script
    $content = $content -replace '// Manual image loading for file:// protocol.*?</script>', ''
    
    # Add simple, working script based on event-planner success
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
                        <img src='../../Medical & Diagnostics/Allopathy Clinic/1.png' alt='Allopathy Clinic 1' class='w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform' onerror='this.src=`"../../market_brand_logo.png`"'>
                        <img src='../../Medical & Diagnostics/Allopathy Clinic/2.png' alt='Allopathy Clinic 2' class='w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform' onerror='this.src=`"../../market_brand_logo.png`"'>
                        <img src='../../Medical & Diagnostics/Allopathy Clinic/3.png' alt='Allopathy Clinic 3' class='w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform' onerror='this.src=`"../../market_brand_logo.png`"'>
                        <img src='../../Medical & Diagnostics/Allopathy Clinic/4.png' alt='Allopathy Clinic 4' class='w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform' onerror='this.src=`"../../market_brand_logo.png`"'>
                        <img src='../../Medical & Diagnostics/Allopathy Clinic/5.png' alt='Allopathy Clinic 5' class='w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform' onerror='this.src=`"../../market_brand_logo.png`"'>
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
