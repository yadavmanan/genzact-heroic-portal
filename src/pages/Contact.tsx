
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, ExternalLink, MessageSquare } from 'lucide-react';
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
    // Create WhatsApp message
    const message = `Hello, my name is ${formData.name}. ${formData.message}. You can reach me at ${formData.email} or ${formData.phone}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919666655664?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be redirected to send your message via WhatsApp!",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  useEffect(() => {
    // Initialize Google Maps iframe after component mount
    const mapIframe = document.getElementById('google-map-iframe');
    if (mapIframe) {
      mapIframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1681559736227!2d78.57462787488545!3d17.458500100987806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9be8f7a4d3a9%3A0x3f95b03c9a276be5!2sECIL%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1712091436937!5m2!1sen!2sin');
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

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
                    <a 
                      href="https://maps.google.com/?q=ECIL,+Hyderabad,+Telangana+500062" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary flex items-center mt-2 hover:underline"
                    >
                      View on Google Maps <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <a href="mailto:babu@genzact.com" className="text-gray-300 hover:text-primary">babu@genzact.com</a>
                    <p className="text-gray-300">
                      <a href="mailto:info@genzact.com" className="hover:text-primary">info@genzact.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <a href="tel:+919666655664" className="text-gray-300 hover:text-primary">+91 9666655664</a>
                    <div className="flex mt-2 space-x-4">
                      <a 
                        href="tel:+919666655664" 
                        className="flex items-center text-primary hover:underline"
                      >
                        <Phone className="w-4 h-4 mr-1" /> Call Now
                      </a>
                      <a 
                        href="https://wa.me/919666655664" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        <MessageSquare className="w-4 h-4 mr-1" /> WhatsApp
                      </a>
                    </div>
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
            
            {/* Google Maps Embed */}
            <div className="glass p-2 rounded-lg overflow-hidden h-[300px]">
              <iframe 
                id="google-map-iframe"
                className="w-full h-full rounded-lg"
                title="Genzact Office Location" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className="glass p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-gray-300 mb-4">Fill out this form and click "Send Message" to connect with us directly via WhatsApp.</p>
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
                Send Message via WhatsApp
              </Button>
              
              <div className="mt-4 text-center text-gray-400 text-sm">
                <p>Or contact us directly:</p>
                <div className="flex justify-center mt-2 space-x-4">
                  <a 
                    href="tel:+919666655664" 
                    className="flex items-center text-primary hover:underline"
                  >
                    <Phone className="w-4 h-4 mr-1" /> Call Now
                  </a>
                  <a 
                    href="https://wa.me/919666655664" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline"
                  >
                    <MessageSquare className="w-4 h-4 mr-1" /> WhatsApp
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const faqs = [
  {
    question: "What areas do you provide staffing services for?",
    answer: "We specialize in IT and technology staffing across India, with a focus on software development, cloud engineering, data science, and IT infrastructure roles."
  },
  {
    question: "How quickly can you find candidates for our open positions?",
    answer: "Depending on the role complexity, we typically present qualified candidates within 48-72 hours of finalizing your requirements."
  },
  {
    question: "Do you offer contract-to-hire options?",
    answer: "Yes, we provide flexible engagement models including contract, contract-to-hire, and direct placement to suit your specific needs."
  },
  {
    question: "What makes Genzact different from other staffing agencies?",
    answer: "Our deep technical expertise, personalized approach, and extensive network in the tech industry allow us to find candidates that aren't just qualified on paper but are the right cultural fit."
  }
];

export default Contact;
