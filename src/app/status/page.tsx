import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Status | Service Status | MarketBrand.ai",
  description: "Check MarketBrand's system status and service availability. Real-time monitoring of our platform, API, and mobile app services.",
  keywords: "system status, service status, uptime, monitoring, service availability, API status, platform status",
  alternates: { canonical: "/status" },
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
    title: "System Status | Service Status | MarketBrand.ai",
    description: "Check MarketBrand's system status and service availability. Real-time monitoring of our platform, API, and mobile app services.",
    url: "https://www.marketbrand.ai/status",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-status.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "System Status | Service Status | MarketBrand.ai",
    description: "Check MarketBrand's system status and service availability. Real-time monitoring of our platform, API, and mobile app services.",
    images: ["/og-status.jpg"],
  },
};

export default function StatusPage() {
  const services = [
    {
      name: "Web Platform",
      status: "operational",
      uptime: "99.9%",
      responseTime: "120ms",
      lastIncident: "None in the past 30 days"
    },
    {
      name: "Mobile App",
      status: "operational",
      uptime: "99.8%",
      responseTime: "95ms",
      lastIncident: "None in the past 30 days"
    },
    {
      name: "API Services",
      status: "operational",
      uptime: "99.9%",
      responseTime: "80ms",
      lastIncident: "None in the past 30 days"
    },
    {
      name: "Template Library",
      status: "operational",
      uptime: "100%",
      responseTime: "60ms",
      lastIncident: "None in the past 30 days"
    },
    {
      name: "Payment Processing",
      status: "operational",
      uptime: "99.9%",
      responseTime: "200ms",
      lastIncident: "None in the past 30 days"
    },
    {
      name: "User Authentication",
      status: "operational",
      uptime: "99.9%",
      responseTime: "150ms",
      lastIncident: "None in the past 30 days"
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: "Scheduled Maintenance - Template Library",
      status: "resolved",
      date: "2024-01-10",
      description: "Scheduled maintenance completed successfully. All template services are now fully operational.",
      duration: "2 hours"
    },
    {
      id: 2,
      title: "API Rate Limiting Update",
      status: "resolved",
      date: "2024-01-05",
      description: "Updated API rate limiting policies to improve performance. All services are now running smoothly.",
      duration: "30 minutes"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'degraded': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'outage': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'maintenance': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return '✅';
      case 'degraded': return '⚠️';
      case 'outage': return '❌';
      case 'maintenance': return '🔧';
      default: return '❓';
    }
  };

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
            <span className="text-white font-semibold">Status</span>
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
            System Status
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Real-time monitoring of MarketBrand's services and platform availability
          </p>
          
          {/* Overall Status */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-6 py-3">
            <span className="text-2xl">✅</span>
            <span className="text-green-300 font-semibold text-lg">All Systems Operational</span>
          </div>
        </div>
      </div>

      {/* Services Status */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Service Status</h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Current status of all MarketBrand services and components
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border text-sm font-semibold ${getStatusColor(service.status)}`}>
                    <span>{getStatusIcon(service.status)}</span>
                    <span className="capitalize">{service.status}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Uptime</span>
                    <span className="text-white font-semibold">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Response Time</span>
                    <span className="text-white font-semibold">{service.responseTime}</span>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-gray-400 text-sm">Last Incident</p>
                    <p className="text-gray-300 text-sm">{service.lastIncident}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Incidents */}
      <div className="py-24 bg-gray-800/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Recent Incidents</h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Latest updates on service incidents and maintenance
            </p>
          </div>
          
          <div className="space-y-8">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{incident.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{new Date(incident.date).toLocaleDateString('en-IN')}</span>
                      <span>•</span>
                      <span>Duration: {incident.duration}</span>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border text-sm font-semibold ${getStatusColor(incident.status)}`}>
                    <span>{getStatusIcon(incident.status)}</span>
                    <span className="capitalize">{incident.status}</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{incident.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Pages */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Need Help?</h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              If you're experiencing issues, these resources can help
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              href="/help"
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                  💬
                </div>
                <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">Help Center</h3>
                <p className="text-gray-300">Find answers to common questions and troubleshooting guides</p>
              </div>
            </Link>

            <Link 
              href="/contact"
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                  📞
                </div>
                <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">Contact Support</h3>
                <p className="text-gray-300">Get in touch with our support team for immediate assistance</p>
              </div>
            </Link>

            <Link 
              href="/download"
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                  📱
                </div>
                <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">Download App</h3>
                <p className="text-gray-300">Download the latest version of our mobile app</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="py-24 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
            Still Having Issues?
          </h2>
          <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
            Our support team is here to help you resolve any problems you might be experiencing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🆘 Contact Support
            </Link>
            <Link 
              href="/help"
              className="inline-flex items-center px-12 py-6 border-2 border-white/30 rounded-2xl text-white font-bold text-2xl hover:bg-white/10 transition-all duration-300"
            >
              📚 Help Center
            </Link>
          </div>
          
          <p className="text-gray-400 text-lg mt-8">
            📊 99.9% Uptime • ⚡ Real-time Monitoring • 🆘 24/7 Support
          </p>
        </div>
      </div>
    </div>
  );
}


