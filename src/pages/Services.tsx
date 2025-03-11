
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Users, Search, BarChart, Building, Shield, Clock, 
  FileText, Code, Database, Server, Cpu, HeartHandshake 
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
      className="min-h-screen py-24 px-4"
    >
      <div className="container mx-auto mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Our Services</h1>
        
        {/* Services Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 rounded-lg mb-16"
        >
          <p className="text-xl text-gray-300 mb-6">
            At Genzact, we provide comprehensive staffing and recruitment solutions designed to 
            meet the unique needs of businesses in the technology sector. Our deep industry 
            knowledge and personalized approach ensure that we deliver value at every step.
          </p>
          <p className="text-xl text-gray-300">
            Whether you're looking for specialized IT talent, end-to-end recruitment services,
            or strategic consulting, our team is here to help you succeed.
          </p>
        </motion.div>
        
        {/* Main Services */}
        <h2 className="text-3xl font-bold mb-8 text-gradient">Core Services</h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-16"
        >
          <motion.div variants={itemVariants} className="glass p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Users className="w-10 h-10 text-primary mr-4" />
              <h2 className="text-2xl font-bold">IT Staffing</h2>
            </div>
            <p className="text-gray-300 mb-6">
              We connect businesses with top tech talent. Our rigorous vetting process ensures 
              you get the right professionals for your specific needs. We specialize in:
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li className="flex items-start">
                <Code className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Software Developers (Frontend, Backend, Full-Stack)</span>
              </li>
              <li className="flex items-start">
                <Database className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Database Administrators & Engineers</span>
              </li>
              <li className="flex items-start">
                <Server className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>DevOps & Cloud Engineers</span>
              </li>
              <li className="flex items-start">
                <Cpu className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>IT Infrastructure Specialists</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="glass hover:bg-primary/20">Request Talent</Button>
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Search className="w-10 h-10 text-primary mr-4" />
              <h2 className="text-2xl font-bold">Recruitment Solutions</h2>
            </div>
            <p className="text-gray-300 mb-6">
              End-to-end recruitment services tailored to your business. From job posting to 
              onboarding, we handle the entire process with:
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li className="flex items-start">
                <FileText className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Comprehensive job description development</span>
              </li>
              <li className="flex items-start">
                <Search className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Candidate sourcing and screening</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Skills assessment and verification</span>
              </li>
              <li className="flex items-start">
                <HeartHandshake className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Interview coordination and offer management</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="glass hover:bg-primary/20">Learn More</Button>
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <BarChart className="w-10 h-10 text-primary mr-4" />
              <h2 className="text-2xl font-bold">Consulting Services</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Strategic guidance for your business growth. Our experts provide insights on workforce 
              planning, talent acquisition strategy, and team scaling to help you:
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li className="flex items-start">
                <Building className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Optimize your organizational structure</span>
              </li>
              <li className="flex items-start">
                <Users className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Develop effective talent acquisition strategies</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Create efficient onboarding processes</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="glass hover:bg-primary/20">Get Advice</Button>
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Building className="w-10 h-10 text-primary mr-4" />
              <h2 className="text-2xl font-bold">Managed Service Providers</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Comprehensive workforce solutions to streamline your operations. We manage your 
              staffing needs so you can focus on your core business with:
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li className="flex items-start">
                <Users className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Complete workforce management</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Vendor compliance and management</span>
              </li>
              <li className="flex items-start">
                <BarChart className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Performance tracking and optimization</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="glass hover:bg-primary/20">Explore MSP</Button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass p-10 rounded-lg text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-gradient">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our team can create tailored staffing and recruitment solutions designed specifically 
            for your organization's unique challenges and goals.
          </p>
          <Link to="/contact">
            <Button className="text-lg px-8 py-6 glass hover:bg-primary/20 transition-all duration-300">
              Contact Us Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
