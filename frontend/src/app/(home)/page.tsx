import { client } from "@lib/client";
import AboutSection from "./about";
import ContactSection from "./contact";
import HeroSection from "./hero";
import SkillsSection from "./skills";
import groupBy from "@utils/group-by";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Home() {
  const skillsQuery = '*[_type == "skills"] | order(type asc)';
  const projectQuery = `*[_type == "projects" && highlights == true]`;
  const resumeQuery = `*[_type == "resume"][0]{
    "documentUrl": document.asset->url
  }`;
  const workExpQuery = `*[_type == "work-experience"] | order(number desc)[]{
    ...,
    "image": image.asset->url
  }`;

  const {
    skills: _skills,
    highlights,
    resume,
    workExp,
  } = await client.fetch(`
    {
      "skills": ${skillsQuery},
      "highlights": ${projectQuery},
      "resume": ${resumeQuery},
      "workExp": ${workExpQuery}
    }
  `);

  const skills = groupBy<Skill>(_skills, "type");

  return (
    <div className="flex flex-col flex-1 h-full gap-4">
      <HeroSection />
      <AboutSection {...{ highlights, resume: resume.documentUrl, workExp }} />
      <SkillsSection {...{ skills }} />
      <ContactSection />
    </div>
  );
}
