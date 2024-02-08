"use client";

import React, { useState } from "react";

import { Inter } from "next/font/google";
import { cn } from "@lib/utils";
import { XIcon } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
});

const TopAlert = () => {
  const [isTopAlertClosed, setIsTopAlertClosed] = useState(false);

  if (isTopAlertClosed) return <></>;

  return (
    <header
      className={cn(
        inter.className,
        "z-[99999] sticky top-0 sm:h-10 w-full bg-gray-200 dark:bg-gray-800 border-b border-black dark:border-white"
      )}
    >
      <div className="w-full relative">
        <div className="p-2 max-w-7xl mx-auto h-full grid place-content-center">
          <p className="text-center font-semibold whitespace-pre-line sm:whitespace-normal">
            {"This represents my 2023 portfolio. \nExplore my latest "}

            <a className="underline" href="https://sarathadhi.com/">
              portfolio
            </a>
            {" now!"}
          </p>
        </div>

        <button
          onClick={() => setIsTopAlertClosed(true)}
          className="absolute top-2 right-2"
        >
          <XIcon />
        </button>
      </div>
    </header>
  );
};

export default TopAlert;
