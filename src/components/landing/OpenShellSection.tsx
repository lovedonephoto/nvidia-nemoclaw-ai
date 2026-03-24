import { motion } from "framer-motion";
import { ExternalLink, Terminal, ArrowRight, Lock } from "lucide-react";

const OpenShellSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background/50">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-2xl sm:text-4xl font-bold mb-6">
            NemoClaw <span className="text-gradient-primary">OpenShell</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            NemoClaw is an open source reference stack that simplifies running <span className="text-foreground underline decoration-primary/30 underline-offset-4">OpenClaw</span> always-on assistants safely. It installs the <a href="https://github.com/lovedonephoto/nvidia-nemoclaw-ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4 inline-flex items-center gap-1">OpenShell <ExternalLink className="w-4 h-4" /></a> runtime, part of the Agent Toolkit, a secure environment for running autonomous agents, and open source models like <span className="text-foreground border-b border-primary/30">Nemotron</span>.
          </p>

          <h2 className="font-display text-2xl sm:text-4xl font-bold mb-8">
            Get Started
          </h2>
          <p className="text-muted-foreground text-md mb-6 font-medium">
            Install the CLI and launch a sandboxed OpenClaw instance in a few commands.
          </p>

             <div className="relative group overflow-hidden flex items-center justify-between">
                <div className="flex gap-3 text-primary mb-0 font-mono text-sm sm:text-base">
                   <span>$</span>
                   <span className="text-foreground shrink-0">curl -fsSL https://get.nemoclaw.ai/</span>
                   <span className="blur-[40px] select-none opacity-5 pointer-events-none">install | bash --config=PRO_SETUP_KIT</span>
                 </div>
                 <div className="absolute inset-0 bg-background/10 backdrop-blur-[1px] flex items-center justify-end pr-1 opacity-100 transition-all pointer-events-auto">
                    <button 
                      onClick={() => window.open('https://buy.polar.sh/polar_cl_iOIqgNKmid5LFFmMwu56jM4gUWGjD5HlkAIyQ2xo12N', '_blank')}
                      className="bg-primary text-black text-[10px] font-black px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-primary/20 whitespace-nowrap"
                    >
                      <Lock className="w-3 h-3" />
                      UNLOCK SETUP KIT
                    </button>
                 </div>
              </div>

          <div className="space-y-4 text-sm sm:text-base">
            <p className="text-muted-foreground">
              Run <code className="px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-mono font-bold">nemoclaw --help</code> in your terminal to view the full CLI reference. You can also clone the <a href="https://github.com/lovedonephoto/nvidia-nemoclaw-ai" target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-primary/50 hover:decoration-primary underline-offset-4 transition-all">NemoClaw repository</a> to explore the plugin source and blueprint.
            </p>
            <p className="text-muted-foreground">
              Proceed to the <a href="#" className="text-foreground underline decoration-primary/50 hover:decoration-primary underline-offset-4 transition-all inline-flex items-center gap-1 font-bold">Quickstart <ArrowRight className="w-4 h-4" /></a> for step-by-step instructions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenShellSection;
