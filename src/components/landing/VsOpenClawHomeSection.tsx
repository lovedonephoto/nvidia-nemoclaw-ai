import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Zap, Laptop } from "lucide-react";

const VsOpenClawHomeSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl border border-border/40 bg-gradient-to-br from-primary/5 via-background to-background p-8 sm:p-12 overflow-hidden relative shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/2 blur-[100px] -z-10 rounded-full" />
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display text-2xl sm:text-4xl font-bold mb-6">
                 NemoClaw <span className="text-muted-foreground italic font-normal text-xl mx-2">vs</span> <span className="text-foreground">OpenClaw</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                 Unlike the standard OpenClaw repository which targets only core Linux functions, 
                 our professional NemoClaw deployment kit is multi-modal, secure, and ready for <strong>infrastructure</strong> in seconds.
              </p>
              
              <Link 
                to="/nemoclaw-vs-openclaw" 
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
              >
                Read the Complete Comparison
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-center text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                     <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] text-muted-foreground block mb-1">Deployment Speed</span>
                  <span className="text-sm font-bold text-primary font-display">10x Faster</span>
               </div>
               
               <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-center text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                     <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] text-muted-foreground block mb-1">Security Standards</span>
                  <span className="text-sm font-bold text-foreground font-display">Hardened Layer</span>
               </div>
               
               <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-center text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                     <Laptop className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] text-muted-foreground block mb-1">Optimization</span>
                  <span className="text-sm font-bold text-foreground font-display">Native Mac Support</span>
               </div>
               
               <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-center text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                     <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] text-muted-foreground block mb-1">Github Support</span>
                  <span className="text-sm font-bold text-foreground font-display">Regular Updates</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VsOpenClawHomeSection;
