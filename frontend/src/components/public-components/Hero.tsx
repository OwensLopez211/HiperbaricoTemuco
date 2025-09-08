import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Centro Hiperbárico y Estético Temuco
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Tecnología avanzada para tu bienestar. Tratamientos hiperbáricos y estéticos de vanguardia en el corazón de La Araucanía
          </p>

          <motion.button 
            onClick={handleConsultationClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 bg-white text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all text-lg font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            aria-label="Reservar cita médica"
          >
            Reservar Cita Médica
          </motion.button>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;