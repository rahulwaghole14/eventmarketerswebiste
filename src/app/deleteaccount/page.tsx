"use client";
import Section from "@/components/Section";
import { useState } from "react";

export default function DeleteAccountPage() {
  const [formData, setFormData] = useState({
    email: "",
    reason: "",
    confirmText: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.confirmText !== "DELETE MY ACCOUNT") {
      setSubmitStatus("error");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ email: "", reason: "", confirmText: "" });
    setSubmitStatus("success");
    setIsSubmitting(false);
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Section title="Delete Your Account">
      <div className="max-w-2xl mx-auto">
        {/* Warning Banner */}
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-2">⚠️ Account Deletion Warning</h3>
              <p className="text-gray-300 leading-relaxed">
                Deleting your account is <strong>permanent and irreversible</strong>. This action will:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                <li>Remove all your account data and personal information</li>
                <li>Delete all your saved templates and customizations</li>
                <li>Cancel any active subscriptions immediately</li>
                <li>Remove access to all premium features</li>
                <li>Delete your download history and preferences</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Alternative Options */}
        <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-400 mb-4">💡 Consider These Alternatives First</h3>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start space-x-3">
              <span className="text-blue-400 font-bold">•</span>
              <div>
                <strong>Pause your subscription:</strong> Temporarily stop billing while keeping your account
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-400 font-bold">•</span>
              <div>
                <strong>Contact support:</strong> We can help resolve any issues you're experiencing
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-400 font-bold">•</span>
              <div>
                <strong>Export your data:</strong> Download your templates before deletion
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a 
              href="/contact" 
              className="bg-blue-500/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-lg hover:bg-blue-500/30 transition-colors text-center"
            >
              Contact Support
            </a>
            <a 
              href="/help" 
              className="border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              Browse Help Center
            </a>
          </div>
        </div>

        {/* Deletion Form */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Account Deletion Request</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input 
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:border-red-500 focus:outline-none transition-colors" 
                placeholder="Enter your account email address" 
              />
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-300 mb-2">
                Reason for Deletion (Optional)
              </label>
              <select 
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:border-red-500 focus:outline-none transition-colors"
              >
                <option value="">Select a reason (optional)</option>
                <option value="no-longer-needed">No longer need the service</option>
                <option value="found-alternative">Found a better alternative</option>
                <option value="too-expensive">Too expensive</option>
                <option value="technical-issues">Technical issues</option>
                <option value="privacy-concerns">Privacy concerns</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="confirmText" className="block text-sm font-medium text-gray-300 mb-2">
                Type "DELETE MY ACCOUNT" to confirm *
              </label>
              <input 
                id="confirmText"
                name="confirmText"
                type="text"
                value={formData.confirmText}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:border-red-500 focus:outline-none transition-colors" 
                placeholder="Type: DELETE MY ACCOUNT" 
              />
              <p className="text-sm text-gray-400 mt-1">
                This confirms you understand the permanent nature of this action
              </p>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                <div>
                  <h4 className="font-semibold text-red-400 mb-1">Final Warning</h4>
                  <p className="text-sm text-gray-300">
                    By submitting this form, you acknowledge that your account and all associated data will be permanently deleted within 30 days. This action cannot be undone.
                  </p>
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting || formData.confirmText !== "DELETE MY ACCOUNT"}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl px-6 py-4 font-bold hover:from-red-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-red-500/25"
            >
              {isSubmitting ? "Processing Deletion Request..." : "Delete My Account Permanently"}
            </button>
            
            {submitStatus === "success" && (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-green-400">Deletion Request Submitted</h4>
                    <p className="text-sm text-gray-300">
                      Your account deletion request has been submitted. You will receive a confirmation email shortly. 
                      Your account will be permanently deleted within 30 days.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-red-400">Error</h4>
                    <p className="text-sm text-gray-300">
                      Please type "DELETE MY ACCOUNT" exactly as shown to confirm your request.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Need help or have questions? Contact our support team at{" "}
            <a href="mailto:support@marketbrand.ai" className="text-indigo-400 hover:text-white transition-colors">
              support@marketbrand.ai
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
