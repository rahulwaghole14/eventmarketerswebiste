import React from 'react';

interface MarketBrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export default function MarketBrandLogo({ 
  size = 'md', 
  showText = true, 
  className = '' 
}: MarketBrandLogoProps) {
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const arrowSizeClasses = {
    sm: 'w-16 h-8',
    md: 'w-20 h-10',
    lg: 'w-24 h-12',
    xl: 'w-28 h-14'
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* MarketBrand Text Only */}
      <div className={`font-bold ${textSizeClasses[size]} text-white tracking-wide`}>
        <span className="text-indigo-300">Market</span>
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Brand
        </span>
      </div>
    </div>
  );
}
