import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDayNight } from "@/hooks/useDayNight"; 

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isDaytime = useDayNight();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navBgClass = isScrolled
    ? (isDaytime ? "bg-white/95 border-purple-100" : "bg-[#1a1425]/95 border-purple-900/30") + " backdrop-blur-md shadow-lg border-b"
    : "bg-transparent";
    
  // Text color: Darker purple on day+scrolled (white bg), otherwise Lighter purple (dark bg or transparent)
  const textColorClass = (isScrolled && isDaytime) ? "text-purple-600 hover:text-purple-500" : "text-purple-400 hover:text-purple-300";
  const logoColorClass = (isScrolled && isDaytime) ? "from-purple-600 to-indigo-600" : "from-primary to-accent-foreground";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className={`text-2xl font-bold bg-gradient-to-r ${logoColorClass} bg-clip-text text-transparent transition-all duration-300`}
          >
            VA
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`px-4 py-2 font-bold transition-colors rounded-lg hover:bg-purple-500/10 ${textColorClass}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className={`h-6 w-6 ${textColorClass}`} /> : <Menu className={`h-6 w-6 ${textColorClass}`} />}
          </Button>
        </div>

        {isOpen && (
          <div className={`md:hidden py-4 border-t animate-fade-in ${isDaytime ? 'border-purple-100' : 'border-purple-900/30'}`}>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-3 font-bold rounded-lg transition-colors hover:bg-purple-500/10 ${textColorClass}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
