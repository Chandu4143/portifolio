import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-32 px-4 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-background pointer-events-none" />

            <div className="container max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                        Let's work together.
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Creating meaningful experiences is what I do best. If you have a project in mind or just want to say hi, get in touch.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
                        <Button size="lg" className="rounded-full text-lg px-8 h-14">
                            <Mail className="mr-2 h-5 w-5" />
                            kuramchandu4143@gmail.com
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full text-lg px-8 h-14">
                            +91 7075663555
                        </Button>
                    </div>

                    <div className="flex gap-8 justify-center pt-16">
                        <a href="https://github.com/Chandu4143" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-transform hover:scale-110">
                            <Github className="h-8 w-8" />
                        </a>
                        <a href="https://linkedin.com/in/kuramchandu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-transform hover:scale-110">
                            <Linkedin className="h-8 w-8" />
                        </a>
                        <a href="mailto:kuramchandu4143@gmail.com" className="text-muted-foreground hover:text-white transition-transform hover:scale-110">
                            <Mail className="h-8 w-8" />
                        </a>
                    </div>

                    <div className="pt-20 text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} Kuram Chandu. All rights reserved.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
