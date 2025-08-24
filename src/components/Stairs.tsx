import { motion } from "framer-motion";

const StairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: "0%", // remonter à zéro
  },
};

const reverseIndex = (index: number) => {
  const total = 6;
  return total - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index: number) => (
        <motion.div
          key={index}
          variants={StairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
