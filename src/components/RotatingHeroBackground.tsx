
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
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
        >
          <div 
            className="w-full h-full bg-gray-50 bg-opacity-50"
            style={{
              backgroundImage: `url('${images[currentImageIndex]}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'overlay'
            }}
          ></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingHeroBackground;
