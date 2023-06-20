import { ToolTip } from "@components/ui/tooltip";
import { cn } from "@lib/utils";
import { socials } from "@utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyDetails = ({ containerClassName = "" }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-2 rounded-md col-span-1">
      <div className={cn(containerClassName, "!p-0 h-[350px] sm:h-[440px]")}>
        <Image
          className="w-full h-full object-contain"
          width={1000}
          height={1000}
          src="/assets/me.png"
          alt="My Profile Image"
          priority={true}
        />
      </div>

      <div className="grid grid-rows-6 gap-2 rounded-md">
        <div
          className={cn(
            containerClassName,
            "flex justify-between items-center"
          )}
        >
          <span className="text-gray-400">Name:</span>
          <p className="font-medium">Sarath Adhithya</p>
        </div>

        <div className={cn(containerClassName, "grid row-span-4 gap-4")}>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Based in:</span>
            <p className="font-medium">Chennai, India</p>
          </div>

          <Image
            className="mx-auto w-40 h-40"
            width={500}
            height={500}
            src="/assets/india-map.png"
            alt="My Location"
          />
        </div>

        <div
          className={cn(containerClassName, "flex justify-around items-center")}
        >
          {socials.map(({ name, href, Icon }) => (
            <ToolTip key={name} tooltip={name} side="bottom">
              <Link href={href} target="_blank">
                <Icon />
              </Link>
            </ToolTip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
