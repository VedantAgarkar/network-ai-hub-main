import LogoLoop from './LogoLoop';
import { SiPython, SiStreamlit, SiReact, SiTypescript, SiTailwindcss, SiDocker, SiGit, SiVisualstudiocode, SiPowershell, SiOpenai } from 'react-icons/si';

const techLogos = [
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiStreamlit />, title: "Streamlit", href: "https://streamlit.io" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiOpenai />, title: "AI/ML", href: "https://openai.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiVisualstudiocode />, title: "VS Code", href: "https://code.visualstudio.com" },
  { node: <SiPowershell />, title: "PowerShell", href: "https://docs.microsoft.com/powershell" },
];

const TechStack = () => {
  return (
    <section className="py-16 bg-card border-t border-primary/10">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold">Technologies & Tools</h2>
            <p className="text-muted-foreground">
              Powering innovative solutions with modern tech stack
            </p>
          </div>
          
          <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={65}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="hsl(var(--card))"
              ariaLabel="Technology stack"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
