import { useTheme } from '../../contexts/ThemeContext';
import { StripePattern } from './StripePattern';

interface SectionTitleProps {
    title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div
            className="w-full min-h-11 flex-none border-t border-y"
            style={{
                borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)',
            }}
        >
            <div className="mx-auto md:max-w-4xl max-w-7xl">
                <div className="flex">
                    <StripePattern position="left" />

                    <div className="flex-1 px-4 flex">
                        <span className="flex-1 text-xl md:text-xl font-medium tracking-wider uppercase py-2">
                            {title}
                        </span>
                    </div>

                    <StripePattern position="right" />
                </div>
            </div>
        </div>
    );
}
