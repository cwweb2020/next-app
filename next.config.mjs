/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
    // También puedes mantener las configuraciones existentes, si las tienes
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/luanita-5dd1e.appspot.com/**",
      },
    ],
  },
};

export default nextConfig;
