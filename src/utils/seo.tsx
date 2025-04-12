
import { Helmet } from 'react-helmet-async';
import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  pathname?: string;
  imageUrl?: string;
}

export const PageSEO: React.FC<SEOProps> = ({ 
  title = "Genzact - Premium Manpower Solutions",
  description = "Genzact - Premium Manpower Consulting, Payroll Management & RPO Services",
  keywords = "manpower solutions, staffing, recruitment, HR consulting",
  pathname = "",
  imageUrl = "/og-image.png"
}) => {
  const url = `https://genzact.com${pathname}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export const HomePageSEO = () => (
  <PageSEO
    title="Genzact - Premium Manpower Solutions | Staffing Excellence"
    description="Genzact provides premium manpower consulting, payroll management, and RPO services with 8+ years of excellence and 1000+ successful placements."
    keywords="manpower services, staffing agency, recruitment solutions, RPO services, payroll management, HR consulting, talent acquisition"
    pathname="/"
  />
);

export const AboutPageSEO = () => (
  <PageSEO
    title="About Genzact | Our Story, Mission & Values"
    description="Learn about Genzact's journey, our mission, vision, and values. With 8+ years of excellence and 20+ years of leadership experience in staffing."
    keywords="about Genzact, manpower consulting company, staffing mission, recruitment values, Babu Karlapudi, staffing vision"
    pathname="/about"
  />
);

export const ServicesPageSEO = () => (
  <PageSEO
    title="Our Services | Genzact Premium Manpower Solutions"
    description="Explore Genzact's comprehensive services including RPO, IT Staffing, Payroll Management, Contract Staffing, and more with 96% client satisfaction."
    keywords="manpower services, staffing solutions, RPO services, IT staffing, payroll management, contract staffing, recruitment process outsourcing"
    pathname="/services"
  />
);

export const ContactPageSEO = () => (
  <PageSEO
    title="Contact Genzact | Get in Touch With Our Team"
    description="Contact Genzact for premium manpower solutions. Reach out to discuss how we can help with your staffing, recruitment, and HR needs."
    keywords="contact Genzact, staffing inquiry, recruitment consultation, HR services contact, manpower solutions"
    pathname="/contact"
  />
);
