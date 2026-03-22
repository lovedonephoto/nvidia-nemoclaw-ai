import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Force re-index
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import OpenClaw from "./pages/OpenClaw";
import ZeroClaw from "./pages/ZeroClaw";
import TinyClaw from "./pages/TinyClaw";
import IronClaw from "./pages/IronClaw";
import MimoClaw from "./pages/MimoClaw";
import PicoClaw from "./pages/PicoClaw";
import ResearchClaw from "./pages/ResearchClaw";
import KimiClaw from "./pages/KimiClaw";
import NeoClaw from "./pages/NeoClaw";
import OpenShell from "./pages/OpenShell";
import NemotronSuper from "./pages/NemotronSuper";
import NemoClawVsOpenClaw from "./pages/NemoClawVsOpenClaw";
import NemoClawSetup from "./pages/NemoClawSetup";
import AiAgents from "./pages/AiAgents";
import InstallNemoClaw from "./pages/InstallNemoClaw";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/openclaw" element={<OpenClaw />} />
          <Route path="/zeroclaw" element={<ZeroClaw />} />
          <Route path="/tinyclaw" element={<TinyClaw />} />
          <Route path="/ironclaw" element={<IronClaw />} />
          <Route path="/mimoclaw" element={<MimoClaw />} />
          <Route path="/picoclaw" element={<PicoClaw />} />
          <Route path="/researchclaw" element={<ResearchClaw />} />
          <Route path="/kimoclaw" element={<KimiClaw />} />
          <Route path="/neoclaw" element={<NeoClaw />} />
          <Route path="/openshell" element={<OpenShell />} />
          <Route path="/nemotron-super" element={<NemotronSuper />} />
          <Route path="/nemoclaw-vs-openclaw" element={<NemoClawVsOpenClaw />} />
          <Route path="/nemoclaw-setup" element={<NemoClawSetup />} />
          <Route path="/ai-agents" element={<AiAgents />} />
          <Route path="/install-nemoclaw" element={<InstallNemoClaw />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
