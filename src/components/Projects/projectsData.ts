// Project images
import backrollsImg from '../../assets/projectImgs/backrolls.png';
import altPortfolioImg from '../../assets/projectImgs/alt-portfolio.png';
import bankistImg from '../../assets/projectImgs/bankist.png';
import spaceTourismImg from '../../assets/projectImgs/space-tourism.png';
import softwayImg from '../../assets/projectImgs/softway.png';
import sneakersImg from '../../assets/projectImgs/sneakers.png';
import desertPortfolioImg from '../../assets/projectImgs/desert-portfolio.png';

export type ProjectStatus = "live" | "in-progress";

export type Project = {
    id: number;
    title: string;
    year: number;
    status: ProjectStatus;
    description: string[];
    techStack: string[];
    image?: string;
    link?: string;
};

export const personalProjects: Project[] = [
    {
        id: 1,
        title: "Backrolls",
        year: 2026,
        status: "in-progress",
        description: [
            "An interactive hub for quotes from a famous TV show",
            "Built with Next.js, Tanstack Query, tRPC, and Drizzle ORM",
            "Features SSR and CSR, User Authentication, Quote Submission, and Voting System",
        ],
        techStack: ["Next.js", "Tanstack Query", "Supabase", "tRPC", "Drizzle ORM"],
        image: backrollsImg,
        link: "#",
    },
    {
        id: 2,
        title: "Immersive Portfolio",
        year: 2025,
        status: "in-progress",
        description: [
            "A Window-inspired portfolio website with 3D elements",
            "MongoDB-powered to-do list",
            "Log-in system for personalized user experience",
        ],
        techStack: ["MongoDB", "Zustand", "React", "Tailwind CSS"],
        image: altPortfolioImg,
        link: "#",
    },
    {
        id: 3,
        title: "Space Tourism Website",
        year: 2024,
        status: "live",
        description: [
            "A multi-page website for a fictional space tourism company",
            "Responsive design with smooth animations and transitions",
        ],
        techStack: ["Framer Motion", "Responsive Design", "SCSS"],
        image: spaceTourismImg,
        link: "#",
    },
    {
        id: 4,
        title: "Bankist App",
        year: 2024,
        status: "live",
        description: [
            "An online banking application simulating a banking web app's user experience.",
            "Features a login function, sorting, money transfer, loan request, account deletion",
        ],
        techStack: ["Vanilla JS", "EJS"],
        image: bankistImg,
        link: "#",
    },
    {
        id: 5,
        title: "Desert-themed Portfolio",
        year: 2024,
        status: "live",
        description: [
            "A personal portfolio website with a desert theme",
            "Showcases projects and skills with a unique design",
        ],
        techStack: ["Framer Motion", "React", "Responsive Design"],
        image: desertPortfolioImg,
        link: "#",
    },
    {
        id: 6,
        title: "Softway Landing Page",
        year: 2024,
        status: "live",
        description: [
            "A shopping cart application for an e-commerce website using Redux Toolkit",
            "Item discounts, dynamic cart updates, and responsive design",
        ],
        techStack: ["React", "Redux Toolkit", "CSS"],
        image: softwayImg,
        link: "#",
    },
    {
        id: 7,
        title: "Sneakers Landing Page",
        year: 2024,
        status: "live",
        description: [
            "A landing page for a sneaker store with product showcase and shopping cart",
            "Responsive design with smooth animations and user-friendly interface",
        ],
        techStack: ["React", "Zustand", "Framer Motion", "Tailwind CSS"],
        image: sneakersImg,
        link: "#",
    }
];

export const clientProjects: Project[] = [
    // Add client projects here
];
