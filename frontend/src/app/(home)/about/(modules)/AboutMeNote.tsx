import { cn } from "@lib/utils";
import React from "react";
import WorkExperienceSheet from "../(components)/WorkExperienceSheet";
import { Button } from "@components/ui/button";
import Link from "next/link";

type Props = {
  containerClassName: string;
  resume: string;
  workExp: WorkExperience[];
};

const AboutMeNote: React.FC<Props> = ({
  workExp = [],
  resume = "",
  containerClassName = "",
}) => {
  return (
    <div
      className={cn(
        containerClassName,
        "!p-4 sm:col-span-2 flex flex-col justify-between gap-4"
      )}
    >
      <h4 className="uppercase leading-tight">🤏 Note about me</h4>

      <p className="leading-tight text-justify">
        I am a self-taught developer, currently pursuing my undergraduate
        studies in CSE with specialization in AI and Robotics at Vellore
        Institute of Technology - Chennai. I am dedicated to staying ahead of
        the curve by constantly exploring the latest advancements in my tech
        stack. My journey in the world of technology has led me to expand my
        expertise beyond traditional Full Stack Development. I have recently
        been delving into the field of Blockchain, DevOps, and Data Science.
      </p>

      <div className="flex gap-4">
        <Button className="rounded-full" asChild>
          <Link href={resume} target="_blank">
            Resume
          </Link>
        </Button>

        <WorkExperienceSheet {...{ workExp }} />
      </div>
    </div>
  );
};

export default AboutMeNote;
