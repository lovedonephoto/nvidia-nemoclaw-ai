import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WhatIsNemoClawSection from "@/components/landing/WhatIsNemoClawSection";
import InstallationStepsSection from "@/components/landing/InstallationStepsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import NemoClawAISection from "@/components/landing/NemoClawAISection";
import NemoClawInstallSection from "@/components/landing/NemoClawInstallSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import MacOptimizationSection from "@/components/landing/MacOptimizationSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import OpenClawSection from "@/components/landing/OpenClawSection";
import VsOpenClawHomeSection from "@/components/landing/VsOpenClawHomeSection";
import IntegrationsSection from "@/components/landing/IntegrationsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "NemoClaw Community: Expert NVIDIA Nemo & OpenClaw Setup Kit";
    let link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", "https://nemoclawaiapp.com/");
    }
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Schema.org Structures for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "datePublished": "2025-01-15",
          "dateModified": "2026-03-19",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is NemoClaw and how does NVIDIA Nemo Claw work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NemoClaw (also known as NVIDIA Nemo Claw) is a GPU-accelerated AI agent platform built on NVIDIA Nemo. It deploys autonomous AI agents that reason, plan, and execute complex tasks using neural networks optimized for NVIDIA hardware."
              }
            },
            {
              "@type": "Question",
              "name": "How do I install NVIDIA Nemo Claw on my Mac?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our Setup Kit includes a dedicated 'NemoClaw Mac' installation script for Apple Silicon (M1/M2/M3), handling GPU acceleration automatically for macOS."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between NemoClaw and OpenClaw?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NemoClaw extends OpenClaw with enterprise security, automated install scripts, NVIDIA Nemotron integration, and professional deployment templates powered by our setup kit."
              }
            }
          ]
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nemoclawaiapp.com/" }
          ]
        })}
      </script>
      <Navbar />
      <HeroSection />
      <WhatIsNemoClawSection />
      <InstallationStepsSection />
      <FeaturesSection />
      <NemoClawAISection />
      <NemoClawInstallSection />
      <UseCasesSection />
      <MacOptimizationSection />
      <HowItWorksSection />
      <OpenClawSection />
      <VsOpenClawHomeSection />
      <IntegrationsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
