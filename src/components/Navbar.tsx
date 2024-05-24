"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import {
  PageLinks,
  SocialLinks,
  NavbarVariants as Variants,
} from "../data/page";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="h-full flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40">
      {/* Navbar items */}
      <div className="hidden w-1/3 md:flex gap-4 lg:gap-6 text-purple-950 font-semibold">
        {PageLinks.map((link) => (
          <NavLink link={link} key={link.name} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-purple-950 rounded-md p-1 px-2 font-semibold flex items-center justify-between"
        >
          <span className="text-white mr-1">Subho</span>
          <span className="w-12 h-8 rounded bg-purple-200 text-purple-800 px-1 flex items-center justify-between">
            .dev
          </span>
        </Link>
      </div>

      {/* SOCIAL LINKS */}
      <div className="hidden md:flex w-1/3 justify-end">
        {SocialLinks.map((socialLink) => (
          <div key={socialLink.name} className="px-0.5">
            <SocialIcon
              network={socialLink.name}
              url={socialLink.href}
              style={{ height: 25, width: 25 }}
            />
          </div>
        ))}
      </div>

      {/* RESPONSIVE MENU Mobile*/}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={Variants.topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-purple-950 rounded origin-left"
          ></motion.div>
          <motion.div
            variants={Variants.centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-purple-950 rounded"
          ></motion.div>
          <motion.div
            variants={Variants.bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-purple-950 rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={Variants.listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-1/2 bg-purple-950/95 text-purple-200 flex flex-col items-center justify-center gap-8 text-4xl z-30"
          >
            {PageLinks.map((link) => (
              <motion.div variants={Variants.listItemVarients} key={link.name}>
                <Link
                  href={link.href}
                  className="text-xl rounded-md p-1 font-semibold z-[70]"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
