"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }: { link: { href: string; name: string } }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 px-2 ${
        pathName === link.href && "bg-purple-800 text-purple-200"
      }`}
      href={link.href}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;
