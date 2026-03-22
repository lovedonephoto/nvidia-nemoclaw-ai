import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Zap, Globe, Github, Users, Shield, Cpu } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const NeoClaw = () => {
  useEffect(() => {
    document.title = "NeoClaw | The Open Source AI Agent Evolution";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "NeoClaw: Personal AI autonomy reimagined. Explore the open source evolution of autonomous agents with decentralized orchestration and community-driven innovation.");
    }
    const link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", "https://nemoclawaiapp.com/neoclaw");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary/30 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(159,255,108,0.08),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Community Protocol 1.0</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-bold mb-6 tracking-tight">
               NeoClaw | Personal <span className="text-primary italic">AI Autonomy</span> Reimagined
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              The evolution of the open source agent ecosystem. <strong>NeoClaw</strong> delivers a decentralized, community-driven framework for modern autonomous workflows.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
               <button
                 className="px-10 h-16 bg-white text-black font-bold text-lg rounded-full flex items-center gap-3 hover:scale-105 transition-all shadow-xl active:scale-95"
                 onClick={() => window.open('https://github.com', '_blank')}
               >
                 <Github className="w-5 h-5" />
                 Join the Evolution
               </button>
               <Link to="/" className="text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2 px-6">
                 Explore NemoClaw Protocol <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 relative border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4">
           <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-3xl sm:text-5xl font-bold mb-8 leading-tight">Decentralized Intelligence for Everyone.</h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      While most platforms lock autonomy behind proprietary gates, <strong>NeoClaw</strong> pushes the boundaries of transparency. We believe agents should be personal, private, and portable.
                    </p>
                    <div className="space-y-4">
                      {[
                        { icon: Shield, title: "Zero Proprietary Hooks", desc: "Pure open source foundations." },
                        { icon: Globe, title: "Edge Native", desc: "Run your agents on your hardware, your rules." },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                             <item.icon className="w-5 h-5 text-primary" />
                           </div>
                           <div>
                             <h4 className="font-bold">{item.title}</h4>
                             <p className="text-gray-500 text-sm">{item.desc}</p>
                           </div>
                        </div>
                      ))}
                    </div>
                 </div>
                 <div className="glass-panel p-8 rounded-3xl border-white/10 bg-white/5 relative group cursor-crosshair overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-all" />
                    <Code className="w-12 h-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Neo Protocol Core</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                       The Neo protocol simplifies multi-agent orchestration by eliminating heavy middleware. It is the direct evolutionary path for high-performance open source autonomy.
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                       Access Protocol <ChevronRight className="w-4 h-4" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Community Grid */}
      <section className="py-32 relative border-t border-white/5">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight uppercase">Built by Innovation</h2>
               <p className="text-gray-500 max-w-xl mx-auto">NeoClaw is driven by a global community of developers tired of "AI Black Boxes".</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {[
                 { icon: Users, title: "Community Driven", desc: "No executive boards. Just code and collaboration." },
                 { icon: Zap, title: "Hyper-Performance", desc: "Minimalist core for maximum execution speed." },
                 { icon: Cpu, title: "Hardware Agnostic", desc: "Optimized for everything from Raspberry Pi to massive clusters." },
               ].map((item, i) => (
                 <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all text-center">
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-6" />
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Dark Banner */}
      <section className="py-24 bg-primary text-black">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter uppercase leading-none">Ready to join the <br /> open source evolution?</h2>
            <Link to="/" className="inline-flex items-center gap-3 px-12 h-20 bg-black text-white font-black text-xl rounded-full hover:scale-105 transition-all shadow-2xl active:scale-95">
               Get Started Protocol
               <ArrowRight className="w-6 h-6" />
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
};

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

export default NeoClaw;
