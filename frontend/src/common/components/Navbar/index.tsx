import React from "react";
import { MobileNavbar } from "./MobileNavbar";
import { NavLinks } from "./NavLinks";
import ThemeButton from "@components/ThemeButton";

const Navbar = ({ theme = "dark" }) => {
  return (
    <>
      <MobileNavbar {...{ _theme: theme }} />

      <header className="z-[9999] fixed bottom-2 left-0 right-0 hidden md:flex items-center gap-2 justify-center">
        <NavLinks />
      </header>

      <div className="!z-[9999] hidden md:block fixed bottom-2 right-4 p-2 rounded-full bg-black text-white">
        <ThemeButton {...{ _theme: theme }} />
      </div>
    </>
  );
};

export default Navbar;
