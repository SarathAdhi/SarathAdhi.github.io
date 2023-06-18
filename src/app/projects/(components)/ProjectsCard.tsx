"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ToolTip } from "@components/ui/tooltip";
import ImageSlideShow from "./ImageSlideShow";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

type Props = {
  id: Project["key"];
  index: number;
} & Project;

const ProjectsCard: React.FC<Props> = ({
  index,
  id,
  title,
  techstack,
  images,
}) => {
  const [showImages, setShowImages] = useState(false);

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
    },
  };

  const MotionLink = motion(Link);

  return (
    <MotionLink
      href={`/projects/${id}`}
      className="relative w-full pd space-y-4"
      onHoverStart={() => {
        if (showImages) return;
        setShowImages(true);
      }}
      onHoverEnd={() => {
        if (!showImages) return;
        setShowImages(false);
      }}
    >
      <div className="relative flex items-center gap-10">
        <div className="space-y-2">
          <h2 className="flex items-start gap-4">
            <span className="text-base">
              {index < 10 ? `0${index}` : index}
            </span>

            <span>{title}</span>
          </h2>

          <div className="ml-8 flex items-center flex-wrap gap-2 sm:gap-4">
            {techstack.map(({ name, image }) => (
              <ToolTip key={name} tooltip={name} side="bottom">
                <div className="duration-200 hover:scale-125 w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-white p-1 sm:p-2 rounded-full">
                  <Image
                    className="w-full h-full rounded-md"
                    width={25}
                    height={25}
                    key={name}
                    src={image}
                    alt={name}
                  />
                </div>
              </ToolTip>
            ))}
          </div>
        </div>

        {images && (
          <div className="hidden lg:block">
            <motion.div
              initial="hidden"
              animate={showImages ? "show" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
              className="z-40 absolute -top-2"
            >
              <ImageSlideShow images={images} />
            </motion.div>
          </div>
        )}
      </div>

      <ExternalLinkIcon className="hidden sm:block absolute top-0 right-0" />
    </MotionLink>
  );
};

export default ProjectsCard;
