
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface PDFDownloadLinkProps {
  className?: string;
  text?: string;
  showIcon?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const PDFDownloadLink: React.FC<PDFDownloadLinkProps> = ({ 
  className = "", 
  text = "Download Company Profile", 
  showIcon = true,
  size = "default",
  variant = "default"
}) => {
  return (
    <Link to="/profile-pdf">
      <Button 
        variant={variant}
        size={size}
        className={`bg-primary text-white hover:bg-primary/90 ${className}`}
      >
        {showIcon && <FileText className="w-4 h-4 mr-2" />}
        {text}
      </Button>
    </Link>
  );
};

export default PDFDownloadLink;
