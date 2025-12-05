import Link from "next/link";
import type { Metadata } from "next";
import { FaMobileAlt, FaPalette, FaBolt, FaLock } from "react-icons/fa";

export const metadata: Metadata = {
  title: "App Store Coming Soon | MarketBrand.ai",
  description: "MarketBrand app is coming soon to the Apple App Store. Download now from Google Play Store or get notified when it's available.",
  keywords: "App Store, iOS app, coming soon, MarketBrand iOS, Apple App Store",
  alternates: { canonical: "/app-store-coming-soon" },
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
    title: "App Store Coming Soon | MarketBrand.ai",
    description: "MarketBrand app is coming soon to the Apple App Store. Download now from Google Play Store.",
    url: "https://www.marketbrand.ai/app-store-coming-soon",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export default function AppStoreComingSoonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "App Store Coming Soon",
            "description": "MarketBrand app is coming soon to the Apple App Store",
            "url": "https://www.marketbrand.ai/app-store-coming-soon"
          })
        }}
      />

      <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex items-center justify-center space-x-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-white font-semibold">App Store Coming Soon</span>
            </nav>
          </div>

          {/* Apple Logo Animation */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
                <svg className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce">
                ⏳
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-black gradient-text mb-6 leading-tight">
            Coming Soon to App Store
          </h1>
          
          <p className="text-2xl text-gray-300 font-light mb-4 leading-relaxed">
            We're working hard to bring MarketBrand to iOS
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Our team is putting the finishing touches on the iOS version. 
            In the meantime, you can download MarketBrand on Android from Google Play Store.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            {/* Google Play Store Button */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.marketbrand"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gray-600 rounded-2xl text-white font-bold text-lg hover:scale-105 transition-all duration-300 group shadow-xl"
            >
              <svg className="w-10 h-10 mr-4" viewBox="0 0 24 24" fill="none">
                <path d="M3.609 1.814L13.792 12L3.609 22.186C3.386 22.409 3.386 22.773 3.609 22.996C3.832 23.219 4.196 23.219 4.419 22.996L14.602 12.814C14.825 12.591 14.825 12.227 14.602 12.004L4.419 1.814C4.196 1.591 3.832 1.591 3.609 1.814Z" fill="#4285F4"/>
                <path d="M14.602 11.186L4.419 1.004C4.196 0.781 3.832 0.781 3.609 1.004C3.386 1.227 3.386 1.591 3.609 1.814L13.792 12L3.609 22.186C3.386 22.409 3.386 22.773 3.609 22.996C3.832 23.219 4.196 23.219 4.419 22.996L14.602 12.814C14.825 12.591 14.825 12.227 14.602 12.004Z" fill="#34A853"/>
                <path d="M20.391 11.186L10.208 1.004C9.985 0.781 9.621 0.781 9.398 1.004C9.175 1.227 9.175 1.591 9.398 1.814L19.581 12L9.398 22.186C9.175 22.409 9.175 22.773 9.398 22.996C9.621 23.219 9.985 23.219 10.208 22.996L20.391 12.814C20.614 12.591 20.614 12.227 20.391 12.004Z" fill="#FBBC04"/>
                <path d="M20.391 12.814L10.208 22.996C9.985 23.219 9.621 23.219 9.398 22.996C9.175 22.773 9.175 22.409 9.398 22.186L19.581 12L9.398 1.814C9.175 1.591 9.175 1.227 9.398 1.004C9.621 0.781 9.985 0.781 10.208 1.004L20.391 11.186C20.614 11.409 20.614 11.773 20.391 11.996Z" fill="#EA4335"/>
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-xs opacity-75">GET IT ON</span>
                <span className="font-bold text-lg">Google Play</span>
              </div>
            </Link>

            <Link
              href="/download"
              className="inline-flex items-center px-10 py-5 border-2 border-white/30 rounded-2xl text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 shadow-xl"
            >
              <FaMobileAlt className="mr-2 inline" />
              View Download Page
            </Link>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 mb-12">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
              <FaPalette className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-2">Same Great Features</h3>
              <p className="text-gray-400 text-sm">All the features you love on Android will be available on iOS</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
              <FaBolt className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-2">Optimized Performance</h3>
              <p className="text-gray-400 text-sm">Built specifically for iOS with smooth performance and native feel</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
              <FaLock className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-2">Secure & Private</h3>
              <p className="text-gray-400 text-sm">Your data security and privacy are our top priorities</p>
            </div>
          </div>

          {/* Notification Form */}
          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-3xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Get Notified When It's Ready</h2>
            <p className="text-gray-300 mb-6">We'll send you an email as soon as MarketBrand is available on the App Store</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-gray-900/50 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl px-8 py-3 font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Notify Me
              </button>
            </form>
          </div>

          {/* Back Link */}
          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

