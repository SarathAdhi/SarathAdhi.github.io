import React from "react";
import { MobileNavbar } from "./MobileNavbar";
import NavLinks from "./NavLinks";
import ThemeButton from "@components/ThemeButton";

const Navbar = ({ theme = "dark" }) => {
  return (
    <>
      <MobileNavbar {...{ _theme: theme }} />

      <header className="z-[99999] fixed bottom-0 py-2 left-0 right-0 hidden md:flex items-center gap-2 justify-center">
        <NavLinks />
      </header>

      <div className="!z-[99999] hidden md:block fixed bottom-2 right-4">
        <ThemeButton {...{ _theme: theme }} />
      </div>
    </>
  );
};

export default Navbar;
