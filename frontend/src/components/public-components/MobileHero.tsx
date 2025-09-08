import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MobileHero = () => {
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate('/contacto');
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden px-4"
      style={{
        backgroundImage: 'url("/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Centro Hiperbárico Temuco
          </h1>
          
          <p className="text-lg text-gray-200 leading-relaxed">
            Tecnología avanzada para tu bienestar y salud integral
          </p>

          <motion.button 
            onClick={handleConsultationClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full bg-white text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-100 transition-all font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            aria-label="Reservar cita médica"
          >
            Reservar Cita Médica
          </motion.button>
        </motion.div>
      </div>

    </section>
  );
};

export default MobileHero;