/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images:{
        domains:["cdnv2.tgdd.vn","cdn.tgdd.vn","img.tgdd.vn"]
      }
};
export default nextConfig;
