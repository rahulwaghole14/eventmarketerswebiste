import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { FaRocket, FaBolt, FaPalette, FaSync } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Greetings Templates | Versatile Marketing Templates for Any Occasion | MarketBrand.ai",
  description: "Browse 200+ versatile greetings templates for social media, events, announcements, and more. Professional designs for any occasion with instant download.",
  keywords: "greetings templates, versatile templates, social media templates, event templates, announcement templates, greetings marketing materials",
  alternates: { canonical: "/templates/greetings" },
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
    title: "Greetings Templates | Versatile Marketing Templates | MarketBrand.ai",
    description: "Browse 200+ versatile greetings templates. Instant download, easy customization.",
    url: "https://www.marketbrand.ai/templates/greetings",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-templates-greetings.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export default function GreetingsTemplatesPage() {
  const greetingCategories = [
    {
      title: "Daily Greetings",
      items: ["Good Morning", "Good Night", "Have a Great Day", "Happy Sunday"]
    },
    {
      title: "Quotes & Thoughts",
      items: [
        "Inspirational Quotes",
        "Positive Thoughts",
        "Success Quotes",
        "Life Lessons",
        "English Quotes",
        "Hindi Quotes",
        "Sports Quotes",
        "Today's Thought",
        "Motivational Quote"
      ]
    },
    {
      title: "Business Mindset",
      items: [
        "Success Mindset",
        "Social Media Growth",
        "Money and Finance",
        "Business Legend Quote",
        "Business Marketing Tips",
        "Business Ethics",
        "Business Quote"
      ]
    },
    {
      title: "Environment & Public Awareness",
      items: [
        "Save Water",
        "Pollution Awareness",
        "Nature & Mountains",
        "Farmers & Agriculture Posters",
        "Environment Protection",
        "Road & Traffic Safety",
        "Political Awareness Posters",
        "Season Greetings"
      ]
    },
    {
      title: "Business Essentials",
      items: [
        "Hiring / Vacancy Posters",
        "New Product Launch",
        "Thank You Posters (General / Payment / Support)"
      ]
    },
    {
      title: "Spiritual & Devotional",
      items: [
        "Bhagavad Gita Quotes",
        "Ram Mandir Posters",
        "Spiritual Leaders (Vivekananda, Guru Ji, Saints, Sadguru)",
        "Spiritual Quotes"
      ]
    },
    {
      title: "Students and Parents Zone",
      items: ["Learning Facts", "Exam Wishes (10th/12th)", "Parenting Tips"]
    },
    {
      title: "Indian Pride",
      items: ["Inspirational Personalities (APJ, Gandhi)", "Rivers of India"]
    },
    {
      title: "Health & Wellness",
      items: ["Diet Tips", "Wellness Awareness"]
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
            "name": "Greetings Templates",
            "description": "Versatile greetings templates for any occasion",
            "url": "https://www.marketbrand.ai/templates/greetings",
          }),
        }}
      />

      <div className="min-h-screen bg-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-800/50 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-gray-500">/</span>
              <Link href="/templates" className="text-gray-400 hover:text-white transition-colors">
                Templates
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-white font-semibold">Greetings</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative py-12 overflow-hidden bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-black gradient-text leading-[1.3]">
                  Greetings Templates
                </h1>
              </div>

              {/* Trust Badges - Right Side Horizontal */}
              <div className="flex flex-row gap-1.5 justify-center lg:justify-end lg:items-center">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-md px-2 py-1.5 backdrop-blur-sm hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[24px]">
                  <span className="text-green-300 text-[10px] font-semibold whitespace-nowrap flex items-center gap-1">✓ 10,000+ Templates</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-md px-2 py-1.5 backdrop-blur-sm hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[24px]">
                  <span className="text-blue-300 text-[10px] font-semibold flex items-center gap-1 whitespace-nowrap"><BsStarFill className="text-[10px]" /> 4.9/5</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-md px-2 py-1.5 backdrop-blur-sm hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[24px]">
                  <span className="text-purple-300 text-[10px] font-semibold flex items-center gap-1 whitespace-nowrap"><FaRocket className="text-[10px]" /> Instant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Greeting Templates Sections */}
        {greetingCategories.map((category, categoryIndex) => {
          // Convert category title to folder-friendly format for URLs
          const nameToFolder = (name: string) => {
            return name
              .replace(/\s+/g, "-")           // Replace spaces with hyphens
              .replace(/[&\/\(\)]/g, "-")    // Replace &, /, (, ) with hyphens
              .replace(/,/g, "")              // Remove commas
              .replace(/-+/g, "-")            // Replace multiple hyphens with single hyphen
              .replace(/^-|-$/g, "")         // Remove leading/trailing hyphens
              .toLowerCase();
          };
          
          // Convert display name to folder name for image paths (handles / and commas)
          const nameToImageFolder = (name: string) => {
            return name
              .replace(/\s*\/\s*/g, "-")      // Replace forward slashes (with optional spaces) with hyphens
              .replace(/,/g, "")               // Remove commas
              .replace(/\s+/g, " ")            // Normalize multiple spaces to single space
              .trim();
          };
          
          const categoryFolder = nameToFolder(category.title);
          
          return (
            <div key={categoryIndex} className="py-12">
              <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-8 text-center">
                  {category.title}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.items.map((item, index) => {
                    // Convert item name to folder-friendly format
                    const templateFolder = nameToFolder(item);
                    // Use sanitized names for image paths
                    const categoryImageFolder = nameToImageFolder(category.title);
                    const itemImageFolder = nameToImageFolder(item);
                    const imagePath = `/General/${categoryImageFolder}/${itemImageFolder}/1.png`;
                    const templateUrl = `/templates/greetings/${categoryFolder}/${templateFolder}`;
                    
                    return (
                      <Link
                        key={index}
                        href={templateUrl}
                        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:scale-105 group flex flex-col"
                      >
                        {/* Heading at Top */}
                        <div className="px-3 pt-3 pb-1">
                          <h3 className="text-base font-semibold text-white text-center line-clamp-2">
                            {item}
                          </h3>
                        </div>
                        
                        {/* Image Container */}
                        <div className="relative w-full px-3 pb-1">
                          <div className="relative w-full max-h-64 rounded-lg overflow-hidden bg-gray-800/30">
                            <Image
                              src={imagePath}
                              alt={item}
                              width={400}
                              height={600}
                              className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                          </div>
                        </div>
                        
                        {/* Download Button at Bottom */}
                        <div className="w-full px-3 pb-3 pt-1">
                          <div className="w-full inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl text-white font-semibold text-sm hover:shadow-lg transition-all duration-300">
                            <FaBolt className="mr-2 text-xs" />
                            View Template
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        {/* Features Section */}
        <div className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="text-center mb-10">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Why Choose Our Greetings Templates?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                  <FaBolt className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Instant Download</h3>
                <p className="text-gray-300 leading-relaxed">
                  Download templates in seconds with your business details already applied
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                  <FaPalette className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Professional Design</h3>
                <p className="text-gray-300 leading-relaxed">
                  All templates designed by professional graphic designers
                </p>
              </div>

              <div className="text-center space-y-4">
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
        <div className="py-16 bg-gradient-to-r from-green-500/20 via-teal-500/20 to-cyan-500/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-12 text-center">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-4">
              Ready to Create Versatile Greetings Marketing Materials?
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Join 10,000+ businesses already using MarketBrand to create stunning marketing materials for any occasion
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/download"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
              <FaBolt className="inline" /> Join 10,000+ Businesses • 200+ Greetings Templates • 1-Minute Creation
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
