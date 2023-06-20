/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["avatars.githubusercontent.com", "seeklogo.com", "cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
