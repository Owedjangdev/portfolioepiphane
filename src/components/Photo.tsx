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
        {/* Image avec bordure douce */}
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] 2xl:w-[500px] 2xl:h-[500px] rounded-full overflow-hidden shadow-2xl ring-4 ring-accent/20">
          <Image
            src="/imageepi.jpeg"
            priority
            quality={95}
            fill
            alt="Epiphane Houehanou"
            className="object-cover"
          />
        </div>

        {/* Cercle animé magique (plus fluide) */}
        <motion.svg
          className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="248"
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ strokeDasharray: "0 1000" }}
            animate={isInView ? { strokeDasharray: "50 1000" } : {}}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;