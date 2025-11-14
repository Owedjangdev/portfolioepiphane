// src/components/ResumeExperience.tsx
"use client";

import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const experience = {
  title: "Mon Expérience",
  description: "Parcours professionnel et projets qui m'ont fait grandir.",
  items: [
    { company: "Company Dev", position: "Front-end Developer", duration: "Jan 2023 – Présent" },
    { company: "Freelance", position: "Développeur Full-stack", duration: "Jan 2024 – Présent" },
  ],
};

export default function ResumeExperience() {
  return (
    <TabsContent value="experience" className="mt-0">
      <div className="text-center xl:text-left mb-8">
        <h3 className="text-3xl xl:text-4xl font-bold text-white mb-3">{experience.title}</h3>
        <p className="max-w-2xl mx-auto xl:mx-0 text-white/70">{experience.description}</p>
      </div>
      <ScrollArea className="h-96 rounded-xl border border-white/10 p-4 bg-surface/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300"
            >
              <span className="text-accent text-sm font-medium">{item.duration}</span>
              <h4 className="text-xl font-semibold text-white mt-1">{item.position}</h4>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <p className="text-white/80">{item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </TabsContent>
  );
}