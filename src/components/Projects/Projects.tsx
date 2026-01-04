import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { StripePattern } from "../shared";
import { useTheme } from '../../contexts/ThemeContext';

// Project images
import backrollsImg from '../../assets/projectImgs/backrolls.png';
import altPortfolioImg from '../../assets/projectImgs/alt-portfolio.png';
import bankistImg from '../../assets/projectImgs/bankist.png';
import spaceTourismImg from '../../assets/projectImgs/space-tourism.png';
import softwayImg from '../../assets/projectImgs/softway.png';
import sneakersImg from '../../assets/projectImgs/sneakers.png';
import desertPortfolioImg from '../../assets/projectImgs/desert-portfolio.png';

type ProjectStatus = "live" | "in-progress";

type Project = {
    id: number;
    title: string;
    year: number;
    status: ProjectStatus;
    description: string[];
    techStack: string[];
    image?: string;
    link?: string;
};

const personalProjects: Project[] = [
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

const clientProjects: Project[] = [
    // Add client projects here
];

export function Projects() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [activeTab, setActiveTab] = useState<"personal" | "client">("personal");
    const [expandedIds, setExpandedIds] = useState<number[]>([1, 2]);
    const [projectsToShow, setProjectsToShow] = useState(3);

    const currentProjects = activeTab === "personal" ? personalProjects : clientProjects;
    const totalProjects = currentProjects.length;
    const isShowingAll = projectsToShow >= totalProjects;

    const handleToggleProjects = () => {
        setProjectsToShow(isShowingAll ? 3 : totalProjects);
    };

    const toggleProject = (id: number) => {
        setExpandedIds(prev =>
            prev.includes(id)
                ? prev.filter(projectId => projectId !== id)
                : [...prev, id]
        );
    };

    const projectsButtons = [
        { label: "Personal Projects", value: "personal" },
        { label: "Client Projects", value: "client" },
    ];

    return (
        <>
            <section className={`w-full border-b ${isDark ? 'border-white/20' : 'border-gray-300'}`}>
                <div className="mx-auto md:max-w-4xl max-w-7xl">
                    <div className="flex">
                        <StripePattern position="left" />

                        <div className="flex-1 py-3 space-y-4">
                            {/* Tab Switcher */}
                            <div className="relative flex gap-2 p-1 bg-zinc-800/50 rounded-lg mx-auto">
                                <motion.div
                                    className="absolute inset-y-1 rounded-md bg-zinc-700"
                                    initial={false}
                                    animate={{
                                        x: activeTab === "personal" ? 4 : "calc(100% - 4px)",
                                        width: "calc(50% - 4px)",
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 60 }}
                                />
                                {projectsButtons.map((button) => (
                                    <button
                                        key={button.value}
                                        onClick={() => setActiveTab(button.value as "personal" | "client")}
                                        className={`relative z-10 flex-1 px-6 py-1 text-sm font-medium w-[40%] transition-colors rounded-md ${activeTab === button.value ? "text-white" : "text-zinc-400"}`}
                                    >
                                        {button.label}
                                    </button>
                                ))}
                            </div>

                            {/* Projects List */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <AnimatePresence initial={false}>
                                        {currentProjects.slice(0, projectsToShow).map((project, index) => (
                                            <motion.div
                                                key={project.id}
                                                initial={{ opacity: 0, height: 0, y: -20 }}
                                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                                exit={{ opacity: 0, height: 0, y: -20 }}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: [0.4, 0, 0.2, 1],
                                                    delay: index * 0.05
                                                }}
                                                className={`overflow-hidden bg-zinc-900/50 border-b ${isDark ? ' border-white/20' : 'border-gray-300'} ${index === 0 && isDark ? 'border-t border-white/20' : ''} ${index === 0 && !isDark ? 'border-t border-gray-300' : ''}`}
                                            >
                                                {/* Project Header */}
                                                <button
                                                    onClick={() => toggleProject(project.id)}
                                                    className="w-full flex items-center justify-between py-4 hover:bg-zinc-800/30 transition-colors"
                                                >
                                                    <div className="flex items-center gap-6">
                                                        <span className="text-[0.75rem] font-bold ml-2 text-zinc-600">
                                                            {String(project.id).padStart(2, "0")}
                                                        </span>
                                                        <h3 className="text-md font-semibold text-white">
                                                            {project.title}
                                                        </h3>
                                                    </div>

                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-3">
                                                            <span
                                                                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${project.status === "live"
                                                                    ? "bg-emerald-500/20 text-emerald-400"
                                                                    : "bg-orange-500/20 text-orange-400"
                                                                    }`}
                                                            >
                                                                <span className="w-2 h-2 rounded-full bg-current" />
                                                                {project.status === "live" ? "Live" : "In Progress"}
                                                            </span>
                                                            <span className="text-zinc-400">{project.year}</span>
                                                        </div>

                                                        {project.link && (
                                                            <ExternalLink className="w-5 h-5 text-zinc-400" />
                                                        )}

                                                        <motion.div
                                                            animate={{ rotate: expandedIds.includes(project.id) ? 180 : 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="mr-2"
                                                        >
                                                            <ChevronDown className="w-5 h-5 text-zinc-400" />
                                                        </motion.div>
                                                    </div>
                                                </button>

                                                {/* Project Details */}
                                                <AnimatePresence>
                                                    {expandedIds.includes(project.id) && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="p-6 pt-0 border-t border-zinc-800">
                                                                <div className="grid md:grid-cols-2 gap-8">
                                                                    <div>
                                                                        <ul className="space-y-2 mb-6">
                                                                            {project.description.map((item, index) => (
                                                                                <li
                                                                                    key={index}
                                                                                    className="text-zinc-400 flex items-start gap-2"
                                                                                >
                                                                                    <span className="text-white mt-1">•</span>
                                                                                    <span>{item}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>

                                                                        <div className="flex flex-wrap gap-2">
                                                                            {project.techStack.map((tech) => (
                                                                                <span
                                                                                    key={tech}
                                                                                    className="px-3 py-1 bg-zinc-800 rounded-md text-sm text-zinc-300"
                                                                                >
                                                                                    {tech}
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                    </div>

                                                                    {project.image && (
                                                                        <div className="rounded-lg overflow-hidden bg-zinc-800">
                                                                            <img
                                                                                src={project.image}
                                                                                alt={project.title}
                                                                                className="w-full h-full object-cover"
                                                                            />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>

                                    {currentProjects.length === 0 && (
                                        <div className="text-center py-12 text-zinc-500">
                                            No projects to display
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* View All Button */}
                            <div className="flex justify-center mt-6">
                                <button
                                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                                    onClick={handleToggleProjects}
                                >
                                    {`View ${isShowingAll ? 'fewer' : 'all'} projects`}
                                    <motion.div
                                        animate={{ rotate: isShowingAll ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </motion.div>
                                </button>
                            </div>
                        </div>

                        <StripePattern position="right" />
                    </div>
                </div>
            </section>
        </>
    );
}