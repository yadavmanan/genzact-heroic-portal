
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
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
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-24 px-4"
    >
      <div className="container mx-auto mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="glass p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium">Address</h3>
                    <p className="text-gray-300">Plot no. 43, Sri Singi Reddy Swami Reddynagar,</p>
                    <p className="text-gray-300">ECIL, Hyderabad-500062, Telangana</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-gray-300">babu@genzact.com</p>
                    <p className="text-gray-300">info@genzact.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-gray-300">+91 9666655664</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-300">Saturday: 10am - 2pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white rounded-lg block w-full p-3"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white rounded-lg block w-full p-3"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white rounded-lg block w-full p-3"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-white/5 border border-white/10 text-white rounded-lg block w-full p-3"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full text-lg px-8 py-6 glass hover:bg-primary/20 transition-all duration-300">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
