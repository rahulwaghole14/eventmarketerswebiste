"use client";
import Section from "@/components/Section";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setSubmitStatus("success");
    setIsSubmitting(false);
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Section title="We'd Love to Hear From You">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
            <input 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:border-[var(--mb-accent)] focus:outline-none transition-colors" 
              placeholder="Your Name" 
            />
            <input 
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:border-[var(--mb-accent)] focus:outline-none transition-colors" 
              placeholder="Your Email" 
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:border-[var(--mb-accent)] focus:outline-none transition-colors resize-none" 
              placeholder="Your Message" 
              rows={5} 
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-[var(--mb-accent)] text-black rounded-xl px-5 py-3 w-fit hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            
            {submitStatus === "success" && (
              <div className="text-green-400 text-sm">✅ Message sent successfully!</div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-400 text-sm">❌ Failed to send message. Please try again.</div>
            )}
          </form>
        </div>
        
        <div className="space-y-6">
          <div className="border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📧</span>
                <div>
                  <div className="font-medium">Email</div>
                  <div>support@marketbrand.ai</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="font-medium">Location</div>
                  <div>Pune, Maharashtra, India</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">⏰</span>
                <div>
                  <div className="font-medium">Response Time</div>
                  <div>Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-slate-300">
              <div>• <a href="/pricing" className="hover:text-[var(--mb-accent)] transition-colors">View Pricing Plans</a></div>
              <div>• <a href="/features" className="hover:text-[var(--mb-accent)] transition-colors">See All Features</a></div>
              <div>• <a href="/download" className="hover:text-[var(--mb-accent)] transition-colors">Download App</a></div>
              <div>• <a href="/blog" className="hover:text-[var(--mb-accent)] transition-colors">Read Our Blog</a></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
