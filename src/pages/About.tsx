import { motion } from 'framer-motion';
import { User, Mail, MapPin, Calendar, Award, Target, Users, Briefcase, CheckCircle, PhoneCall, BarChart, Globe, BarChart2, Layers, LineChart, Landmark, TrendingUp, UserCheck, Zap, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import PDFDownloadLink from '@/components/PDFDownloadLink';

const About = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-24 px-4"
    >
      <div className="container mx-auto mt-20">
        <motion.h1 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold mb-8 text-gradient"
        >
          About Genzact
        </motion.h1>
        
        {/* Company Overview */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="glass p-8 rounded-lg mb-12"
        >
          <p className="text-xl text-gray-900 mb-6">
            Genzact is a premier staffing and recruitment firm, connecting businesses 
            with top talent in the IT and technology sectors. With years of industry experience, 
            we understand the unique challenges companies face in finding and retaining skilled professionals.
          </p>
          <p className="text-xl text-gray-900">
            Our mission is to simplify the recruitment process and provide solutions that matter 
            for both businesses and job seekers. We pride ourselves on our personalized approach 
            and commitment to excellence.
          </p>
        </motion.div>
        
        {/* Our Vision & Mission */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Vision</h3>
              </div>
              <p className="text-gray-900">
                To become the most trusted partner in talent acquisition for technology companies, 
                known for our integrity, quality of service, and the success of the professionals 
                we place and the companies we serve.
              </p>
            </div>
            <div className="glass p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Mission</h3>
              </div>
              <p className="text-gray-900">
                To connect exceptional talent with innovative companies through a transparent and 
                efficient recruitment process that values the needs and aspirations of both parties, 
                creating lasting professional relationships.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Our Core Values */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass p-6 rounded-lg text-center"
              >
                <value.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-900">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Company Timeline */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                } relative`}
              >
                <div className={`glass p-6 rounded-lg max-w-md ${
                  index % 2 === 0 ? 'mr-6 text-right' : 'ml-6'
                }`}>
                  <div className="flex items-center mb-3 justify-start">
                    <Calendar className={`w-5 h-5 text-primary ${
                      index % 2 === 0 ? 'order-2 ml-2' : 'mr-2'
                    }`} />
                    <h3 className="text-xl font-bold">{item.year}</h3>
                  </div>
                  <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-gray-900">{item.description}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Leadership */}
        <motion.h2 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          Leadership
        </motion.h2>
        <motion.div 
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="glass p-8 rounded-lg mb-12"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-1">Babu Karlapudi</h3>
                <p className="text-primary mb-2">CEO & Founder</p>
                <p className="text-gray-700 mb-4">
                  <span className="font-medium">20+ Years Experience in US IT Staffing</span>
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    <Globe className="w-4 h-4 mr-1" /> USA
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    <Globe className="w-4 h-4 mr-1" /> Canada
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    <Globe className="w-4 h-4 mr-1" /> Mexico
                  </span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="relative pl-4 border-l-4 border-primary mb-6"
            >
              <p className="text-gray-900 mb-4 italic">
                "My journey in the IT staffing industry has been driven by a passion to bridge the gap between exceptional talent and innovative companies. At Genzact, we're not just filling positions—we're building careers and helping businesses thrive."
              </p>
            </motion.div>
            
            <motion.p 
              variants={slideIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-gray-900 mb-6 leading-relaxed"
            >
              As a results-driven Business Head with over 20 years of experience in the US IT Staffing industry, 
              Babu has led multiple IT Staffing divisions and ODCs, demonstrating deep expertise in the U.S. market. 
              His impressive track record spans multiple geographical regions including the USA, Canada, and Mexico. 
              With a strategic mindset, operational expertise, and P&L responsibility, he has consistently integrated 
              and optimized operations across regions, elevating revenue generation processes.
            </motion.p>
            
            {/* Expertise Sections */}
            <div className="space-y-4 mb-8">
              {leadershipSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + (index * 0.1) }}
                  className="glass rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <div className="flex items-center">
                      <section.icon className="w-5 h-5 text-primary mr-3" />
                      <h4 className="text-lg font-medium">{section.title}</h4>
                    </div>
                    <div className={`transform transition-transform ${expandedSection === section.id ? 'rotate-180' : ''}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-4"
                    >
                      <ul className="space-y-3">
                        {section.points.map((point, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-start"
                          >
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                            <p className="text-gray-900">{point}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center">
                <PhoneCall className="w-5 h-5 text-primary mr-2" />
                <a href="tel:+919666655664" className="hover:text-primary">9666655664</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-2" />
                <a href="mailto:babu@genzact.com" className="hover:text-primary">babu@genzact.com</a>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Achievements */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="glass p-6 rounded-lg text-center"
              >
                <h3 className="text-4xl font-bold text-primary mb-2">{achievement.number}</h3>
                <p className="text-gray-900">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="glass p-10 rounded-lg text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-gradient">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-900 mb-8 max-w-3xl mx-auto">
            Whether you're looking for exceptional talent or your next career opportunity,
            we're here to help you succeed.
          </p>
          <Link to="/contact">
            <Button className="text-lg px-8 py-6 bg-primary text-white hover:bg-primary/90 transition-all duration-300">
              Get in Touch
            </Button>
          </Link>
        </motion.div>
        
        {/* Contact Us */}
        <motion.h2 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
          className="text-3xl font-bold mb-6 mt-16"
        >
          Contact Us
        </motion.h2>
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="glass p-8 rounded-lg"
        >
          <div className="flex items-start mb-4">
            <MapPin className="w-6 h-6 text-primary mr-3 mt-1" />
            <div>
              <p className="text-gray-900">Plot no. 43, Sri Singi Reddy Swami Reddynagar,</p>
              <p className="text-gray-900">ECIL, Hyderabad-500062</p>
              <p className="text-gray-900">Telangana, India</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <Mail className="w-6 h-6 text-primary mr-3" />
            <a href="mailto:info@genzact.com" className="text-gray-900 hover:text-primary">info@genzact.com</a>
          </div>
          <div className="flex items-center">
            <User className="w-6 h-6 text-primary mr-3" />
            <a href="https://www.genzact.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-primary">www.genzact.com</a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const coreValues = [
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from candidate selection to client service.",
    icon: Award
  },
  {
    title: "Integrity",
    description: "We operate with transparency and honesty in all our interactions and decisions.",
    icon: CheckCircle
  },
  {
    title: "Relationships",
    description: "We build lasting partnerships based on trust, communication, and mutual success.",
    icon: Users
  },
  {
    title: "Innovation",
    description: "We continuously evolve our processes and services to address changing industry needs.",
    icon: Target
  },
  {
    title: "Commitment",
    description: "We are dedicated to delivering on our promises and exceeding expectations.",
    icon: Briefcase
  }
];

const timeline = [
  {
    year: "2015",
    title: "Foundation",
    description: "Genzact was founded with a vision to transform IT staffing in India."
  },
  {
    year: "2017",
    title: "Expansion",
    description: "Expanded our services to include end-to-end recruitment solutions."
  },
  {
    year: "2019",
    title: "Growth Milestone",
    description: "Successfully placed over 100 IT professionals in leading tech companies."
  },
  {
    year: "2021",
    title: "Service Innovation",
    description: "Launched specialized consulting services for tech startups and enterprises."
  },
  {
    year: "2023",
    title: "New Headquarters",
    description: "Moved to our current headquarters in Hyderabad to accommodate our growing team."
  }
];

const achievements = [
  {
    number: "500+",
    description: "IT Professionals Placed"
  },
  {
    number: "50+",
    description: "Corporate Clients"
  },
  {
    number: "95%",
    description: "Client Retention Rate"
  },
  {
    number: "8+",
    description: "Years of Excellence"
  }
];

const leadershipSections = [
  {
    id: "strategic",
    title: "Strategic Leadership & Integration",
    icon: Target,
    points: [
      "Regional Integration: Lead the integration and alignment of operations across all geographic regions, ensuring seamless collaboration and sharing of best practices.",
      "Strategic Planning: Develop, execute, and iterate on comprehensive business strategies for US IT staffing divisions.",
      "Expansion Strategy: Identify new market opportunities and grow the company's presence across different U.S. states and cities."
    ]
  },
  {
    id: "revenue",
    title: "Revenue Growth & Business Development",
    icon: TrendingUp,
    points: [
      "Client Acquisition & Retention: Spearhead business development efforts, building strong relationships with key clients.",
      "Revenue Optimization: Analyze revenue streams and optimize pricing strategies, staffing models, and service offerings.",
      "Market Leadership: Position the company as a thought leader in the IT staffing industry through strategic partnerships."
    ]
  },
  {
    id: "financial",
    title: "P&L Management & Financial Stewardship",
    icon: Landmark,
    points: [
      "Financial Ownership: Manage the P&L for the US IT staffing business, setting and meeting financial targets.",
      "Cost Management: Optimize staffing costs, operational expenditures, and overhead while maintaining high-quality service delivery.",
      "Forecasting & Reporting: Provide detailed forecasts, reports, and analyses of financial performance to the CEO."
    ]
  },
  {
    id: "operational",
    title: "Operational Excellence & Process Improvement",
    icon: Layers,
    points: [
      "End-to-End Staffing Process: Oversee the entire staffing process, from talent sourcing and recruitment to placement and client servicing.",
      "Automation & Innovation: Introduce technological solutions and data-driven processes to improve operational efficiency.",
      "Best Practices & Compliance: Ensure high standards of compliance, ethical staffing practices, and quality assurance."
    ]
  },
  {
    id: "team",
    title: "Team Leadership & Development",
    icon: Users,
    points: [
      "High-Performance Culture: Lead, motivate, and mentor a diverse team of professionals across multiple regions.",
      "Talent Development: Identify skill gaps and development opportunities within the team.",
      "Cross-Functional Collaboration: Work closely with other departments to ensure smooth execution of business strategies."
    ]
  },
  {
    id: "stakeholder",
    title: "Stakeholder Engagement & Communication",
    icon: UserCheck,
    points: [
      "Client & Stakeholder Relations: Build and nurture relationships with key external stakeholders.",
      "Internal Communication: Foster clear, transparent communication between regions, ensuring teams are aligned."
    ]
  },
  {
    id: "data",
    title: "Data-Driven Decision Making & Analysis",
    icon: BarChart,
    points: [
      "Analytics & Insights: Leverage data and analytics to drive decision-making across all regions.",
      "Market Research: Regularly evaluate staffing trends, client feedback, competitor performance, and market conditions."
    ]
  }
];

export default About;

