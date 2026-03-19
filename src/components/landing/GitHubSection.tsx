import { motion } from "framer-motion";
import { Github, Star, GitFork, Users, ExternalLink } from "lucide-react";

const GitHubSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8"
          >
            <Github className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6 italic tracking-tight">NemoClaw GitHub</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            NemoClaw is built on <strong>Open Source</strong> foundations. Join our growing community of developers contributing to the most advanced <strong>NVIDIA-accelerated</strong> AI agent setup kit.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 sm:p-12 rounded-[2.5rem] border-white/5 bg-white/[0.01] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-primary/10 transition-colors pointer-events-none">
              <Github className="w-48 h-48 -mr-16 -mt-16" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-black rounded-full uppercase tracking-widest">Public Repository</div>
                  <div className="text-white/40 text-xs font-mono">v1.4.2-stable</div>
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight mb-4">nvidia/nemoclaw-setup-kit</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  The core automation layer, security hardening templates, and <strong>NIM microservice</strong> integration scripts are fully transparent and auditable.
                </p>
                
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col">
                    <span className="text-2xl font-display font-bold text-white">12.4k+</span>
                    <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest flex items-center gap-1">
                      <Star className="w-3 h-3 text-primary" /> GitHub Stars
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-display font-bold text-white">840+</span>
                    <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest flex items-center gap-1">
                      <GitFork className="w-3 h-3 text-primary" /> Forks
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-display font-bold text-white">50k+</span>
                    <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest flex items-center gap-1">
                      <Users className="w-3 h-3 text-primary" /> Monthly Clones
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                 <button
                   className="w-full h-16 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-4 hover:bg-gray-100 transition-all active:scale-95 shadow-2xl"
                   onClick={() => window.open('https://github.com/NVIDIA/NemoClaw', '_blank')}
                 >
                   <Github className="w-6 h-6" />
                   Star on GitHub
                 </button>
                 <button
                   className="w-full h-16 bg-white/5 border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-4 hover:bg-white/10 transition-all active:scale-95"
                   onClick={() => window.open('https://github.com/NVIDIA/NemoClaw/discussions', '_blank')}
                 >
                   Join Discussions
                   <ExternalLink className="w-5 h-5" />
                 </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
