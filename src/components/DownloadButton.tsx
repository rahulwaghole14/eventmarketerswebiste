"use client";
import Link from "next/link";
import { trackDownload } from "@/utils/analytics";

interface DownloadButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  source: string;
  ariaLabel?: string;
}

export default function DownloadButton({ 
  href, 
  className, 
  children, 
  source,
  ariaLabel 
}: DownloadButtonProps) {
  const handleClick = () => {
    trackDownload(source);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}

