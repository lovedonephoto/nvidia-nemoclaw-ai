import { motion } from "framer-motion";
import { Zap, Star } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
              Community Edition Setup Kit
            </span>
          </div>
        </motion.div>

        <h1 className="sr-only">NemoClaw | NVIDIA Nemo Claw AI Agents</h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-bold tracking-tighter leading-[0.9] mb-8 max-w-7xl mx-auto"
          aria-hidden="true"
        >
          <span className="text-gradient-primary block text-5xl sm:text-8xl lg:text-[12rem] mb-4 text-nowrap">Nemo Claw</span>
          <span className="block text-2xl sm:text-4xl lg:text-6xl opacity-80 tracking-normal">Premium Setup Toolkit</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Advanced automation scripts, security templates, and hardened configurations 
          to deploy and secure your NemoClaw AI agents with professional precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Social Proof Section */}
          <div className="flex flex-col items-center gap-3 mb-2">
            <div className="flex -space-x-3 overflow-hidden">
              {avatars.map((url, i) => (
                <img
                  key={i}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-background grayscale hover:grayscale-0 transition-all duration-300"
                  src={url}
                  alt={`User ${i}`}
                />
              ))}
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 ring-2 ring-background backdrop-blur-sm text-[10px] font-bold text-primary">
                +500
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by <span className="text-foreground font-bold">500+</span> developers world-wide
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="px-12 h-16 bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95 text-primary-foreground font-bold text-lg rounded-full min-w-[280px] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
              onClick={() => window.open('https://buy.polar.sh/polar_cl_iOIqgNKmid5LFFmMwu56jM4gUWGjD5HlkAIyQ2xo12N', '_blank')}
            >
              Get Setup ($49.99)
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
            <span className="text-2xl sm:text-3xl font-display font-bold text-foreground">5-Min</span>
            <span>Installation</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-display font-bold text-foreground">Hardened</span>
            <span>Security Layer</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-display font-bold text-foreground">Expert</span>
            <span>Documentation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
