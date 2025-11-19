import { motion } from "framer-motion";

const experience = [
    {
        role: "Marketing Manager",
        company: "SS LAB EQUIPMENTS",
        period: "Dec 2024 – May 2025",
        location: "Hyderabad, India",
        description: [
            "Developed and executed marketing strategies, improving customer acquisition and brand awareness.",
            "Implemented digital strategies leveraging web technologies to boost engagement.",
            "Analyzed marketing data to optimize campaigns."
        ]
    }
];

const education = [
    {
        degree: "Bachelor of Technology, ITE",
        school: "Malla Reddy College of Engineering",
        location: "Hyderabad, Telangana",
        period: "Graduated"
    },
    {
        degree: "Diploma, ECE",
        school: "Holy Mary Institute of Technology",
        location: "Hyderabad, Telangana",
        period: "Completed"
    }
];

export default function Experience() {
    return (
        <section className="py-20 px-4">
            <div className="container max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Experience */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-8 flex items-center gap-3"
                        >
                            <span className="w-8 h-1 bg-primary rounded-full"></span>
                            Experience
                        </motion.h2>

                        <div className="space-y-12">
                            {experience.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-8 border-l border-white/10"
                                >
                                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                                    <h3 className="text-xl font-bold">{job.role}</h3>
                                    <p className="text-primary font-medium mb-1">{job.company}</p>
                                    <p className="text-sm text-muted-foreground mb-4">{job.period} | {job.location}</p>
                                    <ul className="space-y-2 list-disc list-inside text-muted-foreground text-sm">
                                        {job.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-8 flex items-center gap-3"
                        >
                            <span className="w-8 h-1 bg-primary rounded-full"></span>
                            Education
                        </motion.h2>

                        <div className="space-y-12">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-8 border-l border-white/10"
                                >
                                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                                    <p className="text-primary font-medium mb-1">{edu.school}</p>
                                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
