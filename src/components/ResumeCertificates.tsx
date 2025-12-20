"use client";

import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

// Données des certificats avec liens vers les fichiers
const certificates = {
    title: "Mes Certifications",
    description: "Validations de mes compétences techniques.",
    items: [
        {
            name: "HTML5",
            issuer: "Certification HTML",
            date: "2023",
            file: "/assets/certificates/html.pdf",
        },
        {
            name: "CSS3",
            issuer: "Certification CSS",
            date: "2023",
            file: "/assets/certificates/css.pdf",
        },
        {
            name: "JavaScript",
            issuer: "Certification JavaScript",
            date: "2023",
            file: "/assets/certificates/javascript.pdf",
        },
        {
            name: "React.js",
            issuer: "Certification React",
            date: "2024",
            file: "/assets/certificates/react.pdf",
        },
        {
            name: "Next.js",
            issuer: "Certification Next.js",
            date: "2024",
            file: "/assets/certificates/nextjs.pdf",
        },
        {
            name: "Bootstrap",
            issuer: "Certification Bootstrap",
            date: "2023",
            file: "/assets/certificates/bootstrap.pdf",
        },
    ],
};

export default function ResumeCertificates() {
    return (
        <TabsContent value="certificates" className="mt-0">
            <div className="text-center xl:text-left mb-8">
                <h3 className="text-3xl xl:text-4xl font-bold text-white mb-3">{certificates.title}</h3>
                <p className="max-w-2xl mx-auto xl:mx-0 text-white/70">{certificates.description}</p>
            </div>
            <ScrollArea className="h-[400px] rounded-xl border border-white/10 p-4 bg-surface/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                <span className="text-accent text-sm font-medium">{item.date}</span>
                                <h4 className="text-xl font-semibold text-white mt-2 group-hover:text-accent transition-colors">
                                    {item.name}
                                </h4>
                                <div className="flex items-center gap-2 mt-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    <p className="text-white/80">{item.issuer}</p>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/5">
                                <Link
                                    href={item.file}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    <span>Voir le certificat</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </ScrollArea>
        </TabsContent>
    );
}
