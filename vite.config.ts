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
        
        let title = "Nemo Claw AI | NemoClaw Install Setup";
        let desc = "Nemo Claw AI: Install NemoClaw with our setup guide. Compare NemoClaw vs OpenClaw & OpenShell. Get the latest code via our GitHub repository.";
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
