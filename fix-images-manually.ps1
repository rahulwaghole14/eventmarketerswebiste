# Add manual image loading script to category pages
$categories = @(
    "allopathy-clinic", "automotive-services", "ayurveda-clinic", "banquet-hall",
    "beauty-salons-spas", "caterers", "catering", "decorator", "decorators",
    "dental-clinic", "events-wedding-vendors", "eye-hospital", "fitness-gyms-yoga",
    "generator", "healthcare-clinics", "homeopathy-clinic", "light-supplier",
    "mandap", "pathology-lab", "photographer", "photographers", "physiotherapy-clinic",
    "retail-grocery-fashion", "skin-aesthetic-clinic", "sound", "venues", "wedding-planners"
)

foreach ($category in $categories) {
    $file = "out\category\$category\index.html"
    
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Add manual image loading script before closing body tag
        $script = @"

<script>
// Manual image loading for file:// protocol
document.addEventListener('DOMContentLoaded', function() {
    // Find the loading div and replace with actual images
    const loadingDiv = document.querySelector('.min-h-[400px].flex.items-center.justify-center.
   .
</script>
"@
        
        # Insert the script before </body>
        $content = $content -replace '</body>', "$script</body>"
        
        Set-Content $file $content -NoNewline
        Write-Host "Added manual image loading to: $category\index.html"
    }
}

Write-Host "Manual image loading script added to all category pages!"
