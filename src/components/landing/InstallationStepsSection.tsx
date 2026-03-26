import { motion } from "framer-motion";
import { Download, Terminal, Rocket, CheckCircle2, Lock } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "NemoClaw Setup Access",
    desc: "Get access to the official Nemo Claw Install automation scripts and hardened security templates.",
  },
  {
    icon: Terminal,
    title: "Nemo Claw Install",
    desc: "Simply execute the NemoClaw Setup command. Our script handles dependencies, GPU drivers, and Mac optimization.",
  },
  {
    icon: Rocket,
    title: "Deploy Agents",
    desc: "Start your NemoClaw AI agents on Mac or Linux cloud infrastructure with zero manual configuration.",
  },
];

const InstallationStepsSection = () => {
  return (
    <section id="install" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6">
            NemoClaw <span className="text-gradient-primary">Install & Setup</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get your Nemo Claw <strong>Install</strong> and <strong>Setup</strong> running in record time with our professionally optimized AI deployment kit for Mac and GPU-accelerated systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl border-border/40 relative group hover:border-primary/20 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{step.desc}</p>
              
              <div className="flex items-center gap-2 text-xs font-medium text-primary">
                <CheckCircle2 className="w-4 h-4" />
                <span>5-Minute Execution</span>
              </div>

              {/* Step indicator */}
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-background border border-border/40 flex items-center justify-center font-display font-bold text-muted-foreground/30 text-lg">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal Preview Section */}
        <div className="mt-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl sm:text-4xl font-bold mb-6">
              Install NemoClaw and <span className="text-gradient-primary">Onboard OpenClaw Agent</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              Download and run the installer script. The script installs Node.js if it is not already present, then runs the guided onboard wizard to create a sandbox, configure inference, and apply security policies.
            </p>
            
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you use <code className="text-primary">nvm</code> or <code className="text-primary">fnm</code> to manage Node.js, the installer may not update your current shell's PATH. If <code className="text-primary font-bold">nemoclaw</code> is not found after install, run <code className="px-1.5 py-0.5 rounded bg-green-500/10 text-green-500 border border-green-500/20 text-xs">source ~/.bashrc</code> (or <code className="px-1.5 py-0.5 rounded bg-green-500/10 text-green-500 border border-green-500/20 text-xs">source ~/.zshrc</code> for zsh) or open a new terminal.
              </p>
            </div>

            <p className="text-sm font-medium text-foreground mb-4">
              When the install completes, a summary confirms the running environment:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-border/40 bg-[#0c0c0c] shadow-2xl"
          >
            <div className="bg-muted/30 px-4 py-2 flex items-center gap-2 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
              </div>
              <span className="text-[10px] text-muted-foreground font-mono ml-2 uppercase tracking-widest">NemoClaw Setup</span>
            </div>
            <div className="p-6 font-mono text-sm sm:text-base whitespace-pre-wrap">
              <div className="relative group overflow-hidden mb-6">
                <div className="flex gap-3 text-primary font-mono text-sm sm:text-base">
                  <span>$</span>
                  <span className="text-foreground shrink-0">curl -fsSL https://get.nemoclaw.ai/</span>
                  <span className="blur-[40px] select-none opacity-5 pointer-events-none">install | bash --config=PRO_SETUP_KIT</span>
                </div>
                <div className="absolute inset-0 bg-background/5 backdrop-blur-[2px] flex items-center justify-end pr-1 opacity-100 transition-all pointer-events-auto">
                   <button 
                     onClick={() => window.open('https://apps.apple.com/us/app/ai-agent-openclaw-companion/id6760222159', '_blank')}
                     className="bg-primary text-black text-[10px] font-black px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-primary/20"
                   >
                     <Lock className="w-3 h-3" />
                     DOWNLOAD AI AGENT APP
                   </button>
                </div>
              </div>
              <div className="text-muted-foreground space-y-2">
                <p className="text-white/80">______________________________________________________</p>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                  <span className="text-white/40">Sandbox</span>
                  <span className="text-green-500/80">my-assistant (Landlock + seccomp + netns)</span>
                  <span className="text-white/40">Model</span>
                  <span className="text-blue-500/80">nemotron-3-super-120b-a12b (API)</span>
                </div>
                <p className="text-white/80">______________________________________________________</p>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                  <span className="text-white/40">Run:</span>
                  <span className="text-foreground">nemoclaw my-assistant connect</span>
                  <span className="text-white/40">Status:</span>
                  <span className="text-foreground">nemoclaw my-assistant status</span>
                  <span className="text-white/40">Logs:</span>
                  <span className="text-foreground">nemoclaw my-assistant logs --follow</span>
                </div>
                <p className="text-white/80">______________________________________________________</p>
                <p className="text-primary font-bold mt-4">[INFO]  === Installation complete ===</p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Setup Kit Features Grid for SEO */}
        <div className="mt-24 max-w-6xl mx-auto rounded-[3rem] border border-primary/20 bg-primary/5 p-12 overflow-hidden relative group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none" />
           <div className="relative z-10">
              <h3 className="font-display text-2xl sm:text-4xl font-bold mb-12 text-center italic tracking-tighter">Everything in the <span className="text-primary underline">Setup Kit</span></h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { t: "Native GPU Logic", d: "Auto-detects H100, RTX, and M-series chips for zero-config hardware mapping." },
                   { t: "Isolated Sandboxing", d: "Deploy agents in hardened environments with restricted network policies." },
                   { t: "Custom Skills Kit", d: "Pre-configured agents for code generation, UGC, and browser automation." },
                   { t: "Direct CLI Build", d: "Compile and manage NemoClaw instances directly from your terminal." }
                 ].map((feat, idx) => (
                   <div key={idx} className="p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-primary/40 transition-all">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs mb-4">{idx + 1}</div>
                      <h4 className="font-bold text-lg mb-2 text-foreground italic">{feat.t}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed italic">{feat.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationStepsSection;
