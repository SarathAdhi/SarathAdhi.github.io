"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const ParallaxMouseMove = () => {
  useEffect(() => {
    function parallax(event: globalThis.MouseEvent) {
      document.querySelectorAll(".parallax-wrap img").forEach((shift) => {
        if (window.innerWidth < 1024) return;

        const position = shift.getAttribute("aria-valuetext")!;

        const x = (window.innerWidth - event.pageX * parseInt(position)) / 90;
        const y = (window.innerHeight - event.pageY * parseInt(position)) / 90;

        // @ts-ignore
        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <div
      id="parallax-wrap"
      className="parallax-wrap duration-200 transition-all"
    >
      <Image
        draggable={false}
        aria-valuetext="5"
        className="top-[40%] left-40"
        width={50}
        height={50}
        src="/assets/hero/1.png"
        alt="React"
      />

      <Image
        draggable={false}
        aria-valuetext="5"
        className="top-[40%] right-40"
        width={50}
        height={50}
        src="/assets/hero/2.png"
        alt="React"
      />

      <Image
        draggable={false}
        aria-valuetext="-2"
        className="top-[10%] right-[50%] "
        width={50}
        height={50}
        src="/assets/hero/3.png"
        alt="React"
      />

      <Image
        draggable={false}
        aria-valuetext="2"
        className="bottom-[10%] right-[50%]"
        width={50}
        height={50}
        src="/assets/hero/4.png"
        alt="React"
      />

      <Image
        draggable={false}
        aria-valuetext="-5"
        className="bottom-[30%] left-40"
        width={50}
        height={50}
        src="/assets/hero/5.png"
        alt="React"
      />

      <Image
        draggable={false}
        aria-valuetext="-5"
        className="bottom-[30%] right-40"
        width={50}
        height={50}
        src="/assets/hero/6.png"
        alt="React"
      />
    </div>
  );
};

export default ParallaxMouseMove;
