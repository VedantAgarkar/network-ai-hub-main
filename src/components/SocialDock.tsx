import { Github, Linkedin, Mail } from 'lucide-react';
import { useDayNight } from '@/hooks/useDayNight';

const SocialDock = () => {
  const isDaytime = useDayNight();
  
  return (
    <div className="fixed left-6 bottom-0 top-0 pointer-events-none z-50 hidden xl:flex flex-col justify-center animate-fade-in">
      <div className="pointer-events-auto flex flex-col gap-5 p-2 rounded-full border shadow-2xl transition-colors duration-500 mb-20"
           style={{
             backgroundColor: isDaytime ? 'rgba(255, 255, 255, 0.4)' : 'rgba(23, 13, 39, 0.4)',
             borderColor: isDaytime ? 'rgba(109, 40, 217, 0.2)' : 'rgba(168, 85, 247, 0.3)',
             backdropFilter: 'blur(12px)'
           }}
      >
        {[
          { icon: Linkedin, link: "https://www.linkedin.com/in/vedant-agarkar-786b81310", label: "LinkedIn" },
          { icon: Github, link: "https://github.com/", label: "GitHub" },
          { icon: Mail, link: "#contact", label: "Email", isScroll: true },
        ].map((item, i) => (
          <a 
            key={i}
            href={item.link}
            target={item.isScroll ? "_self" : "_blank"}
            rel="noreferrer"
            onClick={(e) => {
              if (item.isScroll) {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${
              isDaytime 
                ? 'bg-white shadow-sm text-primary hover:shadow-md hover:shadow-primary/30 border border-primary/10' 
                : 'bg-[#2a2438] text-white hover:shadow-lg hover:shadow-purple-500/40 border border-purple-500/40'
            }`}
          >
            <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className={`absolute left-14 px-2 py-1 rounded text-xs font-bold opacity-0 -translate-x-4 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 ${
              isDaytime ? 'bg-primary text-white shadow-md' : 'bg-purple-500 text-white shadow-lg'
            }`}>
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialDock;
