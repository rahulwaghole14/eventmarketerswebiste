import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { FaRocket, FaBolt, FaPalette, FaDownload } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import dynamic from "next/dynamic";

const HorizontalImageCarousel = dynamic(() => import("@/components/HorizontalImageCarousel"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading...</div></div>,
});

// Helper function to convert display name to folder name for image paths (handles / and commas)
const nameToImageFolder = (name: string): string => {
  return name
    .replace(/\s*\/\s*/g, "-")      // Replace forward slashes (with optional spaces) with hyphens
    .replace(/,/g, "")               // Remove commas
    .replace(/\s+/g, " ")            // Normalize multiple spaces to single space
    .trim();
};

// Helper function to generate image paths
const getImagePaths = (categoryDisplayName: string, templateDisplayName: string, count: number = 5): string[] => {
  // Sanitize folder names for image paths
  const categoryFolder = nameToImageFolder(categoryDisplayName);
  const templateFolder = nameToImageFolder(templateDisplayName);
  return Array.from({ length: count }, (_, i) => `/General/${categoryFolder}/${templateFolder}/${i + 1}.png`);
};

// Helper function to convert display name to folder name (matches DropdownCarousel logic)
const nameToFolder = (name: string): string => {
  return name
    .replace(/\s+/g, "-")           // Replace spaces with hyphens
    .replace(/[&\/\(\)]/g, "-")    // Replace &, /, (, ) with hyphens
    .replace(/,/g, "")              // Remove commas
    .replace(/-+/g, "-")            // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, "")         // Remove leading/trailing hyphens
    .toLowerCase();
};

// Generate all possible template paths for static generation
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

// Convert folder name to display name
const formatDisplayName = (name: string): string => {
  return name
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export function generateStaticParams() {
  const params: { category: string; template: string }[] = [];
  
  greetingCategories.forEach((category) => {
    const categoryFolder = nameToFolder(category.title);
    category.items.forEach((item) => {
      params.push({
        category: categoryFolder,
        template: nameToFolder(item),
      });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; template: string }> }): Promise<Metadata> {
  const { category, template } = await params;
  
  const categoryData = greetingCategories.find(cat => nameToFolder(cat.title) === category);
  const templateName = formatDisplayName(template);
  const categoryName = categoryData?.title || formatDisplayName(category);
  
  if (!categoryData) {
    return {
      title: "Template Not Found | MarketBrand.ai",
    };
  }

  return {
    title: `${templateName} Template | ${categoryName} | MarketBrand.ai`,
    description: `Download professional ${templateName} greeting template from ${categoryName} category. Instant download, easy customization.`,
    keywords: `${templateName}, ${categoryName}, greeting template, download template, marketing template`,
    alternates: {
      canonical: `/templates/greetings/${category}/${template}`,
    },
    openGraph: {
      title: `${templateName} Template | ${categoryName}`,
      description: `Professional ${templateName} greeting template for your marketing needs.`,
      url: `https://www.marketbrand.ai/templates/greetings/${category}/${template}`,
      siteName: "MarketBrand.ai",
      images: [
        {
          url: `/General/${categoryName}/${templateName}/1.png`,
          width: 1200,
          height: 630,
          alt: templateName,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function GreetingTemplatePage({ params }: { params: Promise<{ category: string; template: string }> }) {
  const { category, template } = await params;
  
  const categoryData = greetingCategories.find(cat => nameToFolder(cat.title) === category);
  
  if (!categoryData) {
    return notFound();
  }
  
  // Check if template exists in this category
  const templateExists = categoryData.items.some(item => nameToFolder(item) === template);
  
  if (!templateExists) {
    return notFound();
  }
  
  const templateName = categoryData.items.find(item => nameToFolder(item) === template) || formatDisplayName(template);
  const categoryName = categoryData.title;
  const images = getImagePaths(categoryName, templateName);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${templateName} Template`,
    description: `Professional ${templateName} greeting template from ${categoryName} category`,
    category: categoryName,
    image: images[0],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `https://www.marketbrand.ai/templates/greetings/${category}/${template}`,
    },
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
              <Link href="/templates/greetings" className="text-gray-400 hover:text-white transition-colors">
                Greetings
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-gray-400">{categoryName}</span>
              <span className="text-gray-500">/</span>
              <span className="text-white font-semibold">{templateName}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative py-16 overflow-hidden bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-3 sm:gap-4 mb-6">
                  <h1 className="text-5xl lg:text-6xl font-black gradient-text leading-[1.3]">
                    {templateName}
                  </h1>
                  <p className="text-xl text-gray-300 font-light whitespace-nowrap">
                    {categoryName}
                  </p>
                </div>
              </div>

              {/* Trust Badges */}
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
            <div className="relative mt-2">
              <HorizontalImageCarousel images={images} interval={2000} />
            </div>
          </div>
        </div>

        {/* Download CTA Section */}
        <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-6">
              Ready to Download?
            </h2>
            <p className="text-xl text-gray-300 font-light mb-8 max-w-2xl mx-auto">
              Get instant access to this professional greeting template and start customizing it for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/download"
                className="inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl text-white font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <FaDownload className="mr-2" />
                Download Template
              </Link>
              <Link
                href="/templates/greetings"
                className="inline-flex items-center justify-center px-12 py-6 border-2 border-white/30 rounded-2xl text-white font-bold text-xl hover:bg-white/10 transition-all duration-300"
              >
                Browse More Templates
              </Link>
            </div>
            
            <p className="text-gray-400 text-lg mt-8 flex items-center gap-2 justify-center">
              <FaBolt className="inline" /> Free Download • No Credit Card Required • Instant Access
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

