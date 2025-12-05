"use client";
import { useEffect, useRef } from "react";
import { BsStarFill } from "react-icons/bs";
import { FaUtensils, FaHeart, FaDumbbell, FaShoppingBag, FaHospital, FaCar, FaTrophy, FaSprayCan } from "react-icons/fa";

export default function Testimonial() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const testimonials = [
    {
      text: "MarketBrand transformed my restaurant marketing! Professional promotional videos and posters in minutes. Sales increased by 40% in just 2 months! Customer footfall doubled and social media engagement tripled!",
      author: "Arjun Patel",
      location: "Pune",
      role: "Restaurant Owner",
      avatar: "🍽️",
      rating: 5,
      business: "Spice Garden Restaurant"
    },
    {
      text: "As a wedding planner, I needed professional promotional materials. MarketBrand's wedding vendor templates are perfect! Client bookings increased by 65% and my portfolio looks incredibly professional now!",
      author: "Sneha Sharma",
      location: "Mumbai", 
      role: "Wedding Planner",
      avatar: "wedding",
      rating: 5,
      business: "Dream Wedding Planners"
    },
    {
      text: "My fitness studio's marketing looks so professional now! Downloaded promotional videos and posters in under 2 minutes. No design skills needed! New member signups increased by 80% and my gym looks like a premium brand!",
      author: "Rajesh Kumar",
      location: "Delhi",
      role: "Gym Owner",
      avatar: "user1",
      rating: 5,
      business: "FitLife Gym"
    },
    {
      text: "MarketBrand saved me thousands on designers! Ready-made beauty salon promotional materials. My salon bookings increased by 60%!",
      author: "Priya Singh",
      location: "Bangalore",
      role: "Salon Owner",
      avatar: "beauty",
      rating: 5,
      business: "Glamour Beauty Salon"
    },
    {
      text: "Perfect for my retail store! Professional promotional posters and videos for all seasons. Download and use instantly - no waiting!",
      author: "Vikram Mehta",
      location: "Chennai",
      role: "Retail Store Owner",
      avatar: "retail",
      rating: 5,
      business: "Style Mart Fashion"
    },
    {
      text: "MarketBrand's healthcare templates are exactly what I needed! Professional clinic promotional materials that build trust with patients.",
      author: "Dr. Anjali Reddy",
      location: "Hyderabad",
      role: "Clinic Owner",
      avatar: "healthcare",
      rating: 5,
      business: "Wellness Care Clinic"
    },
    {
      text: "My automotive workshop's marketing looks amazing! Professional service promotional videos and posters. Customers love the quality!",
      author: "Suresh Agarwal",
      location: "Jaipur",
      role: "Auto Workshop Owner",
      avatar: "automotive",
      rating: 5,
      business: "AutoCare Services"
    },
    {
      text: "MarketBrand is a game-changer! Professional festival promotional materials for my event business. Downloads in seconds, looks like million bucks!",
      author: "Kavita Joshi",
      location: "Ahmedabad",
      role: "Event Manager",
      avatar: "user2",
      rating: 5,
      business: "Celebration Events"
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1.2; // pixels per frame (faster scrolling)
    const cardWidth = 320; // approximate card width including gap (300px card + 24px gap)
    const totalWidth = cardWidth * testimonials.length;
    let isPaused = false;
    let animationId: number;

    const handleMouseEnter = () => { 
      isPaused = true; 
    };
    const handleMouseLeave = () => { 
      isPaused = false; 
    };
    
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= totalWidth) {
          scrollPosition = 0;
        }
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden w-full">
      <div 
        ref={scrollContainerRef}
        className="flex gap-6"
        style={{ width: 'max-content', willChange: 'transform' }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="card-premium group flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px]"
            style={{ animationDelay: `${(index % testimonials.length) * 0.1}s` }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-xl shadow-lg">
                {testimonial.avatar === "restaurant" && <FaUtensils className="text-white" />}
                {testimonial.avatar === "wedding" && <FaHeart className="text-white" />}
                {testimonial.avatar === "user1" && <FaDumbbell className="text-white" />}
                {testimonial.avatar === "user2" && <FaTrophy className="text-white" />}
                {testimonial.avatar === "beauty" && <FaSprayCan className="text-white" />}
                {testimonial.avatar === "retail" && <FaShoppingBag className="text-white" />}
                {testimonial.avatar === "healthcare" && <FaHospital className="text-white" />}
                {testimonial.avatar === "automotive" && <FaCar className="text-white" />}
              </div>
              <div className="flex-1">
                <div className="font-bold text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
                <div className="text-xs text-indigo-400 font-medium">{testimonial.business}</div>
              </div>
            </div>
            
            <blockquote className="text-gray-300 leading-relaxed mb-4">
              "{testimonial.text}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <BsStarFill key={i} className="text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-400">
                {testimonial.location}
              </div>
            </div>
            
            {/* Results Badge */}
            <div className="mt-3 pt-3 border-t border-gray-700">
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-3 py-1">
                  <span className="text-green-300 text-xs font-semibold">✓ Verified Results</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent pointer-events-none z-10"></div>
    </div>
  );
}
