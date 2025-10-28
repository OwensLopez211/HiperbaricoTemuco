import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BeakerIcon,
  HeartIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { useBackgroundCarousel } from '../../hooks/useBackgroundCarousel';

/**
 * Hero Component for Hyperbaric Oxygen Therapy Center
 *
 * Features:
 * - Video background support with image fallback
 * - Professional medical/wellness design
 * - Client-specific slogans and CTAs
 * - Fully responsive mobile-first design
 * - Optimized animations and accessibility
 */

interface HeroProps {
  videoSrc?: string; // Optional: Path to background video
  enableVideo?: boolean; // Toggle video background
}

const Hero: React.FC<HeroProps> = ({
  videoSrc,
  enableVideo = false
}) => {
  const navigate = useNavigate();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const { currentImage, opacity } = useBackgroundCarousel();

  // Handle video loading state
  useEffect(() => {
    if (enableVideo && videoSrc) {
      const video = document.createElement('video');
      video.src = videoSrc;
      video.onloadeddata = () => {
        setIsVideoLoaded(true);
        setShowVideo(true);
      };
    }
  }, [enableVideo, videoSrc]);

  // Navigation handlers
  const handleBookingClick = () => {
    navigate('/contacto');
  };

  const handleBenefitsClick = () => {
    navigate('/tratamientos');
  };

  return (
    <section
      className="relative min-h-screen max-h-screen w-full max-w-full flex items-center justify-center overflow-hidden pt-20 md:pt-0"
      aria-label="Hero section - Oxigenoterapia hiperbárica"
    >
      {/* Background Video (when enabled) */}
      {enableVideo && showVideo && isVideoLoaded && videoSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Background Image (fallback or default) */}
      {(!enableVideo || !showVideo) && (
        <div
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url("${currentImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: opacity
          }}
          aria-hidden="true"
        />
      )}

      {/* Professional gradient overlay for better readability */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-green-900/40"
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Main Content Column */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left">

              {/* Hero Headline - Client's Primary Slogan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4 lg:mb-6">
                  Respira salud.{' '}
                  <span className="text-green-400">
                    Renueva tu cuerpo
                  </span>
                  {' '}con oxigenoterapia hiperbárica.
                </h1>

                {/* Hero Subheadline - Client's Secondary Slogan */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  Mejora tu energía, acelera tu recuperación y potencia tu bienestar de forma natural.
                </p>
              </motion.div>

              {/* Call-to-Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                {/* Primary CTA - Agenda tu sesión */}
                <motion.button
                  onClick={handleBookingClick}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg transition-all duration-300 text-xs sm:text-sm md:text-base font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-400/50 focus:ring-offset-2 focus:ring-offset-transparent whitespace-nowrap"
                  aria-label="Agenda tu sesión de oxigenoterapia"
                >
                  Agenda tu sesión
                </motion.button>

                {/* Secondary CTA - Conoce los beneficios */}
                <motion.button
                  onClick={handleBenefitsClick}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-xs sm:text-sm md:text-base font-semibold focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent whitespace-nowrap"
                  aria-label="Conoce los beneficios de la oxigenoterapia"
                >
                  Conoce los beneficios
                </motion.button>
              </motion.div>

              {/* Features Grid - Oxigenoterapia themed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-12"
              >
                {/* Feature 1: Oxigenoterapia Avanzada */}
                <div className="flex flex-col items-center text-center backdrop-blur-sm bg-white/5 rounded-lg p-2 sm:p-3 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-green-400/30 mb-2">
                    <BeakerIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-[10px] sm:text-xs md:text-sm leading-tight mb-1">
                      Oxigenoterapia Avanzada
                    </h3>
                    <p className="text-gray-300 text-[9px] sm:text-xs leading-tight">
                      Tecnología de punta
                    </p>
                  </div>
                </div>

                {/* Feature 2: Recuperación Natural */}
                <div className="flex flex-col items-center text-center backdrop-blur-sm bg-white/5 rounded-lg p-2 sm:p-3 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-emerald-400/30 mb-2">
                    <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-[10px] sm:text-xs md:text-sm leading-tight mb-1">
                      Recuperación Natural
                    </h3>
                    <p className="text-gray-300 text-[9px] sm:text-xs leading-tight">
                      Proceso sin invasión
                    </p>
                  </div>
                </div>

                {/* Feature 3: Resultados Comprobados */}
                <div className="flex flex-col items-center text-center backdrop-blur-sm bg-white/5 rounded-lg p-2 sm:p-3 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-green-400/30 mb-2">
                    <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-[10px] sm:text-xs md:text-sm leading-tight mb-1">
                      Resultados Comprobados
                    </h3>
                    <p className="text-gray-300 text-[9px] sm:text-xs leading-tight">
                      Evidencia científica
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Info Card - Desktop Only */}
            <div className="hidden lg:block lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300"
              >
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-green-300">
                  ¿Por qué elegirnos?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400 text-2xl leading-none" aria-hidden="true">✓</span>
                    <span className="text-base lg:text-lg leading-relaxed">
                      Centro especializado en oxigenoterapia hiperbárica
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400 text-2xl leading-none" aria-hidden="true">✓</span>
                    <span className="text-base lg:text-lg leading-relaxed">
                      Equipos certificados y tecnología moderna
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400 text-2xl leading-none" aria-hidden="true">✓</span>
                    <span className="text-base lg:text-lg leading-relaxed">
                      Atención personalizada por profesionales capacitados
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400 text-2xl leading-none" aria-hidden="true">✓</span>
                    <span className="text-base lg:text-lg leading-relaxed">
                      Enfoque integral en tu salud y bienestar
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;