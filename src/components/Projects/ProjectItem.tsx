import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useTheme } from '../../contexts/ThemeContext';
import type { Project } from "./projectsData";
import { RefreshCw, Circle } from 'lucide-react';

interface ProjectItemProps {
    project: Project;
    index: number;
    isExpanded: boolean;
    onToggle: (id: number) => void;
}

export function ProjectItem({ project, index, isExpanded, onToggle }: ProjectItemProps) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
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
            className={`overflow-hidden  border-b ${isDark ? 'border-white/20' : 'border-gray-700'} ${index === 0 && isDark ? 'border-t border-white/20' : ''} ${index === 0 && !isDark ? 'border-t border-gray-700' : ''}`}
        >
            {/* Project Header */}
            <button
                onClick={() => onToggle(project.id)}
                className={`w-full flex items-center justify-between py-4 ${isDark ? 'hover:bg-zinc-800/30' : 'hover:bg-gray-200/30'} transition-colors`}
            >
                <div className="flex items-center gap-6">
                    <span className="text-[0.75rem] font-bold ml-2 text-zinc-600">
                        {String(project.id).padStart(2, "0")}
                    </span>
                    <h3 className={`text-md font-semibold ${isDark ? 'text-white' : 'text-gray-700'}`}>
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
                            {project.status === "in-progress" ? <RefreshCw className="w-3 h-3 animate-[spin_1.5s_linear_infinite]" /> : <Circle className="w-3 h-3 fill-emerald-500 animate-pulse" />}
                            {project.status === "live" ? "Live" : "In Progress"}
                        </span>
                        <span className={`${isDark ? 'text-zinc-400' : 'text-gray-400'}`}>{project.year}</span>
                    </div>

                    {project.link && (
                        <ExternalLink className={`w-5 h-5 ${isDark ? 'text-zinc-400' : 'text-gray-400'}`} />
                    )}

                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="mr-2"
                    >
                        <ChevronDown className={`w-5 h-5 ${isDark ? 'text-zinc-400' : 'text-gray-400'}`} />
                    </motion.div>
                </div>
            </button>

            {/* Project Details */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className={`p-6 pt-6 border-t border-zinc-800 ${isDark ? '' : 'border-gray-700'}`}>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <ul className="space-y-2 mb-6">
                                        {project.description.map((item, index) => (
                                            <li
                                                key={index}
                                                className={`${isDark ? 'text-zinc-400' : 'text-gray-700'} flex items-start gap-2`}
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
                                                className={`px-3 py-1 rounded-md text-sm ${isDark ? 'bg-zinc-800 text-zinc-300' : 'bg-gray-200 text-gray-700'}`}
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
    );
}
