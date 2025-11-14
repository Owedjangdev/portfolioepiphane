// src/components/Work.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import WorkSliderBtns from "./WorkSliderBtns";
import { projects } from "./projectsData";

export default function Work() {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (category: string) => {
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === category));
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      className="min-h-screen py-12 xl:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Découvrez mes réalisations en développement web, du front-end au full-stack.
          </p>
        </div>

        <ProjectFilters onFilter={handleFilter} />

        {/* Slider pour mobile */}
        <div className="block xl:hidden mb-12">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            className="h-full"
          >
            {filteredProjects.map((project, i) => (
              <SwiperSlide key={i}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
            <WorkSliderBtns
              containerStyles="flex gap-3 justify-center mt-6"
              btnStyles="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white hover:bg-accent/80 transition-all"
            />
          </Swiper>
        </div>

        {/* Grille pour desktop */}
        <div className="hidden xl:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}