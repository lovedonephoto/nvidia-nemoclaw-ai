import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Terminal, Shield, Zap, Code2, Globe, Lock, Workflow, Cpu, Rocket, ChevronRight, HelpCircle } from "lucide-react";

const OpenShell = () => {
  useEffect(() => {
    document.title = "NemoClaw OpenShell | Secure AI-Augmented Terminal Engine";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Experience NemoClaw OpenShell: The ultimate AI-powered system terminal for NVIDIA hardware. Context-aware OS commands, local AI reasoning, and secure automated task execution.");
    }

    let link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", "https://nemoclawaiapp.com/openshell");
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', 'https://nemoclawaiapp.com/openshell');
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-white/[0.01]">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-10"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">AI OS Integration Layer</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[7rem] font-display font-bold mb-10 leading-[0.85] tracking-tighter italic"
          >
            NemoClaw <br />
            <span className="text-gradient-primary">OpenShell</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xl max-w-3xl mx-auto mb-16 font-light leading-relaxed"
          >
            Bridge the gap between your OS and <strong>NVIDIA Nemotron 3</strong>. 
            The <strong>NemoClaw OpenShell</strong> is a secure, context-aware command engine that understands your system 
            architecture and executes <strong>complex agentic missions</strong> locally.
          </motion.p>
        </div>
      </section>

      {/* Terminal Visual Deep Dive */}
      <section className="pb-32 px-4">
         <div className="container mx-auto">
            <div className="max-w-6xl mx-auto glass-panel p-2 rounded-[3.5rem] bg-white/[0.03] border-white/10 shadow-[0_0_100px_-20px_rgba(118,230,0,0.1)]">
               <div className="bg-[#050505] rounded-[3.3rem] overflow-hidden border border-white/5">
                  <div className="flex items-center justify-between px-10 py-6 border-b border-white/5">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                     </div>
                     <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest font-black">NemoClaw OpenShell --kernel-attach</span>
                     <div className="w-10" />
                  </div>
                  
                  <div className="p-12 sm:p-20 font-mono text-sm sm:text-base selection:bg-primary selection:text-black">
                     <div className="space-y-6">
                        <div className="flex items-center gap-4 text-white/40 italic">
                           # Initializing system context...
                        </div>
                        <div className="flex gap-4">
                           <span className="text-primary font-black">$</span>
                           <span className="text-white font-bold animate-pulse">openshell analyze "Check H100 GPU temperatures and optimize for training"</span>
                        </div>
                        <div className="pl-6 space-y-3">
                           <p className="text-green-400 flex items-center gap-3"><ChevronRight className="w-3 h-3" /> System Architecture: x86_64 Linux</p>
                           <p className="text-green-400 flex items-center gap-3"><ChevronRight className="w-3 h-3" /> GPU Detected: 8x NVIDIA H100 80GB</p>
                           <p className="text-green-400 flex items-center gap-3"><ChevronRight className="w-3 h-3" /> Current Load: 12% Avg</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 mt-10">
                           <p className="text-primary font-bold mb-4">Proposed Logic (Nemotron-3 Super):</p>
                           <p className="text-white/80 leading-relaxed mb-6">"I will adjust the persistence-mode on all nodes and set the fan speed to 80% to ensure thermal stability during the 1M-token context pre-processing."</p>
                           <button className="px-6 py-2 bg-primary text-black font-black text-xs rounded-xl hover:scale-105 transition-transform uppercase tracking-widest cursor-pointer">Execute Security-Cleared Command</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Feature Grid: OpenShell Capabilities */}
      <section className="py-32 relative overflow-hidden bg-white/[0.01]">
         <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-24">
               <h2 className="text-4xl sm:text-6xl font-display font-bold italic mb-6">OpenShell Engine Capabilities</h2>
               <p className="text-muted-foreground text-lg">Next-generation system orchestration powered by local AI intelligence.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 {
                   title: "Kernel Context",
                   desc: "Direct integration with OS hardware layers ensures the AI understands CPU, GPU, and RAM states before execution.",
                   icon: Cpu
                 },
                 {
                   title: "Command Sandboxing",
                   desc: "Every AI-generated command is parsed through a strict local security sandbox before reaching your shell.",
                   icon: Lock
                 },
                 {
                   title: "Real-time Web Grip",
                   desc: "Extract live data from any URL through the terminal and feed it directly into your local LLM context.",
                   icon: Globe
                 },
                 {
                   title: "Multi-modal Command",
                   desc: "Attach images or docs to OpenShell. It 'sees' the file content and performs OS actions based on what it finds.",
                   icon: Code2
                 },
                 {
                   title: "Agentic Loop",
                   desc: "Set high-level goals. OpenShell will write scripts, debug them, and keep iterating until the OS task is complete.",
                   icon: Workflow
                 },
                 {
                   title: "Audit Visibility",
                   desc: "Every single keystroke and model decision is logged in a secure, immutable log file for enterprise compliance.",
                   icon: Shield
                 }
               ].map((item, i) => (
                 <div key={i} className="glass-panel p-10 rounded-[3rem] border-white/5 hover:bg-white/[0.03] transition-all group">
                    <div className="p-4 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-8 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                       <item.icon className="w-full h-full text-white group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* High-Performance Architecture Summary */}
      <section className="py-32 relative">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="glass-panel p-16 rounded-[4rem] bg-primary/5 border-primary/20 relative overflow-hidden group">
               <div className="absolute -top-24 -right-24 p-24 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
               <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                     <h2 className="text-4xl font-display font-bold italic mb-8">System-Level AI Reasoning</h2>
                     <p className="text-muted-foreground leading-relaxed mb-8">
                        NemoClaw OpenShell doesn't just "talk" to you. It executes. By leveraging 
                        the ultra-low latency of <strong>NVIDIA TensorRT-LLM</strong>, it can parse 
                        system logs and propose complex fixes in milliseconds.
                     </p>
                     <div className="flex gap-8">
                        <div>
                           <div className="text-3xl font-display font-bold text-white mb-1">0.8ms</div>
                           <div className="text-[10px] uppercase font-black text-primary tracking-widest">Internal Latency</div>
                        </div>
                        <div>
                           <div className="text-3xl font-display font-bold text-white mb-1">99.9%</div>
                           <div className="text-[10px] uppercase font-black text-primary tracking-widest">Execution Safety</div>
                        </div>
                     </div>
                  </div>
                  <div className="space-y-6">
                     <h4 className="text-lg font-bold">Supported Integrations:</h4>
                     <div className="flex flex-wrap gap-3">
                        {["Ubuntu Bash", "ZSH", "PowerShell Core", "Docker Containers", "Kubernetes", "NVIDIA NIM"].map((tag, i) => (
                          <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-mono text-white/60">{tag}</span>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Specific OpenShell FAQ */}
      <section className="py-32 bg-white/[0.01]">
         <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-20 justify-center">
               <HelpCircle className="w-10 h-10 text-primary" />
               <h2 className="text-5xl font-display font-bold italic">NemoClaw OpenShell FAQ</h2>
            </div>
            
            <div className="space-y-6">
               {[
                 {
                   q: "How does NemoClaw OpenShell interact with my OS?",
                   a: "NemoClaw OpenShell uses the core OS Connector, allowing the AI engine to execute security-cleared shell commands safely."
                 },
                 {
                   q: "Is NemoClaw OpenShell safe to use on server clusters?",
                   a: "Absolute safety is our priority. NemoClaw OpenShell uses a Multi-Layered Sandbox for all AI-generated commands."
                 },
                 {
                   q: "Can OpenShell fix system errors automatically?",
                   a: "Yes. Using the 'Self-Heal' mode, OpenShell can monitor logs, identify common configuration errors in NVIDIA drivers or Docker, and propose/execute patches to resolve them."
                 },
                 {
                   q: "Does OpenShell require an NVIDIA GPU?",
                   a: "While it can run in CPU-only mode, it is heavily optimized for NVIDIA TensorRT-LLM. Running it on a Mac (M-series) or local RTX GPU provides the lowest possible reasoning latency."
                 }
               ].map((faq, i) => (
                 <div key={i} className="glass-panel p-10 rounded-[2.5rem] border-white/5 hover:border-primary/20 transition-all group">
                    <h5 className="font-bold text-xl mb-4 text-white group-hover:text-primary transition-colors flex items-center gap-4">
                       <Zap className="w-5 h-5 text-primary" /> {faq.q}
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
          "name": "NemoClaw OpenShell",
          "operatingSystem": "Linux, macOS, Windows",
          "applicationCategory": "SystemApplication",
          "description": "NemoClaw OpenShell is an AI-augmented terminal that provides context-aware command synthesis and OS-level reasoning for NVIDIA systems.",
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

export default OpenShell;
