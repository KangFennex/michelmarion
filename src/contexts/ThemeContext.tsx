import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const toggleTheme = () => {
        setIsTransitioning(true);

        setTimeout(() => {
            setTheme(prev => prev === 'dark' ? 'light' : 'dark');
            setIsTransitioning(false);
        }, 500);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme} data-transitioning={isTransitioning}>
                {children}
                {isTransitioning && (
                    <div className="theme-transition-overlay" />
                )}
            </div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
