import { motion } from "framer-motion";
import { useEffect } from "react";
import { Zap, Cpu, Search, CheckCircle2, ChevronRight, Terminal, ArrowLeft, Star, ArrowRight } from "lucide-react";
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
            <button className="h-20 px-12 bg-primary text-black font-black text-xl rounded-full flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-primary/40 group active:scale-95">
               Get Setup ($49.99)
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

      {/* Installation Section */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold mb-8 italic flex items-center gap-4">
                <Terminal className="w-8 h-8 text-primary" /> Setup Skills & Commands
             </h2>
             <div className="rounded-[40px] border border-white/5 bg-[#050505] p-10 font-mono text-base leading-relaxed shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Cpu className="w-32 h-32 text-primary" />
                </div>
                <div className="text-primary/40 mb-2"># Install PicoClaw via Docker</div>
                <div className="text-white mb-6">curl -sSL https://get.nemoclaw.ai/picoclaw | sh</div>
                <div className="text-primary/40 mb-2"># Map GPU & Initialize Skills</div>
                <div className="text-white">picoclaw init --optimizer metal --skills core,vision</div>
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
