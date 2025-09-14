import { GlassCard } from '../components/GlassCard';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">About</h2>
        
        <GlassCard>
          <div className="text-lg text-gray-300 leading-relaxed mb-8">
            <p className="mb-6">
              I'm passionate about creating technology that bridges the digital and physical worlds. 
              From PCB design and embedded control systems to AI-powered mobile apps, I thrive on 
              building solutions that are both technically sound and beautifully crafted.
            </p>
            <p className="mb-6">
              Currently pursuing Computer Engineering at McMaster University, I've had the privilege 
              of working on everything from exoskeleton electrical systems to biogas research that 
              earned international recognition. I believe in shipping polished projects that make 
              a real impact.
            </p>
            <p>
              When I'm not designing circuits or writing code, you'll find me exploring the latest 
              in HPC, power systems, and full-stack development. Always learning, always building.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
            <div className="flex flex-wrap gap-3">
              <div className="bg-cyan-400/10 text-cyan-300 px-4 py-2 rounded-full border border-cyan-400/20">
                <span className="font-medium">McMaster University</span>
                <span className="text-gray-400 ml-2">— B.Eng Computer Engineering (Co-op)</span>
              </div>
              <div className="bg-yellow-400/10 text-yellow-300 px-4 py-2 rounded-full border border-yellow-400/20">
                Dean's Honour Roll (2025)
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};