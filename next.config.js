/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
    domains: ["avatars.githubusercontent.com", "seeklogo.com", "cdn.sanity.io"],
  },
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_TOKEN_ID: process.env.SANITY_TOKEN_ID,
    SERVER_URL: process.env.SERVER_URL,
  },
};

module.exports = nextConfig;
