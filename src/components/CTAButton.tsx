"use client";
import Link from "next/link";
import { trackButtonClick } from "@/utils/analytics";

export default function CTAButton({
  href, label, variant="primary"
}: { href: string; label: string; variant?: "primary"|"outline" }) {
  const base = "px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group focus-ring";
  
  const styles = variant === "primary"
    ? "btn-primary shadow-2xl hover:shadow-glow"
    : "btn-secondary hover:border-indigo-500/50 hover:text-white";
  
  const handleClick = () => {
    trackButtonClick(label, window.location.pathname);
  };
  
  return (
    <Link 
      href={href} 
      onClick={handleClick}
      className={`${base} ${styles} inline-flex items-center justify-center`}
      aria-label={label}
    >
      <span className="relative z-10 flex items-center space-x-2">
        <span>{label}</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </Link>
  );
}
