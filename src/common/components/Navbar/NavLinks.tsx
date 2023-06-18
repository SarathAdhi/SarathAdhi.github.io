"use client";

import Link from "next/link";
import { pages } from "./pages";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const NavLinks = () => {
  const __pathname = usePathname();
  const __searchParams = useSearchParams();

  const [pathname, setPathname] = useState("");

  useEffect(() => {
    const _pathname = window.location.href;

    setPathname(_pathname);
  }, [__pathname, __searchParams]);

  return (
    <>
      {pages.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className={clsx(
            "text-lg py-2 px-4 transition-all hover:!opacity-100 hover:!text-black group-hover:bg-transparent group-hover:text-white group-hover:opacity-60 duration-300 hover:!bg-[#fbe8de] rounded-full",
            pathname.includes(href) && "bg-[#fbe8de] text-black"
          )}
        >
          {name}
        </Link>
      ))}
    </>
  );
};
