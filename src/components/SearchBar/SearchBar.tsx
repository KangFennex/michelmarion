import { Search, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface SearchBarProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchBar({ isOpen, onClose }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" onClick={onClose}>
            <div className="mx-auto max-w-2xl px-4 pt-16" onClick={(e) => e.stopPropagation()}>
                {/* Search Input */}
                <div
                    className={`flex items-center gap-3 rounded-lg border px-4 py-3 shadow-xl ${isDark ? 'border-white/20' : 'border-gray-700'
                        }`}
                    style={{
                        background: isDark ? 'hsla(0, 1%, 8%, 0.98)' : 'rgba(249, 250, 251, 0.98)',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundBlendMode: 'overlay',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <Search size={20} className={`shrink-0 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search anything ..."
                        className={`flex-1 bg-transparent text-base outline-none ${isDark ? 'text-gray-300 placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'
                            }`}
                    />
                    <button
                        onClick={onClose}
                        className={`shrink-0 transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                            }`}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Search Results */}
                <div
                    className={`mt-4 rounded-lg border shadow-xl overflow-hidden ${isDark ? 'border-white/20' : 'border-gray-700'
                        }`}
                    style={{
                        background: isDark ? 'hsla(0, 1%, 8%, 0.98)' : 'rgba(249, 250, 251, 0.98)',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundBlendMode: 'overlay',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    {/* Pages Section */}
                    <div className={`p-4 border-b ${isDark ? 'border-white/10' : 'border-gray-700'}`}>
                        <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-500' : 'text-gray-600'
                            }`}>Pages</h3>
                        <div className="space-y-1">
                            <a
                                href="#portfolio"
                                onClick={onClose}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors group ${isDark
                                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                                    : 'text-gray-700 hover:text-black hover:bg-gray-200'
                                    }`}
                            >
                                <span className={`group-hover:text-amber-500 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>→</span>
                                <span>Portfolio</span>
                            </a>
                            <a
                                href="#blog"
                                onClick={onClose}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors group ${isDark
                                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                                    : 'text-gray-700 hover:text-black hover:bg-gray-200'
                                    }`}
                            >
                                <span className={`group-hover:text-amber-500 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>→</span>
                                <span>Blog</span>
                            </a>
                            <a
                                href="#components"
                                onClick={onClose}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors group ${isDark
                                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                                    : 'text-gray-700 hover:text-black hover:bg-gray-200'
                                    }`}
                            >
                                <span className={`group-hover:text-amber-500 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>→</span>
                                <span>Components</span>
                            </a>
                        </div>
                    </div>

                    {/* Sections */}
                    <div className="p-4">
                        <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-500' : 'text-gray-600'
                            }`}>Sections</h3>
                        <div className="space-y-1">
                            <a
                                href="#about"
                                onClick={onClose}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors group ${isDark
                                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                                    : 'text-gray-700 hover:text-black hover:bg-gray-200'
                                    }`}
                            >
                                <span className={`group-hover:text-amber-500 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>→</span>
                                <span>About</span>
                            </a>
                            <a
                                href="#experience"
                                onClick={onClose}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors group ${isDark
                                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                                    : 'text-gray-700 hover:text-black hover:bg-gray-200'
                                    }`}
                            >
                                <span className={`group-hover:text-amber-500 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>→</span>
                                <span>Experience</span>
                            </a>
                            <a
                                href="#tech-stack"
                                onClick={onClose}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors group ${isDark
                                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                                    : 'text-gray-700 hover:text-black hover:bg-gray-200'
                                    }`}
                            >
                                <span className={`group-hover:text-amber-500 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>→</span>
                                <span>Tech stack</span>
                            </a>
                            <a
                                href="#projects"
                                onClick={onClose}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors group ${isDark
                                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                                    : 'text-gray-700 hover:text-black hover:bg-gray-200'
                                    }`}
                            >
                                <span className={`group-hover:text-amber-500 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>→</span>
                                <span>Projects</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
