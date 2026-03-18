import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WhatIsNemoClawSection from "@/components/landing/WhatIsNemoClawSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import NemoClawAISection from "@/components/landing/NemoClawAISection";
import NemoClawInstallSection from "@/components/landing/NemoClawInstallSection";
import NemoClawVsOpenClawSection from "@/components/landing/NemoClawVsOpenClawSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import OpenClawSection from "@/components/landing/OpenClawSection";
import IntegrationsSection from "@/components/landing/IntegrationsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhatIsNemoClawSection />
      <FeaturesSection />
      <NemoClawAISection />
      <NemoClawInstallSection />
      <UseCasesSection />
      <NemoClawVsOpenClawSection />
      <HowItWorksSection />
      <OpenClawSection />
      <IntegrationsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
