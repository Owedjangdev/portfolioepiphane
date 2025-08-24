"use client";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FaHtml5, FaCss3, FaFigma, FaJs, FaReact } from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//About

const about = {
  title: "About Me",
  description:
    "A passionate web developer with a knack for creating dynamic and responsive web applications.",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Epiphane Houehanou",
    },
    {
      fieldName: "Phone",
      fieldValue: "+229  01 54215693",
    },
    {
      fieldName: "Exprience",
      fieldValue: "2 years",
    },

    {
      fieldName: "Skype",
      fieldValue: "epiphane.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Benin",
    },
    {
      fieldName: "Email",
      fieldValue: "epiphanedev@gmail.com",
    },

    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },

    {
      fieldName: "Languages",
      fieldValue: "French, English",
    },
  ],
};

//Experience
const experience = {
  icon: "",
  title: "My Experience",
  description:
    "A brief overview of my professional journey and the skills I have acquired along the way.",

  items: [
    {
      Company: "Company Dev",
      position: "Front-end Developer",
      duration: "Jan 2023 - Present",
    },

      {
        Company: "FREELANCE",
        position: "Front-end Developer",
        duration: "Jan 2024 - Present",
      },
  
    

    
    

    
  ],
};

//Education
const education = {
  icon: "",
  title: "My Education",
  description:
    "A summary of my academic background and the qualifications I have achieved.",
  items: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      duration: "2023- 2026",
    },
    {
      institution: "Web Development Coursera",
      degree: "Full stack   Web Development",
      duration: "2025",
    },
    {
      institution: "Grafikart Academy",
      degree: "Advanced JavaScript and React",
      duration: "2024",
    },
    {
      institution: "OpenClassroom",
      degree: "Front-end Developer",
      duration: "2023-2024",
    },

    {
      institution: "CodeAcademy",
      degree: "Front-end Developer",
      duration: "2024",
    },

    {
      institution: "FreeCodeCamp",
      degree: "Responsive Web Design",
      duration: "2023",
    },

    {
     institution: "Udemy",
      degree: "Nextjs and POSTGRESQL",
      duration: "2025",
    },

    {
      institution: "openclassroom",
      degree: "Diploma in HTML, CSS, and JavaScript",
      duration: "2024",
    },

    {
      institution: "online codeevolution",
      degree: "nextjs and tailwindcss",
      duration: "2025",
    },

    {
     institution: "Udemy",
      degree: "Complete React Developer",
      duration: "2024",
    },

    {
      institution: "GRAFIKART",
      degree: "tailwindcss ",
      duration: "2024",
    },

    {
      institution: "online youtube",
      degree: "React Native",
      duration: "2025",
    },

    {
     institution: "online youtube",
      degree: "Figma Design",
      duration: "2024",
    },


    {
     institution: "MTN TITA",
      degree: "CERTIFICATE IN DECOUVERTE INFORMATIQUE",
      duration: "2023 ",
    },
  ],
};
//Skills
const skills = {
  title: "My Skills",
  description:
    "A showcase of my technical skills and proficiencies in various programming languages and frameworks.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },

    {
      icon: <FaCss3 />,
      name: "Css 3",
    },

    {
      icon: <FaJs />,
      name: "JavaScript",
    },

    {
      icon: <FaReact />,
      name: "React",
    },

    {
      icon: <FaFigma />,
      name: "Figma",
    },

    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
  ],
};

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8 xl:mx-22 xl:pb-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row  gap-[60px] text-white"
        >
          <TabsList className="flex flex-col w-full max-w-[380px]  mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education </TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}

          <div className="min-h-[78px] w-full ">
            {/*education */}

            <TabsContent value="education" className="w-full ">
              <div className="flex flex-col gap-[30px ] text-center xl:text-left">
                <h3 className="text-4xl font-bold mb-3">{education.title}</h3>

                <p className=" max-w-[600px] text-white/60  mx-auto xl:mx-0">
                  {education.description}
                </p>
              </div>

              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-star gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>

                        <h2 className="text-xl max-w-[260px] min-h-[60px ] text-center lg:text-left">
                          {item.degree}
                        </h2>

                        {/* dot*/}

                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/80">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/*experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px ] text-center xl:text-left">
                <h3 className="text-4xl font-bold mb-3">{experience.title}</h3>

                <p className=" max-w-[600px] text-white/60  mx-auto xl:mx-0">
                  {experience.description}
                </p>
              </div>

              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-star gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>

                        <h2 className="text-xl max-w-[260px] min-h-[60px ] text-center lg:text-left">
                          {item.position}
                        </h2>

                        {/* dot*/}

                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/80">{item.Company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>
            {/*skills */}
            <TabsContent value="skills" className="w-full  h-full ">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px]  text-center xl:text-left ">
                  <h3 className="text-4xl font-bold mb-3">{skills.title}</h3>

                  <p className=" max-w-[600px] text-white/60  mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 xl:gap-[30px]">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex  justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all  duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>

                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left  "
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold" >{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto  mb-6 xl:mx-0">{about.description}</p>
              </div>

              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto  xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4 ">
                      <span className="text-white/60 ">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
