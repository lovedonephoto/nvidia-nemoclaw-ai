import { motion } from "framer-motion";
import { useEffect } from "react";
import { Bot, Cpu, Zap, Shield, ChevronRight, ArrowUpRight, CheckCircle2, MessageSquare, Gauge, Layers, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Brain = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="lucide lucide-brain"
  >
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.105 4 4 0 0 0 7.327-2.673 4 4 0 0 0 7.325 2.67 4 4 0 0 0 .52-8.103 4 4 0 0 0-2.527-5.771A3 3 0 1 0 12 5zm0 18V12" />
  </svg>
);

const AiAgents = () => {
  useEffect(() => {
    const pageTitle = "NemoClaw AI Agents Ecosystem: PicoClaw, ZeroClaw, KimiClaw & OpenClaw Specialized AI Deployment Guide";
    const pageDesc = "Discover the NemoClaw AI Agents Ecosystem. Deploy specialized PicoClaw, ZeroClaw, KimiClaw, and OpenClaw agents for your enterprise AI infrastructure today.";
    
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", pageDesc);
    }
    const link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", "https://nemoclawaiapp.com/ai-agents");
    }
    window.scrollTo(0, 0);
  }, []);

  const agents = [
    {
      name: "PicoClaw",
      id: "picoclaw",
      tag: "Ultra-Fast Edge Agent",
      description: "Designed for extreme performance on low-power edge devices and mobile hardware. PicoClaw delivers sub-millisecond reasoning for real-time sensor processing and UI automation.",
      features: ["Low VRAM footprint (<4GB)", "Real-time inference", "Local-first privacy", "Apple Silicon Optimized"],
      icon: Zap,
      color: "text-blue-400"
    },
    {
      name: "ZeroClaw",
      id: "zeroclaw",
      tag: "Zero-Config Minimalist",
      description: "The lightweight champion of the ecosystem. ZeroClaw requires no manual configuration—simply deploy as a Docker container and let it self-optimize for your local GPU cluster.",
      features: ["Auto-GPU mapping", "Serverless ready", "Hardened secure core", "Minimalist SDK"],
      icon: Shield,
      color: "text-green-400"
    },
    {
      name: "KimiClaw",
      id: "kimiclaw",
      tag: "Advanced Reasoning Expert",
      description: "Harnessing the power of the latest large-scale models, KimiClaw is specialized for complex multi-step reasoning, logical analysis, and executive decision-making tasks.",
      features: ["1M Token Context", "Multi-step planning", "Enterprise data connectors", "RAG-optimized"],
      icon: Brain,
      color: "text-purple-400"
    },
    {
      name: "OpenClaw",
      id: "openclaw",
      tag: "Community Powerhouse",
      description: "The flexible, open-source foundation of our ecosystem. OpenClaw provides the transparency and customizability needed for research and specialized community builds.",
      features: ["Open-source weights", "Plug-and-play modules", "Community templates", "Multi-LLM support"],
      icon: Layers,
      color: "text-primary"
    }
  ];

  const faqs = [
    {
      q: "What is the NemoClaw AI Agents Ecosystem?",
      a: "The NemoClaw AI Agents Ecosystem is a collection of specialized autonomous agents (Pico, Zero, Kimi, OpenClaw) optimized for different hardware and reasoning requirements within the NVIDIA Nemo infrastructure."
    },
    {
      q: "How do I choose between PicoClaw and KimiClaw?",
      a: "Choose PicoClaw for high-speed, low-power edge tasks like mobile automation. Choose KimiClaw for complex, long-context reasoning tasks that require processing large datasets."
    },
    {
      q: "Can I deploy these agents on-premise?",
      a: "Yes, all agents in the NemoClaw ecosystem are designed for self-hosting with a privacy-first approach, ensuring total data sovereignty."
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "NemoClaw AI Agents Ecosystem",
          "description": "Deployment guide for specialized AI agents: PicoClaw, ZeroClaw, KimiClaw, and OpenClaw.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nemoclawaiapp.com/" },
              { "@type": "ListItem", "position": 2, "name": "AI Agents", "item": "https://nemoclawaiapp.com/ai-agents" }
            ]
          },
          "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          }
        })}
      </script>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-8">
              <Bot className="w-3 h-3 text-primary animate-pulse" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Autonomous Ecosystem</span>
            </div>
            <h1 className="font-display text-4xl sm:text-7xl font-bold mb-8 leading-tight tracking-tighter">
              NemoClaw <span className="text-gradient-primary">AI Agents</span> Ecosystem: PicoClaw, ZeroClaw, KimiClaw & OpenClaw Specialized AI Deployment Guide
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Deploy specialized autonomous agents tailored for every use case—from low-power local processing to multi-node enterprise reasoning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {agents.map((agent, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-[40px] border-border/40 hover:border-primary/20 transition-all group flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${agent.color}`}>
                    <agent.icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                    {agent.tag}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 font-display">{agent.name}</h3>
                <p className="text-muted-foreground mb-8 text-sm leading-relaxed flex-grow">
                  {agent.description}
                </p>

                <div className="space-y-3 mb-10">
                  {agent.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs font-medium">
                      <CheckCircle2 className={`w-4 h-4 ${agent.color}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to={`/${agent.id}`}
                  className="flex items-center justify-between pt-6 border-t border-border/20 cursor-pointer group-hover:text-primary transition-colors"
                >
                  <span className="font-bold text-sm uppercase tracking-tighter">Learn more about {agent.name}</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deploy Stats Section */}
      <section className="py-24 relative border-y border-border/40 bg-foreground/[0.01]">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
               {[
                 { label: "Total Deployments", value: "142k+" },
                 { label: "Active Nodes", value: "89k" },
                 { label: "Latancy (Pico)", value: "<15ms" },
                 { label: "Context Window", value: "1M+" },
               ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                     <div className="text-4xl font-display font-black text-foreground">{stat.value}</div>
                     <div className="text-[10px] font-bold text-primary uppercase tracking-widest">{stat.label}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Terminal Preview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-[30px] border border-white/5 bg-[#050505] overflow-hidden shadow-2xl relative group">
             <div className="flex items-center gap-2 px-6 py-4 bg-white/5 border-b border-white/5 leading-none">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                <span className="ml-4 text-[10px] font-mono text-muted-foreground uppercase font-black tracking-widest">nemoclaw ~ agent-deploy</span>
             </div>
             <div className="p-10 font-mono text-sm sm:text-base leading-relaxed">
                <div className="text-primary mb-4">$ nemoclaw deploy --agent picoclaw --target local-metal</div>
                <div className="text-muted-foreground flex gap-3"><ChevronRight className="w-4 h-4 mt-1" /> Initializing PicoClaw Environment...</div>
                <div className="text-muted-foreground flex gap-3"><ChevronRight className="w-4 h-4 mt-1" /> Mapping Apple Silicon GPU (M4 Max detected)...</div>
                <div className="text-green-400 mt-4 font-bold flex gap-3"><CheckCircle2 className="w-4 h-4 mt-1" /> AGENT READY: PicoClaw is now monitoring local kernel events.</div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold italic">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-panel p-8 rounded-[30px] border-border/40 hover:border-primary/20 transition-all">
                <h4 className="font-bold mb-4 text-xl text-primary">{faq.q}</h4>
                <p className="text-muted-foreground leading-relaxed italic">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AiAgents;
