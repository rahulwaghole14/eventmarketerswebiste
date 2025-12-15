"use client";
import Link from "next/link";
import CTAButton from "./CTAButton";
import Logo from "./Logo";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isGreetingsDropdownOpen, setIsGreetingsDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const greetingsDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current);
      }
      if (greetingsDropdownTimeoutRef.current) {
        clearTimeout(greetingsDropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // 300ms delay before closing
  };

  const handleGreetingsDropdownEnter = () => {
    if (greetingsDropdownTimeoutRef.current) {
      clearTimeout(greetingsDropdownTimeoutRef.current);
      greetingsDropdownTimeoutRef.current = null;
    }
    setIsGreetingsDropdownOpen(true);
  };

  const handleGreetingsDropdownLeave = () => {
    greetingsDropdownTimeoutRef.current = setTimeout(() => {
      setIsGreetingsDropdownOpen(false);
    }, 300); // 300ms delay before closing
  };

  const businessCategories = [
    {
      title: "Events & Wedding",
      slug: "events-wedding",
      isMainCategory: true,
      items: [
        { name: "Event Planner", slug: "event-planner" },
        { name: "Banquet Hall", slug: "banquet-hall" },
        { name: "Catering", slug: "catering" },
        { name: "Photographer", slug: "photographer" },
        { name: "Light Supplier", slug: "light-supplier" }
      ]
    },
    {
      title: "Medical & Diagnostics",
      slug: "medical-diagnostics",
      isMainCategory: true,
      items: [
        { name: "Dental Clinic", slug: "dental-clinic" },
        { name: "Eye Hospital", slug: "eye-hospital" },
        { name: "Ayurveda Clinic", slug: "ayurveda-clinic" },
        { name: "Skin & Aesthetic Clinic", slug: "skin-aesthetic-clinic" },
        { name: "Homeopathy Clinic", slug: "homeopathy-clinic" },
        { name: "Pathology Lab", slug: "pathology-lab" },
        { name: "Allopathy Clinic", slug: "allopathy-clinic" },
        { name: "Physiotherapy Clinic", slug: "physiotherapy-clinic" }
      ]
    }
  ];

  const greetingsCategories = [
    {
      title: "Daily Greetings",
      slug: "greeting",
      items: [
        { name: "Good Morning", slug: "greeting" },
        { name: "Good Night", slug: "greeting" },
        { name: "Have a Great Day", slug: "greeting" },
        { name: "Happy Sunday", slug: "greeting" }
      ]
    },
    {
      title: "Quotes & Thoughts",
      slug: "greeting",
      items: [
        { name: "Inspirational Quotes", slug: "greeting" },
        { name: "Positive Thoughts", slug: "greeting" },
        { name: "Success Quotes", slug: "greeting" },
        { name: "Life Lessons", slug: "greeting" },
        { name: "English Quotes", slug: "greeting" },
        { name: "Hindi Quotes", slug: "greeting" },
        { name: "Sports Quotes", slug: "greeting" },
        { name: "Today's Thought", slug: "greeting" },
        { name: "Motivational Quote", slug: "greeting" }
      ]
    },
    {
      title: "Business Mindset",
      slug: "greeting",
      items: [
        { name: "Success Mindset", slug: "greeting" },
        { name: "Social Media Growth", slug: "greeting" },
        { name: "Money and Finance", slug: "greeting" },
        { name: "Business Legend Quote", slug: "greeting" },
        { name: "Business Marketing Tips", slug: "greeting" },
        { name: "Business Ethics", slug: "greeting" },
        { name: "Business Quote", slug: "greeting" }
      ]
    },
    {
      title: "Environment & Public Awareness",
      slug: "greeting",
      items: [
        { name: "Save Water", slug: "greeting" },
        { name: "Pollution Awareness", slug: "greeting" },
        { name: "Nature & Mountains", slug: "greeting" },
        { name: "Farmers & Agriculture Posters", slug: "greeting" },
        { name: "Environment Protection", slug: "greeting" },
        { name: "Road & Traffic Safety", slug: "greeting" },
        { name: "Political Awareness Posters", slug: "greeting" },
        { name: "Season Greetings", slug: "greeting" }
      ]
    },
    {
      title: "Business Essentials",
      slug: "greeting",
      items: [
        { name: "Hiring / Vacancy Posters", slug: "greeting" },
        { name: "New Product Launch", slug: "greeting" },
        { name: "Thank You Posters (General / Payment / Support)", slug: "greeting" }
      ]
    },
    {
      title: "Spiritual & Devotional",
      slug: "greeting",
      items: [
        { name: "Bhagavad Gita Quotes", slug: "greeting" },
        { name: "Ram Mandir Posters", slug: "greeting" },
        { name: "Spiritual Leaders (Vivekananda, Guru Ji, Saints, Sadguru)", slug: "greeting" },
        { name: "Spiritual Quotes", slug: "greeting" }
      ]
    },
    {
      title: "Students and Parents Zone",
      slug: "greeting",
      items: [
        { name: "Learning Facts", slug: "greeting" },
        { name: "Exam Wishes (10th/12th)", slug: "greeting" },
        { name: "Parenting Tips", slug: "greeting" }
      ]
    },
    {
      title: "Indian Pride",
      slug: "greeting",
      items: [
        { name: "Inspirational Personalities (APJ, Gandhi)", slug: "greeting" },
        { name: "Rivers of India", slug: "greeting" }
      ]
    },
    {
      title: "Health & Wellness",
      slug: "greeting",
      items: [
        { name: "Diet Tips", slug: "greeting" },
        { name: "Wellness Awareness", slug: "greeting" }
      ]
    }
  ];

  const handleCategoryEnter = (categoryTitle: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
      submenuTimeoutRef.current = null;
    }
    setHoveredCategory(categoryTitle);
  };

  const handleCategoryLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 200);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass border-b border-white/20 shadow-2xl' : 'glass border-b border-white/10'
    }`}>
      <div className="mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">
        <Logo size="md" />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          {/* Business Category with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <Link href="/categories" className="text-gray-300 hover:text-white transition-all duration-300 relative group flex items-center gap-1">
              Business Category
              <svg className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Mega Dropdown Menu */}
            {isDropdownOpen && (
              <div 
                className="fixed left-0 right-0 top-20 flex justify-center px-4 z-[100] animate-fade-in"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="w-full max-w-7xl bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 mt-4 max-h-[calc(100vh-7rem)] overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {businessCategories.map((category, index) => (
                      <div 
                        key={index} 
                        className="space-y-4 relative"
                        onMouseEnter={() => handleCategoryEnter(category.title)}
                        onMouseLeave={handleCategoryLeave}
                      >
                        <div className="text-base font-bold text-white border-b-2 border-indigo-500/50 pb-2">
                          {category.title}
                        </div>
                        {category.items && category.items.length > 0 && (
                          <ul className="space-y-2 mt-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link 
                                  href={`/category/${item.slug}`}
                                  className="text-sm text-gray-300 hover:text-white flex items-center gap-2 py-2 px-3 hover:translate-x-2 hover:bg-white/5 rounded transition-all duration-200"
                                >
                                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* View All Link */}
                  <div className="mt-6 pt-6 border-t border-white/20 text-center">
                    <Link 
                      href="/categories"
                      className="inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-white transition-colors"
                    >
                      View All Business Categories
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Greetings Category with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleGreetingsDropdownEnter}
            onMouseLeave={handleGreetingsDropdownLeave}
          >
            <Link href="/templates/greetings" className="text-gray-300 hover:text-white transition-all duration-300 relative group flex items-center gap-1">
              Greetings
              <svg className={`w-4 h-4 transition-transform duration-300 ${isGreetingsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Greetings Mega Dropdown Menu */}
            {isGreetingsDropdownOpen && (
              <div 
                className="fixed left-0 right-0 top-20 flex justify-center px-4 z-[100] animate-fade-in"
                onMouseEnter={handleGreetingsDropdownEnter}
                onMouseLeave={handleGreetingsDropdownLeave}
              >
                <div className="w-full max-w-7xl bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 mt-4 max-h-[calc(100vh-7rem)] overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {greetingsCategories.map((category, index) => (
                      <div 
                        key={index} 
                        className="space-y-4 relative"
                      >
                        <div className="text-sm font-bold text-white border-b-2 border-green-500/50 pb-2 whitespace-nowrap">
                          {category.title}
                        </div>
                        {category.items && category.items.length > 0 && (
                          <ul className="space-y-2 mt-2">
                            {category.items.map((item, itemIndex) => {
                              // Convert category title and item name to folder-friendly format for URL
                              const nameToFolder = (name: string) => {
                                return name
                                  .replace(/\s+/g, "-")           // Replace spaces with hyphens
                                  .replace(/[&\/\(\)]/g, "-")    // Replace &, /, (, ) with hyphens
                                  .replace(/,/g, "")              // Remove commas
                                  .replace(/-+/g, "-")            // Replace multiple hyphens with single hyphen
                                  .replace(/^-|-$/g, "")         // Remove leading/trailing hyphens
                                  .toLowerCase();
                              };
                              const categoryFolder = nameToFolder(category.title);
                              const templateFolder = nameToFolder(item.name);
                              const templateUrl = `/templates/greetings/${categoryFolder}/${templateFolder}`;
                              
                              return (
                                <li key={itemIndex}>
                                  <Link 
                                    href={templateUrl}
                                    className="text-xs text-gray-300 hover:text-white flex items-center gap-2 py-2 px-3 hover:translate-x-2 hover:bg-white/5 rounded transition-all duration-200 whitespace-nowrap"
                                  >
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
                                    <span className="truncate">{item.name}</span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* View All Link */}
                  <div className="mt-6 pt-6 border-t border-white/20 text-center">
                    <Link 
                      href="/templates/greetings"
                      className="inline-flex items-center text-sm font-semibold text-green-400 hover:text-white transition-colors"
                    >
                      View All Greeting Templates
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/pricing" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/features" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
        
        {/* Desktop CTAs */}
        <div className="hidden md:flex gap-3">
          <CTAButton href="/download" label="Download App" variant="primary" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-white/10 backdrop-blur-2xl">
          <nav className="px-4 py-6 space-y-4">
            <Link 
              href="/categories" 
              className="block text-gray-300 hover:text-white transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Business Category
            </Link>
            <Link 
              href="/templates/greetings" 
              className="block text-gray-300 hover:text-white transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Greetings
            </Link>
            <Link 
              href="/pricing" 
              className="block text-gray-300 hover:text-white transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/features" 
              className="block text-gray-300 hover:text-white transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/about" 
              className="block text-gray-300 hover:text-white transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block text-gray-300 hover:text-white transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <CTAButton href="/download" label="Download App" variant="primary" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
