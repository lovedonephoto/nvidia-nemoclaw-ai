import { motion } from "framer-motion";
import { Shield, Lock, UserCheck, Power } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const highlights = [
  { icon: Shield, label: "Run OpenClaw in an Isolated Sandbox", desc: "Use OpenClaw as your agent. No code changes." },
  { icon: Lock, label: "Deny-by-Default Access", desc: "Agents start with zero permissions, and you explicitly approve based on intent and governance." },
  { icon: UserCheck, label: "Private Inference by Default", desc: "NemoClaw uses a local open model on-device (such as NVIDIA Nemotron) for private work." },
  { icon: Power, label: "Always-on", desc: "Close your laptop — the agent keeps working on DGX Spark or Station. With no per-token cloud costs." },
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
            What is <span className="text-gradient-primary">NVIDIA NemoClaw</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto mb-6 text-left sm:text-center">
            NemoClaw is an open source stack that simplifies running <strong className="text-foreground">OpenClaw</strong> always-on assistants—with a single command. It incorporates policy-based privacy and security guardrails, giving users control over their agents' behavior and data handling. This enables self-evolving claws to run more safely in clouds, on premises, RTX PCs, and DGX Spark.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto mb-10 text-left sm:text-center">
            NemoClaw uses open source models, like <strong className="text-foreground">NVIDIA Nemotron</strong>, alongside the NVIDIA OpenShell runtime—a secure environment designed for executing claws more safely. By combining powerful open source models with built-in safety measures, NemoClaw simplifies and secures AI agent deployment.
          </p>

          <div className="flex justify-center mb-24">
            <CountdownTimer />
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-bold mb-10 text-left sm:text-center">
            Why You Need <span className="text-gradient-primary">NemoClaw</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-xl p-5 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-3 text-foreground text-left">{item.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-left">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsNemoClawSection;
