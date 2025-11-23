import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
                <div className="space-y-4">
                  <div className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
                    <p className="font-semibold text-foreground">Diploma in Computer Science</p>
                    <p className="text-sm text-muted-foreground">Padm. Dr. V. B. Kolte College of Engineering</p>
                    <p className="text-sm text-muted-foreground">Expected: 2026</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-muted rounded-full" />
                    <p className="font-semibold text-foreground">SSC (80%)</p>
                    <p className="text-sm text-muted-foreground">Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Strengths</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                    <span className="text-foreground/80">Strong communication and presentation skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                    <span className="text-foreground/80">Leadership experience as anchor and speaker</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                    <span className="text-foreground/80">CCNA networking knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                    <span className="text-foreground/80">AI/ML expertise with modern frameworks like Streamlit</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary/20 bg-gradient-to-br from-background to-card animate-fade-in">
            <CardContent className="p-8">
              <p className="text-lg text-foreground/80 leading-relaxed">
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
