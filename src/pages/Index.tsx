import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronDown, 
  Briefcase, 
  Calculator, 
  Search, 
  Check, 
  Star, 
  ArrowUpRight, 
  Laptop, 
  Factory, 
  Users, 
  Trophy, 
  Clock, 
  Zap,
  CheckCircle,
  BarChart,
  Globe,
  CircleUser,
  HardHat
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax effect values
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const workersImageY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Animated counter state
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    toast({
      title: "Welcome to Genzact",
      description: "Discover innovative staffing solutions for your business",
    });

    // Animated counters
    const projectsInterval = setInterval(() => {
      setProjectsCount(prev => prev < 200 ? prev + 5 : 200);
    }, 30);

    const clientsInterval = setInterval(() => {
      setClientsCount(prev => prev < 50 ? prev + 1 : 50);
    }, 60);

    const satisfactionInterval = setInterval(() => {
      setSatisfactionCount(prev => prev < 95 ? prev + 1 : 95);
    }, 40);

    return () => {
      clearInterval(projectsInterval);
      clearInterval(clientsInterval);
      clearInterval(satisfactionInterval);
    };
  }, []);

  const handleContactClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Hero Section with Parallax and Worker Images in separate positions */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: heroImageScale }}
          className="absolute inset-0 w-full h-full"
        >
          <div 
            className="w-full h-full bg-gray-50 bg-opacity-50"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'overlay'
            }}
          ></div>
        </motion.div>
        
        {/* Worker with Yellow Safety Hat - Right Side */}
        <motion.div 
          className="absolute z-20 right-10 bottom-16 md:right-32 md:bottom-24 w-40 md:w-72 shadow-2xl rounded-lg overflow-hidden border-4 border-white"
          style={{ y: workersImageY }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <AspectRatio ratio={1/1}>
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Construction worker with yellow safety hat" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </motion.div>
        
        {/* Additional Worker Image - Left Side */}
        <motion.div 
          className="absolute z-20 left-10 top-16 md:left-32 md:top-24 w-40 md:w-60 shadow-2xl rounded-lg overflow-hidden border-4 border-white rotate-3"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <AspectRatio ratio={4/3}>
            <img 
              src="https://images.unsplash.com/photo-1529178232277-91597c325b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Team of construction workers with white safety hats" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </motion.div>
        
        <div className="container relative z-10">
          <motion.div
            style={{ y: heroTextY, opacity: heroOpacity }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-primary/10 p-3 rounded-full mr-2"
              >
                <HardHat className="w-8 h-8 text-primary" />
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800">
                Manpower <span className="text-gradient">Solutions</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto backdrop-blur-sm bg-white/60 p-3 rounded-lg">
              Your trusted partner in Manpower Consulting, Payroll Management, and RPO Services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                <Button className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md">
                  Explore Services <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 transition-all duration-300">
                  Get in Touch <ArrowUpRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-700 w-8 h-8" />
        </div>
      </section>

      {/* Animated Stats Section - Adding worker image here too */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background relative">
        <div className="container">
          {/* New Worker Image - Center Right */}
          <motion.div 
            className="absolute z-10 right-4 md:right-12 top-1/2 transform -translate-y-1/2 w-32 md:w-48 shadow-xl rounded-lg overflow-hidden border-2 border-white -rotate-2 hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <AspectRatio ratio={3/4}>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Construction worker analyzing plans" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-5xl font-bold mb-2 text-primary">{projectsCount}+</h3>
              <p className="text-xl text-gray-600">Successful Placements</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-5xl font-bold mb-2 text-primary">{clientsCount}+</h3>
              <p className="text-xl text-gray-600">Happy Clients</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Star className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-5xl font-bold mb-2 text-primary">{satisfactionCount}%</h3>
              <p className="text-xl text-gray-600">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D Carousel Services Section with worker image */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20 relative">
        {/* New Worker Image - Left side */}
        <motion.div 
          className="absolute z-10 left-4 md:left-12 top-1/3 w-32 md:w-56 shadow-xl rounded-lg overflow-hidden border-3 border-white rotate-3 hidden md:block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <AspectRatio ratio={3/4}>
            <img 
              src="https://images.unsplash.com/photo-1574009439308-9608847ce433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Construction worker with safety equipment" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </motion.div>
        
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

          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 50, rotateY: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 h-80 rounded-lg shadow-md flex flex-col"
                  >
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                    <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="flex items-center text-primary hover:underline mt-auto">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* How We Work Section with worker image */}
      <section className="py-24 bg-white relative">
        {/* New Construction Worker Image - Bottom right */}
        <motion.div 
          className="absolute z-10 right-8 md:right-24 bottom-12 w-36 md:w-64 shadow-xl rounded-lg overflow-hidden border-2 border-white rotate-6 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <AspectRatio ratio={1/1}>
            <img 
              src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Construction workers collaborating on site" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </motion.div>
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures we find the perfect talent match for your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * index }}
                className="relative"
              >
                {/* Number Circle with 3D effect */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 text-white text-3xl font-bold flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>
                
                {/* Line connector */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-0 left-[calc(50%+3rem)] w-[calc(100%-2rem)] h-0.5 bg-primary/30"></div>
                )}
                
                <div className="bg-white rounded-lg shadow-md p-8 pt-14 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <step.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
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
                  className="flex items-start bg-secondary/30 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
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
              className="bg-white p-8 rounded-lg flex flex-col items-center justify-center text-center shadow-md transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
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
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-secondary/40 p-4 rounded-lg"
                >
                  <h4 className="text-4xl font-bold text-primary mb-2">95%</h4>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-secondary/40 p-4 rounded-lg"
                >
                  <h4 className="text-4xl font-bold text-primary mb-2">200+</h4>
                  <p className="text-sm text-gray-600">Successful Placements</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-secondary/40 p-4 rounded-lg"
                >
                  <h4 className="text-4xl font-bold text-primary mb-2">48h</h4>
                  <p className="text-sm text-gray-600">Average Response Time</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-secondary/40 p-4 rounded-lg"
                >
                  <h4 className="text-4xl font-bold text-primary mb-2">15+</h4>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped.
            </p>
          </motion.div>

          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none">
                    <CardContent className="p-6">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-secondary/30 p-8 rounded-lg text-center relative"
                      >
                        <div className="mb-6 text-6xl text-primary/20 font-serif">"</div>
                        <p className="text-xl italic text-gray-700 mb-6">{testimonial.quote}</p>
                        <div className="flex items-center justify-center">
                          <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mr-3">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-gray-600">{testimonial.position}</p>
                          </div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA Section with 3D Animation */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            className="bg-white p-12 rounded-lg text-center shadow-md relative z-10"
          >
            {/* Animated background elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full z-0"
            />
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 0.9, 1],
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full z-0"
            />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Ready to Transform Your Workforce?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Connect with our team today to discover how Genzact can help your business find the 
                perfect talent solutions for your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" onClick={handleContactClick}>
                  <Button className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md">
                    Get in Touch <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="text-lg px-8 py-6 bg-white hover:bg-gray-100 text-primary border border-primary transition-all duration-300">
                    Our Services <ArrowUpRight className="ml-2" />
                  </Button>
                </Link>
              </div>
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
            {clientNames.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, 2, 0, -2, 0],
                  transition: { duration: 0.5 }
                }}
                className="bg-white p-6 rounded-lg shadow-md text-center client-logo w-64"
              >
                <h3 className="text-xl font-bold text-animate">{client}</h3>
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
  },
  {
    title: "Domestic IT Requirements",
    description: "Specialized IT staffing solutions for technology roles and projects.",
    icon: Laptop
  },
  {
    title: "On-Call Services",
    description: "Immediate staffing solutions for urgent industrial requirements.",
    icon: Factory
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

const workflowSteps = [
  {
    title: "Understand Requirements",
    description: "We thoroughly analyze your needs to understand the specific skills and experience required.",
    icon: Search
  },
  {
    title: "Source Candidates",
    description: "Our experts use advanced tools and networks to find the perfect candidates.",
    icon: Users
  },
  {
    title: "Evaluate & Screen",
    description: "Rigorous evaluation ensures only the best candidates move forward.",
    icon: CheckCircle
  },
  {
    title: "Placement & Support",
    description: "We manage the entire onboarding process and provide ongoing support.",
    icon: Zap
  }
];

const testimonials = [
  {
    quote: "Genzact has been instrumental in helping us build our tech team. Their understanding of our requirements and the quality of candidates they provide is exceptional.",
    name: "Raj Kumar",
    position: "CTO, Noratel"
  },
  {
    quote: "The dedicated team at Genzact made our recruitment process smooth and efficient. They found us the perfect candidates in record time.",
    name: "Anita Sharma",
    position: "HR Manager, Thefirms.in"
  },
  {
    quote: "I've worked with many staffing agencies, but Genzact stands out for their personalized approach and commitment to finding the right fit for our company.",
    name: "Vikram Singh",
    position: "Operations Director, TechSolve"
  }
];

const clientNames = ["Noratel", "Thefirms.in", "TechSolve", "InnovateX"];

export default Index;
