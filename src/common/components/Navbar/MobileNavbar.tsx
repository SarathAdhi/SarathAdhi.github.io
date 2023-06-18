"use client";

import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {
  AnimatePresence,
  motion,
  SVGMotionProps,
  useCycle,
} from "framer-motion";
import { pages } from "./pages";
import Link from "next/link";
import { useDimensions } from "@hooks/use-dimensions";
import { cn } from "@lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

const variants_ul = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants_li = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    className="stroke-black dark:stroke-white"
    strokeWidth="2"
    strokeLinecap="round"
    {...props}
  />
);

export const MobileNavbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const __pathname = usePathname();
  const __searchParams = useSearchParams();

  const [pathname, setPathname] = useState("");

  useEffect(() => {
    const _pathname = window.location.href;

    setPathname(_pathname);
  }, [__pathname, __searchParams]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="w-full fixed md:hidden flex top-2 right-2 z-[9999] flex-col items-end gap-4"
    >
      <button onClick={() => toggleOpen()}>
        <svg width="30" height="30" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={variants_ul}
            initial="closed"
            animate="open"
            exit="closed"
            className="group flex flex-col items-end gap-5 font-bold"
          >
            {pages.map(({ name, href }) => (
              <motion.li
                key={name}
                variants={variants_li}
                whileHover={{ scale: 1.1, x: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  key={name}
                  href={href}
                  onClick={() => toggleOpen()}
                  className={cn(
                    "text-lg py-2 px-4 transition-all bg-black dark:bg-white dark:text-black border-2 border-black hover:!opacity-100 hover:!text-white group-hover:bg-transparent group-hover:text-gray-500 group-hover:opacity-60 duration-300 hover:!bg-purple-600 rounded-full",
                    pathname.includes(href) && "!bg-purple-600 !text-white"
                  )}
                >
                  {name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
