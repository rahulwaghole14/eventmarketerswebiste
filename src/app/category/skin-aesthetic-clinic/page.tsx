import Link from "next/link";
import type { Metadata } from "next";
import { FaRocket, FaBolt, FaPalette } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import dynamic from "next/dynamic";

const HorizontalImageCarousel = dynamic(() => import("@/components/HorizontalImageCarousel"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading...</div></div>,
});

export const metadata: Metadata = {
  title: "Skin & Aesthetic Clinic Marketing Materials | Professional Promotional Videos & Posters | MarketBrand.ai",
  description: "Professional skin & aesthetic clinic promotional videos, marketing posters & business materials. Download ready-made templates for skin clinics, aesthetic treatments, beauty services.",
  keywords: "skin clinic marketing, aesthetic clinic promotional videos, dermatology marketing, beauty clinic templates, aesthetic treatment marketing",
  alternates: { canonical: "/category/skin-aesthetic-clinic" },
};

export default function SkinAestheticClinicPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="bg-gray-800/50 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 py-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm flex-wrap">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <Link href="/categories" className="text-gray-400 hover:text-white transition-colors">Categories</Link>
            <span className="text-gray-500">/</span>
            <span className="text-white font-semibold break-words">Skin & Aesthetic Clinic</span>
          </nav>
        </div>
      </div>

      <div className="relative py-16 overflow-hidden bg-gradient-to-br from-pink-500/20 via-rose-500/20 to-fuchsia-500/20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-4 leading-[1.2] sm:leading-[1.3]">Skin & Aesthetic Clinic Templates</h1>
            </div>

            {/* Trust Badges - Right Side Horizontal */}
            <div className="flex flex-row gap-1 sm:gap-1.5 justify-center lg:justify-end lg:items-center w-full lg:w-auto">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-md px-2 sm:px-2.5 py-1.5 backdrop-blur-sm hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[28px] sm:min-h-[32px]">
                <span className="text-green-300 text-xs sm:text-sm font-semibold whitespace-nowrap flex items-center gap-1">✓ 1000+ Templates</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-md px-2 sm:px-2.5 py-1.5 backdrop-blur-sm hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[28px] sm:min-h-[32px]">
                <span className="text-blue-300 text-xs sm:text-sm font-semibold flex items-center gap-1 whitespace-nowrap"><BsStarFill className="text-xs" /> 4.9/5</span>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-md px-2 sm:px-2.5 py-1.5 backdrop-blur-sm hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[28px] sm:min-h-[32px]">
                <span className="text-purple-300 text-xs sm:text-sm font-semibold flex items-center gap-1 whitespace-nowrap"><FaRocket className="text-xs" /> Instant</span>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative mt-0">
            <HorizontalImageCarousel 
              images={[
                "/Medical & Diagnostics/Skin & Aesthetics Clinic/1.png",
                "/Medical & Diagnostics/Skin & Aesthetics Clinic/2.png",
                "/Medical & Diagnostics/Skin & Aesthetics Clinic/3.png",
                "/Medical & Diagnostics/Skin & Aesthetics Clinic/4.png",
                "/Medical & Diagnostics/Skin & Aesthetics Clinic/5.png"
              ]}
              interval={2000}
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black gradient-text mb-4">
              Why Choose Our Templates?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl mx-auto px-4">
              Everything you need to create professional marketing materials
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="card-premium text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto">
                <FaBolt className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Instant Download</h3>
              <p className="text-gray-300 leading-relaxed">
                Get your templates instantly and start creating professional marketing materials in under 1 minute.
              </p>
            </div>

            <div className="card-premium text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto">
                <FaPalette className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Easy Customization</h3>
              <p className="text-gray-300 leading-relaxed">
                No design skills needed. Simply add your clinic details and customize colors to match your brand.
              </p>
            </div>

            <div className="card-premium text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto text-3xl">
                💼
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
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-fuchsia-500/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-rose-500/10 to-fuchsia-500/10 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-4 sm:mb-6">
            Create Skin & Aesthetic Clinic Materials
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Join 10,000+ businesses already creating professional marketing materials. 
            Download our app and start now!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center">
            <Link 
              href="/download"
              className="inline-flex items-center justify-center px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl sm:rounded-2xl text-white font-bold text-lg sm:text-xl md:text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2"><FaRocket className="inline" /> Start Free Trial Now</span>
            </Link>
            <Link 
              href="/pricing"
              className="inline-flex items-center justify-center px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 border-2 border-white/30 rounded-xl sm:rounded-2xl text-white font-bold text-lg sm:text-xl md:text-2xl hover:bg-white/10 transition-all duration-300"
            >
              View Pricing Plans
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-6 sm:mt-8 flex flex-wrap items-center gap-2 justify-center px-4">
            <FaBolt className="inline" /> 7-Day Free Trial • No Credit Card Required • 1000+ Templates
          </p>
        </div>
      </div>
    </div>
  );
}

