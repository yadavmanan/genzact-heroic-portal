
import React, { useEffect } from 'react';
import BabuPdfProfile from '@/components/BabuPdfProfile';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

// Mobile-specific component for PDF Download page
const MobilePDFPage = () => {
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
      className="min-h-screen pt-16 pb-8"
      style={{ position: 'relative' }} // Add position relative to fix framer-motion warning
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-gradient">Profile Details</h1>
        <p className="text-sm text-gray-700 mb-6">
          Comprehensive information about our founder and expertise.
        </p>
        <BabuPdfProfile showDownloadButton={false} />
      </div>
    </motion.div>
  );
};

// Desktop-specific component for PDF Download page
const DesktopPDFPage = () => {
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
      style={{ position: 'relative' }} // Add position relative to fix framer-motion warning
    >
      <div className="container mx-auto py-20">
        <BabuPdfProfile showDownloadButton={false} />
      </div>
    </motion.div>
  );
};

// Main component that conditionally renders based on screen size
const PDFDownload = () => {
  const isMobile = useIsMobile();
  
  return isMobile ? <MobilePDFPage /> : <DesktopPDFPage />;
};

export default PDFDownload;
