"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";


const stats = [
  { num: 3, text: "Années d'expérience" },
  { num: 10, text: "Projets terminés" },
  { num: 6, text: "Technologies maîtrisées" },
  { num: 50, text: "Commits de code" },
];
const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {stats.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-accent">
                {isInView && <CountUp end={item.num} duration={3} />}+
              </div>
              <p className="mt-1 text-sm sm:text-base text-white/70 max-w-[140px] leading-tight">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;