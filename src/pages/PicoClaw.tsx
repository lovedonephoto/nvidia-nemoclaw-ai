import { motion } from "framer-motion";
import { useEffect } from "react";
import { Zap, Cpu, Search, CheckCircle2, ChevronRight, Terminal, ArrowLeft, Star, ArrowRight, MessageSquare, Box } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const PicoClaw = () => {
  useEffect(() => {
    const pageTitle = "PicoClaw AI | install Pico Claw Github, Skills, Docker";
    const pageDesc = "Install PicoClaw AI agent. Get the official Pico Claw Github code, specialized AI skills, and Docker setup guide for ultra-fast autonomous edge deployment.";
    
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", pageDesc);
    }
    const link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", "https://nemoclawaiapp.com/picoclaw");
    }
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: "Edge Performance", description: "Sub-15ms latency on local hardware without cloud dependency." },
    { title: "VRAM Efficient", description: "Requires less than 4GB of VRAM for full autonomous operation." },
    { title: "Apple Silicon Native", description: "Specifically optimized for M1/M2/M3/M4 Core ML and Metal." },
    { title: "Privacy First", description: "Zero data leaves the local network; all reasoning happens on-device." }
  ];

  const faqs = [
    {
      q: "What is PicoClaw?",
      a: "PicoClaw is the most lightweight agent in the NemoClaw ecosystem, designed for high-speed reasoning on edge devices like mobile phones, IoT gateways, and local workstations."
    },
    {
      q: "Is PicoClaw open source?",
      a: "PicoClaw is part of the NemoClaw premium toolkit, but offers a free testing tier for community developers."
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
          "name": "PicoClaw AI Agent",
          "applicationCategory": "AI Software",
          "description": "Ultra-fast lightweight AI agent for edge deployment.",
          "operatingSystem": "iOS, Android, macOS, Linux",
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
        {/* Background Image with Overlay */}
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
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/20 mb-8 backdrop-blur-sm shadow-lg shadow-primary/10">
              <Zap className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Community Edition Setup Kit</span>
            </div>

            {/* Main Neon Title */}
            <h1 className="text-6xl md:text-9xl font-display font-black mb-4 leading-[0.85] tracking-tighter text-primary filter drop-shadow-[0_0_30px_rgba(var(--primary),0.3)]">
              PicoClaw
            </h1>
            
            {/* Subtitle Search-Optimized */}
            <h2 className="text-2xl md:text-5xl font-bold mb-10 text-white leading-tight max-w-4xl tracking-tight">
              PicoClaw AI | <span className="italic opacity-80">install Pico Claw</span> Github, Skills, Docker
            </h2>

            {/* Description Styled like Image */}
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed italic">
              Professional automation scripts, security templates, and hardened configurations to deploy <strong>PicoClaw AI</strong> agents on <strong>Mac</strong>, Cloud, and Edge infrastructure.
            </p>

            {/* Social Proof Section */}
            <div className="flex flex-col items-center gap-4 mb-16">
               <div className="flex -space-x-4 mb-2">
                  {[1,2,3,4,5].map((i) => (
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

            {/* CTA Button */}
            <button 
               onClick={() => window.open('https://apps.apple.com/us/app/ai-agent-openclaw-companion/id6760222159', '_blank')}
               className="h-20 px-12 bg-primary text-black font-black text-xl rounded-full flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-primary/40 group active:scale-95"
            >
               Download AI Agent App
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

      {/* Install Section */}
      <section className="py-24 relative bg-foreground/[0.01]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl sm:text-6xl font-display font-black mb-12 italic tracking-tighter">install PicoClaw</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed italic">
                PicoClaw is optimized for high-speed local inference. Follow our <strong>install PicoClaw</strong> guide to get started on your edge infrastructure.
              </p>
              <div className="space-y-4">
                {[
                  "Apple Silicon M1/M2/M3/M4 Optimized",
                  "Ubuntu 22.04 LTS+ Support",
                  "Python 3.10+ Compatibility",
                  "Low-latency Kernel Mapping"
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
              <div className="text-primary/40 mb-2"># Single line installation</div>
              <div className="text-white mb-6">curl -sSL https://get.nemoclaw.ai/install | bash -s -- agent=picoclaw</div>
              <div className="text-primary/40 mb-2"># Verify Installation</div>
              <div className="text-white">picoclaw --version</div>
            </div>
          </div>
        </div>
      </section>

      {/* Github Section */}
      <section className="py-24 relative border-y border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="lg:w-1/2">
               <h2 className="text-4xl sm:text-6xl font-display font-black mb-6 italic tracking-tighter">PicoClaw Github</h2>
               <p className="text-muted-foreground text-lg leading-relaxed italic mb-8">
                  Join the elite group of developers building on the <strong>PicoClaw Github</strong> repository. Contribute to our open-weights vision.
               </p>
               <div className="flex gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-black text-white">4.2k</div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Stars</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-white">892</div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Forks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-white">12</div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Releases</div>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="glass-panel p-10 rounded-[3rem] border-white/5 bg-white/[0.02] relative group overflow-hidden text-center">
                  <Terminal className="w-16 h-16 text-primary mx-auto mb-6 opacity-20" />
                  <h4 className="text-xl font-bold mb-6">Repository Access</h4>
                  <button className="w-full h-16 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-4 hover:scale-[0.98] transition-transform shadow-2xl">
                     Clone on Github <ArrowRight className="w-5 h-5" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl sm:text-6xl font-display font-black mb-12 italic tracking-tighter text-center">PicoClaw Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Real-time Vision", desc: "Process 60fps local video streams for automation.", icon: Search },
              { title: "Edge NLU", desc: "Native natural language understanding on mobile CPUs.", icon: MessageSquare },
              { title: "Tool Calling", description: "Autonomous interaction with local shell and APIs.", icon: Terminal }
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

      {/* Docker Section */}
      <section className="py-24 relative bg-foreground/[0.01] border-t border-border/40">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl sm:text-6xl font-display font-black mb-8 italic tracking-tighter">PicoClaw Docker</h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-3xl mx-auto italic">
            Deployment of <strong>PicoClaw Docker</strong> images is streamlined for high-concurrency enterprise clusters and local development environments.
          </p>
          <div className="glass-panel p-10 rounded-[40px] border-border/40 bg-[#050505] text-left">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3"><Box className="w-6 h-6 text-primary" /> Docker Compose Example</h4>
            <div className="font-mono text-sm leading-relaxed space-y-2">
              <div className="text-primary/60">services:</div>
              <div className="pl-4 text-primary/60">picoclaw:</div>
              <div className="pl-8 text-primary/60 italic">image: <span className="text-white">nemoclaw/picoclaw:latest-edge</span></div>
              <div className="pl-8 text-primary/60 italic">runtime: <span className="text-white"></span></div>
              <div className="pl-8 text-primary/60 italic">environment:</div>
              <div className="pl-12 text-primary/60 italic">- <span className="text-white">SKILLS=vision,nlu</span></div>
              <div className="pl-12 text-primary/60 italic">- <span className="text-white">OPTIMIZATION=metal</span></div>
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

export default PicoClaw;
