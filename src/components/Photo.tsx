"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Photo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative w-full flex justify-center xl:justify-end">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <div className="w-[298px] h-[298px] sm:w-[370px] sm:h-[370px] md:w-[420px] md:h-[420px] xl:w-[498px] xl:h-[498px] 2xl:w-[540px] 2xl:h-[540px] relative z-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent to-blue-500 opacity-20 blur-2xl animate-pulse"></div>
          <Image
            src="/imageowe.jpg"
            priority
            quality={100}
            fill
            alt="Epiphane Houehanou"
            className="object-cover rounded-full border-4 border-slate-900/50 shadow-2xl"
          />
        </div>

        {/* Cercle animé magique (plus fluide) */}
        <motion.svg
          className="absolute top-0 w-[300px] h-[300px] sm:w-[372px] sm:h-[372px] md:w-[422px] md:h-[422px] xl:w-[500px] xl:h-[500px] 2xl:w-[542px] 2xl:h-[542px] z-20 pointer-events-none"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ff99" />
              <stop offset="100%" stopColor="#0072ff" />
            </linearGradient>
          </defs>
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="url(#circleGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;