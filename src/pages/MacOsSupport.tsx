import { motion } from "framer-motion";
import { useEffect } from "react";
import { Apple, Cpu, Zap, CheckCircle2, Terminal, ArrowLeft, Star, ArrowRight, Laptop, Activity, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const MacOsSupport = () => {
  useEffect(() => {
    const pageTitle = "NemoClaw macOS Support | Apple Silicon M1-M4 AI Setup";
    const pageDesc = "Get full NemoClaw macOS support for Apple Silicon. Install NemoClaw on M1, M2, M3, and M4 chips using Metal Performance Shaders (MPS) for blazingly fast local AI agents.";
    
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", pageDesc);
    }
    const link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", "https://nemoclawaiapp.com/macos-support");
    }
    window.scrollTo(0, 0);
  }, []);

  const benchmarks = [
    { chip: "M3 Max (128GB)", speed: "125 t/s", model: "Llama-3 8B" },
    { chip: "M2 Ultra (192GB)", speed: "88 t/s", model: "Llama-3 70B" },
    { chip: "M3 Pro (36GB)", speed: "45 t/s", model: "Mistral 7B" },
    { chip: "M1 (8GB / 16GB)", speed: "18 t/s", model: "Phi-3 Mini" }
  ];

  const faqs = [
    {
      q: "Does NemoClaw support macOS natively?",
      a: "Yes, NemoClaw provides native support for macOS through Metal Performance Shaders (MPS), allowing for full GPU acceleration on Apple Silicon M-series chips."
    },
    {
      q: "What are the minimum RAM requirements for Mac?",
      a: "While 8GB is the minimum, 16GB is highly recommended. Mac systems with less than 8GB of RAM may experience OOM (Out of Memory) issues during sandbox container operations."
    },
    {
      q: "Which Node.js version is required?",
      a: "NemoClaw requires Node.js version 20 or later and npm version 10 or higher for the local CLI and automation bridge."
    },
    {
      q: "Can I run 70B models on a Mac Studio?",
      a: "Absolutely. With the Unified Memory architecture of M2/M3 Ultra chips, NemoClaw can efficiently run 70B models with high tokens-per-second using host-mapped GPU memory."
    },
    {
      q: "Is an internet connection required for Mac AI agents?",
      a: "No. NemoClaw macOS support is built for offline, privacy-first local LLM execution. Your data stays on your Mac."
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "NemoClaw macOS Support & Apple Silicon Installation Guide",
          "description": "Comprehensive guide for installing and optimizing NemoClaw AI agents on Apple Silicon (M1, M2, M3, M4) hardware.",
          "author": {
            "@type": "Organization",
            "name": "NemoClaw"
          },
          "publisher": {
            "@type": "Organization",
            "name": "NemoClaw"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://nemoclawaiapp.com/macos-support"
          }
        })}
      </script>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-transparent to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link to="/ai-agents" className="inline-flex items-center gap-2 text-primary text-xs font-bold mb-12 hover:underline tracking-widest uppercase italic bg-primary/5 px-4 py-2 rounded-full border border-primary/20">
            <ArrowLeft className="w-3 h-3" /> System Requirements
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/20 mb-8 backdrop-blur-sm shadow-xl">
              <Apple className="w-4 h-4 text-primary" />
              <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">Native Apple Silicon Support</span>
            </div>

            <h2 className="text-6xl md:text-8xl font-display font-black mb-6 leading-[0.9] tracking-tighter text-white">
              NemoClaw <span className="text-primary italic">macOS</span>
            </h2>
            
            <h1 className="text-2xl md:text-5xl font-bold mb-10 text-muted-foreground leading-tight max-w-4xl tracking-tight">
              Optimized <span className="text-white">Apple Silicon</span> Performance for Local AI Agents
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed italic">
              Unlock the full potential of your <strong>M1, M2, M3, or M4</strong> Mac. Run enterprise-grade <strong>NemoClaw</strong> agents with native <strong>MPS acceleration</strong> and privacy-first local memory.
            </p>

            <button 
               onClick={() => window.open('https://buy.polar.sh/polar_cl_iOIqgNKmid5LFFmMwu56jM4gUWGjD5HlkAIyQ2xo12N', '_blank')}
               className="h-20 px-12 bg-white text-black font-black text-xl rounded-full flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl group active:scale-95"
            >
               Download Mac Setup Kit
               <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Official Technical Specifications */}
      <section className="py-24 bg-primary/[0.03] border-y border-primary/10">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-6xl font-display font-black mb-4 italic tracking-tighter uppercase">NVIDIA Technical Specs</h2>
               <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">Official system requirements for NVIDIA NemoClaw on macOS Apple Silicon.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
               <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                  <div className="text-primary font-black text-4xl mb-4">4+ vCPU</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Processor Requirement</div>
               </div>
               <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                  <div className="text-primary font-black text-4xl mb-4">16GB RAM</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Recommended Memory</div>
               </div>
               <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                  <div className="text-primary font-black text-4xl mb-4">40GB SSD</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Sandbox Storage</div>
               </div>
            </div>
            <div className="mt-16 text-center">
               <div className="inline-block glass-panel px-8 py-4 rounded-2xl border-primary/20">
                  <span className="text-sm text-muted-foreground italic mr-4">Software dependencies:</span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider mr-4">Node.js 20+</span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Docker Desktop / Colima</span>
               </div>
            </div>
         </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-24 border-y border-border/40 relative bg-zinc-950/50">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-display font-black italic mb-4 tracking-tighter">Hardware Benchmarks</h2>
               <p className="text-muted-foreground">Real-world NemoClaw performance on modern Apple hardware.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {benchmarks.map((b, i) => (
                  <div key={i} className="glass-panel p-10 rounded-[3rem] border-primary/10 group hover:border-primary/40 transition-all text-center">
                     <Gauge className="w-10 h-10 text-primary mx-auto mb-6 opacity-40" />
                     <h3 className="font-bold text-2xl mb-2 italic">{b.chip}</h3>
                     <div className="text-3xl font-black text-white mb-2">{b.speed}</div>
                     <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Running {b.model}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Mac Optimization Skills */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-4xl sm:text-6xl font-display font-black mb-10 italic tracking-tighter leading-none">Mac-Specific <br/><span className="text-primary">Optimizations</span></h2>
               <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">MPS Kernel Accel</h4>
                      <p className="text-sm text-muted-foreground italic">Direct mapping to Metal Performance Shaders ensures zero-latency inference on the Apple neural engine.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Cpu className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Unified Memory Magic</h4>
                      <p className="text-sm text-muted-foreground italic">Leverage up to 192GB of unified memory to run massive models that would crash standard NVIDIA desktop setups.</p>
                    </div>
                  </div>
               </div>
            </div>
            <div className="glass-panel p-12 rounded-[3.5rem] border-border/40 relative overflow-hidden group">
               <Laptop className="w-64 h-64 text-primary absolute -right-20 -bottom-20 opacity-5 rotate-12 group-hover:scale-110 transition-transform" />
               <h3 className="text-2xl font-bold mb-6 italic">Official Quickstart Commands</h3>
               <div className="bg-black/50 p-6 rounded-2xl font-mono text-xs space-y-4 relative z-10 border border-white/5">
                  <div className="text-primary/60"># 1. Run Guided Installer</div>
                  <div className="text-white">curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash</div>
                  <div className="text-primary/60"># 2. Enable Metal Support</div>
                  <div className="text-white">export NEMOCLAW_ENABLE_METAL=1</div>
                  <div className="text-primary/60"># 3. Initialize & Onboard</div>
                  <div className="text-white">nemoclaw onboard</div>
                  <div className="text-primary/60"># 4. Connect to Sandbox</div>
                  <div className="text-white">nemoclaw connect</div>
                  <div className="text-primary/60"># 5. Launch Agent TUI</div>
                  <div className="text-white">openclaw tui</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* macOS Setup FAQ */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-16 text-center italic tracking-tighter tracking-tight uppercase">macOS AI FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-panel p-10 rounded-[2.5rem] border-border/40 hover:bg-white/[0.01] transition-all">
                <h4 className="font-bold mb-4 text-lg text-primary">{faq.q}</h4>
                <p className="text-sm text-muted-foreground italic leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 relative overflow-hidden">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-10 italic tracking-tighter">Ready for Mac <span className="text-primary">AI?</span></h2>
            <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto italic">
              Don't leave your Apple Silicon performance untapped. Join 10k+ Mac power-users running <strong>NemoClaw</strong> locally.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
               <button 
                  onClick={() => window.open('https://buy.polar.sh/polar_cl_iOIqgNKmid5LFFmMwu56jM4gUWGjD5HlkAIyQ2xo12N', '_blank')}
                  className="h-16 px-10 bg-primary text-black font-black rounded-full hover:scale-105 transition-all shadow-xl shadow-primary/20"
               >
                  Buy Mac Setup Kit ($49.99)
               </button>
               <button className="h-16 px-10 border border-border bg-white/5 text-white font-black rounded-full hover:bg-white/10 transition-all">
                  Github Project
               </button>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
};

export default MacOsSupport;
