
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

const BabuPdfProfile = () => {
  const generatePdf = async () => {
    const pdfContent = document.getElementById('babu-pdf-content');
    if (!pdfContent) return;

    try {
      const canvas = await html2canvas(pdfContent, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('Babu_Karlapudi_Profile.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gradient">Babu Karlapudi - Professional Profile</h1>
        <Button 
          onClick={generatePdf} 
          className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
        >
          <Download size={16} />
          Download PDF
        </Button>
      </div>

      <div id="babu-pdf-content" className="bg-white p-8 rounded-lg shadow-lg">
        {/* Header with company logo and title */}
        <div className="flex justify-between items-center mb-8 border-b pb-6">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">Babu Karlapudi</h1>
            <p className="text-xl text-gray-700">CEO & Founder, Genzact</p>
            <p className="text-md text-gray-600 mt-2">20+ Years Experience in US IT Staffing</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold text-gray-800">Genzact</h2>
            <p className="text-sm text-gray-600">Premium Manpower Solutions</p>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <FileText className="w-6 h-6 text-primary mr-2" />
            Professional Summary
          </h2>
          <p className="text-gray-700 mb-4">
            As a results-driven Business Head with over 20 years of experience in the US IT Staffing industry, 
            Babu has led multiple IT Staffing divisions and ODCs, demonstrating deep expertise in the U.S. market. 
            His impressive track record spans multiple geographical regions including the USA, Canada, and Mexico.
          </p>
          <p className="text-gray-700">
            With a strategic mindset, operational expertise, and P&L responsibility, he has consistently integrated 
            and optimized operations across regions, elevating revenue generation processes and driving business success.
          </p>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <area.icon className="w-5 h-5 text-primary mr-3" />
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.points.map((point, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-primary mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Business Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Successfully expanded operations across multiple regions in North America, increasing client 
                  base by 200% and achieving consistent year-over-year revenue growth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Team Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Built and mentored high-performing teams across different regions, implementing training 
                  programs that improved productivity by 35% and reduced turnover.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Process Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Introduced data-driven recruitment processes and technology solutions that reduced time-to-fill 
                  positions by 40% while maintaining quality standards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Client Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Maintained 95% client retention rate through strategic relationship management and responsive 
                  service delivery across all operational regions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company Services */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-sm text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-primary mr-2" />
              <a href="mailto:babu@genzact.com" className="text-primary hover:underline">babu@genzact.com</a>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-primary mr-2" />
              <a href="tel:+919666655664" className="text-primary hover:underline">+91 9666655664</a>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 text-primary mr-2" />
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

// Define expertise areas data
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

// Define services data
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
