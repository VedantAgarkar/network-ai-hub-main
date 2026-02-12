import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import LiquidChrome from './LiquidChrome';
import { useState, useEffect } from 'react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Detect time of day for adaptive brightness
  const [isDaytime, setIsDaytime] = useState(true);

  useEffect(() => {
    const checkTimeOfDay = () => {
      const hour = new Date().getHours();
      // Daytime: 6 AM to 6 PM (6-18), Nighttime: 6 PM to 6 AM (18-6)
      setIsDaytime(hour >= 6 && hour < 18);
    };

    checkTimeOfDay();
    // Check every minute for time changes
    const interval = setInterval(checkTimeOfDay, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* LiquidChrome Background */}
      <div className="absolute inset-0">
        <LiquidChrome
          baseColor={[0.1, 0.1, 0.1]}
          speed={1}
          amplitude={0.6}
          interactive={true}
        />
        {/* Adaptive dimming overlay - reduces brightness at night */}
        <div 
          className="absolute inset-0 bg-black transition-opacity duration-1000"
          style={{ opacity: isDaytime ? 0 : 0.6 }}
        />
      </div>
      
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-white px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span className="text-sm font-bold text-white">Open to opportunities</span>
              </div>
            </div>

            <div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-4 text-white">
                Vedant Umesh
                <br />
                <span className="bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">
                  Agarkar
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white font-bold">
                AI/ML & Networking Enthusiast
              </p>
              <p className="text-lg text-white font-bold mt-2">
                Streamlit Developer | Network Enthusiast 
              </p>
            </div>

            <p className="text-lg text-white font-bold max-w-xl leading-relaxed">
              Building intelligent solutions at the intersection of artificial intelligence 
              and network infrastructure. Passionate about creating scalable systems that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                <Download className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in delay-200">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent-foreground/30 rounded-full blur-3xl animate-pulse" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Vedant Umesh Agarkar"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-lg border border-primary/20">
                Developer
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold shadow-lg border border-accent/20">
                AI Enthusiast
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
