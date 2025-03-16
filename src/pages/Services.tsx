
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Users, Search, BarChart, Building, Shield, Clock, 
  FileText, Briefcase, Calculator, Database, UserCheck, HeartHandshake 
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
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <Briefcase className="w-10 h-10 text-primary mr-4" />
              <h2 className="text-2xl font-bold">Manpower Consulting</h2>
            </div>
            <p className="text-gray-900 mb-6">
              We provide expert manpower consulting services to optimize your workforce and enhance 
              operational efficiency. Our solutions include:
            </p>
            <ul className="text-gray-900 mb-6 space-y-2">
              <li className="flex items-start">
                <Users className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Workforce Planning & Analysis</span>
              </li>
              <li className="flex items-start">
                <UserCheck className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Talent Acquisition Strategy</span>
              </li>
              <li className="flex items-start">
                <Building className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Organizational Development</span>
              </li>
              <li className="flex items-start">
                <BarChart className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Performance Management Systems</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90">Request Consultation</Button>
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <Calculator className="w-10 h-10 text-primary mr-4" />
              <h2 className="text-2xl font-bold">Payroll Management</h2>
            </div>
            <p className="text-gray-900 mb-6">
              Streamline your payroll operations with our comprehensive payroll management services 
              that ensure accuracy, compliance, and efficiency:
            </p>
            <ul className="text-gray-900 mb-6 space-y-2">
              <li className="flex items-start">
                <FileText className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>End-to-end payroll processing</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Tax compliance and reporting</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Attendance and leave management</span>
              </li>
              <li className="flex items-start">
                <Database className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Employee self-service portal</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <Search className="w-10 h-10 text-primary mr-4" />
              <h2 className="text-2xl font-bold">RPO Solutions</h2>
            </div>
            <p className="text-gray-900 mb-6">
              Our Recruitment Process Outsourcing (RPO) solutions for both IT and non-IT sectors deliver:
            </p>
            <ul className="text-gray-900 mb-6 space-y-2">
              <li className="flex items-start">
                <Building className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>End-to-end recruitment management</span>
              </li>
              <li className="flex items-start">
                <Users className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Industry-specific talent acquisition</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Scalable hiring solutions</span>
              </li>
              <li className="flex items-start">
                <HeartHandshake className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Employer branding and candidate experience</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
            </Link>
          </motion.div>
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
          <Link to="/contact">
            <Button className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white transition-all duration-300">
              Contact Us Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
