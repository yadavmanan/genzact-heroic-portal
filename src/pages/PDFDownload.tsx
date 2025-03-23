
import React, { useEffect } from 'react';
import BabuPdfProfile from '@/components/BabuPdfProfile';
import { motion } from 'framer-motion';

const PDFDownload = () => {
  // Use useEffect to add padding to the top to account for navbar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32" // Increased padding top to avoid navbar overlap
    >
      <div className="container mx-auto">
        <BabuPdfProfile />
      </div>
    </motion.div>
  );
};

export default PDFDownload;
