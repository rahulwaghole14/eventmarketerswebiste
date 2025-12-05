import React from 'react';
import { 
  FaRocket, FaMobileAlt, FaPalette, FaBolt, FaStar, FaHome, 
  FaEnvelope, FaPhone, FaCheckCircle, FaTimesCircle, FaChartLine,
  FaLock, FaShieldAlt, FaBriefcase, FaGift, FaChartBar, FaHeart,
  FaLightbulb, FaTrophy, FaFire, FaSparkles, FaDumbbell, FaCamera,
  FaUtensils, FaMusic, FaFilm, FaGamepad, FaBuilding, FaStore,
  FaHospital, FaCalendarAlt, FaUsers, FaComments, FaDownload, FaPlay,
  FaShoppingBag, FaCoffee, FaBirthdayCake, FaGraduationCap,
  FaNewspaper, FaHandshake, FaUserTie, FaUser, FaSmile
} from 'react-icons/fa';
import { HiSparkles, HiLightningBolt, HiTemplate, HiDeviceMobile } from 'react-icons/hi';
import { MdDesignServices, MdSpeed, MdPhoneAndroid, MdEmail, MdPhone } from 'react-icons/md';
import { BsStarFill, BsLightningChargeFill } from 'react-icons/bs';

interface IconReplacerProps {
  emoji: string;
  className?: string;
  size?: number | string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
};

export default function IconReplacer({ emoji, className = '', size }: IconReplacerProps) {
  const IconComponent = iconMap[emoji];
  
  if (!IconComponent) {
    return <span className={className}>{emoji}</span>;
  }
  
  const style = size ? { fontSize: typeof size === 'number' ? `${size}px` : size } : {};
  
  return <IconComponent className={className} style={style} />;
}

