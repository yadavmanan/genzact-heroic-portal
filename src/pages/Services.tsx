
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-24 px-4"
    >
      <div className="container mx-auto mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="glass p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">IT Staffing</h2>
            <p className="text-gray-300 mb-6">
              We connect businesses with top tech talent. Our rigorous vetting process ensures 
              you get the right professionals for your specific needs.
            </p>
            <Button className="glass hover:bg-primary/20">Learn More</Button>
          </div>
          
          <div className="glass p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Recruitment Solutions</h2>
            <p className="text-gray-300 mb-6">
              End-to-end recruitment services tailored to your business. From job posting to 
              onboarding, we handle the entire process.
            </p>
            <Button className="glass hover:bg-primary/20">Learn More</Button>
          </div>
          
          <div className="glass p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Consulting Services</h2>
            <p className="text-gray-300 mb-6">
              Strategic guidance for your business growth. Our experts provide insights on workforce 
              planning, talent acquisition strategy, and team scaling.
            </p>
            <Button className="glass hover:bg-primary/20">Learn More</Button>
          </div>
          
          <div className="glass p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Managed Service Providers</h2>
            <p className="text-gray-300 mb-6">
              Comprehensive workforce solutions to streamline your operations. We manage your 
              staffing needs so you can focus on your core business.
            </p>
            <Button className="glass hover:bg-primary/20">Learn More</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
