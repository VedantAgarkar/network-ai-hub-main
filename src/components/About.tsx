import { GraduationCap, Award, MessageCircle, Mic, Network, BrainCircuit } from "lucide-react";
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
                <div className="space-y-4 relative">
                  {/* Glowing moving line behind timeline */}
                  <div className="absolute left-[11px] top-6 bottom-6 w-[2px] bg-primary/10 hidden sm:block overflow-hidden">
                    <div className="w-full h-24 bg-gradient-to-b from-transparent via-primary to-transparent animate-timeline-glow shadow-[0_0_15px_rgba(var(--primary),1)]" />
                  </div>
                  
                  <div className="relative pl-6 border-l-2 border-primary/20 pb-2">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                    <p className={`font-semibold text-lg ${isDaytime ? 'text-foreground' : 'text-white'}`}>Diploma in Computer Science</p>
                    <p className={`text-sm ${isDaytime ? 'text-muted-foreground' : 'text-gray-400'}`}>Padm. Dr. V. B. Kolte College of Engineering (MSBTE)</p>
                    
                    <div className="mt-4 mb-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { sem: "1st Sem", score: "81.29%" },
                        { sem: "2nd Sem", score: "78.00%" },
                        { sem: "3rd Sem", score: "86.00%" },
                        { sem: "4th Sem", score: "84.24%" },
                        { sem: "5th Sem", score: "92.82%" },
                      ].map((item, i) => (
                        <div key={i} className={`flex flex-col items-center justify-center py-2 px-1 text-center rounded-xl border transition-all hover:scale-105 hover:shadow-lg duration-300 ${
                          isDaytime ? 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-sm' : 'bg-gradient-to-br from-[#2a2438] to-[#1e1a2b] border-purple-500/30 shadow-[0_4px_15px_rgba(168,85,247,0.1)]'
                        }`}>
                          <span className={`text-[10px] sm:text-xs uppercase tracking-wider font-extrabold ${isDaytime ? 'text-primary' : 'text-[#d8b4fe]'}`}>{item.sem}</span>
                          <span className={`text-sm sm:text-base font-black mt-1 ${isDaytime ? 'text-foreground' : 'text-white'}`}>{item.score}</span>
                        </div>
                      ))}
                    </div>

                    <p className={`text-sm font-medium ${isDaytime ? 'text-muted-foreground' : 'text-gray-500'}`}>Expected: 2026</p>
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
                <div className="flex flex-col gap-3">
                  {[
                    { text: "Communication & Presentation", icon: MessageCircle, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                    { text: "Leadership (Anchor & Speaker)", icon: Mic, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                    { text: "CCNA Networking Knowledge", icon: Network, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
                    { text: "AI/ML Expertise (Streamlit)", icon: BrainCircuit, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
                  ].map((strength, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border transition-all hover:translate-x-2 hover:shadow-md duration-300 ${isDaytime ? 'bg-white shadow-sm border-gray-100' : 'bg-[#1e1a2b] border-[#3a3448]'}`}>
                      <div className={`p-2 rounded-md ${strength.bg} ${strength.border} border`}>
                        <strength.icon className={`w-4 h-4 ${strength.color}`} />
                      </div>
                      <span className={`font-medium ${isDaytime ? 'text-foreground/80' : 'text-gray-300'}`}>{strength.text}</span>
                    </div>
                  ))}
                </div>
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
