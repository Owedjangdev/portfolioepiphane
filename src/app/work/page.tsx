"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "front-end",
    title: "projet 1 (projet personnel)",
    description: "Un projet de site e-commerce de vente de vêtements en ligne.",
    stack: [{ name: "Tailwindcss" }, { name: "React.js" }, { name: "TypeScript" }],
    image: "/PROJET1.png",
    live: "https://panto1.netlify.app/",
    github: "https://github.com/Owedjangdev/Projet_panto",
  },
  

];

export default function WorkPage() {
  const [project, setProject] = useState(projects[0]);

  const handleSlidechange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Info du projet */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none relative z-20">
            <div className="flex flex-col gap-[30px]">
              {/* Numéro */}
              <div className="text-8xl leading-none font-extrabold text-outline z-20">
                {project.num}
              </div>

              {/* Catégorie et titre */}
              <h2 className="text-2xl font-bold leading-none text-white z-20 capitalize">
                {project.category} project(personnel)
              </h2>



              {/* Description */}
              <p className="text-white/60 z-20">{project.description}</p>

              {/* Stack */}
              <ul className="flex gap-4 z-20">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Bordure */}
              <div className="border border-white/20 z-20"></div>

              {/* Boutons Live & Github */}
              <div className="flex items-center gap-4 z-20">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                          <BsArrowUpRight className="text-white text-3xl" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                          <BsGithub className="text-white text-3xl" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Slider d’images */}
          <div className="w-full xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlidechange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    {/* Image */}
                    <Image
                      src={project.image}
                      fill
                      alt={project.title}
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}

              {/* Slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
