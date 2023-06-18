import { client } from "@lib/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const projectsQuery = `*[_type == "projects"]`;
  const projects = await client.fetch(projectsQuery);

  return NextResponse.json({
    projects,
  });
}
