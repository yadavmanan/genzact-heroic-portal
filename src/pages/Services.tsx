
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Users, Search, BarChart, Building, Shield, Clock, 
  FileText, Briefcase, Calculator, Database, UserCheck, HeartHandshake,
  Laptop, Computer, Phone, HardHat, Factory, PhoneCall
} from 'lucide-react';

const Services = () => {
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

  // Function to handle "Contact Us" button clicks
  const handleContactClick = () => {
    // Navigate to the top of the contact page
    window.scrollTo(0, 0);
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
      </div>
    </motion.div>
  );
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
  },
  {
    title: "Domestic IT Requirements",
    description: "Fulfill your IT staffing needs with our specialized recruitment services for technology roles:",
    icon: Laptop,
    features: [
      { icon: Computer, text: "Software Development Professionals" },
      { icon: Database, text: "Data Science & Analytics Experts" },
      { icon: Shield, text: "Cybersecurity Specialists" },
      { icon: Users, text: "IT Project Management Teams" }
    ],
    buttonText: "Get IT Solutions"
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
  }
];

export default Services;
