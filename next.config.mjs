/** @type {import('next').NextConfig} */
const nextConfig = {
  //React Three Fiber
  transpilePackages: ['three'],

  //GitHub Pages deploy config
  reactStrictMode: true,
  basePath: '/portfolio',
};

export default nextConfig;
