"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getRelativeImagePath } from "@/utils/imagePath";

interface HorizontalImageCarouselProps {
  images: string[];
  interval?: number;
}

export default function HorizontalImageCarousel({ 
  images, 
  interval = 2000 
}: HorizontalImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Initialize images immediately from props (they're already converted to relative paths during SSR)
  // This ensures images are available even if useEffect doesn't run
  const initializeImages = () => {
    return images
      .map(img => {
        // If already relative, use as-is
        if (img && (img.startsWith('./') || img.startsWith('../'))) {
          return img;
        }
        // Otherwise, convert to relative path (fallback for backward compatibility)
        return getRelativeImagePath(img);
      })
      .filter(img => img && img.trim() !== ''); // Filter out empty strings
  };
  
  const [relativeImages, setRelativeImages] = useState<string[]>(initializeImages);
  
  useEffect(() => {
    console.log('[HorizontalImageCarousel] Received images:', images);
    console.log('[HorizontalImageCarousel] Current location:', typeof window !== 'undefined' ? window.location.href : 'SSR');
    
    // Check if images are already relative paths (pre-converted during SSR)
    // If they start with ./ or ../, use them as-is
    // Otherwise, convert them to relative paths
    const converted = images
      .map(img => {
        // If already relative, use as-is
        if (img && (img.startsWith('./') || img.startsWith('../'))) {
          console.log('[HorizontalImageCarousel] Image already relative:', img);
          return img;
        }
        // Otherwise, convert to relative path
        const convertedPath = getRelativeImagePath(img);
        console.log('[HorizontalImageCarousel] Converted image path:', img, '->', convertedPath);
        return convertedPath;
      })
      .filter(img => img && img.trim() !== ''); // Filter out empty strings
    
    console.log('[HorizontalImageCarousel] Final converted images:', converted);
    setRelativeImages(converted);
  }, [images]);

  // Reset activeIndex when images array changes (only if needed)
  useEffect(() => {
    if (relativeImages.length > 0 && activeIndex >= relativeImages.length) {
      setActiveIndex(0);
    }
  }, [relativeImages.length, activeIndex]);

  // Auto-scroll timer effect
  useEffect(() => {
    // Don't do anything if no images
    if (relativeImages.length === 0) {
      return;
    }

    // Clear any existing timer first
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Only start timer if not paused
    if (!isPaused) {
      // Start the timer immediately
      const timerId = setInterval(() => {
        setActiveIndex((prev) => {
          return (prev + 1) % relativeImages.length;
        });
      }, interval);
      
      timerRef.current = timerId;
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [relativeImages.length, interval, isPaused]);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % relativeImages.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + relativeImages.length) % relativeImages.length);
  };

  // Get visible images: 2 before, active, 2 after (total 5 images)
  const getVisibleImages = () => {
    // Return empty array if no images
    if (relativeImages.length === 0) {
      return [];
    }
    
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + relativeImages.length) % relativeImages.length;
      const src = relativeImages[index];
      // Only add if src is valid (not empty)
      if (src && src.trim() !== '') {
      visible.push({
        index,
          src,
        distance: Math.abs(i),
        position: i // Position offset for unique key
      });
      }
    }
    return visible;
  };

  const visibleImages = getVisibleImages();
  
  // Debug: Log visible images
  useEffect(() => {
    console.log('[HorizontalImageCarousel] Visible images:', visibleImages);
    console.log('[HorizontalImageCarousel] Active index:', activeIndex);
    console.log('[HorizontalImageCarousel] Total images:', relativeImages.length);
  }, [visibleImages, activeIndex, relativeImages.length]);


  // Get size classes based on distance from center (square containers)
  const getSizeClasses = (distance: number) => {
    if (distance === 0) {
      // Active image - largest (center) - square
      return {
        width: 'w-64 md:w-80 lg:w-96',
        height: 'h-64 md:h-80 lg:h-96',
        scale: 'scale-100',
        opacity: 'opacity-100',
        zIndex: 'z-20'
      };
    } else if (distance === 1) {
      // First image on left/right - smaller (same on both sides) - square
      return {
        width: 'w-48 md:w-56 lg:w-64',
        height: 'h-48 md:h-56 lg:h-64',
        scale: 'scale-85',
        opacity: 'opacity-75',
        zIndex: 'z-10'
      };
    } else {
      // Second image on left/right - even smaller (same on both sides) - square
      return {
        width: 'w-36 md:w-40 lg:w-48',
        height: 'h-36 md:h-40 lg:h-48',
        scale: 'scale-70',
        opacity: 'opacity-55',
        zIndex: 'z-5'
      };
    }
  };

  return (
    <div 
      className="relative w-full pt-4 pb-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Stable Container - No Scrolling */}
      <div className="relative flex items-center justify-center gap-2 md:gap-3">
        {/* Navigation Buttons Overlay */}
        <div className="absolute inset-0 pointer-events-none z-50">
          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-auto z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
            type="button"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Next image"
            type="button"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {visibleImages.map((item, mapIndex) => {
          const isActive = item.distance === 0;
          const sizeClasses = getSizeClasses(item.distance);
          
          // Skip rendering if src is empty or invalid
          if (!item.src || item.src.trim() === '') {
            console.warn('[HorizontalImageCarousel] Skipping empty image src at index:', item.index);
            return null;
          }
          
          console.log('[HorizontalImageCarousel] Rendering image:', { 
            index: item.index, 
            src: item.src, 
            isActive, 
            distance: item.distance 
          });
          
          return (
            <div
              key={`${item.index}-${item.position}-${mapIndex}`}
              className={`relative flex-shrink-0 transition-all duration-500 ${sizeClasses.width} ${sizeClasses.height} ${sizeClasses.scale} ${sizeClasses.opacity} ${sizeClasses.zIndex}`}
              onClick={() => {
                setActiveIndex(item.index);
              }}
            >
              <div className={`relative w-full h-full rounded-2xl overflow-hidden border-2 transition-all duration-500 cursor-pointer hover:scale-105 ${
                isActive 
                  ? 'border-orange-500/70 shadow-2xl animate-pulse-slow' 
                  : 'border-white/5 hover:border-white/20 shadow-md'
              }`}>
                <img
                  src={encodeURI(item.src)}
                  alt={`Template ${item.index + 1}`}
                  className="object-contain w-full h-full"
                  loading={isActive ? "eager" : "lazy"}
                  onError={(e) => {
                    console.error('[HorizontalImageCarousel] Image failed to load:', item.src);
                    console.error('[HorizontalImageCarousel] Error event:', e);
                    console.error('[HorizontalImageCarousel] Error type:', e.type);
                    // Fallback: hide broken images
                    const target = e.target as HTMLImageElement;
                    if (target) {
                      console.error('[HorizontalImageCarousel] Image element:', target);
                      console.error('[HorizontalImageCarousel] Image src attribute:', target.src);
                      console.error('[HorizontalImageCarousel] Image currentSrc:', target.currentSrc);
                      console.error('[HorizontalImageCarousel] Image complete:', target.complete);
                      console.error('[HorizontalImageCarousel] Image naturalWidth:', target.naturalWidth);
                      console.error('[HorizontalImageCarousel] Image naturalHeight:', target.naturalHeight);
                      target.style.display = 'none';
                    }
                  }}
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.log('[HorizontalImageCarousel] Image loaded successfully:', item.src);
                    console.log('[HorizontalImageCarousel] Loaded image src:', target.src);
                    console.log('[HorizontalImageCarousel] Loaded image currentSrc:', target.currentSrc);
                    console.log('[HorizontalImageCarousel] Loaded image dimensions:', {
                      naturalWidth: target.naturalWidth,
                      naturalHeight: target.naturalHeight
                    });
                  }}
                />
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {relativeImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-orange-500"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Download Template Button */}
      <div className="mt-24 sm:mt-28 md:mt-32 flex justify-center pb-4">
        <Link
          href="/download"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Template
        </Link>
      </div>
    </div>
  );
}

