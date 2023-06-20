"use client";

import { motion, Variants, HTMLMotionProps } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
  text: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "h6" | "p";
  spanClassName?: string;
}

const WavyText: React.FC<Props> = ({
  text,
  delay = 0,
  duration = 0.05,
  once = false,
  as = "h1",
  spanClassName = "",
  ...props
}: Props) => {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };
  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };
  const Comp = motion[as];

  return (
    <Comp
      style={{ display: "flex" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className={spanClassName}
          viewport={{ once: false }}
        >
          {letter === " " ? "\u2000" : letter}
        </motion.span>
      ))}
    </Comp>
  );
};

export default WavyText;
