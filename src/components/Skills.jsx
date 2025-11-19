import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = {
    "Languages": ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL"],
    "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    "Tools & DevOps": ["Git", "GitHub", "Cursor", "Netlify", "Vercel", "Figma"]
};

export default function Skills() {
    return (
        <section className="py-20 px-4 bg-secondary/5">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
                    <p className="text-muted-foreground text-lg">The tools I use to bring ideas to life.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10">
                                <CardHeader>
                                    <CardTitle className="text-xl text-primary">{category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1 rounded-full bg-secondary text-sm text-secondary-foreground border border-white/5"
                                            >
                                                {item}
                                            </span>
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
