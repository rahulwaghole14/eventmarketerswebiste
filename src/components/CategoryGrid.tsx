import Link from "next/link";

const categories = [
  { 
    slug: "events-wedding-vendors", 
    title: "Events & Wedding Vendors",
    icon: "🎉",
    description: "Professional wedding planner promotional videos, event vendor marketing posters, and wedding business promotional materials for, Wedding Planners, Decorators, photographers, caterers, venues and more",
    gradient: "from-pink-500 to-purple-500"
  },
  { 
    slug: "fitness-gyms-yoga", 
    title: "Fitness Studios, Gyms & Yoga",
    icon: "💪",
    description: "Professional fitness promotional videos, gym marketing posters, and wellness business promotional materials for fitness studios, gyms, yoga centers, personal trainers, and health clubs.",
    gradient: "from-green-500 to-teal-500"
  },
  { 
    slug: "retail-grocery-fashion", 
    title: "Retail & Grocery/Kirana & Fashion Boutiques",
    icon: "🛍️",
    description: "Professional retail promotional videos, store marketing posters, and business promotional materials for retail stores, grocery shops, fashion boutiques, supermarkets, and shopping centers.",
    gradient: "from-blue-500 to-indigo-500"
  },
  { 
    slug: "healthcare-clinics", 
    title: "Healthcare Clinics & Diagnostics",
    icon: "🏥",
    description: "Professional healthcare promotional videos, medical marketing posters, and clinic promotional materials for healthcare clinics, diagnostic centers, hospitals, dental clinics, and medical practices.",
    gradient: "from-emerald-500 to-blue-500"
  },
  { 
    slug: "beauty-salons-spas", 
    title: "Beauty Salons, Spas & Aesthetic Clinics",
    icon: "💄",
    description: "Professional beauty promotional videos, salon marketing posters, and wellness promotional materials for beauty salons, spas, aesthetic clinics, nail studios, and wellness centers.",
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    slug: "automotive-services", 
    title: "Automotive Services",
    icon: "🚗",
    description: "Professional automotive promotional videos, service marketing posters, and business promotional materials for automotive workshops, car detailing services, tire shops, and vehicle repair centers.",
    gradient: "from-gray-500 to-gray-700"
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((c, index) => (
        <Link 
          key={c.slug} 
          href={`/category/${c.slug}`} 
          target="_blank"
          rel="noopener noreferrer"
          className="card-premium group cursor-pointer"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className={`w-16 h-16 bg-gradient-to-r ${c.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {c.icon}
            </div>
            <div className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
              {c.title}
            </div>
          </div>
          <div className="text-gray-300 text-base mb-6 leading-relaxed">
            {c.description}
          </div>
          <div className="flex items-center text-indigo-400 font-semibold group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
            Explore 
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-r ${c.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
        </Link>
      ))}
    </div>
  );
}
