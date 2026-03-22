import { motion } from "framer-motion";
import { useEffect } from "react";
import { Video, Music, Camera, CheckCircle2, Terminal, ArrowLeft, Star, ArrowRight, Share2, Sparkles, Wand2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const UgcClaw = () => {
  useEffect(() => {
    const pageTitle = "OpenClaw setup for UGC video generation TikTok | UgcClaw AI";
    const pageDesc = "Professional OpenClaw setup for UGC video generation on TikTok and Reels. Automate your viral content creation with specialized UgcClaw AI agents, script logic, and vertical video rendering.";
    
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", pageDesc);
    }
    const link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", "https://nemoclawaiapp.com/ugcclaw");
    }
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: "Viral Script Gen", description: "AI-driven hook and body generation optimized for TikTok retention." },
    { title: "Voiceover Sync", description: "Native integration with high-quality AI voices for perfect UGC narration." },
    { title: "Vertical Rendering", description: "Automated 9:16 export with dynamic captions and overlays." },
    { title: "Content Scheduler", description: "Direct API bridge for automated TikTok and Shorts uploads." }
  ];

  const faqs = [
    {
      q: "What is UgcClaw?",
      a: "UgcClaw is a specialized OpenClaw fork designed specifically for high-volume UGC video generation for social media platforms like TikTok and Instagram."
    },
    {
      q: "How to install UgcClaw for TikTok automation?",
      a: "The UgcClaw setup kit includes all necessary FFmpeg drivers and API bridge configurations to start generating viral videos in minutes."
    },
    {
      q: "Can I use custom voices or music?",
      a: "Yes, UgcClaw's Skills allow for deep integration with ElevenLabs, OpenAI voices, and royalty-free music libraries."
    },
    {
      q: "Does it support face-swap or avatars?",
      a: "The UgcClaw Github repository includes experimental modules for digital avatar generation and lip-syncing."
    },
    {
      q: "Is there a Docker setup for UgcClaw?",
      a: "Absolutely. UgcClaw Docker containers come pre-configured with GPU acceleration for rapid video rendering."
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
          "name": "UgcClaw AI UGC Agent",
          "applicationCategory": "Multimedia Software",
          "description": "Automated UGC video generation agent for TikTok and social media.",
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
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Viral Content Setup Kit</span>
            </div>

            <h2 className="text-6xl md:text-9xl font-display font-black mb-4 leading-[0.85] tracking-tighter text-primary filter drop-shadow-[0_0_30px_rgba(var(--primary),0.3)]">
              UgcClaw
            </h2>
            
            <h1 className="text-2xl md:text-5xl font-bold mb-10 text-white leading-tight max-w-4xl tracking-tight">
              OpenClaw setup for <span className="italic opacity-80 underline decoration-primary/30">UGC video generation</span> TikTok
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed italic">
              Deploy autonomous <strong>UgcClaw AI</strong> agents to write, voice, and render professional <strong>TikTok & Reels</strong> content with zero manual effort.
            </p>

            <div className="flex flex-col items-center gap-4 mb-16">
               <div className="flex -space-x-4 mb-2">
                  {[61,62,63,64,65].map((i) => (
                     <div key={i} className={`w-12 h-12 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center text-[10px] font-bold overflow-hidden`}>
                        <img 
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}&backgroundColor=27272a`} 
                          alt="Creator Avatar" 
                          className="w-full h-full object-cover grayscale"
                        />
                     </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-black text-black">+1k</div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="flex gap-0.5">
                     {[1,2,3,4,5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                     ))}
                  </div>
                  <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
                     Used by <strong className="text-white">1,000+</strong> content creators
                  </span>
               </div>
            </div>

            <button className="h-20 px-12 bg-primary text-black font-black text-xl rounded-full flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-primary/40 group active:scale-95">
               Get UGC Setup ($59.99)
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
                     <Wand2 className="w-8 h-8 text-primary mb-6" />
                     <h3 className="font-bold text-xl mb-4 italic">{f.title}</h3>
                     <p className="text-sm text-muted-foreground leading-relaxed italic">{f.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* install UgcClaw */}
      <section className="py-24 relative bg-foreground/[0.01]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl sm:text-6xl font-display font-black mb-12 italic tracking-tighter">install UgcClaw</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <p className="text-muted-foreground text-lg leading-relaxed italic">
                 The future of content is automated. Follow our <strong>install UgcClaw</strong> guide to build your viral factory.
               </p>
               <div className="space-y-4">
                  {[
                    "FFmpeg & GPU Acceleration",
                    "ElevenLabs Voice API Integration",
                    "Dynamic Caption Layering",
                    "One-click TikTok Upload CLI"
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
              <div className="text-primary/40 mb-2"># Install UgcClaw Content Engine</div>
              <div className="text-white mb-6">curl -sSL https://get.nemoclaw.ai/install | bash -s -- agent=ugcclaw</div>
              <div className="text-primary/40 mb-2"># Generate Viral TikTok</div>
              <div className="text-white">ugcclaw create --topic "AI Future" --platform tiktok</div>
            </div>
          </div>
        </div>
      </section>

      {/* UgcClaw Skills */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl sm:text-6xl font-display font-black mb-12 italic tracking-tighter text-center">UgcClaw Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Visual Grip", desc: "Automated B-roll selection and scene transitions.", icon: Video },
              { title: "Voice Synth", desc: "Cloning and emotive text-to-speech rendering.", icon: Music },
              { title: "Trend Hunter", description: "Real-time hook generation based on viral hashtags.", icon: Share2 }
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

      {/* FAQ Section */}
      <section className="py-24 border-t border-border/40">
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

export default UgcClaw;
