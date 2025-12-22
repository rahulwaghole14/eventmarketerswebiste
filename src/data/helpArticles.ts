export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
};

export const helpArticles: Article[] = [
  {
    slug: "getting-started-first-template",
    title: "Create Your First Template in Under 1 Minute",
    excerpt: "Quickstart guide to selecting a template and exporting your first design.",
    content: `## Create your first template

Follow these steps to create and download your first marketing asset...

1. Choose a template
2. Add your business details
3. Customize colors and text
4. Download in PNG or PDF

This article is a short starter guide for new users.`,
    category: "getting-started",
  },
  {
    slug: "account-setup-guide",
    title: "Account Setup & Profile",
    excerpt: "Set up your account, verify your email, and manage profile settings.",
    content: `## Account Setup

Instructions to set up your account, change password, and configure profile settings...`,
    category: "getting-started",
  },
  {
    slug: "template-selection",
    title: "How to Select the Perfect Template",
    excerpt: "Tips for picking templates that match your brand and use-case.",
    content: `## Template Selection

Choose templates by industry, layout, and mood...`,
    category: "design-templates",
  },
  {
    slug: "color-customization",
    title: "Color Customization & Brand Colors",
    excerpt: "Use brand colors and palettes to keep designs consistent.",
    content: `## Color Customization

Use the palette tool to set brand colors and apply them across templates...`,
    category: "design-templates",
  },
  {
    slug: "mobile-app-install",
    title: "Install and Use the Mobile App",
    excerpt: "Install the app and sync your templates across devices.",
    content: `## Mobile App

Download the MarketBrand app from the App Store or Play Store and sign in...`,
    category: "mobile-app",
  },
  {
    slug: "billing-manage-subscription",
    title: "Manage Subscription & Billing",
    excerpt: "Change plans, update payment methods, and view invoices.",
    content: `## Billing & Plans

Manage your plan from account settings, update cards, and view billing history...`,
    category: "billing-plans",
  }
];

export const categories = [
  { slug: "getting-started", title: "Getting Started", description: "Learn the basics of MarketBrand.ai and create your first template quickly." },
  { slug: "design-templates", title: "Design & Templates", description: "Learn how to customize templates, colors, and text to match your brand." },
  { slug: "mobile-app", title: "Mobile App", description: "Find tips for installing, syncing, and using the mobile app effectively." },
  { slug: "billing-plans", title: "Billing & Plans", description: "Manage your subscription, payment methods, and billing history." },
];

export function articlesByCategory(slug: string) {
  return helpArticles.filter(a => a.category === slug);
}

export function findArticleBySlug(slug: string) {
  return helpArticles.find(a => a.slug === slug);
}
