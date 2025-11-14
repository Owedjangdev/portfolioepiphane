// src/components/ResumeAbout.tsx
"use client";

import { TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const about = {
  title: "À propos de moi",
  description: "Développeur web passionné, créatif et orienté solutions. Je transforme des idées en expériences numériques fluides.",
  info: [
    { fieldName: "Nom", fieldValue: "Epiphane Houehanou" },
    { fieldName: "Téléphone", fieldValue: "+229 01 542 15693" },
    { fieldName: "Expérience", fieldValue: "2+ ans" },
    { fieldName: "Email", fieldValue: "epiphanedev@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Disponible" },
    { fieldName: "Nationalité", fieldValue: "Bénin" },
    { fieldName: "Langues", fieldValue: "Français, Anglais" },
  ],
};

export default function ResumeAbout() {
  return (
    <TabsContent value="about" className="mt-0">
      <div className="text-center xl:text-left mb-8">
        <h3 className="text-3xl xl:text-4xl font-bold text-white mb-3">{about.title}</h3>
        <p className="max-w-2xl mx-auto xl:mx-0 text-white/70">{about.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto xl:mx-0">
        {about.info.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-4 p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-white/10"
          >
            <span className="text-white/60 text-sm font-medium w-24">{item.fieldName} :</span>
            <span className="text-white font-semibold">{item.fieldValue}</span>
          </motion.div>
        ))}
      </div>
    </TabsContent>
  );
}