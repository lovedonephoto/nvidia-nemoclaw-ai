import { motion } from "framer-motion";
import { Brain, Zap, Server, GitBranch } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI-Powered Agents", desc: "Autonomous AI agents that reason, plan, and execute complex tasks." },
  { icon: Zap, label: "GPU-Accelerated", desc: "Built on NVIDIA infrastructure for real-time, low-latency inference." },
  { icon: Server, label: "Edge & Cloud", desc: "Deploy anywhere — from edge devices to massive cloud clusters." },
  { icon: GitBranch, label: "Open Claw Framework", desc: "Open-source toolkit for building custom NemoClaw AI agents." },
];

const WhatIsNemoClawSection = () => {
  return (
    <section id="what-is-nemoclaw" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6">
            What is <span className="text-gradient-primary">Nemo Claw</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            NVIDIA NemoClaw is a powerful open-source AI agent platform. 
            Our <strong>Premium Setup Toolkit</strong> empowers you to deploy this complex infrastructure 
            seamlessly, leveraging GPU-accelerated inference and advanced neural reasoning 
            with professional-grade automation.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mx-auto">
            Whether you are deploying NemoClaw for autonomous research or enterprise task orchestration, 
            our kit provides the hardened security and expert configurations needed to run 
            on NVIDIA's cutting-edge hardware ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-xl p-5 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-semibold mb-1.5 text-foreground">{item.label}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsNemoClawSection;
