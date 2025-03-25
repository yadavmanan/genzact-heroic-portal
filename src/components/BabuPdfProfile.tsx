import React from 'react';
import { 
  Award, 
  Target, 
  TrendingUp, 
  Landmark, 
  Layers, 
  Users, 
  UserCheck, 
  BarChart, 
  Mail, 
  Phone, 
  Globe,
  Download,
  FileText
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useToast } from "@/components/ui/use-toast";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";

const BabuPdfProfile = () => {
  const { toast } = useToast();

  const generatePdf = async () => {
    const pdfContent = document.getElementById('babu-pdf-content');
    if (!pdfContent) return;

    try {
      toast({
        title: "Generating PDF",
        description: "Please wait while we prepare your download...",
        duration: 5000,
      });

      document.body.classList.add('generating-pdf');
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });
      
      // Set PDF properties for better quality
      pdf.setProperties({
        title: 'Babu Karlapudi - Professional Profile',
        subject: 'CEO & Founder, Genzact',
        author: 'Genzact',
        keywords: 'Profile, IT Staffing, Leadership',
        creator: 'Genzact'
      });
      
      const scale = 2; // Higher scale for better quality
      const pdfContentClone = pdfContent.cloneNode(true) as HTMLElement;
      
      pdfContentClone.style.transform = 'none';
      pdfContentClone.style.position = 'absolute';
      pdfContentClone.style.left = '-9999px';
      pdfContentClone.style.top = '0';
      pdfContentClone.style.width = '210mm'; // A4 width
      pdfContentClone.style.maxHeight = '297mm'; // A4 height
      document.body.appendChild(pdfContentClone);
      
      // Use html2canvas with higher quality settings
      const canvas = await html2canvas(pdfContentClone, {
        scale: scale,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: 794, // A4 width in pixels at 96 DPI
        windowHeight: 1123 // A4 height in pixels at 96 DPI
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      
      // Add the image to the PDF with proper dimensions
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297, undefined, 'FAST');
      
      document.body.removeChild(pdfContentClone);
      document.body.classList.remove('generating-pdf');
      
      pdf.save('Babu_Karlapudi_Profile.pdf');
      
      toast({
        title: "PDF Generated",
        description: "Your PDF has been successfully downloaded!",
        duration: 3000,
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      document.body.classList.remove('generating-pdf');
      
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <div className="container mx-auto py-4 px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gradient">Babu Karlapudi - Professional Profile</h1>
        <Button 
          onClick={generatePdf} 
          className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
        >
          <Download size={16} />
          Download PDF
        </Button>
      </div>

      <div id="babu-pdf-content" className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-3 border-b pb-2">
          <div>
            <h1 className="text-xl font-bold text-primary mb-0">Babu Karlapudi</h1>
            <p className="text-sm text-gray-700 mb-0">CEO & Founder, Genzact</p>
            <p className="text-xs text-gray-600">20+ Years Experience in US IT Staffing</p>
          </div>
          <div className="text-right">
            <h2 className="text-lg font-bold text-gray-800 mb-0">Genzact</h2>
            <p className="text-xs text-gray-600">Premium Manpower Solutions</p>
          </div>
        </div>

        <div className="mb-3">
          <h2 className="text-base font-bold text-gray-800 mb-1 flex items-center">
            <FileText className="w-4 h-4 text-primary mr-1" />
            Professional Summary
          </h2>
          <p className="text-xs text-gray-700 mb-1 leading-tight">
            As a results-driven Business Head with over 20 years of experience in the US IT Staffing industry, 
            Babu has led multiple IT Staffing divisions and ODCs, demonstrating deep expertise in the U.S. market. 
            His impressive track record spans multiple geographical regions including the USA, Canada, and Mexico.
          </p>
          <p className="text-xs text-gray-700 leading-tight">
            With a strategic mindset, operational expertise, and P&L responsibility, he has consistently integrated 
            and optimized operations across regions, elevating revenue generation processes and driving business success.
          </p>
        </div>

        <div className="mb-3">
          <h2 className="text-base font-bold text-gray-800 mb-1">Areas of Expertise</h2>
          <div className="grid grid-cols-2 gap-2">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="border border-gray-200 rounded p-2">
                <h3 className="text-xs font-bold text-primary mb-1 flex items-center">
                  <area.icon className="w-3 h-3 text-primary mr-1" />
                  {area.title}
                </h3>
                <ul className="list-disc pl-4 text-xs space-y-0">
                  {area.points.map((point, i) => (
                    <li key={i} className="text-[10px] leading-tight">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <h2 className="text-base font-bold text-gray-800 mb-1">Key Achievements</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-gray-200 rounded p-2">
              <h3 className="text-xs font-bold text-primary mb-0">Business Growth</h3>
              <p className="text-[10px] text-gray-700 leading-tight">
                Successfully expanded operations across multiple regions in North America, increasing client 
                base by 200% and achieving consistent year-over-year revenue growth.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-2">
              <h3 className="text-xs font-bold text-primary mb-0">Team Development</h3>
              <p className="text-[10px] text-gray-700 leading-tight">
                Built and mentored high-performing teams across different regions, implementing training 
                programs that improved productivity by 35% and reduced turnover.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-2">
              <h3 className="text-xs font-bold text-primary mb-0">Process Innovation</h3>
              <p className="text-[10px] text-gray-700 leading-tight">
                Introduced data-driven recruitment processes and technology solutions that reduced time-to-fill 
                positions by 40% while maintaining quality standards.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-2">
              <h3 className="text-xs font-bold text-primary mb-0">Client Satisfaction</h3>
              <p className="text-[10px] text-gray-700 leading-tight">
                Maintained 95% client retention rate through strategic relationship management and responsive 
                service delivery across all operational regions.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <h2 className="text-base font-bold text-gray-800 mb-1">Our Services</h2>
          <div className="grid grid-cols-3 gap-1">
            {services.slice(0, 6).map((service, index) => (
              <div key={index} className="p-1 border border-gray-200 rounded-lg">
                <h3 className="text-[11px] font-bold text-primary mb-0">{service.title}</h3>
                <p className="text-[9px] text-gray-700 leading-tight">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-2 rounded-lg">
          <h2 className="text-sm font-bold text-gray-800 mb-1">Contact Information</h2>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="flex items-center">
              <Mail className="w-3 h-3 text-primary mr-1" />
              <a href="mailto:babu@genzact.com" className="text-primary hover:underline">babu@genzact.com</a>
            </div>
            <div className="flex items-center">
              <Phone className="w-3 h-3 text-primary mr-1" />
              <a href="tel:+919666655664" className="text-primary hover:underline">+91 9666655664</a>
            </div>
            <div className="flex items-center">
              <Globe className="w-3 h-3 text-primary mr-1" />
              <a href="https://www.genzact.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                www.genzact.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const expertiseAreas = [
  {
    title: "Strategic Leadership & Integration",
    icon: Target,
    points: [
      "Regional integration across geographic locations",
      "Strategic planning for business growth",
      "Market expansion across U.S. states and cities"
    ]
  },
  {
    title: "Revenue Growth & Business Development",
    icon: TrendingUp,
    points: [
      "Client acquisition and retention strategies",
      "Revenue optimization and pricing models",
      "Market positioning and thought leadership"
    ]
  },
  {
    title: "P&L Management",
    icon: Landmark,
    points: [
      "Financial target setting and budget management",
      "Cost optimization while maintaining service quality",
      "Financial forecasting and performance analysis"
    ]
  },
  {
    title: "Operational Excellence",
    icon: Layers,
    points: [
      "End-to-end staffing process optimization",
      "Technology integration and process automation",
      "Compliance and quality assurance management"
    ]
  },
  {
    title: "Team Leadership & Development",
    icon: Users,
    points: [
      "Building high-performance team culture",
      "Talent development and retention programs",
      "Cross-functional collaboration initiatives"
    ]
  },
  {
    title: "Data-Driven Decision Making",
    icon: BarChart,
    points: [
      "Analytics-driven operational strategies",
      "Market trend analysis and competitive research",
      "Performance metric development and tracking"
    ]
  }
];

const services = [
  {
    title: "IT Staffing Solutions",
    description: "Connecting top IT talent with innovative companies through a thorough vetting process and personalized approach."
  },
  {
    title: "Executive Search",
    description: "Strategic recruitment for leadership and specialized technical positions, focusing on long-term organizational fit."
  },
  {
    title: "Contract Staffing",
    description: "Flexible staffing solutions for project-based needs with fast turnaround and quality assurance."
  },
  {
    title: "Permanent Recruitment",
    description: "End-to-end permanent placement services with emphasis on retention and cultural alignment."
  },
  {
    title: "Recruitment Process Outsourcing",
    description: "Comprehensive RPO services to streamline and optimize your entire recruitment operation."
  },
  {
    title: "Payroll Management",
    description: "End-to-end payroll services with compliance management and reporting."
  },
  {
    title: "Domestic IT Requirements",
    description: "Specialized staffing for domestic IT projects with local market expertise and talent networks."
  },
  {
    title: "On-Call Services for Industrial Sectors",
    description: "24/7 staffing solutions for mission-critical industrial operations requiring immediate expertise."
  },
  {
    title: "HR Consulting",
    description: "Strategic HR advisory services to optimize your talent management and organizational development."
  }
];

export default BabuPdfProfile;
