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
        
        let title = "Nemo Claw AI | NVIDIA NemoClaw Install Setup";
        let desc = "Nemo Claw AI: Install NVIDIA NemoClaw with our setup guide. Compare NemoClaw vs OpenClaw & OpenShell. Get the latest code via our GitHub repository.";
        let keywords = "NemoClaw, NVIDIA NemoClaw, Nemo Claw, NVIDIA Nemo Claw, OpenClaw, Open Claw, NemoClaw AI, NemoClaw install, NemoClaw setup, AI agents, GPU accelerated, NVIDIA Nemo";

        if (url.includes('/install-nemoclaw')) {
          title = "Install NemoClaw | NVIDIA AI Agent Setup Guide";
          desc = "Step-by-step guide to Install NemoClaw. Automated setup for NVIDIA GPUs, Mac Apple Silicon, and enterprise Linux servers.";
          keywords = "Install NemoClaw, NVIDIA AI Setup, NemoClaw v1.4, GPU Configuration";
        } else if (url.includes('/nemoclaw-setup')) {
          title = "NemoClaw Setup | Optimized AI Agent Configuration Guide";
          desc = "Professional NemoClaw Setup guide. Configure NemoClaw for NVIDIA GPUs, set up API keys, and optimize your local AI agent env.";
          keywords = "NemoClaw Setup, AI Agent Configuration, NVIDIA NIM Setup, GPU Tuning";
        } else if (url.includes('/openshell')) {
          title = "NemoClaw OpenShell | Secure AI-Augmented Terminal Engine";
          desc = "Experience NemoClaw OpenShell: The ultimate AI-powered system terminal for NVIDIA hardware. Context-aware OS commands.";
          keywords = "NemoClaw OpenShell, AI Terminal, NVIDIA OpenShell, Secure AI Terminal";
        } else if (url.includes('/nemoclaw-vs-openclaw')) {
          title = "NemoClaw vs OpenClaw | Detailed AI Agent Comparison";
          desc = "Compare NemoClaw and OpenClaw. Discover the key differences in GPU optimization, security protocols, and reasoning performance.";
          keywords = "NemoClaw vs OpenClaw, AI Agent Comparison, NVIDIA vs OpenSource AI";
        } else if (url.includes('/neoclaw')) {
          title = "NeoClaw Protocol | Next-Generation AI Agent Communication";
          desc = "Explore the NeoClaw protocol for decentralized AI agent swarms. High-bandwidth communication for multi-agent systems.";
          keywords = "NeoClaw, AI Protocols, Distributed AI, Agent Swarms";
        } else if (url.includes('/nvidia-nemotron-3-super')) {
          title = "NVIDIA Nemotron 3 Super | AI Reasoning & Agentic Models";
          desc = "Learn about the NVIDIA Nemotron 3 Super model. Mamba-Transformer architecture with 1M token context window for deep reasoning.";
          keywords = "Nemotron 3 Super, NVIDIA Nemotron, Mamba Architecture, 1M Context Window";
        } else if (url.includes('/ai-agents')) {
          title = "NemoClaw AI Agents Ecosystem Deployment Guide";
          desc = "Discover the NemoClaw AI Agents Ecosystem. Deploy specialized PicoClaw, ZeroClaw, KimiClaw, and OpenClaw agents for your enterprise AI infrastructure today.";
          keywords = "PicoClaw, ZeroClaw, KimiClaw, OpenClaw, AI Agents, NemoClaw Deployment, Autonomous Agents";
        } else if (url.includes('/picoclaw')) {
          title = "PicoClaw: Ultra-Fast Lightweight Autonomous Edge Agent";
          desc = "Deploy PicoClaw, the ultra-fast lightweight AI agent. Sub-millisecond reasoning for edge devices and mobile hardware. Optimized for Apple Silicon M4.";
          keywords = "PicoClaw, Edge AI, Lightweight Agent, NVIDIA Nemo, Mobile AI Deployment";
        } else if (url.includes('/zeroclaw')) {
          title = "ZeroClaw: Minimalist Zero-Configuration Serverless Agent";
          desc = "Deploy ZeroClaw, the minimalist zero-configuration AI agent. Hardened security, auto-GPU mapping, and serverless ready for enterprise clusters today.";
          keywords = "ZeroClaw, Zero-Config AI, Serverless Agents, Docker AI, Secure Autonomous Agent";
        } else if (url.includes('/kimiclaw')) {
          title = "KimiClaw: Advanced 1M Context Reasoning AI Agent";
          desc = "Deploy KimiClaw, the advanced reasoning AI agent with 1M token context window. Specialized for multi-step planning and deep logical analysis tasks.";
          keywords = "KimiClaw, Deep Reasoning Agent, 1M Context Window, Strategic AI, Multi-step Planning";
        } else if (url.includes('/openclaw')) {
          title = "OpenClaw: Flexible Open-Source Multi-LLM Research Agent";
          desc = "Deploy OpenClaw, the flexible open-source AI agent. Multi-LLM support, plug-and-play modules, and community templates for research and development.";
          keywords = "OpenClaw, Open Source AI, Multi-LLM, AI Research, Plug-and-play Agents";
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
