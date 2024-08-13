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
    name: "Python",
    href: "https://en.pythonreference.com/",
  },
  {
    name: "Java",
    href: "https://www.java.com/",
  },
  {
    name: "React JS",
    href: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/en/",
  },
  {
    name: "Express.js",
    href: "https://expressjs.com/",
  },
  {
    name: "Mongoose js",
    href: "https://mongoosejs.com/",
  },
  {
    name: "Prisma ORM",
    href: "https://www.prisma.io/",
  },
  {
    name: "Redux-toolkit",
    href: "https://redux.js.org/",
  },
  {
    name: "React Redux",
    href: "https://redux.js.org/",
  },
  {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  {
    name: "Material UI",
    href: "https://material-ui.com/",
  },
  {
    name: "Shadcn UI",
    href: "https://www.shadcn.com/",
  },
  {
    name: "Framer Motion",
    href: "https://motion.framer.com/",
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
    name: "MySQL",
    href: "https://www.mysql.com/",
  },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com/",
  },
];

export const projects = [
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
    link: "https://subhodev-subhajit-pramaniks-projects.vercel.app/",
  },
];
