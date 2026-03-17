import { motion } from "framer-motion";
import { Github, Terminal, Package, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Github, value: "12K+", label: "GitHub Stars" },
  { icon: Package, value: "200+", label: "Community Plugins" },
  { icon: Users, value: "5K+", label: "Contributors" },
  { icon: Terminal, value: "1M+", label: "Monthly Downloads" },
];

const OpenClawSection = () => {
  return (
    <section id="open-claw" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto glass-panel rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                GitHub <span className="text-gradient-primary">NemoClaw</span> — Open Claw
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-3">
                Open Claw is the open-source core of NVIDIA NemoClaw. Build, customize, and deploy 
                your own NemoClaw AI agents with full access to the source code on GitHub.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                The NemoClaw ClawBot framework enables developers to create intelligent bots and 
                autonomous agents powered by NVIDIA's GPU infrastructure. Fork it, extend it, ship it.
              </p>
              <div className="flex gap-3">
                <Button variant="hero" size="lg">
                  <Github className="w-4 h-4 mr-1" />
                  View on GitHub
                </Button>
                <Button variant="hero-outline" size="lg">
                  Read the Docs
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-background/50 rounded-xl p-4 text-center border border-border/50"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenClawSection;
