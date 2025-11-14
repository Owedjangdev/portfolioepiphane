// src/components/ProjectFilters.tsx
"use client";

import { useState } from "react";
import { projects } from "./projectsData";

interface ProjectFiltersProps {
  onFilter: (category: string) => void;
}

const categories = ["all", ...Array.from(new Set(projects.map(p => p.category)))];

export default function ProjectFilters({ onFilter }: ProjectFiltersProps) {
  const [active, setActive] = useState("all");

  const handleFilter = (cat: string) => {
    setActive(cat);
    onFilter(cat);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleFilter(cat)}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            active === cat
              ? "bg-accent text-white"
              : "bg-white/10 text-white/70 hover:bg-white/20"
          }`}
        >
          {cat === "all" ? "Tous" : cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}