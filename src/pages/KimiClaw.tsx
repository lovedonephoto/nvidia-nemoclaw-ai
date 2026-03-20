import { motion } from "framer-motion";
import { useEffect } from "react";
import { MessageSquare, Cpu, Search, CheckCircle2, ChevronRight, Terminal, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const KimiClaw = () => {
  useEffect(() => {
    const pageTitle = "KimiClaw AI Agent: Advanced 1M Context Reasoning and Strategic Decision-Making Guide";
    const pageDesc = "Deploy KimiClaw, the advanced reasoning AI agent with 1M token context window. Specialized for multi-step planning and deep logical analysis tasks.";
    
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", pageDesc);
    }
    const link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", "https://nemoclawaiapp.com/kimiclaw");
    }
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: "Long Context (1M+)", description: "Analyzes massive datasets and long-form documents in a single pass." },
    { title: "Strategic Reasoning", description: "Specifically tuned for multi-step decision making and strategy." },
    { title: "RAG Integration", description: "Direct native support for high-throughput vector database retrieval." },
    { title: "Advanced Logic", description: "Excellent mathematical and logical reasoning performance." }
  ];

  const faqs = [
    {
      q: "What is KimiClaw?",
      a: "KimiClaw is the ecosystem's 'brain' for massive-context reasoning. It's often used for deep document analysis, long-term planning, and enterprise code repo handling."
    },
    {
      q: "Can KimiClaw replace standard LLM APIs?",
      a: "KimiClaw is an autonomous layer that sits on top of LLMs, adding strategic planning and long-term memory capabilities."
    }
  ];

  const Brain = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="lucide lucide-brain"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.105 4 4 0 0 0 7.327-2.673 4 4 0 0 0 7.325 2.67 4 4 0 0 0 .52-8.103 4 4 0 0 0-2.527-5.771A3 3 0 1 0 12 5zm0 18V12" />
    </svg>
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "KimiClaw AI Agent",
          "applicationCategory": "AI Software",
          "description": "Advanced reasoning AI agent with 1M context window.",
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
               <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Brain />
               </div>
               <h1 className="font-display text-4xl sm:text-6xl font-bold leading-tight">
                  KimiClaw AI Agent: Advanced 1M Context Reasoning and Strategic Decision-Making Guide
               </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
               KimiClaw is the architect of our ecosystem. It doesn't just process data; it reasons through complex possibilities and executes multi-stage strategic plans.
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
                     <CheckCircle2 className="w-6 h-6 text-purple-400 mb-4" />
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
             <h2 className="text-3xl font-bold mb-8 italic">Advanced Configuration</h2>
             <div className="rounded-[30px] border border-white/5 bg-[#050505] p-8 font-mono text-sm leading-relaxed shadow-2xl">
                <div className="text-purple-400 mb-2"># Create KimiClaw Configuration</div>
                <div className="text-white mb-4">cat &lt;&lt;EOF &gt; kimiclaw.yaml
context: 1000000
mode: strategic
EOF</div>
                <div className="text-purple-400 mb-2"># Boot Agent</div>
                <div className="text-white">kimiclaw up -f kimiclaw.yaml</div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center italic">Expert Analysis</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-panel p-8 rounded-[30px] border-border/40">
                <h4 className="font-bold mb-4 text-xl text-purple-400">{faq.q}</h4>
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

export default KimiClaw;
