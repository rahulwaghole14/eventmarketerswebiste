"use client";
import { useState } from "react";
import HorizontalImageCarousel from "./HorizontalImageCarousel";

interface TabbedImageCarouselProps {
  tabs: {
    name: string;
    images: string[];
  }[];
  interval?: number;
}

export default function TabbedImageCarousel({ 
  tabs, 
  interval = 2000 
}: TabbedImageCarouselProps) {
  const [activeTab, setActiveTab] = useState(0);

  const activeImages = tabs[activeTab]?.images || [];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
              activeTab === index
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-800/70 hover:text-white border border-white/10"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <HorizontalImageCarousel 
        images={activeImages}
        interval={interval}
      />
    </div>
  );
}

