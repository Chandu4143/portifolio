import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 py-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

            <div className="container max-w-6xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 text-center md:text-left"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-sm text-secondary-foreground mb-4">
                        Available for work
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6"
                    >
                        Hey, I'm Chandu
                    </motion.h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                        Full-Stack Developer crafting premium digital experiences with modern technologies.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                        <Button
                            size="lg"
                            className="rounded-full text-base px-8"
                            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full text-base px-8"
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact Me
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full text-base px-8"
                            asChild
                        >
                            <a href="/KuramChanduNewCV.pdf" download="Kuram_Chandu_Resume.pdf">
                                Download Resume <Download className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>

                    <div className="flex gap-6 justify-center md:justify-start pt-8">
                        <a href="https://github.com/Chandu4143" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="https://linkedin.com/in/kuramchandu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="mailto:kuramchandu4143@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mx-auto"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-secondary/20 shadow-2xl shadow-primary/20">
                        <img
                            src="/Luffy.jpeg"
                            alt="Kuram Chandu"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Decorative rings */}
                    <div className="absolute inset-0 -z-10 rounded-full border border-white/5 scale-110 animate-pulse" />
                    <div className="absolute inset-0 -z-10 rounded-full border border-white/5 scale-125 opacity-50" />
                </motion.div>

            </div>
        </section>
    );
}
