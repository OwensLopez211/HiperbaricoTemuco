import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    y: 40,
    filter: 'blur(8px)',
    transformOrigin: 'center center'
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transformOrigin: 'center center'
  },
  out: {
    opacity: 0,
    scale: 1.04,
    y: -40,
    filter: 'blur(8px)',
    transformOrigin: 'center center'
  }
};

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.7
};

const containerVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  out: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ 
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}
    >
      <motion.div
        variants={containerVariants}
        style={{ 
          width: '100%',
          height: '100%'
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PageTransition;