import { Nav, About, Hero, Stack, Projects, Contact, Experience } from './components'
import { Divider } from './components/shared';
import { useTheme } from './contexts/ThemeContext'
import { SectionTitle } from './components/shared';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`w-full min-h-screen pt-2 transition-colors duration-300 relative`}>
      {/* Base background */}
      <div className={`fixed inset-0 ${theme === 'dark' ? 'bg-black/90' : 'bg-gray-50'}`} />

      {/* Grainy texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] h-full w-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.06,
          backgroundColor: 'hsla(0, 1%, 14%, 0.4)'
        }}
      />

      {/* Content wrapper with text color */}
      <div className={`relative z-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {/* Navigation */}
        <Nav />

        {/* Main Content Grid */}
        <main className="relative z-10">

          {/* Hero */}
          <Hero />
          <Divider />

          {/* About */}
          <SectionTitle title="About" />
          <About />
          <Divider />

          {/* Projects */}
          <SectionTitle title="Projects" />
          <Projects />
          <Divider />

          {/* Stack */}
          <SectionTitle title="Stack" />
          <Stack />
          <Divider />

          {/* Experience */}
          <SectionTitle title="Experience" />
          <Experience />
          <Divider />

          {/* Contact */}
          <Contact />
          <Divider />
        </main>
      </div>
    </div>
  )
}

export default App
