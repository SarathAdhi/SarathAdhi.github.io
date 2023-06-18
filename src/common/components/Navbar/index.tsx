import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { MobileNavbar } from "./MobileNavbar";
import { NavLinks } from "./NavLinks";
import ThemeButton from "@components/ThemeButton";

const Navbar = ({ theme = "dark" }) => {
  return (
    <>
      <MobileNavbar {...{ _theme: theme }} />

      <header className="z-[9999] fixed bottom-4 left-0 right-0 hidden md:flex items-center gap-2 justify-center">
        <div className="p-2 flex items-center rounded-full bg-black text-white">
          <div className="group flex items-center gap-1 font-bold">
            <NavLinks />
          </div>
        </div>

        <div className="p-2 flex items-center rounded-full bg-black text-white gap-1">
          <Link
            href={"/#"}
            className={clsx(
              "text-lg py-2 px-4 font-bold  transition-all hover:!opacity-100 hover:!text-black group-hover:bg-transparent group-hover:text-white group-hover:opacity-60 duration-300 hover:!bg-[#fbe8de] rounded-full"
            )}
          >
            Up
          </Link>

          <ThemeButton {...{ _theme: theme }} />
        </div>
      </header>
    </>
  );
};

export default Navbar;
