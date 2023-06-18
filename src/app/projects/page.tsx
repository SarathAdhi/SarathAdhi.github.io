import WavyText from "@components/WavyText";
import { client, urlFor } from "@lib/client";
import React from "react";
import ProjectsCard from "./(components)/ProjectsCard";

const ViewProjects = async () => {
  const projectsQuery = `*[_type == "projects"]`;
  const projects = (await client.fetch(projectsQuery)) as Project[];

  return (
    <div>
      <div className="parallax-text">
        <h1>Projects</h1>

        <WavyText as="h2" text="Projects" />
      </div>

      <div className="container grid gap-2">
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
