import { motion } from "framer-motion";
import { Cpu, Zap, Monitor, LayoutDashboard } from "lucide-react";

const MacOptimizationSection = () => {
  return (
    <section id="mac-support" className="py-24 relative overflow-hidden bg-primary/2">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Optimized for Apple Silicon</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6">
              Native <span className="text-gradient-primary">NemoClaw Mac</span> Support
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Don't limit your AI development to the cloud. Our setup kit provides professional-grade local optimization for <strong>NemoClaw on Mac</strong> (M1, M2, M3).
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-background border border-border/40 flex items-center justify-center shrink-0">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Metal GPU Accelerated</h4>
                  <p className="text-sm text-muted-foreground">Unlock local inference power on Apple’s Unified Memory Architecture with zero setup friction.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-background border border-border/40 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">5-Minute Mac Install</h4>
                  <p className="text-sm text-muted-foreground">Our automation script handles all dependencies specifically for macOS environments.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative glass-panel rounded-2xl overflow-hidden border-border/40 shadow-2xl p-4">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4 px-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <LayoutDashboard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">NemoClaw Manager</h4>
                    <p className="text-[10px] text-muted-foreground">Local macOS Environment</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.3)]" />
                  <span className="text-[10px] font-mono font-bold text-green-500 underline decoration-green-500/30">Stable</span>
                </div>
              </div>
              
              <div className="space-y-3 px-2 py-4">
               
                <div className="grid grid-cols-2 gap-4 h-32">
                   <div className="rounded-xl bg-primary/5 border border-primary/10 flex flex-col justify-center p-4">
                      <span className="text-[10px] uppercase text-muted-foreground font-bold mb-1">M3 Rendering</span>
                      <span className="text-2xl font-display font-bold text-primary">0.4ms</span>
                      <div className="w-full h-1 bg-primary/10 rounded-full mt-2 overflow-hidden">
                        <div className="w-[85%] h-full bg-primary animate-pulse" />
                      </div>
                   </div>
                   <div className="rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-center p-4">
                      <span className="text-[10px] uppercase text-muted-foreground font-bold mb-1">Inference Power</span>
                      <span className="text-2xl font-display font-bold text-foreground">Extreme</span>
                   </div>
                </div>
                
                <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-medium">Auto-scaling GPU Memory Active</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Background decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 blur-[80px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MacOptimizationSection;
