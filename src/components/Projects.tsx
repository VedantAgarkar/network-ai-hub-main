import { ExternalLink, FileText, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import legalEasyImage from "@/assets/legaleasy-project.jpg";

const projects = [
  {
    title: "LegalEasy",
    description:
      "Modern legal assistance platform with luxury law-chic branding that makes legal information clear and accessible.",
    image: legalEasyImage,
    features: [
      "AI-generated legal summaries",
      "IPC section lookup",
      "Document upload (.pdf/.docx/.txt up to 50MB)",
      "Text input up to 2000 words",
      "Editable summaries",
      "Team collaboration features",
    ],
    tech: ["Python", "Streamlit", "AI/ML", "NLP"],
    purpose:
      "Democratizing legal information through AI-powered analysis and clear, accessible summaries.",
    link: "https://www.linkedin.com/posts/vedant-agarkar-786b81310_ai-lawtech-legaltech-activity-7366793768605237250-c_R3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8yFxYB6qGF2N55dXaXVhk-LWSgocRRm4E",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building solutions that combine AI innovation with practical applications
            </p>
          </div>

          <div className="space-y-8 animate-fade-in">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-primary/20 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          Key Features
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-foreground/80">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-accent-foreground mb-3 flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Purpose
                        </h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {project.purpose}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full sm:w-auto group">
                        View Project Details
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Button>
                    </a>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in">
            <CardContent className="p-8 text-center space-y-4">
              <Users className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">More Projects Coming Soon</h3>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                Currently working on additional innovative projects including Neuralet Watchdog 
                and other AI-powered solutions. Stay tuned for updates!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
