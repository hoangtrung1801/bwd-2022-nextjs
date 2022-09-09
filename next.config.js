/** @type {import('next').NextConfig} */
module.exports = {
    eslint: {
        dirs: ["src"],
    },
    env: {
        API_SERVER_URL: process.env.API_SERVER_URL,
    },
    reactStrictMode: true,

    // Uncoment to add domain whitelist
    images: {
        domains: [
            "res.cloudinary.com",
            "images.unsplash.com",
            "img.freepik.com",
        ],
    },
};
