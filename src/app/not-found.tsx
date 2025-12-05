import Link from "next/link";
import { FaHome, FaMobileAlt, FaBolt, FaPalette, FaComments } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-black gradient-text mb-4">404</h1>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2"><FaHome className="inline" /> Go Home</span>
          </Link>
          <Link
            href="/download"
            className="inline-flex items-center px-8 py-4 border-2 border-white/30 rounded-xl text-white font-bold hover:bg-white/10 transition-all duration-300"
          >
            <span className="flex items-center gap-2"><FaMobileAlt className="inline" /> Download App</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-left">
          <Link href="/features" className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors">
            <div className="text-indigo-400 font-semibold mb-2 flex items-center gap-2"><FaBolt className="inline" /> Features</div>
            <div className="text-gray-400 text-sm">Explore our features</div>
          </Link>
          <Link href="/templates" className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors">
            <div className="text-indigo-400 font-semibold mb-2 flex items-center gap-2"><FaPalette className="inline" /> Templates</div>
            <div className="text-gray-400 text-sm">Browse templates</div>
          </Link>
          <Link href="/help" className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors">
            <div className="text-indigo-400 font-semibold mb-2 flex items-center gap-2"><FaComments className="inline" /> Help</div>
            <div className="text-gray-400 text-sm">Get support</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

