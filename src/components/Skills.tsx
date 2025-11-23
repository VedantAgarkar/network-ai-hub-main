import { Code2, Network, MessageSquare, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "C", level: 70 },
      { name: "C++", level: 65 },
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: Layers,
    skills: [
      { name: "Streamlit", level: 85 },
      { name: "AI/ML Libraries", level: 80 },
      { name: "Git & GitHub", level: 75 },
    ],
  },
  {
    title: "Networking",
    icon: Network,
    skills: [
      { name: "CCNA Knowledge", level: 75 },
      { name: "Network Architecture", level: 70 },
      { name: "Protocol Understanding", level: 72 },
    ],
  },
  {
    title: "Soft Skills",
    icon: MessageSquare,
    skills: [
      { name: "Communication", level: 90 },
      { name: "Leadership", level: 88 },
      { name: "Presentation", level: 92 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">Skills & Expertise</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive blend of technical proficiency and interpersonal excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="border-primary/20 bg-card hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent-foreground rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
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
