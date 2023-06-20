import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return response;
}
