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
        
        let title = "NemoClaw | NVIDIA Nemo Claw Install Setup AI";
        let desc = "Professional setup and installation for NVIDIA Nemo Claw. Install NemoClaw, deploy OpenClaw AI agents, GPU accelerated infrastructure.";
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
