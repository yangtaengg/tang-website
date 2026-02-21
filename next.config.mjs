const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/tang-website" : "",
  assetPrefix: isProd ? "/tang-website/" : undefined
};

export default nextConfig;
