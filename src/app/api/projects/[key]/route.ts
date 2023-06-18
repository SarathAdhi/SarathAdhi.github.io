import { client } from "@lib/client";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { key: string } }
) {
  const projectQuery = `*[_type == "projects" && (key == "${params.key}")][0]`;

  const project = (await client.fetch(projectQuery)) as Project;

  return NextResponse.json({
    project,
  });
}
