import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners | Partnership Program | MarketBrand.ai",
  description: "Join MarketBrand's partner ecosystem. Become a reseller, integration partner, or technology partner. Grow your business with our partnership program.",
  keywords: "partners, partnership program, reseller, integration partner, technology partner, business partnership, channel partner",
  alternates: { canonical: "/partners" },
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
    title: "Partners | Partnership Program | MarketBrand.ai",
    description: "Join MarketBrand's partner ecosystem. Become a reseller, integration partner, or technology partner. Grow your business with our partnership program.",
    url: "https://www.marketbrand.ai/partners",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-partners.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | Partnership Program | MarketBrand.ai",
    description: "Join MarketBrand's partner ecosystem. Become a reseller, integration partner, or technology partner. Grow your business with our partnership program.",
    images: ["/og-partners.jpg"],
  },
};

export default function PartnersPage() {
  const partnershipTypes = [
    {
      icon: "🏪",
      title: "Reseller Partners",
      description: "Sell MarketBrand to your clients and earn recurring commissions",
      benefits: ["Up to 30% commission", "Dedicated support", "Marketing materials", "Training programs"],
      cta: "Become a Reseller"
    },
    {
      icon: "🔗",
      title: "Integration Partners",
      description: "Integrate MarketBrand with your platform or service",
      benefits: ["API access", "Technical support", "Co-marketing opportunities", "Revenue sharing"],
      cta: "Start Integration"
    },
    {
      icon: "🤝",
      title: "Technology Partners",
      description: "Collaborate on innovative solutions and joint development",
      benefits: ["Joint development", "Shared IP", "Market expansion", "Strategic alignment"],
      cta: "Explore Partnership"
    }
  ];

  const currentPartners = [
    { name: "Design Studio Pro", type: "Reseller", logo: "🎨" },
    { name: "Marketing Hub", type: "Integration", logo: "📊" },
    { name: "Creative Agency", type: "Reseller", logo: "✨" },
    { name: "Tech Solutions Inc", type: "Technology", logo: "⚡" },
    { name: "Digital Partners", type: "Integration", logo: "💻" },
    { name: "Brand Studio", type: "Reseller", logo: "🎯" }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-800/50 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-white font-semibold">Partners</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-black gradient-text mb-6 leading-[1.3] pt-1 pb-1">
            Partner With Us
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto mb-12">
            Join our partner ecosystem and grow your business with MarketBrand. 
            <span className="text-white font-semibold">Multiple partnership opportunities available.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="#partnership-types"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🤝 Explore Partnerships
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-12 py-6 border-2 border-white/30 rounded-2xl text-white font-bold text-2xl hover:bg-white/10 transition-all duration-300"
            >
              💬 Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Partnership Types */}
      <div id="partnership-types" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Partnership Types</h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Choose the partnership model that best fits your business
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto text-3xl">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{type.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-300">
                          <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl py-3 text-white font-semibold hover:shadow-lg transition-all duration-300">
                    {type.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Partners */}
      <div className="py-24 bg-gray-800/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Our Partners</h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Trusted by leading companies across industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="text-center space-y-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl">{partner.logo}</div>
                <h3 className="text-white font-semibold">{partner.name}</h3>
                <p className="text-gray-400 text-sm">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
            Join our growing partner ecosystem and unlock new revenue opportunities for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🤝 Start Partnership
            </Link>
            <Link 
              href="/pricing"
              className="inline-flex items-center px-12 py-6 border-2 border-white/30 rounded-2xl text-white font-bold text-2xl hover:bg-white/10 transition-all duration-300"
            >
              💰 View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


