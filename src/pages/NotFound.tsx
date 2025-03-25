
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <Button 
          onClick={handleRedirect}
          className="bg-primary hover:bg-primary/90 inline-flex items-center"
        >
          <Home className="mr-2 h-4 w-4" />
          Return to Home
        </Button>
      </div>
    </motion.div>
  );
};

export default NotFound;
