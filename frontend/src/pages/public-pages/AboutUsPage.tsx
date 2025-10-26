import { motion } from 'framer-motion';
import Navbar from '../../components/public-components/Navbar';
import PageTransition from '../../components/public-components/PageTransition';

const AboutUsPage = () => {
  return (
    <PageTransition>
      <Navbar />
      <section
        className="relative min-h-screen max-h-screen w-full max-w-full flex items-center justify-center overflow-hidden"
        aria-label="Sección nosotros"
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url("/nosotros.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
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
                Sobre Nosotros
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-2"
              >
                Pioneros en medicina hiperbárica y estética en La Araucanía
              </motion.p>
            </div>

            {/* Content Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="group"
              >
                <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 h-56 sm:h-60 md:h-64 flex flex-col justify-between hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">Nuestra Misión</h3>
                    <p className="text-gray-200 leading-relaxed text-xs sm:text-sm md:text-base">
                      Brindar atención médica hiperbárica de excelencia, mejorando la calidad de vida con tecnología avanzada y cuidado personalizado.
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
                <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 h-56 sm:h-60 md:h-64 flex flex-col justify-between hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-green-400 to-green-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">Nuestra Visión</h3>
                    <p className="text-gray-200 leading-relaxed text-xs sm:text-sm md:text-base">
                      Consolidarnos como el centro líder en medicina hiperbárica de La Araucanía, expandiendo el acceso a tratamientos innovadores y seguros.
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
                <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 h-56 sm:h-60 md:h-64 flex flex-col justify-between hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">Nuestros Valores</h3>
                    <p className="text-gray-200 leading-relaxed text-xs sm:text-sm md:text-base">
                      Compromiso con la excelencia médica, innovación constante, trato humano y personalizado, y dedicación total al bienestar de nuestros pacientes.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-3 sm:pt-4 md:pt-6"
            >
              
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutUsPage;