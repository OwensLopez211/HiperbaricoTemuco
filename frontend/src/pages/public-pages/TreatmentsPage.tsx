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
        className="relative min-h-screen max-h-screen w-full max-w-full flex items-center justify-center overflow-hidden"
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
            className="text-center space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 mt-12 sm:mt-16 md:mt-20"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="group"
              >
                <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 h-52 sm:h-56 md:h-60 flex flex-col justify-between hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">Oxigenoterapia Hiperbárica</h3>
                    <p className="text-gray-200 leading-relaxed text-xs sm:text-sm md:text-base">
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
                <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 h-52 sm:h-56 md:h-60 flex flex-col justify-between hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-pink-400 to-pink-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">Estética</h3>
                    <p className="text-gray-200 leading-relaxed text-xs sm:text-sm md:text-base">
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
                <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 h-52 sm:h-56 md:h-60 flex flex-col justify-between hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-green-400 to-green-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.75 21.5c0 .414.336.75.75.75h13c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-13c-.414 0-.75.336-.75.75zM5.5 18.5c0 .414.336.75.75.75h12c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-12c-.414 0-.75.336-.75.75z" />
                      </svg>
                    </div>
                    <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">Terapia de Rehabilitación</h3>
                    <p className="text-gray-200 leading-relaxed text-xs sm:text-sm md:text-base">
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