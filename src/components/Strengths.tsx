import { Mic, Target, Users, Smartphone, Network, Brain, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const strengths = [
  {
    title: "Anchoring & Public Speaking",
    icon: Mic,
    description: "Experienced in hosting events and presentations, commanding audience attention with confidence and clarity. Skilled at moderating discussions and delivering impactful speeches that resonate with diverse audiences.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Decision Making",
    icon: Target,
    description: "Strong analytical mindset with the ability to make data-driven decisions under pressure. Proficient in evaluating multiple solutions, weighing risks, and choosing optimal paths that align with project goals and stakeholder needs.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Project Leadership",
    icon: Users,
    description: "Proven track record of leading cross-functional teams to deliver successful projects. Expertise in agile methodologies, resource allocation, timeline management, and fostering collaborative environments that drive innovation.",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "App Development",
    icon: Smartphone,
    description: "Proficient in building full-stack applications from concept to deployment. Experienced in creating user-friendly interfaces, implementing robust backend systems, and ensuring seamless user experiences across platforms.",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Network Architecture",
    icon: Network,
    description: "Deep expertise in designing and implementing scalable network infrastructures. CCNA-certified knowledge in routing protocols, network security, troubleshooting, and optimizing network performance for enterprise environments.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Artificial Intelligence",
    icon: Brain,
    description: "Strong foundation in AI concepts including neural networks, natural language processing, and computer vision. Experienced in implementing AI-driven solutions that solve real-world problems and enhance decision-making processes.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Machine Learning",
    icon: Cpu,
    description: "Skilled in developing and deploying ML models using Python libraries like TensorFlow, scikit-learn, and PyTorch. Expertise in data preprocessing, feature engineering, model training, and optimization for predictive analytics.",
    color: "from-teal-500 to-blue-500",
  },
];

const Strengths = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="strengths" className="py-20 bg-background/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">Core Strengths</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key competencies that drive exceptional results and innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {strengths.map((strength, index) => (
              <Card
                key={index}
                className={`border-primary/20 bg-card/80 backdrop-blur-sm transition-all duration-500 cursor-pointer ${
                  hoveredCard === index 
                    ? 'shadow-2xl shadow-primary/30 scale-105 z-50' 
                    : 'hover:shadow-xl'
                }`}
                style={{
                  transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                  position: 'relative',
                  zIndex: hoveredCard === index ? 50 : 1,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className={`w-16 h-16 bg-gradient-to-br ${strength.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <strength.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{strength.title}</h3>
                  </div>

                  {/* Detailed description - shows on hover */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      hoveredCard === index 
                        ? 'max-h-60 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed text-center pt-2 border-t-2 border-primary/30">
                      {strength.description}
                    </p>
                  </div>

                  {/* Hint text when not hovered */}
                  <div 
                    className={`text-center transition-all duration-300 ${
                      hoveredCard === index 
                        ? 'opacity-0 max-h-0' 
                        : 'opacity-60 max-h-10'
                    }`}
                  >
                    <p className="text-xs text-muted-foreground italic">
                      Hover to learn more
                    </p>
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

export default Strengths;
