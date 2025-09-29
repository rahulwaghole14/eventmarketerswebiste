import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection | MarketBrand.ai",
  description: "Learn how MarketBrand protects your privacy and handles your data. Our comprehensive privacy policy explains our data collection, usage, and protection practices.",
  keywords: "privacy policy, data protection, GDPR, data privacy, user privacy, data security, personal information",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Data Protection | MarketBrand.ai",
    description: "Learn how MarketBrand protects your privacy and handles your data. Our comprehensive privacy policy explains our data collection, usage, and protection practices.",
    url: "https://www.marketbrand.ai/privacy",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-privacy.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Data Protection | MarketBrand.ai",
    description: "Learn how MarketBrand protects your privacy and handles your data. Our comprehensive privacy policy explains our data collection, usage, and protection practices.",
    images: ["/og-privacy.jpg"],
  },
};

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes your name, email address, phone number, business information, and payment details."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers."
    },
    {
      title: "Information Sharing",
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with service providers who assist us in operating our platform."
    },
    {
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."
    },
    {
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information. You can also opt out of certain communications from us. To exercise these rights, please contact us using the information provided below."
    },
    {
      title: "Cookies and Tracking",
      content: "We use cookies and similar tracking technologies to enhance your experience on our platform, analyze usage patterns, and personalize content. You can control cookie settings through your browser preferences."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-800/50 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-white font-semibold">Privacy Policy</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-black gradient-text mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-gray-400">Last updated: January 15, 2024</p>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="py-24">
        <div className="mx-auto max-w-4xl px-4">
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
            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-gray-300">Email: privacy@marketbrand.ai</span>
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
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Related Information</h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Learn more about our policies and practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link 
              href="/terms"
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                  📄
                </div>
                <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">Terms of Service</h3>
                <p className="text-gray-300">Read our terms and conditions for using MarketBrand services</p>
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
                <p className="text-gray-300">Have questions about our privacy practices? Get in touch with us</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

