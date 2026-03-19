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
    document.title = "NemoClaw | Install Setup Nemo Claw NVIDIA";
    let link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", "https://nemoclawaiapp.com/");
    }
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
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
