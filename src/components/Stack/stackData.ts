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

export type StackCategory = 'all' | 'frontend' | 'backend';

export interface StackItem {
    name: string;
    icon: string;
    category: 'frontend' | 'backend';
}

export const stackItems: StackItem[] = [
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
