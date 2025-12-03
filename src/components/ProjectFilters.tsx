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
    <div className="flex justify-center mb-16">
      <div className="flex flex-wrap gap-3 p-3 bg-surface/50 backdrop-blur-sm rounded-xl border border-white/10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap text-base ${
              active === cat
                ? "bg-accent text-white shadow-lg"
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
          >
            {cat === "all" ? "Tous" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}