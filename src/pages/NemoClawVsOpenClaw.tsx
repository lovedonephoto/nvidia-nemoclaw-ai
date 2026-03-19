import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, X, Zap, Shield, Cpu, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const NemoClawVsOpenClaw = () => {
  useEffect(() => {
    document.title = "NVIDIA NemoClaw vs OpenClaw: Full Comparison (2025)";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover the key differences between NVIDIA NemoClaw and OpenClaw. Compare features, installation speed, and security for AI agent deployment.");
    }
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { name: "Setup Time", openclaw: "2-4 Hours", nemoclaw: "5 Minutes", highlight: true },
    { name: "GPU Acceleration", openclaw: "Manual Config", nemoclaw: "Auto-Optimized", highlight: true },
    { name: "Security Layer", openclaw: "Basic", nemoclaw: "Hardened/Enterprise", highlight: true },
    { name: "Mac M1/M2/M3 Support", openclaw: "Experimental", nemoclaw: "Native/Optimized", highlight: true },
    { name: "Automation Scripts", openclaw: "Community Only", nemoclaw: "Professional Set", highlight: false },
    { name: "Installation Method", openclaw: "Manual CLI", nemoclaw: "One-Click/Auto", highlight: false },
    { name: "Docker Support", openclaw: "Generic", nemoclaw: "High-Perf Pre-built", highlight: false },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl mb-6">
              NVIDIA NemoClaw <span className="text-muted-foreground">vs</span> <span className="text-primary/70">OpenClaw</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Why professional developers are choosing our hardened <strong>NVIDIA NemoClaw</strong> setup over the standard open-source framework.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel overflow-hidden rounded-2xl border-border/40 max-w-5xl mx-auto shadow-2xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary/5">
                    <th className="p-6 text-xl font-display font-semibold border-b border-border/40">Feature</th>
                    <th className="p-6 text-xl font-display font-semibold border-b border-border/40 text-muted-foreground">OpenClaw (OSS)</th>
                    <th className="p-6 text-xl font-display font-semibold border-b border-border/40 text-primary">NVIDIA NemoClaw</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {features.map((feature, i) => (
                    <tr key={i} className={feature.highlight ? "bg-primary/[0.02]" : ""}>
                      <td className="p-6 font-medium text-foreground">{feature.name}</td>
                      <td className="p-6 text-muted-foreground">{feature.openclaw}</td>
                      <td className="p-6 font-bold text-foreground">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          {feature.nemoclaw}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Differences Breakdown */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl border-border/40 hover:border-primary/30 transition-all"
            >
              <Zap className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-display font-bold mb-4">5-Minute Deployment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Standard installation of OpenClaw often takes hours to resolve dependencies. Our NVIDIA-optimized scripts handle everything in under 5 minutes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-8 rounded-2xl border-border/40 hover:border-primary/30 transition-all shadow-xl shadow-primary/5"
            >
              <Cpu className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-display font-bold mb-4">GPU Optimization</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unlock the full power of NVIDIA H100/A100/L40S GPUs. NemoClaw setup includes custom kernel optimizations that the standard OSS version lacks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 rounded-2xl border-border/40 hover:border-primary/30 transition-all"
            >
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-display font-bold mb-4">Hardened Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                Don't leave your neural network exposed. Our kit includes pre-configured zero-trust networking templates to keep your data safe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Installation FAQ Section */}
      <section className="py-24 bg-primary/5 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12">Comparison FAQ</h2>
            <div className="space-y-8">
              <div className="glass-panel p-6 rounded-xl border-border/40">
                <h4 className="text-lg font-bold mb-2">Can I migrate from OpenClaw to NVIDIA NemoClaw?</h4>
                <p className="text-muted-foreground">Yes. Our setup kit includes a migration script that detects existing OpenClaw installations and upgrades them with NemoClaw features without losing your stored agents.</p>
              </div>
              <div className="glass-panel p-6 rounded-xl border-border/40">
                <h4 className="text-lg font-bold mb-2">Is NemoClaw compatible with Mac M1/M2/M3?</h4>
                <p className="text-muted-foreground">Unlike the standard GitHub repository which is primary Linux focused, our kit is fully optimized for local Mac development using Apple Silicon.</p>
              </div>
              <div className="glass-panel p-6 rounded-xl border-border/40">
                <h4 className="text-lg font-bold mb-2">Why is it called NVIDIA Nemo Claw?</h4>
                <p className="text-muted-foreground">It leverages the NVIDIA NeMo framework for conversational AI, providing superior reasoning capabilities compared to generic LLM agent wrappers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20"
          >
            <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">Stop Wrestling with Scripts</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join 500+ developers deploying professional-grade AI in minutes.
            </p>
            <button 
              className="px-12 py-5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl rounded-full transition-all flex items-center gap-3 mx-auto shadow-2xl shadow-primary/20"
              onClick={() => window.open('https://buy.polar.sh/polar_cl_iOIqgNKmid5LFFmMwu56jM4gUWGjD5HlkAIyQ2xo12N', '_blank')}
            >
              Get the Full Setup Kit ($49.99)
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NemoClawVsOpenClaw;
