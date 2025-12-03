// src/app/services/page.tsx
"use client";

import Link from "next/link";
import { BsArrowDownRight, BsCodeSlash, BsLaptop, BsRocket } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Développement Web",
    description: "Sites web modernes, rapides et responsifs avec React, Next.js, Tailwind.",
    href: "/work",
    icon: <BsCodeSlash className="text-2xl" />,
  },
  {
    num: "02",
    title: "Développement No-Code",
    description: "Applications rapides avec Webflow, Bubble, Adalo – sans écrire une ligne de code.",
    href: "/services/no-code",
    icon: <BsLaptop className="text-2xl" />,
  },
  {
    num: "03",
    title: "Optimisation SEO",
    description: "Amélioration du référencement naturel et de la visibilité sur Google.",
    href: "/services/seo",
    icon: <BsRocket className="text-2xl" />,
  },
];

export default function Services() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-white">
          Mes Services
        </h2>

        {/* Grille centré */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col p-6 sm:p-8 bg-surface/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
            >
              {/* Numéro + Icône */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <div className="text-accent group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
              </div>

              {/* Titre */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-accent transition-colors duration-500 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 flex-grow mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Bouton CTA */}
              <Link
                href={service.href}
                className="flex items-center gap-2 text-accent group-hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                En savoir plus
                <BsArrowDownRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Ligne décorative */}
              <div className="mt-6 h-px bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}