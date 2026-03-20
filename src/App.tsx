import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NemoClawVsOpenClaw from "./pages/NemoClawVsOpenClaw";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NeoClaw from "./pages/NeoClaw";
import NemotronSuper from "./pages/NemotronSuper";
import InstallNemoClaw from "./pages/InstallNemoClaw";
import OpenShell from "./pages/OpenShell";
import AiAgents from "./pages/AiAgents";
import PicoClaw from "./pages/PicoClaw";
import ZeroClaw from "./pages/ZeroClaw";
import KimiClaw from "./pages/KimiClaw";
import OpenClaw from "./pages/OpenClaw";
import TinyClaw from "./pages/TinyClaw";
import IronClaw from "./pages/IronClaw";
import NemoClawSetup from "./pages/NemoClawSetup";
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
          <Route path="/nemoclaw-vs-openclaw" element={<NemoClawVsOpenClaw />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/neoclaw" element={<NeoClaw />} />
          <Route path="/nvidia-nemotron-3-super" element={<NemotronSuper />} />
          <Route path="/install-nemoclaw" element={<InstallNemoClaw />} />
          <Route path="/openshell" element={<OpenShell />} />
          <Route path="/ai-agents" element={<AiAgents />} />
          <Route path="/picoclaw" element={<PicoClaw />} />
          <Route path="/zeroclaw" element={<ZeroClaw />} />
          <Route path="/kimiclaw" element={<KimiClaw />} />
          <Route path="/openclaw" element={<OpenClaw />} />
        <Route path="/tinyclaw" element={<TinyClaw />} />
        <Route path="/ironclaw" element={<IronClaw />} />
          <Route path="/nemoclaw-setup" element={<NemoClawSetup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
