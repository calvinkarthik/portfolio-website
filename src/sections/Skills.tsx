import { GlassCard } from '../components/GlassCard';
import { TechChip } from '../components/TechChip';
import { Skill } from '../types';

const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Python", "C/C++", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "MATLAB"]
  },
  {
    category: "Tools & Frameworks",
    items: ["React Native", "Node.js", "Altium Designer", "Cohere API", "Autodesk Inventor", "SolidWorks", "Git", "Granta"]
  },
  {
    category: "Interests & Focus Areas",
    items: ["HPC", "Power Systems", "Embedded/Control", "Full-Stack", "PCB Design", "AI/ML Integration"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">Skills & Technologies</h2>
        
        <div className="grid gap-8">
          {skills.map((skillGroup, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <h3 className="text-2xl font-semibold text-white mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <TechChip key={skill} technology={skill} />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};