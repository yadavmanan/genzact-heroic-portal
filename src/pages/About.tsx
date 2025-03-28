
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Award,
  Heart,
  Users,
  Trophy,
  Star,
  Check,
  ArrowRight,
  ArrowUpRight,
  Globe,
  Compass,
  Handshake,
  Briefcase,
  GraduationCap,
  Languages,
  BookOpen,
  Shield,
  Lightbulb
} from 'lucide-react';

// Define the arrays before using them
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

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-background overflow-hidden"
    >
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Genzact</h1>
            <p className="text-xl text-gray-700 mb-8">
              At Genzact, we connect businesses with exceptional talent and provide comprehensive
              staffing solutions tailored to your unique needs. Our mission is to revolutionize
              the staffing industry through innovative approaches, deep industry expertise, and
              a commitment to building lasting relationships.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                <Button className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md">
                  Our Services <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 transition-all duration-300">
                  Get in Touch <ArrowUpRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-xl"
            >
              <img
                src="/lovable-uploads/b8385a60-ceed-40de-8912-8df00846255a.png"
                alt="Babu K"
                className="w-full rounded-lg object-cover"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold">Babu K</h3>
                <p className="text-primary font-medium">Founder & CEO</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="py-16 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Vision & Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're driven by a clear vision and strong mission to transform the staffing industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Compass className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                To be the leading provider of innovative staffing solutions, setting new industry standards for 
                quality, efficiency, and client satisfaction.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Revolutionize how companies find and retain talent</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Create meaningful connections between businesses and professionals</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Lead with innovation and technology-driven solutions</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Handshake className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To empower organizations with the right talent and staffing strategies that drive growth, 
                innovation, and competitive advantage.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Deliver exceptional value through personalized service</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Build long-term partnerships based on trust and results</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Continuously evolve our methods to exceed expectations</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Core Values</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These fundamental principles guide everything we do at Genzact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Advantages */}
      <section className="py-16 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">The Genzact Advantage</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              What sets us apart from other staffing agencies and makes us the partner of choice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Star className="text-primary mr-2 w-5 h-5" />
                  {advantage.title}
                </h3>
                <p className="text-gray-700">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Expertise</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We specialize in connecting businesses with top talent across a wide range of industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary"
            >
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-3">
                  <Briefcase className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Industry Experience</h3>
                  <p className="text-gray-700">
                    Deep knowledge across multiple sectors including IT, healthcare, manufacturing, 
                    and professional services.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary"
            >
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-3">
                  <Globe className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Global Reach</h3>
                  <p className="text-gray-700">
                    Access to talent networks spanning across continents, enabling us to source 
                    specialized skills from around the world.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary"
            >
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-3">
                  <GraduationCap className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Domain Knowledge</h3>
                  <p className="text-gray-700">
                    Specialized understanding of technical requirements and qualifications across 
                    various professional domains.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workforce?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Connect with our team today to discover how Genzact can help your business find the 
              perfect talent solutions tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md">
                  Contact Us Today <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 transition-all duration-300">
                  Explore Our Services <ArrowUpRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
