import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { StripePattern } from '../shared';
import { Briefcase, ChevronDown, Circle, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    type: string;
    startDate: string;
    endDate: string;
    isCurrentlyWorking: boolean;
    description: string[];
    technologies: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: '1',
        title: 'Frontend Developer',
        company: 'TBA',
        type: 'Junior Position',
        startDate: '02/2026',
        endDate: 'Present',
        isCurrentlyWorking: true,
        description: [
        ],
        technologies: ['TypeScript', 'Next.js', 'React', 'Redux',]
    },
];

export function Experience() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [expandedId, setExpandedId] = useState<string>('1');

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? '' : id);
    };

    /*     const totalMonths = experiences
            .filter(exp => !deletedIds.includes(exp.id))
            .reduce((total, exp) => {
                const start = new Date(exp.startDate);
                const end = exp.isCurrentlyWorking ? new Date() : new Date(exp.endDate);
                const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
                return total + months;
            }, 0); */

    return (
        <section className="w-full">
            <div className="mx-auto md:max-w-4xl max-w-7xl">
                <div className="flex">
                    <StripePattern position="left" />

                    <div className="flex-1 px-4 py-6 space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md border ${isDark ? 'border-white/20 text-gray-300' : 'border-gray-700 text-gray-700'
                                }`}>
                                <Briefcase size={16} />
                                <span className="text-sm font-medium">0 Years</span>
                            </div>
                        </div>

                        {/* Experience Timeline */}
                        <div className="space-y-6">
                            <AnimatePresence>
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={exp.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.3 }}
                                        className={`relative ${index !== experiences.length - 1 ? 'pb-6' : ''}`}
                                    >
                                        {/* Timeline Line */}
                                        {index !== experiences.length - 1 && (
                                            <div className={`absolute left-[7px] top-8 w-[2px] h-full ${isDark ? 'bg-white/10' : 'bg-gray-300'
                                                }`} />
                                        )}

                                        {/* Experience Card */}
                                        <div className="flex gap-4">
                                            {/* Timeline Dot */}
                                            <div className="relative flex-shrink-0 w-4 h-4">
                                                {exp.isCurrentlyWorking ? (
                                                    <>
                                                        <div className="absolute inset-0 rounded-full bg-green-500/50 animate-ping"></div>
                                                        <Circle className="absolute inset-0 w-2 h-2 fill-green-500 text-green-500 m-auto" />
                                                    </>
                                                ) : (
                                                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isDark ? 'border-white/40 bg-white/10' : 'border-gray-400 bg-gray-200'
                                                        }`}>
                                                        <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-white' : 'bg-gray-600'
                                                            }`} />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                {/* Header Row */}
                                                <div className="flex items-start justify-between gap-4 mb-2">
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-lg md:text-xl font-semibold">
                                                            {exp.title}
                                                        </h3>
                                                        <p className={`text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'
                                                            }`}>
                                                            {exp.company} · {exp.type}
                                                        </p>
                                                    </div>

                                                    {/* Right Side - Status/Date/Actions */}
                                                    <div className="flex items-center gap-2 flex-shrink-0">
                                                        {exp.isCurrentlyWorking && (
                                                            <span className="px-2 py-1 text-xs font-medium bg-green-500/20 text-green-500 rounded-full flex items-center gap-1">
                                                                <Circle className="w-3 h-3 fill-emerald-500 animate-pulse" />
                                                                Working
                                                            </span>
                                                        )}
                                                        <span className={`text-xs md:text-sm whitespace-nowrap ${isDark ? 'text-gray-400' : 'text-gray-600'
                                                            }`}>
                                                            {exp.startDate} — {exp.endDate}
                                                        </span>
                                                        <button
                                                            onClick={() => toggleExpand(exp.id)}
                                                            className={`p-1 rounded hover:bg-white/10 transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                                                                }`}
                                                        >
                                                            {expandedId === exp.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Expanded Content */}
                                                <AnimatePresence>
                                                    {expandedId === exp.id && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="mt-4 space-y-4">
                                                                {/* Description */}
                                                                <ul className={`space-y-2 text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'
                                                                    }`}>
                                                                    {exp.description.map((desc, i) => (
                                                                        <li key={i} className="flex gap-2">
                                                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                                                                            <span>{desc}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>

                                                                {/* Technologies */}
                                                                {exp.technologies.length > 0 && (
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {exp.technologies.map((tech) => (
                                                                            <span
                                                                                key={tech}
                                                                                className={`px-3 py-1 text-xs md:text-sm rounded-md ${isDark
                                                                                    ? 'bg-white/10 text-gray-300'
                                                                                    : 'bg-gray-200 text-gray-700'
                                                                                    }`}
                                                                            >
                                                                                {tech}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                                {/* Collapsed Preview */}
                                                {expandedId !== exp.id && exp.description.length > 0 && (
                                                    <p className={`mt-2 text-sm italic ${isDark ? 'text-gray-500' : 'text-gray-500'
                                                        }`}>
                                                        {exp.description[0]}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    <StripePattern position="right" />
                </div>
            </div>
        </section>
    );
}
