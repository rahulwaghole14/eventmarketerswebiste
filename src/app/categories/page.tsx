import Link from "next/link";
import type { Metadata } from "next";
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
          "name": "Events & Wedding Vendors",
          "url": "https://www.marketbrand.ai/category/events-wedding-vendors"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Fitness Studios, Gyms & Yoga",
          "url": "https://www.marketbrand.ai/category/fitness-gyms-yoga"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Retail & Grocery/Fashion Boutiques",
          "url": "https://www.marketbrand.ai/category/retail-grocery-fashion"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Healthcare Clinics & Diagnostics",
          "url": "https://www.marketbrand.ai/category/healthcare-clinics"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Beauty Salons, Spas & Aesthetic Clinics",
          "url": "https://www.marketbrand.ai/category/beauty-salons-spas"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Automotive Services",
          "url": "https://www.marketbrand.ai/category/automotive-services"
        }
      ]
    }
  };

  const categories = [
    {
      slug: "events-wedding-vendors",
      title: "Events & Wedding Vendors",
      icon: "trophy",
      description: "Professional wedding planner promotional videos, event vendor marketing posters, and wedding business promotional materials for Wedding Planners, Decorators, photographers, caterers, venues and more",
      gradient: "from-pink-500 to-purple-500",
      templateCount: "1,200+",
      userCount: "5,000+"
    },
    {
      slug: "fitness-gyms-yoga",
      title: "Fitness Studios, Gyms & Yoga",
      icon: "dumbbell",
      description: "Professional fitness promotional videos, gym marketing posters, and wellness business promotional materials for fitness studios, gyms, yoga centers, personal trainers, and health clubs.",
      gradient: "from-green-500 to-teal-500",
      templateCount: "800+",
      userCount: "3,500+"
    },
    {
      slug: "retail-grocery-fashion",
      title: "Retail & Grocery/Fashion Boutiques",
      icon: "🛍️",
      description: "Professional retail promotional videos, store marketing posters, and business promotional materials for retail stores, grocery shops, fashion boutiques, supermarkets, and shopping centers.",
      gradient: "from-blue-500 to-indigo-500",
      templateCount: "1,000+",
      userCount: "8,000+"
    },
    {
      slug: "healthcare-clinics",
      title: "Healthcare Clinics & Diagnostics",
      icon: "🏥",
      description: "Professional healthcare promotional videos, medical marketing posters, and clinic promotional materials for healthcare clinics, diagnostic centers, hospitals, dental clinics, and medical practices.",
      gradient: "from-emerald-500 to-blue-500",
      templateCount: "600+",
      userCount: "2,500+"
    },
    {
      slug: "beauty-salons-spas",
      title: "Beauty Salons, Spas & Aesthetic Clinics",
      icon: "💄",
      description: "Professional beauty promotional videos, salon marketing posters, and wellness promotional materials for beauty salons, spas, aesthetic clinics, nail studios, and wellness centers.",
      gradient: "from-purple-500 to-pink-500",
      templateCount: "900+",
      userCount: "4,200+"
    },
    {
      slug: "automotive-services",
      title: "Automotive Services",
      icon: "🚗",
      description: "Professional automotive promotional videos, service marketing posters, and business promotional materials for automotive workshops, car detailing services, tire shops, and vehicle repair centers.",
      gradient: "from-gray-500 to-gray-700",
      templateCount: "700+",
      userCount: "3,000+"
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
          <div className="mx-auto max-w-7xl px-4 py-4">
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
        <div className="relative py-24 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="text-center">
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2">
                  <span className="text-green-300 text-sm font-semibold">✓ 6 Business Categories</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                  <span className="text-blue-300 text-sm font-semibold flex items-center gap-1"><FaPalette className="inline" /> 5,200+ Templates</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <span className="text-purple-300 text-sm font-semibold">👥 26,200+ Users</span>
                </div>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black gradient-text mb-6 leading-tight">
                Business Categories
              </h1>
              
              <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-8 leading-relaxed">
                Professional marketing materials for every business type. 
                <span className="text-white font-semibold">Choose your industry and get started in minutes.</span>
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">6</div>
                  <div className="text-gray-400 text-sm">Business Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">5,200+</div>
                  <div className="text-gray-400 text-sm">Professional Templates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">26,200+</div>
                  <div className="text-gray-400 text-sm">Active Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">1-Min</div>
                  <div className="text-gray-400 text-sm">Creation Time</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/download"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2"><FaRocket className="inline" /> Start Free Trial</span>
                </Link>
                <Link 
                  href="/pricing"
                  className="inline-flex items-center px-10 py-5 border-2 border-white/20 rounded-2xl text-white font-bold text-xl hover:bg-white/10 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>

              <p className="text-gray-400 text-sm mt-6 flex items-center gap-2">
                <FaBolt className="inline" /> No Credit Card Required • 7-Day Free Trial • Cancel Anytime
              </p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Choose Your Business Category
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Professional marketing templates designed specifically for your industry. 
                Each category includes templates, videos, and promotional materials tailored to your business needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Link 
                  key={category.slug} 
                  href={`/category/${category.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {category.icon === "trophy" && <FaTrophy className="text-white text-2xl" />}
                        {category.icon === "dumbbell" && <FaDumbbell className="text-white text-2xl" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                          {category.title}
                        </h3>
                        <div className="flex space-x-4 text-sm text-gray-400">
                          <span>{category.templateCount} Templates</span>
                          <span>{category.userCount} Users</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-base mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-indigo-400 font-semibold group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                        Explore Templates
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-7xl px-4">
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
                  Select your business category from our 6 specialized categories. 
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
                  <span className="text-purple-300 font-semibold flex items-center gap-1"><FaPalette className="inline" /> 5,200+ Templates Available</span>
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
          
          <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Join 26,200+ businesses who are already creating professional marketing materials with our industry-specific templates. 
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
              <FaBolt className="inline" /> Join 26,200+ Businesses • 5,200+ Templates • 6 Categories
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


