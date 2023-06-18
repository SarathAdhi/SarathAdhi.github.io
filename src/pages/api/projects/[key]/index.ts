import { client } from "@lib/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const key = req.query?.key;

  const projectQuery = `*[_type == "projects" && (key == "${key}")][0]`;

  const project = (await client.fetch(projectQuery)) as Project;

  return res.json({
    project,
  });
}
