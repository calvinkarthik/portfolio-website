// src/App.tsx
import { useEffect } from 'react';
import { Cursor } from './components/Cursor';
import { WaffleMenu } from './components/WaffleMenu';
import { NavigationDots } from './components/NavigationDots';
import { Hero } from './sections/Hero';
import About from './sections/About';
import { ExperienceSection } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Awards } from './sections/Awards';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

function App() {
  useEffect(() => {
    // Custom scrollbar styles
    document.documentElement.style.setProperty('--scrollbar-bg', '#0B0B0C');
    document.documentElement.style.setProperty('--scrollbar-thumb', '#374151');
    document.documentElement.style.setProperty('--scrollbar-thumb-hover', '#4B5563');

    // Hide default cursor
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    // bg is handled by body; keep container transparent
    <div className="bg-transparent text-white min-h-screen overflow-x-hidden">
      {/* Overlays / UI */}
      <Cursor />
      <WaffleMenu />
      <NavigationDots />

      {/* Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Awards />
        <Skills />
        <Contact />
      </main>

      {/* Global scrollbar + motion prefs */}
      <style jsx global>{`
        * { cursor: none !important; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--scrollbar-bg); }
        ::-webkit-scrollbar-thumb { background: var(--scrollbar-thumb); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--scrollbar-thumb-hover); }
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
