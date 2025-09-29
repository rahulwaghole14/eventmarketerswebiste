import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | MarketBrand.ai - Empowering Businesses with Professional Marketing",
  description: "Learn about MarketBrand.ai's mission to make professional marketing simple and affordable for every business. Join 50,000+ businesses already using our platform.",
  keywords: "about MarketBrand, company mission, business marketing, professional design, team, vision",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | MarketBrand.ai - Empowering Businesses with Professional Marketing",
    description: "Learn about MarketBrand.ai's mission to make professional marketing simple and affordable for every business.",
    url: "https://www.marketbrand.ai/about",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-about.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | MarketBrand.ai - Empowering Businesses with Professional Marketing",
    description: "Learn about MarketBrand.ai's mission to make professional marketing simple and affordable for every business.",
    images: ["/og-about.jpg"],
  },
};

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About MarketBrand.ai",
    "description": "Learn about MarketBrand.ai's mission to empower businesses with professional marketing materials",
    "url": "https://www.marketbrand.ai/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "MarketBrand.ai",
      "url": "https://www.marketbrand.ai",
      "foundingDate": "2024",
      "description": "Professional marketing materials platform for businesses"
    }
  };

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
              <span className="text-white font-semibold">About</span>
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
                  <span className="text-green-300 text-sm font-semibold">✓ 50,000+ Businesses</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                  <span className="text-blue-300 text-sm font-semibold">🎨 1,000+ Templates</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <span className="text-purple-300 text-sm font-semibold">🚀 Founded 2024</span>
                </div>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black gradient-text mb-6 leading-tight">
                About MarketBrand.ai
              </h1>
              
              <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-8 leading-relaxed">
                We're on a mission to make professional marketing simple and affordable for every business. 
                <span className="text-white font-semibold">No design skills required, just results.</span>
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50,000+</div>
                  <div className="text-gray-400 text-sm">Happy Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">1,000+</div>
                  <div className="text-gray-400 text-sm">Professional Templates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">6</div>
                  <div className="text-gray-400 text-sm">Business Categories</div>
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
                  🚀 Start Free Trial
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-10 py-5 border-2 border-white/20 rounded-2xl text-white font-bold text-xl hover:bg-white/10 transition-all duration-300"
                >
                  💬 Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-6">Our Mission</h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    To democratize professional marketing design by making it accessible, affordable, and effortless for every business, regardless of size or design expertise.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    We believe every business deserves access to professional marketing materials that can compete with the biggest brands. Our platform removes the barriers of cost, time, and design skills.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-white font-semibold">No Design Skills Required</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-white font-semibold">Affordable for Every Business</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-white font-semibold">Results in Minutes, Not Days</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-6">Our Vision</h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    To become the world's leading platform for business marketing materials, empowering 1 million businesses to create professional designs effortlessly.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    We envision a world where every business, from local shops to global enterprises, has access to the same level of professional marketing materials that drive real business growth.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Why We Built This</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Traditional marketing agencies charge thousands of dollars for designs that take weeks to deliver. 
                    We saw an opportunity to provide the same quality results in minutes, at a fraction of the cost.
                  </p>
                </div>
              </div>
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
              Join Our Mission
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Be part of the revolution that's making professional marketing accessible to every business. 
              Start creating amazing designs today!
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
                href="/contact"
                className="inline-flex items-center px-12 py-6 border-2 border-white/30 rounded-2xl text-white font-bold text-2xl hover:bg-white/10 transition-all duration-300"
              >
                💬 Contact Our Team
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

