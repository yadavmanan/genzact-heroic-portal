
import React, { useEffect } from 'react';
import BabuPdfProfile from '@/components/BabuPdfProfile';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

// Mobile-specific component for PDF Download page with new implementation
const MobilePDFPage = () => {
  const { toast } = useToast();
  
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

  const generatePdfMobile = async () => {
    const pdfContent = document.getElementById('babu-pdf-content');
    if (!pdfContent) {
      toast({
        title: "Error",
        description: "Could not find content to generate PDF",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Generating PDF",
      description: "Please wait while we prepare your download...",
    });
    
    // We'll let the BabuPdfProfile component handle the actual PDF generation
    // Just scroll to the profile section to make it visible
    pdfContent.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.15 
      }
    },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16 pb-20"
    >
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-3xl font-bold mb-2 text-gradient">Expert Profile</h1>
          <p className="text-sm text-gray-600 mb-6">
            Comprehensive information about our founder and expertise
          </p>
          
          <Button 
            onClick={generatePdfMobile} 
            className="w-full mb-6 bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Generate PDF Profile
          </Button>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-xl shadow-lg overflow-hidden p-1"
        >
          <BabuPdfProfile showDownloadButton={true} />
        </motion.div>
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
      style={{ position: 'relative' }}
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
