import Section from "@/components/Section";
import { notFound } from "next/navigation";

const MAP: Record<string, { title: string; intro: string; useCases: string[]; cta: string; }> = {
  "restaurants": {
    title: "Restaurant Marketing Posters & Menu Videos",
    intro: "Promote your café, restaurant, or food outlet with ready-to-use posters and menu videos. Share daily offers, combos, and promotions in minutes.",
    useCases: ["Daily Offer Posters","Food Festival Banners","Menu Designs","Social Media Promotions"],
    cta: "Create Restaurant Posters",
  },
  "weddings-events": {
    title: "Wedding Marketing Posters & Event Videos",
    intro: "From invitations to thank-you posters, create everything you need to promote and celebrate weddings & events.",
    useCases: ["Wedding Invitations","Event Posters","Thank You Notes","Social Media Announcements"],
    cta: "Start Designing Now",
  },
  "schools-education": {
    title: "Posters & Videos for Schools & Colleges",
    intro: "Create professional posters for school events, cultural programs, and educational workshops instantly.",
    useCases: ["School Event Posters","Admission Flyers","Student Activity Banners","Annual Day Announcements"],
    cta: "Explore Templates",
  },
  "festivals": {
    title: "Festival Marketing Posters & Greetings",
    intro: "Design Diwali, Holi, Christmas, and New Year posters for your business in minutes.",
    useCases: ["Festival Greetings","Offer Posters","Event Announcements","Seasonal Menus"],
    cta: "Create Festival Posters",
  },
  "social-media": {
    title: "Social Media Marketing Posters & Videos",
    intro: "Ready sizes and quick exports for Instagram, Facebook, WhatsApp and more.",
    useCases: ["Square Posts","Stories/Reels Intros","Ad Creatives","WhatsApp Flyers"],
    cta: "Start Creating",
  },
  "corporate": {
    title: "Corporate & SME Marketing Materials",
    intro: "Professional posters, event flyers, HR announcements, and LinkedIn visuals for companies.",
    useCases: ["Event Flyers","Hiring Posters","Sales One-Pagers","LinkedIn Visuals"],
    cta: "Browse Corporate Templates",
  },
};

export function generateStaticParams() {
  return Object.keys(MAP).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = MAP[slug];
  if (!item) return {};
  return {
    title: `${item.title} — MarketBrand.ai`,
    description: item.intro,
    alternates: { canonical: `/category/${slug}` }
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = MAP[slug];
  if (!item) return notFound();
  return (
    <Section title={item.title} subtitle={item.intro}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-white/10 rounded-2xl p-6">
          <div className="text-white font-semibold">Use Cases</div>
          <ul className="list-disc list-inside mt-2 text-slate-300">
            {item.useCases.map(u => <li key={u}>{u}</li>)}
          </ul>
        </div>
        <div className="border border-white/10 rounded-2xl p-6 grid place-items-center">
          <span className="text-slate-400">Templates preview placeholder</span>
        </div>
      </div>
      <div className="mt-8">
        <a href="/download" className="inline-block bg-[var(--mb-accent)] text-black rounded-xl px-5 py-3">{item.cta}</a>
      </div>
    </Section>
  );
}
