// src/components/ResumeSkills.tsx
"use client";

import { TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress } from "react-icons/si";

const skills = {
  title: "Mes Compétences",
  description: "Technologies que je maîtrise et que j’utilise au quotidien.",
  skillsList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};

export default function ResumeSkills() {
  return (
    <TabsContent value="skills" className="mt-0">
      <div className="text-center xl:text-left mb-8">
        <h3 className="text-3xl xl:text-4xl font-bold text-white mb-3">{skills.title}</h3>
        <p className="max-w-2xl mx-auto xl:mx-0 text-white/70">{skills.description}</p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
        {skills.skillsList.map((skill, i) => (
          <TooltipProvider key={i} delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="group">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-background/50 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-accent transition-all duration-300"
                >
                  <div className="text-4xl sm:text-5xl text-white group-hover:text-accent transition-colors">
                    {skill.icon}
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-medium">{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </TabsContent>
  );
}