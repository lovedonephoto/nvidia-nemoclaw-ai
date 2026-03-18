import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "GPU-Accelerated Inference", nemoclaw: true, openclaw: true },
  { feature: "Pre-built AI Agent Templates", nemoclaw: true, openclaw: false },
  { feature: "Enterprise Security Suite", nemoclaw: true, openclaw: false },
  { feature: "Open Source Core", nemoclaw: true, openclaw: true },
  { feature: "ClawBot Builder (Drag & Drop)", nemoclaw: true, openclaw: false },
  { feature: "Community Plugins & Extensions", nemoclaw: true, openclaw: true },
  { feature: "Automated Install Scripts", nemoclaw: true, openclaw: false },
  { feature: "NVIDIA Nemotron Integration", nemoclaw: true, openclaw: false },
];

const NemoClawVsOpenClawSection = () => {
  return (
    <section id="nemoclaw-vs-openclaw" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">NemoClaw</span> vs <span className="text-gradient-primary">OpenClaw</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            NemoClaw builds on the open-source OpenClaw foundation with enterprise features, automated tooling, and NVIDIA Nemotron model support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto glass-panel rounded-xl overflow-hidden"
        >
          <div className="grid grid-cols-3 gap-0 border-b border-border/40 px-6 py-4">
            <div className="text-sm font-semibold text-muted-foreground">Feature</div>
            <div className="text-center text-sm font-bold text-foreground">NemoClaw</div>
            <div className="text-center text-sm font-bold text-foreground">OpenClaw</div>
          </div>
          {comparisons.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 gap-0 px-6 py-3.5 ${i % 2 === 0 ? "bg-background/30" : ""} ${i < comparisons.length - 1 ? "border-b border-border/20" : ""}`}
            >
              <div className="text-sm text-foreground">{row.feature}</div>
              <div className="flex justify-center">
                {row.nemoclaw ? (
                  <Check className="w-5 h-5 text-primary" />
                ) : (
                  <X className="w-5 h-5 text-muted-foreground/40" />
                )}
              </div>
              <div className="flex justify-center">
                {row.openclaw ? (
                  <Check className="w-5 h-5 text-primary" />
                ) : (
                  <X className="w-5 h-5 text-muted-foreground/40" />
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NemoClawVsOpenClawSection;
