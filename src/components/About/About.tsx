import { useTheme } from '../../contexts/ThemeContext';
import { StripePattern } from '../shared';

const content: string[] = [
  "Used React.js, Next.js and TypeScript extensively across multiple projects.",
  "Good understanding of SSR and CSR in Next.js.",
  "9+ months of experience in Next.js.",
]

export function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="w-full">
      <div className="mx-auto md:max-w-4xl max-w-7xl">
        <div className="flex">
          <StripePattern position="left" />

          <div className="flex-1 px-4 py-6 space-y-6">

            <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {content.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-white">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <StripePattern position="right" />
        </div>
      </div>
    </section>
  )
}
