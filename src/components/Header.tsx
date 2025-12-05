"use client";
import Link from "next/link";
import CTAButton from "./CTAButton";
import Logo from "./Logo";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const businessCategories = [
    {
      title: "Events & Wedding Vendors",
      items: [
        { name: "Wedding Planners", slug: "wedding-planners" },
        { name: "Decorators", slug: "decorators" },
        { name: "Photographers", slug: "photographers" },
        { name: "Caterers", slug: "caterers" },
        { name: "Venues", slug: "venues" }
      ]
    },
    {
      title: "Fitness Studios, Gyms & Yoga",
      items: [
        { name: "Fitness Studios", slug: "fitness-studios" },
        { name: "Gyms", slug: "gyms" },
        { name: "Yoga Centers", slug: "yoga-centers" },
        { name: "Personal Trainers", slug: "personal-trainers" },
        { name: "Health Clubs", slug: "health-clubs" }
      ]
    },
    {
      title: "Retail & Grocery/Fashion Boutiques",
      items: [
        { name: "Retail Stores", slug: "retail-stores" },
        { name: "Grocery Shops", slug: "grocery-shops" },
        { name: "Fashion Boutiques", slug: "fashion-boutiques" },
        { name: "Supermarkets", slug: "supermarkets" },
        { name: "Shopping Centers", slug: "shopping-centers" }
      ]
    },
    {
      title: "Healthcare Clinics & Diagnostics",
      items: [
        { name: "Healthcare Clinics", slug: "healthcare-clinics" },
        { name: "Diagnostic Centers", slug: "diagnostic-centers" },
        { name: "Hospitals", slug: "hospitals" },
        { name: "Dental Clinics", slug: "dental-clinics" },
        { name: "Medical Practices", slug: "medical-practices" }
      ]
    },
    {
      title: "Beauty Salons, Spas & Aesthetic Clinics",
      items: [
        { name: "Beauty Salons", slug: "beauty-salons" },
        { name: "Spas", slug: "spas" },
        { name: "Aesthetic Clinics", slug: "aesthetic-clinics" },
        { name: "Nail Studios", slug: "nail-studios" },
        { name: "Wellness Centers", slug: "wellness-centers" }
      ]
    },
    {
      title: "Automotive Services",
      items: [
        { name: "Automotive Workshops", slug: "automotive-workshops" },
        { name: "Car Detailing Services", slug: "car-detailing-services" },
        { name: "Tire Shops", slug: "tire-shops" },
        { name: "Vehicle Repair Centers", slug: "vehicle-repair-centers" },
        { name: "Auto Care Centers", slug: "auto-care-centers" }
      ]
    }
  ];

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
                className="fixed left-0 right-0 top-20 flex justify-center px-4 z-50 animate-fade-in"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="w-full max-w-7xl bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {businessCategories.map((category, index) => (
                      <div key={index} className="space-y-4">
                        <h3 className="text-sm font-bold text-white border-b border-indigo-500/50 pb-2">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link 
                                href={`/category/${item.slug}`}
                                className="text-xs text-gray-300 hover:text-white block py-1 hover:translate-x-1 transition-all duration-200"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
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
          
          <Link href="/pricing" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
            Blog
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
              href="/pricing" 
              className="block text-gray-300 hover:text-white transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/blog" 
              className="block text-gray-300 hover:text-white transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
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
