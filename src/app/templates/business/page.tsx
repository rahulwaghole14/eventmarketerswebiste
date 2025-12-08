import Link from "next/link";
import type { Metadata } from "next";
import { FaRocket, FaPalette, FaBolt, FaMobileAlt, FaBriefcase, FaSync, FaDownload } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Business Templates | Professional Marketing Templates for All Business Types | MarketBrand.ai",
  description: "Browse 500+ professional business templates for restaurants, services, products, and more. Instant download, easy customization. Perfect for any business type.",
  keywords: "business templates, professional templates, restaurant templates, service marketing templates, product launch templates, business marketing materials",
  alternates: { canonical: "/templates/business" },
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
    title: "Business Templates | Professional Marketing Templates | MarketBrand.ai",
    description: "Browse 500+ professional business templates. Instant download, easy customization.",
    url: "https://www.marketbrand.ai/templates/business",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-templates-business.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export default function BusinessTemplatesPage() {
  const examples = [
    "Restaurant Promotions",
    "Service Marketing",
    "Product Launches",
    "Sale Announcements",
    "Grand Opening",
    "Customer Testimonials",
    "Special Offers",
    "Event Promotions"
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Business Templates",
            "description": "Professional marketing templates for all business types",
            "url": "https://www.marketbrand.ai/templates/business",
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        {/* Hero Section */}
        <div className="relative py-24 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="text-center">
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2">
                  <span className="text-green-300 text-sm font-semibold">✓ 500+ Templates</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                  <span className="text-blue-300 text-sm font-semibold flex items-center gap-1"><FaPalette className="inline" /> Professional Design</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <span className="text-purple-300 text-sm font-semibold flex items-center gap-1"><FaBolt className="inline" /> Instant Download</span>
                </div>
              </div>

              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <FaBriefcase className="text-white text-5xl" />
              </div>

              <h1 className="text-5xl lg:text-6xl font-black gradient-text mb-6 leading-[1.3] pt-1 pb-1">
                Business Templates
              </h1>
              
              <p className="text-xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
                Professional templates for all business types. Create stunning marketing materials for restaurants, services, products, and more.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/download"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl text-white font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2"><FaRocket className="inline" /> Start Free Trial</span>
                </Link>
                <Link 
                  href="/templates"
                  className="inline-flex items-center px-10 py-5 border-2 border-white/20 rounded-2xl text-white font-bold text-xl hover:bg-white/10 transition-all duration-300"
                >
                  Browse All Templates
                </Link>
              </div>

              <p className="text-gray-400 text-sm mt-6 flex items-center gap-2 justify-center">
                <FaBolt className="inline" /> No Credit Card Required • 7-Day Free Trial • Cancel Anytime
              </p>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Popular Business Template Types
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Choose from hundreds of professionally designed templates for your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {examples.map((example, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-xl text-center">
                  <div className="text-gray-300 font-semibold">{example}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Why Choose Our Business Templates?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                  <FaBolt className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Instant Download</h3>
                <p className="text-gray-300 leading-relaxed">
                  Download templates in seconds with your business details already applied
                </p>
              </div>

              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                  <FaPalette className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Professional Design</h3>
                <p className="text-gray-300 leading-relaxed">
                  All templates designed by professional graphic designers
                </p>
              </div>

              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                  <FaSync className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Easy Customization</h3>
                <p className="text-gray-300 leading-relaxed">
                  Change colors, text, and branding in under 1 minute
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
              Ready to Create Professional Marketing Materials?
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Join 50,000+ businesses already using MarketBrand to create stunning marketing materials
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/download"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
            
            <p className="text-gray-400 text-lg mt-8 flex items-center gap-2 justify-center">
              <FaBolt className="inline" /> Join 50,000+ Businesses • 500+ Business Templates • 1-Minute Creation
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

