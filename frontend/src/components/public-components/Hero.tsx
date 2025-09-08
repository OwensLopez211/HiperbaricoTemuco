import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CubeIcon, HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate('/contacto');
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      aria-label="Sección principal"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content Column */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 lg:mb-6">
                  Recupera tu Bienestar
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 lg:mb-8">
                  Tecnología avanzada para tu bienestar. Tratamientos hiperbáricos y estéticos de vanguardia en el corazón de La Araucanía
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <motion.button 
                  onClick={handleConsultationClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-all text-base sm:text-lg font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  aria-label="Reservar cita médica"
                >
                  Reservar Cita Médica
                </motion.button>
                
                <motion.button 
                  onClick={() => navigate('/tratamientos')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-gray-800 transition-all text-base sm:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  aria-label="Ver tratamientos disponibles"
                >
                  Ver Tratamientos
                </motion.button>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-12"
              >
                <div className="flex items-center space-x-3 justify-center lg:justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CubeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-semibold text-sm sm:text-base">Tecnología Moderna</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">Equipos especializados</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 justify-center lg:justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-semibold text-sm sm:text-base">Atención Personal</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">Trato cercano y cuidadoso</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 justify-center lg:justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-semibold text-sm sm:text-base">Compromiso</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">Dedicados a tu bienestar</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Image/Info Column */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-white"
              >
                <h3 className="text-xl lg:text-2xl font-bold mb-4">Nuestro Compromiso</h3>
                <ul className="space-y-2 lg:space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">•</span>
                    <span className="text-sm lg:text-base">Centro nuevo con tecnología actualizada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">•</span>
                    <span className="text-sm lg:text-base">Equipos especializados en tratamientos hiperbáricos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">•</span>
                    <span className="text-sm lg:text-base">Atención personalizada y dedicada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">•</span>
                    <span className="text-sm lg:text-base">Enfoque integral en tu bienestar</span>
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