import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Clock, 
  Award, 
  ArrowRight, 
  Globe, 
  Layers, 
  Check, 
  Heart, 
  MapPin, 
  Mail, 
  Phone,
  Briefcase,
  GraduationCap,
  Languages,
  BookOpen
} from 'lucide-react';
import { useIsMobile, useIsDesktop } from '@/hooks/use-mobile';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { AboutPageSEO } from '@/utils/seo';

// Define Shield and Lightbulb before they are used
const Shield = Award; // This is just for demonstration, using Award icon as Shield
const Lightbulb = Award; // Using Award as placeholder for Lightbulb icon

// Mobile-specific About component
const MobileAboutPage = () => {
  // Function to handle "Contact Us" button click
  const handleContactClick = () => {
    // Navigate to the top of the contact page
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16 pb-8 bg-white"
      style={{ position: 'relative' }} // Add position relative to fix framer-motion warning
    >
      <AboutPageSEO />
      <div className="px-4">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4 text-gradient">Our Story</h1>
        <p className="text-sm text-gray-700 mb-6">
          Genzact was founded with a vision to transform the recruitment landscape by providing exceptional 
          staffing solutions.
        </p>
        
        {/* Quick Stats */}
        <div className="flex flex-wrap gap-2 mb-8">
          <div className="bg-secondary/30 px-4 py-3 rounded-lg text-center flex-1">
            <span className="block text-xl font-bold text-primary">8+</span>
            <span className="text-xs">Years</span>
          </div>
          <div className="bg-secondary/30 px-4 py-3 rounded-lg text-center flex-1">
            <span className="block text-xl font-bold text-primary">500+</span>
            <span className="text-xs">Clients</span>
          </div>
          <div className="bg-secondary/30 px-4 py-3 rounded-lg text-center flex-1">
            <span className="block text-xl font-bold text-primary">1000+</span>
            <span className="text-xs">Placements</span>
          </div>
        </div>
        
        {/* Mission & Vision */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Mission & Vision</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="mission" className="border-b border-gray-200">
              <AccordionTrigger className="py-3 hover:no-underline">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-md mr-3">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-left text-base">Our Mission</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <p className="text-sm text-gray-700">
                  To empower businesses with exceptional talent while providing professionals with meaningful career opportunities.
                  We strive to create lasting partnerships built on trust, integrity, and mutual success.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="vision" className="border-b border-gray-200">
              <AccordionTrigger className="py-3 hover:no-underline">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-md mr-3">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-left text-base">Our Vision</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <p className="text-sm text-gray-700">
                  To be the leading global staffing solutions provider known for innovation, excellence, and transformative 
                  impact on businesses and careers. We envision a world where every company finds its perfect talent match.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Founder Profile */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Our Founder</h2>
          <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
            <div className="flex justify-center p-4">
              <img 
                src="/lovable-uploads/1JYfi6jTInjssYv3HqcOX7l4dQE_-ywUd.jpg" 
                alt="Babu Karlapudi - Founder & CEO" 
                className="rounded-lg shadow-sm max-w-full h-auto max-h-[200px]" 
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Babu Karlapudi</h3>
              <p className="text-primary text-sm mb-3">Founder & CEO</p>
              <p className="text-sm text-gray-700 mb-4">
                With over 20 years of experience in staffing and ODC operational excellence, Babu founded Genzact with a vision to transform 
                how businesses approach staffing.
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="experience" className="border-b border-gray-200">
                  <AccordionTrigger className="py-2 text-sm hover:no-underline">
                    Professional Background
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-1.5 rounded-full mr-2 flex-shrink-0">
                          <Briefcase className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">Experience</h4>
                          <p className="text-xs text-gray-700">20+ years in Staffing and ODC Operational Excellence</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-1.5 rounded-full mr-2 flex-shrink-0">
                          <GraduationCap className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">Education</h4>
                          <p className="text-xs text-gray-700">MBA in International Business, CIEFL</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-1.5 rounded-full mr-2 flex-shrink-0">
                          <Award className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">Achievements</h4>
                          <p className="text-xs text-gray-700">ODC with 30-140 millions</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-4">
                <Link to="/contact" onClick={handleContactClick}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-sm">
                    Connect with Babu <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Our Values</h2>
          <div className="grid grid-cols-2 gap-3">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm flex flex-col items-center text-center"
              >
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                  <value.icon className="text-primary w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold mb-1">{value.title}</h3>
                <p className="text-xs text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Advantages */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Why Choose Us</h2>
          <div className="space-y-3">
            {advantages.slice(0, 3).map((advantage, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm flex items-start"
              >
                <div className="bg-primary/10 p-1.5 rounded-full mr-2 flex-shrink-0">
                  <Check className="text-primary w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1">{advantage.title}</h3>
                  <p className="text-xs text-gray-700">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Accordion type="single" collapsible className="mt-2">
            <AccordionItem value="more-advantages">
              <AccordionTrigger className="text-sm text-primary hover:no-underline">
                View More Advantages
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2">
                  {advantages.slice(3).map((advantage, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm flex items-start"
                    >
                      <div className="bg-primary/10 p-1.5 rounded-full mr-2 flex-shrink-0">
                        <Check className="text-primary w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold mb-1">{advantage.title}</h3>
                        <p className="text-xs text-gray-700">{advantage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Contact CTA */}
        <div className="bg-secondary/20 p-5 rounded-lg text-center mb-8">
          <h2 className="text-lg font-bold mb-2">Ready to Get Started?</h2>
          <p className="text-sm text-gray-700 mb-4">
            Connect with our team today to discuss how Genzact can support your staffing needs.
          </p>
          <Link to="/contact" onClick={handleContactClick}>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Contact Us Now
            </Button>
          </Link>
        </div>
        
        {/* Contact Info */}
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm text-center">
            <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
              <MapPin className="text-primary w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold mb-1">Our Location</h3>
            <p className="text-xs text-gray-700">Hyderabad, Telangana, India</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Mail className="text-primary w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold mb-1">Email Us</h3>
              <a href="mailto:info@genzact.com" className="text-primary text-xs hover:underline">
                info@genzact.com
              </a>
            </div>
            
            <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Phone className="text-primary w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold mb-1">Call Us</h3>
              <a href="tel:+919666655664" className="text-primary text-xs hover:underline">
                +91 9666 655 664
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Desktop-specific About component
const DesktopAboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-20 px-4 bg-white"
      style={{ position: 'relative' }} // Add position relative to fix framer-motion warning
    >
      <AboutPageSEO />
      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Story</h1>
            <p className="text-lg text-gray-900 mb-6">
              Genzact was founded with a vision to transform the recruitment landscape by providing exceptional 
              staffing solutions that connect businesses with the perfect talents to drive success.
            </p>
            <p className="text-lg text-gray-900 mb-6">
              Since our inception, we've been committed to understanding the unique needs of both businesses 
              and professionals, creating meaningful connections that foster growth and innovation.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-secondary/30 px-6 py-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-primary">8+</span>
                <span className="text-gray-900">Years Experience</span>
              </div>
              <div className="bg-secondary/30 px-6 py-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-primary">500+</span>
                <span className="text-gray-900">Clients</span>
              </div>
              <div className="bg-secondary/30 px-6 py-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-primary">1000+</span>
                <span className="text-gray-900">Placements</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Image component removed as requested */}
          </motion.div>
        </div>
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Layers className="text-primary w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
            <p className="text-gray-900">
              To empower businesses with exceptional talent while providing professionals with meaningful career opportunities.
              We strive to create lasting partnerships built on trust, integrity, and mutual success.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Globe className="text-primary w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h2>
            <p className="text-gray-900">
              To be the leading global staffing solutions provider known for innovation, excellence, and transformative 
              impact on businesses and careers. We envision a world where every company finds its perfect talent match.
            </p>
          </motion.div>
        </div>
        
        {/* Founder Profile */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Meet Our Founder</h2>
            <p className="text-lg text-gray-900 max-w-3xl mx-auto">
              The visionary behind Genzact's success and innovation in the staffing industry.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-2">Babu Karlapudi</h3>
                <p className="text-primary mb-4">Founder & CEO</p>
                <p className="text-gray-900 mb-6">
                  With over 20 years of experience in staffing and ODC operational excellence, Babu founded Genzact with a vision to transform 
                  how businesses approach staffing. His innovative strategies and deep industry insights have 
                  established Genzact as a leader in the recruitment sector.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Professional Experience</h4>
                      <p className="text-sm text-gray-700">20+ years in Staffing and ODC Operational Excellence</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Education</h4>
                      <p className="text-sm text-gray-700">MBA in International Business, CIEFL</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Achievements</h4>
                      <p className="text-sm text-gray-700">ODC with 30-140 millions</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90">
                    Connect with Babu <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              
              <div className="order-1 md:order-2 flex justify-center">
                <img 
                  src="/lovable-uploads/1JYfi6jTInjssYv3HqcOX7l4dQE_-ywUd.jpg" 
                  alt="Babu Karlapudi - Founder & CEO" 
                  className="rounded-xl shadow-md max-w-full h-auto max-h-[400px]" 
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">What We Stand For</h2>
            <p className="text-lg text-gray-900 max-w-3xl mx-auto">
              Our core values guide every interaction and decision at Genzact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-900">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="mb-20 bg-secondary/20 p-10 rounded-xl">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">Our Advantages</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Why Choose Genzact</h2>
            <p className="text-lg text-gray-900 max-w-3xl mx-auto">
              What sets us apart in the competitive landscape of staffing and recruitment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-md flex items-start hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Check className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-gray-900">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-primary/5 p-10 rounded-xl mb-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient">Ready to Get Started?</h2>
          <p className="text-lg text-gray-900 mb-8 max-w-3xl mx-auto">
            Connect with our team today to discuss how Genzact can support your staffing needs
            and help you find the perfect talent for your business.
          </p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              Contact Us Now
            </Button>
          </Link>
        </motion.div>
        
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Location</h3>
            <p className="text-gray-900">Hyderabad, Telangana, India</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <a href="mailto:info@genzact.com" className="text-primary hover:underline">
              info@genzact.com
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <a href="tel:+919666655664" className="text-primary hover:underline">
              +91 9666 655 664
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Main About component that conditionally renders based on screen size
const About = () => {
  const isMobile = useIsMobile();
  
  return isMobile ? <MobileAboutPage /> : <DesktopAboutPage />;
};

const coreValues = [
  {
    title: "Excellence",
    description: "We strive for excellence in every interaction, solution, and relationship.",
    icon: Award
  },
  {
    title: "Integrity",
    description: "We operate with honesty, transparency, and ethical standards in all our dealings.",
    icon: Shield
  },
  {
    title: "Innovation",
    description: "We embrace new ideas and approaches to solve complex staffing challenges.",
    icon: Lightbulb
  },
  {
    title: "Partnership",
    description: "We build lasting relationships based on mutual trust and shared success.",
    icon: Heart
  }
];

const advantages = [
  {
    title: "Industry Expertise",
    description: "Specialized knowledge across multiple sectors, ensuring precise skill matching and industry-relevant solutions."
  },
  {
    title: "Customized Approach",
    description: "Tailored staffing strategies designed specifically for your unique business requirements and challenges."
  },
  {
    title: "Extensive Talent Network",
    description: "Access to a vast pool of pre-vetted professionals across various industries and specializations."
  },
  {
    title: "Quality Assurance",
    description: "Rigorous screening processes that ensure only the most qualified candidates are presented."
  },
  {
    title: "Quick Turnaround",
    description: "Efficient processes that reduce time-to-hire without compromising on quality."
  },
  {
    title: "Ongoing Support",
    description: "Continuous assistance throughout the hiring process and beyond to ensure successful placements."
  }
];

export default About;
