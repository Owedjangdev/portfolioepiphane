// src/components/Resume.tsx
"use client";

import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResumeAbout from "./ResumeAbout";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";
import ResumeSkills from "./ResumeSkills";

export default function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6 } }}
      className="min-h-screen py-12 xl:py-16"
    >
      <div className="container mx-auto px-4">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-8 xl:gap-12">
          {/* Onglets */}
          <TabsList className="flex flex-col w-full max-w-xs mx-auto xl:mx-0 gap-3 p-2 bg-surface/50 backdrop-blur-sm rounded-xl border border-white/10">
            <TabsTrigger value="experience" className="text-lg py-3 px-5 rounded-lg data-[state=active]:bg-accent data-[state=active]:text-white">
              Expérience
            </TabsTrigger>
            <TabsTrigger value="education" className="text-lg py-3 px-5 rounded-lg data-[state=active]:bg-accent data-[state=active]:text-white">
              Formation
            </TabsTrigger>
            <TabsTrigger value="skills" className="text-lg py-3 px-5 rounded-lg data-[state=active]:bg-accent data-[state=active]:text-white">
              Compétences
            </TabsTrigger>
            <TabsTrigger value="about" className="text-lg py-3 px-5 rounded-lg data-[state=active]:bg-accent data-[state=active]:text-white">
              À propos
            </TabsTrigger>
          </TabsList>

          {/* Contenu */}
          <div className="flex-1">
            <ResumeExperience />
            <ResumeEducation />
            <ResumeSkills />
            <ResumeAbout />
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}