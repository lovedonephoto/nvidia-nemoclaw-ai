import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Terminal, Download, ShieldCheck, Cpu, CheckCircle2, AlertCircle, Copy, Laptop, Server, HelpCircle } from "lucide-react";

const InstallNemoClaw = () => {
  useEffect(() => {
    document.title = "Install NemoClaw | NVIDIA AI Agent Setup Guide";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Step-by-step guide to install NemoClaw. Automated setup for NVIDIA GPUs, Mac Apple Silicon, and enterprise Linux servers. Get started with AI reasoning agents in 5 minutes.");
    }

    let link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", "https://nemoclawaiapp.com/install-nemoclaw");
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', 'https://nemoclawaiapp.com/install-nemoclaw');
      document.head.appendChild(link);
    }
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Enterprise Setup Guide</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight tracking-tighter"
          >
            Install <span className="text-gradient-primary">NemoClaw</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12"
          >
            Follow our professional guide to <strong>Install NemoClaw</strong> with peak optimization. 
            Deploy high-performance autonomous AI agents on your own hardware with zero friction.
          </motion.p>
        </div>
      </section>

      {/* Quick Launch - One Command */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-panel p-1 rounded-[2.5rem] bg-white/[0.02] border-white/5 shadow-2xl overflow-hidden group">
            <div className="bg-black/40 p-10 sm:p-16 rounded-[2.3rem]">
              <div className="flex items-center justify-between mb-8 text-sm font-mono text-white/40">
                <span className="flex items-center gap-2 font-black uppercase text-[10px] tracking-[0.2em] text-primary"><Terminal className="w-3 h-3" /> How to Install NemoClaw</span>
                <span>v1.4.2-stable</span>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 relative group/cmd border border-white/10 hover:border-primary/30 transition-all">
                <code className="text-primary text-sm sm:text-lg block break-all pr-12 font-mono">
                  curl -sSL https://nemoclawaiapp.com/onboard.sh | bash
                </code>
                <button 
                  onClick={() => copyToClipboard('curl -sSL https://nemoclawaiapp.com/onboard.sh | bash')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-xl hover:bg-primary hover:text-black transition-all"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <p className="mt-8 text-xs text-white/30 text-center uppercase font-black tracking-widest">The fastest way to <strong>Install NemoClaw</strong> on Ubuntu 22.04+ or macOS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites Grid */}
      <section className="py-24 bg-white/[0.01]">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl font-display font-bold italic mb-4 tracking-tight">Deployment Hardware Matrix</h2>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          <div className="glass-panel p-10 rounded-[2rem] border-white/5 relative overflow-hidden group">
            <Laptop className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Mac (Apple Silicon)</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
               <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> macOS 14 (Sonoma) or newer</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> M1/M2/M3/M4 (Max or Ultra recommended)</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> Minimum 32GB Unified Memory</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> 50GB available Disk Space</li>
            </ul>
          </div>
          <div className="glass-panel p-10 rounded-[2rem] border-white/5 relative overflow-hidden group">
            <Server className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Enterprise Linux</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
               <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> Ubuntu 22.04 LTS (Jammy Jellyfish)</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> NVIDIA Driver 535+ & CUDA 12.x</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> Docker + NVIDIA Container Toolkit</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary" /> Minimum 24GB VRAM (RTX 3090/4090/H100)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Optimization Profiles Selection */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold italic tracking-tight mb-4">Select Your Optimization Profile</h2>
            <p className="text-muted-foreground">The NemoClaw installer prompts you to select a profile to automatically tune your GPU kernel parameters.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Deep Research",
                desc: "Optimized for long-context (1M tokens) reasoning sessions with Nemotron-3 Super.",
                features: ["Maximized KV Cache", "Lower Latency", "TensorRT-LLM Enabled"]
              },
              {
                title: "Agentic Trading",
                desc: "High-frequency data processing and immediate tool execution triggers.",
                features: ["Flash Attention 2", "4-bit Quantization", "Sub-20ms Response"]
              },
              {
                title: "Enterprise Support",
                desc: "Balanced profile for multi-concurrency agent workflows and internal RAG.",
                features: ["Memory Pooling", "Token Streaming", "Admin Safety Guardrails"]
              }
            ].map((profile, i) => (
              <div key={i} className="glass-panel p-10 rounded-[2.5rem] border-white/5 hover:border-primary/20 transition-all flex flex-col items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center font-bold text-primary group-hover:scale-110 transition-transform italic">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold">{profile.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{profile.desc}</p>
                <div className="w-full h-px bg-white/5" />
                <ul className="space-y-3">
                  {profile.features.map((f, j) => (
                    <li key={j} className="text-[11px] uppercase font-black tracking-widest text-primary/60 flex items-center gap-2">
                       <CheckCircle2 className="w-3 h-3 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment Configuration Section */}
      <section className="py-24 bg-white/[0.01]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold italic">NemoClaw Environment Variables Configuration</h2>
              <p className="text-muted-foreground leading-relaxed">
                Post-installation, our setup kit generates a <code>.env.hardened</code> file. You will need to configure your model paths and API access keys for <strong>NVIDIA NIM</strong> or local <strong>vLLM</strong> backends.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 glass-panel rounded-2xl border-white/5">
                   <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                   <div>
                     <h4 className="font-bold mb-1">Encrypted Local Storage</h4>
                     <p className="text-xs text-muted-foreground">All agent conversation logs and tool outputs are stored in an encrypted local database (SQLite/PostgreSQL).</p>
                   </div>
                </div>
                <div className="flex items-start gap-4 p-6 glass-panel rounded-2xl border-white/5">
                   <Cpu className="w-6 h-6 text-primary shrink-0" />
                   <div>
                     <h4 className="font-bold mb-1">Unified GPU Bridge</h4>
                     <p className="text-xs text-muted-foreground">The setup automatically bridges multiple GPUs for distributed inference of large models like Nemotron-4.</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="bg-black/60 rounded-[2rem] border border-white/10 p-8 font-mono text-sm leading-relaxed overflow-hidden relative shadow-2xl">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Terminal className="w-48 h-48" />
               </div>
               <div className="flex gap-2 mb-6">
                 <div className="w-3 h-3 rounded-full bg-red-500/50" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                 <div className="w-3 h-3 rounded-full bg-green-500/50" />
               </div>
               <div className="space-y-2 text-white/70 relative z-10">
                 <p className="text-white/30 italic"># NemoClaw Core Configuration</p>
                 <p><span className="text-primary">NEMOCLAW_OPTIMIZATION_LEVEL</span>=MAX</p>
                 <p><span className="text-primary">MODEL_BACKEND</span>=vllm</p>
                 <p><span className="text-primary">NVIDIA_NIM_KEY</span>=nvapi-XXXX...</p>
                 <p><span className="text-primary">ENCRYPTION_KEY</span>=AES-256-GCM</p>
                 <p><span className="text-primary">DATA_AUTONOMY</span>=STRICT_LOCAL</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sovereignty & Log Auditing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <h2 className="text-4xl font-display font-bold italic mb-8 tracking-tight text-white">Advanced Data Sovereignty & Log Auditing</h2>
           <p className="text-muted-foreground text-lg mb-16 leading-relaxed">
             During the <strong>NemoClaw install</strong>, all network egress is monitored. Your agents function in a "Zero-Trust" environment, ensuring that mission-critical data remains isolated within your infrastructure.
           </p>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              <div className="p-10 glass-panel rounded-[2rem] border-white/5">
                 <h4 className="text-xl font-bold mb-4 flex items-center gap-3"><AlertCircle className="w-5 h-5 text-primary" /> Audit Logs</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed">The installer configures <code>syslog</code> and <code>fluentd</code> containers to capture every single decision made by your AI agents for legal and security compliance.</p>
              </div>
              <div className="p-10 glass-panel rounded-[2rem] border-white/5">
                 <h4 className="text-xl font-bold mb-4 flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Local Inference</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed">By choosing local execution for <strong>Nemotron 3 Super</strong>, you eliminate the risk of the data provider having access to your prompts or extracted intelligence.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Step by Step Detail */}
      <section className="py-24 relative overflow-hidden bg-white/[0.01]">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-4xl font-display font-bold mb-16 text-center">Step-by-Step Installation</h2>
           
           <div className="space-y-12 relative before:absolute before:left-[1.5rem] before:top-0 before:bottom-0 before:w-px before:bg-white/10">
              {[
                {
                   title: "Environment Preparation",
                   desc: "The installer checks for dependencies like Git, Docker, and Python 3.10+. On Mac, it will prompt for Rosetta if necessary.",
                   icon: 1
                },
                {
                   title: "GPU Driver Mapping",
                   desc: "NemoClaw automatically detects your NVIDIA hardware and installs the optimized TensorRT-LLM drivers for the Nemotron 3 model family.",
                   icon: 2
                },
                {
                   title: "Core Component Pull",
                   desc: "The setup pulls the latest NemoClaw Agent containers, including the Grip data engine and Reasoning microservice.",
                   icon: 3
                },
                {
                   title: "Hardened Configuration",
                   desc: "We generate your local encryption keys and set up a secure .env architecture for your API keys and local data stores.",
                   icon: 4
                }
              ].map((step, i) => (
                <div key={i} className="relative pl-16 group">
                   <div className="absolute left-0 top-0 w-12 h-12 rounded-full border border-white/20 bg-background flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-black transition-all">
                      {step.icon}
                   </div>
                   <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                   <p className="text-muted-foreground leading-relaxed text-sm italic">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Troubleshooting FAQ */}
      <section className="py-24 bg-white/[0.01]">
         <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-16 justify-center">
               <HelpCircle className="w-8 h-8 text-primary" />
               <h2 className="text-4xl font-display font-bold">Install NemoClaw FAQ</h2>
            </div>
            
            <div className="grid gap-6">
               {[
                 {
                   q: "Install NemoClaw script fails on Mac M1 'No GPU found'?",
                   a: "Ensure you have macOS 14.0+ installed. To Install NemoClaw correctly on Mac, you must grant terminal access to system settings."
                 },
                 {
                   q: "How do I update NemoClaw to the latest version?",
                   a: "Simply re-run the onboard command. It will detect the existing installation and perform a non-destructive update of the core binaries while preserving your local config."
                 },
                 {
                   q: "Does the installer include the actual AI models?",
                   a: "The installer prepares the runtime. Models like Nemotron-Super are pulled upon the first execution through our integrated download manager to ensure integrity."
                 },
                 {
                   q: "Requirement for CUDA 12.x specifically?",
                   a: "Yes, NemoClaw 1.4+ is optimized for the latest TensorRT acceleration which requires CUDA 12.1 or higher for optimal performance on H100 and RTX 40-series."
                 }
               ].map((faq, i) => (
                 <div key={i} className="glass-panel p-8 rounded-2xl border-white/5 hover:border-white/20 transition-all">
                    <h5 className="font-bold text-lg mb-4 flex items-center gap-3 text-primary">
                       <span className="w-2 h-2 rounded-full bg-primary" /> {faq.q}
                    </h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* JSON-LD Schema (Invisible) */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Install NemoClaw AI Agent Platform",
          "description": "Step-by-step guide to installing the NVIDIA-accelerated NemoClaw AI platform on Mac and Linux.",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Run Onboard Command",
              "text": "Open your terminal and paste: curl -sSL https://nemoclawaiapp.com/onboard.sh | bash"
            },
            {
              "@type": "HowToStep",
              "name": "Environment Validation",
              "text": "The script will validate your GPU drivers and system dependencies."
            },
            {
              "@type": "HowToStep",
              "name": "Initial Configuration",
              "text": "Follow the interactive prompts to set up your primary agent roles and security keys."
            }
          ],
          "totalTime": "PT5M"
        }
        `}
      </script>

      <Footer />
    </div>
  );
};

export default InstallNemoClaw;
