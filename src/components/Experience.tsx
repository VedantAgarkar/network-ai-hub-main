import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MagnetLines from './MagnetLines';
import { useState, useEffect } from 'react';

const experiences = [
  {
    title: "AI/ML Using Python Internship",
    company: "Sumago Infotech Pvt. Ltd.",
    location: "On-site",
    duration: "June 2025 - August 2025",
    description: "Working with Python-based ML workflows and development tasks, implementing machine learning models and optimizing AI solutions.",
    type: "Completed",
  },
  {
    title: "Green Skills in AI and Machine Learning",
    company: "Virtual Internship",
    location: "Remote",
    duration: "Dec 2024 - Jan 2025",
    description: "Explored AI/ML concepts and applications with a focus on sustainable technology practices and green computing principles.",
    type: "Completed",
  },
];

const Experience = () => {
  const [isDaytime, setIsDaytime] = useState(true);

  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      setIsDaytime(hour >= 6 && hour < 18);
    };
    
    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="experience" 
      className="py-20 relative overflow-hidden transition-colors duration-1000"
      style={{ 
        backgroundColor: isDaytime ? '#ffffff' : '#170d27',
        color: isDaytime ? '#1a1a1a' : '#ffffff'
      }}
    >
      {/* MagnetLines Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <MagnetLines
          rows={20}
          columns={40}
          containerSize="150%"
          lineColor="tomato"
          lineWidth="3px"
          lineHeight="30px"
          baseAngle={0}
          className="magnet-rainbow"
          style={{ width: "100vw", height: "100%" }}
        />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">Experience</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
            <p className={`max-w-2xl mx-auto ${isDaytime ? 'text-muted-foreground' : 'text-gray-300'}`}>
              Building expertise through hands-on internships and real-world projects
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                  isDaytime ? 'bg-card' : 'bg-[#2a2438] border-purple-500/30'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold ${isDaytime ? 'text-foreground' : 'text-white'}`}>{exp.title}</h3>
                          <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium w-fit">
                      {exp.type}
                    </div>
                  </div>

                  <div className={`flex flex-wrap gap-4 mb-4 text-sm ${isDaytime ? 'text-muted-foreground' : 'text-gray-400'}`}>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className={`leading-relaxed ${isDaytime ? 'text-foreground/80' : 'text-gray-300'}`}>{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
