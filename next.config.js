/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
    domains: ["avatars.githubusercontent.com", "seeklogo.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
