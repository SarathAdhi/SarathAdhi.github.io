"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { MoonStar, Sun } from "lucide-react";
import { cn } from "@lib/utils";

const ThemeButton = ({ _theme = "dark", className = "" }) => {
  const [theme, setTheme] = useState(_theme);

  return (
    <Button
      variant="ghost"
      onClick={async () => {
        let html = document.querySelector("html")!;
        const newTheme = html.className === "dark" ? "light" : "dark";

        html.className = newTheme;

        await fetch("/api/theme");

        // document.cookie = `theme-webpage=${newTheme}`;
        // console.log(document.cookie);

        setTheme(newTheme);
      }}
      className={cn(
        "text-lg px-4 py-5 transition-all border-2 duration-300 hover:!bg-foreground hover:text-background rounded-full",
        className
      )}
    >
      {theme === "dark" ? <MoonStar /> : <Sun />}
    </Button>
  );
};

export default ThemeButton;
