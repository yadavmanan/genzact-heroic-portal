
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Users, Search, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// Define the spline-viewer as a custom JSX element to fix TypeScript errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
      };
    }
  }
}

const Index = () => {
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    toast({
      title: "Welcome to Genzact",
      description: "Discover innovative staffing solutions for your business",
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <spline-viewer url="https://prod.spline.design/Nf4TAFWR06COkaca/scene.splinecode"></spline-viewer>
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Solutions That Matter
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Your trusted partner in IT staffing, recruitment, and consulting services.
            </p>
            <Button className="text-lg px-8 py-6 glass hover:bg-primary/20 transition-all duration-300">
              Explore Services <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/50 w-8 h-8" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container">
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
                className="glass p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "IT Staffing",
    description: "Connect with top tech talent for your projects and long-term roles.",
    icon: Users
  },
  {
    title: "Recruitment Solutions",
    description: "End-to-end recruitment services tailored to your needs.",
    icon: Search
  },
  {
    title: "Consulting Services",
    description: "Strategic guidance and solutions for your business growth.",
    icon: BarChart
  }
];

export default Index;
