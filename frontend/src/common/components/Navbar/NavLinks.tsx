"use client";

import Link from "next/link";
import { pages } from "./pages";
import clsx from "clsx";
import { usePathname } from "@hooks/usePathname";

const Wrapper = {
  Separate: ({ children }: { children: React.ReactNode }) => (
    <div className="p-2 flex items-center rounded-full bg-black text-white gap-1">
      {children}
    </div>
  ),

  Group: ({ children }: { children: React.ReactNode }) => (
    <div className="p-2 flex items-center rounded-full bg-black text-white">
      <div className="group flex items-center gap-1">{children}</div>
    </div>
  ),
};

export const NavLinks = () => {
  const { pathname } = usePathname();

  return (
    <>
      {pages.map(({ isSeparateChild, items }, index) => {
        const ComponentWrapper = isSeparateChild
          ? Wrapper.Separate
          : Wrapper.Group;
        return (
          <ComponentWrapper key={index}>
            {items.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className={clsx(
                  "font-bold py-2 px-4 transition-all hover:!opacity-100 hover:!text-black group-hover:bg-transparent group-hover:text-white group-hover:opacity-60 duration-300 hover:!bg-[#fbe8de] rounded-full",
                  pathname === href && "bg-[#fbe8de] text-black"
                )}
              >
                {name}
              </Link>
            ))}
          </ComponentWrapper>
        );
      })}
    </>
  );
};
