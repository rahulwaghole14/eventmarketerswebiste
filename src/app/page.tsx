import Link from "next/link";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import CategoryGrid from "@/components/CategoryGrid";
import Testimonial from "@/components/Testimonial";
import Seo from "@/components/Seo";

export default function HomePage() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MarketBrand.ai",
    "url": "https://www.marketbrand.ai",
    "logo": "https://www.marketbrand.ai/logo.png",
  };

  return (
    <>
      <Seo jsonLd={orgLd} />
      
      {/* Ultra-Modern Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
            {/* Left Content */}
            <div className="space-y-10">
            <div className="space-y-8">
                {/* Status Badge */}
                <div className="inline-flex items-center px-6 py-3 rounded-full glass animate-shimmer">
                  <div className="relative">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                    <span className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></span>
                  </div>
                  <span className="text-sm font-semibold text-white">Live Now - 50,000+ Users Creating</span>
                  <div className="ml-3 px-2 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
                    <span className="text-xs text-green-300">+2,857 this week</span>
                  </div>
                </div>
                
                {/* Main Headline */}
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight">
                    <span className="text-white">Get Ready-Made</span><br/>
                    <span className="gradient-text animate-gradient">Marketing Materials</span><br/>
                    <span className="text-white">for Your Business</span>
                </h1>
                  
                  {/* Subtitle */}
                  <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl">
                    Professional posters & videos in 1 minute with your business details.
                  </p>
                </div>
                
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl font-light">
                  Stop struggling with expensive designers. Get professional marketing materials instantly. 
                  Download our app, choose from 1000+ ready-made templates, and boost your business today.
                </p>
              </div>
              
              {/* App Store Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center" id="start">
                {/* Google Play Store Button */}
                <button className="btn-secondary text-sm px-8 py-4 rounded-xl font-semibold group flex items-center justify-center space-x-3 shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  {/* Google Logo SVG */}
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.814L13.792 12L3.609 22.186C3.386 22.409 3.386 22.773 3.609 22.996C3.832 23.219 4.196 23.219 4.419 22.996L14.602 12.814C14.825 12.591 14.825 12.227 14.602 12.004L4.419 1.814C4.196 1.591 3.832 1.591 3.609 1.814Z" fill="#4285F4"/>
                    <path d="M14.602 11.186L4.419 1.004C4.196 0.781 3.832 0.781 3.609 1.004C3.386 1.227 3.386 1.591 3.609 1.814L13.792 12L3.609 22.186C3.386 22.409 3.386 22.773 3.609 22.996C3.832 23.219 4.196 23.219 4.419 22.996L14.602 12.814C14.825 12.591 14.825 12.227 14.602 12.004Z" fill="#34A853"/>
                    <path d="M20.391 11.186L10.208 1.004C9.985 0.781 9.621 0.781 9.398 1.004C9.175 1.227 9.175 1.591 9.398 1.814L19.581 12L9.398 22.186C9.175 22.409 9.175 22.773 9.398 22.996C9.621 23.219 9.985 23.219 10.208 22.996L20.391 12.814C20.614 12.591 20.614 12.227 20.391 12.004Z" fill="#FBBC04"/>
                    <path d="M20.391 12.814L10.208 22.996C9.985 23.219 9.621 23.219 9.398 22.996C9.175 22.773 9.175 22.409 9.398 22.186L19.581 12L9.398 1.814C9.175 1.591 9.175 1.227 9.398 1.004C9.621 0.781 9.985 0.781 10.208 1.004L20.391 11.186C20.614 11.409 20.614 11.773 20.391 11.996Z" fill="#EA4335"/>
                  </svg>
                  <div className="flex flex-col items-start relative z-10">
                    <span className="text-xs opacity-75">🚀 FREE DOWNLOAD</span>
                    <span className="font-bold">Google Play</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                
                {/* Apple App Store Button */}
                <button className="btn-secondary text-sm px-8 py-4 rounded-xl font-semibold group flex items-center justify-center space-x-3 shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  {/* Apple Logo SVG */}
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  <div className="flex flex-col items-start relative z-10">
                    <span className="text-xs opacity-75">📱 FREE DOWNLOAD</span>
                    <span className="font-bold">App Store</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>1000+ Professional Templates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Download in Under 2 Minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>No Design Skills Required</span>
                </div>
              </div>
              
              {/* Business Benefits */}
              <div className="flex flex-wrap items-center gap-6 text-xs">
                <div className="flex items-center space-x-2 glass px-3 py-2 rounded-full">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-white">50,000+ Businesses</span>
                </div>
                <div className="flex items-center space-x-2 glass px-3 py-2 rounded-full">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="font-medium text-white">Ready-Made Templates</span>
                </div>
                <div className="flex items-center space-x-2 glass px-3 py-2 rounded-full">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="font-medium text-white">No Design Skills Needed</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Premium App Showcase */}
            <div className="relative">
              {/* Main Phone Mockup */}
              <div className="relative mx-auto w-72 h-[600px] glass rounded-[2.5rem] p-2 shadow-2xl animate-float">
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-purple-500/10 z-10"></div>
                  
                  {/* Status Bar */}
                  <div className="relative z-20 flex justify-between items-center px-6 py-4 text-white text-sm font-medium">
                    <span className="font-mono">08:14</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Market Brand Logo Header */}
                  <div className="relative z-20 px-6 py-4 border-b border-white/10">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">MB</span>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold text-lg">MarketBrand</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="relative z-20 px-6 py-4 space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Ready-Made Marketing Materials</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="glass p-3 rounded-xl hover:glass-hover transition-all duration-300 group cursor-pointer">
                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">📢</div>
                        <div className="text-white font-bold text-sm">Sale Posters</div>
                      </div>
                      <div className="glass p-3 rounded-xl hover:glass-hover transition-all duration-300 group cursor-pointer">
                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">🎬</div>
                        <div className="text-white font-bold text-sm">Promo Videos</div>
                      </div>
                      <div className="glass p-3 rounded-xl hover:glass-hover transition-all duration-300 group cursor-pointer">
                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">📋</div>
                        <div className="text-white font-bold text-sm">Business Design</div>
                      </div>
                      <div className="glass p-3 rounded-xl hover:glass-hover transition-all duration-300 group cursor-pointer">
                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">📱</div>
                        <div className="text-white font-bold text-sm">Instant Share</div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl py-3 text-center cursor-pointer hover:shadow-lg transition-all duration-300">
                        <span className="text-white font-bold text-base">Download & Use</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-float shadow-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float-slow shadow-2xl"></div>
              
              {/* Secondary Phone */}
              <div className="absolute top-20 -right-12 w-48 h-80 glass rounded-2xl p-1 shadow-xl rotate-12 animate-float-slow">
                <div className="w-full h-full bg-gray-900 rounded-xl overflow-hidden">
                  <div className="px-4 py-3 text-center border-b border-white/10">
                    <div className="text-white font-bold text-sm">Templates</div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="glass rounded-lg h-16 flex items-center justify-center animate-shimmer">
                      <span className="text-white font-bold text-sm">Business</span>
                    </div>
                    <div className="glass rounded-lg h-16 flex items-center justify-center animate-shimmer" style={{animationDelay: '0.5s'}}>
                      <span className="text-white font-bold text-sm">Festival</span>
                    </div>
                    <div className="glass rounded-lg h-16 flex items-center justify-center animate-shimmer" style={{animationDelay: '1s'}}>
                      <span className="text-white font-bold text-sm">General</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute top-10 -left-10 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <span className="text-white text-sm">✨</span>
              </div>
              <div className="absolute bottom-20 -right-16 w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{animationDelay: '1s'}}>
                <span className="text-white text-sm">🎨</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Features Section */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Why 50,000+ Businesses Trust MarketBrand?</h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Transform your marketing with professional designs that drive real business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-premium group text-center space-y-6">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <span className="text-white text-4xl">⚡</span>
              </div>
              <h3 className="text-3xl font-bold text-white">⚡ Instant Download</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Get professional marketing materials in under 2 minutes. 
                Skip the design process entirely - download, customize, and share immediately.
              </p>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg px-4 py-2">
                <Link href="/features" className="text-green-300 font-semibold hover:text-white transition-colors">⚡ 2-Minute Download Time Guaranteed</Link>
              </div>
              <div className="flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="card-premium group text-center space-y-6">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <span className="text-white text-4xl">🎨</span>
              </div>
              <h3 className="text-3xl font-bold text-white">🎨 Expert-Designed Templates</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Marketing materials crafted by professional designers. 
                Perfect for restaurants, retail stores, events, salons, gyms, and 20+ business types.
              </p>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg px-4 py-2">
                <Link href="/templates" className="text-purple-300 font-semibold hover:text-white transition-colors">🎨 1000+ Professional Templates Available</Link>
              </div>
              <div className="flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="card-premium group text-center space-y-6">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <span className="text-white text-4xl">📱</span>
              </div>
              <h3 className="text-3xl font-bold text-white">📱 Smart Mobile App</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Access thousands of templates on-the-go. 
                Simply add your business details and get customized marketing materials in seconds.
              </p>
              <div className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-500/30 rounded-lg px-4 py-2">
                <span className="text-pink-300 font-semibold">📱 No Design Skills Required - Try Free for 7 Days</span>
              </div>
              <div className="flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Get professional marketing materials in just 3 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <span className="text-white text-3xl font-bold">1</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Download & Install</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Download our app from Google Play Store or Apple App Store. 
                Installation takes less than 2 minutes.
              </p>
              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-lg px-4 py-2">
                <Link href="/download" className="text-indigo-300 font-semibold hover:text-white transition-colors">📱 Free Download • No Credit Card Required</Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <span className="text-white text-3xl font-bold">2</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Choose Your Template</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Browse 1000+ professional templates. Select from business categories, 
                festivals, or general marketing materials.
              </p>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg px-4 py-2">
                <Link href="/templates" className="text-purple-300 font-semibold hover:text-white transition-colors">🎨 1000+ Templates • All Business Types</Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <span className="text-white text-3xl font-bold">3</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Customize & Download</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Add your business details, customize frames, and download your 
                professional marketing materials in under 1 minutes.
              </p>
              <div className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-500/30 rounded-lg px-4 py-2">
                <span className="text-pink-300 font-semibold">⚡ Customize & Instant Download</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Link href="/download" className="btn-primary text-lg px-12 py-4 rounded-xl font-bold shadow-2xl hover:scale-105 transition-all duration-300 inline-block">
              Start Creating Now - Free Download
            </Link>
          </div>
        </div>
      </div>

      {/* Premium Categories Section */}
      <div className="relative py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Ready-Made Materials for Every Business</h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Professional marketing materials for events, fitness, retail, healthcare, beauty, and automotive businesses
            </p>
          </div>
          <CategoryGrid />
        </div>
      </div>

      {/* Premium Testimonials */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-7xl font-black gradient-text mb-6">What Our Customers Say</h2>
            <p className="text-2xl text-gray-300 font-light max-w-3xl mx-auto">
              Join 50,000+ businesses already creating amazing marketing materials
            </p>
          </div>
          <Testimonial />
        </div>
      </div>

      {/* Premium CTA Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Boost Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 font-light max-w-3xl mx-auto">
            Join 50,000+ businesses already using our app to get ready-made marketing materials
          </p>
          
          {/* Free Download Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300 font-semibold">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Free Download • No Credit Card Required • 7-Day Free Trial
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* App Store Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Google Play Store Button */}
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 shadow-xl transform hover:scale-105 group flex items-center justify-center space-x-3">
                {/* Google Logo SVG */}
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814L13.792 12L3.609 22.186C3.386 22.409 3.386 22.773 3.609 22.996C3.832 23.219 4.196 23.219 4.419 22.996L14.602 12.814C14.825 12.591 14.825 12.227 14.602 12.004L4.419 1.814C4.196 1.591 3.832 1.591 3.609 1.814Z" fill="currentColor"/>
                  <path d="M14.602 11.186L4.419 1.004C4.196 0.781 3.832 0.781 3.609 1.004C3.386 1.227 3.386 1.591 3.609 1.814L13.792 12L3.609 22.186C3.386 22.409 3.386 22.773 3.609 22.996C3.832 23.219 4.196 23.219 4.419 22.996L14.602 12.814C14.825 12.591 14.825 12.227 14.602 12.004Z" fill="currentColor"/>
                  <path d="M20.391 11.186L10.208 1.004C9.985 0.781 9.621 0.781 9.398 1.004C9.175 1.227 9.175 1.591 9.398 1.814L19.581 12L9.398 22.186C9.175 22.409 9.175 22.773 9.398 22.996C9.621 23.219 9.985 23.219 10.208 22.996L20.391 12.814C20.614 12.591 20.614 12.227 20.391 12.004Z" fill="currentColor"/>
                  <path d="M20.391 12.814L10.208 22.996C9.985 23.219 9.621 23.219 9.398 22.996C9.175 22.773 9.175 22.409 9.398 22.186L19.581 12L9.398 1.814C9.175 1.591 9.175 1.227 9.398 1.004C9.621 0.781 9.985 0.781 10.208 1.004L20.391 11.186C20.614 11.409 20.614 11.773 20.391 11.996Z" fill="currentColor"/>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-75">GET IT ON</span>
                  <span className="font-bold">Google Play</span>
                </div>
              </button>
              
              {/* Apple App Store Button */}
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 shadow-xl transform hover:scale-105 group flex items-center justify-center space-x-3">
                {/* Apple Logo SVG */}
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-75">Download on the</span>
                  <span className="font-bold">App Store</span>
                </div>
              </button>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 space-y-8">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Ready-Made Materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">No Design Skills Needed</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Instant Download</span>
              </div>
            </div>
            
            {/* Security & Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-sm">Money-Back Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm">24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm">Unlimited Downloads</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Simple & Affordable Pricing</h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Get unlimited access to all marketing materials for one low price
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Popular Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full text-sm font-bold shadow-2xl">
                  🎯 Most Popular Choice
                </div>
              </div>
              
              {/* Main Pricing Card */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mb-4">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                        </svg>
                      </div>
                      <h3 className="text-4xl font-bold text-white">MarketBrand Pro</h3>
                      <p className="text-gray-400 text-lg">Everything you need to grow your business</p>
                    </div>
                    
                    {/* Pricing */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-6xl lg:text-7xl font-black gradient-text">₹2,000</span>
                        <div className="text-left">
                          <div className="text-gray-400 text-lg">per year</div>
                          <div className="text-sm text-gray-500">Just ₹167/month</div>
                        </div>
                      </div>
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full">
                        <span className="text-green-300 text-sm font-semibold">💡 Save ₹2,004 compared to monthly</span>
                      </div>
                    </div>
                    
                    {/* Features Grid */}
                    <div className="space-y-6">
                      <h4 className="text-2xl font-bold text-white">What's Included:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-left">
                        <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className="text-gray-300 font-medium">1000+ Professional Templates</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className="text-gray-300 font-medium">All Business Categories</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className="text-gray-300 font-medium">Unlimited Downloads</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className="text-gray-300 font-medium">Festival & Seasonal Content</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className="text-gray-300 font-medium">HD Quality Videos & Images</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className="text-gray-300 font-medium">24/7 Customer Support</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="space-y-4 pt-6">
                      <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                        <span className="relative z-10">Get Started - ₹2,000/Year</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                      <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span>7-day free trial</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span>Cancel anytime</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span>No hidden fees</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Everything you need to know about MarketBrand. 
              <Link href="/help" className="text-indigo-400 hover:text-white transition-colors font-semibold">Need more help?</Link>
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    How quickly can I create marketing materials?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    You can create professional marketing materials in under 1 minute. Simply choose your template, 
                    add your business details, and download instantly. Our streamlined process ensures you get your 
                    materials fast without any delays.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    Is there a free trial available?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Yes! We offer a 7-day free trial with access to all features. No credit card required to get started. 
                    You can explore our platform and create your first marketing materials completely free.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    How much does MarketBrand cost?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our Pro plan is just ₹2,000 per year, which is significantly less than hiring a designer. 
                    This includes access to 1000+ templates, unlimited downloads, and premium customization features.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    Do I need design skills to use MarketBrand?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    No design skills required! Our templates are pre-designed by professionals. You just need to add 
                    your business information and customize colors if needed. We've made it so simple that anyone can 
                    create professional marketing materials.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    What types of businesses can use MarketBrand?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    MarketBrand works for all business types including restaurants, retail stores, fitness centers, 
                    healthcare clinics, beauty salons, automotive services, events, and wedding vendors. We have 
                    specialized templates for 20+ business categories.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    Is there a free trial available?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Yes! You can try MarketBrand free for 7 days with full access to all features. No credit card 
                    required for the trial period. Experience the full power of our platform before making any commitment.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    Can I cancel my subscription anytime?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Absolutely! You can cancel your subscription anytime with no cancellation fees. You'll continue 
                    to have access until the end of your billing period. We believe in providing flexible options 
                    for our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Help CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
              <p className="text-gray-300 mb-6">
                Our support team is here to help you get the most out of MarketBrand
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 inline-block text-center">
                  Contact Support
                </Link>
                <Link href="/help" className="border border-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 inline-block text-center">
                  Browse Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Support Section */}
      <div className="relative py-32 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-6">Need Help? We're Here for You</h2>
          <p className="text-xl text-gray-300 mb-12">
            Our support team is ready to help you get the most out of MarketBrand
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card-premium text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Email Support</h3>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">support@marketbrand.ai</Link>
            </div>
            
            <div className="card-premium text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Live Chat</h3>
              <p className="text-gray-300">Available 24/7 in app</p>
            </div>
            
            <div className="card-premium text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Help Center</h3>
              <Link href="/help" className="text-gray-300 hover:text-white transition-colors">Browse our knowledge base</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}