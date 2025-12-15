import Link from "next/link";
import type { Metadata } from "next";
import { FaRocket, FaBolt, FaPalette, FaTrophy } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import dynamic from "next/dynamic";

const HorizontalImageCarousel = dynamic(() => import("@/components/HorizontalImageCarousel"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading...</div></div>,
});

export const metadata: Metadata = {
  title: "Festive Alerts Templates | Seasonal & Festival Marketing Templates | MarketBrand.ai",
  description: "Browse 300+ professional festive alerts templates for Diwali, Holi, New Year, holidays, and more. Seasonal marketing materials with instant download and easy customization.",
  keywords: "festive alerts templates, seasonal templates, Diwali templates, Holi templates, holiday templates, festival marketing materials, seasonal promotions",
  alternates: { canonical: "/templates/festive-alerts" },
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
    title: "Festive Alerts Templates | Seasonal Marketing Templates | MarketBrand.ai",
    description: "Browse 300+ professional festive alerts templates. Instant download, easy customization.",
    url: "https://www.marketbrand.ai/templates/festive-alerts",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-templates-festive-alerts.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export default function FestiveAlertsTemplatesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Festive Alerts Marketing Materials & Promotional Content",
    "description": "Professional festive alerts promotional videos, marketing posters & business materials for seasonal and festival promotions",
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
      "description": "Annual subscription for unlimited festive alerts marketing materials"
    },
    "category": "Festive Alerts Marketing Services"
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
              <Link href="/templates" className="text-gray-400 hover:text-white transition-colors">
                Templates
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-white font-semibold">Festive Alerts</span>
            </nav>
          </div>
        </div>

        {/* Enhanced Hero Section */}
        <div className="relative py-16 overflow-hidden bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-black gradient-text mb-4 leading-[1.3]">
                  Festive Alerts Templates
                </h1>
              </div>

              {/* Trust Badges - Right Side Horizontal */}
              <div className="flex flex-row gap-1.5 justify-center lg:justify-end lg:items-center">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-md px-2 py-1.5 backdrop-blur-sm hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[24px]">
                  <span className="text-green-300 text-[10px] font-semibold whitespace-nowrap flex items-center gap-1">✓ 1000+ Templates</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-md px-2 py-1.5 backdrop-blur-sm hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[24px]">
                  <span className="text-blue-300 text-[10px] font-semibold flex items-center gap-1 whitespace-nowrap"><BsStarFill className="text-[10px]" /> 4.9/5</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-md px-2 py-1.5 backdrop-blur-sm hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[24px]">
                  <span className="text-purple-300 text-[10px] font-semibold flex items-center gap-1 whitespace-nowrap"><FaRocket className="text-[10px]" /> Instant</span>
                </div>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="relative mt-0">
              <HorizontalImageCarousel 
                images={[
                  "/Festive Alerts/1.png",
                  "/Festive Alerts/2.png",
                  "/Festive Alerts/3.png",
                  "/Festive Alerts/4.png",
                  "/Festive Alerts/5.png"
                ]}
                interval={2000}
              />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Why Choose Our Templates?
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Everything you need to create professional marketing materials
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-premium text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                  <FaBolt className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Instant Download</h3>
                <p className="text-gray-300 leading-relaxed">
                  Get your templates instantly and start creating professional marketing materials in under 1 minute.
                </p>
              </div>

              <div className="card-premium text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
                  <FaPalette className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Easy Customization</h3>
                <p className="text-gray-300 leading-relaxed">
                  No design skills needed. Simply add your business details and customize colors to match your brand.
                </p>
              </div>

              <div className="card-premium text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto text-3xl">
                  🎉
                </div>
                <h3 className="text-2xl font-bold text-white">Commercial License</h3>
                <p className="text-gray-300 leading-relaxed">
                  Full commercial usage rights included. Use for any business purpose without restrictions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="py-24 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-12 text-center">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
              Create Festive Alerts Materials
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Join 10,000+ businesses already creating professional marketing materials. 
              Download our app and start now!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/download"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
              <FaBolt className="inline" /> 7-Day Free Trial • No Credit Card Required • 1000+ Templates
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
