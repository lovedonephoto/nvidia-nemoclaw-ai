import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WhatIsNemoClawSection from "@/components/landing/WhatIsNemoClawSection";
import InstallationStepsSection from "@/components/landing/InstallationStepsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import NemoClawAISection from "@/components/landing/NemoClawAISection";
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
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <HeroSection />
      <WhatIsNemoClawSection />
      <InstallationStepsSection />
      <FeaturesSection />
      <NemoClawAISection />
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
