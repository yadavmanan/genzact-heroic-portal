
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Phone } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-24 px-4"
    >
      <div className="container mx-auto mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">About Genzact</h1>
        
        <div className="glass p-8 rounded-lg mb-12">
          <p className="text-xl text-gray-300 mb-6">
            Genzact is a premier staffing and recruitment firm, connecting businesses 
            with top talent in the IT and technology sectors. With years of industry experience, 
            we understand the unique challenges companies face in finding and retaining skilled professionals.
          </p>
          <p className="text-xl text-gray-300">
            Our mission is to simplify the recruitment process and provide solutions that matter 
            for both businesses and job seekers. We pride ourselves on our personalized approach 
            and commitment to excellence.
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mb-6">Leadership</h2>
        <div className="glass p-8 rounded-lg flex flex-col md:flex-row items-center mb-12">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8">
            <img 
              src="https://placehold.co/400x400/002244/ffffff?text=BK" 
              alt="Babu Karlapudi" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Babu Karlapudi</h3>
            <p className="text-primary mb-4">CEO & Founder</p>
            <p className="text-gray-300 mb-4">
              With over 15 years of experience in the staffing industry, Babu has built Genzact 
              from the ground up, focusing on quality relationships and exceptional service.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-2" />
                <span>9666655664</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-2" />
                <span>babu@genzact.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="glass p-8 rounded-lg">
          <div className="flex items-start mb-4">
            <MapPin className="w-6 h-6 text-primary mr-3 mt-1" />
            <div>
              <p className="text-white">Plot no. 43, Sri Singi Reddy Swami Reddynagar,</p>
              <p className="text-white">ECIL, Hyderabad-500062</p>
              <p className="text-white">Telangana, India</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <Mail className="w-6 h-6 text-primary mr-3" />
            <p className="text-white">info@genzact.com</p>
          </div>
          <div className="flex items-center">
            <User className="w-6 h-6 text-primary mr-3" />
            <p className="text-white">www.genzact.com</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
