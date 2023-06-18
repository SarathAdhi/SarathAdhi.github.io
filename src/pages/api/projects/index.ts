import { client } from "@lib/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projectsQuery = `*[_type == "projects"]`;
  const projects = await client.fetch(projectsQuery);

  return res.json({
    projects,
  });
}
