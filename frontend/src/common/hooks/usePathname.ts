import { useEffect, useState } from "react";
import { usePathname as uP, useSearchParams } from "next/navigation";

export const usePathname = () => {
  const __pathname = uP();
  const __searchParams = useSearchParams();

  const [pathname, setPathname] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    const _pathname = hash ? `/${hash}` : window.location.pathname;

    setPathname(_pathname);
  }, [__pathname, __searchParams]);

  return { pathname, setPathname };
};
