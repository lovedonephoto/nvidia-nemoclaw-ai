import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight } from "lucide-react";

const NemotronFamilySection = () => {
  const modelFamily = [
    {
      name: "Nemotron 3 Nano 30B A3B",
      features: [
        "4x faster throughput compared to Nemotron 2 Nano",
        "Leading accuracy for coding, reasoning, math and long context tasks",
        "Perfect for agents that need to deliver highest accuracy and efficiency for targeted tasks"
      ],
      links: ["Demo Model on OpenRouter", "Download on Hugging Face", "Read Technical Report"]
    },
    {
      name: "Nemotron 3 Super 120B A12B",
      highlight: true,
      features: [
        "Highest in-class efficiency and leading accuracy",
        "Great for addressing complex tasks in multi-agent environment",
        "Suitable for single data center GPU deployments"
      ],
      links: ["Demo Model on OpenRouter", "Experience as NIM API", "Download on Hugging Face"]
    },
    {
      name: "Llama Nemotron Ultra 253B",
      features: [
        "Ideal for multi-agent enterprise workflows requiring highest accuracy",
        "Optimized for customer service automation, supply chain, and IT security",
        "Suitable for data center-scale deployments"
      ],
      links: ["Demo the Model on OpenRouter", "Download on Hugging Face"]
    },
    {
      name: "Nemotron Nano VL 12B",
      features: [
        "Best-in-class vision language accuracy",
        "Designed for document intelligence and video understanding",
        "Suitable for single data center GPU deployments"
      ],
      links: ["Experience the Model as NIM API", "Download on Hugging Face"]
    }
  ];

  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4 italic">Nemotron 3 Super</h2>
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] font-bold">Tailored for every scale of agentic intelligence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {modelFamily.map((model, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-panel p-8 rounded-3xl border-border/40 transition-all ${model.highlight ? 'ring-2 ring-primary/20 bg-primary/[0.02]' : 'bg-white/[0.01]'}`}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold font-display">{model.name}</h3>
                {model.highlight && <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-black rounded-full uppercase">Optimal for Super-Agents</span>}
              </div>
              <ul className="space-y-4 mb-10">
                {model.features.map((f, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed text-left">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                {model.links.map((link, k) => (
                  <div key={k} className="flex items-center justify-between group cursor-pointer py-2 border-b border-border/20">
                    <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{link}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NemotronFamilySection;
