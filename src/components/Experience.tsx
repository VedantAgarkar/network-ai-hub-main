import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">Experience</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building expertise through hands-on internships and real-world projects
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-primary/20 bg-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium w-fit">
                      {exp.type}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
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
