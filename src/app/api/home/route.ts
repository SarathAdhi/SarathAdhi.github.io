import { client } from "@lib/client";
import groupBy from "@utils/group-by";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const skillsQuery = '*[_type == "skills"] | order(type, asc)';
  const projectQuery = `*[_type == "projects" && highlights == true]`;
  const resumeQuery = `*[_type == "resume"]{
    "documentUrl": document.asset->url
  }`;

  const {
    skills: _skills,
    highlights,
    resume,
  } = await client.fetch(`
  {
    "skills": ${skillsQuery},
    "highlights": ${projectQuery},
    "resume": ${resumeQuery}
  }
  `);

  const skills = groupBy<Skill>(_skills, "type");

  return NextResponse.json({
    highlights,
    resume: resume[0].documentUrl,
    skills,
  });
}
