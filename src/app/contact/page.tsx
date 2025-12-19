"use client";
import Link from "next/link";
import { useState } from "react";
import { trackFormSubmit } from "@/utils/analytics";
import { FaPhone, FaEnvelope, FaBolt, FaMobileAlt, FaComments, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmit("contact_form");
    
    // Format the message for WhatsApp
    const whatsappMessage = `Hello! I'm reaching out from MarketBrand.ai contact form.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Subject:* ${formData.subject}
*Message:*
${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number (remove + and spaces)
    const whatsappNumber = contactNumber.replace(/[\s+]/g, '');
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setSubmitStatus("success");
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactNumber = "+918551941415";
  const formattedNumber = "+91 8551941415";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact MarketBrand.ai",
            "description": "Get in touch with MarketBrand.ai for support, inquiries, or partnerships",
            "url": "https://www.marketbrand.ai/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "MarketBrand.ai",
              "telephone": contactNumber,
              "email": "support@marketbrand.ai",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              }
            }
          })
        }}
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
              <span className="text-white font-semibold">Contact Us</span>
            </nav>
          </div>
        </div>

        {/* Enhanced Hero Section */}
        <div className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-4 sm:mb-6 px-4">
              We'd Love to Hear From You
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed px-4">
              Have a question, suggestion, or need help? Our team is here to assist you. 
              Reach out to us through any of the channels below.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-start lg:items-stretch">
              {/* Contact Information Cards */}
              <div className="lg:col-span-1 space-y-6 flex flex-col">
                {/* Location Card - Moved to Top */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <FaMapMarkerAlt className="text-white text-xl sm:text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">Visit Us</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">Our Office</p>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-white mt-4 leading-relaxed">
                    Jay Ganesh Vision, A wing, Office. No. 328C 3rd Floor, Akurdi, Pimpri-Chinchwad, Maharashtra 411035
                  </p>
                </div>

                {/* Phone Card - Prominent */}
                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-2xl sm:rounded-3xl p-8 sm:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <FaPhone className="text-white text-xl sm:text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">Call Us</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">Available 24/7</p>
                    </div>
                  </div>
                  <a 
                    href={`tel:${contactNumber}`}
                    className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-green-400 transition-colors block mt-4 break-all"
                  >
                    {formattedNumber}
                  </a>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2">Click to call directly</p>
                </div>

                {/* Email Card */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <FaEnvelope className="text-white text-xl sm:text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">Email Us</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">Response within 24 hours</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:support@marketbrand.ai"
                    className="text-base sm:text-lg font-semibold text-white hover:text-blue-400 transition-colors block mt-4 break-all"
                  >
                    support@marketbrand.ai
                  </a>
                </div>

                {/* Quick Links */}
                {/* <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
                  <div className="space-y-3">
                    <Link href="/pricing" className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      View Pricing Plans
                    </Link>
                    <Link href="/features" className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-1">
                      <FaBolt className="inline" /> See All Features
                    </Link>
                    <Link href="/download" className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-1">
                      <FaMobileAlt className="inline" /> Download App
                    </Link>
                    <Link href="/blog" className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      Read Our Blog
                    </Link>
                    <Link href="/help" className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-1">
                      <FaComments className="inline" /> Help Center
                    </Link>
                  </div>
                </div> */}
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 flex flex-col">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-10 shadow-2xl flex-1 flex flex-col">
                  <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
                  <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input 
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-900/50 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all" 
                          placeholder="John Doe" 
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-900/50 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all" 
                          placeholder="john@example.com" 
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input 
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-gray-900/50 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all" 
                          placeholder="+91 1234567890" 
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-900/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all"
                        >
                          <option value="">Select a subject</option>
                          <option value="support">Technical Support</option>
                          <option value="sales">Sales Inquiry</option>
                          <option value="partnership">Partnership</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                        Your Message *
                      </label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-gray-900/50 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all resize-none" 
                        placeholder="Tell us how we can help you..." 
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl px-8 py-4 font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                    >
                      Send Message
                    </button>
                    
                    {submitStatus === "success" && (
                      <div className="bg-green-500/20 border border-green-500/30 rounded-xl px-4 py-3 text-green-400 flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Message sent successfully! We'll get back to you soon.</span>
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="bg-red-500/20 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span>Failed to send message. Please try again or call us directly.</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-lg font-bold text-white mb-2">Response Time</h3>
                <p className="text-gray-400">We typically respond within 24 hours</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-lg font-bold text-white mb-2">Global Support</h3>
                <p className="text-gray-400">Supporting businesses worldwide</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                <FaComments className="text-4xl mb-4 mx-auto" />
                <h3 className="text-lg font-bold text-white mb-2">24/7 Available</h3>
                <p className="text-gray-400">Call us anytime, we're always here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
