
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Enhanced component for smoother scrolling and page transitions
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top with enhanced animation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Improved page transition animations with opacity
    document.body.classList.add('page-transition-active');
    
    // Add opacity transition for smoother page changes
    document.body.style.opacity = "0.95";
    
    setTimeout(() => {
      document.body.classList.remove('page-transition-active');
      document.body.style.opacity = "1";
    }, 300);

    // Ensure proper cleanup on unmount
    return () => {
      document.body.classList.remove('page-transition-active');
      document.body.style.opacity = "1";
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
