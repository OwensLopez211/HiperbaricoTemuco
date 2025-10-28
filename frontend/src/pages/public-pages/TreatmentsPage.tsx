import { motion } from 'framer-motion';
import Navbar from '../../components/public-components/Navbar';
import PageTransition from '../../components/public-components/PageTransition';
import { useBackgroundCarousel } from '../../hooks/useBackgroundCarousel';

const TreatmentsPage = () => {
  const { currentImage, opacity } = useBackgroundCarousel();

  return (
    <PageTransition>
      <Navbar />
      <section
        className="relative min-h-screen max-h-screen w-full max-w-full flex items-center justify-center overflow-hidden pt-20 md:pt-0"
        aria-label="Sección de tratamientos"
      >
        <div
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url("${currentImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: opacity
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4 sm:px-6 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20"
          >
            {/* Header Section */}
            <div className="space-y-1 sm:space-y-2 md:space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
              >
                Nuestros Servicios
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-2"
              >
                Ofrecemos la más avanzada tecnología médica para tu bienestar y recuperación
              </motion.p>
            </div>

            {/* Treatment Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-2 sm:px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="group"
              >
                <div className="flex flex-col items-center text-center backdrop-blur-sm bg-white/5 rounded-lg p-2 sm:p-3 hover:bg-white/10 transition-all duration-300 min-h-[180px] sm:h-44 md:h-48 lg:h-52">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-400/30 mb-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex flex-col w-full">
                    <h3 className="text-white font-semibold text-[9px] sm:text-xs md:text-sm leading-tight mb-1.5 min-h-[28px] sm:h-9 md:h-10 flex items-center justify-center">
                      Oxigenoterapia Hiperbárica
                    </h3>
                    <p className="text-gray-300 text-[8px] sm:text-xs leading-snug px-1">
                      Acelera la cicatrización, mejora la circulación y potencia la recuperación celular
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="group"
              >
                <div className="flex flex-col items-center text-center backdrop-blur-sm bg-white/5 rounded-lg p-2 sm:p-3 hover:bg-white/10 transition-all duration-300 min-h-[180px] sm:h-44 md:h-48 lg:h-52">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-pink-400/30 mb-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col w-full">
                    <h3 className="text-white font-semibold text-[9px] sm:text-xs md:text-sm leading-tight mb-1.5 min-h-[28px] sm:h-9 md:h-10 flex items-center justify-center">
                      Estética
                    </h3>
                    <p className="text-gray-300 text-[8px] sm:text-xs leading-snug px-1">
                      Tratamientos no invasivos para rejuvenecimiento y belleza natural
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="group"
              >
                <div className="flex flex-col items-center text-center backdrop-blur-sm bg-white/5 rounded-lg p-2 sm:p-3 hover:bg-white/10 transition-all duration-300 min-h-[180px] sm:h-44 md:h-48 lg:h-52">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-green-400/30 mb-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <div className="flex flex-col w-full">
                    <h3 className="text-white font-semibold text-[9px] sm:text-xs md:text-sm leading-tight mb-1.5 min-h-[28px] sm:h-9 md:h-10 flex items-center justify-center">
                      Terapia de Rehabilitación
                    </h3>
                    <p className="text-gray-300 text-[8px] sm:text-xs leading-snug px-1">
                      Recuperación integral para lesiones deportivas y post-quirúrgicas
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-3 sm:pt-4 md:pt-6"
            >
              <a
                href="/contacto"
                className="inline-flex items-center px-4 sm:px-6 md:px-10 py-2 sm:py-3 bg-white text-gray-900 text-xs sm:text-sm md:text-base font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-white/50"
              >
                <span>Consultar Tratamientos</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default TreatmentsPage;