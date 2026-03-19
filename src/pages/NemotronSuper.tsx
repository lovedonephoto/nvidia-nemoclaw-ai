import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Zap, Cpu, BarChart3, ShieldCheck, ChevronRight, Activity, Server, Database, Layers, Terminal, Gauge, CheckCircle2, Globe, ArrowUpRight, Eye } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const NemotronSuper = () => {
  useEffect(() => {
    document.title = "NVIDIA Nemotron 3 Super | AI Reasoning Model";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "NVIDIA Nemotron 3 Super benchmark and performance guide. Learn how to deploy Nemotron-3 for high-performance AI reasoning and autonomous agents.");
    }
    const link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", "https://nemoclawaiapp.com/nvidia-nemotron-3-super");
    }
    window.scrollTo(0, 0);
  }, []);

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
      links: ["Demo Model on OpenRouter", "Experience as NVIDIA NIM API", "Download on Hugging Face"]
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
      links: ["Experience the Model as NVIDIA NIM API", "Download on Hugging Face"]
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      {/* Super Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-8">
              <Activity className="w-3 h-3 text-primary animate-pulse" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">NVIDIA Nemotron 3 Family</span>
            </div>
            <h1 className="font-display text-4xl sm:text-7xl font-bold mb-8 leading-tight tracking-tighter">
              NVIDIA <span className="text-gradient-primary">Nemotron 3 Super</span> | AI Reasoning & Agentic Models
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
              Nemotron models are transparent—the training data and weights are open and available on Hugging Face. Powered by the new <strong>hybrid Mamba-Transformer MoE</strong> with <strong>1M-token context</strong>, they deliver top accuracy for complex, high-throughput agentic AI applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mt-12">
             {[
               { label: "Architecture", value: "Mamba-MoE" },
               { label: "Max Context", value: "1M Tokens" },
               { label: "Super Weight", value: "120B A12B" },
               { label: "Nano Speed", value: "4x Faster" },
             ].map((stat, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl border-border/40 text-center">
                  <div className="text-2xl font-bold text-foreground mb-1 font-display">{stat.value}</div>
                  <div className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest">{stat.label}</div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Model Cards Grid */}
      <section className="py-24 relative bg-foreground/[0.01]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4 italic">Meet the Reasoning Giants</h2>
            <p className="text-muted-foreground">Tailored for every scale of agentic intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {modelFamily.map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                    <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
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

      {/* Architecture Section - Updated with Mamba info */}
      <section className="py-32 relative border-y border-border/40 overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
               <div>
                  <h2 className="font-display text-4xl sm:text-6xl font-black mb-8 tracking-tighter italic">Hybrid Mamba-Transformer</h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    NVIDIA Nemotron 3 models introduce a revolutionary <strong>Mamba-Transformer MoE</strong> hybrid. 
                    This allows for near-infinite context scaling while maintaining the razor-sharp attention mechanisms required for multi-agent reasoning.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {[
                       { icon: Eye, title: "Visual Understanding", desc: "Support for document intelligence & video." },
                       { icon: ShieldCheck, title: "Safety Ready", desc: "Integrated filters for enterprise security." },
                       { icon: Database, title: "Transparent Weights", desc: "Weights and training logs on Hugging Face." },
                       { icon: Zap, title: "NIM Ready", desc: "Deploy via NVIDIA NIM Microservices." },
                     ].map((item, i) => (
                       <div key={i} className="space-y-2">
                          <item.icon className="w-6 h-6 text-primary" />
                          <h4 className="font-bold text-sm">{item.title}</h4>
                          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">{item.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="relative group">
                  <div className="absolute inset-0 bg-primary/5 blur-[100px] animate-pulse" />
                  <div className="relative glass-panel p-12 rounded-[50px] border-primary/20 bg-black text-center">
                      <Cpu className="w-20 h-20 text-primary mx-auto mb-8 animate-pulse-glow" />
                      <div className="font-display text-5xl font-black text-gradient-primary mb-4">1,000,000</div>
                      <div className="text-xs font-bold text-primary tracking-[0.5em] uppercase">Token Context Window</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Terminal View */}
      <section className="py-24 relative overflow-hidden overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
               <h2 className="font-display text-3xl font-bold mb-4 italic">Ready to Deploy?</h2>
               <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] font-bold">Use open frameworks like vLLM, SGLang, and Ollama.</p>
            </div>
            
            <div className="rounded-[40px] border border-white/10 bg-[#080808] overflow-hidden shadow-3xl max-w-4xl mx-auto relative group">
               <div className="absolute inset-0 bg-primary/[0.01] pointer-events-none" />
               <div className="flex items-center justify-between px-8 py-5 bg-white/5 border-b border-white/10">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/40" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                     <div className="w-3 h-3 rounded-full bg-green-500/40" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-primary/60 font-black font-mono">nemoclaw-shell ~ vLLM-Deploy</span>
               </div>
               <div className="p-10 font-mono text-sm sm:text-base leading-loose">
                  <div className="text-white/30 mb-4 font-light italic"># Optimizing Nemotron-3 Super 120B for Single Data Center GPU</div>
                  <div className="flex gap-4 mb-4">
                     <span className="text-primary font-black">$</span>
                     <span className="text-white font-bold group-hover:text-primary transition-colors">vllm serve nvidia/nemotron-3-super-120b --gpu-memory-utilization 0.95</span>
                  </div>
                  <div className="text-green-400/80 mb-2 mt-4 ml-6 flex items-center gap-3"><CheckCircle2 className="w-4 h-4" /> vLLM Initialized on CUDA:0</div>
                  <div className="text-green-400/80 mb-2 ml-6 flex items-center gap-3"><CheckCircle2 className="w-4 h-4" /> Mamba-Transformer Hybrid Layers Loaded</div>
                  <div className="text-green-400/80 mb-2 ml-6 flex items-center gap-3"><CheckCircle2 className="w-4 h-4" /> 1M Token Buffer Allocated</div>
                  <div className="text-primary mt-8 font-black text-center tracking-widest border border-primary/20 py-2 rounded-xl">SYSTEM READY : NEMOTRON SUPER ONLINE</div>
               </div>
            </div>
         </div>
      </section>

      {/* Hardware Ecosystem Grid */}
      <section className="py-24 bg-foreground/[0.02]">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="font-display text-2xl font-bold uppercase tracking-[0.3em] italic text-primary">Certified Hardware Ecosystem</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
               {[
                 { title: "NVIDIA DGX GH200", desc: "Data center-scale deployments for Llama Nemotron Ultra 253B.", icon: Server },
                 { title: "Single Node H100", desc: "Highest efficiency for Nemotron 3 Super 120B A12B.", icon: Cpu },
                 { icon: Zap, title: "RTX Workstation", desc: "Perfect for cost-efficient Nemotron 3 Nano edge agents." },
               ].map((hw, i) => (
                  <div key={i} className="glass-panel p-10 rounded-3xl border-border/40 hover:border-primary/40 transition-all flex flex-col items-center text-center">
                     <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <hw.icon className="w-7 h-7 text-primary" />
                     </div>
                     <h4 className="font-bold mb-3 text-lg">{hw.title}</h4>
                     <p className="text-sm text-muted-foreground leading-relaxed">{hw.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SEO FAQ Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl font-bold italic">Nemotron 3 Intelligence FAQ</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { q: "What is special about the Nemotron 3 Mamba-Transformer hybrid?", a: "This hybrid architecture combines the efficient linear scaling of Mamba with the precise reasoning attention of Transformers, enabling 1M-token context windows." },
              { q: "Are Nemotron 3 models open-source?", a: "Yes, NVIDIA provides open access to weights and training methodologies on Hugging Face, ensuring full transparency." },
              { q: "Which model should I use for multi-agent workflows?", a: "Nemotron 3 Super 120B is specifically engineered for multi-agent environments, offering the highest in-class efficiency." }
            ].map((faq, i) => (
              <div key={i} className="glass-panel p-8 rounded-[30px] border-border/40 hover:border-primary/20 transition-all group">
                <h4 className="font-bold mb-4 text-xl text-primary group-hover:pl-3 transition-all border-l-4 border-transparent group-hover:border-primary">{faq.q}</h4>
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

export default NemotronSuper;
