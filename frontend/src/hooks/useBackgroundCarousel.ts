import { useState, useEffect } from 'react';

/**
 * Hook para manejar un carousel automático de imágenes de fondo con transiciones fluidas
 *
 * @param images - Array de rutas de imágenes
 * @param interval - Intervalo en milisegundos para cambiar de imagen (default: 5000)
 * @param transitionDuration - Duración de la transición en milisegundos (default: 1000)
 * @returns Objeto con la imagen actual, la imagen anterior y el estado de transición
 */
export const useBackgroundCarousel = (
  images: string[] = ['/hero.jpg', '/hero2.jpg', '/hero3.jpg'],
  interval: number = 5000,
  transitionDuration: number = 1000
) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Timer para iniciar la transición
    const timer = setInterval(() => {
      setIsTransitioning(true);

      // Después de la transición, cambiar la imagen
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, transitionDuration / 2);
    }, interval);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(timer);
  }, [images.length, interval, transitionDuration]);

  return {
    currentImage: images[currentImageIndex],
    nextImage: images[(currentImageIndex + 1) % images.length],
    isTransitioning,
    opacity: isTransitioning ? 0 : 1
  };
};
