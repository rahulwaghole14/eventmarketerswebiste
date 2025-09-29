"use client";
import Link from "next/link";
import CTAButton from "./CTAButton";
import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass border-b border-white/20 shadow-2xl' : 'glass border-b border-white/10'
    }`}>
      <div className="mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">
        <Logo size="md" />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/features" className="text-gray-300 hover:text-white transition-all duration-300 relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
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
          <CTAButton href="/download" label="Download App" variant="outline" />
          <CTAButton href="/#start" label="Start Free" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
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
              href="/features" 
              className="block text-gray-300 hover:text-white transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Features
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
            <div className="pt-4 space-y-3">
              <CTAButton href="/download" label="Download App" variant="outline" />
              <CTAButton href="/#start" label="Start Free" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
