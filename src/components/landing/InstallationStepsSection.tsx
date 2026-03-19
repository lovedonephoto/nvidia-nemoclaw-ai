import { motion } from "framer-motion";
import { Download, Terminal, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Download Setup Kit",
    desc: "Get access to the official NVIDIA NemoClaw setup automation scripts and hardened security templates.",
  },
  {
    icon: Terminal,
    title: "Run Install Script",
    desc: "Simply execute the install command. Our script handles dependencies, GPU drivers, and Mac optimization automatically.",
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
            Get your AI infrastructure running in record time with our professionally optimized deployment kit.
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

        {/* Terminal Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto rounded-xl overflow-hidden border border-border/40 bg-[#0c0c0c] shadow-2xl"
        >
          <div className="bg-muted/30 px-4 py-2 flex items-center gap-2 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 text-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 text-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 text-green-500" />
            </div>
            <span className="text-[10px] text-muted-foreground font-mono ml-2 uppercase tracking-widest">NemoClaw Setup Mac</span>
          </div>
          <div className="p-6 font-mono text-sm sm:text-base">
            <div className="flex gap-3 text-primary mb-2">
              <span>$</span>
              <span className="text-foreground">curl -sSfL https://nemoclaw.ai/install.sh | sh</span>
            </div>
            <div className="text-muted-foreground space-y-1">
              <p className="text-green-500/80">[...] Detecting NVIDIA GPU... Found L40S</p>
              <p className="text-blue-500/80">[...] Optimizing for macOS (Apple Silicon detected)</p>
              <p className="text-white/40">[...] Installing NemoClaw Environment 1.4.2</p>
              <p className="text-primary font-bold animate-pulse mt-2">✓ NemoClaw Ready for Deployment.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstallationStepsSection;
