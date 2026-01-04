import { useTheme } from '../../contexts/ThemeContext';
import { StripePattern } from '../shared';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import stack icons
import reactjs from '../../assets/stack/reactjs.png';
import nextjs from '../../assets/stack/nextjs.svg';
import typescript from '../../assets/stack/typescript.png';
import javascript from '../../assets/stack/javascript.png';
import scss from '../../assets/stack/scss.png';
import tailwind from '../../assets/stack/tailwind.png';
import redux from '../../assets/stack/redux.png';
import zustand from '../../assets/stack/zustand.png';
import express from '../../assets/stack/express.png';
import mongoose from '../../assets/stack/mongoose.png';
import supabase from '../../assets/stack/supabase.png';
import drizzle from '../../assets/stack/drizzle.svg';
import trpc from '../../assets/stack/trpc.png';
import api from '../../assets/stack/api.png';
import git from '../../assets/stack/git.png';
import tanstack from '../../assets/stack/tanstack.png';

type StackCategory = 'all' | 'frontend' | 'backend';

interface StackItem {
    name: string;
    icon: string;
    category: 'frontend' | 'backend';
}

const stackItems: StackItem[] = [
    { name: 'React', icon: reactjs, category: 'frontend' },
    { name: 'Next.js', icon: nextjs, category: 'frontend' },
    { name: 'TypeScript', icon: typescript, category: 'frontend' },
    { name: 'Tanstack Query', icon: tanstack, category: 'frontend' },
    { name: 'Redux', icon: redux, category: 'frontend' },
    { name: 'Mongoose', icon: mongoose, category: 'backend' },
    { name: 'Supabase', icon: supabase, category: 'backend' },
    { name: 'Drizzle', icon: drizzle, category: 'backend' },
    { name: 'tRPC', icon: trpc, category: 'backend' },
    { name: 'Zustand', icon: zustand, category: 'frontend' },
    { name: 'Express', icon: express, category: 'backend' },
    { name: 'JavaScript', icon: javascript, category: 'frontend' },
    { name: 'SCSS', icon: scss, category: 'frontend' },
    { name: 'Tailwind', icon: tailwind, category: 'frontend' },
    { name: 'Git', icon: git, category: 'frontend' },
    { name: 'REST API', icon: api, category: 'backend' },
];

export function Stack() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [activeCategory, setActiveCategory] = useState<StackCategory>('all');

    const filteredStack = activeCategory === 'all'
        ? stackItems
        : stackItems.filter(item => item.category === activeCategory);

    // Calculate height based on number of items and grid columns
    const gridHeights = useMemo(() => {
        const itemCount = filteredStack.length;
        const columnsDesktop = 8;
        const columnsMobile = 4;
        const rowHeight = 100;

        const rowsDesktop = Math.ceil(itemCount / columnsDesktop);
        const rowsMobile = Math.ceil(itemCount / columnsMobile);

        return {
            mobile: rowsMobile * rowHeight,
            desktop: rowsDesktop * rowHeight
        };
    }, [filteredStack.length]);

    type StackButtonVariant = {
        label: string;
        category: StackCategory;
    }

    const stackButtonVariants: StackButtonVariant[] = [
        { label: 'All', category: 'all' },
        { label: 'Frontend', category: 'frontend' },
        { label: 'Backend', category: 'backend' },
    ]

    return (
        <section className={`w-full border-b ${isDark ? 'border-white/20' : 'border-gray-300'}`}>
            <div className="mx-auto md:max-w-4xl max-w-7xl">
                <div className="flex">
                    <StripePattern position="left" />

                    <div className="flex-1 px-4 py-6 space-y-6 bg-[hsla(0,1%,14%,0.4)] transition-all duration-1000 ease-in">

                        {/* Filter Buttons */}
                        <div className="flex justify-center gap-2">
                            {stackButtonVariants.map(({ label, category }) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === category
                                        ? isDark ? 'bg-white/20 text-white' : 'bg-gray-300 text-black'
                                        : isDark ? 'bg-white/5 text-gray-400 hover:bg-white/10' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {label}
                                </motion.button>
                            ))}
                        </div>

                        {/* Stack Icons Grid */}
                        <motion.div
                            layout
                            animate={{ height: window.innerWidth >= 768 ? gridHeights.desktop : gridHeights.mobile }}
                            className="grid grid-cols-4 md:grid-cols-8 justify-items-center gap-4 pt-4 pb-2 overflow-hidden"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <AnimatePresence>
                                {filteredStack.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{
                                            opacity: { duration: 0.5, ease: "easeInOut" },
                                            scale: { duration: 0.5, ease: "easeInOut" },
                                            layout: { duration: 0.5, ease: "easeInOut" }
                                        }}
                                        className="group relative flex flex-col items-center p-3 rounded-lg transition-colors cursor-pointer"
                                    >
                                        <motion.img
                                            src={item.icon}
                                            alt={item.name}
                                            className={`w-10 h-10 md:w-10 md:h-10 object-contain ${item.name === 'Next.js' ? 'invert brightness-0' : ''}`}
                                            whileHover={{
                                                rotateY: 360,
                                                scale: 1.1,
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{
                                                duration: 2,
                                                ease: "linear"
                                            }}
                                        />
                                        <span
                                            className={`absolute top-18 text-xs md:text-sm text-center whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${isDark ? 'text-gray-300' : 'text-gray-700'
                                                }`}
                                        >
                                            {item.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    <StripePattern position="right" />
                </div>
            </div>
        </section>
    );
}