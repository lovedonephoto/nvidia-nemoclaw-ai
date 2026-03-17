import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="AI neural network visualization"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide uppercase">
              Powered by NVIDIA Nemo
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-bold tracking-tighter leading-[0.9] mb-8 max-w-7xl mx-auto"
        >
          <span className="text-gradient-primary block text-5xl sm:text-8xl lg:text-[12rem] mb-4">Nemo Claw</span>
          <span className="block text-2xl sm:text-4xl lg:text-6xl opacity-80 tracking-normal">NVIDIA NemoClaw AI Agents</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          The next-generation AI platform that grips complex data, extracts intelligence,
          and delivers actionable insights at unprecedented speed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full min-w-[200px] transition-all"
              onClick={() => window.open('https://buy.polar.sh/polar_cl_iOIqgNKmid5LFFmMwu56jM4gUWGjD5HlkAIyQ2xo12N', '_blank')}
            >
              Get Setup ($99)
            </button>
            <button
              className="px-8 h-12 border border-primary/20 hover:bg-primary/5 text-foreground rounded-full min-w-[200px] transition-all"
              onClick={() => window.open('https://github.com/NVIDIA/NemoClaw', '_blank')}
            >
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-muted-foreground"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-display font-bold text-foreground">10x</span>
            <span>Faster Processing</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-display font-bold text-foreground">99.9%</span>
            <span>Accuracy Rate</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-display font-bold text-foreground">50K+</span>
            <span>Active Users</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
