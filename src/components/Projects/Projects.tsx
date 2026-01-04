import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { StripePattern } from "../shared";
import { useTheme } from '../../contexts/ThemeContext';
import { ProjectButtons } from "./ProjectButtons";
import { ProjectItem } from "./ProjectItem";
import { personalProjects, clientProjects } from "./projectsData";

export function Projects() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const [expandedIds, setExpandedIds] = useState<number[]>([1, 2]);
    const [projectsToShow, setProjectsToShow] = useState(3);
    const [activeTab, setActiveTab] = useState<"personal" | "client">("personal");
    const currentProjects = activeTab === "personal" ? personalProjects : clientProjects;
    const totalProjects = currentProjects.length;
    const isShowingAll = projectsToShow >= totalProjects;
    const [isShowingAllButton, setIsShowingAllButton] = useState(false);

    const handleIsShowingAllButton = () => {
        setTimeout(() => {
            setIsShowingAllButton(!isShowingAllButton);
        }, 300);
    }

    const handleToggleProjects = () => {
        setProjectsToShow(isShowingAll ? 3 : totalProjects);
        handleIsShowingAllButton();
    };

    const toggleProject = (id: number) => {
        setExpandedIds(prev =>
            prev.includes(id)
                ? prev.filter(projectId => projectId !== id)
                : [...prev, id]
        );
    };

    return (
        <>
            <section className="w-full">
                <div className="mx-auto md:max-w-4xl max-w-7xl">
                    <div className="flex">
                        <StripePattern position="left" />

                        <div className="flex-1 py-3 space-y-4">

                            {/* Tab Switcher */}
                            <div className={`w-[95%] relative flex gap-2 p-1 ${isDark ? 'bg-zinc-800/50' : 'bg-gray-200/50 border border-black/30'} rounded-lg mx-auto`}>
                                <motion.div
                                    className={`absolute inset-y-1 rounded-md ${isDark ? 'bg-zinc-700' : 'bg-gray-400'} `}
                                    initial={false}
                                    animate={{
                                        x: activeTab === "personal" ? 4 : "calc(100% - 4px)",
                                        width: "calc(50% - 4px)",
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 60 }}
                                />
                                <ProjectButtons activeTab={activeTab} setActiveTab={setActiveTab} />
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
                                            <ProjectItem
                                                key={project.id}
                                                project={project}
                                                index={index}
                                                isExpanded={expandedIds.includes(project.id)}
                                                onToggle={toggleProject}
                                            />
                                        ))}
                                    </AnimatePresence>

                                    {currentProjects.length === 0 && (
                                        <div className={`text-center py-12 ${isDark ? 'text-zinc-500' : 'text-gray-500'}`}>
                                            No projects to display
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* View All Button */}
                            <motion.div
                                animate={{
                                    opacity: totalProjects > 3 ? 1 : 0,
                                    height: totalProjects > 3 ? "auto" : 0,
                                    marginTop: totalProjects > 3 ? "0px" : "0px"
                                }}
                                initial={false}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="flex justify-center overflow-hidden"
                            >
                                <button
                                    className={`flex items-center gap-2 py-2 ${isDark ? 'text-zinc-400 hover:text-white' : 'text-gray-400 hover:text-gray-700'} transition-all duration-300`}
                                    onClick={handleToggleProjects}
                                    disabled={totalProjects <= 3}
                                >
                                    {`View ${isShowingAllButton ? 'fewer' : 'all'} projects`}
                                    <motion.div
                                        animate={{ rotate: isShowingAllButton ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </motion.div>
                                </button>
                            </motion.div>
                        </div>

                        <StripePattern position="right" />
                    </div>
                </div>
            </section>
        </>
    );
}