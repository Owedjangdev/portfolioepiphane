// src/components/ProjectCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Project } from "./projectsData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-surface/50 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-500">
      {/* Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Contenu */}
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all">
            {project.num}
          </span>
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-white/70 mb-4 line-clamp-2">{project.description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-white/10 rounded-full text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Liens */}
        <div className="flex gap-4">
          {project.live && (
            <Link href={project.live} target="_blank">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-all">
                    <BsArrowUpRight className="text-xl" />
                  </TooltipTrigger>
                  <TooltipContent>Voir le site</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          )}
          {project.github && (
            <Link href={project.github} target="_blank">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-all">
                    <BsGithub className="text-xl" />
                  </TooltipTrigger>
                  <TooltipContent>Code source</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}