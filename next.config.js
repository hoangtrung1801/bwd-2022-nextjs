/** @type {import('next').NextConfig} */
module.exports = {
    eslint: {
        dirs: ["src"],
    },
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
    },
    reactStrictMode: true,

    // Uncoment to add domain whitelist
    images: {
        domains: ["res.cloudinary.com", "images.unsplash.com"],
    },
};
