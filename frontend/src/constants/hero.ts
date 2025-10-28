/**
 * Hero Section Constants
 * Centralized configuration for Hero component texts and settings
 */

export const HERO_CONTENT = {
  // Primary headline
  mainHeadline: 'Respira salud. Renueva tu cuerpo con oxigenoterapia hiperbárica.',

  // Secondary headline
  subHeadline: 'Mejora tu energía, acelera tu recuperación y potencia tu bienestar de forma natural.',

  // Call to action buttons
  cta: {
    primary: {
      text: 'Agenda tu sesión',
      ariaLabel: 'Agendar sesión de oxigenoterapia hiperbárica',
      link: '/contacto'
    },
    secondary: {
      text: 'Conoce los beneficios',
      ariaLabel: 'Conocer beneficios de la oxigenoterapia hiperbárica',
      link: '/tratamientos'
    }
  },

  // Features highlights
  features: [
    {
      title: 'Recuperación Acelerada',
      description: 'Mejora la cicatrización y regeneración celular',
      icon: 'heart'
    },
    {
      title: 'Más Energía',
      description: 'Incrementa tu vitalidad y rendimiento',
      icon: 'sparkles'
    },
    {
      title: 'Bienestar Natural',
      description: 'Tratamiento no invasivo y seguro',
      icon: 'shield'
    }
  ]
} as const;

export const HERO_MEDIA = {
  // Video settings
  video: {
    src: '/videos/hero-background.mp4',
    fallbackImage: '/images/hero-background.jpg',
    poster: '/images/hero-poster.jpg',
    type: 'video/mp4'
  },

  // Image settings
  image: {
    src: '/images/hero-background.jpg',
    srcWebP: '/images/hero-background.webp',
    alt: 'Centro de Oxigenoterapia Hiperbárica - Hiperbáricas Temuco'
  },

  // Logo settings
  logo: {
    src: '/images/logo.png',
    srcWebP: '/images/logo.webp',
    alt: 'Hiperbáricas Temuco - Logo',
    width: 180,
    height: 60
  }
} as const;

export const HERO_ANIMATION = {
  // Fade in animation config
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  },

  // Slide in from left
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  },

  // Slide in from right
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  },

  // Button hover
  buttonHover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },

  // Button tap
  buttonTap: {
    scale: 0.98
  }
} as const;
