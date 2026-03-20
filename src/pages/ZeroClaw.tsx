import { motion } from "framer-motion";
import { useEffect } from "react";
import { Shield, Server, Box, CheckCircle2, ChevronRight, Terminal, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const ZeroClaw = () => {
  useEffect(() => {
    const pageTitle = "ZeroClaw AI Agent: Minimalist Zero-Configuration Autonomous Serverless Deployment Guide";
    const pageDesc = "Deploy ZeroClaw, the minimalist zero-configuration AI agent. Hardened security, auto-GPU mapping, and serverless ready for enterprise clusters today.";
    
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", pageDesc);
    }
    const link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", "https://nemoclawaiapp.com/zeroclaw");
    }
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: "Zero Configuration", description: "Plug-and-play architecture that minimizes overhead and deployment time." },
    { title: "Auto-GPU Mapping", description: "Automatically detects and allocates VRAM across multiple GPU nodes." },
    { title: "Hardened Security", description: "Built with a security-first core, protecting sensitive enterprise data." },
    { title: "Serverless Ready", description: "Fully compatible with modern serverless and container workflows." }
  ];

  const faqs = [
    {
      q: "What makes ZeroClaw different?",
      a: "ZeroClaw focuses on pure simplicity and rapid scaling. While others require manual tuning, ZeroClaw optimizes itself for the environment it's deployed in."
    },
    {
      q: "Can I use ZeroClaw in a Docker cluster?",
      a: "Absolutely. ZeroClaw and Docker are perfectly aligned for multi-node agentic swarms."
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ZeroClaw AI Agent",
          "applicationCategory": "AI Software",
          "description": "Minimalist zero-configuration AI agent for serverless deployment.",
          "operatingSystem": "Linux, Docker, Windows",
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

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/ai-agents" className="inline-flex items-center gap-2 text-primary text-sm font-bold mb-8 hover:underline italic">
            <ArrowLeft className="w-4 h-4" /> Back to Agents Ecosystem
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400">
                  <Shield className="w-8 h-8" />
               </div>
               <h1 className="font-display text-4xl sm:text-6xl font-bold leading-tight">
                  ZeroClaw AI Agent: Minimalist Zero-Configuration Autonomous Serverless Deployment Guide
               </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
               ZeroClaw eliminates the friction between code and deployment. Our minimalist autonomous agent is purpose-built for high-velocity enterprise scaling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 border-t border-border/40">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {features.map((f, i) => (
                  <div key={i} className="glass-panel p-6 rounded-3xl border-border/40 group">
                     <CheckCircle2 className="w-6 h-6 text-green-400 mb-4" />
                     <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                     <p className="text-sm text-muted-foreground">{f.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Installation Section */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold mb-8 italic">Quick Deployment</h2>
             <div className="rounded-[30px] border border-white/5 bg-[#050505] p-8 font-mono text-sm leading-relaxed shadow-2xl">
                <div className="text-green-400 mb-2"># Deploy ZeroClaw via Docker</div>
                <div className="text-white mb-4">docker run -d --gpus all --name zeroclaw-01 nemoclaw/zeroclaw:latest</div>
                <div className="text-green-400 mb-2"># Verification Run</div>
                <div className="text-white">zeroclaw health-check</div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center italic">Deployment Q&A</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-panel p-8 rounded-[30px] border-border/40">
                <h4 className="font-bold mb-4 text-xl text-green-400">{faq.q}</h4>
                <p className="text-muted-foreground italic leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ZeroClaw;
