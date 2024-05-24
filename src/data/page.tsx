export const PageLinks: { name: string; href: string }[] = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Portfolio",
        href: "/portfolio",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

export const SocialLinks: { name: string; image: string; href: string }[] = [
    {
        name: "github",
        image: "/icons/github.svg",
        href: "https://github.com/subho-1011",
    },
    {
        name: "linkedin",
        image: "/icons/linkedin.svg",
        href: "https://www.linkedin.com/in/subhajit-pramanik-140a76241/",
    },
    {
        name: "instagram",
        image: "/icons/instagram.svg",
        href: "#",
    },
    {
        name: "email",
        image: "/icons/gmail.svg",
        href: "mailto:subho.p.1011@gmail.com",
    },
    {
        name: "x",
        image: "/icons/twitter.svg",
        href: "https://x.com/Subhajit_00",
    },
];

export const NavbarVariants = {
    topVariants: {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255, 255, 255)",
        },
    },
    centerVariants: {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    },
    bottomVariants: {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255, 255, 255)",
        },
    },
    listVariants: {
        closed: {
            x: "100vh",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    },
    listItemVarients: {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        },
    },
};

export const Skills: { name: string; href: string }[] = [
    {
        name: "C++",
        href: "https://en.cppreference.com/w/cpp",
    },
    {
        name: "Python",
        href: "https://en.pythonreference.com/",
    },
    {
        name: "HTML5",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        name: "CSS3",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        name: "Javascript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "TypeScript",
        href: "https://www.typescriptlang.org/",
    },
    {
        name: "Node.js",
        href: "https://nodejs.org/en/",
    },
    {
        name: "React",
        href: "https://reactjs.org/",
    },
    {
        name: "Redux-toolkit",
        href: "https://redux.js.org/",
    },
    {
        name: "Vite",
        href: "https://vitejs.dev/",
    },
    {
        name: "Next.js",
        href: "https://nextjs.org/",
    },
    {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
    },
    {
        name: "Vercel",
        href: "https://vercel.com/",
    },
    {
        name: "Git",
        href: "https://git-scm.com/",
    },
    {
        name: "GitHub",
        href: "https://github.com/",
    },
    {
        name: "Appwrite",
        href: "https://appwrite.io/",
    },
    {
        name: "Framer Motion",
        href: "https://motion.framer.com/",
    },
    {
        name: "MySQL",
        href: "https://www.mysql.com/",
    },
];
