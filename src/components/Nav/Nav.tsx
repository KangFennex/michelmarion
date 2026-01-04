import { Github, Moon, Sun, Menu, Search } from 'lucide-react';
import logo from '../../assets/logo/Renard-icon.ico';
import { SearchBar } from '../SearchBar';
import { StripePattern } from '../shared';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Projects', href: '#projects' },
];

export function Nav() {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const isDark = theme === 'dark';

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
                event.preventDefault();
                setIsSearchOpen(prev => !prev);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <header
                className={`w-full border-y md:px-2 transition-colors duration-300 ${isDark ? 'border-y-white/20' : 'border-y-gray-300'}`}
            >
                {/* Solid background layer */}
                <div
                    className={`absolute inset-0 ${isDark ? '' : ''}                         backdropFilter: 'blur(20px)',`}
                />

                <div className="mx-auto md:max-w-4xl flex w-full max-w-7xl relative">
                    <StripePattern position="left" />

                    {/* Main Content Container */}
                    <div className="relative flex h-12 flex-1 items-center justify-between gap-2 px-2">
                        {/* Logo */}
                        <a href="/" className="ml-2 shrink-0">
                            <img src={logo} alt="Logo" className="h-8 w-auto" />
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center justify-end gap-8 md:flex flex-1 px-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-base font-medium tracking-wide no-underline transition-colors duration-300 ${isDark ? 'text-gray-100 hover:text-white' : 'text-gray-700 hover:text-black'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        {/* Right Section */}
                        <div className="flex items-center gap-3 ml-auto">
                            {/* Search Button */}
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 hover:border-amber-500 transition-colors duration-300 ${isDark ? 'border-white/20 bg-gray-900/40' : 'border-gray-300 bg-gray-100'
                                    }`}
                            >
                                <Search size={16} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                                <span className={`text-sm hidden sm:inline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Search...</span>
                                <kbd className={`text-xs font-medium hidden md:inline ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Ctrl K</kbd>
                            </button>

                            {/* GitHub Icon */}
                            <a
                                href="https://github.com"
                                className={`inline-flex items-center justify-center h-9 w-9 rounded-md transition-colors duration-300 ${isDark ? 'hover:bg-gray-900/50' : 'hover:bg-gray-200'
                                    }`}
                            >
                                <Github size={20} className={isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} />
                            </a>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className={`inline-flex items-center justify-center h-9 w-9 rounded-md transition-colors duration-300 ${isDark ? 'hover:bg-gray-900/50' : 'hover:bg-gray-200'
                                    }`}
                            >
                                {isDark ? (
                                    <Moon size={20} className="text-gray-300 hover:text-white" />
                                ) : (
                                    <Sun size={20} className="text-gray-600 hover:text-black" />
                                )}
                            </button>

                            {/* Mobile Menu */}
                            <div className="relative md:hidden" ref={mobileMenuRef}>
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className={`inline-flex items-center justify-center h-9 w-9 rounded-md transition-colors duration-300 ${isDark ? 'hover:bg-gray-900/50' : 'hover:bg-gray-200'
                                        }`}
                                >
                                    <Menu size={20} className={isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} />
                                </button>

                                <AnimatePresence>
                                    {isMobileMenuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, x: 10, filter: 'blur(8px)' }}
                                            animate={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
                                            exit={{ opacity: 0, y: -10, x: 10, filter: 'blur(8px)' }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeInOut"
                                            }}
                                            className={`absolute right-0 top-full mt-2 w-48 rounded-lg shadow-xl p-3 z-50 ${isDark ? '' : 'bg-gray-50'}`}
                                            style={{
                                                background: isDark ? 'hsla(0, 1%, 15%, 0.98)' : undefined,
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                                backgroundBlendMode: 'overlay',
                                                backdropFilter: 'blur(10px)'
                                            }}
                                        >
                                            <div className="space-y-2">
                                                {NAV_LINKS.map((link) => (
                                                    <a
                                                        key={link.name}
                                                        href={link.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className={`block px-3 py-2 rounded-md transition-all duration-300 text-base font-medium tracking-wide ${isDark ? 'text-gray-100 hover:text-white hover:bg-black/20 hover:ml-1' : 'text-gray-700 hover:text-black hover:bg-gray-200 hover:ml-1'
                                                            }`}
                                                    >
                                                        {link.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    <StripePattern position="right" />
                </div>
            </header>

            {/* Search Modal */}
            <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
