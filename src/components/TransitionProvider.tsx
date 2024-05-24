"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
    const pathName = usePathname();

    return (
        <AnimatePresence mode="wait">
            <div
                key={pathName}
                className="w-screen h-screen bg-gradient-to-b from-rose-100 to-purple-100"
            >
                <motion.div
                    className="h-screen w-screen fixed bg-purple-950 rounded-b-[100px] z-40"
                    animate={{ height: "0vh" }}
                    exit={{ height: "150vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.div
                    className="fixed m-auto top-0 bottom-0 left-0 right-0 text-purple-100 text-8xl cursor-default z-40 w-fit h-fit"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {pathName.substring(1)}
                </motion.div>
                <motion.div
                    className="h-screen w-screen fixed bg-purple-950 rounded-t-[100px] bottom-0 z-30"
                    initial={{ height: "150vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.5 } }}
                />
                <div className="h-24">
                    <Navbar />
                </div>
                <div className="h-[calc(100vh-6rem)]">{children}</div>
            </div>
        </AnimatePresence>
    );
};

export default TransitionProvider;
