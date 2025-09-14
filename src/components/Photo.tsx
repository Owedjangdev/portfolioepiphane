"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center py-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* Image container */}
        <motion.div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] xl:w-[350px] xl:h-[350px] z-10">
          <Image
            src="/photo.png"
            priority
            quality={100}
            fill
            alt="Epiphane Houehanou"
            className="object-contain rounded-full"
            
          />
        </motion.div>

        {/* Circle animé */}
        <motion.svg
          className="absolute top-0 left-0 w-[180px] sm:w-[220px] xl:w-[350px] h-[180px] sm:h-[220px] xl:h-[350px]"
          fill="transparent"
          viewBox="0 0 350 350"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="175"
            cy="175"
            r="170"
            stroke="#2563eb"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "20 10 0 0" }}
            animate={{
              strokeDasharray: [
                "15 120 25 25",
                "16 25 92 72",
                "4 250 22 22"
              ],
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
  )
}

export default Photo 