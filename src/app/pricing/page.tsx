import Section from "@/components/Section";
import PricingTable from "@/components/PricingTable";
import Link from "next/link";
import type { Metadata } from "next";
import { FaRocket, FaBolt, FaComments, FaBriefcase, FaBullseye } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Pricing Plans | Professional Marketing Templates & Design Tools | MarketBrand.ai",
  description: "Affordable pricing plans for professional marketing materials. Start free with 7-day trial. Choose from Free, Pro, and Enterprise plans. No hidden fees, cancel anytime.",
  keywords: "marketing design pricing, business template plans, professional design tools pricing, marketing app subscription, design software plans, marketing templates cost, business design pricing",
  alternates: { canonical: "/pricing" },
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
    title: "Pricing Plans | Professional Marketing Templates & Design Tools",
    description: "Affordable pricing plans for professional marketing materials. Start free with 7-day trial. Choose from Free, Pro, and Enterprise plans. No hidden fees, cancel anytime.",
    url: "https://www.marketbrand.ai/pricing",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-pricing.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans | Professional Marketing Templates & Design Tools",
    description: "Affordable pricing plans for professional marketing materials. Start free with 7-day trial. Choose from Free, Pro, and Enterprise plans. No hidden fees, cancel anytime.",
    images: ["/og-pricing.jpg"],
  },
};

export default function PricingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "MarketBrand.ai - Professional Marketing Design Platform",
    "description": "Professional marketing design platform with templates, customization tools, and business integration features",
    "brand": {
      "@type": "Brand",
      "name": "MarketBrand.ai"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Plan",
        "price": "0",
        "priceCurrency": "INR",
        "description": "5 designs per month with watermarks",
        "availability": "InStock"
      },
      {
        "@type": "Offer",
        "name": "Pro Plan",
        "price": "599",
        "priceCurrency": "INR",
        "description": "Annual subscription with unlimited designs and no watermarks",
        "availability": "InStock"
      },
      {
        "@type": "Offer",
        "name": "Business Plan",
        "price": "2099",
        "priceCurrency": "INR",
        "description": "Advanced features with team collaboration and API access",
        "availability": "InStock"
      }
    ],
    "provider": {
      "@type": "Organization",
      "name": "MarketBrand.ai",
      "url": "https://www.marketbrand.ai"
    }
  };

  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "/month",
      description: "Perfect for trying out MarketBrand",
      features: [
        "5 designs per month",
        "Basic templates",
        "Watermarked downloads",
        "Community support",
        "Mobile app access"
      ],
      cta: "Start Free",
      popular: false,
      gradient: "from-gray-500 to-gray-700"
    },
    {
      name: "Pro",
      price: "₹599",
      period: "/quarterly",
      originalPrice: "₹5,988",
      savings: "Save ₹5,389",
      description: "Most popular for growing businesses",
      features: [
        "Unlimited designs",
        "All 1000+ templates",
        "No watermarks",
        "Priority support",
        "Commercial license",
        "HD quality exports",
        "All business categories",
        "Festival templates"
      ],
      cta: "Start 7-Day Free Trial",
      popular: true,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "Business",
      price: "₹2,099",
      period: "/year",
      originalPrice: "₹7,998",
      savings: "Save ₹5,899",
      description: "Advanced features for teams",
      features: [
        "Unlimited designs",
        "All 1000+ templates",
        "No watermarks",
        "Priority support",
        "Commercial license",
        "HD quality exports",
        "All business categories",
        "Festival templates"
      ],
      cta: "Start 7-Day Free Trial",
      popular: false,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      text: "The Pro plan saved me thousands! I was paying ₹15,000/month for a designer. Now I create professional marketing materials myself for just ₹50/month.",
      author: "Priya Sharma",
      role: "Restaurant Owner",
      business: "Spice Garden",
      avatar: "🍽️",
      plan: "Pro Plan"
    },
    {
      text: "Business plan is perfect for our agency. Team collaboration features help us manage multiple clients efficiently. ROI is incredible!",
      author: "Rajesh Kumar",
      role: "Marketing Agency Owner",
      business: "Digital Solutions",
      avatar: "briefcase",
      plan: "Business Plan"
    },
    {
      text: "Started with Free plan, loved it so much I upgraded to Pro. The 7-day free trial convinced me - no risk, all reward!",
      author: "Anjali Patel",
      role: "Wedding Planner",
      business: "Dream Weddings",
      avatar: "💒",
      plan: "Pro Plan"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences. No questions asked."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, UPI, net banking, and digital wallets. All payments are processed securely through Razorpay with 256-bit SSL encryption."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! You get a 7-day free trial with full access to all Pro features. No credit card required. Experience the full power before you pay."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our service, contact us for a full refund. No questions asked."
    },
    {
      question: "How much can I save compared to hiring a designer?",
      answer: "Our Pro plan costs ₹50/month (₹599/year). A professional designer typically charges ₹15,000-25,000/month. That's a savings of ₹179,000+ per year!"
    },
    {
      question: "What's included in the commercial license?",
      answer: "With Pro and Business plans, you get full commercial rights to use all templates for your business marketing. No attribution required, no usage limits."
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
              <span className="text-white font-semibold">Pricing</span>
            </nav>
          </div>
        </div>

        {/* Enhanced Hero Section */}
        <div className="relative py-12 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-8">
              {/* Heading */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-black gradient-text leading-[1.3] pt-1 pb-1">
                  Simple, <span className="text-white">Transparent Pricing</span>
                </h1>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center lg:justify-end items-center gap-2">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-2.5 py-1 h-6 flex items-center">
                  <span className="text-green-300 text-xs font-semibold whitespace-nowrap">✓ 7-Day Free Trial</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-2.5 py-1 h-6 flex items-center">
                  <span className="text-blue-300 text-xs font-semibold whitespace-nowrap">Save ₹180K+ vs Designer</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-2.5 py-1 h-6 flex items-center">
                  <span className="text-purple-300 text-xs font-semibold whitespace-nowrap">🔄 Cancel Anytime</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-base mt-6 text-center lg:text-left max-w-3xl">
              Professional marketing templates designed specifically for your industry. Each category includes templates, videos, and promotional materials tailored to your business needs.
            </p>
          </div>
        </div>

        {/* Interactive Pricing Cards */}
        <div className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black gradient-text mb-4 px-4">
                Choose Your Perfect Plan
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto px-4">
                All plans include access to our full template library. Start free, upgrade anytime.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
              {plans.map((plan, index) => (
                <div key={index} className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-indigo-500/50' : ''}`}>
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-2xl">
                        <span className="flex items-center gap-1"><FaBullseye className="inline" /> Most Popular</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">{plan.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white">{plan.price}</span>
                          <span className="text-gray-400 text-sm sm:text-base">{plan.period}</span>
                        </div>
                        {plan.originalPrice && (
                          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mt-2">
                            <span className="text-sm sm:text-base md:text-lg text-gray-500 line-through">{plan.originalPrice}/year</span>
                            <span className="text-green-400 text-xs sm:text-sm font-semibold">{plan.savings}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href="/"
                      className={`w-full block text-center px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-2xl hover:scale-105' 
                          : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-500'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROI Calculator Section */}
        <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                Calculate Your Savings
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                See how much you can save compared to hiring a professional designer
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Hiring a Designer</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Monthly designer cost:</span>
                      <span className="text-white font-bold">₹15,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Annual cost:</span>
                      <span className="text-white font-bold">₹180,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Designs per month:</span>
                      <span className="text-white font-bold">10-15</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Revision rounds:</span>
                      <span className="text-white font-bold">2-3</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">With MarketBrand Pro</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Annual cost:</span>
                      <span className="text-white font-bold">₹599</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Designs per month:</span>
                      <span className="text-white font-bold">Unlimited</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Revision rounds:</span>
                      <span className="text-white font-bold">Unlimited</span>
                    </div>
                    <div className="flex justify-between items-center border-t border-green-500/30 pt-4">
                      <span className="text-green-300 font-bold">Annual Savings:</span>
                      <span className="text-green-300 font-bold text-2xl">₹179,401</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-12">
                  <div className="text-6xl font-black text-white mb-4">₹179,401</div>
                  <div className="text-2xl text-indigo-300 font-bold mb-6">Annual Savings</div>
                  <p className="text-gray-300 text-lg mb-8">
                    That's 300x return on investment! Plus unlimited designs and instant downloads.
                  </p>
                  <Link 
                    href="/"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Start Saving Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials by Plan */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
                What Our Customers Say About Our Plans
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Real feedback from businesses using our pricing plans to grow their marketing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-xl">
                      {testimonial.avatar === "briefcase" && <FaBriefcase className="text-white" />}
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-xs text-indigo-400 font-medium">{testimonial.business}</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-300 leading-relaxed mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-indigo-400 font-semibold">
                      {testimonial.plan}
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <BsStarFill key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
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
                Everything you need to know about our pricing and plans
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

        {/* Enhanced CTA Section */}
        <div className="py-24 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-12 text-center">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
              Ready to Save ₹179,000+ Per Year?
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Join 10,000+ businesses who are already saving thousands on design costs. 
              Start your free trial today and experience the difference!
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
                <span className="text-white font-semibold">No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-white font-semibold">30-Day Money Back</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/download"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2"><FaRocket className="inline" /> Start Free Trial Now</span>
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-12 py-6 border-2 border-white/30 rounded-2xl text-white font-bold text-2xl hover:bg-white/10 transition-all duration-300"
              >
                <span className="flex items-center gap-2"><FaComments className="inline" /> Contact Sales</span>
              </Link>
            </div>
            
            <p className="text-gray-400 text-lg mt-8 flex items-center gap-2">
              <FaBolt className="inline" /> Join 10,000+ Businesses • Save ₹179,000+ Annually • 7-Day Free Trial
            </p>
          </div>
        </div>
      </div>
    </>
  );
}