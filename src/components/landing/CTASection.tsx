import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
              onClick={() => window.open('https://buy.polar.sh/polar_cl_iOIqgNKmid5LFFmMwu56jM4gUWGjD5HlkAIyQ2xo12N', '_blank')}
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
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
