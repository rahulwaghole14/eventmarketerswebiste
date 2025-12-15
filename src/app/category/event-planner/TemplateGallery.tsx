"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const templateData = {
  Mandap: {
    title: "Mandap Templates",
    images: [
      "Event Planner/Mandap/1.png",
      "Event Planner/Mandap/2.png",
      "Event Planner/Mandap/3.png",
      "Event Planner/Mandap/4.png",
    ],
    description: "Beautiful mandap templates to showcase your mandap designs, display different styles, and attract more wedding bookings.",
  },
  Sound: {
    title: "Sound Templates",
    images: [
      "Event Planner/Sound/1.png",
      "Event Planner/Sound/2.png",
      "Event Planner/Sound/3.png",
      "Event Planner/Sound/4.png",
    ],
    description: "Professional sound system templates to promote your audio equipment, highlight your services, and book more events and parties.",
  },
  Generator: {
    title: "Generator Templates",
    images: [
      "Event Planner/Generator/1.png",
      "Event Planner/Generator/2.png",
      "Event Planner/Generator/3.png",
      "Event Planner/Generator/4.png",
    ],
    description: "Marketing templates for generator rental services. Promote your power solutions, highlight capacity options, and book more generator rentals.",
  },
  Decorator: {
    title: "Decorator Templates",
    images: [
      "Event Planner/Decorator/1.png",
      "Event Planner/Decorator/2.png",
      "Event Planner/Decorator/3.png",
      "Event Planner/Decorator/4.png",
    ],
    description: "Professional decorator templates to showcase your decoration services, display your portfolio, and attract more clients for weddings and events.",
  },
};

const tabs = ["Mandap", "Sound", "Generator", "Decorator"];

export default function TemplateGallery() {
  const [activeTab, setActiveTab] = useState("Mandap");
  const currentData = templateData[activeTab as keyof typeof templateData];

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
            Marketing Template Gallery
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
            Professional templates designed specifically for your business
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Template Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentData.images.map((imagePath, index) => (
            <div key={index} className="card-premium group overflow-hidden">
              {/* Image */}
              <div className="relative w-full aspect-square rounded-xl mb-3 overflow-hidden bg-gray-800">
                <Image
                  src={`/${imagePath}`}
                  alt={`${currentData.title} ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300 text-center">
                {currentData.title} {index + 1}
              </h3>

              {/* Download Button */}
              <Link
                href="/download"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Template
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

