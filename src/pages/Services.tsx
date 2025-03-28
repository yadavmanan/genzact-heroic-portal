
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Users, Search, BarChart, Building, Shield, Clock, 
  FileText, Briefcase, Calculator, Database, UserCheck, HeartHandshake,
  Laptop, Computer, Phone, HardHat, Factory, PhoneCall,
  Code, Globe, Workflow, Server, CheckCircle, Award, Trophy,
  GraduationCap, Settings, Lightbulb, Target, Zap
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useIsMobile, useIsDesktop } from '@/hooks/use-mobile';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

// Mobile Services Page Component
const MobileServicesPage = () => {
  // Function to handle "Contact Us" button clicks
  const handleContactClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16 pb-8 bg-white"
    >
      <div className="px-4">
        <h1 className="text-3xl font-bold mb-4 text-gradient">Our Services</h1>
        
        {/* Brief Intro */}
        <p className="text-sm text-gray-700 mb-6">
          Comprehensive staffing and recruitment solutions tailored for your business needs.
        </p>
        
        {/* Services Cards */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Core Services</h2>
          
          <div className="space-y-3">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                whileTap={{ scale: 0.98 }}
                className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden"
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`service-${index}`} className="border-none">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline">
                      <div className="flex items-center">
                        <div className="bg-primary/10 p-2 rounded-md mr-3">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-bold text-left text-base">{service.title}</h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p className="text-sm text-gray-700 mb-3 ml-10">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-4 ml-10">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <feature.icon className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature.text}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="ml-10">
                        <Link to="/contact" onClick={handleContactClick}>
                          <Button size="sm" className="bg-primary hover:bg-primary/90 text-sm">
                            {service.buttonText}
                          </Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Industries Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Industries We Serve</h2>
          <div className="grid grid-cols-2 gap-2">
            {industries.slice(0, 6).map((industry, index) => (
              <div key={index} className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm flex flex-col items-center">
                <industry.icon className="w-6 h-6 text-primary mb-2" />
                <span className="text-xs text-center font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
          
          <Accordion type="single" collapsible className="mt-2">
            <AccordionItem value="more-industries">
              <AccordionTrigger className="text-sm text-primary hover:no-underline">
                View More Industries
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {industries.slice(6).map((industry, index) => (
                    <div key={index} className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm flex flex-col items-center">
                      <industry.icon className="w-6 h-6 text-primary mb-2" />
                      <span className="text-xs text-center font-medium">{industry.name}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Process Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Our Process</h2>
          <div className="space-y-4">
            {serviceProcess.map((step, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mr-3">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  {index < serviceProcess.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mx-auto mt-1"></div>
                  )}
                </div>
                <div className="pt-1 pb-6">
                  <h3 className="text-base font-bold">{step.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Accordion */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-sm font-semibold py-3 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-700">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Call to Action */}
        <div className="bg-secondary/40 p-5 rounded-lg text-center">
          <h2 className="text-lg font-bold mb-2">Need a Custom Solution?</h2>
          <p className="text-sm text-gray-700 mb-4">
            Get tailored staffing solutions for your business needs.
          </p>
          <Link to="/contact" onClick={handleContactClick}>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// Desktop version - original implementation
const DesktopServicesPage = () => {
  // Function to handle "Contact Us" button clicks
  const handleContactClick = () => {
    // Navigate to the top of the contact page
    window.scrollTo(0, 0);
  };
  
  // Define animation variants for this component
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-24 px-4 bg-white"
    >
      <div className="container mx-auto mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Our Services</h1>
        
        {/* Services Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-secondary/50 p-8 rounded-lg mb-16 shadow-sm"
        >
          <p className="text-xl text-gray-900 mb-6">
            At Genzact, we provide comprehensive staffing and recruitment solutions designed to 
            meet the unique needs of businesses across various industries. Our deep industry 
            knowledge and personalized approach ensure that we deliver value at every step.
          </p>
          <p className="text-xl text-gray-900">
            Whether you're looking for Manpower Consulting, Payroll Management, or comprehensive 
            RPO solutions, our team is here to help you succeed.
          </p>
        </motion.div>
        
        {/* Visual Service Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-gradient text-center">Services at a Glance</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {serviceHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100"
              >
                <highlight.icon className="w-5 h-5 text-primary mr-2" />
                <span className="font-medium">{highlight.name}</span>
              </motion.div>
            ))}
          </div>
          <div className="bg-secondary/30 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-3">Your Strategic Partner</h3>
              <p className="text-gray-800">
                We don't just fill positions – we build partnerships that help your business grow.
                With Genzact, you get tailored staffing solutions backed by industry expertise.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" 
                alt="Team Collaboration" 
                className="w-64 h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Main Services */}
        <h2 className="text-3xl font-bold mb-8 text-gradient">Core Services</h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-16"
        >
          {coreServices.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg h-full flex flex-col"
            >
              <div className="flex items-center mb-4">
                <service.icon className="w-10 h-10 text-primary mr-4" />
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
              <p className="text-gray-900 mb-6">
                {service.description}
              </p>
              <ul className="text-gray-900 mb-6 space-y-2 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <feature.icon className="w-5 h-5 text-primary mr-2 mt-1" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" onClick={handleContactClick} className="mt-auto">
                <Button className="bg-primary hover:bg-primary/90">{service.buttonText}</Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Service Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-gradient">Why Our Services Stand Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary"
              >
                <div className="bg-primary/10 p-3 w-14 h-14 flex items-center justify-center rounded-full mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Industries We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-gradient">Industries We Serve</h2>
          <div className="bg-gradient-to-br from-secondary/40 to-secondary/10 p-8 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-lg shadow-sm text-center"
                >
                  <industry.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold">{industry.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Service Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-gradient">Our Service Process</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {serviceProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.5 }}
                  className="relative z-10 bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16 bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold mb-8 text-gradient text-center">Our Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                <Separator className="w-16 mx-auto mb-3 bg-primary/30" />
                <div className="text-gray-700">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-secondary/50 p-10 rounded-lg text-center mt-16 shadow-sm"
        >
          <h2 className="text-3xl font-bold mb-6 text-gradient">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-900 mb-8 max-w-3xl mx-auto">
            Our team can create tailored staffing and recruitment solutions designed specifically 
            for your organization's unique challenges and goals.
          </p>
          <Link to="/contact" onClick={handleContactClick}>
            <Button className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white transition-all duration-300">
              Contact Us Today
            </Button>
          </Link>
        </motion.div>
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-gradient text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-3 flex items-start">
                  <span className="bg-primary/10 text-primary w-8 h-8 flex items-center justify-center rounded-full mr-3 flex-shrink-0">Q</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 ml-11">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main Services component that conditionally renders based on screen size
const Services = () => {
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();
  
  // Render appropriate view based on screen size
  return isMobile ? <MobileServicesPage /> : <DesktopServicesPage />;
};

// Define services data for better organization and consistency
const coreServices = [
  {
    title: "Manpower Consulting",
    description: "We provide expert manpower consulting services to optimize your workforce and enhance operational efficiency. Our solutions include:",
    icon: Briefcase,
    features: [
      { icon: Users, text: "Workforce Planning & Analysis" },
      { icon: UserCheck, text: "Talent Acquisition Strategy" },
      { icon: Building, text: "Organizational Development" },
      { icon: BarChart, text: "Performance Management Systems" }
    ],
    buttonText: "Request Consultation"
  },
  {
    title: "Payroll Management",
    description: "Streamline your payroll operations with our comprehensive payroll management services that ensure accuracy, compliance, and efficiency:",
    icon: Calculator,
    features: [
      { icon: FileText, text: "End-to-end payroll processing" },
      { icon: Shield, text: "Tax compliance and reporting" },
      { icon: Clock, text: "Attendance and leave management" },
      { icon: Database, text: "Employee self-service portal" }
    ],
    buttonText: "Learn More"
  },
  {
    title: "IT Technology",
    description: "Leverage our IT expertise to find specialized technology professionals for your business needs:",
    icon: Laptop,
    features: [
      { icon: Computer, text: "Software Development Professionals" },
      { icon: Database, text: "Data Science & Analytics Experts" },
      { icon: Shield, text: "Cybersecurity Specialists" },
      { icon: Server, text: "Cloud Infrastructure Engineers" }
    ],
    buttonText: "Get IT Solutions"
  },
  {
    title: "Talent Acquisition",
    description: "Strategic talent acquisition solutions to help you find and retain top professionals in your industry:",
    icon: Search,
    features: [
      { icon: UserCheck, text: "Executive Search & Recruitment" },
      { icon: Users, text: "Diversity & Inclusion Hiring" },
      { icon: Building, text: "Employer Branding Services" },
      { icon: Clock, text: "Accelerated Hiring Processes" }
    ],
    buttonText: "Start Recruiting"
  },
  {
    title: "Manpower Off-Shore Projects",
    description: "Comprehensive offshore staffing solutions to optimize your global workforce strategy:",
    icon: Globe,
    features: [
      { icon: Code, text: "Remote Development Teams" },
      { icon: Users, text: "Cross-Border Talent Management" },
      { icon: Clock, text: "24/7 Operational Support" },
      { icon: Shield, text: "Compliance with International Standards" }
    ],
    buttonText: "Explore Offshore Solutions"
  },
  {
    title: "IT and Non-IT Staffing in India",
    description: "Complete staffing solutions for both IT and non-IT sectors across India:",
    icon: Building,
    features: [
      { icon: Computer, text: "Technology Professionals" },
      { icon: Briefcase, text: "Corporate Functions Staffing" },
      { icon: Factory, text: "Manufacturing & Operations" },
      { icon: UserCheck, text: "Healthcare & Life Sciences" }
    ],
    buttonText: "Find Talent in India"
  },
  {
    title: "On-Call Services for Industrial Sectors",
    description: "Immediate staffing solutions for urgent industrial requirements with our on-demand workforce:",
    icon: Factory,
    features: [
      { icon: HardHat, text: "Manufacturing & Production Staff" },
      { icon: PhoneCall, text: "24/7 Emergency Response Teams" },
      { icon: Clock, text: "Temporary Project-Based Workforce" },
      { icon: UserCheck, text: "Specialized Technical Operators" }
    ],
    buttonText: "Request On-Call Staff"
  },
  {
    title: "RPO Solutions",
    description: "Our Recruitment Process Outsourcing (RPO) solutions for both IT and non-IT sectors deliver:",
    icon: Search,
    features: [
      { icon: Building, text: "End-to-end recruitment management" },
      { icon: Users, text: "Industry-specific talent acquisition" },
      { icon: Clock, text: "Scalable hiring solutions" },
      { icon: HeartHandshake, text: "Employer branding and candidate experience" }
    ],
    buttonText: "Get Started"
  }
];

const serviceHighlights = [
  { name: "Manpower Consulting", icon: Briefcase },
  { name: "Payroll Management", icon: Calculator },
  { name: "IT Technology", icon: Laptop },
  { name: "Talent Acquisition", icon: Search },
  { name: "Offshore Projects", icon: Globe },
  { name: "India Staffing", icon: Building },
  { name: "On-Call Services", icon: PhoneCall },
  { name: "RPO Solutions", icon: Users }
];

const serviceBenefits = [
  {
    title: "Industry Expertise",
    description: "Specialized knowledge across multiple sectors for precise talent matching",
    icon: Trophy
  },
  {
    title: "Cost Efficiency",
    description: "Streamlined processes that save you time and reduce hiring costs",
    icon: Calculator
  },
  {
    title: "Quality Assurance",
    description: "Rigorous vetting ensures only top-tier candidates reach you",
    icon: CheckCircle
  },
  {
    title: "Scalable Solutions",
    description: "Flexible services that grow and adapt with your business needs",
    icon: Settings
  }
];

const industries = [
  { name: "Information Technology", icon: Laptop },
  { name: "Healthcare", icon: Shield },
  { name: "Manufacturing", icon: Factory },
  { name: "Financial Services", icon: Database },
  { name: "Education", icon: GraduationCap },
  { name: "Construction", icon: HardHat },
  { name: "Retail", icon: Building },
  { name: "Telecommunications", icon: Phone }
];

const serviceProcess = [
  {
    title: "Consultation",
    description: "We assess your requirements and define objectives"
  },
  {
    title: "Solution Design",
    description: "Develop a tailored staffing strategy for your needs"
  },
  {
    title: "Implementation",
    description: "Deploy our services seamlessly into your operations"
  },
  {
    title: "Ongoing Support",
    description: "Continuous optimization and responsive service"
  }
];

const successMetrics = [
  { value: "98%", label: "Client Satisfaction Rate" },
  { value: "1000+", label: "Placements Completed" },
  { value: "24h", label: "Average Response Time" },
  { value: "20+", label: "Industries Served" }
];

const faqs = [
  {
    question: "How quickly can you provide candidates for our open positions?",
    answer: "Depending on the role complexity, we can typically provide qualified candidates within 48-72 hours for standard positions, and 1-2 weeks for specialized or executive roles."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have expertise across multiple sectors including IT, healthcare, manufacturing, finance, education, construction, retail, and telecommunications, with specialized recruiters for each."
  },
  {
    question: "How do you ensure candidate quality?",
    answer: "We implement a multi-stage screening process including skills assessments, behavioral interviews, reference checks, and background verification to ensure only quality candidates are presented."
  },
  {
    question: "Can you handle international recruitment?",
    answer: "Yes, our Manpower Off-Shore Projects division specializes in cross-border recruitment and management of international talent pools across multiple geographies."
  }
];

export default Services;
