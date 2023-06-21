import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export function GET() {
  const theme = cookies().get("theme-webpage");

  const newTheme = theme?.value === "dark" ? "light" : "dark";

  cookies().set("theme-webpage", newTheme);

  return NextResponse.json({});
}
