import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialDock from "@/components/SocialDock";

const Index = () => {

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <SocialDock />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
