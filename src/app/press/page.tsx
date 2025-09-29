import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | Media Kit & News | MarketBrand.ai",
  description: "Latest news, press releases, and media resources about MarketBrand. Download our media kit, logos, and company information for journalists and media partners.",
  keywords: "press, media kit, news, press releases, company news, media resources, journalists, PR, announcements",
  alternates: { canonical: "/press" },
  openGraph: {
    title: "Press | Media Kit & News | MarketBrand.ai",
    description: "Latest news, press releases, and media resources about MarketBrand. Download our media kit, logos, and company information.",
    url: "https://www.marketbrand.ai/press",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-press.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Press | Media Kit & News | MarketBrand.ai",
    description: "Latest news, press releases, and media resources about MarketBrand. Download our media kit, logos, and company information.",
    images: ["/og-press.jpg"],
  },
};

export default function PressPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MarketBrand.ai",
    "url": "https://www.marketbrand.ai/press",
    "logo": "https://www.marketbrand.ai/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/marketbrand",
      "https://twitter.com/marketbrand"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "press",
      "email": "press@marketbrand.ai"
    }
  };

  const pressReleases = [
    {
      id: 1,
      title: "MarketBrand Reaches 50,000+ Business Milestone",
      date: "2024-01-15",
      summary: "MarketBrand celebrates serving over 50,000 businesses with professional marketing materials, marking a significant milestone in the company's growth.",
      category: "Company News"
    },
    {
      id: 2,
      title: "New AI-Powered Template Recommendations Launch",
      date: "2024-01-10",
      summary: "MarketBrand introduces intelligent template recommendations powered by machine learning to help businesses choose the most effective marketing materials.",
      category: "Product Update"
    },
    {
      id: 3,
      title: "MarketBrand Secures Series A Funding Round",
      date: "2024-01-05",
      summary: "Company announces successful Series A funding round of $5M to accelerate product development and market expansion across India.",
      category: "Funding"
    },
    {
      id: 4,
      title: "Partnership with Leading Design Agencies Announced",
      date: "2023-12-20",
      summary: "MarketBrand partners with top design agencies to expand template library and provide premium design services to enterprise customers.",
      category: "Partnership"
    }
  ];

  const mediaKit = [
    {
      name: "Company Logo Pack",
      description: "High-resolution logos in various formats (PNG, SVG, PDF)",
      size: "2.5 MB",
      format: "ZIP"
    },
    {
      name: "Brand Guidelines",
      description: "Complete brand guidelines including colors, fonts, and usage rules",
      size: "5.2 MB",
      format: "PDF"
    },
    {
      name: "Product Screenshots",
      description: "High-quality screenshots of the MarketBrand app and platform",
      size: "12.8 MB",
      format: "ZIP"
    },
    {
      name: "Team Photos",
      description: "Professional headshots of key team members",
      size: "8.1 MB",
      format: "ZIP"
    },
    {
      name: "Company Fact Sheet",
      description: "One-page overview of MarketBrand's key facts and statistics",
      size: "245 KB",
      format: "PDF"
    },
    {
      name: "Press Contact Information",
      description: "Complete contact details for media inquiries",
      size: "156 KB",
      format: "PDF"
    }
  ];

  const companyStats = [
    { label: "Businesses Served", value: "50,000+" },
    { label: "Templates Available", value: "1,000+" },
    { label: "Countries", value: "15+" },
    { label: "Team Members", value: "25+" },
    { label: "Years in Business", value: "3+" },
    { label: "Customer Rating", value: "4.9/5" }
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
              <span className="text-white font-semibold">Press</span>
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
            <div className="text-center space-y-8">
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2">
                  <span className="text-green-300 text-sm font-semibold">📰 Latest News</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                  <span className="text-blue-300 text-sm font-semibold">📊 Media Kit</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <span className="text-purple-300 text-sm font-semibold">📞 Press Contact</span>
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black gradient-text mb-6 leading-tight">
                Press & Media Center
              </h1>
              
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
                Stay updated with the latest news about MarketBrand. 
                <span className="text-white font-semibold">Download our media kit and connect with our press team.</span>
              </p>

              {/* Company Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto mt-12">
                {companyStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Press Releases */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Latest News</h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Stay updated with our latest announcements and company news
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {pressReleases.map((release) => (
                <article key={release.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full px-3 py-1 text-indigo-300 text-sm font-semibold">
                      {release.category}
                    </span>
                    <time className="text-gray-400 text-sm">
                      {new Date(release.date).toLocaleDateString('en-IN')}
                    </time>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {release.summary}
                  </p>
                  
                  <Link
                    href={`/press/${release.id}`}
                    className="inline-flex items-center text-indigo-400 hover:text-white transition-colors font-semibold group"
                  >
                    Read Full Release
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Media Kit */}
        <div className="py-24 bg-gray-800/30">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Media Kit</h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Download our complete media resources for journalists and media partners
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaKit.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
                      📁
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-sm">{item.size}</div>
                      <div className="text-gray-500 text-xs">{item.format}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>
                  
                  <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl py-3 text-white font-semibold hover:shadow-lg transition-all duration-300">
                    Download
                  </button>
                </div>
              ))}
            </div>
            
            {/* Download All Button */}
            <div className="text-center mt-12">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                📦 Download Complete Media Kit
              </button>
            </div>
          </div>
        </div>

        {/* Press Contact */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Press Contact</h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Get in touch with our press team for media inquiries and interviews
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto text-3xl">
                    📧
                  </div>
                  <h3 className="text-2xl font-bold text-white">Email Us</h3>
                  <p className="text-gray-300">For press inquiries and media requests</p>
                  <a 
                    href="mailto:press@marketbrand.ai"
                    className="inline-block text-indigo-400 hover:text-white transition-colors font-semibold text-lg"
                  >
                    press@marketbrand.ai
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto text-3xl">
                    📞
                  </div>
                  <h3 className="text-2xl font-bold text-white">Call Us</h3>
                  <p className="text-gray-300">For urgent press inquiries</p>
                  <a 
                    href="tel:+919876543210"
                    className="inline-block text-purple-400 hover:text-white transition-colors font-semibold text-lg"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Pages */}
        <div className="py-24 bg-gray-800/30">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Learn More</h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Explore more about MarketBrand and our team
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link 
                href="/about"
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                    🏢
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">About Us</h3>
                  <p className="text-gray-300">Learn about our mission, vision, and the story behind MarketBrand</p>
                </div>
              </Link>

              <Link 
                href="/careers"
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                    💼
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">Careers</h3>
                  <p className="text-gray-300">Join our team and help us build the future of marketing</p>
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
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">Our Blog</h3>
                  <p className="text-gray-300">Read our latest insights and thought leadership content</p>
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
              Need More Information?
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Our press team is here to help with any media inquiries, interview requests, or additional information you might need.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-white font-semibold">24/7 Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-white font-semibold">Complete Media Kit</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-white font-semibold">Expert Interviews</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="mailto:press@marketbrand.ai"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                📧 Contact Press Team
              </a>
              <Link 
                href="/contact"
                className="inline-flex items-center px-12 py-6 border-2 border-white/30 rounded-2xl text-white font-bold text-2xl hover:bg-white/10 transition-all duration-300"
              >
                💬 General Contact
              </Link>
            </div>
            
            <p className="text-gray-400 text-lg mt-8">
              📰 Latest News • 📊 Media Resources • 📞 Expert Interviews
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


