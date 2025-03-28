
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
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        setNextImageIndex(newIndex === images.length - 1 ? 0 : newIndex + 1);
        return newIndex;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

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
          style={{
            backgroundImage: `url('${images[currentImageIndex]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Preload next image to prevent white flash */}
          <div className="hidden">
            <img src={images[nextImageIndex]} alt="Preload next" />
          </div>
          <div className="w-full h-full bg-gray-900 bg-opacity-40"></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingHeroBackground;
