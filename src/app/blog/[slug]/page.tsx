import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

type Feature = {
  slug: string;
  image: string;
  icon: string;
  title: string;
  description: string;
  details: string[];
  stats: string;
  usage: string;
  gradient: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  tags: string[];
};


// Define the feature data
const features = [
  {
    slug: '10000-professional-templates',
    image: '/blog/10000-templates-design.png',
    icon:'palette',
    title: '10,000+ Professional Templates',
    description: 'Transform your marketing with our extensive collection of professionally designed templates tailored for every business need.',
    details: [
      'Industry-specific designs for targeted marketing',
      'Seasonal collections for timely promotions',
      'Trending styles to keep your brand current',
      'Regular updates with fresh, modern designs',
      'High-resolution quality for all platforms',
      'Print-ready files with proper bleed and margins'
    ],
    stats: '10,000+ Templates',
    usage: 'Trusted by 10,000+ businesses worldwide',
    gradient: 'from-pink-500 to-purple-500',
    // New fields for blog content
    content: `
      <h2>Why Professional Templates Matter</h2>
      <p>In today's competitive digital landscape, having professionally designed templates can be the difference between blending in and standing out. Our collection of 10,000+ templates is curated by design experts who understand what makes visual content engaging and effective.</p>
      
      <h3>Comprehensive Industry Coverage</h3>
      <p>Whether you're in retail, healthcare, education, or hospitality, we have templates specifically designed for your industry. Each template is created with your unique needs in mind, ensuring your marketing materials speak directly to your target audience.</p>
      
      <h3>Key Benefits</h3>
      <ul>
        <li><strong>Time-Saving:</strong> Launch campaigns faster with ready-to-use designs</li>
        <li><strong>Brand Consistency:</strong> Maintain professional branding across all materials</li>
        <li><strong>Cost-Effective:</strong> Get agency-quality designs without the high costs</li>
        <li><strong>Easy Customization:</strong> Simple tools to personalize every template</li>
      </ul>
      
      <h3>How to Get the Most from Our Templates</h3>
      <p>To maximize the impact of your marketing materials, we recommend:</p>
      <ol>
        <li>Choose templates that align with your brand identity</li>
        <li>Customize with your brand colors and fonts</li>
        <li>Add high-quality images that reflect your business</li>
        <li>Test different designs to see what resonates with your audience</li>
      </ol>
    `,
    author: 'Priti Munot',
    publishDate: 'December 19, 2023',
    readTime: '5 min read',
    tags: ['Templates', 'Design', 'Marketing', 'Branding']
  },
  {
    slug: 'lightning-fast-creation',
    image: '/blog/lightning-fast-creation.png',
    icon: 'bolt',
    title: 'Lightning Fast Creation',
    description: 'Create stunning marketing materials in minutes with our intuitive design tools and powerful automation features.',
    details: [
      'One-tap customization for rapid deployment',
      'AI-powered design suggestions',
      'Bulk editing capabilities',
      'Cloud-based collaboration',
      'Version history and auto-save',
      'Cross-device synchronization'
    ],
    stats: '90% Faster',
    usage: 'Reduced design time by 90% for 5,000+ users',
    gradient: 'from-yellow-500 to-orange-500',
    content: `
      <h2>Revolutionizing Content Creation</h2>
      <p>In today's fast-paced digital world, speed is everything. Our lightning-fast creation tools empower marketers and business owners to produce professional-quality materials in a fraction of the time it would take with traditional design software.</p>
      
      <h3>Smart Design Automation</h3>
      <p>Our platform leverages artificial intelligence to automate repetitive design tasks, suggest improvements, and maintain brand consistency across all your marketing materials. The more you use it, the better it understands your brand's unique style.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>One-Click Magic:</strong> Transform basic content into polished designs with a single click</li>
        <li><strong>Template Intelligence:</strong> Smart suggestions for layout and design improvements</li>
        <li><strong>Brand Kits:</strong> Save your brand assets for one-click application</li>
        <li><strong>Real-Time Collaboration:</strong> Work with team members simultaneously</li>
      </ul>
    `,
    author: 'Michael Chen',
    publishDate: 'December 18, 2023',
    readTime: '4 min read',
    tags: ['Productivity', 'Design', 'Automation']
  },
  {
    slug: 'mobile-first-design',
    image: '/blog/mobile-first-design.png',
    icon: 'mobile',
    title: 'Mobile-First Design',
    description: 'Optimize your marketing for the mobile generation with our mobile-first design approach that puts user experience first.',
    details: [
      'Responsive layouts for all devices',
      'Touch-friendly interfaces',
      'Fast-loading mobile assets',
      'Mobile preview mode',
      'Thumb-friendly navigation',
      'Battery-efficient designs'
    ],
    stats: '2.5x Engagement',
    usage: '2.5x higher engagement on mobile-optimized content',
    gradient: 'from-blue-500 to-cyan-500',
    content: `
      <h2>Mastering Mobile Marketing</h2>
      <p>With over 60% of web traffic coming from mobile devices, a mobile-first approach isn't optional—it's essential. Our platform helps you create marketing materials that look and perform beautifully on any device.</p>
      
      <h3>Why Mobile-First Matters</h3>
      <p>Mobile users have different needs and behaviors than desktop users. Our mobile-first approach ensures your content is optimized for smaller screens, touch interactions, and on-the-go consumption.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Responsive Templates:</strong> Automatically adapt to any screen size</li>
        <li><strong>Touch Optimization:</strong> Larger tap targets and swipe gestures</li>
        <li><strong>Performance Focused:</strong> Optimized assets for fast loading</li>
        <li><strong>Mobile Analytics:</strong> Track engagement and optimize accordingly</li>
      </ul>
    `,
    author: 'Ashwini',
    publishDate: 'December 17, 2023',
    readTime: '6 min read',
    tags: ['Mobile', 'UX', 'Design']
  },
  {
    slug: 'multi-language-support',
    image: '/blog/multi-language-support.png',
    icon: 'globe',
    title: 'Multi-Language Support',
    description: 'Expand your reach with our comprehensive multi-language support for global marketing campaigns.',
    details: [
      'Support for 50+ languages',
      'Right-to-left (RTL) language support',
      'Cultural adaptation tools',
      'Auto-translation features',
      'Localization assistance',
      'Region-specific templates'
    ],
    stats: '50+ Languages',
    usage: 'Used by businesses in 25+ countries',
    gradient: 'from-green-500 to-emerald-500',
    content: `
      <h2>Breaking Language Barriers</h2>
      <p>In our interconnected world, the ability to communicate across languages is a game-changer. Our multi-language support helps you create marketing materials that resonate with diverse audiences around the globe.</p>
      
      <h3>Global Reach, Local Touch</h3>
      <p>It's not just about translation—it's about cultural adaptation. Our tools help ensure your message maintains its impact across different languages and cultures.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Wide Language Coverage:</strong> Support for major world languages</li>
        <li><strong>Cultural Sensitivity:</strong> Tools to avoid cultural missteps</li>
        <li><strong>Localization Assistance:</strong> Adapt content for regional preferences</li>
        <li><strong>Collaboration Tools:</strong> Work with native speakers easily</li>
      </ul>
    `,
    author: 'Pooja K',
    publishDate: 'December 16, 2023',
    readTime: '5 min read',
    tags: ['Localization', 'Global', 'Translation']
  },
  {
    slug: 'posters',
    image: '/blog/posters.png',
    icon: 'image',
    title: 'Professional Posters',
    description: 'Create eye-catching posters that capture attention and drive engagement for your business or event.',
    details: [
      'Print-ready poster designs',
      'High-resolution output (up to 600 DPI)',
      'Bleed and crop marks',
      'CMYK color mode',
      'Multiple size options',
      'Social media variations'
    ],
    stats: '10K+ Downloads',
    usage: '10,000+ posters downloaded monthly',
    gradient: 'from-purple-500 to-indigo-500',
    content: `
      <h2>Poster Design Mastery</h2>
      <p>In a world of digital noise, a well-designed poster can still stop people in their tracks. Our platform makes it easy to create professional posters that get noticed.</p>
      
      <h3>From Concept to Print</h3>
      <p>Whether you're promoting an event, sale, or special announcement, our tools guide you through the entire poster creation process with professional results.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Print Perfection:</strong> Industry-standard print specifications</li>
        <li><strong>Template Variety:</strong> Designs for every occasion</li>
        <li><strong>Smart Layouts:</strong> Balanced designs that work</li>
        <li><strong>Brand Consistency:</strong> Easy application of your brand elements</li>
      </ul>
    `,
    author: 'Priti Munot',
    publishDate: 'December 15, 2023',
    readTime: '4 min read',
    tags: ['Print', 'Design', 'Marketing']
  },
  {
  slug: 'business-integration',
  image: '/blog/business-integration.png',
  icon: 'link',
  title: 'Seamless Business Integration',
  description: 'Connect your favorite business tools and streamline your workflow with our powerful integration capabilities.',
  details: [
    'Connect with popular business applications',
    'Automate repetitive tasks',
    'Sync data across platforms in real-time',
    'Custom API access for developers',
    'Secure OAuth authentication'
  ],
  stats: 'Business Tools',
  usage: 'Integrates with 50+ business apps',
  gradient: 'from-indigo-500 to-blue-600',
  content: `
    <h2>Powerful Business Integration</h2>
    <p>Streamline your workflow by connecting our platform with your existing business tools and services for maximum efficiency.</p>
    
    <h3>Key Integration Features</h3>
    <ul>
      <li><strong>CRM Integration:</strong> Connect with Salesforce, HubSpot, and more</li>
      <li><strong>Marketing Tools:</strong> Sync with Mailchimp, ActiveCampaign, and others</li>
      <li><strong>Cloud Storage:</strong> Access files from Google Drive, Dropbox, and OneDrive</li>
      <li><strong>E-commerce:</strong> Connect with Shopify, WooCommerce, and BigCommerce</li>
      <li><strong>Analytics:</strong> Track performance with Google Analytics and Mixpanel</li>
    </ul>

    <h3>Automation Capabilities</h3>
    <p>Save time with automated workflows:</p>
    <ul>
      <li>Automatically sync customer data</li>
      <li>Trigger actions based on user behavior</li>
      <li>Schedule content publishing</li>
      <li>Generate reports automatically</li>
    </ul>

    <h3>Developer Friendly</h3>
    <p>For advanced users and developers:</p>
    <ul>
      <li>Comprehensive REST API documentation</li>
      <li>Webhooks for real-time updates</li>
      <li>Custom integration support</li>
      <li>Sandbox environment for testing</li>
    </ul>

    <h3>Security & Compliance</h3>
    <p>Your data's security is our priority:</p>
    <ul>
      <li>Enterprise-grade encryption</li>
      <li>SOC 2 Type II compliant</li>
      <li>GDPR and CCPA ready</li>
      <li>Regular security audits</li>
    </ul>
  `,
  author: 'Pooja K',
  publishDate: 'December 19, 2023',
  readTime: '6 min read',
  tags: ['Integration', 'Business Tools', 'Automation', 'API']
}
];

const getFeatureBySlug = (slug: string): Feature | undefined => {
  return features.find(feature => feature.slug === slug);
};

type BlogPostPageProps = {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200 mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back to Blog
        </Link>
      </div>
      {/* Blog Post */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12`}>
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">{feature.publishDate}</span>
                <span className="text-gray-600">•</span>
                <span className="text-sm text-gray-400">{feature.readTime}</span>
              </div>
              <div className="flex space-x-2">
                {feature.tags?.map((tag, index) => (
                  <span key={index} className="px-3 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{feature.title}</h1>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                <span className="text-sm">{feature.author?.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div>
                <p className="font-medium">{feature.author}</p>
                <p className="text-sm text-gray-400">Author</p>
              </div>
            </div>

            <div className={`inline-block bg-gradient-to-r ${feature.gradient}/20 border border-white/10 rounded-lg px-4 py-1.5 mb-6`}>
              <span className="text-sm font-medium">{feature.stats}</span>
            </div>

            <p className="text-xl text-gray-300 mb-8">{feature.description}</p>

            <div className="relative w-full mb-10 rounded-xl overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-30`}></div>
              <div className="relative flex justify-center">
                {feature.image ? (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="max-h-[32rem] w-auto max-w-full object-contain"
                  />
                ) : (
                  <div className="h-64 md:h-96 flex items-center justify-center">
                    <span className="text-6xl">
                      {feature.icon === 'palette' && '🎨'}
                      {feature.icon === 'bolt' && '⚡'}
                      {feature.icon === 'mobile' && '📱'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="prose prose-invert max-w-none">
            {/* Render the HTML content */}
            {feature.content && (
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: feature.content }}
              />
            )}
            {/* Key Features */}
            <h2 className="text-2xl font-bold mt-12 mb-6">Key Features</h2>
            <ul className="space-y-3 mb-12">
              {feature.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            {/* CTA Section */}
            <div className="mt-16 pt-8 border-t border-gray-800">
              <h3 className="text-2xl font-bold text-center mb-6">Ready to transform your marketing?</h3>
              <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that trust our platform to create stunning marketing materials in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/download"
                  className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/blog"
                  className="px-8 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
                >
                  Return to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// This function tells Next.js which paths to pre-render at build time
export async function generateStaticParams() {
  return features.map((feature) => ({
    slug: feature.slug,
  }));
}

// Disable dynamic params to ensure only pre-built pages are served
export const dynamicParams = false;

// Force static generation
export const dynamic = 'force-static';

// Add revalidation (optional, for ISR if needed)
export const revalidate = 3600; // 1 hour
