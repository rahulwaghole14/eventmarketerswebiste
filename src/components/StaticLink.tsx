"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface StaticLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  [key: string]: unknown; // Allow other props
}

/**
 * Custom Link component that uses regular anchor tags in static builds
 * This ensures proper navigation in static exports without client-side routing
 */
export default function StaticLink({ 
  href, 
  children, 
  className = "",
  target,
  rel,
  ariaLabel,
  ...otherProps 
}: StaticLinkProps) {
  // Check if we're in a static export environment
  // In static builds, Next.js router won't work properly, so use regular anchor tags
  const isStaticExport = typeof window !== 'undefined' && 
    (window.location.protocol === 'file:' || 
     process.env.NODE_ENV === 'production');
  
  // Convert Next.js routes to static file paths
  const getStaticPath = (path: string): string => {
    // External URLs, mailto, tel, anchors - keep as is
    if (path.startsWith('http') || path.startsWith('//') || 
        path.startsWith('mailto:') || path.startsWith('tel:') || 
        path.startsWith('#')) {
      return path;
    }
    
    // Remove leading slash
    const cleanPath = path.replace(/^\/+/, '');
    
    // Root path
    if (!cleanPath || cleanPath === 'index') {
      return './index.html';
    }
    
    // If already has .html, return as is
    if (cleanPath.endsWith('.html')) {
      return `./${cleanPath}`;
    }
    
    // Calculate relative path from current location
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/'));
      const pathDepth = currentDir.split('/').filter(p => p && p !== 'index.html').length;
      
      // Build relative path
      const upLevels = pathDepth > 0 ? '../'.repeat(pathDepth) : './';
      return `${upLevels}${cleanPath}.html`;
    }
    
    // Fallback for SSR
    return `./${cleanPath}.html`;
  };

  // In static export, use regular anchor tag
  if (isStaticExport) {
    const staticHref = getStaticPath(href);
    return (
      <a
        href={staticHref}
        className={className}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        {...otherProps}
      >
        {children}
      </a>
    );
  }

  // In development or server-side, use Next.js Link
  return (
    <Link 
      href={href} 
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      {...otherProps}
    >
      {children}
    </Link>
  );
}

