
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

    // Trigger page transition animations
    document.body.classList.add('page-transition-active');
    setTimeout(() => {
      document.body.classList.remove('page-transition-active');
    }, 500);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
