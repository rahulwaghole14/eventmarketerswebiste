import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join Our Team | MarketBrand.ai",
  description: "Join the MarketBrand team and help businesses create professional marketing materials. Explore open positions, company culture, and career opportunities in tech and marketing.",
  keywords: "careers, jobs, employment, tech jobs, marketing jobs, startup jobs, remote work, company culture, join our team",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | Join Our Team | MarketBrand.ai",
    description: "Join the MarketBrand team and help businesses create professional marketing materials. Explore open positions, company culture, and career opportunities.",
    url: "https://www.marketbrand.ai/careers",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-careers.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Join Our Team | MarketBrand.ai",
    description: "Join the MarketBrand team and help businesses create professional marketing materials. Explore open positions, company culture, and career opportunities.",
    images: ["/og-careers.jpg"],
  },
};

export default function CareersPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MarketBrand.ai",
    "url": "https://www.marketbrand.ai/careers",
    "logo": "https://www.marketbrand.ai/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/marketbrand",
      "https://twitter.com/marketbrand"
    ],
    "hiringOrganization": {
      "@type": "Organization",
      "name": "MarketBrand.ai"
    },
    "jobPosting": [
      {
        "@type": "JobPosting",
        "title": "Senior Frontend Developer",
        "description": "Join our team to build amazing user experiences for our marketing platform",
        "datePosted": "2024-01-15",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "MarketBrand.ai"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Remote",
            "addressCountry": "IN"
          }
        }
      }
    ]
  };

  const companyValues = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We're always pushing boundaries and exploring new ways to help businesses succeed"
    },
    {
      icon: "👥",
      title: "Team Collaboration",
      description: "Great things happen when talented people work together towards a common goal"
    },
    {
      icon: "🌱",
      title: "Growth Mindset",
      description: "We believe in continuous learning and personal development for everyone"
    },
    {
      icon: "💡",
      title: "Customer Obsession",
      description: "Every decision we make is centered around creating value for our customers"
    }
  ];

  const benefits = [
    {
      icon: "🏠",
      title: "Remote First",
      description: "Work from anywhere in India with flexible hours"
    },
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Industry-leading compensation with equity options"
    },
    {
      icon: "🎓",
      title: "Learning Budget",
      description: "₹50,000 annual budget for courses, conferences, and books"
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family"
    },
    {
      icon: "🎉",
      title: "Team Events",
      description: "Regular team building activities and company retreats"
    },
    {
      icon: "⚡",
      title: "Fast Growth",
      description: "Opportunity to grow quickly in a fast-paced startup environment"
    }
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3-5 years",
      description: "Build amazing user experiences for our marketing platform using React, Next.js, and TypeScript.",
      requirements: [
        "3+ years of React/Next.js experience",
        "Strong TypeScript skills",
        "Experience with Tailwind CSS",
        "Knowledge of modern web development practices"
      ],
      posted: "2024-01-15"
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      description: "Lead product strategy and roadmap for our marketing platform, working closely with engineering and design teams.",
      requirements: [
        "2+ years of product management experience",
        "Strong analytical and problem-solving skills",
        "Experience with B2B SaaS products",
        "Excellent communication and leadership skills"
      ],
      posted: "2024-01-12"
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      description: "Design intuitive and beautiful user interfaces for our marketing platform, focusing on user experience and accessibility.",
      requirements: [
        "2+ years of UX/UI design experience",
        "Proficiency in Figma and design tools",
        "Strong portfolio showcasing mobile and web design",
        "Understanding of design systems and accessibility"
      ],
      posted: "2024-01-10"
    },
    {
      id: 4,
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      description: "Build scalable backend services and APIs for our marketing platform using Node.js and modern cloud technologies.",
      requirements: [
        "2+ years of Node.js experience",
        "Knowledge of databases (PostgreSQL, MongoDB)",
        "Experience with cloud platforms (AWS/GCP)",
        "Understanding of microservices architecture"
      ],
      posted: "2024-01-08"
    },
    {
      id: 5,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "3-5 years",
      description: "Drive growth through strategic marketing initiatives, content creation, and customer acquisition campaigns.",
      requirements: [
        "3+ years of marketing experience",
        "Experience with digital marketing channels",
        "Strong content creation skills",
        "Analytical mindset with growth metrics focus"
      ],
      posted: "2024-01-05"
    },
    {
      id: 6,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      experience: "2-3 years",
      description: "Help our customers succeed with MarketBrand by providing support, training, and strategic guidance.",
      requirements: [
        "2+ years of customer success experience",
        "Excellent communication and problem-solving skills",
        "Experience with B2B SaaS products",
        "Passion for helping customers achieve their goals"
      ],
      posted: "2024-01-03"
    }
  ];

  const teamTestimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      avatar: "👩‍💻",
      quote: "Working at MarketBrand has been incredible. The team is supportive, the work is challenging, and I love seeing the impact our product has on small businesses every day.",
      tenure: "2 years"
    },
    {
      name: "Rajesh Kumar",
      role: "Product Manager",
      avatar: "👨‍💼",
      quote: "The culture here is amazing. We're encouraged to take ownership, think big, and make a real difference. It's the best place I've worked in my career.",
      tenure: "1.5 years"
    },
    {
      name: "Priya Sharma",
      role: "UX Designer",
      avatar: "👩‍🎨",
      quote: "The remote-first culture and flexible hours allow me to do my best work while maintaining a great work-life balance. The team truly cares about each other.",
      tenure: "1 year"
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
          <div className="mx-auto max-w-7xl px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-white font-semibold">Careers</span>
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
          
          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="text-center space-y-8">
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2">
                  <span className="text-green-300 text-sm font-semibold">🏠 Remote First</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                  <span className="text-blue-300 text-sm font-semibold">💰 Competitive Salary</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <span className="text-purple-300 text-sm font-semibold">🚀 Fast Growth</span>
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black gradient-text mb-6 leading-tight">
                Join Our Mission
              </h1>
              
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
                Help us empower 50,000+ businesses to create professional marketing materials. 
                <span className="text-white font-semibold">Join a team that's passionate about innovation and customer success.</span>
              </p>

              {/* Company Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">25+</div>
                  <div className="text-gray-400 text-sm">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50K+</div>
                  <div className="text-gray-400 text-sm">Businesses Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">6</div>
                  <div className="text-gray-400 text-sm">Open Positions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Remote Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                The principles that guide everything we do at MarketBrand
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center space-y-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto text-3xl shadow-2xl">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-24 bg-gray-800/30">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Why Join MarketBrand?</h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                We offer more than just a job – we offer a career with purpose and amazing benefits
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Find your next career opportunity with us
              </p>
            </div>
            
            <div className="grid gap-8">
              {openPositions.map((position) => (
                <div key={position.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                        <span className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-3 py-1 text-green-300 text-sm font-semibold">
                          {position.department}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                          </svg>
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                          </svg>
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span>{position.experience}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed mb-4">{position.description}</p>
                    </div>
                    
                    <div className="lg:ml-8">
                      <Link
                        href={`/careers/${position.id}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Requirements:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-300">
                          <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Testimonials */}
        <div className="py-24 bg-gray-800/30">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Hear From Our Team</h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                See what it's really like to work at MarketBrand
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-xs">At MarketBrand for {testimonial.tenure}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-300 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Pages */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Learn More About Us</h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Get to know MarketBrand better before applying
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link 
                href="/about"
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                    🏢
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">About MarketBrand</h3>
                  <p className="text-gray-300">Learn about our mission, vision, and the story behind MarketBrand</p>
                </div>
              </Link>

              <Link 
                href="/blog"
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                    📝
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">Our Blog</h3>
                  <p className="text-gray-300">Read our latest insights and see how we think about marketing and technology</p>
                </div>
              </Link>

              <Link 
                href="/contact"
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                    💬
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">Contact Us</h3>
                  <p className="text-gray-300">Have questions about our culture or open positions? Get in touch with us</p>
                </div>
              </Link>
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
          
          <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Don't see a position that fits? We're always looking for talented people who share our passion for helping businesses succeed.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-white font-semibold">Remote First</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-white font-semibold">Competitive Benefits</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-white font-semibold">Growth Opportunities</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="mailto:careers@marketbrand.ai"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                📧 Send Us Your Resume
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-12 py-6 border-2 border-white/30 rounded-2xl text-white font-bold text-2xl hover:bg-white/10 transition-all duration-300"
              >
                💬 Have Questions?
              </Link>
            </div>
            
            <p className="text-gray-400 text-lg mt-8">
              🚀 Join 25+ Talented People • 💼 6 Open Positions • 🌟 Make an Impact
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


