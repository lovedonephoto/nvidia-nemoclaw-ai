import { motion } from "framer-motion";
import { Terminal, Apple, Container, MonitorSmartphone } from "lucide-react";

const platforms = [
  {
    icon: Terminal,
    title: "NemoClaw Install on Ubuntu",
    description: "One-command installation scripts for Ubuntu 22.04+ with automatic CUDA driver setup, dependency resolution, and systemd service configuration.",
    keyword: "nemoclaw install",
  },
  {
    icon: Apple,
    title: "NemoClaw on Mac",
    description: "Native Apple Silicon support with Metal acceleration. Run NemoClaw AI agents locally on M-series chips with optimized memory management.",
    keyword: "nemoclaw mac",
  },
  {
    icon: Container,
    title: "NemoClaw Docker Deployment",
    description: "Pre-built Docker images with Container Toolkit integration. Deploy NemoClaw in isolated containers with GPU passthrough in minutes.",
    keyword: "nemoclaw docker",
  },
  {
    icon: MonitorSmartphone,
    title: "NemoClaw Edge & NanoClaw",
    description: "Lightweight NanoClaw runtime for edge devices and IoT. Run inference on Jetson, embedded systems, and resource-constrained environments.",
    keyword: "nanoclaw",
  },
];

const NemoClawInstallSection = () => {
  return (
    <section id="install-nemoclaw" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4">
            How to <span className="text-gradient-primary">Install NemoClaw</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Deploy NemoClaw on any platform — Mac, Ubuntu, Docker, or edge devices. Our setup toolkit automates the entire installation process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-xl p-8 hover:border-primary/30 transition-all duration-300 flex flex-col gap-5 group"
            >
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <platform.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{platform.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{platform.description}</p>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-white/5 font-mono text-[10px] sm:text-xs">
                 <div className="flex gap-2 text-primary/60 bg-black/40 p-3 rounded-lg border border-white/5">
                    <span>$</span>
                    <span className="text-foreground/80 break-all">curl -fsSL https://get.nemoclaw.ai/install | bash -s -- edition={platform.keyword === 'nanoclaw' ? 'nano' : platform.keyword.split(' ')[1] || 'standard'}</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NemoClawInstallSection;
