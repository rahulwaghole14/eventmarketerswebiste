import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail Marketing Materials | Store Promotional Videos & Posters | MarketBrand.ai",
  description: "Professional retail promotional videos, store marketing posters & business materials. Download ready-made templates for retail stores, grocery shops, fashion boutiques, supermarkets. Boost retail business with MarketBrand.ai",
  keywords: "retail marketing materials, store promotional videos, grocery marketing posters, fashion boutique promotional content, retail store marketing, supermarket promotional templates",
  alternates: { canonical: "/category/retail-grocery-fashion" },
  openGraph: {
    title: "Retail Marketing Materials | Store Promotional Videos & Posters",
    description: "Professional retail promotional videos, store marketing posters & business materials. Download ready-made templates for retail stores, grocery shops, fashion boutiques, supermarkets.",
    url: "https://www.marketbrand.ai/category/retail-grocery-fashion",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-retail.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Marketing Materials | Store Promotional Videos & Posters",
    description: "Professional retail promotional videos, store marketing posters & business materials. Download ready-made templates for retail stores, grocery shops, fashion boutiques, supermarkets.",
    images: ["/og-retail.jpg"],
  },
};

export default function RetailGroceryFashionPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Retail Marketing Materials & Store Promotional Content",
    "description": "Professional retail promotional videos, store marketing posters & business materials for retail industry professionals",
    "provider": {
      "@type": "Organization",
      "name": "MarketBrand.ai",
      "url": "https://www.marketbrand.ai"
    },
    "serviceType": "Digital Marketing Services",
    "areaServed": "India",
    "offers": {
      "@type": "Offer",
      "price": "2000",
      "priceCurrency": "INR",
      "description": "Annual subscription for unlimited retail marketing materials"
    },
    "category": "Retail Marketing Services"
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
              <Link href="/#categories" className="text-gray-400 hover:text-white transition-colors">
                Categories
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-white font-semibold">Retail Marketing Materials</span>
            </nav>
          </div>
        </div>

        {/* Enhanced Hero Section */}
        <div className="relative py-24 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="text-center">
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                  <span className="text-blue-300 text-sm font-semibold">✓ Trusted by 4,200+ Retail Stores</span>
                </div>
                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full px-4 py-2">
                  <span className="text-indigo-300 text-sm font-semibold">⭐ 4.7/5 Rating</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <span className="text-purple-300 text-sm font-semibold">🚀 1-Minute Download</span>
                </div>
              </div>

              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-8 text-5xl shadow-2xl animate-pulse">
                🛍️
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black gradient-text mb-6 leading-[1.3] pt-1 pb-1">
                Retail Marketing Materials
              </h1>
              
              <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-8 leading-relaxed">
                Professional retail promotional videos, store marketing posters & business materials for 
                <span className="text-white font-semibold"> Retail Stores, Grocery Shops, Fashion Boutiques, Supermarkets, Shopping Centers</span> and more.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">4,200+</div>
                  <div className="text-gray-400 text-sm">Retail Stores</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">42,000+</div>
                  <div className="text-gray-400 text-sm">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">900+</div>
                  <div className="text-gray-400 text-sm">Retail Templates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">4.7/5</div>
                  <div className="text-gray-400 text-sm">Customer Rating</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl text-white font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  🚀 Download App Now - Free Trial
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

        {/* Success Stories Section */}
        <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Success Stories from Retail Professionals
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                See how retail professionals are boosting their business with our marketing materials
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-premium group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-2xl">
                    🏪
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Vikram Mehta</div>
                    <div className="text-sm text-gray-400">Fashion Store Owner, Mumbai</div>
                    <div className="text-xs text-indigo-400 font-medium">Style Mart Fashion</div>
                  </div>
                </div>
                <blockquote className="text-gray-300 leading-relaxed mb-4">
                  "MarketBrand transformed my fashion store's marketing! Professional promotional videos and posters in minutes. 
                  <span className="text-white font-semibold">Sales increased by 65% in just 3 months!</span> 
                  The quality is amazing and saves me hours on marketing."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-3 py-1">
                    <span className="text-green-300 text-xs font-semibold">✓ Verified Results</span>
                  </div>
                </div>
              </div>

              <div className="card-premium group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-2xl">
                    🛒
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Anjali Patel</div>
                    <div className="text-sm text-gray-400">Grocery Store Owner, Delhi</div>
                    <div className="text-xs text-indigo-400 font-medium">FreshMart Grocery</div>
                  </div>
                </div>
                <blockquote className="text-gray-300 leading-relaxed mb-4">
                  "As a grocery store owner, I needed professional promotional materials. MarketBrand's templates are perfect! 
                  <span className="text-white font-semibold">Customer footfall increased by 80%</span> 
                  and I can focus on business instead of marketing design."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-3 py-1">
                    <span className="text-green-300 text-xs font-semibold">✓ Verified Results</span>
                  </div>
                </div>
              </div>

              <div className="card-premium group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-2xl">
                    👗
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Priya Sharma</div>
                    <div className="text-sm text-gray-400">Boutique Owner, Bangalore</div>
                    <div className="text-xs text-indigo-400 font-medium">Elegant Boutique</div>
                  </div>
                </div>
                <blockquote className="text-gray-300 leading-relaxed mb-4">
                  "MarketBrand helped me create stunning promotional videos for my boutique business. 
                  <span className="text-white font-semibold">Revenue increased by 75%</span> 
                  and I'm now the most popular boutique in my area!"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-3 py-1">
                    <span className="text-green-300 text-xs font-semibold">✓ Verified Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Template Gallery Section */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Retail Marketing Template Gallery
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Professional templates designed specifically for retail industry professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-premium text-center space-y-6 group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto text-3xl group-hover:scale-110 transition-transform duration-300">
                  🎬
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                  Retail Promotional Videos
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Professional promotional videos for retail stores, grocery shops, and fashion boutiques. 
                  Perfect for social media, websites, and customer presentations.
                </p>
                <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-lg px-4 py-2">
                  <span className="text-blue-300 font-semibold">📱 45+ Video Templates Available</span>
                </div>
              </div>
              
              <div className="card-premium text-center space-y-6 group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto text-3xl group-hover:scale-110 transition-transform duration-300">
                  📢
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                  Store Marketing Posters
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Eye-catching promotional posters for retail stores, supermarkets, and shopping centers. 
                  High-resolution designs ready for print and digital use.
                </p>
                <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-lg px-4 py-2">
                  <span className="text-blue-300 font-semibold">🖼️ 180+ Poster Templates Available</span>
                </div>
              </div>
              
              <div className="card-premium text-center space-y-6 group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto text-3xl group-hover:scale-110 transition-transform duration-300">
                  💼
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                  Retail Business Promotion
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Complete marketing materials package for retail businesses including social media posts, 
                  business cards, flyers, and promotional content.
                </p>
                <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-lg px-4 py-2">
                  <span className="text-blue-300 font-semibold">📦 400+ Marketing Materials</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-5xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Everything you need to know about retail marketing materials
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  How quickly can I create retail marketing materials?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You can create professional retail marketing materials in under 1 minute! Simply choose your template, 
                  add your business details, and download instantly. Perfect for busy retail professionals who need 
                  quick, high-quality promotional content.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  What types of retail businesses can use these materials?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our templates work for all retail industry professionals including fashion stores, grocery shops, 
                  supermarkets, boutiques, shopping centers, and department stores. We have 
                  specialized designs for every aspect of the retail business.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  Do I need design skills to use these templates?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  No design skills required! Our templates are professionally designed and ready to use. You just need to 
                  add your business information and customize colors if needed. We've made it so simple that any retail 
                  professional can create stunning marketing materials.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  Can I use these materials for commercial purposes?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes! All our retail marketing templates come with commercial usage rights. You can use them for 
                  your retail business marketing, customer presentations, social media posts, and any other 
                  commercial purposes without any restrictions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="py-24 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Join 4,200+ retail professionals who are already boosting their business with professional 
              marketing materials. Download our app and start creating stunning promotional content in minutes!
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
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
              ⚡ Join 4,200+ Retail Professionals • 900+ Templates • 1-Minute Download
            </p>
          </div>
        </div>
      </div>
    </>
  );
}