
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingHeroBackgroundProps {
  images: string[];
  interval?: number;
}

const RotatingHeroBackground = ({ 
  images, 
  interval = 5000 
}: RotatingHeroBackgroundProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(images.length).fill(false));

  // Preload all images
  useEffect(() => {
    const imageObjects = images.map((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
      return img;
    });

    return () => {
      // Clean up image objects
      imageObjects.forEach(img => {
        img.onload = null;
      });
    };
  }, [images]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Log current image for debugging
  useEffect(() => {
    console.log(`Current background image: ${currentImageIndex}`, images[currentImageIndex]);
  }, [currentImageIndex, images]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <div 
            className="w-full h-full bg-white bg-opacity-50"
            style={{
              backgroundImage: `url('${images[currentImageIndex]}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.95)',
              backgroundBlendMode: 'overlay'
            }}
          ></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingHeroBackground;
