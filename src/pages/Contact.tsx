
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Send, MessageSquare, Clock
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from '@/hooks/use-mobile';

const Contact = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/+919666655664?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "Message sent via WhatsApp",
      description: "We'll get back to you as soon as possible!",
    });
  };

  const openDialer = () => {
    window.location.href = 'tel:+919666655664';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 px-4 bg-background"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Get in Touch</h1>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto">
            Have questions about our services? Ready to get started? Our team is here to help.
          </p>
        </div>

        <div className={`grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-2'} gap-8 mb-16`}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  required 
                  className="w-full border-gray-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  required 
                  className="w-full border-gray-300"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
                  Phone Number
                </label>
                <Input 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9000000000" 
                  required 
                  className="w-full border-gray-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                  Your Message
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs..." 
                  rows={isMobile ? 3 : 4} 
                  required 
                  className="w-full border-gray-300"
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-5 w-5" /> Send via WhatsApp
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Office Location</h3>
                    <p className="text-gray-900">Hyderabad, Telangana, India</p>
                    <p className="text-gray-900">ECIL, Sri Singi Reddy Swami Reddynagar, Secunderabad, Telangana 500062</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <a href="mailto:info@genzact.com" className="text-primary hover:underline">
                      info@genzact.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <button 
                      onClick={openDialer}
                      className="text-primary hover:underline focus:outline-none"
                    >
                      +91 9666 655 664
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 shrink-0">
                    <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                    <a 
                      href="https://wa.me/+919666655664" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-primary hover:underline"
                    >
                      +91 9666 655 664
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-900">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-900">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Image */}
            <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="IT Professional at work" 
                className="w-full h-64 sm:h-80 object-cover rounded"
              />
            </div>
            
            {/* Google Map */}
            <div className="bg-white p-2 rounded-lg shadow-md overflow-hidden h-64 sm:h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1487886271765!2d78.57019087570605!3d17.455354800720595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9c7a6803c695%3A0xb29a5a0c1a8c66f6!2sECIL%2C%20Sri%20Singi%20Reddy%20Swami%20Reddynagar%2C%20Secunderabad%2C%20Telangana%20500062!5e0!3m2!1sen!2sin!4v1717075152379!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
