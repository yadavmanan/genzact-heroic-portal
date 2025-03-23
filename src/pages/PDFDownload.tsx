
import React, { useEffect } from 'react';
import BabuPdfProfile from '@/components/BabuPdfProfile';
import { motion } from 'framer-motion';

const PDFDownload = () => {
  // Use useEffect to scroll to top and avoid navbar overlap
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add a class to body for PDF specific styling
    document.body.classList.add('pdf-page');
    
    // Clean up on unmount
    return () => {
      document.body.classList.remove('pdf-page');
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-16" // Adjusted padding to fix navbar positioning
    >
      <div className="container mx-auto mt-10"> {/* Added margin-top for better spacing */}
        <BabuPdfProfile />
      </div>
    </motion.div>
  );
};

export default PDFDownload;
