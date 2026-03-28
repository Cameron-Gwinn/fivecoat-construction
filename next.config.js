/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/fivecoat-construction",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
