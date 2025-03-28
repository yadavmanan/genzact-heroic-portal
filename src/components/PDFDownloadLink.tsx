
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

interface PDFDownloadLinkProps {
  className?: string;
  text?: string;
  showIcon?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const PDFDownloadLink: React.FC<PDFDownloadLinkProps> = ({ 
  className = "", 
  text = "See More", 
  showIcon = true,
  size = "default",
  variant = "default"
}) => {
  const isMobile = useIsMobile();
  
  return (
    <Link to="/profile-pdf">
      <Button 
        variant={variant}
        size={isMobile ? "sm" : size}
        className={`bg-primary hover:bg-primary/90 text-white font-medium ${className}`}
      >
        {showIcon && <FileText className={`${isMobile ? "w-3 h-3" : "w-4 h-4"} mr-2`} />}
        {text}
      </Button>
    </Link>
  );
};

export default PDFDownloadLink;
