import { client, urlFor } from "@lib/client";
import React from "react";
import MarkDown from "./(components)/MarkDown";
import { ImageCarousel } from "./(components)/ImageCarousel";
import Image from "next/image";
import { Separator } from "@components/ui/separator";
import { ToolTip } from "@components/ui/tooltip";

type Props = {
  params: {
    key: string;
  };
};

export const revalidate = 60; // revalidate this page every 60 seconds

const ViewProject: React.FC<Props> = async ({ params }) => {
  const key = params.key;

  const projectQuery = `*[_type == "projects" && (key == "${key}")][0]`;

  const project = (await client.fetch(projectQuery)) as Project;

  if (!project) return <div>Project Not Found</div>;

  const { title, images: _images, description, techstack } = project;

  const images = _images.map((e) => urlFor(e));

  return (
    <div className="container space-y-4 md:pb-20">
      <h1 className="text-center">{title}</h1>

      <ImageCarousel {...{ images }} />

      <Separator />

      <div className="flex flex-wrap justify-evenly gap-y-4">
        {techstack.map(({ name, image }) => (
          <ToolTip key={name} tooltip={name} side="bottom">
            <Image
              className="w-10 h-10 sm:w-14 sm:h-14 bg-gray-100 border boder-border shadow-md rounded-lg p-2 duration-200 hover:scale-110"
              width={100}
              height={100}
              src={image}
              alt={name}
            />
          </ToolTip>
        ))}
      </div>

      <Separator />

      <div className="text-center space-y-2">
        <MarkDown source={description} />
      </div>
    </div>
  );
};

export default ViewProject;
