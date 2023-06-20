"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedContainer } from "@components/AnimatedContainer";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: (i: number = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0 },
  }),
};

type Props = {
  techStack: Project["techstack"];
};

const TechStackRenderer: React.FC<Props> = ({ techStack = [] }) => {
  const MotionImage = motion(Image);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex items-center justify-center flex-wrap gap-8"
    >
      {techStack.map(({ name, image }) => (
        <AnimatedContainer
          key={name}
          className="flex flex-col items-center justify-center gap-2"
        >
          <MotionImage
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="w-14 h-14 bg-gray-100 border boder-border shadow-md rounded-lg p-2"
            width={100}
            height={100}
            src={image}
            alt={name}
          />

          <span className="font-semibold text-center">{name}</span>
        </AnimatedContainer>
      ))}
    </motion.div>
  );
};

export default TechStackRenderer;
