import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

const child = {
  hidden: {
    opacity: 0,
    y: -20,
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

interface Props extends HTMLMotionProps<"div"> {}

export const AnimatedContainer: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <motion.div variants={child} {...rest}>
      {children}
    </motion.div>
  );
};
