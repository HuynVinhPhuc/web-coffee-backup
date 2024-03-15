/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      appDir: true,
  },
  env: {
      API_URL: "http://localhost:3000",
      DB_URI: "mongodb://localhost:27017/web-coffee",

      CLOUD_NAME: "huynvinhphuc",
      CLOUDINARY_API_KEY: "952497449796884",
      CLOUDINARY_API_SECRET: "p8qLuv43sWibt80BZRiYXw3QWgY",

      NEXTAUTH_SECRET: "huynvinhphucssss"
  },
  images: {
      domains: ["res.cloudinary.com"]
  },
};

module.exports = nextConfig;

