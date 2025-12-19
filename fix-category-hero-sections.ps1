# Fix hero sections for each category with category-specific content
$categories = @(
    "banquet-hall", "catering", "photographer", "light-supplier",
    "dental-clinic", "eye-hospital", "ayurveda-clinic", 
    "skin-aesthetic-clinic", "homeopathy-clinic", "pathology-lab", 
    "allopathy-clinic", "physiotherapy-clinic"
)

# Category-specific hero content
$heroContent = @{
    "banquet-hall" = @{
        title = "Banquet Hall Marketing Materials"
        description = "Professional banquet hall promotional videos, marketing posters & business materials. Download ready-made templates for wedding venues, event spaces, reception halls, party venues."
        keywords = "banquet hall marketing, wedding venue promotional videos, event space marketing, reception hall templates, party venue marketing"
    }
    "catering" = @{
        title = "Catering Service Marketing Materials"
        description = "Professional catering promotional videos, marketing posters & business materials. Download ready-made templates for food catering, event catering, wedding catering, corporate catering."
        keywords = "catering marketing, food service promotional videos, event catering marketing, wedding catering templates, corporate catering materials"
    }
    "photographer" = @{
        title = "Photography Business Marketing Materials"
        description = "Professional photography promotional videos, marketing posters & business materials. Download ready-made templates for wedding photography, portrait photography, event photography, commercial photography."
        keywords = "photography marketing, wedding photographer promotional videos, portrait photography marketing, event photography templates, commercial photography materials"
    }
    "light-supplier" = @{
        title = "Lighting Supplier Marketing Materials"
        description = "Professional lighting supplier promotional videos, marketing posters & business materials. Download ready-made templates for event lighting, wedding lighting, stage lighting, decorative lighting."
        keywords = "lighting supplier marketing, event lighting promotional videos, wedding lighting marketing, stage lighting templates, decorative lighting materials"
    }
    "dental-clinic" = @{
        title = "Dental Clinic Marketing Materials"
        description = "Professional dental clinic promotional videos, marketing posters & business materials. Download ready-made templates for dental practices, orthodontic clinics, dental surgery, cosmetic dentistry."
        keywords = "dental clinic marketing, dental practice promotional videos, orthodontic clinic marketing, dental surgery templates, cosmetic dentistry materials"
    }
    "eye-hospital" = @{
        title = "Eye Hospital Marketing Materials"
        description = "Professional eye hospital promotional videos, marketing posters & business materials. Download ready-made templates for eye care centers, ophthalmology clinics, vision care, eye surgery."
        keywords = "eye hospital marketing, eye care promotional videos, ophthalmology clinic marketing, vision care templates, eye surgery materials"
    }
    "ayurveda-clinic" = @{
        title = "Ayurveda Clinic Marketing Materials"
        description = "Professional ayurveda clinic promotional videos, marketing posters & business materials. Download ready-made templates for ayurvedic treatments, wellness centers, natural healing, traditional medicine."
        keywords = "ayurveda clinic marketing, ayurvedic treatment promotional videos, wellness center marketing, natural healing templates, traditional medicine materials"
    }
    "skin-aesthetic-clinic" = @{
        title = "Skin & Aesthetic Clinic Marketing Materials"
        description = "Professional skin clinic promotional videos, marketing posters & business materials. Download ready-made templates for dermatology clinics, aesthetic treatments, skin care, cosmetic procedures."
        keywords = "skin clinic marketing, dermatology promotional videos, aesthetic treatment marketing, skin care templates, cosmetic procedure materials"
    }
    "homeopathy-clinic" = @{
        title = "Homeopathy Clinic Marketing Materials"
        description = "Professional homeopathy clinic promotional videos, marketing posters & business materials. Download ready-made templates for homeopathic treatments, alternative medicine, natural remedies, holistic healing."
        keywords = "homeopathy clinic marketing, homeopathic treatment promotional videos, alternative medicine marketing, natural remedies templates, holistic healing materials"
    }
    "pathology-lab" = @{
        title = "Pathology Lab Marketing Materials"
        description = "Professional pathology lab promotional videos, marketing posters & business materials. Download ready-made templates for medical testing, diagnostic labs, laboratory services, health testing."
        keywords = "pathology lab marketing, medical testing promotional videos, diagnostic lab marketing, laboratory services templates, health testing materials"
    }
    "allopathy-clinic" = @{
        title = "Allopathy Clinic Marketing Materials"
        description = "Professional allopathy clinic promotional videos, marketing posters & business materials. Download ready-made templates for allopathic treatments, general medicine, modern healthcare, medical clinics."
        keywords = "allopathy clinic marketing, general medicine promotional videos, allopathic treatment marketing, modern healthcare templates, medical clinic materials"
    }
    "physiotherapy-clinic" = @{
        title = "Physiotherapy Clinic Marketing Materials"
        description = "Professional physiotherapy clinic promotional videos, marketing posters & business materials. Download ready-made templates for physical therapy, rehabilitation centers, sports therapy, wellness treatments."
        keywords = "physiotherapy clinic marketing, physical therapy promotional videos, rehabilitation center marketing, sports therapy templates, wellness treatment materials"
    }
}

foreach ($category in $categories) {
    $file = "out\category\$category\index.html"
    
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Get category-specific hero content
        $hero = $heroContent[$category]
        
        # Update title tag
        $content = $content -replace '<title>.*?</title>', "<title>$($hero.title) | MarketBrand.ai</title>"
        
        # Update meta description
        $content = $content -replace '<meta name="description" content=".*?"', "<meta name=`"description`" content=`"$($hero.description)`""
        
        # Update meta keywords
        $content = $content -replace '<meta name="keywords" content=".*?"', "<meta name=`"keywords`" content=`"$($hero.keywords)`""
        
        # Update h1 heading in the content
        $displayName = $category -replace '-', ' ' -replace '(\w+)', { $_.Value.Substring(0,1).ToUpper() + $_.Value.Substring(1) }
        $content = $content -replace '<h1[^>]*>.*?</h1>', "<h1 class=`"text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6`">$($hero.title)</h1>"
        
        # Update description paragraph
        $content = $content -replace '<p[^>]*>.*?Download.*?</p>', "<p class=`"text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl`">$($hero.description)</p>"
        
        Set-Content $file $content -NoNewline
        Write-Host "Fixed hero section for: $category"
    } else {
        Write-Host "File not found: $file"
    }
}

Write-Host "All category hero sections fixed with unique content!"
