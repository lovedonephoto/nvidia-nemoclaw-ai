import { motion } from "framer-motion";
import { useEffect } from "react";
import { Layers, Cpu, Search, CheckCircle2, ChevronRight, Terminal, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const OpenClaw = () => {
  useEffect(() => {
    const pageTitle = "OpenClaw AI Agent: Flexible Open-Source Multi-LLM Autonomous Research Deployment Guide";
    const pageDesc = "Deploy OpenClaw, the flexible open-source AI agent. Multi-LLM support, plug-and-play modules, and community templates for research and development.";
    
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", pageDesc);
    }
    const link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", "https://nemoclawaiapp.com/openclaw");
    }
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: "Open Weights", description: "Fully transparent model access for research and fine-tuning." },
    { title: "Multi-LLM Support", description: "Interface with Claude, GPT, Llama, and Mistral through a single agent API." },
    { title: "Plug-and-Play", description: "Modularity at its best—swap reasoning modules with no downtime." },
    { title: "Community Library", description: "Access a massive community-driven repository of agentic templates." }
  ];

  const faqs = [
    {
      q: "What is the mission of OpenClaw?",
      a: "OpenClaw is designed to bridge the gap between proprietary AI and community research, providing a robust, extensible autonomous agent foundation."
    },
    {
      q: "Can I use OpenClaw for local Llama-3 models?",
      a: "Yes, OpenClaw has native support for Ollama and vLLM backends, making it perfect for your local open-source setup."
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
          "name": "OpenClaw AI Agent",
          "applicationCategory": "AI Software",
          "description": "Flexible open-source AI agent for multi-LLM research and development.",
          "operatingSystem": "Linux, macOS, Windows",
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
               <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Layers className="w-8 h-8" />
               </div>
               <h1 className="font-display text-4xl sm:text-6xl font-bold leading-tight">
                  OpenClaw AI Agent: Flexible Open-Source Multi-LLM Autonomous Research Deployment Guide
               </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
               OpenClaw represents the democratic foundation of the ecosystem. Transparent, extensible, and built by researchers for the international AI community.
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
                     <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
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
             <h2 className="text-3xl font-bold mb-8 italic">Source Deployment</h2>
             <div className="rounded-[30px] border border-white/5 bg-[#050505] p-8 font-mono text-sm leading-relaxed shadow-2xl">
                <div className="text-primary mb-2"># Clone OpenClaw Repository</div>
                <div className="text-white mb-4">git clone https://github.com/nemoclaw/openclaw && cd openclaw</div>
                <div className="text-primary mb-2"># Install Dependencies & Run</div>
                <div className="text-white">pip install -r requirements.txt && python openclaw.py</div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center italic">Community Q&A</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-panel p-8 rounded-[30px] border-border/40">
                <h4 className="font-bold mb-4 text-xl text-primary">{faq.q}</h4>
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

export default OpenClaw;
