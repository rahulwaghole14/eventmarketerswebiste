import Link from "next/link";
import MarketBrandLogo from './MarketBrandLogo';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const logoSize = size === "sm" ? "sm" : size === "lg" ? "lg" : "md";
  
  return (
    <Link href="/" className={`group ${className}`}>
      <MarketBrandLogo 
        size={logoSize} 
        showText={showText} 
        className="group-hover:scale-105 transition-transform duration-300" 
      />
    </Link>
  );
}

