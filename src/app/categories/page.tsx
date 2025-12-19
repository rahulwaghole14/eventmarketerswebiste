import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { FaRocket, FaPalette, FaBolt, FaDumbbell, FaTrophy, FaBullseye } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Business Categories | Professional Marketing Templates for Every Industry | MarketBrand.ai",
  description: "Explore marketing templates for all business categories: restaurants, events, fitness, healthcare, beauty, automotive, retail, and more. Professional designs for every industry.",
  keywords: "business categories, marketing templates, industry-specific designs, professional templates, business marketing materials",
  alternates: { canonical: "/categories" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Business Categories | Professional Marketing Templates for Every Industry",
    description: "Explore marketing templates for all business categories: restaurants, events, fitness, healthcare, beauty, automotive, retail, and more.",
    url: "https://www.marketbrand.ai/categories",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-categories.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Categories | Professional Marketing Templates for Every Industry",
    description: "Explore marketing templates for all business categories: restaurants, events, fitness, healthcare, beauty, automotive, retail, and more.",
    images: ["/og-categories.jpg"],
  },
};

export default function CategoriesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Business Categories - Marketing Templates",
    "description": "Professional marketing templates for all business categories and industries",
    "url": "https://www.marketbrand.ai/categories",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Event Planner",
          "url": "https://www.marketbrand.ai/category/event-planner"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Banquet Hall",
          "url": "https://www.marketbrand.ai/category/banquet-hall"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Catering",
          "url": "https://www.marketbrand.ai/category/catering"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Photographer",
          "url": "https://www.marketbrand.ai/category/photographer"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Light Supplier",
          "url": "https://www.marketbrand.ai/category/light-supplier"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Dental Clinic",
          "url": "https://www.marketbrand.ai/category/dental-clinic"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Eye Hospital",
          "url": "https://www.marketbrand.ai/category/eye-hospital"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Ayurveda Clinic",
          "url": "https://www.marketbrand.ai/category/ayurveda-clinic"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Skin & Aesthetic Clinic",
          "url": "https://www.marketbrand.ai/category/skin-aesthetic-clinic"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Homeopathy Clinic",
          "url": "https://www.marketbrand.ai/category/homeopathy-clinic"
        },
        {
          "@type": "ListItem",
          "position": 11,
          "name": "Pathology Lab",
          "url": "https://www.marketbrand.ai/category/pathology-lab"
        },
        {
          "@type": "ListItem",
          "position": 12,
          "name": "Allopathy Clinic",
          "url": "https://www.marketbrand.ai/category/allopathy-clinic"
        },
        {
          "@type": "ListItem",
          "position": 13,
          "name": "Physiotherapy Clinic",
          "url": "https://www.marketbrand.ai/category/physiotherapy-clinic"
        }
      ]
    }
  };

  // Helper function to get category image path
  const getCategoryImage = (slug: string): string => {
    const imageMap: Record<string, string> = {
      "event-planner": "/Event Planner/Mandap/1.png",
      "banquet-hall": "/Banquat Hall/1.png",
      "catering": "/Catering/1.png",
      "photographer": "/Photography/1.png",
      "light-supplier": "/Light Supplier/1.png",
      "dental-clinic": "/Medical & Diagnostics/Dental Clinic/1.png",
      "eye-hospital": "/Medical & Diagnostics/Eye Hospital/1.png",
      "ayurveda-clinic": "/Medical & Diagnostics/Ayurveda Clinic/1.png",
      "skin-aesthetic-clinic": "/Medical & Diagnostics/Skin & Aesthetics Clinic/1.png",
      "homeopathy-clinic": "/Medical & Diagnostics/Homeopathy Clinic/1.png",
      "pathology-lab": "/Medical & Diagnostics/Pathology Lab/1.png",
      "allopathy-clinic": "/Medical & Diagnostics/Allopathy Clinic/1.png",
      "physiotherapy-clinic": "/Medical & Diagnostics/Physiotherapy Clinic/1.png",
    };
    return imageMap[slug] || "/hero-image.png";
  };

  const categoryGroups = [
    {
      title: "Events & Wedding",
      categories: [
        {
          slug: "event-planner",
          title: "Event Planner",
          icon: "📅",
          description: "Professional event planner promotional videos, marketing posters & business materials for Mandap, Sound, Generator, Decorator services and more",
          gradient: "from-indigo-500 to-purple-500",
          templateCount: "800+",
          userCount: "3,000+"
        },
        {
          slug: "banquet-hall",
          title: "Banquet Hall",
          icon: "🏰",
          description: "Professional banquet hall promotional videos, marketing posters & business materials for wedding venues, event venues, and banquet facilities",
          gradient: "from-blue-500 to-indigo-500",
          templateCount: "600+",
          userCount: "2,500+"
        },
        {
          slug: "catering",
          title: "Catering",
          icon: "🍽️",
          description: "Professional catering promotional videos, marketing posters & business materials for wedding catering, event catering, and food service businesses",
          gradient: "from-orange-500 to-red-500",
          templateCount: "500+",
          userCount: "2,000+"
        },
        {
          slug: "photographer",
          title: "Photographer",
          icon: "📸",
          description: "Professional photographer promotional videos, marketing posters & business materials for wedding photographers, event photographers, and portrait photographers",
          gradient: "from-purple-500 to-pink-500",
          templateCount: "700+",
          userCount: "2,800+"
        },
        {
          slug: "light-supplier",
          title: "Light Supplier",
          icon: "💡",
          description: "Professional light supplier promotional videos, marketing posters & business materials for event lighting, wedding lighting, and lighting rental services",
          gradient: "from-yellow-500 to-orange-500",
          templateCount: "400+",
          userCount: "1,500+"
        }
      ]
    },
    {
      title: "Medical & Diagnostics",
      categories: [
        {
          slug: "dental-clinic",
          title: "Dental Clinic",
          icon: "🦷",
          description: "Professional dental clinic marketing materials. Promote treatments, offers, and dental care tips to attract more patients",
          gradient: "from-blue-500 to-cyan-500",
          templateCount: "450+",
          userCount: "1,800+"
        },
        {
          slug: "eye-hospital",
          title: "Eye Hospital",
          icon: "👁️",
          description: "Professional eye hospital marketing materials. Promote eye care services, treatments, and attract more patients",
          gradient: "from-cyan-500 to-blue-500",
          templateCount: "400+",
          userCount: "1,600+"
        },
        {
          slug: "ayurveda-clinic",
          title: "Ayurveda Clinic",
          icon: "🌿",
          description: "Professional ayurveda clinic marketing materials. Promote ayurvedic treatments, wellness programs, and attract more patients",
          gradient: "from-green-500 to-emerald-500",
          templateCount: "500+",
          userCount: "2,200+"
        },
        {
          slug: "skin-aesthetic-clinic",
          title: "Skin & Aesthetic Clinic",
          icon: "✨",
          description: "Professional skin & aesthetics clinic marketing materials. Promote aesthetic treatments, skincare services, and attract more clients",
          gradient: "from-pink-500 to-rose-500",
          templateCount: "550+",
          userCount: "2,400+"
        },
        {
          slug: "homeopathy-clinic",
          title: "Homeopathy Clinic",
          icon: "💊",
          description: "Professional homeopathy clinic marketing materials. Promote homeopathic treatments, consultations, and attract more patients",
          gradient: "from-teal-500 to-cyan-500",
          templateCount: "450+",
          userCount: "1,900+"
        },
        {
          slug: "pathology-lab",
          title: "Pathology Lab",
          icon: "🔬",
          description: "Professional pathology lab marketing materials. Promote lab tests, health checkup packages, and attract more patients",
          gradient: "from-red-500 to-orange-500",
          templateCount: "400+",
          userCount: "1,700+"
        },
        {
          slug: "allopathy-clinic",
          title: "Allopathy Clinic",
          icon: "🏥",
          description: "Professional allopathy clinic marketing materials. Promote medical services, treatments, and attract more patients",
          gradient: "from-blue-500 to-indigo-500",
          templateCount: "500+",
          userCount: "2,100+"
        },
        {
          slug: "physiotherapy-clinic",
          title: "Physiotherapy Clinic",
          icon: "💪",
          description: "Professional physiotherapy clinic marketing materials. Promote physiotherapy services, rehabilitation programs, and attract more patients",
          gradient: "from-indigo-500 to-purple-500",
          templateCount: "450+",
          userCount: "1,800+"
        }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-800/50 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-white font-semibold">Categories</span>
            </nav>
          </div>
        </div>

        {/* Enhanced Hero Section */}
        <div className="relative py-12 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-8">
              {/* Heading */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-black gradient-text leading-[1.3] pt-1 pb-1">
                  Business Categories
                </h1>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center lg:justify-end items-center gap-2">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-2.5 py-1 h-6 flex items-center">
                  <span className="text-green-300 text-xs font-semibold whitespace-nowrap">✓ 13 Business Categories</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-2.5 py-1 h-6 flex items-center">
                  <span className="text-blue-300 text-xs font-semibold flex items-center gap-1 whitespace-nowrap"><FaPalette className="text-xs" /> 10,000+ Templates</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-2.5 py-1 h-6 flex items-center">
                  <span className="text-purple-300 text-xs font-semibold whitespace-nowrap">👥 10,000+ Users</span>
                </div>
              </div>
            </div>

            {/* <p className="text-gray-300 text-base mt-6 text-center lg:text-left max-w-3xl">
              Professional marketing templates designed specifically for your industry. Each category includes templates, videos, and promotional materials tailored to your business needs.
            </p> */}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="pt-12 pb-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            {categoryGroups.map((group, groupIndex) => (
              <div key={group.title} className="mb-16 last:mb-0">
                {/* Category Group Heading */}
                <div className="mb-8">
                  <h3 className="text-3xl lg:text-4xl font-black gradient-text text-center">
                    {group.title}
                  </h3>
                </div>
                
                {/* Category Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.categories.map((category, index) => (
                    <Link
                      key={category.slug}
                      href={`/category/${category.slug}`}
                      className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 flex flex-col cursor-pointer"
                      style={{ animationDelay: `${(groupIndex * 100) + (index * 0.1)}s` }}
                    >
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
                      
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Heading */}
                        <div className="p-6 pb-4">
                          <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300 text-center">
                            {category.title}
                          </h3>
                        </div>
                        
                        {/* Image */}
                        <div className="relative w-full bg-gray-800 flex items-center justify-center overflow-hidden flex-1 min-h-0">
                          <Image
                            src={getCategoryImage(category.slug)}
                            alt={category.title}
                            width={400}
                            height={600}
                            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        
                        {/* View Template Button */}
                        <div className="p-6 pt-4">
                          <div className={`w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r ${category.gradient} rounded-xl text-white font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 pointer-events-none`}>
                            View Templates
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                How to Get Started
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Get professional marketing materials for your business in 3 simple steps
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-2xl">
                    1
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">Choose Your Category</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Select your business category from our 13 specialized categories. 
                  Each category has templates designed specifically for your industry.
                </p>
                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-lg px-4 py-2">
                  <span className="text-indigo-300 font-semibold">🎯 Industry-Specific Templates</span>
                </div>
              </div>

              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-2xl">
                    2
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">Browse Templates</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Explore hundreds of professional templates in your category. 
                  Choose from posters, videos, and promotional materials.
                </p>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg px-4 py-2">
                  <span className="text-purple-300 font-semibold flex items-center gap-1"><FaPalette className="inline" /> 10,000+ Templates Available</span>
                </div>
              </div>

              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-2xl">
                    3
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">Customize & Download</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Add your business details, customize colors, and download your 
                  professional marketing materials in under 1 minute.
                </p>
                <div className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-500/30 rounded-lg px-4 py-2">
                  <span className="text-pink-300 font-semibold flex items-center gap-1"><FaBolt className="inline" /> 1-Minute Creation</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-16">
              <Link 
                href="/download"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Creating Now - Free Trial
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="py-24 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-12 text-center">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Join 10,000+ businesses who are already creating professional marketing materials with our industry-specific templates. 
              Choose your category and get started today!
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-white font-semibold">7-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-white font-semibold">No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-white font-semibold">Cancel Anytime</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/download"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2"><FaRocket className="inline" /> Start Free Trial Now</span>
              </Link>
              <Link 
                href="/pricing"
                className="inline-flex items-center px-12 py-6 border-2 border-white/30 rounded-2xl text-white font-bold text-2xl hover:bg-white/10 transition-all duration-300"
              >
                View Pricing Plans
              </Link>
            </div>
            
            <p className="text-gray-400 text-lg mt-8 flex items-center gap-2">
              <FaBolt className="inline" /> Join 10,000+ Businesses • 10,000+ Templates • 13 Categories
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


