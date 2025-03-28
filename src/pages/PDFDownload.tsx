
import React, { useEffect } from 'react';
import BabuPdfProfile from '@/components/BabuPdfProfile';
import { motion } from 'framer-motion';

// Desktop-specific component for PDF Download page
const PDFDownload = () => {
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
      className="min-h-screen"
      style={{ position: 'relative' }}
    >
      <div className="container mx-auto py-20">
        <BabuPdfProfile showDownloadButton={false} showHeader={false} />
      </div>
    </motion.div>
  );
};

export default PDFDownload;
