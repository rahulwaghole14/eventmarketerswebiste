import Link from "next/link";

const categories = [
  { 
    slug: "event-planner", 
    title: "Event Planner",
    icon: "📅",
    description: "Professional event planner promotional videos, marketing posters & business materials for Mandap, Sound, Generator, Decorator services and more",
    gradient: "from-indigo-500 to-purple-500"
  },
  { 
    slug: "banquet-hall", 
    title: "Banquet Hall",
    icon: "🏰",
    description: "Professional banquet hall promotional videos, marketing posters & business materials for wedding venues, event venues, and banquet facilities",
    gradient: "from-blue-500 to-indigo-500"
  },
  { 
    slug: "catering", 
    title: "Catering",
    icon: "🍽️",
    description: "Professional catering promotional videos, marketing posters & business materials for wedding catering, event catering, and food service businesses",
    gradient: "from-orange-500 to-red-500"
  },
  { 
    slug: "photographer", 
    title: "Photographer",
    icon: "📸",
    description: "Professional photographer promotional videos, marketing posters & business materials for wedding photographers, event photographers, and portrait photographers",
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    slug: "light-supplier", 
    title: "Light Supplier",
    icon: "💡",
    description: "Professional light supplier promotional videos, marketing posters & business materials for event lighting, wedding lighting, and lighting rental services",
    gradient: "from-yellow-500 to-orange-500"
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
