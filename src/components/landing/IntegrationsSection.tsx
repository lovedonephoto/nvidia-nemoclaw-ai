import { motion } from "framer-motion";
import { GitBranch, Workflow, Sparkles } from "lucide-react";

const integrations = [
  {
    icon: GitBranch,
    label: "TensorRT",
    desc: "Optimized inference engine",
  },
  {
    icon: Workflow,
    label: "Triton Server",
    desc: "Multi-framework serving",
  },
  {
    icon: Sparkles,
    label: "CUDA Toolkit",
    desc: "GPU-accelerated computing",
  },
];

const IntegrationsSection = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
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
            Optimized for <span className="text-gradient-primary">NVIDIA Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seamlessly integrates with the NVIDIA AI stack for maximum performance and flexibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {integrations.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-panel rounded-xl p-8 text-center hover:border-primary/30 hover:glow-sm transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.label}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
