import { urlFor } from "@lib/client";
import { cn } from "@lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  highlights: Project[];
  containerClassName: string;
};

const HighlightProjects: React.FC<Props> = ({
  highlights = [],
  containerClassName,
}) => {
  return (
    <div
      className={cn(
        containerClassName,
        "h-full flex flex-col gap-4 sm:col-span-3"
      )}
    >
      <div className="flex items-center justify-between">
        <h4>Projects</h4>

        <Link href="/projects" className="hover:underline">
          See All
        </Link>
      </div>

      <div className="relative h-full flex-1 grid grid-cols-2 gap-4">
        {highlights.map(({ images, title, key }) => (
          <Link
            key={key}
            href={`/projects/${key}`}
            className="relative rounded-3xl overflow-hidden group"
            prefetch={false}
          >
            <Image
              className="w-full h-full object-cover"
              width={500}
              height={500}
              src={urlFor(images[0])}
              alt={title}
            />

            <span className="z-40 font-semibold hidden sm:block absolute top-4 right-4 bg-background px-4 py-2 rounded-3xl border-2">
              {title}
            </span>

            <div className="top-0 left-0 w-full h-full grid place-content-center duration-200 pd scale-0 group-hover:scale-100 rounded-3xl absolute bg-background/80">
              <h6 className="text-sm flex items-center gap-2">
                Read More
                <ExternalLink />
              </h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HighlightProjects;
