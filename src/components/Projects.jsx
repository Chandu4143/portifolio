import { useState, useEffect } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, EyeOff } from "lucide-react";

const projects = [
    {
        title: "QVerso",
        description: "AI-powered Bible study application featuring 19 languages and advanced translation capabilities.",
        tags: ["Next.js", "AI", "Translation", "React"],
        link: "https://qverso.netlify.app/",
        github: null,
        size: "md:col-span-2",
        gradient: "from-blue-500/20 to-purple-500/20",
        previewAvailable: false // Netlify often blocks iframes
    },
    {
        title: "WebCom",
        description: "Transforms stories into beautiful webtoons/manhwa with AI. Generates consistent panels automatically.",
        tags: ["AI", "Webtoons", "Generative Art"],
        link: "https://webcomai.lovable.app/",
        github: null,
        size: "md:col-span-1",
        gradient: "from-pink-500/20 to-rose-500/20",
        previewAvailable: true
    },
    {
        title: "Parable AI",
        description: "Interactive chat application with biblical figures using RAG pipeline. Improved response accuracy by 70%.",
        tags: ["RAG", "AI", "Chat", "React"],
        link: "https://parableai.netlify.app/",
        github: null,
        size: "md:col-span-1",
        gradient: "from-amber-500/20 to-orange-500/20",
        previewAvailable: false
    },
    {
        title: "YapAi",
        description: "Discord bot powered by Google’s Gemini (1.5 Flash) LLM. Generates contextual responses via '/yap' command.",
        tags: ["Discord.js", "Gemini API", "Node.js"],
        link: null,
        github: "https://github.com/Chandu4143/YapAi",
        size: "md:col-span-1",
        gradient: "from-green-500/20 to-emerald-500/20",
        previewAvailable: false
    },
    {
        title: "CodeDiffer",
        description: "Modern web-based side-by-side code comparison tool integrating the Monaco Editor.",
        tags: ["Monaco Editor", "React", "Developer Tools"],
        link: null,
        github: "https://github.com/Chandu4143/CodeDiffer",
        size: "md:col-span-1",
        gradient: "from-cyan-500/20 to-blue-500/20",
        previewAvailable: false
    },
    {
        title: "WebPify",
        description: "Client-side utility to convert JPG/PNG to WebP, reducing image sizes by 50–70%.",
        tags: ["Image Processing", "React", "Utility"],
        link: "https://webpify.netlify.app/",
        github: null,
        size: "md:col-span-2",
        gradient: "from-violet-500/20 to-purple-500/20",
        previewAvailable: false
    }
];

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Spring animation for smooth cursor following
    const springConfig = { stiffness: 100, damping: 15 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    useEffect(() => {
        x.set(mousePosition.x);
        y.set(mousePosition.y);
    }, [mousePosition, x, y]);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    };

    return (
        <section className="py-20 px-4 relative" id="projects" onMouseMove={handleMouseMove}>
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Works</h2>
                    <p className="text-muted-foreground text-lg">A collection of projects I've built, broken, and fixed.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={project.size}
                            onMouseEnter={() => setHoveredProject(project)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group overflow-hidden relative">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <CardHeader className="relative z-10">
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                                        <div className="flex gap-2">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                                                    <Github className="h-5 w-5" />
                                                </a>
                                            )}
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                                                    <ExternalLink className="h-5 w-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <CardDescription className="text-base pt-2">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="relative z-10 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <Badge key={i} variant="secondary" className="bg-secondary/50 hover:bg-secondary/80">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Floating Preview Window */}
            <AnimatePresence>
                {hoveredProject && hoveredProject.link && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        style={{
                            position: "fixed",
                            left: x,
                            top: y,
                            zIndex: 100,
                            pointerEvents: "none",
                        }}
                        className="w-[400px] h-[250px] rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl bg-background hidden md:block ml-6 mt-6"
                    >
                        {hoveredProject.previewAvailable ? (
                            <>
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10" id="loading-overlay">
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                </div>
                                <iframe
                                    src={hoveredProject.link}
                                    title={hoveredProject.title}
                                    className="w-[1200px] h-[750px] border-0 transform scale-[0.33] origin-top-left bg-white"
                                    onLoad={(e) => {
                                        const overlay = e.target.previousSibling;
                                        if (overlay) overlay.style.display = 'none';
                                    }}
                                />
                            </>
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-secondary/50 p-6 text-center">
                                <EyeOff className="w-12 h-12 mb-4 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">Preview unavailable for this site.</p>
                                <p className="text-xs text-muted-foreground mt-2">Click the link icon to visit.</p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
