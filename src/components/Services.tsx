import { Rocket, Users, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useDayNight } from "@/hooks/useDayNight";

const Services = () => {
  const isDaytime = useDayNight();

  return (
    <section 
      id="services" 
      className="py-20 transition-colors duration-1000"
      style={{ 
        backgroundColor: isDaytime ? '#ffffff' : '#170d27',
        color: isDaytime ? '#1a1a1a' : '#ffffff'
      }}
    >
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">Services</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
          </div>

          <Card className={`border-primary/20 animate-fade-in ${
            isDaytime ? 'bg-gradient-to-br from-primary/5 via-background to-accent/5' : 'bg-[#2a2438] border-purple-500/30'
          }`}>
            <CardContent className="p-12 text-center space-y-6">
              <div className="flex justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center animate-pulse delay-100">
                  <Code className="h-8 w-8 text-accent-foreground" />
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-pulse delay-200">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>

              <h3 className={`text-3xl font-bold ${isDaytime ? 'text-foreground' : 'text-white'}`}>Building for the Future</h3>
              
              <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${isDaytime ? 'text-foreground/80' : 'text-gray-300'}`}>
                Currently focused on personal development and building innovative projects that 
                push the boundaries of AI and networking technologies.
              </p>

              <div className="pt-6 space-y-4">
                <p className="text-xl font-semibold text-primary">Open to Future Collaborations</p>
                <p className={isDaytime ? 'text-foreground/70' : 'text-gray-400'}>
                  Interested in discussing potential projects, internships, or collaboration opportunities?
                  <br />
                  Feel free to reach out!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
