import { GlassCard } from '../components/GlassCard';
import { TechChip } from '../components/TechChip';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: "PawGress — AI Powered Habit Manager",
    description: "React Native app with animated dog avatar; Cohere API for personalized habit suggestions + AI feedback. Focus on TypeScript/JS, API integration, cross-platform debugging.",
    technologies: ["React Native", "TypeScript", "Cohere API", "AI/ML", "Cross-platform"],
    links: {
      devpost: "https://devpost.com/software/pawgress-t78w9h"
    }
  },
  {
    title: "Airport Baggage Control System Prototype",
    description: "Python passenger check-in + physical baggage handling prototype. CAD + 3D printing via Autodesk Inventor + PrusaSlicer.",
    technologies: ["Python", "Autodesk Inventor", "3D Printing", "System Design", "CAD"],
    links: {}
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {projects.map((project, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <TechChip key={tech} technology={tech} />
                ))}
              </div>

              <div className="flex gap-4">
                {project.links.devpost && (
                  <a
                    href={project.links.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    <ExternalLink size={16} />
                    <span>Devpost</span>
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="text-center">
          <div className="py-8">
            <h3 className="text-2xl font-bold text-white mb-4">More Coming Soon</h3>
            <p className="text-gray-400">
              Currently working on embedded systems projects and PCB designs. 
              Check back soon for updates!
            </p>
            <div className="w-16 h-1 bg-cyan-400/30 mx-auto mt-6 rounded-full animate-pulse" />
          </div>
        </GlassCard>
      </div>
    </section>
  );
};