import { motion } from "framer-motion";
import { useEffect } from "react";
import { Zap, Cpu, Search, CheckCircle2, ChevronRight, Terminal, ArrowLeft } from "lucide-react";
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
    <main className="min-h-screen bg-background text-foreground">
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
               <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Zap className="w-8 h-8" />
               </div>
               <h1 className="font-display text-4xl sm:text-7xl font-bold leading-tight tracking-tighter mb-6">
                  PicoClaw AI | <span className="text-gradient-primary">install Pico Claw</span> Github, Skills, Docker
               </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
               PicoClaw is engineered for scenarios where speed and resource efficiency are non-negotiable. It brings autonomous reasoning to the very edge of your network.
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
                     <CheckCircle2 className="w-6 h-6 text-blue-400 mb-4" />
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
             <h2 className="text-3xl font-bold mb-8 italic">Quick Installation</h2>
             <div className="rounded-[30px] border border-white/5 bg-[#050505] p-8 font-mono text-sm leading-relaxed shadow-2xl">
                <div className="text-blue-400 mb-2"># Install PicoClaw CLI</div>
                <div className="text-white mb-4">curl -sSL https://get.nemoclaw.ai/picoclaw | sh</div>
                <div className="text-blue-400 mb-2"># Initialize Edge Agent</div>
                <div className="text-white">picoclaw init --optimizer metal</div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center italic">Advanced FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-panel p-8 rounded-[30px] border-border/40">
                <h4 className="font-bold mb-4 text-xl text-blue-400">{faq.q}</h4>
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

export default PicoClaw;
