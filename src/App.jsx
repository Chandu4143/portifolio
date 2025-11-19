import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import MouseFollower from "@/components/MouseFollower";
import ThemeToggle from "@/components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground cursor-none transition-colors duration-300">
      {/* Noise Texture Overlay */}
      <div className="noise" />

      <MouseFollower />
      <ThemeToggle />

      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
