import { client, urlFor } from "@lib/client";
import React from "react";
import MarkDown from "@components/MarkDown";
import { ImageCarousel } from "./(components)/ImageCarousel";
import Image from "next/image";
import { Separator } from "@components/ui/separator";
import { ToolTip } from "@components/ui/tooltip";
import { Metadata } from "next";
import Link from "next/link";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Button } from "@components/ui/button";

type Props = {
  params: {
    key: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const key = params.key;

  const projectQuery = `*[_type == "projects" && (key == "${key}")][0]`;

  const project = (await client.fetch(projectQuery)) as Project;

  if (!project)
    return {
      title: `Page Not Found | Sarath Adhithya`,
    };

  const { title, images: _images, description } = project;

  const images = _images.map((e) => urlFor(e));

  return {
    title: `${title} | Sarath Adhithya`,
    description: description,
    openGraph: {
      images,
    },
  };
}

export const revalidate = 60; // revalidate this page every 60 seconds

const ViewProject: React.FC<Props> = async ({ params }) => {
  const key = params.key;

  const projectQuery = `*[_type == "projects" && (key == "${key}")][0]`;

  const project = (await client.fetch(projectQuery)) as Project;

  if (!project) {
    return (
      <div className="h-screen grid place-content-center place-items-center gap-4">
        <h3 className="text-center">Oops.. Project Not Found</h3>
        <Button variant="secondary" asChild>
          <Link href="/projects">Go to Projects</Link>
        </Button>
      </div>
    );
  }

  const {
    title,
    images: _images,
    description,
    techstack,
    demo,
    github,
  } = project;

  const images = _images.map((e) => urlFor(e));

  return (
    <div className="container space-y-4 md:!pb-20">
      <h1 className="text-center">{title}</h1>

      <ImageCarousel {...{ images }} />

      <Separator />

      <div className="w-full flex flex-wrap justify-evenly gap-y-4">
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

      <div className="flex items-center md:items-start flex-col-reverse md:flex-row gap-4 md:gap-8">
        <div className="space-y-2">
          <MarkDown source={description} />
        </div>

        <Separator className="md:hidden block" />

        <div className="w-full md:w-auto md:sticky top-12 md:top-4 md:px-2 md:py-4 rounded-full md:border md:border-foreground flex flex-row md:flex-col justify-evenly md:justify-normal gap-4 md:text-background">
          <ToolTip tooltip="Demo" side="left">
            <Link href={demo} target="_blank">
              <ExternalLinkIcon size={30} className="text-foreground" />
            </Link>
          </ToolTip>

          <Separator className="hidden md:block" />

          <ToolTip tooltip="GitHub" side="left">
            <Link href={github} target="_blank">
              <GithubIcon size={30} className="text-foreground" />
            </Link>
          </ToolTip>
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
