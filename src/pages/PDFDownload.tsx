
import React from 'react';
import BabuPdfProfile from '@/components/BabuPdfProfile';
import { motion } from 'framer-motion';

const PDFDownload = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="container mx-auto mt-24">
        <BabuPdfProfile />
      </div>
    </motion.div>
  );
};

export default PDFDownload;
