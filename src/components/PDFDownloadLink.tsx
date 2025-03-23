
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface PDFDownloadLinkProps {
  className?: string;
  text?: string;
  showIcon?: boolean;
}

const PDFDownloadLink: React.FC<PDFDownloadLinkProps> = ({ 
  className = "", 
  text = "Download Company Profile", 
  showIcon = true 
}) => {
  return (
    <Link to="/profile-pdf">
      <Button className={`bg-primary text-white hover:bg-primary/90 ${className}`}>
        {showIcon && <FileText className="w-4 h-4 mr-2" />}
        {text}
      </Button>
    </Link>
  );
};

export default PDFDownloadLink;
