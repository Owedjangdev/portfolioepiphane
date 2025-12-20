// src/components/Resume.tsx
"use client";

import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResumeAbout from "./ResumeAbout";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";
import ResumeSkills from "./ResumeSkills";

import ResumeCertificates from "./ResumeCertificates";

export default function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6 } }}
      className="min-h-screen py-12 xl:py-16"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <Tabs defaultValue="experience" className="flex flex-col gap-8">
          {/* Tabs centré */}
          <div className="flex justify-center">
            <TabsList className="flex flex-col w-full sm:flex-row sm:w-auto sm:max-w-3xl gap-3 p-3 bg-surface/50 backdrop-blur-sm rounded-xl border border-white/10">
              <TabsTrigger value="experience" className="text-base sm:text-lg py-3 px-6 rounded-lg whitespace-nowrap data-[state=active]:bg-accent data-[state=active]:text-white">
                Expérience
              </TabsTrigger>
              <TabsTrigger value="education" className="text-base sm:text-lg py-3 px-6 rounded-lg whitespace-nowrap data-[state=active]:bg-accent data-[state=active]:text-white">
                Formation
              </TabsTrigger>
              <TabsTrigger value="skills" className="text-base sm:text-lg py-3 px-6 rounded-lg whitespace-nowrap data-[state=active]:bg-accent data-[state=active]:text-white">
                Compétences
              </TabsTrigger>
              <TabsTrigger value="certificates" className="text-base sm:text-lg py-3 px-6 rounded-lg whitespace-nowrap data-[state=active]:bg-accent data-[state=active]:text-white">
                Certifications
              </TabsTrigger>
              <TabsTrigger value="about" className="text-base sm:text-lg py-3 px-6 rounded-lg whitespace-nowrap data-[state=active]:bg-accent data-[state=active]:text-white">
                À propos
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Contenu */}
          <div className="w-full max-w-3xl mx-auto">
            <ResumeExperience />
            <ResumeEducation />
            <ResumeSkills />
            <ResumeCertificates />
            <ResumeAbout />
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}