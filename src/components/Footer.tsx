import { Heart } from "lucide-react";
import { useDayNight } from "@/hooks/useDayNight";

const Footer = () => {
  const isDaytime = useDayNight();
  
  return (
    <footer 
      className="border-t border-border py-8 transition-colors duration-1000"
      style={{ 
        backgroundColor: isDaytime ? '#ffffff' : '#170d27',
        color: isDaytime ? '#1a1a1a' : '#ffffff'
      }}
    >
      <div className="container px-4">
        <div className="text-center space-y-4">
          <p className={`flex items-center justify-center gap-2 ${isDaytime ? 'text-muted-foreground' : 'text-gray-400'}`}>
            Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> by Vedant Umesh Agarkar
          </p>
          <p className={`text-sm ${isDaytime ? 'text-muted-foreground' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
