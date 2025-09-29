import Section from "@/components/Section";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Marketing Design Features | Professional Templates & Customization Tools | MarketBrand.ai",
  description: "Discover powerful marketing design features: 1000+ professional templates, instant customization, multi-language support, mobile-first design. Create stunning marketing materials in minutes with MarketBrand.ai",
  keywords: "marketing design features, professional templates, design customization tools, mobile marketing app, business design software, marketing automation, design templates, business marketing tools",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Marketing Design Features | Professional Templates & Customization Tools",
    description: "Discover powerful marketing design features: 1000+ professional templates, instant customization, multi-language support, mobile-first design. Create stunning marketing materials in minutes.",
    url: "https://www.marketbrand.ai/features",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-features.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Design Features | Professional Templates & Customization Tools",
    description: "Discover powerful marketing design features: 1000+ professional templates, instant customization, multi-language support, mobile-first design. Create stunning marketing materials in minutes.",
    images: ["/og-features.jpg"],
  },
};

export default function FeaturesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MarketBrand.ai - Marketing Design Features",
    "description": "Professional marketing design features with 1000+ templates, instant customization, multi-language support, and mobile-first design",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "iOS, Android, Web",
    "offers": {
      "@type": "Offer",
      "price": "2000",
      "priceCurrency": "INR",
      "description": "Annual subscription for unlimited marketing materials"
    },
    "featureList": [
      "1000+ Professional Templates",
      "Lightning Fast Creation",
      "Mobile-First Design",
      "Multi-Language Support",
      "Posters & Videos",
      "Business Integration"
    ],
    "provider": {
      "@type": "Organization",
      "name": "MarketBrand.ai",
      "url": "https://www.marketbrand.ai"
    }
  };

  const features = [
    {
      icon: "🎨",
      title: "1000+ Professional Templates",
      description: "Beautifully designed templates for every business category - restaurants, events, schools, weddings, fitness, healthcare, and more.",
      details: ["Industry-specific designs", "Seasonal collections", "Trending styles", "Regular updates", "HD quality", "Print-ready"],
      stats: "1,000+ Templates",
      usage: "Used by 50,000+ businesses",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: "⚡",
      title: "Lightning Fast Creation",
      description: "Create and download your marketing materials in under 1 minute with our intuitive mobile interface and smart automation.",
      details: ["One-tap customization", "Instant preview", "Quick download", "No design skills needed", "Smart suggestions", "Auto-formatting"],
      stats: "1-Minute Creation",
      usage: "2,847 downloads this week",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "Designed specifically for mobile devices, allowing you to create professional materials on the go with touch-optimized interface.",
      details: ["Touch-optimized interface", "Offline capability", "Cloud sync", "Cross-platform", "Responsive design", "Gesture controls"],
      stats: "Mobile Optimized",
      usage: "95% mobile usage",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🌍",
      title: "Multi-Language Support",
      description: "Create content in multiple languages including English, Hindi, Marathi, Tamil, Telugu, and more regional languages with cultural designs.",
      details: ["15+ languages", "Regional fonts", "Cultural designs", "Local templates", "RTL support", "Auto-translation"],
      stats: "15+ Languages",
      usage: "Used in 25+ cities",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "🎬",
      title: "Posters & Videos",
      description: "Create both static posters and dynamic videos for maximum marketing impact across all platforms with professional quality.",
      details: ["Static posters", "Animated videos", "Social media formats", "Print-ready files", "4K quality", "Multiple formats"],
      stats: "All Formats",
      usage: "500+ videos created daily",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: "💼",
      title: "Business Integration",
      description: "Seamlessly integrate your business information, logo, and branding into every design automatically with smart templates.",
      details: ["Auto-branding", "Logo placement", "Contact integration", "Consistent styling", "Brand guidelines", "Template library"],
      stats: "Auto-Branding",
      usage: "99% brand consistency",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  const testimonials = [
    {
      text: "The template library is incredible! Found perfect designs for my restaurant in seconds. The auto-branding feature saves me hours every week.",
      author: "Priya Sharma",
      role: "Restaurant Owner",
      business: "Spice Garden",
      avatar: "🍽️",
      feature: "Professional Templates"
    },
    {
      text: "Lightning fast creation is no joke! I can create promotional videos for my gym in under a minute. My social media engagement increased by 300%!",
      author: "Rajesh Kumar",
      role: "Gym Owner",
      business: "FitLife Gym",
      avatar: "💪",
      feature: "Lightning Fast Creation"
    },
    {
      text: "Multi-language support is a game-changer for my wedding planning business. I can create content in Hindi, English, and Marathi effortlessly.",
      author: "Anjali Patel",
      role: "Wedding Planner",
      business: "Dream Weddings",
      avatar: "💒",
      feature: "Multi-Language Support"
    }
  ];

  const technicalSpecs = [
    { category: "File Formats", details: "PNG, JPG, PDF, MP4, MOV, GIF" },
    { category: "Resolution", details: "Up to 4K (3840×2160) for videos, 300 DPI for print" },
    { category: "Languages", details: "15+ languages with regional font support" },
    { category: "Storage", details: "Cloud sync with offline capability" },
    { category: "Compatibility", details: "iOS 12+, Android 8+, Web browsers" },
    { category: "Performance", details: "Sub-second loading, 99.9% uptime" }
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
            <Breadcrumb items={[
              { name: "Home", href: "/" },
              { name: "Features", href: "/features" }
            ]} />
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
                  <span className="text-green-300 text-sm font-semibold">✓ Trusted by 50,000+ Businesses</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                  <span className="text-blue-300 text-sm font-semibold">⭐ 4.9/5 Rating</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <span className="text-purple-300 text-sm font-semibold">🚀 1-Minute Creation</span>
                </div>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black gradient-text mb-6 leading-tight">
                Powerful Features for <span className="text-white">Every Business</span>
            </h1>
              
              <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Everything you need to create stunning marketing materials that drive results. 
                <span className="text-white font-semibold">No design experience required.</span>
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">1,000+</div>
                  <div className="text-gray-400 text-sm">Professional Templates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50,000+</div>
                  <div className="text-gray-400 text-sm">Active Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">15+</div>
                  <div className="text-gray-400 text-sm">Languages Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">1-Min</div>
                  <div className="text-gray-400 text-sm">Creation Time</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  🚀 Start Free Trial - 7 Days
                </Link>
                <Link 
                  href="/#pricing"
                  className="inline-flex items-center px-10 py-5 border-2 border-white/20 rounded-2xl text-white font-bold text-xl hover:bg-white/10 transition-all duration-300"
                >
                  💰 View Pricing Plans
                </Link>
              </div>

              <p className="text-gray-400 text-sm mt-6">
                ⚡ No Credit Card Required • 7-Day Free Trial • Cancel Anytime
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Features Grid */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Complete Design Solution
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Everything you need in one powerful app - professional templates, instant customization, and seamless business integration
              </p>
      </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                          {feature.title}
                        </h3>
                        <div className="text-sm text-gray-400">{feature.usage}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                {feature.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                          </div>
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`bg-gradient-to-r ${feature.gradient}/20 border border-white/10 rounded-lg px-4 py-2`}>
                      <span className="text-sm font-semibold text-white">{feature.stats}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Testimonials by Feature */}
        <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                What Our Customers Say About Our Features
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Real feedback from businesses using our powerful features to grow their marketing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-xs text-indigo-400 font-medium">{testimonial.business}</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-300 leading-relaxed mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-indigo-400 font-semibold">
                      Featured: {testimonial.feature}
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Technical Specifications
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Professional-grade features with enterprise-level performance and reliability
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-3">{spec.category}</h3>
                  <p className="text-gray-300">{spec.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Create professional designs in 3 simple steps - no design skills required
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
                <h3 className="text-2xl font-bold text-white">Choose Template</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Browse our extensive library of 1000+ professional templates and select the perfect design for your business.
                </p>
                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-lg px-4 py-2">
                  <span className="text-indigo-300 font-semibold">🎨 1000+ Templates Available</span>
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
                <h3 className="text-2xl font-bold text-white">Customize Design</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Add your text, logo, and brand colors with our intuitive editor. Auto-branding ensures consistent styling.
                </p>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg px-4 py-2">
                  <span className="text-purple-300 font-semibold">⚡ 1-Minute Customization</span>
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
                <h3 className="text-2xl font-bold text-white">Download & Share</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Get high-quality files instantly in multiple formats and share across all your marketing channels.
                </p>
                <div className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-500/30 rounded-lg px-4 py-2">
                  <span className="text-pink-300 font-semibold">📱 All Formats Supported</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-16">
              <Link 
                href="/"
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
              Join 50,000+ businesses who are already creating stunning marketing materials with our powerful features. 
              Start your free trial today and experience the difference!
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
                href="/"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                🚀 Start Free Trial Now
              </Link>
              <Link 
                href="/#pricing"
                className="inline-flex items-center px-12 py-6 border-2 border-white/30 rounded-2xl text-white font-bold text-2xl hover:bg-white/10 transition-all duration-300"
              >
                💰 View Pricing Plans
              </Link>
            </div>
            
            <p className="text-gray-400 text-lg mt-8">
              ⚡ Join 50,000+ Businesses • 1,000+ Templates • 1-Minute Creation
            </p>
          </div>
        </div>
      </div>
    </>
  );
}