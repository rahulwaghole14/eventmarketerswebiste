import Link from "next/link";
import { notFound } from "next/navigation";

const MAP: Record<string, { title: string; intro: string; useCases: string[]; cta: string; }> = {
  // Events & Wedding Vendors
  "wedding-planners": {
    title: "Wedding Planner Marketing Templates | Promote Your Services",
    intro: "Professional marketing materials for wedding planners. Create stunning portfolios, service packages, and promotional content to attract more clients.",
    useCases: ["Service Package Posters", "Wedding Portfolio Designs", "Social Media Posts", "Client Testimonial Graphics"],
    cta: "Create Wedding Planner Materials",
  },
  "decorators": {
    title: "Decorator Marketing Templates | Showcase Your Work",
    intro: "Eye-catching marketing templates for decorators. Display your portfolio, promote seasonal packages, and attract more decoration projects.",
    useCases: ["Portfolio Showcase Designs", "Package Offer Posters", "Before/After Templates", "Festival Decoration Ads"],
    cta: "Design Decorator Promotions",
  },
  "photographers": {
    title: "Photography Marketing Templates | Grow Your Business",
    intro: "Professional marketing materials for photographers. Create stunning portfolio displays, pricing packages, and social media content.",
    useCases: ["Portfolio Grid Templates", "Pricing Package Designs", "Session Offer Posters", "Instagram Story Templates"],
    cta: "Create Photography Materials",
  },
  "caterers": {
    title: "Catering Service Marketing Templates | Menu & Promotions",
    intro: "Delicious marketing templates for catering services. Showcase your menu, promote packages, and attract more events.",
    useCases: ["Menu Design Templates", "Package Offer Posters", "Event Catering Ads", "Special Dish Highlights"],
    cta: "Design Catering Promotions",
  },
  "venues": {
    title: "Event Venue Marketing Templates | Promote Your Space",
    intro: "Professional marketing materials for event venues. Showcase your space, promote packages, and book more events.",
    useCases: ["Venue Showcase Designs", "Capacity & Amenities Posters", "Booking Offer Templates", "Virtual Tour Promotions"],
    cta: "Create Venue Materials",
  },

  // Fitness Studios, Gyms & Yoga
  "fitness-studios": {
    title: "Fitness Studio Marketing Templates | Grow Your Membership",
    intro: "Dynamic marketing materials for fitness studios. Promote classes, membership offers, and training programs.",
    useCases: ["Class Schedule Posters", "Membership Offer Designs", "Trainer Introduction Cards", "Success Story Templates"],
    cta: "Create Fitness Studio Ads",
  },
  "gyms": {
    title: "Gym Marketing Templates | Build Your Member Base",
    intro: "Powerful marketing templates for gyms. Promote memberships, personal training, and special offers.",
    useCases: ["Membership Offer Posters", "PT Package Designs", "Before/After Templates", "Equipment Showcase Ads"],
    cta: "Design Gym Promotions",
  },
  "yoga-centers": {
    title: "Yoga Center Marketing Templates | Peaceful & Professional",
    intro: "Serene marketing materials for yoga centers. Promote classes, workshops, and wellness programs.",
    useCases: ["Class Schedule Designs", "Workshop Announcement Posters", "Instructor Profiles", "Wellness Program Ads"],
    cta: "Create Yoga Center Materials",
  },
  "personal-trainers": {
    title: "Personal Trainer Marketing Templates | Attract More Clients",
    intro: "Professional marketing materials for personal trainers. Showcase results, promote packages, and grow your client base.",
    useCases: ["Transformation Showcase Templates", "Package Pricing Designs", "Training Program Posters", "Success Story Graphics"],
    cta: "Design Trainer Promotions",
  },
  "health-clubs": {
    title: "Health Club Marketing Templates | Premium Wellness",
    intro: "Elegant marketing materials for health clubs. Promote facilities, memberships, and wellness programs.",
    useCases: ["Facility Showcase Designs", "Membership Benefits Posters", "Wellness Program Ads", "Special Event Templates"],
    cta: "Create Health Club Materials",
  },

  // Retail & Grocery/Fashion Boutiques
  "retail-stores": {
    title: "Retail Store Marketing Templates | Boost Your Sales",
    intro: "Attractive marketing materials for retail stores. Promote products, sales, and seasonal offers.",
    useCases: ["Sale Announcement Posters", "New Arrival Templates", "Product Highlight Designs", "Discount Offer Graphics"],
    cta: "Create Retail Promotions",
  },
  "grocery-shops": {
    title: "Grocery Shop Marketing Templates | Fresh Deals Daily",
    intro: "Fresh marketing materials for grocery shops. Advertise daily deals, fresh arrivals, and combo offers.",
    useCases: ["Daily Deal Posters", "Fresh Produce Highlights", "Combo Offer Templates", "Home Delivery Ads"],
    cta: "Design Grocery Promotions",
  },
  "fashion-boutiques": {
    title: "Fashion Boutique Marketing Templates | Style & Elegance",
    intro: "Trendy marketing materials for fashion boutiques. Showcase collections, promote sales, and attract fashion lovers.",
    useCases: ["New Collection Launch Posters", "Sale & Discount Templates", "Styling Tips Graphics", "Seasonal Fashion Ads"],
    cta: "Create Boutique Materials",
  },
  "supermarkets": {
    title: "Supermarket Marketing Templates | Weekly Offers & More",
    intro: "Professional marketing materials for supermarkets. Promote weekly offers, new products, and special deals.",
    useCases: ["Weekly Offer Posters", "New Product Launch Templates", "Bulk Deal Designs", "Festival Special Ads"],
    cta: "Design Supermarket Promotions",
  },
  "shopping-centers": {
    title: "Shopping Center Marketing Templates | Events & Promotions",
    intro: "Grand marketing materials for shopping centers. Promote events, tenant offers, and seasonal campaigns.",
    useCases: ["Mall Event Posters", "Tenant Showcase Designs", "Seasonal Campaign Templates", "Food Court Promotions"],
    cta: "Create Shopping Center Ads",
  },

  // Healthcare Clinics & Diagnostics
  "healthcare-clinics": {
    title: "Healthcare Clinic Marketing Templates | Professional & Trustworthy",
    intro: "Professional marketing materials for healthcare clinics. Build trust, promote services, and educate patients.",
    useCases: ["Service Offer Posters", "Health Awareness Templates", "Doctor Profile Designs", "Appointment Booking Ads"],
    cta: "Create Healthcare Materials",
  },
  "diagnostic-centers": {
    title: "Diagnostic Center Marketing Templates | Accurate & Reliable",
    intro: "Reliable marketing materials for diagnostic centers. Promote tests, packages, and health checkups.",
    useCases: ["Health Checkup Package Posters", "Test Offer Templates", "Free Camp Announcements", "Report Delivery Ads"],
    cta: "Design Diagnostic Promotions",
  },
  "hospitals": {
    title: "Hospital Marketing Templates | Comprehensive Care",
    intro: "Professional marketing materials for hospitals. Promote departments, specialists, and healthcare services.",
    useCases: ["Department Showcase Designs", "Doctor Introduction Posters", "Health Camp Templates", "Emergency Service Ads"],
    cta: "Create Hospital Materials",
  },
  "dental-clinics": {
    title: "Dental Clinic Marketing Templates | Healthy Smiles",
    intro: "Bright marketing materials for dental clinics. Promote treatments, offers, and dental care tips.",
    useCases: ["Treatment Offer Posters", "Dental Care Tips Graphics", "Before/After Templates", "Appointment Reminder Designs"],
    cta: "Design Dental Promotions",
  },
  "medical-practices": {
    title: "Medical Practice Marketing Templates | Patient Trust",
    intro: "Professional marketing materials for medical practices. Build patient relationships and promote quality care.",
    useCases: ["Practice Introduction Posters", "Service Highlight Templates", "Patient Testimonial Designs", "Health Education Graphics"],
    cta: "Create Medical Practice Ads",
  },

  // Beauty Salons, Spas & Aesthetic Clinics
  "beauty-salons": {
    title: "Beauty Salon Marketing Templates | Glamorous Promotions",
    intro: "Stunning marketing materials for beauty salons. Promote services, packages, and special offers.",
    useCases: ["Service Menu Designs", "Package Offer Posters", "Before/After Templates", "Bridal Package Ads"],
    cta: "Create Beauty Salon Materials",
  },
  "spas": {
    title: "Spa Marketing Templates | Relaxation & Wellness",
    intro: "Serene marketing materials for spas. Promote treatments, packages, and wellness experiences.",
    useCases: ["Treatment Menu Posters", "Spa Package Templates", "Seasonal Offer Designs", "Membership Benefits Graphics"],
    cta: "Design Spa Promotions",
  },
  "aesthetic-clinics": {
    title: "Aesthetic Clinic Marketing Templates | Professional Beauty",
    intro: "Professional marketing materials for aesthetic clinics. Promote treatments, technology, and results.",
    useCases: ["Treatment Showcase Posters", "Technology Highlight Templates", "Result Gallery Designs", "Consultation Offer Ads"],
    cta: "Create Aesthetic Clinic Materials",
  },
  "nail-studios": {
    title: "Nail Studio Marketing Templates | Creative Nail Art",
    intro: "Creative marketing materials for nail studios. Showcase designs, promote packages, and attract clients.",
    useCases: ["Nail Art Gallery Posters", "Service Menu Templates", "Package Offer Designs", "Seasonal Design Highlights"],
    cta: "Design Nail Studio Promotions",
  },
  "wellness-centers": {
    title: "Wellness Center Marketing Templates | Holistic Health",
    intro: "Holistic marketing materials for wellness centers. Promote programs, therapies, and wellness services.",
    useCases: ["Wellness Program Posters", "Therapy Service Templates", "Workshop Announcements", "Membership Package Designs"],
    cta: "Create Wellness Center Ads",
  },

  // Automotive Services
  "automotive-workshops": {
    title: "Automotive Workshop Marketing Templates | Expert Service",
    intro: "Professional marketing materials for automotive workshops. Promote services, offers, and expertise.",
    useCases: ["Service Offer Posters", "Maintenance Package Templates", "Seasonal Service Ads", "Expert Team Showcase"],
    cta: "Create Workshop Promotions",
  },
  "car-detailing-services": {
    title: "Car Detailing Marketing Templates | Premium Shine",
    intro: "Premium marketing materials for car detailing services. Showcase results, promote packages, and attract car lovers.",
    useCases: ["Before/After Showcase Posters", "Detailing Package Templates", "Service Menu Designs", "Special Offer Graphics"],
    cta: "Design Detailing Promotions",
  },
  "tire-shops": {
    title: "Tire Shop Marketing Templates | Safety & Quality",
    intro: "Professional marketing materials for tire shops. Promote brands, offers, and installation services.",
    useCases: ["Brand Showcase Posters", "Seasonal Offer Templates", "Service Package Designs", "Safety Tips Graphics"],
    cta: "Create Tire Shop Materials",
  },
  "vehicle-repair-centers": {
    title: "Vehicle Repair Center Marketing Templates | Trusted Service",
    intro: "Reliable marketing materials for vehicle repair centers. Build trust, promote services, and offer guarantees.",
    useCases: ["Service Guarantee Posters", "Repair Package Templates", "Quick Service Ads", "Customer Testimonial Designs"],
    cta: "Design Repair Center Promotions",
  },
  "auto-care-centers": {
    title: "Auto Care Center Marketing Templates | Complete Care",
    intro: "Comprehensive marketing materials for auto care centers. Promote all services, packages, and care programs.",
    useCases: ["Complete Care Package Posters", "Service Menu Templates", "Membership Program Designs", "Seasonal Checkup Ads"],
    cta: "Create Auto Care Materials",
  },
};

export function generateStaticParams() {
  return Object.keys(MAP).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = MAP[slug];
  if (!item) return {};
  
  const categoryName = item.title.split('|')[0].trim();
  const keywords = [
    categoryName.toLowerCase(),
    'marketing templates',
    'promotional materials',
    'business marketing',
    'professional designs',
    'marketing posters',
    'promotional videos',
    ...item.useCases.map(u => u.toLowerCase())
  ].join(', ');

  return {
    title: `${item.title} | MarketBrand.ai`,
    description: item.intro,
    keywords: keywords,
    alternates: { 
      canonical: `https://www.marketbrand.ai/category/${slug}` 
    },
    openGraph: {
      title: item.title,
      description: item.intro,
      url: `https://www.marketbrand.ai/category/${slug}`,
      siteName: 'MarketBrand.ai',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: categoryName
        }
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: item.intro,
      images: ['/og-image.svg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = MAP[slug];
  if (!item) return notFound();
  
  const categoryIcons: Record<string, string> = {
    "wedding-planners": "💒", "decorators": "🎨", "photographers": "📸", "caterers": "🍰", "venues": "🏛️",
    "fitness-studios": "💪", "gyms": "🏋️", "yoga-centers": "🧘", "personal-trainers": "🏃", "health-clubs": "🏊",
    "retail-stores": "🛒", "grocery-shops": "🥬", "fashion-boutiques": "👗", "supermarkets": "🏬", "shopping-centers": "🏢",
    "healthcare-clinics": "⚕️", "diagnostic-centers": "🔬", "hospitals": "🏥", "dental-clinics": "🦷", "medical-practices": "👨‍⚕️",
    "beauty-salons": "💇", "spas": "💆", "aesthetic-clinics": "✨", "nail-studios": "💅", "wellness-centers": "🧖",
    "automotive-workshops": "🔧", "car-detailing-services": "🚗", "tire-shops": "🛞", "vehicle-repair-centers": "🔨", "auto-care-centers": "🚙"
  };

  const icon = categoryIcons[slug] || "🎯";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": item.title,
    "description": item.intro,
    "provider": {
      "@type": "Organization",
      "name": "MarketBrand.ai",
      "url": "https://www.marketbrand.ai"
    },
    "serviceType": "Digital Marketing Services",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "offers": {
      "@type": "Offer",
      "price": "599",
      "priceCurrency": "INR",
      "description": "Annual subscription for unlimited marketing templates",
      "url": "https://www.marketbrand.ai/pricing"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "5000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "image": "https://www.marketbrand.ai/og-image.svg",
    "category": item.title.split('|')[0].trim()
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
              <Link href="/categories" className="text-gray-400 hover:text-white transition-colors">
                Categories
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-white font-semibold">{item.title.split('|')[0].trim()}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative py-24 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="text-center">
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2">
                  <span className="text-green-300 text-sm font-semibold">✓ 1000+ Professional Templates</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                  <span className="text-blue-300 text-sm font-semibold">⭐ 4.9/5 Rating</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <span className="text-purple-300 text-sm font-semibold">🚀 Instant Download</span>
                </div>
              </div>

              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 text-5xl shadow-2xl animate-pulse">
                {icon}
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-black gradient-text mb-6 leading-tight">
                {item.title.split('|')[0].trim()}
              </h1>
              
              <p className="text-xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
                {item.intro}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  🚀 Download App - Free Trial
                </Link>
                <Link 
                  href="/pricing"
                  className="inline-flex items-center px-10 py-5 border-2 border-white/20 rounded-2xl text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  💰 View Pricing
                </Link>
              </div>

              <p className="text-gray-400 text-sm mt-6">
                ⚡ No Credit Card Required • 7-Day Free Trial • Cancel Anytime
              </p>
            </div>
          </div>
        </div>

        {/* Template Cards Gallery */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Marketing Template Gallery
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Professional templates designed specifically for your business
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {item.useCases.map((useCase, index) => (
                <div key={index} className="card-premium group overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl mb-6 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl">
                      {icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg px-3 py-1 inline-block">
                        <span className="text-green-300 text-xs font-semibold">✓ Professional Design</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {useCase}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    High-quality, customizable templates perfect for promoting your business and attracting more customers.
                  </p>

                  {/* Download Button */}
                  <Link 
                    href="/"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
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

        {/* Benefits Section */}
        <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-7xl px-4">
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
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto text-3xl">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-white">Instant Download</h3>
                <p className="text-gray-300 leading-relaxed">
                  Get your templates instantly and start creating professional marketing materials in under 1 minute.
                </p>
              </div>

              <div className="card-premium text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto text-3xl">
                  🎨
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
        <div className="py-24 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
              {item.cta}
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Join 50,000+ businesses already creating professional marketing materials. 
              Download our app and start now!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                🚀 Start Free Trial Now
              </Link>
              <Link 
                href="/pricing"
                className="inline-flex items-center px-12 py-6 border-2 border-white/30 rounded-2xl text-white font-bold text-2xl hover:bg-white/10 transition-all duration-300"
              >
                💰 View Pricing Plans
              </Link>
            </div>
            
            <p className="text-gray-400 text-lg mt-8">
              ⚡ 7-Day Free Trial • No Credit Card Required • 1000+ Templates
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
