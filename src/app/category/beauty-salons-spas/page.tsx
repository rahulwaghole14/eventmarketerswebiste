import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beauty Marketing Materials | Salon Promotional Videos & Posters | MarketBrand.ai",
  description: "Professional beauty promotional videos, salon marketing posters & wellness materials. Download ready-made templates for beauty salons, spas, aesthetic clinics, nail studios. Boost beauty business with MarketBrand.ai",
  keywords: "beauty marketing materials, salon promotional videos, spa marketing posters, beauty promotional content, aesthetic clinic marketing, wellness promotional templates",
  alternates: { canonical: "/category/beauty-salons-spas" },
  openGraph: {
    title: "Beauty Marketing Materials | Salon Promotional Videos & Posters",
    description: "Professional beauty promotional videos, salon marketing posters & wellness materials. Download ready-made templates for beauty salons, spas, aesthetic clinics, nail studios.",
    url: "https://www.marketbrand.ai/category/beauty-salons-spas",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-beauty.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty Marketing Materials | Salon Promotional Videos & Posters",
    description: "Professional beauty promotional videos, salon marketing posters & wellness materials. Download ready-made templates for beauty salons, spas, aesthetic clinics, nail studios.",
    images: ["/og-beauty.jpg"],
  },
};

export default function BeautySalonsSpasPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Beauty Marketing Materials & Salon Promotional Content",
    "description": "Professional beauty promotional videos, salon marketing posters & wellness materials for beauty industry professionals",
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
      "description": "Annual subscription for unlimited beauty marketing materials"
    },
    "category": "Beauty Marketing Services"
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
              <span className="text-white font-semibold">Beauty Marketing Materials</span>
            </nav>
          </div>
        </div>

        {/* Enhanced Hero Section */}
        <div className="relative py-24 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-rose-500/20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="text-center">
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <span className="text-purple-300 text-sm font-semibold">✓ Trusted by 3,200+ Beauty Professionals</span>
                </div>
                <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-full px-4 py-2">
                  <span className="text-pink-300 text-sm font-semibold">⭐ 4.8/5 Rating</span>
                </div>
                <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 rounded-full px-4 py-2">
                  <span className="text-rose-300 text-sm font-semibold">🚀 1-Minute Download</span>
                </div>
              </div>

              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 text-5xl shadow-2xl animate-pulse">
                💄
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black gradient-text mb-6 leading-[1.3] pt-1 pb-1">
                Beauty Marketing Materials
              </h1>
              
              <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-8 leading-relaxed">
                Professional beauty promotional videos, salon marketing posters & wellness materials for 
                <span className="text-white font-semibold"> Beauty Salons, Spas, Aesthetic Clinics, Nail Studios, Wellness Centers</span> and more.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">3,200+</div>
                  <div className="text-gray-400 text-sm">Beauty Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">32,000+</div>
                  <div className="text-gray-400 text-sm">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">700+</div>
                  <div className="text-gray-400 text-sm">Beauty Templates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">4.8/5</div>
                  <div className="text-gray-400 text-sm">Customer Rating</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
                Success Stories from Beauty Professionals
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                See how beauty professionals are boosting their business with our marketing materials
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-premium group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                    💄
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Priya Singh</div>
                    <div className="text-sm text-gray-400">Salon Owner, Mumbai</div>
                    <div className="text-xs text-indigo-400 font-medium">Glamour Beauty Salon</div>
                  </div>
                </div>
                <blockquote className="text-gray-300 leading-relaxed mb-4">
                  "MarketBrand transformed my salon's marketing! Professional promotional videos and posters in minutes. 
                  <span className="text-white font-semibold">Bookings increased by 85% in just 3 months!</span> 
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                    🧖
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Anjali Patel</div>
                    <div className="text-sm text-gray-400">Spa Owner, Delhi</div>
                    <div className="text-xs text-indigo-400 font-medium">Serenity Spa</div>
                  </div>
                </div>
                <blockquote className="text-gray-300 leading-relaxed mb-4">
                  "As a spa owner, I needed professional promotional materials. MarketBrand's templates are perfect! 
                  <span className="text-white font-semibold">Client bookings doubled</span> 
                  and I can focus on wellness services instead of marketing design."
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                    💅
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Rajesh Kumar</div>
                    <div className="text-sm text-gray-400">Nail Studio Owner, Bangalore</div>
                    <div className="text-xs text-indigo-400 font-medium">Nail Art Studio</div>
                  </div>
                </div>
                <blockquote className="text-gray-300 leading-relaxed mb-4">
                  "MarketBrand helped me create stunning promotional videos for my nail studio. 
                  <span className="text-white font-semibold">Revenue increased by 95%</span> 
                  and I'm now the most popular nail studio in my area!"
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
                Beauty Marketing Template Gallery
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Professional templates designed specifically for beauty industry professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-premium text-center space-y-6 group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto text-3xl group-hover:scale-110 transition-transform duration-300">
                  🎬
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                  Beauty Promotional Videos
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Professional promotional videos for beauty salons, spas, and aesthetic clinics. 
                  Perfect for social media, websites, and client presentations.
                </p>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg px-4 py-2">
                  <span className="text-purple-300 font-semibold">📱 40+ Video Templates Available</span>
                </div>
              </div>
              
              <div className="card-premium text-center space-y-6 group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto text-3xl group-hover:scale-110 transition-transform duration-300">
                  📢
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                  Salon Marketing Posters
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Eye-catching promotional posters for beauty salons, spas, and wellness centers. 
                  High-resolution designs ready for print and digital use.
                </p>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg px-4 py-2">
                  <span className="text-purple-300 font-semibold">🖼️ 160+ Poster Templates Available</span>
                </div>
              </div>
              
              <div className="card-premium text-center space-y-6 group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto text-3xl group-hover:scale-110 transition-transform duration-300">
                  💼
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                  Beauty Business Promotion
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Complete marketing materials package for beauty businesses including social media posts, 
                  business cards, flyers, and promotional content.
                </p>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg px-4 py-2">
                  <span className="text-purple-300 font-semibold">📦 350+ Marketing Materials</span>
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
                Everything you need to know about beauty marketing materials
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  How quickly can I create beauty marketing materials?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You can create professional beauty marketing materials in under 1 minute! Simply choose your template, 
                  add your business details, and download instantly. Perfect for busy beauty professionals who need 
                  quick, high-quality promotional content.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  What types of beauty businesses can use these materials?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our templates work for all beauty industry professionals including salons, spas, 
                  aesthetic clinics, nail studios, wellness centers, and beauty consultants. We have 
                  specialized designs for every aspect of the beauty business.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  Do I need design skills to use these templates?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  No design skills required! Our templates are professionally designed and ready to use. You just need to 
                  add your business information and customize colors if needed. We've made it so simple that any beauty 
                  professional can create stunning marketing materials.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  Can I use these materials for commercial purposes?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes! All our beauty marketing templates come with commercial usage rights. You can use them for 
                  your beauty business marketing, client presentations, social media posts, and any other 
                  commercial purposes without any restrictions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="py-24 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
              Ready to Transform Your Beauty Business?
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Join 3,200+ beauty professionals who are already boosting their business with professional 
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
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
              ⚡ Join 3,200+ Beauty Professionals • 700+ Templates • 1-Minute Download
            </p>
          </div>
        </div>
      </div>
    </>
  );
}