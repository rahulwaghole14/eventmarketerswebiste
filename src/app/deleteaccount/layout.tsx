import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account | Account Deletion | MarketBrand.ai",
  description: "Request to delete your MarketBrand account. Learn about our account deletion process and data retention policies.",
  keywords: "delete account, account deletion, remove account, cancel account, data deletion",
  alternates: { canonical: "/deleteaccount" },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    title: "Delete Account | Account Deletion | MarketBrand.ai",
    description: "Request to delete your MarketBrand account. Learn about our account deletion process.",
    url: "https://www.marketbrand.ai/deleteaccount",
    siteName: "MarketBrand.ai",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

