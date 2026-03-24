import { motion } from "framer-motion";
import { ExternalLink, Terminal, ArrowRight } from "lucide-react";

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
            NemoClaw is an open source reference stack that simplifies running <span className="text-foreground underline decoration-primary/30 underline-offset-4">OpenClaw</span> always-on assistants safely. It installs the <a href="https://github.com/lovedonephoto/nemoclaw-ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4 inline-flex items-center gap-1">OpenShell <ExternalLink className="w-4 h-4" /></a> runtime, part of the Agent Toolkit, a secure environment for running autonomous agents, and open source models like <span className="text-foreground border-b border-primary/30">Nemotron</span>.
          </p>

          <h2 className="font-display text-2xl sm:text-4xl font-bold mb-8">
            Get Started
          </h2>
          <p className="text-muted-foreground text-md mb-6 font-medium">
            Install the CLI and launch a sandboxed OpenClaw instance in a few commands.
          </p>

          <div className="rounded-xl overflow-hidden border border-primary/20 bg-[#0c0c0c] shadow-2xl p-6 mb-10 group">
             <div className="flex gap-3 text-primary mb-0 font-mono text-sm sm:text-base">
                <span>$</span>
                <span className="text-foreground">curl -fsSL https://get.nemoclaw.ai/install | bash</span>
              </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base">
            <p className="text-muted-foreground">
              Run <code className="px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-mono font-bold">nemoclaw --help</code> in your terminal to view the full CLI reference. You can also clone the <a href="#" className="text-foreground underline decoration-primary/50 hover:decoration-primary underline-offset-4 transition-all">NemoClaw repository</a> to explore the plugin source and blueprint.
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
