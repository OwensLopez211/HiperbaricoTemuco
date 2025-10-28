import { motion } from 'framer-motion';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Navbar from '../../components/public-components/Navbar';
import PageTransition from '../../components/public-components/PageTransition';
import { useBackgroundCarousel } from '../../hooks/useBackgroundCarousel';

const ContactPage = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const { currentImage, opacity } = useBackgroundCarousel();

  return (
    <>
      <PageTransition>
        <Navbar />
        <section
          className="relative min-h-screen max-h-screen w-full max-w-full flex items-center justify-center overflow-hidden pt-20 md:pt-0"
          aria-label="Sección de contacto"
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
                  Contáctanos
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-2"
                >
                  Estamos aquí para ayudarte. Agenda tu cita o consulta cualquier duda
                </motion.p>
              </div>

              {/* Content Cards */}
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex flex-col w-full">
                      <h3 className="text-white font-semibold text-[9px] sm:text-xs md:text-sm leading-tight mb-1.5 min-h-[28px] sm:h-9 md:h-10 flex items-center justify-center">
                        Información de Contacto
                      </h3>
                      <div className="text-gray-300 text-[8px] sm:text-xs leading-snug px-1">
                        <p>Av. Pablo Neruda 01865 local 3 Temuco</p>
                        <p>+56 9 7743 9465</p>
                        <a
                          href="mailto:hiperbaricotemuco@gmail.com"
                          className="break-all hover:text-blue-300 transition-colors underline"
                        >
                          hiperbaricotemuco@gmail.com
                        </a>
                      </div>
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-green-400/30 mb-2">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex flex-col w-full">
                      <h3 className="text-white font-semibold text-[9px] sm:text-xs md:text-sm leading-tight mb-1.5 min-h-[28px] sm:h-9 md:h-10 flex items-center justify-center">
                        Horarios de Atención
                      </h3>
                      <p className="text-gray-300 text-[8px] sm:text-xs leading-snug px-1">
                        Lunes a Viernes: 9:00 - 13:00 / 14:00 - 19:00<br />
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
                  <button
                    onClick={() => setIsMapModalOpen(true)}
                    className="w-full flex flex-col items-center text-center backdrop-blur-sm bg-white/5 rounded-lg p-2 sm:p-3 hover:bg-white/10 transition-all duration-300 min-h-[180px] sm:h-44 md:h-48 lg:h-52 focus:outline-none focus:ring-4 focus:ring-white/50"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-purple-400/30 mb-2">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex flex-col w-full">
                      <h3 className="text-white font-semibold text-[9px] sm:text-xs md:text-sm leading-tight mb-1.5 min-h-[28px] sm:h-9 md:h-10 flex items-center justify-center">
                        Nuestra Ubicación
                      </h3>
                      <p className="text-gray-300 text-[8px] sm:text-xs leading-snug px-1">
                        Haz clic para ver nuestra ubicación en Google Maps
                      </p>
                    </div>
                  </button>
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
                  href="tel:+56977439465"
                  className="inline-flex items-center px-4 sm:px-6 md:px-10 py-2 sm:py-3 bg-white text-gray-900 text-xs sm:text-sm md:text-base font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-white/50"
                >
                  <span>Llamar Ahora</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </PageTransition>

      {/* Map Modal - Using Portal to render outside of normal DOM hierarchy */}
      {isMapModalOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-11/12 max-w-4xl h-5/6 bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setIsMapModalOpen(false)}
              className="absolute top-4 right-4 z-[10000] bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.10909546334!2d-72.63149858792576!3d-38.73825868732168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d411b0ec34a3%3A0xeb6d969f888f3d1e!2sAv.%20Pablo%20Neruda%201865%2C%20local%20%203%2C%20Temuco%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1761496299616!5m2!1ses-419!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Centro Hiperbárico Temuco"
              ></iframe>
            </div>
          </motion.div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ContactPage;
