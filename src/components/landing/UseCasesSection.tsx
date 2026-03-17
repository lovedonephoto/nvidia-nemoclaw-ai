import { motion } from "framer-motion";
import { Cpu, Building2, HeartPulse, BarChart3 } from "lucide-react";

const useCases = [
  {
    icon: Cpu,
    title: "Autonomous Systems",
    description: "Power self-driving vehicles, robotics, and industrial automation with real-time AI inference at the edge.",
  },
  {
    icon: Building2,
    title: "Smart Infrastructure",
    description: "Transform cities and facilities with predictive maintenance, energy optimization, and intelligent monitoring.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Life Sciences",
    description: "Accelerate drug discovery, medical imaging analysis, and patient outcome prediction with GPU-powered models.",
  },
  {
    icon: BarChart3,
    title: "Financial Intelligence",
    description: "Detect fraud in real time, automate compliance, and generate market insights with millisecond latency.",
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 sm:py-32 relative">
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
            Deployment <span className="text-gradient-primary">Use Cases</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From edge computing to enterprise analytics — see how teams deploy NemoClaw across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-xl p-6 hover:border-primary/30 transition-all duration-300 flex gap-5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <uc.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{uc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{uc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
