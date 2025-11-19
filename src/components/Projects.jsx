import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "QVerso",
        description: "AI-powered Bible study application featuring 19 languages and advanced translation capabilities. Enhances understanding of verses and biblical contexts.",
        tags: ["Next.js", "AI", "Translation", "React"],
        link: "https://qverso.netlify.app/",
        github: null,
        size: "md:col-span-2",
        gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
        title: "WebCom",
        description: "Transforms stories into beautiful webtoons/manhwa with AI. Generates consistent panels automatically.",
        tags: ["AI", "Webtoons", "Generative Art"],
        link: "https://webcomai.lovable.app/",
        github: null,
        size: "md:col-span-1",
        gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
        title: "Parable AI",
        description: "Interactive chat application with biblical figures using RAG pipeline. Improved response accuracy by 70%.",
        tags: ["RAG", "AI", "Chat", "React"],
        link: "https://parableai.netlify.app/",
        github: null,
        size: "md:col-span-1",
        gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
        title: "YapAi",
        description: "Discord bot powered by Google’s Gemini (1.5 Flash) LLM. Generates contextual responses via '/yap' command.",
        tags: ["Discord.js", "Gemini API", "Node.js"],
        link: null,
        github: "https://github.com/Chandu4143/YapAi",
        size: "md:col-span-1",
        gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
        title: "CodeDiffer",
        description: "Modern web-based side-by-side code comparison tool integrating the Monaco Editor.",
        tags: ["Monaco Editor", "React", "Developer Tools"],
        link: null,
        github: "https://github.com/Chandu4143/CodeDiffer",
        size: "md:col-span-1",
        gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
        title: "WebPify",
        description: "Client-side utility to convert JPG/PNG to WebP, reducing image sizes by 50–70%. Instant upload/convert/download.",
        tags: ["Image Processing", "React", "Utility"],
        link: "https://webpify.netlify.app/",
        github: null,
        size: "md:col-span-2",
        gradient: "from-violet-500/20 to-purple-500/20"
    }
];

export default function Projects() {
    return (
        <section className="py-20 px-4" id="projects">
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
        </section>
    );
}
