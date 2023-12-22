import { Button } from "@components/ui/button";
import { cn } from "@lib/utils";
import React from "react";
import WavyText from "@components/WavyText";
import AboutMeNote from "./(modules)/AboutMeNote";
import HighlightProjects from "./(modules)/HighlightProjects";
import MyDetails from "./(modules)/MyDetails";

const containerClassName =
  "bg-white dark:bg-gray-900 rounded-2xl pd border-2 border-border";

type Props = {
  highlights: Project[];
  resume: string;
  workExp: WorkExperience[];
};

const AboutSection: React.FC<Props> = ({
  highlights = [],
  resume = "",
  workExp = [],
}) => {
  return (
    <div id="about" className="z-40 flex flex-col gap-2 sm:gap-8 min-h-screen">
      <div className="parallax-text">
        <h1>ABOUT</h1>

        <WavyText as="h2" text="About" />
      </div>

      <div className="container grid gap-2">
        <div className="grid lg:grid-cols-2 gap-2">
          <div className="order-1 lg:order-none grid grid-cols-3 gap-2 col-span-1">
            <div
              className={cn(
                containerClassName,
                "flex flex-col items-end justify-evenly gap-4 col-span-3 pd"
              )}
            >
              <h2 className="uppercase font-extrabold">
                I convert your thoughts into code-written application
              </h2>

              <Button id="mail" className="rounded-full text-lg">
                <a href="mailto:s.sarathadhithya@gmail.com">👋 Hire Me</a>
              </Button>
            </div>

            <div className="col-span-3 grid sm:grid-cols-3 gap-2">
              <div
                className={cn(
                  containerClassName,
                  "col-span-1 flex flex-col items-center justify-center text-center gap-2"
                )}
              >
                <span className="text-3xl font-bold">3+</span> Year Experience
              </div>

              <div
                className={cn(
                  containerClassName,
                  "col-span-1 flex flex-col items-center justify-center text-center gap-2"
                )}
              >
                <span className="text-3xl font-bold">30+</span> Projects
              </div>

              <div
                className={cn(
                  containerClassName,
                  "col-span-1 flex flex-col items-center justify-center text-center gap-2"
                )}
              >
                <span className="text-3xl font-bold">3+</span> Worked Companies
              </div>
            </div>
          </div>

          <MyDetails {...{ containerClassName }} />
        </div>

        <div className="grid grid-cols-none lg:grid-cols-5 gap-y-2 lg:gap-2">
          <HighlightProjects {...{ highlights, containerClassName }} />

          <AboutMeNote {...{ containerClassName, resume, workExp }} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
