import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marketbrand.ai"),
  title: "MarketBrand.ai — Ready-Made Marketing Materials for Your Business",
  description: "Download professional marketing materials instantly! Ready-made posters, videos & flyers for restaurants, schools, events. No design skills needed - just download and use!",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MarketBrand.ai — Ready-Made Marketing Materials for Your Business",
    description: "Download professional marketing materials instantly! Ready-made posters, videos & flyers for restaurants, schools, events. No design skills needed.",
    url: "https://www.marketbrand.ai",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.marketbrand.ai/#business",
    "name": "MarketBrand.ai",
    "alternateName": "MarketBrand",
    "description": "Professional marketing materials creation platform for businesses. Create stunning posters, videos, and marketing content in minutes.",
    "url": "https://www.marketbrand.ai",
    "logo": "https://www.marketbrand.ai/logo.png",
    "image": "https://www.marketbrand.ai/og.jpg",
    "telephone": "+91-9876543210",
    "email": "support@marketbrand.ai",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mumbai",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0760",
      "longitude": "72.8777"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "₹2000-₹5000",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Credit Card, Debit Card, UPI, Net Banking",
    "sameAs": [
      "https://www.linkedin.com/company/marketbrand",
      "https://twitter.com/marketbrand",
      "https://www.facebook.com/marketbrand"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Marketing Templates",
            "description": "1000+ professional marketing templates for all business types"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Design Services",
            "description": "Custom marketing material design and creation services"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4FLVCB52H4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4FLVCB52H4');
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
