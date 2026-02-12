import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useDayNight } from "@/hooks/useDayNight";

const About = () => {
  const isDaytime = useDayNight();

  return (
    <section 
      id="about" 
      className="py-20 transition-colors duration-1000"
      style={{ 
        backgroundColor: isDaytime ? '#ffffff' : '#170d27',
        color: isDaytime ? '#1a1a1a' : '#ffffff'
      }}
    >
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
            <p className={`max-w-2xl mx-auto ${isDaytime ? 'text-muted-foreground' : 'text-gray-300'}`}>
              Passionate about technology and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            <Card className={`border-primary/20 hover:shadow-lg transition-all ${
              isDaytime ? 'bg-background/50 backdrop-blur-sm' : 'bg-[#2a2438] border-purple-500/30'
            }`}>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className={`text-2xl font-bold ${isDaytime ? 'text-foreground' : 'text-white'}`}>Education</h3>
                <div className="space-y-4">
                  <div className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
                    <p className={`font-semibold ${isDaytime ? 'text-foreground' : 'text-white'}`}>Diploma in Computer Science</p>
                    <p className={`text-sm ${isDaytime ? 'text-muted-foreground' : 'text-gray-400'}`}>Padm. Dr. V. B. Kolte College of Engineering (MSBTE)</p>
                    <p className={`text-sm ${isDaytime ? 'text-muted-foreground' : 'text-gray-500'}`}>Expected: 2026</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-muted rounded-full" />
                    <p className={`font-semibold ${isDaytime ? 'text-foreground' : 'text-white'}`}>SSC (80%)</p>
                    <p className={`text-sm ${isDaytime ? 'text-muted-foreground' : 'text-gray-400'}`}>M.S.M English School, Malkapur , Completed 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-primary/20 hover:shadow-lg transition-all ${
              isDaytime ? 'bg-background/50 backdrop-blur-sm' : 'bg-[#2a2438] border-purple-500/30'
            }`}>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className={`text-2xl font-bold ${isDaytime ? 'text-foreground' : 'text-white'}`}>Strengths</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                    <span className={`${isDaytime ? 'text-foreground/80' : 'text-gray-300'}`}>Strong communication and presentation skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                    <span className={`${isDaytime ? 'text-foreground/80' : 'text-gray-300'}`}>Leadership experience as anchor and speaker</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                    <span className={`${isDaytime ? 'text-foreground/80' : 'text-gray-300'}`}>CCNA networking knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                    <span className={`${isDaytime ? 'text-foreground/80' : 'text-gray-300'}`}>AI/ML expertise with modern frameworks like Streamlit</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className={`border-primary/20 animate-fade-in ${
            isDaytime ? 'bg-gradient-to-br from-background to-card' : 'bg-[#2a2438] border-purple-500/30'
          }`}>
            <CardContent className="p-8">
              <p className={`text-lg leading-relaxed ${isDaytime ? 'text-foreground/80' : 'text-gray-300'}`}>
                I'm a final-year Computer Science diploma student at V.B. Kolte College of Engineering, 
                specializing in AI/ML and networking technologies. With a strong foundation in Python 
                programming and experience with Streamlit development, I'm passionate about creating 
                innovative solutions that bridge the gap between artificial intelligence and network infrastructure. 
                My goal is to leverage modern technologies to build scalable, intelligent systems that 
                make a real-world impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
