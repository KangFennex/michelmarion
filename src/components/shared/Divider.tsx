import { useTheme } from '../../contexts/ThemeContext';
import { StripePattern } from './StripePattern';

export function Divider() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className={`w-full border-t ${isDark ? 'border-white/20' : 'border-gray-700'}`}>
            <div className="mx-auto md:max-w-4xl max-w-7xl">
                <div className="flex">
                    <StripePattern position="left" />
                    <div
                        className="flex-1 h-10 bg-fixed bg-[length:10px_10px]"
                        style={{
                            backgroundImage: `repeating-linear-gradient(
                                315deg,
                                ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(55, 65, 81, 0.3)'} 0,
                                ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(55, 65, 81, 0.3)'} 1px,
                                transparent 0,
                                transparent 50%
                            )`
                        }}
                    />

                    <StripePattern position="right" />
                </div>
            </div>
        </div>
    );
}
