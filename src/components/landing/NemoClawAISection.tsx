import { motion } from "framer-motion";
import { Bot, Workflow, Sparkles, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    icon: Bot,
    title: "NemoClaw AI Agents",
    description: "Autonomous Nemo Claw AI agents that understand natural language, reason through multi-step problems, and take action without human intervention.",
  },
  {
    icon: Workflow,
    title: "Deployment Orchestration",
    description: "Coordinate multiple NemoClaw agents working together on complex workflows with our optimized server-side configurations.",
  },
  {
    icon: Sparkles,
    title: "NemoClaw ClawBot Builder",
    description: "Build custom NemoClaw ClawBot assistants with drag-and-drop tools. No deep ML expertise required — just define goals and let the AI handle the rest.",
  },
  {
    icon: ShieldCheck,
    title: "Hardened Security Kit",
    description: "Deploy NemoClaw in secure environments with our pre-built sandboxing policies, role-based access templates, and encryption guides.",
  },
];

const NemoClawAISection = () => {
  return (
    <section id="nemoclaw-ai" className="py-24 sm:py-32 relative">
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
            Powerful <span className="text-gradient-primary">Toolkit</span> Capabilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to secure and automate your NemoClaw environment with professional-grade infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{cap.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cap.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NemoClawAISection;
