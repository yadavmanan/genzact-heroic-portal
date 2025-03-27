
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component scrolls to top when route changes and supports smooth animations
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top with animation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Trigger page transition animations with improved timing
    document.body.classList.add('page-transition-active');
    
    // Use a slightly longer duration for the transition effect
    setTimeout(() => {
      document.body.classList.remove('page-transition-active');
    }, 650);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
