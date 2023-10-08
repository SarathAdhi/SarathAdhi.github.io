import WavyText from "@components/WavyText";
import { client, urlFor } from "@lib/client";
import React from "react";
import ProjectsCard from "./(components)/ProjectsCard";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Sarath Adhithya",
  description:
    "Explore my portfolio of projects aimed at enhancing my skills and expertise.",
};

type Props = {
  searchParams: {
    tab?: string;
  };
};

export const revalidate = 60; // revalidate this page every 60 seconds

const ViewProjects: React.FC<Props> = async ({ searchParams }) => {
  const tab = searchParams?.tab;

  const isStarred = tab === "starred";

  const projectsQuery = isStarred
    ? `*[_type == "projects" && starred == true]`
    : `*[_type == "projects"] | order(starred asc)`;
  const projects = (await client.fetch(projectsQuery)) as Project[];

  return (
    <div className="md:pb-40">
      <div className="parallax-text">
        <h1>Projects</h1>

        <WavyText as="h2" text={tab || "Projects"} />
      </div>

      <div className="container grid gap-2">
        {isStarred && (
          <div>
            <Button asChild>
              <Link href="/projects" className="gap-1 flex items-center">
                <ArrowLeft />

                <span>All Projects</span>
              </Link>
            </Button>
          </div>
        )}

        {projects.map((e, index) => {
          const images = e.images?.map((img) => urlFor(img));

          return (
            <ProjectsCard
              {...e}
              key={e.key}
              {...{ images, index: index + 1, id: e.key }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ViewProjects;
