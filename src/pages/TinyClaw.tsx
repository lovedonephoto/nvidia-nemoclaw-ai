import { motion } from "framer-motion";
import { useEffect } from "react";
import { Cpu, Zap, CheckCircle2, Terminal, ArrowLeft, Star, ArrowRight, Box, MessageSquare, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const TinyClaw = () => {
  useEffect(() => {
    const pageTitle = "TinyClaw AI | install Tiny Claw Github, Skills, Docker";
    const pageDesc = "Install TinyClaw AI agent. Get the official Tiny Claw Github code, specialized AI skills, and Docker setup guide for embedded nano-agent deployment.";
    
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", pageDesc);
    }
    const link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", "https://nemoclawaiapp.com/tinyclaw");
    }
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: "Nano Footprint", description: "Operates in environments with as little as 512MB of RAM." },
    { title: "MCU Optimized", description: "Native support for ARM Cortex-M and RISC-V architectures." },
    { title: "Battery Efficient", description: "Ultra-low power sleep modes for long-running IoT devices." },
    { title: "Local Intelligence", description: "Full on-device reasoning without any cloud connectivity." }
  ];

  const faqs = [
    {
      q: "What is TinyClaw?",
      a: "TinyClaw is our nano-agent designed for the edge of the edge. It's meant for IoT devices, wearables, and embedded hardware where resources are extremely tight."
    },
    {
      q: "Can I install TinyClaw on a Raspberry Pi?",
      a: "Yes, you can install TinyClaw on ARM systems including Raspberry Pi, and it requires less than 512MB of RAM to function."
    },
    {
      q: "Where is the TinyClaw Github repository?",
      a: "The official TinyClaw Github hosts all the nano-logic pruning algorithms and MCU-compatible C++ cores."
    },
    {
      q: "Which specialized Skills does TinyClaw have?",
      a: "TinyClaw skills include Sensor Fusion for real-time IMU data, Voice Wake-up, and highly compressed Nano-Logic decision trees."
    },
    {
      q: "Does TinyClaw support Docker?",
      a: "Yes, we provide TinyClaw Docker images (including the 'nano' tag) for simulated embedded testing and CI/CD pipelines."
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "TinyClaw AI Agent",
          "applicationCategory": "AI Software",
          "description": "Nano-agent for embedded systems and ultra-low memory environments.",
          "operatingSystem": "RTOS, Linux, Android",
          "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          }
        })}
      </script>

      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 filter grayscale brightness-50"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-transparent to-background" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link to="/ai-agents" className="inline-flex items-center gap-2 text-primary text-xs font-bold mb-12 hover:underline tracking-widest uppercase italic bg-primary/5 px-4 py-2 rounded-full border border-primary/20">
            <ArrowLeft className="w-3 h-3" /> Back to Ecosystem
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/20 mb-8 backdrop-blur-sm shadow-lg shadow-primary/10">
              <Zap className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Community Edition Setup Kit</span>
            </div>

            <h2 className="text-6xl md:text-9xl font-display font-black mb-4 leading-[0.85] tracking-tighter text-primary filter drop-shadow-[0_0_30px_rgba(var(--primary),0.3)]">
              TinyClaw
            </h2>
            
            <h1 className="text-2xl md:text-5xl font-bold mb-10 text-white leading-tight max-w-4xl tracking-tight">
              TinyClaw AI | <span className="italic opacity-80">install Tiny Claw</span> Github, Skills, Docker
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed italic">
              Professional automation scripts, security templates, and hardened configurations to deploy <strong>TinyClaw AI</strong> agents on <strong>Embedded</strong>, IoT, and Edge infrastructure.
            </p>

            <div className="flex flex-col items-center gap-4 mb-16">
               <div className="flex -space-x-4 mb-2">
                  {[41,42,43,44,45].map((i) => (
                     <div key={i} className={`w-12 h-12 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center text-[10px] font-bold overflow-hidden`}>
                        <img 
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}&backgroundColor=27272a`} 
                          alt="Dev Avatar" 
                          className="w-full h-full object-cover grayscale"
                        />
                     </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-black text-black">+500</div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="flex gap-0.5">
                     {[1,2,3,4,5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                     ))}
                  </div>
                  <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
                     Trusted by <strong className="text-white">500+</strong> developers world-wide
                  </span>
               </div>
            </div>

            <button 
               onClick={() => window.location.href = '/#install-nemoclaw'}
               className="h-20 px-12 bg-primary text-black font-black text-xl rounded-full flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-primary/40 group active:scale-95"
            >
               Get Started
               <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 border-y border-border/40 relative">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {features.map((f, i) => (
                  <div key={i} className="glass-panel p-10 rounded-[3rem] border-border/40 group hover:border-primary/20 transition-all">
                     <CheckCircle2 className="w-8 h-8 text-primary mb-6" />
                     <h3 className="font-bold text-xl mb-4 italic">{f.title}</h3>
                     <p className="text-sm text-muted-foreground leading-relaxed italic">{f.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* install TinyClaw */}
      <section className="py-24 relative bg-foreground/[0.01]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl sm:text-6xl font-display font-black mb-12 italic tracking-tighter">install TinyClaw</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed italic">
                TinyClaw is designed for speed in small spaces. Follow our <strong>install TinyClaw</strong> guide for embedded magic.
              </p>
              <div className="space-y-4">
                {[
                  "Nano-RAM Optimization (512MB)",
                  "MCU Cortex-M Compatible",
                  "Cross-compile with GCC/Clang",
                  "Minimal binary size (<10MB)"
                ].map((step, k) => (
                  <div key={k} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel p-8 rounded-[40px] border-border/40 bg-zinc-900/50 font-mono text-sm leading-relaxed">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
              <div className="text-primary/40 mb-2"># Install TinyClaw Binary</div>
              <div className="text-white mb-6">curl -sSL https://get.nemoclaw.ai/install | bash -s -- agent=tinyclaw</div>
              <div className="text-primary/40 mb-2"># Verify Run</div>
              <div className="text-white">tinyclaw run --profile battery-saver</div>
            </div>
          </div>
        </div>
      </section>

      {/* TinyClaw Github */}
      <section className="py-24 relative border-y border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="lg:w-1/2">
               <h2 className="text-4xl sm:text-6xl font-display font-black mb-6 italic tracking-tighter">TinyClaw Github</h2>
               <p className="text-muted-foreground text-lg leading-relaxed italic mb-8">
                  The **TinyClaw Github** is home to our embedded AI research. Help us shrink intelligence further.
               </p>
               <div className="flex gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-black text-white">2.1k</div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Stars</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-white">156</div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Forks</div>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="glass-panel p-10 rounded-[3rem] border-white/5 bg-white/[0.02] relative group overflow-hidden text-center">
                  <Terminal className="w-16 h-16 text-primary mx-auto mb-6 opacity-20" />
                  <h4 className="text-xl font-bold mb-6">Embedded Library</h4>
                  <button className="w-full h-16 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-4 hover:scale-[0.98] transition-transform shadow-2xl">
                     Visit Github <ArrowRight className="w-5 h-5" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* TinyClaw Skills */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl sm:text-6xl font-display font-black mb-12 italic tracking-tighter text-center">TinyClaw Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sensor Fusion", desc: "Integrate IMU, Temp, and Light sensors in one logic stream.", icon: Search },
              { title: "Voice Wake-up", desc: "Always-on local voice trigger with zero battery drain.", icon: MessageSquare },
              { title: "Nano-Logic", description: "Efficient decision tree pruning for tiny CPUs.", icon: Cpu }
            ].map((skill, sIdx) => (
              <div key={sIdx} className="glass-panel p-10 rounded-[3rem] border-border/40 hover:bg-white/[0.01] transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-all">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-2xl font-bold mb-4 italic">{skill.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed italic">{skill.desc || skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TinyClaw Docker */}
      <section className="py-24 relative bg-foreground/[0.01] border-t border-border/40">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl sm:text-6xl font-display font-black mb-8 italic tracking-tighter">TinyClaw Docker</h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-3xl mx-auto italic">
            Use **TinyClaw Docker** for simulated embedded testing and CI/CD pipelines.
          </p>
          <div className="glass-panel p-10 rounded-[40px] border-border/40 bg-[#050505] text-left">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3"><Box className="w-6 h-6 text-primary" /> Docker Compose Example</h4>
            <div className="font-mono text-sm leading-relaxed space-y-2">
              <div className="text-primary/60">services:</div>
              <div className="pl-4 text-primary/60">tiny-gate:</div>
              <div className="pl-8 text-primary/60 italic">image: <span className="text-white">nemoclaw/tinyclaw:nano</span></div>
              <div className="pl-8 text-primary/60 italic">environment:</div>
              <div className="pl-12 text-primary/60 italic">- <span className="text-white">MEM_LIMIT=512MB</span></div>
              <div className="pl-12 text-primary/60 italic">- <span className="text-white">HARDWARE=arm64</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-16 text-center italic tracking-tighter">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-panel p-10 rounded-[3rem] border-border/40 hover:bg-white/[0.02] transition-all">
                <h4 className="font-bold mb-4 text-xl text-primary flex gap-4">
                   <div className="w-6 h-6 rounded-full border border-primary/20 flex items-center justify-center text-[10px] mt-1 shrink-0">?</div>
                   {faq.q}
                </h4>
                <p className="text-muted-foreground italic leading-relaxed pl-10 border-l border-white/5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TinyClaw;
