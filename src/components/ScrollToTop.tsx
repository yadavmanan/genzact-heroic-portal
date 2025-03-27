
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

    // Add a small delay before triggering animations to ensure smoother page transitions
    setTimeout(() => {
      // Trigger page transition animations
      document.body.classList.add('page-transition-active');
      
      // Remove the class after animation completes
      setTimeout(() => {
        document.body.classList.remove('page-transition-active');
      }, 1000); // Increased animation duration
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
