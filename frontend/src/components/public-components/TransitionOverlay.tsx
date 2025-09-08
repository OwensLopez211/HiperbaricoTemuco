import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TransitionOverlay = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isTransitioning && (
        <>
          {/* Main overlay */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-slate-800 via-slate-900 to-black"
          />
          
          {/* Secondary overlay for smooth blend */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ 
              duration: 0.4, 
              delay: 0.05,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="fixed inset-0 z-49 bg-gradient-to-br from-slate-700/50 via-slate-800/50 to-black/50"
          />

          {/* Medical logo animation during transition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ 
              duration: 0.3,
              delay: 0.1,
              ease: "easeOut"
            }}
            className="fixed inset-0 z-51 flex items-center justify-center"
          >
            <div className="text-white text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.2, delay: 0.15 }}
                className="w-12 h-0.5 bg-white/60 rounded mx-auto"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TransitionOverlay;