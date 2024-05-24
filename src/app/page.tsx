"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePage = () => {
    const router = useRouter();

    return (
        <>
            <motion.div
                className="h-full"
                initial={{ y: "-200vh" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1 }}
            >
                <div className="h-full md:pb-10 flex flex-col lg:flex-row px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40">
                    {/* Image Con */}
                    <div className="h-1/2 xl:hidden lg:h-full lg:w-1/2 relative">
                        <Image
                            src="/hero1.png"
                            alt=""
                            fill
                            className="object-contain grayscale"
                        />
                    </div>

                    {/* Text Con */}
                    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
                        <h1 className="text-2xl md:text-6xl font-bold text-purple-950">
                            Hello World! I am Subhajit Pramanik.
                        </h1>
                        <p className="md:text-xl text-purple-500">
                            &lsquo;👋 Hi! I&apos;m Subhajit Pramanik, a skilled
                            web developer passionate about creating dynamic and
                            user-friendly websites. Proficient in JavaScript,
                            TypeScript, Node JS, Express JS, ReactJS, NextJS,
                            Tailwind CSS, MySQL, I specialize in crafting
                            engaging online experiences that exceed
                            expectations. Let&apos;s collaborate and bring your
                            digital vision to life!&rsquo;
                        </p>
                        <div className="w-full flex gap-4">
                            <button
                                className="p-4 rounded-lg ring-2 ring-purple-950 text-purple-200 bg-purple-900"
                                onClick={() => router.push("/portfolio")}
                            >
                                My Work
                            </button>
                            <button
                                className="p-4 rounded-lg ring-2 ring-purple-950 text-purple-500"
                                onClick={() => router.push("/contact")}
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>

                    {/* Image Con */}
                    <div className="h-1/2 hidden xl:flex lg:h-full lg:w-1/2 relative">
                        <Image
                            src="/hero1.png"
                            alt=""
                            fill
                            className="object-contain grayscale"
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default HomePage;
