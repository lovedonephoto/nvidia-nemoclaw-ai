import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl p-10 sm:p-16 text-center max-w-4xl mx-auto border-primary/20"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4">
            Ready to <span className="text-gradient-primary">Transform</span> Your AI?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Join thousands of developers and enterprises already building with NemoClaw.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-base px-8 py-6"
              onClick={() => document.getElementById('install-nemoclaw')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Building Now
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button 
              variant="hero-outline" 
              size="lg" 
              className="text-base px-8 py-6"
              onClick={() => window.location.href = 'mailto:soylamistugce@gmail.com'}
            >
              Get Support
            </Button>
          </div>
          <div className="mt-12 flex flex-col items-center gap-3">
             <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] italic">Or Quick Install</span>
             <div className="relative group/install overflow-hidden rounded-full bg-black/50 border border-white/5 px-6 py-3 flex items-center gap-3 font-mono text-xs">
                <span>$</span>
                <span className="text-foreground/80 shrink-0">curl -fsSL https://get.nemoclaw.ai/</span>
                <span className="blur-[40px] select-none opacity-5 pointer-events-none">install | bash</span>

             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
