import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBackgroundCarousel } from '../../hooks/useBackgroundCarousel';

const MobileHero = () => {
  const navigate = useNavigate();
  const { currentImage, opacity } = useBackgroundCarousel();

  const handleConsultationClick = () => {
    navigate('/contacto');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-green-900/40"></div>
      <div className="relative z-10 text-center max-w-sm py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          <h1 className="text-2xl font-bold text-white leading-tight">
            Respira salud.{' '}
            <span className="text-green-400">Renueva tu cuerpo</span>
            {' '}con oxigenoterapia hiperbárica.
          </h1>

          <p className="text-sm text-gray-100 leading-relaxed">
            Mejora tu energía, acelera tu recuperación y potencia tu bienestar de forma natural.
          </p>

          <motion.button
            onClick={handleConsultationClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-all font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-400/50 focus:ring-offset-2"
            aria-label="Agenda tu sesión de oxigenoterapia"
          >
            Agenda tu sesión
          </motion.button>
        </motion.div>
      </div>

    </section>
  );
};

export default MobileHero;