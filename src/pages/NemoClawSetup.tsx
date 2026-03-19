import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Settings, Wrench, Cpu, Database, Key, ShieldCheck, Zap, Layers, Activity, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react";

const NemoClawSetup = () => {
  useEffect(() => {
    document.title = "NemoClaw Setup | Optimized AI Agent Configuration Guide";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional NemoClaw Setup guide. Configure NemoClaw for NVIDIA GPUs, set up API keys, and optimize your local AI agent environment for maximum performance.");
    }

    let link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", "https://nemoclawaiapp.com/nemoclaw-setup");
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', 'https://nemoclawaiapp.com/nemoclaw-setup');
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-white/[0.01]">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Settings className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Post-Install Configuration</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold mb-10 leading-[0.8] tracking-tighter"
          >
            NemoClaw <br />
            <span className="text-gradient-primary">Setup</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Get your environment ready for agentic autonomy. The <strong>NemoClaw Setup</strong> guide 
            covers everything from API integration to high-performance GPU kernel tuning.
          </motion.p>
        </div>
      </section>

      {/* Setup Stages Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "NemoClaw Setup: Core Tuning", desc: "Optimize your OS for low-latency AI inference.", icon: Cpu },
              { title: "NemoClaw Setup: API Bridge", desc: "Connect NIM, vLLM, and external adapters.", icon: Key },
              { title: "NemoClaw Setup: Data Grip", desc: "Configure local and remote data connectors.", icon: Database },
              { title: "NemoClaw Setup: Security", desc: "Apply administrative safety guardrails.", icon: ShieldCheck }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-10 rounded-[3rem] border-white/5 hover:border-primary/30 transition-all group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-all">
                  <item.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Setup Modules */}
      <section className="py-32 bg-white/[0.01] relative overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
               <div className="lg:w-1/2 space-y-10">
                  <h2 className="text-4xl sm:text-6xl font-display font-bold italic tracking-tight leading-none">
                     Professional <br />
                     <span className="text-primary">NemoClaw Setup</span> Modules
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed italic">
                     A successful <strong>NemoClaw Setup</strong> ensures your agents can reason at the speed of thought. 
                     We divide the configuration into manageable technical modules.
                  </p>
                  
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black shrink-0">1</div>
                        <div>
                           <h4 className="font-bold mb-1">Hardware Acceleration Check</h4>
                           <p className="text-xs text-muted-foreground">The <strong>NemoClaw Setup</strong> validates your CUDA availability and maps TensorRT-LLM binaries.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black shrink-0">2</div>
                        <div>
                           <h4 className="font-bold mb-1">Model Quantization Setup</h4>
                           <p className="text-xs text-muted-foreground">Optimize your VRAM usage by configuring 4-bit or 8-bit quantization during the <strong>NemoClaw Setup</strong>.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black shrink-0">3</div>
                        <div>
                           <h4 className="font-bold mb-1">Agent Role Mapping</h4>
                           <p className="text-xs text-muted-foreground">Define your agents' specific roles and available tools (Reasoning, Python, SQL).</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="lg:w-1/2 w-full">
                  <div className="glass-panel p-12 rounded-[4rem] border-white/5 bg-white/[0.01] relative group overflow-hidden">
                     <div className="absolute top-0 right-0 p-10 opacity-5">
                        <Wrench className="w-64 h-64" />
                     </div>
                     <div className="space-y-8 relative z-10">
                        <h4 className="text-2xl font-bold flex items-center gap-3"><Zap className="w-6 h-6 text-primary" /> Setup Summary</h4>
                        <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                           <div className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all">
                              <span className="block text-white/30 mb-2">GPU Arch</span>
                              <span className="text-white font-bold">NVIDIA Ada Lovelace</span>
                           </div>
                           <div className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all">
                              <span className="block text-white/30 mb-2">Driver</span>
                              <span className="text-white font-bold">CUDA 12.4+</span>
                           </div>
                           <div className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all">
                              <span className="block text-white/30 mb-2">Memory Path</span>
                              <span className="text-white font-bold">Unified Virtual VRAM</span>
                           </div>
                           <div className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all">
                              <span className="block text-white/30 mb-2">Backend</span>
                              <span className="text-white font-bold">vLLM Optimized</span>
                           </div>
                        </div>
                        <button className="w-full h-16 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-4 hover:scale-[0.98] transition-transform shadow-2xl">
                           Launch Configuration Manager <ArrowRight className="w-5 h-5" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Advanced Tuning Grid */}
      <section className="py-32">
         <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col items-center text-center mb-24">
               <h2 className="text-4xl sm:text-6xl font-display font-bold italic tracking-tighter mb-6">Advanced NemoClaw Setup Tuning</h2>
               <p className="text-muted-foreground text-lg max-w-2xl">Fine-tune the core engine for massive data processing and complex multi-step reasoning.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {[
                 { title: "NemoClaw Setup: KV Cache", desc: "Allocate maximum memory for 1M-token context pre-processing.", icon: Activity },
                 { title: "NemoClaw Setup: Multi-GPU", desc: "Enable peer-to-peer memory access (NVLink) for large datasets.", icon: Layers },
                 { title: "NemoClaw Setup: Guardrails", desc: "Set administrative boundaries to prevent model hallucinations.", icon: ShieldCheck }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center text-center group">
                    <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                       <item.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Setup FAQ */}
      <section className="py-32 bg-white/[0.01]">
         <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-20 justify-center">
               <HelpCircle className="w-10 h-10 text-primary" />
               <h2 className="text-5xl font-display font-bold italic">NemoClaw Setup FAQ</h2>
            </div>
            
            <div className="space-y-6">
               {[
                 {
                   q: "Can I perform a NemoClaw Setup on Windows?",
                   a: "NemoClaw Setup is natively optimized for Ubuntu 22.04 LTS and macOS 14+. For Windows, we recommend using WSL2 with the NVIDIA Container Toolkit to achieve full performance."
                 },
                 {
                   q: "How often should I audit my NemoClaw Setup?",
                   a: "We recommend a monthly audit to ensure your API keys are rotated and your GPU drivers are updated to the latest TensorRT-LLM optimized version."
                 },
                 {
                   q: "What is the most critical part of the NemoClaw Setup?",
                   a: "The most critical step is the Hardware Acceleration Check. Ensuring your CUDA drivers are correctly mapped is the foundation of high-speed AI reasoning."
                 },
                 {
                   q: "Does NemoClaw Setup include secure storage?",
                   a: "Yes. Every NemoClaw Setup automatically configures an AES-256-GCM encrypted local database for all agent-world interactions."
                 }
               ].map((faq, i) => (
                 <div key={i} className="glass-panel p-10 rounded-[3rem] border-white/5 hover:border-primary/30 transition-all group">
                    <h5 className="font-bold text-xl mb-4 text-white group-hover:text-primary transition-colors flex items-center gap-4">
                       <CheckCircle2 className="w-5 h-5 text-primary" /> {faq.q}
                    </h5>
                    <p className="text-muted-foreground leading-relaxed text-sm">{faq.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <Footer />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "NemoClaw Setup Guide",
          "applicationCategory": "DeveloperApplication",
          "description": "Professional setup and configuration guide for the NemoClaw AI Agent platform on NVIDIA hardware.",
          "operatingSystem": "Linux, macOS",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }
        `}
      </script>
    </div>
  );
};

export default NemoClawSetup;
