import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Legal Terms | MarketBrand.ai",
  description: "Read MarketBrand's terms of service and legal conditions. Understand your rights and responsibilities when using our platform and services.",
  keywords: "terms of service, legal terms, user agreement, terms and conditions, legal compliance, user rights",
  alternates: { canonical: "/terms" },
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
    title: "Terms of Service | Legal Terms | MarketBrand.ai",
    description: "Read MarketBrand's terms of service and legal conditions. Understand your rights and responsibilities when using our platform and services.",
    url: "https://www.marketbrand.ai/terms",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-terms.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Legal Terms | MarketBrand.ai",
    description: "Read MarketBrand's terms of service and legal conditions. Understand your rights and responsibilities when using our platform and services.",
    images: ["/og-terms.jpg"],
  },
};

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using MarketBrand's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "Use License",
      content: "Permission is granted to temporarily download one copy of MarketBrand's materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials."
    },
    {
      title: "User Accounts",
      content: "When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account."
    },
    {
      title: "Prohibited Uses",
      content: "You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts. You may not violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances."
    },
    {
      title: "Content and Intellectual Property",
      content: "The service and its original content, features, and functionality are and will remain the exclusive property of MarketBrand and its licensors. The service is protected by copyright, trademark, and other laws."
    },
    {
      title: "Termination",
      content: "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will cease immediately."
    },
    {
      title: "Disclaimer",
      content: "The information on this service is provided on an 'as is' basis. To the fullest extent permitted by law, MarketBrand excludes all representations, warranties, conditions and terms relating to our service and the use of this service."
    },
    {
      title: "Limitation of Liability",
      content: "In no event shall MarketBrand, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
    },
    {
      title: "Governing Law",
      content: "These Terms shall be interpreted and governed by the laws of India. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-800/50 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-white font-semibold">Terms of Service</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-black gradient-text mb-6 leading-[1.3] pt-1 pb-1">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Please read these terms carefully before using our service. By using MarketBrand, you agree to be bound by these terms.
          </p>
          <p className="text-gray-400">Last updated: January 15, 2024</p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
          
          {/* Contact Information */}
          <div className="mt-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-gray-300">Email: legal@marketbrand.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Address: Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Pages */}
      <div className="py-24 bg-gray-800/30">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Related Information</h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Learn more about our policies and legal information
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link 
              href="/privacy"
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                  🔒
                </div>
                <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">Privacy Policy</h3>
                <p className="text-gray-300">Learn how we protect your privacy and handle your data</p>
              </div>
            </Link>

            <Link 
              href="/contact"
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                  💬
                </div>
                <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">Contact Us</h3>
                <p className="text-gray-300">Have questions about our terms? Get in touch with us</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


