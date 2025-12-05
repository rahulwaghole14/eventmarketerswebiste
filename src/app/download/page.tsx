import Link from "next/link";
import type { Metadata } from "next";
import { FaMobileAlt, FaBolt, FaComments, FaPalette } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";

export const metadata: Metadata = {
  title: "Download MarketBrand App | Free Download for iOS & Android | MarketBrand.ai",
  description: "Download MarketBrand app for iOS and Android. Create professional marketing materials in minutes. Free download with 7-day trial. No credit card required.",
  keywords: "download MarketBrand app, mobile app download, iOS app, Android app, marketing app, design app, free download",
  alternates: { canonical: "/download" },
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
    title: "Download MarketBrand App | Free Download for iOS & Android",
    description: "Download MarketBrand app for iOS and Android. Create professional marketing materials in minutes. Free download with 7-day trial.",
    url: "https://www.marketbrand.ai/download",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-download.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download MarketBrand App | Free Download for iOS & Android",
    description: "Download MarketBrand app for iOS and Android. Create professional marketing materials in minutes. Free download with 7-day trial.",
    images: ["/og-download.jpg"],
  },
};

export default function DownloadPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MarketBrand.ai",
    "description": "Professional marketing materials creation app",
    "url": "https://www.marketbrand.ai/download",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": ["iOS", "Android"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "description": "Free download with 7-day trial"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "50000"
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
              <span className="text-white font-semibold">Download App</span>
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2">
                    <span className="text-green-300 text-sm font-semibold">✓ Free Download</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                    <span className="text-blue-300 text-sm font-semibold flex items-center gap-1"><FaMobileAlt className="inline" /> iOS & Android</span>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                    <span className="text-purple-300 text-sm font-semibold flex items-center gap-1"><FaBolt className="inline" /> 1-Min Creation</span>
                  </div>
                </div>

                <h1 className="text-5xl lg:text-6xl font-black gradient-text mb-6 leading-tight">
                  Download MarketBrand App
                </h1>
                
                <p className="text-xl text-gray-300 font-light leading-relaxed">
                  Create professional marketing materials on your mobile device. 
                  <span className="text-white font-semibold">Download now and start creating in minutes.</span>
                </p>

                {/* App Store Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Google Play Store Button */}
                  <Link 
                    href="https://play.google.com/store/apps/details?id=com.marketbrand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 rounded-2xl text-white font-semibold hover:scale-105 transition-all duration-300 group"
                    aria-label="Download from Google Play Store"
                  >
                    <svg className="w-8 h-8 mr-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12L3.609 22.186C3.386 22.409 3.386 22.773 3.609 22.996C3.832 23.219 4.196 23.219 4.419 22.996L14.602 12.814C14.825 12.591 14.825 12.227 14.602 12.004L4.419 1.814C4.196 1.591 3.832 1.591 3.609 1.814Z"/>
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-xs opacity-75">GET IT ON</span>
                      <span className="font-bold">Google Play</span>
                    </div>
                  </Link>
                  
                  {/* Apple App Store Button */}
                  <Link 
                    href="/app-store-coming-soon"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 rounded-2xl text-white font-semibold hover:scale-105 transition-all duration-300 group"
                  >
                    <svg className="w-8 h-8 mr-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-xs opacity-75">Download on the</span>
                      <span className="font-bold">App Store</span>
                    </div>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>7-Day Free Trial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>No Credit Card Required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>50,000+ Downloads</span>
                  </div>
                </div>
              </div>
              
              {/* Right Content - QR Code & Mobile Preview */}
              <div className="relative">
                {/* QR Code */}
                <div className="bg-white p-8 rounded-3xl shadow-2xl mb-8 mx-auto w-fit">
                  <div className="w-48 h-48 bg-gray-200 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <FaMobileAlt className="text-4xl mb-2 mx-auto" />
                      <div className="text-gray-600 text-sm">QR Code</div>
                      <div className="text-gray-500 text-xs">Scan to Download</div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Preview */}
                <div className="relative mx-auto w-64 h-96 bg-gray-800 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-b from-indigo-500/10 to-purple-500/10 rounded-2xl overflow-hidden">
                    <div className="p-4 space-y-4">
                      <div className="text-center">
                        <div className="text-white font-bold text-lg">MarketBrand</div>
                        <div className="text-gray-300 text-sm">Marketing Made Easy</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white/10 rounded-lg p-3 text-center">
                          <FaPalette className="text-2xl mb-1 mx-auto" />
                          <div className="text-white text-xs">Templates</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 text-center">
                          <FaMobileAlt className="text-2xl mb-1 mx-auto" />
                          <div className="text-white text-xs">Create</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Pages */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Learn More</h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Explore our platform and get the most out of MarketBrand
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link 
                href="/features"
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                    <FaBolt className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">App Features</h3>
                  <p className="text-gray-300">Discover all the powerful features available in the MarketBrand app</p>
                </div>
              </Link>

              <Link 
                href="/help"
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                    <FaComments className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">Get Help</h3>
                  <p className="text-gray-300">Need help getting started? Check out our comprehensive help center</p>
                </div>
              </Link>

              <Link 
                href="/blog"
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                    📝
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">App Tutorials</h3>
                  <p className="text-gray-300">Learn how to use the app effectively with our step-by-step tutorials</p>
                </div>
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
              Ready to Start Creating?
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Join 50,000+ businesses who are already creating professional marketing materials with MarketBrand. 
              Download now and start your free trial!
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
                <span className="text-white font-semibold">50,000+ Downloads</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/pricing"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                💰 View Pricing Plans
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-12 py-6 border-2 border-white/30 rounded-2xl text-white font-bold text-2xl hover:bg-white/10 transition-all duration-300"
              >
                <span className="flex items-center gap-2"><FaComments className="inline" /> Contact Support</span>
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


