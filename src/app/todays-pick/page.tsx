import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { FaRocket, FaBolt, FaStar, FaFire } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Today's Pick | Featured Templates & Trending Designs | MarketBrand.ai",
  description: "Discover today's featured templates and trending designs. Hand-picked professional marketing materials updated daily. Get the best templates for your business.",
  keywords: "today's pick, featured templates, trending templates, daily picks, best templates, popular templates, featured designs",
  alternates: { canonical: "/todays-pick" },
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
    title: "Today's Pick | Featured Templates & Trending Designs | MarketBrand.ai",
    description: "Discover today's featured templates and trending designs. Hand-picked professional marketing materials updated daily.",
    url: "https://www.marketbrand.ai/todays-pick",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-todays-pick.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Today's Pick | Featured Templates & Trending Designs",
    description: "Discover today's featured templates and trending designs. Hand-picked professional marketing materials updated daily.",
    images: ["/og-todays-pick.jpg"],
  },
};

export default function TodaysPickPage() {
  const featuredTemplates = [
    {
      title: "Today's Business post",
      image: "/Todays Business post.png"
    },
    {
      title: "Today's Marketing tips",
      image: "/Todays Marketing tips.png"
    },
    {
      title: "Today's motivation quotes",
      image: "/Todays motivation quotes.png"
    },
    {
      title: "Today's festive alert",
      image: "/Festive Alerts/5.png"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Today's Pick - Featured Templates",
            "description": "Hand-picked featured templates updated daily",
            "url": "https://www.marketbrand.ai/todays-pick",
          }),
        }}
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
              <span className="text-white font-semibold">Today's Pick</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative py-16 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-black gradient-text mb-4 leading-[1.3]">
                  Today's Pick
                </h1>
                <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Hand-picked templates trending today. Get started with these popular designs.
              </p>
              </div>

              {/* Trust Badges - Horizontally Aligned */}
              <div className="flex flex-row gap-3 justify-center lg:justify-start">
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg px-5 py-3 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                  <span className="text-orange-300 text-sm font-semibold whitespace-nowrap flex items-center gap-2"><FaFire className="inline text-base" /> Trending Now</span>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg px-5 py-3 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                  <span className="text-green-300 text-sm font-semibold whitespace-nowrap">✓ Updated Daily</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg px-5 py-3 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                  <span className="text-purple-300 text-sm font-semibold whitespace-nowrap flex items-center gap-2"><HiSparkles className="inline text-base" /> Hand-Picked</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Templates Grid */}
        <div className="pt-12 pb-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredTemplates.map((template, index) => (
                <div key={index} className="card-premium group overflow-hidden flex flex-col relative">
                  {/* Featured Badge - Horizontally Aligned to Right */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full px-4 py-1.5 flex items-center gap-2">
                      <FaFire className="text-white text-xs" />
                      <span className="text-white text-xs font-bold">Featured</span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-64 rounded-xl mb-6 overflow-hidden flex-shrink-0">
                    <Image
                      src={template.image}
                      alt={template.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>

                  {/* Heading */}
                  <div className="mb-6 flex-grow">
                    <h3 className="text-xl font-bold text-white text-center group-hover:gradient-text transition-all duration-300">
                      {template.title}
                    </h3>
                  </div>

                  {/* Download Button */}
                  <Link 
                    href="/download"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Template
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Today's Pick Section */}
        <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Why Check Today's Pick?
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Get access to the best templates selected by our team
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-premium text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto">
                  <FaFire className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Trending Designs</h3>
                <p className="text-gray-300 leading-relaxed">
                  Discover templates that are currently trending and getting the most downloads.
                </p>
              </div>

              <div className="card-premium text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                  <FaStar className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Hand-Picked</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our team carefully selects the best templates daily based on quality and popularity.
                </p>
              </div>

              <div className="card-premium text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
                  <HiSparkles className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Updated Daily</h3>
                <p className="text-gray-300 leading-relaxed">
                  Fresh picks every day. Check back regularly to discover new featured templates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-12 text-center">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
              Ready to Use Today's Pick?
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Download our app and get instant access to today's featured templates and thousands more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="https://play.google.com/store/apps/details?id=com.marketbrand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
