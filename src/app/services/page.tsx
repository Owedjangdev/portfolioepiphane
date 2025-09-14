"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Développement Web",
    description: "Création de sites web réactifs et dynamiques utilisant des technologies modernes.",
    href: "/work",
  },
  
  {
    num: "04",
    title: "LOGO",
    description: "Amélioration de la visibilité du site web et du classement dans les moteurs de recherche.",
    href: "/services/seo-optimization",
  },
];

export default function Page() {
  return (
    <section className="py-11 xl:py-15">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:pt-8 xl:pb-24 xl:mx-8  "
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="flex w-full items-center justify-between mb-2">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                  {service.num}
                </div>
                <Link 
                  href={service.href} 
                  className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-gray-400 text-2xl" />
                </Link>
              </div>
              <h2 className="text-2xl font-semibold mb-2  leading-none group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="mb-4 text-gray-300">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}