import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';

// Define the help article data
const helpArticles = [
  {
    slug: 'getting-started',
    image: '/blog/getting-started.png',
    icon: 'bolt',
    title: 'Getting Started Guide',
    description: 'Everything you need to know to get up and running with our platform quickly and efficiently.',
    details: [
      'Create and verify your account in under 2 minutes',
      'Navigate the intuitive dashboard with ease',
      'Set up your profile with custom branding',
      'Connect your favorite tools and services',
      'Invite team members and set permissions'
    ],
    stats: 'Getting Started',
    usage: 'Helped 15,000+ users get started',
    gradient: 'from-blue-500 to-indigo-500',
    content: `
      <h2>Welcome to Our Platform</h2>
      <p>Getting started with our platform is quick and easy. This comprehensive guide will walk you through the essential steps to set up your account and begin creating amazing content.</p>
      
      <h3>1. Account Creation & Verification</h3>
      <p>Create your account in just a few simple steps. We'll guide you through the process and help you verify your email address to get started. Make sure to:</p>
      <ul>
        <li>Use a valid email address</li>
        <li>Create a strong password</li>
        <li>Check your spam folder if you don't see the verification email</li>
      </ul>
      
      <h3>2. First Steps After Login</h3>
      <ul>
        <li><strong>Complete Your Profile:</strong> Add your company logo, brand colors, and contact information</li>
        <li><strong>Explore Templates:</strong> Browse our library of 5,000+ professional designs</li>
        <li><strong>Create Your First Design:</strong> Start with a template or blank canvas</li>
        <li><strong>Set Up Integrations:</strong> Connect with your favorite tools</li>
      </ul>

      <h3>3. Dashboard Overview</h3>
      <p>Your dashboard is your command center. Here's what you'll find:</p>
      <ul>
        <li><strong>Recent Projects:</strong> Quick access to your latest work</li>
        <li><strong>Activity Feed:</strong> Stay updated on team actions</li>
        <li><strong>Quick Actions:</strong> Start new projects with one click</li>
      </ul>
    `,
    author: 'Pooja K',
    publishDate: 'December 15, 2023',
    readTime: '8 min read',
    tags: ['Getting Started', 'Tutorial', 'Guide', 'Onboarding']
  },
  {
    slug: 'templates',
    image: '/blog/templates.png',
    icon: 'image',
    title: 'Mastering Templates',
    description: 'Learn how to effectively use and customize templates for your marketing needs.',
    details: [
      'Browse 50+ template categories',
      'Preview and select the perfect template',
      'Advanced customization options',
      'Save and organize custom templates',
      'Collaborate with team members'
    ],
    stats: 'Templates Guide',
    usage: '5,000+ templates available',
    gradient: 'from-purple-500 to-pink-500',
    content: `
      <h2>Unlock the Power of Templates</h2>
      <p>Our templates are designed to save you time while maintaining professional quality. Learn how to make the most of them.</p>
      
      <h3>1. Finding the Right Template</h3>
      <ul>
        <li>Browse by industry, use case, or format</li>
        <li>Use filters to narrow down options</li>
        <li>Save favorites for quick access</li>
      </ul>

      <h3>2. Advanced Customization</h3>
      <ul>
        <li><strong>Brand Kit:</strong> Apply your brand colors and fonts automatically</li>
        <li><strong>Layout Adjustments:</strong> Resize and reposition elements with ease</li>
        <li><strong>Stock Assets:</strong> Access millions of free-to-use images and icons</li>
      </ul>

      <h3>3. Template Best Practices</h3>
      <ul>
        <li>Maintain consistency across designs</li>
        <li>Use brand guidelines effectively</li>
        <li>Optimize for different platforms</li>
      </ul>
    `,
    author: 'Ashwini',
    publishDate: 'December 14, 2023',
    readTime: '7 min read',
    tags: ['Templates', 'Design', 'Customization', 'Branding']
  },
  {
    slug: 'billing',
    image: '/blog/billing.png',
    icon: 'link',
    title: 'Billing & Subscriptions',
    description: 'Manage your subscription, update payment methods, and understand your billing cycle.',
    details: [
      'View detailed billing history',
      'Update payment methods securely',
      'Change your subscription plan',
      'Download past invoices',
      'Manage team billing and seats'
    ],
    stats: 'Billing Help',
    usage: 'Helps with all billing inquiries',
    gradient: 'from-green-500 to-teal-500',
    content: `
      <h2>Billing Made Simple</h2>
      <p>Everything you need to know about managing your subscription and billing information in one place.</p>
      
      <h3>1. Understanding Your Plan</h3>
      <ul>
        <li>Compare plan features and limits</li>
        <li>View your current usage and limits</li>
        <li>See what's included in your subscription</li>
      </ul>

      <h3>2. Payment Management</h3>
      <ul>
        <li>Add or update credit card information</li>
        <li>Set up automatic payments</li>
        <li>View payment history and receipts</li>
      </ul>

      <h3>3. Subscription Changes</h3>
      <p>You can upgrade, downgrade, or cancel your subscription at any time. Changes will take effect at the end of your current billing cycle.</p>
    `,
    author: 'Priti Munot',
    publishDate: 'December 13, 2023',
    readTime: '6 min read',
    tags: ['Billing', 'Subscription', 'Payments', 'Account']
  },
  {
  slug: 'mobile-app',
  image: '/blog/mobile-app.png',
  icon: 'mobile',
  title: 'Mobile App Guide',
  description: 'Get the most out of our mobile application with this comprehensive guide to features and functionality.',
  details: [
    'Download and installation instructions',
    'Account setup and login process',
    'Key features and navigation',
    'Offline access and syncing',
    'Push notification settings'
  ],
  stats: 'Mobile Guide',
  usage: 'Used by 10,000+ mobile users',
  gradient: 'from-blue-400 to-cyan-500',
  content: `
    <h2>Your Complete Mobile Experience</h2>
    <p>Access our platform's powerful features right from your mobile device with our dedicated app for iOS and Android.</p>
    
    <h3>1. Getting Started</h3>
    <ul>
      <li><strong>Download:</strong> Available on the App Store and Google Play</li>
      <li><strong>System Requirements:</strong> iOS 14+/Android 8.0+</li>
      <li><strong>Storage:</strong> 50MB free space recommended</li>
      <li><strong>Permissions:</strong> Camera, storage, and notifications</li>
    </ul>

    <h3>2. Key Features</h3>
    <h4>On-the-Go Design</h4>
    <ul>
      <li>Create and edit designs from your phone</li>
      <li>Access all your saved templates</li>
      <li>Use your device's camera to add photos</li>
    </ul>

    <h4>Offline Mode</h4>
    <ul>
      <li>Work without internet connection</li>
      <li>Automatic sync when back online</li>
      <li>Manage offline storage</li>
    </ul>

    <h3>3. Tips for Best Performance</h3>
    <ul>
      <li>Keep the app updated to the latest version</li>
      <li>Clear cache regularly in app settings</li>
      <li>Enable auto-save to prevent data loss</li>
      <li>Use Wi-Fi for large file uploads</li>
    </ul>

    <h3>4. Troubleshooting</h3>
    <ul>
      <li><strong>App Crashes:</strong> Force stop and restart the app</li>
      <li><strong>Login Issues:</strong> Check your internet connection</li>
      <li><strong>Sync Problems:</strong> Pull down to refresh or log out and back in</li>
    </ul>
  `,
  author: 'Mobile Team',
  publishDate: 'December 19, 2023',
  readTime: '6 min read',
  tags: ['Mobile', 'App', 'Guide', 'iOS', 'Android']
}
];

const getArticleBySlug = (slug: string) => {
  return helpArticles.find(article => article.slug === slug);
};

// Update the help article page to match blog post page
export default async function HelpArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/help" 
          className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200 mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back to Help Center
        </Link>
      </div>
      {/* Help Article */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">{article.publishDate || 'Help Article'}</span>
                <span className="text-gray-600">•</span>
                <span className="text-sm text-gray-400">{article.readTime || '5 min read'}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {article.tags?.map((tag: string, index: number) => (
                  <span key={index} className="px-3 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-full whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
            
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                <span className="text-sm">{article.author?.split(' ').map((n: string) => n[0]).join('') || 'HC'}</span>
              </div>
              <div>
                <p className="font-medium">{article.author || 'Help Center'}</p>
                <p className="text-sm text-gray-400">Author</p>
              </div>
            </div>
            
            <div className={`inline-block bg-gradient-to-r ${article.gradient}/20 border border-white/10 rounded-lg px-4 py-1.5 mb-6`}>
              <span className="text-sm font-medium">{article.stats}</span>
            </div>
            
            <p className="text-xl text-gray-300 mb-8">{article.description}</p>
            
            <div className="relative w-full mb-10 rounded-xl overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${article.gradient} opacity-30`}></div>
              <div className="relative flex justify-center">
                {article.image ? (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="max-h-[32rem] w-auto max-w-full object-contain"
                  />
                ) : (
                  <div className="h-64 md:h-96 flex items-center justify-center w-full">
                    <span className="text-6xl">
                      {article.icon === 'palette' && '🎨'}
                      {article.icon === 'bolt' && '⚡'}
                      {article.icon === 'mobile' && '📱'}
                      {!['palette', 'bolt', 'mobile'].includes(article.icon || '') && '❓'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="prose prose-invert max-w-none">
            {/* Render the HTML content if it exists */}
            {article.content ? (
              <div 
                className="blog-content" 
                dangerouslySetInnerHTML={{ __html: article.content }} 
              />
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
                <ul className="space-y-3 mb-12">
                  {article.details.map((detail: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3 mt-1">
                        <FaCheck className="w-3 h-3 text-white" />
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {/* CTA Section */}
            <div className="mt-16 pt-8 border-t border-gray-800 text-center">
              <Link 
                href="/help" 
                className="inline-flex items-center px-8 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                <FaArrowLeft className="mr-2" /> Back to Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Update generateStaticParams to include all help article slugs
export async function generateStaticParams() {
  return helpArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Disable dynamic params to ensure only pre-built pages are served
export const dynamicParams = false;

// Force static generation
export const dynamic = 'force-static';
export const revalidate = 3600; // 1 hour
