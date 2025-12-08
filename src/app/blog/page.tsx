import Link from "next/link";
import type { Metadata } from "next";
import { FaRocket, FaPalette, FaBolt, FaMobileAlt, FaComments, FaLightbulb, FaChartLine, FaChartBar, FaBook, FaNewspaper } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Blog | Marketing Tips & Business Insights | MarketBrand.ai",
  description: "Discover marketing tips, business insights, and design tutorials to grow your business. Learn from industry experts and stay updated with the latest marketing trends.",
  keywords: "marketing blog, business tips, marketing insights, design tutorials, business growth, marketing strategies, small business marketing",
  alternates: { canonical: "/blog" },
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
    title: "Blog | Marketing Tips & Business Insights | MarketBrand.ai",
    description: "Discover marketing tips, business insights, and design tutorials to grow your business. Learn from industry experts and stay updated with the latest marketing trends.",
    url: "https://www.marketbrand.ai/blog",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-blog.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Marketing Tips & Business Insights | MarketBrand.ai",
    description: "Discover marketing tips, business insights, and design tutorials to grow your business. Learn from industry experts and stay updated with the latest marketing trends.",
    images: ["/og-blog.jpg"],
  },
};

export default function BlogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "MarketBrand Blog",
    "description": "Marketing tips, business insights, and design tutorials",
    "url": "https://www.marketbrand.ai/blog",
    "publisher": {
      "@type": "Organization",
      "name": "MarketBrand.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.marketbrand.ai/logo.png"
      }
    },
    "blogPost": [
      {
        "@type": "BlogPosting",
        "headline": "How to Create Professional Marketing Materials in 1 Minute",
        "url": "https://www.marketbrand.ai/blog/create-professional-marketing-materials",
        "datePublished": "2024-01-15",
        "author": {
          "@type": "Person",
          "name": "MarketBrand Team"
        }
      }
    ]
  };

  const blogCategories = [
    { name: "Marketing Tips", icon: "lightbulb", count: 24 },
    { name: "Design Tutorials", icon: "palette", count: 18 },
    { name: "Business Growth", icon: "chartline", count: 16 },
    { name: "Industry News", icon: "newspaper", count: 12 },
    { name: "Case Studies", icon: "chartbar", count: 8 },
    { name: "App Updates", icon: "rocket", count: 6 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "How to Create Professional Marketing Materials in 1 Minute",
      excerpt: "Learn the secrets to creating stunning marketing materials quickly using MarketBrand's professional templates and customization tools.",
      category: "Marketing Tips",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/blog/marketing-materials.jpg",
      featured: true
    },
    {
      id: 2,
      title: "10 Design Principles Every Small Business Owner Should Know",
      excerpt: "Master the fundamental design principles that will make your marketing materials stand out and drive more customers to your business.",
      category: "Design Tutorials",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "8 min read",
      image: "/blog/design-principles.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Case Study: How a Restaurant Increased Sales by 40% with Better Marketing",
      excerpt: "Discover how a local restaurant transformed their business by implementing strategic marketing materials and social media campaigns.",
      category: "Case Studies",
      author: "Emma Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "/blog/restaurant-case-study.jpg",
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Festival Marketing: How to Capitalize on Seasonal Opportunities",
      excerpt: "Learn how to create compelling festival-themed marketing materials that resonate with your audience during special occasions.",
      category: "Marketing Tips",
      author: "David Kumar",
      date: "2024-01-08",
      readTime: "4 min read",
      image: "/blog/festival-marketing.jpg"
    },
    {
      id: 5,
      title: "Mobile-First Design: Why It Matters for Your Business",
      excerpt: "Understand why mobile-first design is crucial for modern businesses and how to implement it in your marketing materials.",
      category: "Design Tutorials",
      author: "Lisa Wang",
      date: "2024-01-05",
      readTime: "7 min read",
      image: "/blog/mobile-first-design.jpg"
    },
    {
      id: 6,
      title: "New Feature Alert: Enhanced Template Customization",
      excerpt: "Discover the latest updates to MarketBrand's template customization tools and how they can improve your workflow.",
      category: "App Updates",
      author: "MarketBrand Team",
      date: "2024-01-03",
      readTime: "3 min read",
      image: "/blog/new-features.jpg"
    },
    {
      id: 7,
      title: "Healthcare Marketing: Building Trust Through Professional Design",
      excerpt: "Explore how healthcare providers can build patient trust and credibility through professional, compliant marketing materials.",
      category: "Industry News",
      author: "Dr. Priya Sharma",
      date: "2024-01-01",
      readTime: "6 min read",
      image: "/blog/healthcare-marketing.jpg"
    },
    {
      id: 8,
      title: "Social Media Marketing: Best Practices for 2024",
      excerpt: "Stay ahead of the curve with these proven social media marketing strategies that work for businesses of all sizes.",
      category: "Marketing Tips",
      author: "Alex Thompson",
      date: "2023-12-28",
      readTime: "9 min read",
      image: "/blog/social-media-2024.jpg"
    },
    {
      id: 9,
      title: "Automotive Industry: Digital Marketing Trends That Drive Results",
      excerpt: "Learn how automotive businesses are leveraging digital marketing trends to attract more customers and boost sales.",
      category: "Industry News",
      author: "Rajesh Patel",
      date: "2023-12-25",
      readTime: "5 min read",
      image: "/blog/automotive-marketing.jpg"
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
              <span className="text-white font-semibold">Blog</span>
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
                  <span className="text-green-300 text-sm font-semibold">📝 84+ Articles</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                  <span className="text-blue-300 text-sm font-semibold">👥 Expert Authors</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <span className="text-purple-300 text-sm font-semibold flex items-center gap-1"><FaChartLine className="inline" /> Updated Weekly</span>
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black gradient-text mb-6 leading-[1.3] pt-1 pb-1">
                Marketing Tips & Business Insights
              </h1>
              
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
                Discover expert marketing tips, design tutorials, and business insights to grow your business. 
                <span className="text-white font-semibold">Learn from industry professionals and stay ahead of the competition.</span>
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mt-12">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles, tips, and tutorials..."
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all duration-300"
                  />
                  <button className="absolute right-3 top-3 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="py-16 bg-gray-800/30">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Browse by Category</h2>
              <p className="text-gray-300">Find content tailored to your specific needs</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {blogCategories.map((category, index) => (
                <Link
                  key={index}
                  href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center"
                >
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="text-white font-semibold mb-1 group-hover:gradient-text transition-all duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{category.count} articles</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Featured Articles</h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Our most popular and impactful articles to help you succeed
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {featuredPosts.map((post, index) => (
                <article key={post.id} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        <span className="flex items-center gap-1"><BsStarFill className="inline" /> Featured</span>
                      </span>
                    </div>
                  )}
                  
                  {/* Post Image */}
                  <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
                      📝
                    </div>
                  </div>
                  
                  {/* Post Content */}
                  <div className="p-8 space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full px-3 py-1 text-indigo-300 text-sm font-semibold">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300 leading-[1.3] pt-1 pb-1">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {post.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white text-sm font-semibold">{post.author}</p>
                          <p className="text-gray-400 text-xs">{new Date(post.date).toLocaleDateString('en-IN')}</p>
                        </div>
                      </div>
                      
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-indigo-400 hover:text-white transition-colors font-semibold text-sm group-hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="py-24 bg-gray-800/30">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Stay updated with our newest content and insights
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article key={post.id} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Post Image */}
                  <div className="aspect-video bg-gradient-to-br from-gray-700/20 to-gray-800/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50">
                      📰
                    </div>
                  </div>
                  
                  {/* Post Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-2 py-1 text-purple-300 text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white group-hover:gradient-text transition-all duration-300 leading-[1.3] pt-1 pb-1">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-gray-300 text-xs">{post.author}</span>
                      </div>
                      
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-purple-400 hover:text-white transition-colors font-semibold text-xs group-hover:underline"
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* View All Posts Button */}
            <div className="text-center mt-12">
              <Link
                href="/blog/all"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </div>

        {/* Related Pages */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Explore More</h2>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Continue your journey with these related resources
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link 
                href="/features"
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                    <FaBolt className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">App Features</h3>
                  <p className="text-gray-300">Discover all the powerful features that make MarketBrand the best choice for your business</p>
                </div>
              </Link>

              <Link 
                href="/download"
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                    <FaMobileAlt className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">Download App</h3>
                  <p className="text-gray-300">Get started with MarketBrand today and begin creating professional marketing materials</p>
                </div>
              </Link>

              <Link 
                href="/help"
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
                    <FaComments className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">Get Help</h3>
                  <p className="text-gray-300">Need assistance? Our comprehensive help center has answers to all your questions</p>
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
              Ready to Apply What You've Learned?
            </h2>
            <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-12 leading-relaxed">
              Don't just read about marketing success – create it! Download MarketBrand and start implementing these strategies today.
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
                <span className="text-white font-semibold">84+ Tutorial Articles</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-white font-semibold">Expert Guidance</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/download"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2"><FaMobileAlt className="inline" /> Download App Now</span>
              </Link>
              <Link 
                href="/pricing"
                className="inline-flex items-center px-12 py-6 border-2 border-white/30 rounded-2xl text-white font-bold text-2xl hover:bg-white/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
            
            <p className="text-gray-400 text-lg mt-8 flex items-center gap-2">
              <FaBook className="inline" /> 84+ Articles • <FaLightbulb className="inline" /> Expert Tips • <FaRocket className="inline" /> Start Creating Today
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


