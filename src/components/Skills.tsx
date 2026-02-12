import { Code2, Network, MessageSquare, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    description: "Proficient in multiple programming languages with strong foundations in object-oriented and procedural programming. Experienced in building robust applications and solving complex algorithmic challenges.",
    skills: [
      { name: "Python", level: 90 },
      { name: "C", level: 70 },
      { name: "C++", level: 65 },
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: Layers,
    description: "Skilled in leveraging modern frameworks and development tools to build scalable applications. Expert in creating interactive data-driven web applications and implementing machine learning solutions.",
    skills: [
      { name: "Streamlit", level: 85 },
      { name: "AI/ML Libraries", level: 80 },
      { name: "Git & GitHub", level: 75 },
    ],
  },
  {
    title: "Networking",
    icon: Network,
    description: "Deep understanding of network protocols, architecture, and infrastructure. CCNA-level knowledge with hands-on experience in designing and troubleshooting network systems for optimal performance.",
    skills: [
      { name: "CCNA Knowledge", level: 75 },
      { name: "Network Architecture", level: 70 },
      { name: "Protocol Understanding", level: 72 },
    ],
  },
  {
    title: "Soft Skills",
    icon: MessageSquare,
    description: "Strong interpersonal and communication abilities that facilitate effective collaboration and project leadership. Proven track record in presenting technical concepts to diverse audiences.",
    skills: [
      { name: "Communication", level: 90 },
      { name: "Leadership", level: 88 },
      { name: "Presentation", level: 92 },
    ],
  },
];

import { useDayNight } from "@/hooks/useDayNight";

const Skills = () => {
  const isDaytime = useDayNight();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});

  const handleMouseEnter = (categoryIndex: number) => {
    setHoveredCard(categoryIndex);
    // Randomize skill levels for animation
    const category = skillCategories[categoryIndex];
    const randomLevels: { [key: string]: number } = {};
    category.skills.forEach((skill, idx) => {
      const key = `${categoryIndex}-${idx}`;
      randomLevels[key] = Math.floor(Math.random() * 40) + 50; // Random between 50-90
    });
    setAnimatedLevels(randomLevels);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setAnimatedLevels({});
  };

  const getSkillLevel = (categoryIndex: number, skillIndex: number, originalLevel: number) => {
    const key = `${categoryIndex}-${skillIndex}`;
    return hoveredCard === categoryIndex ? (animatedLevels[key] || originalLevel) : originalLevel;
  };

  return (
    <section 
      id="skills" 
      className="py-20 transition-colors duration-1000"
      style={{ 
        backgroundColor: isDaytime ? '#ffffff' : '#170d27',
        color: isDaytime ? '#1a1a1a' : '#ffffff'
      }}
    >
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">Skills & Expertise</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
            <p className={`max-w-2xl mx-auto ${isDaytime ? 'text-muted-foreground' : 'text-gray-300'}`}>
              A comprehensive blend of technical proficiency and interpersonal excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className={`border-primary/20 transition-all duration-500 cursor-pointer ${
                  isDaytime ? 'bg-card' : 'bg-[#2a2438] border-purple-500/30'
                } ${
                  hoveredCard === categoryIndex 
                    ? 'shadow-2xl shadow-primary/20 scale-105 z-50' 
                    : 'hover:shadow-xl'
                }`}
                style={{
                  transform: hoveredCard === categoryIndex ? 'scale(1.05)' : 'scale(1)',
                  position: 'relative',
                  zIndex: hoveredCard === categoryIndex ? 50 : 1,
                }}
                onMouseEnter={() => handleMouseEnter(categoryIndex)}
                onMouseLeave={handleMouseLeave}
              >
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className={`text-2xl font-bold ${isDaytime ? 'text-foreground' : 'text-white'}`}>{category.title}</h3>
                  </div>

                  {/* Detailed description - shows on hover */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      hoveredCard === categoryIndex 
                        ? 'max-h-40 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className={`text-sm leading-relaxed italic border-l-2 border-primary/50 pl-4 ${isDaytime ? 'text-muted-foreground' : 'text-gray-300'}`}>
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const displayLevel = getSkillLevel(categoryIndex, skillIndex, skill.level);
                      return (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className={`font-medium ${isDaytime ? 'text-foreground' : 'text-white'}`}>{skill.name}</span>
                            <span className={`text-sm ${isDaytime ? 'text-muted-foreground' : 'text-gray-400'}`}>
                              {hoveredCard === categoryIndex ? `${displayLevel}%` : `${skill.level}%`}
                            </span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary to-accent-foreground rounded-full transition-all duration-700 ease-in-out"
                              style={{ width: `${displayLevel}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
