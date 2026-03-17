import { motion } from "framer-motion";
import { Brain, Shield, Gauge, Layers, Globe, Code } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Deep Neural Analysis",
    description: "Advanced neural networks that understand context, nuance, and complex relationships in your data.",
  },
  {
    icon: Gauge,
    title: "Real-Time Processing",
    description: "GPU-accelerated inference delivers results in milliseconds, not minutes.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Policy-based sandboxing following enterprise security best practices and zero-trust architecture.",
  },
  {
    icon: Layers,
    title: "Multi-Model Orchestration",
    description: "Seamlessly combine and orchestrate multiple AI models for complex workflows.",
  },
  {
    icon: Globe,
    title: "Global Edge Deployment",
    description: "Deploy to 200+ edge locations worldwide for ultra-low latency inference.",
  },
  {
    icon: Code,
    title: "Developer-First API",
    description: "RESTful and gRPC APIs with SDKs for Python, TypeScript, Go, and Rust.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4">
            Built for the <span className="text-gradient-primary">Future of AI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale AI-powered applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group glass-panel rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-sm transition-shadow duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
