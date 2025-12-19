import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { FaRocket, FaPalette, FaBolt, FaHeart, FaSprayCan, FaHospital, FaCamera, FaUtensils, FaBuilding, FaCalendar } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const HorizontalImageCarousel = dynamic(() => import("@/components/HorizontalImageCarousel"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading...</div></div>,
});

const TabbedImageCarousel = dynamic(() => import("@/components/TabbedImageCarousel"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading...</div></div>,
});


// Helper function to generate image paths
const getImagePaths = (basePath: string, count: number = 5): string[] => {
  return Array.from({ length: count }, (_, i) => `${basePath}/${i + 1}.png`);
};

// Comprehensive category data structure
interface CategoryData {
  title: string;
  intro: string;
  useCases: string[];
  cta: string;
  type: "regular" | "tabbed";
  images?: string[];
  tabs?: { name: string; images: string[] }[];
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORY_MAP: Record<string, CategoryData> = {
  // Event & Wedding Categories
  "banquet-hall": {
    title: "Banquet Hall",
    intro: "Professional banquet hall promotional videos, marketing posters & business materials. Download ready-made templates for banquet halls, wedding venues, event venues.",
    useCases: ["Venue Showcase Designs", "Capacity & Amenities Posters", "Booking Offer Templates", "Virtual Tour Promotions"],
    cta: "Create Banquet Hall Materials",
    type: "regular",
    images: getImagePaths("/Banquat Hall"),
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    icon: FaBuilding,
  },
  "event-planner": {
    title: "Event Planner",
    intro: "Professional event planner promotional videos, marketing posters & business materials. Download ready-made templates for Mandap, Sound, Generator, Decorator services.",
    useCases: ["Mandap Templates", "Sound System Templates", "Generator Templates", "Decorator Templates"],
    cta: "Create Event Planner Materials",
    type: "tabbed",
    tabs: [
      { name: "Mandap", images: getImagePaths("/Event Planner/Mandap") },
      { name: "Sound", images: getImagePaths("/Event Planner/Sound") },
      { name: "Decorator", images: getImagePaths("/Event Planner/Decorator") },
      { name: "Generator", images: getImagePaths("/Event Planner/Generator") },
    ],
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    icon: FaCalendar,
  },
  "catering": {
    title: "Catering",
    intro: "Professional catering promotional videos, marketing posters & business materials. Download ready-made templates for wedding catering, event catering, and food service businesses.",
    useCases: ["Menu Design Templates", "Package Offer Posters", "Event Catering Ads", "Special Dish Highlights"],
    cta: "Create Catering Materials",
    type: "regular",
    images: getImagePaths("/Catering"),
    gradient: "from-orange-500/20 via-red-500/20 to-rose-500/20",
    icon: FaUtensils,
  },
  "photographer": {
    title: "Photographer",
    intro: "Professional photographer promotional videos, marketing posters & business materials. Download ready-made templates for wedding photographers, event photographers, and portrait photographers.",
    useCases: ["Portfolio Grid Templates", "Pricing Package Designs", "Session Offer Posters", "Instagram Story Templates"],
    cta: "Create Photography Materials",
    type: "regular",
    images: getImagePaths("/Photography"),
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    icon: FaCamera,
  },
  "light-supplier": {
    title: "Light Supplier",
    intro: "Professional light supplier promotional videos, marketing posters & business materials. Download ready-made templates for event lighting, wedding lighting, and lighting rental services.",
    useCases: ["Lighting Service Promotions", "Package Offer Templates", "Event Lighting Showcase", "Rental Service Ads"],
    cta: "Create Light Supplier Materials",
    type: "regular",
    images: getImagePaths("/Light Supplier"),
    gradient: "from-yellow-500/20 via-orange-500/20 to-amber-500/20",
    icon: FaBolt,
  },
  "decorator": {
    title: "Decorator",
    intro: "Eye-catching marketing templates for decorators. Display your portfolio, promote seasonal packages, and attract more decoration projects.",
    useCases: ["Portfolio Showcase Designs", "Package Offer Posters", "Before/After Templates", "Festival Decoration Ads"],
    cta: "Design Decorator Promotions",
    type: "regular",
    images: getImagePaths("/Event Planner/Decorator"),
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
    icon: FaPalette,
  },
  "sound": {
    title: "Sound",
    intro: "Professional sound system marketing materials. Promote audio equipment, sound services, and attract more events.",
    useCases: ["Sound System Showcase", "Equipment Rental Templates", "Service Package Posters", "Event Sound Ads"],
    cta: "Create Sound System Materials",
    type: "regular",
    images: getImagePaths("/Event Planner/Sound"),
    gradient: "from-indigo-500/20 via-blue-500/20 to-cyan-500/20",
    icon: FaBolt,
  },
  "generator": {
    title: "Generator",
    intro: "Professional generator rental marketing materials. Promote generator services, rental packages, and attract more events.",
    useCases: ["Generator Showcase Templates", "Rental Package Posters", "Service Offer Designs", "Event Power Ads"],
    cta: "Create Generator Materials",
    type: "regular",
    images: getImagePaths("/Event Planner/Generator"),
    gradient: "from-gray-500/20 via-slate-500/20 to-zinc-500/20",
    icon: FaBolt,
  },
  "mandap": {
    title: "Mandap",
    intro: "Professional mandap decoration marketing materials. Showcase mandap designs, promote packages, and attract more wedding events.",
    useCases: ["Mandap Design Showcase", "Package Offer Templates", "Wedding Decoration Ads", "Portfolio Templates"],
    cta: "Create Mandap Materials",
    type: "regular",
    images: getImagePaths("/Event Planner/Mandap"),
    gradient: "from-rose-500/20 via-pink-500/20 to-purple-500/20",
    icon: FaHeart,
  },

  // Medical & Diagnostics Categories
  "dental-clinic": {
    title: "Dental Clinic",
    intro: "Professional dental clinic marketing materials. Promote treatments, offers, and dental care tips to attract more patients.",
    useCases: ["Treatment Offer Posters", "Dental Care Tips Graphics", "Before/After Templates", "Appointment Reminder Designs"],
    cta: "Create Dental Clinic Materials",
    type: "regular",
    images: getImagePaths("/Medical & Diagnostics/Dental Clinic"),
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    icon: FaHospital,
  },
  "eye-hospital": {
    title: "Eye Hospital",
    intro: "Professional eye hospital marketing materials. Promote eye care services, treatments, and attract more patients.",
    useCases: ["Eye Care Service Posters", "Treatment Offer Templates", "Vision Care Tips", "Appointment Booking Ads"],
    cta: "Create Eye Hospital Materials",
    type: "regular",
    images: getImagePaths("/Medical & Diagnostics/Eye Hospital"),
    gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
    icon: FaHospital,
  },
  "ayurveda-clinic": {
    title: "Ayurveda Clinic",
    intro: "Professional ayurveda clinic marketing materials. Promote ayurvedic treatments, wellness programs, and attract more patients.",
    useCases: ["Treatment Offer Posters", "Wellness Program Templates", "Ayurvedic Tips Graphics", "Consultation Ads"],
    cta: "Create Ayurveda Clinic Materials",
    type: "regular",
    images: getImagePaths("/Medical & Diagnostics/Ayurveda Clinic"),
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    icon: FaHospital,
  },
  "homeopathy-clinic": {
    title: "Homeopathy Clinic",
    intro: "Professional homeopathy clinic marketing materials. Promote homeopathic treatments, consultations, and attract more patients.",
    useCases: ["Treatment Offer Posters", "Consultation Templates", "Health Tips Graphics", "Service Showcase Ads"],
    cta: "Create Homeopathy Clinic Materials",
    type: "regular",
    images: getImagePaths("/Medical & Diagnostics/Homeopathy Clinic"),
    gradient: "from-teal-500/20 via-cyan-500/20 to-blue-500/20",
    icon: FaHospital,
  },
  "physiotherapy-clinic": {
    title: "Physiotherapy Clinic",
    intro: "Professional physiotherapy clinic marketing materials. Promote physiotherapy services, rehabilitation programs, and attract more patients.",
    useCases: ["Service Offer Posters", "Rehabilitation Templates", "Exercise Tips Graphics", "Treatment Showcase Ads"],
    cta: "Create Physiotherapy Clinic Materials",
    type: "regular",
    images: getImagePaths("/Medical & Diagnostics/Physiotherapy Clinic"),
    gradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
    icon: FaHospital,
  },
  "skin-aesthetic-clinic": {
    title: "Skin & Aesthetics Clinic",
    intro: "Professional skin & aesthetics clinic marketing materials. Promote aesthetic treatments, skincare services, and attract more clients.",
    useCases: ["Treatment Showcase Posters", "Before/After Templates", "Skincare Tips Graphics", "Service Package Ads"],
    cta: "Create Skin & Aesthetics Clinic Materials",
    type: "regular",
    images: getImagePaths("/Medical & Diagnostics/Skin & Aesthetics Clinic"),
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
    icon: FaSprayCan,
  },
  "pathology-lab": {
    title: "Pathology Lab",
    intro: "Professional pathology lab marketing materials. Promote lab tests, health checkup packages, and attract more patients.",
    useCases: ["Test Package Posters", "Health Checkup Templates", "Lab Service Graphics", "Report Delivery Ads"],
    cta: "Create Pathology Lab Materials",
    type: "regular",
    images: getImagePaths("/Medical & Diagnostics/Pathology Lab"),
    gradient: "from-red-500/20 via-orange-500/20 to-amber-500/20",
    icon: FaHospital,
  },
  "allopathy-clinic": {
    title: "Allopathy Clinic",
    intro: "Professional allopathy clinic marketing materials. Promote medical services, treatments, and attract more patients.",
    useCases: ["Service Offer Posters", "Treatment Templates", "Health Awareness Graphics", "Doctor Profile Ads"],
    cta: "Create Allopathy Clinic Materials",
    type: "regular",
    images: getImagePaths("/Medical & Diagnostics/Allopathy Clinic"),
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    icon: FaHospital,
  },

  // Legacy categories from original MAP (keeping for backward compatibility)
  "wedding-planners": {
    title: "Wedding Planner",
    intro: "Professional marketing materials for wedding planners. Create stunning portfolios, service packages, and promotional content to attract more clients.",
    useCases: ["Service Package Posters", "Wedding Portfolio Designs", "Social Media Posts", "Client Testimonial Graphics"],
    cta: "Create Wedding Planner Materials",
    type: "regular",
    images: getImagePaths("/Banquat Hall"),
    gradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
    icon: FaHeart,
  },
  "decorators": {
    title: "Decorator",
    intro: "Eye-catching marketing templates for decorators. Display your portfolio, promote seasonal packages, and attract more decoration projects.",
    useCases: ["Portfolio Showcase Designs", "Package Offer Posters", "Before/After Templates", "Festival Decoration Ads"],
    cta: "Design Decorator Promotions",
    type: "regular",
    images: getImagePaths("/Event Planner/Decorator"),
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
    icon: FaPalette,
  },
  "photographers": {
    title: "Photographer",
    intro: "Professional marketing materials for photographers. Create stunning portfolio displays, pricing packages, and social media content.",
    useCases: ["Portfolio Grid Templates", "Pricing Package Designs", "Session Offer Posters", "Instagram Story Templates"],
    cta: "Create Photography Materials",
    type: "regular",
    images: getImagePaths("/Photography"),
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    icon: FaCamera,
  },
  "caterers": {
    title: "Catering",
    intro: "Delicious marketing templates for catering services. Showcase your menu, promote packages, and attract more events.",
    useCases: ["Menu Design Templates", "Package Offer Posters", "Event Catering Ads", "Special Dish Highlights"],
    cta: "Design Catering Promotions",
    type: "regular",
    images: getImagePaths("/Catering"),
    gradient: "from-orange-500/20 via-red-500/20 to-rose-500/20",
    icon: FaUtensils,
  },
  "venues": {
    title: "Event Venue",
    intro: "Professional marketing materials for event venues. Showcase your space, promote packages, and book more events.",
    useCases: ["Venue Showcase Designs", "Capacity & Amenities Posters", "Booking Offer Templates", "Virtual Tour Promotions"],
    cta: "Create Venue Materials",
    type: "regular",
    images: getImagePaths("/Banquat Hall"),
    gradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
    icon: FaBuilding,
  },
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = CATEGORY_MAP[slug];
  if (!item) {
    return {
      title: "Category Not Found | MarketBrand.ai",
    };
  }

  const categoryName = item.title;
  const keywords = [
    categoryName.toLowerCase(),
    "marketing templates",
    "promotional materials",
    "business marketing",
    "professional designs",
    "marketing posters",
    "promotional videos",
    ...item.useCases.map((u) => u.toLowerCase()),
  ].join(", ");

  return {
    title: `${item.title} Templates | Professional Promotional Videos & Posters | MarketBrand.ai`,
    description: item.intro,
    keywords: keywords,
    alternates: {
      canonical: `/category/${slug}`,
    },
    openGraph: {
      title: `${item.title} Templates | Professional Promotional Videos & Posters`,
      description: item.intro,
      url: `https://www.marketbrand.ai/category/${slug}`,
      siteName: "MarketBrand.ai",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: categoryName,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} Templates | Professional Promotional Videos & Posters`,
      description: item.intro,
      images: ["/og-image.svg"],
    },
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
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = CATEGORY_MAP[slug];
  if (!item) return notFound();

  // IconComponent available for future use if needed

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${item.title} Templates`,
    description: item.intro,
    provider: {
      "@type": "Organization",
      name: "MarketBrand.ai",
      url: "https://www.marketbrand.ai",
    },
    serviceType: "Digital Marketing Services",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    offers: {
      "@type": "Offer",
      price: "599",
      priceCurrency: "INR",
      description: "Annual subscription for unlimited marketing templates",
      url: "https://www.marketbrand.ai/pricing",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "5000",
      bestRating: "5",
      worstRating: "1",
    },
    image: "https://www.marketbrand.ai/og-image.svg",
    category: item.title,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen bg-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-800/50 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 py-4">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm flex-wrap">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-gray-500">/</span>
              <Link href="/categories" className="text-gray-400 hover:text-white transition-colors">
                Categories
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-white font-semibold break-words">{item.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className={`relative py-16 overflow-hidden bg-gradient-to-br ${item.gradient}`}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-4 leading-[1.2] sm:leading-[1.3]">
                  {item.title} Templates
                </h1>
              </div>

              {/* Trust Badges - Right Side Horizontal */}
              <div className="flex flex-row gap-1 sm:gap-1.5 justify-center lg:justify-end lg:items-center w-full lg:w-auto">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-md px-2 sm:px-2.5 py-1.5 backdrop-blur-sm hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[28px] sm:min-h-[32px]">
                  <span className="text-green-300 text-xs sm:text-sm font-semibold whitespace-nowrap flex items-center gap-1">
                    ✓ 10,000+ Templates
                  </span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-md px-2 sm:px-2.5 py-1.5 backdrop-blur-sm hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[28px] sm:min-h-[32px]">
                  <span className="text-blue-300 text-xs sm:text-sm font-semibold flex items-center gap-1 whitespace-nowrap">
                    <BsStarFill className="text-xs" /> 4.9/5
                  </span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-md px-2 sm:px-2.5 py-1.5 backdrop-blur-sm hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[28px] sm:min-h-[32px]">
                  <span className="text-purple-300 text-xs sm:text-sm font-semibold flex items-center gap-1 whitespace-nowrap">
                    <FaRocket className="text-xs" /> Instant
                  </span>
                </div>
              </div>
            </div>

            {/* Image Carousel - Different types based on category */}
            <div className="relative mt-0">
              {item.type === "tabbed" && item.tabs && (
                <TabbedImageCarousel tabs={item.tabs} interval={2000} />
              )}
              {item.type === "regular" && item.images && (
                <HorizontalImageCarousel images={item.images} interval={2000} />
              )}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black gradient-text mb-4">Why Choose Our Templates?</h2>
              <p className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl mx-auto px-4">
                Everything you need to create professional marketing materials
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="card-premium text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                  <FaBolt className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Instant Download</h3>
                <p className="text-gray-300 leading-relaxed">
                  Get your templates instantly and start creating professional marketing materials in under 1 minute.
                </p>
              </div>

              <div className="card-premium text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                  <FaPalette className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Easy Customization</h3>
                <p className="text-gray-300 leading-relaxed">
                  No design skills needed. Simply add your business details and customize colors to match your brand.
                </p>
              </div>

              <div className="card-premium text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto text-3xl">
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
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-4 sm:mb-6">{item.cta}</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
              Join 10,000+ businesses already creating professional marketing materials. Download our app and start now!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center">
              <Link
                href="/download"
                className="inline-flex items-center justify-center px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl sm:rounded-2xl text-white font-bold text-lg sm:text-xl md:text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <FaRocket className="inline" /> Start Free Trial Now
                </span>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 border-2 border-white/30 rounded-xl sm:rounded-2xl text-white font-bold text-lg sm:text-xl md:text-2xl hover:bg-white/10 transition-all duration-300"
              >
                View Pricing Plans
              </Link>
            </div>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-6 sm:mt-8 flex flex-wrap items-center gap-2 justify-center px-4">
              <FaBolt className="inline" /> 7-Day Free Trial • No Credit Card Required • 10,000+ Templates
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
