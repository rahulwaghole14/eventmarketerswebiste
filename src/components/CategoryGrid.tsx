import Link from "next/link";
import { FaCalendarAlt, FaHospital, FaShoppingBag, FaUtensils, FaSprayCan, FaGraduationCap } from "react-icons/fa";

const categories = [
  { 
    slug: "Events and Wedding", 
    title: "Events and Wedding",
    icon: FaCalendarAlt,
    description: "Premium marketing posters, creatives, and promotional materials for weddings and events. Ideal for event planners, mandap services, decorators, sound systems, generators, DJs, and allied services.",
    gradient: "from-indigo-500 to-purple-500",
    comingSoon: false
  },
  { 
    slug: "Medical & Diagnostics", 
    title: "Medical & Diagnostics",
    icon: FaHospital,
    description: "Professional marketing creatives and promotional materials designed to build trust, credibility, and visibility for clinics, hospitals, and diagnostic centers.",
    gradient: "from-blue-500 to-indigo-500",
    comingSoon: false
  },
  { 
    slug: "Retail & Lifestyle", 
    title: "Retail & Lifestyle",
    icon: FaShoppingBag,
    description: "High-impact marketing posters and branded creatives for retail stores, lifestyle brands, fashion outlets, and local businesses to drive attention and sales.",
    gradient: "from-orange-500 to-red-500",
    comingSoon: true
  },
  { 
    slug: "Food & Restaurant", 
    title: "Food & Restaurant",
    icon: FaUtensils,
    description: "Attractive marketing creatives, menu posters, and promotional designs for restaurants, cafés, caterers, cloud kitchens, and food service brands.",
    gradient: "from-purple-500 to-pink-500",
    comingSoon: true
  },
  { 
    slug: "Beauty & Aesthetic", 
    title: "Beauty & Aesthetic",
    icon: FaSprayCan,
    description: "Stylish and elegant marketing creatives for salons, beauty parlours, makeup artists, skincare clinics, and aesthetic brands to showcase your expertise.",
    gradient: "from-yellow-500 to-orange-500",
    comingSoon: true
  },
  { 
    slug: "Education & Training", 
    title: "Education & Training",
    icon: FaGraduationCap,
    description: "Professional marketing posters and promotional creatives for schools, colleges, coaching institutes, training centers, and educators to attract more learners.",
    gradient: "from-yellow-500 to-orange-500",
    comingSoon: true
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((c, index) => {
        const CardContent = (
          <div
            className="card-premium group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className={`w-16 h-16 bg-gradient-to-r ${c.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <c.icon className="text-white text-2xl" />
            </div>
            <div className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
              {c.title}
            </div>
          </div>
          <div className="text-gray-300 text-base mb-6 leading-relaxed">
            {c.description}
          </div>
          <div className="flex items-center text-indigo-400 font-semibold group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
            {c.comingSoon ? "Coming Soon" : "Explore"}
            {!c.comingSoon && (
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            )}
          </div>
          
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-r ${c.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
          </div>
        );

        return c.comingSoon ? (
          <div key={c.slug} className="cursor-default">
            {CardContent}
          </div>
        ) : (
          <Link 
            key={c.slug} 
            href={`/categories`} 
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            {CardContent}
        </Link>
        );
      })}
    </div>
  );
}
