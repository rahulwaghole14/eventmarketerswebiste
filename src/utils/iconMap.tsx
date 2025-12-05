import { 
  FaRocket, FaMobileAlt, FaPalette, FaBolt, FaStar, FaHome, 
  FaEnvelope, FaPhone, FaCheckCircle, FaTimesCircle, FaChartLine,
  FaLock, FaShieldAlt, FaBriefcase, FaGift, FaChartBar, FaHeart,
  FaLightbulb, FaTrophy, FaFire, FaSparkles, FaDumbbell, FaCamera,
  FaUtensils, FaMusic, FaFilm, FaGamepad, FaBuilding, FaStore,
  FaHospital, FaDumbbell as FaFitness, FaHeart as FaBeauty, FaCar,
  FaCalendarAlt, FaUsers, FaComments, FaDownload, FaPlay,
  FaShoppingBag, FaCoffee, FaBirthdayCake, FaGraduationCap,
  FaNewspaper, FaHandshake, FaUserTie, FaUser, FaSmile
} from 'react-icons/fa';
import { HiSparkles, HiLightningBolt, HiTemplate, HiDeviceMobile } from 'react-icons/hi';
import { MdDesignServices, MdSpeed, MdPhoneAndroid, MdEmail, MdPhone } from 'react-icons/md';
import { BsStarFill, BsLightningChargeFill } from 'react-icons/bs';

// Icon mapping for common emojis
export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  '🚀': FaRocket,
  '📱': FaMobileAlt,
  '🎨': FaPalette,
  '⚡': FaBolt,
  '⭐': BsStarFill,
  '🏠': FaHome,
  '📧': MdEmail,
  '📞': FaPhone,
  '✅': FaCheckCircle,
  '❌': FaTimesCircle,
  '💡': FaLightbulb,
  '🎉': FaTrophy,
  '🔥': FaFire,
  '✨': HiSparkles,
  '💪': FaDumbbell,
  '📸': FaCamera,
  '🍰': FaBirthdayCake,
  '💼': FaBriefcase,
  '📊': FaChartBar,
  '📈': FaChartLine,
  '🔒': FaLock,
  '🛡️': FaShieldAlt,
  '🎁': FaGift,
  '💬': FaComments,
  '🎯': FaTrophy,
  '🎬': FaFilm,
  '🎤': FaMusic,
  '🎧': FaMusic,
  '🎮': FaGamepad,
  '🏛️': FaBuilding,
  '🏥': FaHospital,
  '💒': FaHeart,
  '👨‍💼': FaUserTie,
  '👩‍🎨': FaUser,
  '💪': FaDumbbell,
  '📱': HiDeviceMobile,
  '⚡': HiLightningBolt,
  '🎨': MdDesignServices,
  '📱': MdPhoneAndroid,
};

// Helper function to get icon component
export function getIcon(emoji: string, className?: string) {
  const IconComponent = iconMap[emoji];
  if (!IconComponent) {
    // Return a default icon if emoji not found
    return <span className={className}>{emoji}</span>;
  }
  return <IconComponent className={className} />;
}

// Helper function to replace emoji string with icon
export function replaceEmojiWithIcon(emoji: string, className?: string) {
  return getIcon(emoji, className);
}

