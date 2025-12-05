import Link from "next/link";
import type { Metadata } from "next";
import { FaRocket, FaPalette, FaBolt, FaMobileAlt, FaBriefcase, FaTrophy, FaBullseye, FaSync } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Template Gallery | 1000+ Professional Marketing Templates | MarketBrand.ai",
  description: "Browse our collection of 1000+ professional marketing templates. Posters, videos, flyers for restaurants, events, fitness, healthcare, beauty, automotive businesses. Download instantly.",
  keywords: "marketing templates, professional templates, business templates, poster templates, video templates, design templates, marketing materials",
  alternates: { canonical: "/templates" },
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
    title: "Template Gallery | 1000+ Professional Marketing Templates",
    description: "Browse our collection of 1000+ professional marketing templates. Posters, videos, flyers for restaurants, events, fitness, healthcare, beauty, automotive businesses.",
    url: "https://www.marketbrand.ai/templates",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-templates.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Template Gallery | 1000+ Professional Marketing Templates",
    description: "Browse our collection of 1000+ professional marketing templates. Posters, videos, flyers for restaurants, events, fitness, healthcare, beauty, automotive businesses.",
    images: ["/og-templates.jpg"],
  },
};

export default function TemplatesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Marketing Template Gallery",
    "description": "Professional marketing templates for businesses",
    "url": "https://www.marketbrand.ai/templates",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Business Templates",
          "url": "https://www.marketbrand.ai/templates#business"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Festival Templates",
          "url": "https://www.marketbrand.ai/templates#festival"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "General Templates",
          "url": "https://www.marketbrand.ai/templates#general"
        }
      ]
    }
  };

  const templateCategories = [
    {
      id: "business",
      title: "Business Templates",
      icon: "briefcase",
      description: "Professional templates for all business types",
      count: "500+",
      gradient: "from-blue-500 to-indigo-500",
      examples: ["Restaurant Promotions", "Service Marketing", "Product Launches", "Sale Announcements"]
    },
    {
      id: "festival",
      title: "Festival Templates",
      icon: "trophy",
      description: "Seasonal and festival marketing materials",
      count: "300+",
      gradient: "from-purple-500 to-pink-500",
      examples: ["Diwali Promotions", "Holi Celebrations", "New Year Offers", "Holiday Sales"]
    },
    {
      id: "general",
      title: "General Templates",
      icon: "palette",
      description: "Versatile templates for any occasion",
      count: "200+",
      gradient: "from-green-500 to-teal-500",
      examples: ["Social Media Posts", "Event Invitations", "Thank You Cards", "Announcements"]
    }
  ];

  const features = [
    {
      icon: "bolt",
      title: "Instant Download",
      description: "Download templates in seconds with your business details already applied"
    },
    {
      icon: "palette",
      title: "Professional Design",
      description: "All templates designed by professional graphic designers"
    },
    {
      icon: "mobile",
      title: "Mobile Optimized",
      description: "Templates work perfectly on all devices and social media platforms"
    },
    {
      icon: "sync",
      title: "Easy Customization",
      description: "Change colors, text, and branding in under 1 minute"
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
              <span className="text-white font-semibold">Templates</span>
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
                  <span className="text-green-300 text-sm font-semibold">✓ 1,000+ Templates</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                  <span className="text-blue-300 text-sm font-semibold flex items-center gap-1"><FaPalette className="inline" /> Professional Design</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <span className="text-purple-300 text-sm font-semibold flex items-center gap-1"><FaBolt className="inline" /> 1-Minute Download</span>
                </div>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black gradient-text mb-6 leading-tight">
                Template Gallery
              </h1>
              
              <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-8 leading-relaxed">
                Browse our collection of 1,000+ professional marketing templates. 
                <span className="text-white font-semibold">Perfect for any business, any occasion.</span>
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">1,000+</div>
                  <div className="text-gray-400 text-sm">Professional Templates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400 text-sm">Business Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">HD</div>
                  <div className="text-gray-400 text-sm">High Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">1-Min</div>
                  <div className="text-gray-400 text-sm">Customization Time</div>
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
                  href="/categories"
                  className="inline-flex items-center px-10 py-5 border-2 border-white/20 rounded-2xl text-white font-bold text-xl hover:bg-white/10 transition-all duration-300"
                >
                  <span className="flex items-center gap-2"><FaBullseye className="inline" /> Browse Categories</span>
                </Link>
              </div>

              <p className="text-gray-400 text-sm mt-6 flex items-center gap-2">
                <FaBolt className="inline" /> No Credit Card Required • 7-Day Free Trial • Cancel Anytime
              </p>
            </div>
          </div>
        </div>

        {/* Template Categories */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Find the perfect template for your business needs. 
                Each category contains professionally designed templates ready for customization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {templateCategories.map((category, index) => (
                <Link 
                  key={category.id} 
                  href={`/templates/${category.id}`}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 block"
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {category.icon === "briefcase" && <FaBriefcase className="text-white text-2xl" />}
                        {category.icon === "trophy" && <FaTrophy className="text-white text-2xl" />}
                        {category.icon === "palette" && <FaPalette className="text-white text-2xl" />}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                          {category.title}
                        </h3>
                        <div className="text-sm text-gray-400">{category.count} Templates</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <h4 className="text-white font-semibold">Popular Examples:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {category.examples.map((example, idx) => (
                          <div key={idx} className="text-sm text-gray-400 bg-gray-800/50 rounded-lg px-3 py-2">
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`w-full text-center px-8 py-4 bg-gradient-to-r ${category.gradient} rounded-2xl text-white font-bold text-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300`}>
                      Browse {category.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Why Choose Our Templates?
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Professional design meets instant customization. 
                Get marketing materials that work for your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                    {feature.icon === "bolt" && <FaBolt className="text-white text-3xl" />}
                    {feature.icon === "palette" && <FaPalette className="text-white text-3xl" />}
                    {feature.icon === "mobile" && <FaMobileAlt className="text-white text-3xl" />}
                    {feature.icon === "sync" && <FaSync className="text-white text-3xl" />}
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Template Preview Grid */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Popular Templates
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                See what our customers are creating. 
                These templates are downloaded most frequently.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-2xl">
                  <div className="aspect-[4/5] bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <FaPalette className="text-4xl mb-2 mx-auto" />
                      <div className="text-gray-400 text-sm">Template Preview</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Professional Template {item}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Perfect for business promotions and marketing campaigns
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-400 text-sm font-semibold">
                      {Math.floor(Math.random() * 500) + 100} downloads
                    </span>
                    <Link 
                      href="/"
                      className="text-white bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-all duration-300"
                    >
                      Use Template
                    </Link>
                  </div>
                </div>
              ))}
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
              Ready to Create Amazing Designs?
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Join 50,000+ businesses who are already using our professional templates. 
              Start your free trial and access all 1,000+ templates today!
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
              <FaBolt className="inline" /> Join 50,000+ Businesses • 1,000+ Templates • 1-Minute Creation
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


