import Link from "next/link";
import type { Metadata } from "next";
import { FaRocket, FaPalette, FaMobileAlt, FaComments, FaEnvelope, FaPhone, FaBolt, FaCreditCard } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Help Center | Support & Documentation | MarketBrand.ai",
  description: "Get help with MarketBrand.ai. Find answers to common questions, tutorials, and support resources. Learn how to create professional marketing materials in minutes.",
  keywords: "help center, support, documentation, tutorials, FAQ, customer support, MarketBrand help",
  alternates: { canonical: "/help" },
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
    title: "Help Center | Support & Documentation",
    description: "Get help with MarketBrand.ai. Find answers to common questions, tutorials, and support resources.",
    url: "https://www.marketbrand.ai/help",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-help.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Center | Support & Documentation",
    description: "Get help with MarketBrand.ai. Find answers to common questions, tutorials, and support resources.",
    images: ["/og-help.jpg"],
  },
};

export default function HelpPage() {
  const faqs = [
    {
      question: "How quickly can I create marketing materials?",
      answer: "You can create and download professional marketing materials in under 1 minute. Simply choose a template, add your business details, and download instantly."
    },
    {
      question: "What file formats do you support?",
      answer: "We support PNG, JPG, PDF for images and MP4, MOV, GIF for videos. All files are high quality (up to 4K for videos, 300 DPI for print) and ready for immediate use."
    },
    {
      question: "Do I need design skills to use MarketBrand?",
      answer: "No design skills required! Our templates are professionally designed and ready to use. You just need to add your business information and customize colors if needed."
    },
    {
      question: "Can I use templates for commercial purposes?",
      answer: "Yes! With Pro and Business plans, you get full commercial rights to use all templates for your business marketing. No attribution required, no usage limits."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! You get a 7-day free trial with full access to all Pro features. No credit card required. Experience the full power before you pay."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime from your account settings. You'll continue to have access until the end of your billing period."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Help Center - MarketBrand.ai",
    "description": "Support and documentation for MarketBrand.ai users",
    "url": "https://www.marketbrand.ai/help",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  };

  const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const helpCategories = [
    {
      icon: "rocket",
      title: "Getting Started",
      description: "Learn the basics of using MarketBrand.ai",
      articles: 5,
      gradient: "from-blue-500 to-indigo-500",
      topics: ["Account Setup", "First Template", "App Navigation", "Basic Customization"]
    },
    {
      icon: "palette",
      title: "Design & Templates",
      description: "Everything about templates and customization",
      articles: 8,
      gradient: "from-purple-500 to-pink-500",
      topics: ["Template Selection", "Color Customization", "Text Editing", "Brand Guidelines"]
    },
    {
      icon: "mobile",
      title: "Mobile App",
      description: "Using the MarketBrand mobile app",
      articles: 6,
      gradient: "from-green-500 to-teal-500",
      topics: ["App Installation", "Offline Mode", "Sync Settings", "Mobile Features"]
    },
    {
      icon: "creditcard",
      title: "Billing & Plans",
      description: "Account management and subscription",
      articles: 4,
      gradient: "from-orange-500 to-red-500",
      topics: ["Subscription Plans", "Payment Methods", "Billing History", "Plan Changes"]
    }
  ];

  const contactOptions = [
    {
      icon: "comments",
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      available: "24/7"
    },
    {
      icon: "envelope",
      title: "Email Support",
      description: "Send us your questions and we'll respond quickly",
      action: "Send Email",
      available: "< 2 hours"
    },
    {
      icon: "phone",
      title: "Phone Support",
      description: "Speak directly with our support team",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM"
    }
  ];

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
              <span className="text-white font-semibold">Help Center</span>
            </nav>
          </div>
        </div>

        {/* Enhanced Hero Section */}
        <div className="relative py-24 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="text-center">
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2">
                  <span className="text-green-300 text-sm font-semibold">✓ 24/7 Support</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                  <span className="text-blue-300 text-sm font-semibold">💬 Live Chat</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <span className="text-purple-300 text-sm font-semibold">📚 23 Articles</span>
                </div>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black gradient-text mb-6 leading-[1.3] pt-1 pb-1">
                Help Center
              </h1>
              
              <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-8 leading-relaxed">
                Get help with MarketBrand.ai. Find answers to common questions, tutorials, and support resources. 
                <span className="text-white font-semibold">We're here to help you succeed.</span>
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search help articles..." 
                    className="w-full px-6 py-4 bg-gray-800/50 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 backdrop-blur-xl"
                  />
                  <button className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300">
                    Search
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2"><FaComments className="inline" /> Contact Support</span>
                </Link>
                <Link 
                  href="/download"
                  className="inline-flex items-center px-10 py-5 border-2 border-white/20 rounded-2xl text-white font-bold text-xl hover:bg-white/10 transition-all duration-300"
                >
                  <span className="flex items-center gap-2"><FaRocket className="inline" /> Start Free Trial</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Help Categories */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Browse Help Topics
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Find the help you need organized by topic. 
                Each category contains detailed guides and tutorials.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                {
                  slug: 'getting-started',
                  title: 'Getting Started',
                  description: 'Learn how to get started with our platform and create your first design in minutes.',
                  icon: 'rocket',
                  gradient: 'from-blue-500 to-indigo-500',
                  stats: 'Help Guide',
                  topics: ['Account Setup', 'First Template', 'App Navigation']
                },
                {
                  slug: 'templates',
                  title: 'Using Templates',
                  description: 'Learn how to make the most of our professional templates for your designs.',
                  icon: 'palette',
                  gradient: 'from-purple-500 to-pink-500',
                  stats: 'Templates',
                  topics: ['Template Selection', 'Customization', 'Saving']
                },
                {
                  slug: 'mobile-app',
                  title: 'Mobile App Guide',
                  description: 'Complete guide to using the MarketBrand mobile app on the go.',
                  icon: 'mobile',
                  gradient: 'from-green-500 to-teal-500',
                  stats: 'Mobile',
                  topics: ['App Installation', 'Offline Mode', 'Sync']
                },
                {
                  slug: 'billing',
                  title: 'Billing & Plans',
                  description: 'Manage your subscription and understand our pricing plans.',
                  icon: 'creditcard',
                  gradient: 'from-orange-500 to-red-500',
                  stats: 'Billing',
                  topics: ['Subscription', 'Payment', 'Invoices']
                }
              ].map((category, index) => (
                <Link 
                  key={index} 
                  href={`/help/${category.slug}`}
                  className="block group"
                >
                  <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2">
                    <div className={`w-12 h-12 mb-6 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-2xl`}>
                      {category.icon === 'rocket' && <span>🚀</span>}
                      {category.icon === 'palette' && <span>🎨</span>}
                      {category.icon === 'mobile' && <span>📱</span>}
                      {category.icon === 'creditcard' && <span>💳</span>}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.topics.map((topic, idx) => (
                        <span key={idx} className="text-xs bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className={`mt-4 inline-block bg-gradient-to-r ${category.gradient}/20 border border-white/10 rounded-lg px-4 py-1`}>
                      <span className="text-sm font-medium">{category.stats}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Quick answers to the most common questions about MarketBrand.ai
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Our support team is here to help you get the most out of MarketBrand.ai
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {contactOptions.map((option, index) => (
                <div key={index} className="text-center space-y-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                    {option.icon === "comments" && <FaComments className="text-white text-3xl" />}
                    {option.icon === "envelope" && <FaEnvelope className="text-white text-3xl" />}
                    {option.icon === "phone" && <FaPhone className="text-white text-3xl" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                    <p className="text-gray-300 mb-2">{option.description}</p>
                    <p className="text-green-400 text-sm font-semibold">Available: {option.available}</p>
                  </div>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    {option.action}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="py-24 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-12 text-center">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Join 10,000+ businesses who are already creating professional marketing materials with MarketBrand.ai. 
              Start your free trial today!
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-white font-semibold">7-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-white font-semibold">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-white font-semibold">Cancel Anytime</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/download"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                🚀 Start Free Trial Now
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-12 py-6 border-2 border-white/30 rounded-2xl text-white font-bold text-2xl hover:bg-white/10 transition-all duration-300"
              >
                💬 Contact Support
              </Link>
            </div>
            
            <p className="text-gray-400 text-lg mt-8">
              ⚡ Join 10,000+ Businesses • 10,000+ Templates • 24/7 Support
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


