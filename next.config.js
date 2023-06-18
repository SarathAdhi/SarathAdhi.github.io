/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // loader: "akamai",
    // path: "",
    domains: ["avatars.githubusercontent.com", "seeklogo.com", "cdn.sanity.io"],
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_TOKEN_ID: process.env.NEXT_PUBLIC_SANITY_TOKEN_ID,
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
};

module.exports = nextConfig;
