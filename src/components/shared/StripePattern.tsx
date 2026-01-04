import { useTheme } from '../../contexts/ThemeContext';

interface StripePatternProps {
    position: 'left' | 'right';
}

export function StripePattern({ position }: StripePatternProps) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const stripeStyle = {
        borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(55, 65, 81, 0.3)',
        '--stripe-bg': isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(55, 65, 81, 0.3)',
    } as React.CSSProperties & { '--stripe-bg': string };

    return (
        <div
            className={`stripe w-4 md:w-10 flex-none ${position === 'left' ? 'border-r md:border-x' : 'border-l md:border-x'} md:block md:bg-fixed md:bg-[length:10px_10px] [background-image:none] md:[background-image:repeating-linear-gradient(315deg,var(--stripe-bg)_0,var(--stripe-bg)_1px,transparent_0,transparent_50%)]`}
            style={stripeStyle}
        />
    );
}
