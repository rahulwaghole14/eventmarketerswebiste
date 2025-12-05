import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch | MarketBrand.ai",
  description: "Contact MarketBrand.ai for support, inquiries, or partnerships. Call us at +91 8551941415 or email support@marketbrand.ai. We're here to help!",
  keywords: "contact MarketBrand, customer support, help, contact number, email support, phone support, get in touch",
  alternates: { canonical: "/contact" },
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
    title: "Contact Us | Get in Touch | MarketBrand.ai",
    description: "Contact MarketBrand.ai for support, inquiries, or partnerships. Call us at +91 8551941415 or email support@marketbrand.ai.",
    url: "https://www.marketbrand.ai/contact",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og-contact.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Get in Touch | MarketBrand.ai",
    description: "Contact MarketBrand.ai for support, inquiries, or partnerships. Call us at +91 8551941415 or email support@marketbrand.ai.",
    images: ["/og-contact.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

