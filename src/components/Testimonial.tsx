export default function Testimonial() {
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
      avatar: "💒",
      rating: 5,
      business: "Dream Wedding Planners"
    },
    {
      text: "My fitness studio's marketing looks so professional now! Downloaded promotional videos and posters in under 2 minutes. No design skills needed! New member signups increased by 80% and my gym looks like a premium brand!",
      author: "Rajesh Kumar",
      location: "Delhi",
      role: "Gym Owner",
      avatar: "💪",
      rating: 5,
      business: "FitLife Gym"
    },
    {
      text: "MarketBrand saved me thousands on designers! Ready-made beauty salon promotional materials. My salon bookings increased by 60%!",
      author: "Priya Singh",
      location: "Bangalore",
      role: "Salon Owner",
      avatar: "💄",
      rating: 5,
      business: "Glamour Beauty Salon"
    },
    {
      text: "Perfect for my retail store! Professional promotional posters and videos for all seasons. Download and use instantly - no waiting!",
      author: "Vikram Mehta",
      location: "Chennai",
      role: "Retail Store Owner",
      avatar: "🛍️",
      rating: 5,
      business: "Style Mart Fashion"
    },
    {
      text: "MarketBrand's healthcare templates are exactly what I needed! Professional clinic promotional materials that build trust with patients.",
      author: "Dr. Anjali Reddy",
      location: "Hyderabad",
      role: "Clinic Owner",
      avatar: "🏥",
      rating: 5,
      business: "Wellness Care Clinic"
    },
    {
      text: "My automotive workshop's marketing looks amazing! Professional service promotional videos and posters. Customers love the quality!",
      author: "Suresh Agarwal",
      location: "Jaipur",
      role: "Auto Workshop Owner",
      avatar: "🚗",
      rating: 5,
      business: "AutoCare Services"
    },
    {
      text: "MarketBrand is a game-changer! Professional festival promotional materials for my event business. Downloads in seconds, looks like million bucks!",
      author: "Kavita Joshi",
      location: "Ahmedabad",
      role: "Event Manager",
      avatar: "🎉",
      rating: 5,
      business: "Celebration Events"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index}
          className="card-premium group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-xl shadow-lg">
              {testimonial.avatar}
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
                <span key={i} className="text-yellow-400">⭐</span>
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
  );
}
