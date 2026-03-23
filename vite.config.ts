import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: 'seo-injector',
      transformIndexHtml(html: string, ctx: any) {
        // Use originalUrl if available, otherwise fallback to path
        const url = ctx.originalUrl || ctx.path || '/';
        
        let title = "Nemo Claw AI | NemoClaw Install Setup Download";
        let desc = "Nemo Claw AI: Install NemoClaw with our setup guide. Download NemoClaw, compare vs OpenClaw. Get the latest code via our GitHub repository.";
        let keywords = "NemoClaw, Nemo Claw, OpenClaw, Open Claw, NemoClaw AI, NemoClaw install, NemoClaw setup, AI agents, GPU accelerated, Nemo";

        if (url.includes('/privacy')) {
          title = "Privacy Policy | NemoClaw AI";
          desc = "Read the Privacy Policy for NemoClaw AI. We value your privacy and data security.";
        } else if (url.includes('/terms')) {
          title = "Terms of Service | NemoClaw AI";
          desc = "Read the Terms of Service for NemoClaw AI. Legal agreements and usage terms.";
        } else if (url.includes('/refund')) {
          title = "Refund Policy | NemoClaw AI";
          desc = "Read the Refund Policy for NemoClaw AI. Refund eligibility and process.";
        } else if (url.includes('/openclaw')) {
          title = "OpenClaw AI Agent Deployment | NemoClaw AI";
          desc = "Learn how to deploy OpenClaw using NemoClaw. The ultimate open-source AI assistant setup.";
        } else if (url.includes('/zeroclaw')) {
          title = "ZeroClaw AI Agent | Zero-Cost Autonomous AI";
          desc = "Discover ZeroClaw, the zero-cost autonomous AI agent optimized for hardware acceleration.";
        } else if (url.includes('/tinyclaw')) {
          title = "TinyClaw AI | Lightweight AI Agent for Edge Devices";
          desc = "TinyClaw: The lightweight AI agent designed for low-power edge devices and mobile hardware.";
        } else if (url.includes('/ironclaw')) {
          title = "IronClaw AI | Enterprise Grade AI Agent";
          desc = "IronClaw: The secure, enterprise-grade AI agent with advanced reasoning and task execution.";
        } else if (url.includes('/ai-agents')) {
          title = "NemoClaw AI Agents Ecosystem | Compare All Agents";
          desc = "Explore the NemoClaw AI agent ecosystem. Compare OpenClaw, ZeroClaw, IronClaw, and more.";
        } else if (url.includes('/install-nemoclaw')) {
          title = "Install NemoClaw | AI Agent Setup Guide";
          desc = "Follow our step-by-step guide to install NemoClaw and deploy your first AI agent on Mac or Linux.";
        } else if (url.includes('/nemotron-super')) {
          title = "Nemotron 3 Super | Advanced AI Reasoning Models";
          desc = "Experience Nemotron 3 Super models for advanced reasoning and multi-agent orchestration.";
        } else if (url.includes('/ugcclaw')) {
          title = "OpenClaw setup for UGC video generation TikTok | UgcClaw AI";
          desc = "Professional OpenClaw setup for UGC video generation on TikTok and Reels. Automate your viral content creation with specialized UgcClaw AI agents.";
        } else if (url.includes('/macos-support')) {
          title = "NemoClaw macOS Support | Apple Silicon M1-M4 AI Setup Guide";
          desc = "NemoClaw macOS support for Apple Silicon (M1, M2, M3, M4). Install and run local AI agents with Metal Performance Shaders (MPS) for peak performance.";
          keywords = "NemoClaw Mac, macOS AI support, Apple Silicon AI agents, M1 M2 M3 M4 AI setup, Metal Performance Shaders, local LLM Mac, NVIDIA NemoClaw Mac, MPS acceleration";
        }

        // Clean up canonical to avoid double / with index.html
        const cleanPath = url === '/' ? '' : url.replace('/index.html', '');

        return html
          .replace(/<title>(.*?)<\/title>/, `<title>${title}</title>`)
          .replace(/<meta name="description" content="(.*?)" \/>/, `<meta name="description" content="${desc}" />`)
          .replace(/<meta name="keywords" content="(.*?)" \/>/, `<meta name="keywords" content="${keywords}" />`)
          .replace(/<link rel="canonical" href="(.*?)" \/>/, `<link rel="canonical" href="https://nemoclawaiapp.com${cleanPath}" />`)
          .replace(/<meta property="og:title" content="(.*?)" \/>/g, `<meta property="og:title" content="${title}" />`)
          .replace(/<meta property="og:description" content="(.*?)" \/>/g, `<meta property="og:description" content="${desc}" />`);
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
