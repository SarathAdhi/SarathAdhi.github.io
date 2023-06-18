import WavyText from "@components/WavyText";
import { Button } from "@components/ui/button";
import { ToolTip } from "@components/ui/tooltip";
import { urlFor } from "@lib/client";
import { cn } from "@lib/utils";
import { socials } from "@utils/constants";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const containerClassName =
  "bg-white dark:bg-gray-900 rounded-2xl pd border-2 border-border";

type Props = {
  highlights: Project[];
  resume: string;
};

const AboutSection: React.FC<Props> = ({ highlights = [], resume = "" }) => {
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
              <h2>I convert your thoughts into code-written application</h2>

              <Button className="rounded-full" asChild>
                <Link href={"mailto:s.sarathadhithya@gmail.com"}>
                  👋 Hire Me
                </Link>
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
                <span className="text-3xl font-bold">3+</span> Year Experience
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-2 rounded-md col-span-1">
            <div className={cn(containerClassName)}></div>

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
                className={cn(
                  containerClassName,
                  "flex justify-around items-center"
                )}
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-2 lg:gap-2">
          <div
            className={cn(
              containerClassName,
              "flex flex-col gap-4 sm:col-span-3"
            )}
          >
            <div className="flex items-center justify-between">
              <h4>Projects</h4>

              <Link href="/projects" className="hover:underline">
                See All
              </Link>
            </div>

            <div className="h-full grid grid-cols-2 gap-2">
              {highlights.map(({ images, title, key }) => (
                <Link
                  key={key}
                  href={`/projects/${key}`}
                  className="relative rounded-3xl overflow-hidden group"
                >
                  <Image
                    className="z-0 absolute top-0 left-0 w-full h-full object-cover"
                    width={500}
                    height={500}
                    src={urlFor(images[0])}
                    alt={title}
                  />

                  <div className="flex flex-col items-center justify-center gap-2 duration-200 pd w-32 h-14 group-hover:w-full group-hover:h-full rounded-3xl rounded-tl-none rounded-br-none absolute top-0 right-0 bg-background/50">
                    <h6>{title}</h6>

                    <h6 className="text-sm items-center gap-1 hidden group-hover:flex">
                      Read More
                      <ExternalLink />
                    </h6>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div
            className={cn(containerClassName, "!p-4 sm:col-span-2 grid gap-4")}
          >
            <h4 className="uppercase leading-tight">🤏 Note about me</h4>

            <p className="leading-tight">
              I am a self-taught developer, currently pursuing my undergraduate
              studies in CSE with specialization in AI and Robotics at Vellore
              Institute of Technology - Chennai. I am dedicated to staying ahead
              of the curve by constantly exploring the latest advancements in my
              tech stack. My journey in the world of technology has led me to
              expand my expertise beyond traditional Full Stack Development. I
              have recently been delving into the field of Blockchain, DevOps,
              and Data Science.
            </p>

            <Button className="rounded-full" asChild>
              <Link href={resume} target="_blank">
                Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
