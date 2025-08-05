// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Set to true to allow production builds even if there are type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Set to true to allow production builds even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
