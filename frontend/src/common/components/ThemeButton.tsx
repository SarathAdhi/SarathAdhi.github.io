"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { MoonStar, Sun } from "lucide-react";
import { cn } from "@lib/utils";

const ThemeButton = ({ _theme = "dark", className = "" }) => {
  const [theme, setTheme] = useState(_theme);

  return (
    <Button
      onClick={() => {
        let html = document.querySelector("html")!;
        const newTheme = html.className === "dark" ? "light" : "dark";
        html.className = newTheme;

        document.cookie = `theme=${newTheme}`;
        setTheme(newTheme);
      }}
      variant="ghost"
      className={cn(
        "text-lg py-2 px-4 transition-all hover:!opacity-100 hover:!text-black group-hover:bg-transparent group-hover:text-white group-hover:opacity-60 duration-300 hover:!bg-[#fbe8de] rounded-full",
        className
      )}
    >
      {theme === "dark" ? <MoonStar /> : <Sun />}
    </Button>
  );
};

export default ThemeButton;
