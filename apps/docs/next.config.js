const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  //   basePath: "/wedges/docs",
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
  },
};

module.exports = withContentlayer(nextConfig);
