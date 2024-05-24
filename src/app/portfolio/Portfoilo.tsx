"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Portfolio = () => {
    const ref = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div
                className="h-[600vh] relative"
                ref={ref as React.RefObject<HTMLDivElement>}
            >
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl sm:text-8xl text-purple-300 text-center">
                    My Works
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
                        {projects.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex flex-col gap-8 text-white">
                                    <h1 className="text-xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
                                        {item.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[380px]">
                                        <Image src={item.img} alt="" fill />
                                    </div>
                                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                        {item.desc}
                                    </p>
                                    {item.link && (
                                        <Link
                                            href={item.link}
                                            className="flex justify-end"
                                        >
                                            <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                                                See Demo
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            {/* Hire me */}
            <div className="w-screen h-screen flex flex-col items-center justify-center text-center bg-purple-900">
                <h1 className="text-4xl sm:text-8xl">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 8,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[500px] md:h-[500px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath
                                xlinkHref="#circlePath"
                                className="text-xl"
                            >
                                Web Developer....Front-end Developer...
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-purple-950 text-purple-100 rounded-full flex items-center justify-center"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Portfolio;

const projects = [
    {
        id: 1,
        color: "from-blue-300 to-violet-300",
        title: "Video App",
        desc: "Created a video app using NextJS. Integrated user authentication through JWT tokens and a refresh token system. Oversaw video uploads, publishing, and CRUD operations for videos. Devised a subscription system along with features like likes, comments, tweets, and playlist functionalities.",
        img: "https://res.cloudinary.com/dcufm6qr0/image/upload/v1716529104/portfolio/jyzxbexraerspfaucsdd.png",
        link: "https://video-app-next-js.vercel.app",
    },
    {
        id: 2,
        color: "from-red-300 to-blue-300",
        title: "React Blogs - StoryArcs",
        desc: "StoryArcs uses React.js and Redux for frontend development, Appwrite for secure user authentication, and database use for user data, images, and content, ensuring a smooth and secure user experience.",
        img: "https://res.cloudinary.com/dcufm6qr0/image/upload/v1716529248/portfolio/vnmhu3eofkrfiyloc0nk.png",
        link: "https://story-arcs-blog.vercel.app",
    },
    {
        id: 3,
        color: "from-violet-300 to-purple-300",
        title: "Algorithm Visualizer",
        desc: "Developed an algorithm visualizer using React.js and Redux. The app allows users to visualize algorithms like Dijkstra, A*, BFS, and DFS. The app also includes a maze generator and pathfinding algorithms.",
        img: "https://res.cloudinary.com/dcufm6qr0/image/upload/v1716528092/portfolio/cyziixn6jszzen2vfsji.png",
        link: "",
    },
    {
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "Portfolio Website",
        desc: " Designed and developed a portfolio website using Next.js, Tailwind CSS, and Framer Motion. The website showcases my projects, skills, and contact information. The website is fully responsive and optimized for mobile devices.",
        img: "https://res.cloudinary.com/dcufm6qr0/image/upload/v1716532887/portfolio/jzmy2bjxxk47vdj12ozv.png",
        link: "",
    },
];
