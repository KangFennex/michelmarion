import { useTheme } from '../../contexts/ThemeContext';

interface StripePatternProps {
    position: 'left' | 'right';
}

export function StripePattern({ position }: StripePatternProps) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div
            className={`stripe w-4 md:w-10 flex-none ${position === 'left' ? 'border-r md:border-x' : 'border-l md:border-x'} md:block bg-fixed md:bg-[length:10px_10px]`}
            style={{
                borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)',
                backgroundImage: `repeating-linear-gradient(
                    315deg,
                    ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'} 0,
                    ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'} 1px,
                    transparent 0,
                    transparent 50%
                )`
            }}
        />
    );
}
