import { motion } from 'framer-motion';
import { AnimatedCube } from '../components/AnimatedCube';
import { Download, Mail, ExternalLink } from 'lucide-react';

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // works in dev and on GitHub Pages (/portfolio-website/)
  const resumeUrl = import.meta.env.BASE_URL + 'calvin_karthik_resume.pdf';

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}>
          <AnimatedCube />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">Calvin Karthik</h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">Computer Engineering @ McMaster (Co-op)</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I design and build embedded systems, intelligent apps, and clean UI that ship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 backdrop-blur-md bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 rounded-xl hover:bg-cyan-400/30 transition-all duration-200 font-medium flex items-center gap-2 group"
          >
            View Projects
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Resume -> open PDF in new tab */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/15 transition-all duration-200 font-medium flex items-center gap-2 group"
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            href="mailto:calvin.g.karthik@gmail.com"
            className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/15 transition-all duration-200 font-medium flex items-center gap-2 group"
          >
            <Mail size={18} />
            Email Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};
