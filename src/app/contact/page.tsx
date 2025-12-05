"use client";
import Link from "next/link";
import { useState } from "react";
import { trackFormSubmit } from "@/utils/analytics";
import { FaPhone, FaEnvelope, FaBolt, FaMobileAlt, FaComments } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackFormSubmit("contact_form");
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setSubmitStatus("success");
    setIsSubmitting(false);
    
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
          <div className="mx-auto max-w-7xl px-4 py-4">
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
        <div className="relative py-20 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
              We'd Love to Hear From You
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Have a question, suggestion, or need help? Our team is here to assist you. 
              Reach out to us through any of the channels below.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information Cards */}
              <div className="lg:col-span-1 space-y-6">
                {/* Phone Card - Prominent */}
                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      <FaPhone className="text-white text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Call Us</h3>
                      <p className="text-gray-300 text-sm">Available 24/7</p>
                    </div>
                  </div>
                  <a 
                    href={`tel:${contactNumber}`}
                    className="text-2xl font-bold text-white hover:text-green-400 transition-colors block mt-4"
                  >
                    {formattedNumber}
                  </a>
                  <p className="text-gray-400 text-sm mt-2">Click to call directly</p>
                </div>

                {/* Email Card */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      <FaEnvelope className="text-white text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Email Us</h3>
                      <p className="text-gray-300 text-sm">Response within 24 hours</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:support@marketbrand.ai"
                    className="text-lg font-semibold text-white hover:text-blue-400 transition-colors block mt-4 break-all"
                  >
                    support@marketbrand.ai
                  </a>
                </div>

                {/* Location Card */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      📍
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Visit Us</h3>
                      <p className="text-gray-300 text-sm">Our Office</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-white mt-4">
                    Pune, Maharashtra<br />
                    India
                  </p>
                </div>

                {/* Quick Links */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
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
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
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
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl px-8 py-4 font-bold text-lg hover:shadow-2xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
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
