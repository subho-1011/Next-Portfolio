/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
        ],

        domains: ["images.pexels.com", "res.cloudinary.com"],
    },
};

export default nextConfig;
