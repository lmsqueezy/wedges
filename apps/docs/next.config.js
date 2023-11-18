const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/wedges/docs",
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
  },
  redirects() {
    return [
      {
        source: "/getting-started",
        destination: "/",
        permanent: true,
      },
      {
        source: "/components",
        destination: "/components/alert",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/components/alert",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
