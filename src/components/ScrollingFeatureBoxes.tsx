import { FaImages, FaShareAlt, FaBirthdayCake } from "react-icons/fa";
import { BsPlayCircle, BsTranslate } from "react-icons/bs";

interface FeatureBox {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

interface ScrollingFeatureBoxesProps {
  leftFeatures: FeatureBox[];
  rightFeatures: FeatureBox[];
}

export default function ScrollingFeatureBoxes({ leftFeatures, rightFeatures }: ScrollingFeatureBoxesProps) {
  return (
    <>
      {/* Left Column - Features */}
      {leftFeatures.length > 0 && (
        <div className="space-y-4 sm:space-y-6">
          {leftFeatures.map((feature, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-xl sm:rounded-2xl`}></div>
              {/* Color Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300 rounded-xl sm:rounded-2xl`}></div>
              <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${feature.gradient} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Right Column - Features */}
      {rightFeatures.length > 0 && (
        <div className="space-y-4 sm:space-y-6">
          {rightFeatures.map((feature, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-xl sm:rounded-2xl`}></div>
              {/* Color Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300 rounded-xl sm:rounded-2xl`}></div>
              <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${feature.gradient} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

