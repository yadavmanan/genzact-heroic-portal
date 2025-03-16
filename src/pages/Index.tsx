
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Briefcase, Calculator, Search, Check, Star, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
    toast({
      title: "Welcome to Genzact",
      description: "Discover innovative staffing solutions for your business",
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="w-full h-full bg-white bg-opacity-50"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'overlay'
            }}
          ></div>
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
              Solutions That <span className="text-gradient">Matter</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto backdrop-blur-sm bg-white/60 p-3 rounded-lg">
              Your trusted partner in Manpower Consulting, Payroll Management, and RPO Services.
            </p>
            <Link to="/services">
              <Button className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md">
                Explore Services <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-700 w-8 h-8" />
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive staffing solutions tailored to your business needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="flex items-center text-primary hover:underline">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Why Choose Genzact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through our unique approach to talent acquisition and management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start bg-secondary/30 p-6 rounded-lg shadow-sm"
                >
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg flex flex-col items-center justify-center text-center shadow-md"
            >
              <div className="mb-6">
                <Star className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Industry Excellence</h3>
                <p className="text-gray-600 mb-6">
                  With years of experience in the staffing industry, we've built a reputation for excellence
                  and reliability that our clients trust.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-secondary/40 p-4 rounded-lg">
                  <h4 className="text-4xl font-bold text-primary mb-2">95%</h4>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
                <div className="bg-secondary/40 p-4 rounded-lg">
                  <h4 className="text-4xl font-bold text-primary mb-2">200+</h4>
                  <p className="text-sm text-gray-600">Successful Placements</p>
                </div>
                <div className="bg-secondary/40 p-4 rounded-lg">
                  <h4 className="text-4xl font-bold text-primary mb-2">48h</h4>
                  <p className="text-sm text-gray-600">Average Response Time</p>
                </div>
                <div className="bg-secondary/40 p-4 rounded-lg">
                  <h4 className="text-4xl font-bold text-primary mb-2">15+</h4>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-lg text-center shadow-md"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Ready to Transform Your Workforce?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with our team today to discover how Genzact can help your business find the 
              perfect talent solutions for your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md">
                  Get in Touch <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button className="text-lg px-8 py-6 bg-white hover:bg-gray-100 text-primary border border-primary transition-all duration-300">
                  Our Services <ArrowUpRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-2 text-gradient">Trusted by Leading Companies</h2>
            <p className="text-gray-600">Our esteemed clients that trust our services</p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-4 rounded-lg w-44 h-44 flex flex-col items-center justify-center shadow-md client-logo"
              >
                <img 
                  src={logo.image} 
                  alt={logo.name} 
                  className="w-16 h-16 object-contain mb-2" 
                />
                <span className="text-gray-700 text-sm text-center font-medium">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Manpower Consulting",
    description: "Strategic manpower planning and talent acquisition solutions.",
    icon: Briefcase
  },
  {
    title: "Payroll Management",
    description: "Comprehensive payroll processing and compliance services.",
    icon: Calculator
  },
  {
    title: "RPO Solutions",
    description: "End-to-end recruitment process outsourcing for IT and non-IT sectors.",
    icon: Search
  }
];

const benefits = [
  {
    title: "Industry Expertise",
    description: "Our specialists have deep knowledge of various industry sectors, ensuring precise matching of skills."
  },
  {
    title: "Personalized Service",
    description: "We create custom staffing solutions tailored to your unique business requirements."
  },
  {
    title: "Quality-Focused",
    description: "Rigorous vetting ensures we only connect you with top-tier talent that meets your standards."
  },
  {
    title: "Timely Delivery",
    description: "We understand urgency and work efficiently to fill your positions with qualified candidates."
  }
];

const clientLogos = [
  { 
    name: "Noratel",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Noratel_Logo.png/1200px-Noratel_Logo.png" 
  },
  { 
    name: "Thefirms.in",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png" 
  }
];

export default Index;
