import { motion } from 'framer-motion';
import Navbar from '../../components/public-components/Navbar';
import PageTransition from '../../components/public-components/PageTransition';

const AboutUsPage = () => {
  return (
    <PageTransition>
      <Navbar />
      <section
        className="relative min-h-screen max-h-screen w-full max-w-full flex items-center justify-center overflow-hidden pt-20 md:pt-0"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col w-full">
                    <h3 className="text-white font-semibold text-[9px] sm:text-xs md:text-sm leading-tight mb-1.5 min-h-[28px] sm:h-9 md:h-10 flex items-center justify-center">
                      Nuestra Misión
                    </h3>
                    <p className="text-gray-300 text-[8px] sm:text-xs leading-snug px-1">
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
                <div className="flex flex-col items-center text-center backdrop-blur-sm bg-white/5 rounded-lg p-2 sm:p-3 hover:bg-white/10 transition-all duration-300 min-h-[180px] sm:h-44 md:h-48 lg:h-52">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-green-400/30 mb-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div className="flex flex-col w-full">
                    <h3 className="text-white font-semibold text-[9px] sm:text-xs md:text-sm leading-tight mb-1.5 min-h-[28px] sm:h-9 md:h-10 flex items-center justify-center">
                      Nuestra Visión
                    </h3>
                    <p className="text-gray-300 text-[8px] sm:text-xs leading-snug px-1">
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
                <div className="flex flex-col items-center text-center backdrop-blur-sm bg-white/5 rounded-lg p-2 sm:p-3 hover:bg-white/10 transition-all duration-300 min-h-[180px] sm:h-44 md:h-48 lg:h-52">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-purple-400/30 mb-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="flex flex-col w-full">
                    <h3 className="text-white font-semibold text-[9px] sm:text-xs md:text-sm leading-tight mb-1.5 min-h-[28px] sm:h-9 md:h-10 flex items-center justify-center">
                      Nuestros Valores
                    </h3>
                    <p className="text-gray-300 text-[8px] sm:text-xs leading-snug px-1">
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