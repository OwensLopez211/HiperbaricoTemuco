import { motion } from 'framer-motion';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import PageTransition from '../../components/public-components/PageTransition';

const ContactPage = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  return (
    <>
      <PageTransition>
        <section 
          className="relative h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url("/hero.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          aria-label="Sección de contacto"
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 px-4 sm:px-6 w-full max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10"
            >
              {/* Header Section */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="group"
                >
                  <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 h-48 sm:h-56 md:h-64 flex flex-col justify-between hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">Información de Contacto</h3>
                      <p className="text-gray-200 leading-relaxed text-xs sm:text-sm md:text-base">
                        Av. Alemania 0281, Temuco<br />
                        +56 45 2 987 654<br />
                        contacto@hiperbaricotemuco.cl
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
                  <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 h-48 sm:h-56 md:h-64 flex flex-col justify-between hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-green-400 to-green-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">Horarios de Atención</h3>
                      <p className="text-gray-200 leading-relaxed text-xs sm:text-sm md:text-base">
                        Lunes a Viernes: 8:00 - 19:00<br />
                        Sábados: 9:00 - 14:00<br />
                        Domingos: Cerrado
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
                    className="w-full bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 h-48 sm:h-56 md:h-64 flex flex-col justify-between hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20 focus:outline-none focus:ring-4 focus:ring-white/50"
                  >
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">Nuestra Ubicación</h3>
                      <p className="text-gray-200 leading-relaxed text-xs sm:text-sm md:text-base">
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
                  href="tel:+56452987654"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.8!2d-72.5938!3d-38.7318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d7e7a4d2c4d7%3A0x4b8e1b6c3d2a9f5e!2sAv.%20Alemania%200281%2C%20Temuco%2C%20La%20Araucan%C3%ADa%2C%20Chile!5e0!3m2!1ses!2scl!4v1640995200000"
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