import { motion } from "framer-motion";

const comparisonData = [
  {
    feature: "Developer",
    openClaw: "Open-source community (created by Peter Steinberger)",
    nemoClaw: "Community Edition",
  },
  {
    feature: "Core Concept",
    openClaw: "A personal, always-on autonomous AI assistant framework.",
    nemoClaw: "A secure open-source stack and plugin used to run OpenClaw safely.",
  },
  {
    feature: "Target Audience",
    openClaw: "Individuals, developers, and hobbyists looking for personal desktop automation.",
    nemoClaw: "Enterprise users, IT departments, and businesses requiring strict data compliance.",
  },
  {
    feature: "Security & Privacy",
    openClaw: "Basic local storage; relies on the user to manually containerize the app to avoid third-party plugin vulnerabilities.",
    nemoClaw: "Enterprise-grade; uses OpenShell for isolated sandboxing, policy-based guardrails, and confidential computing.",
  },
  {
    feature: "Setup & Deployment",
    openClaw: "Highly flexible (runs on a VPS, Mac Mini, Raspberry Pi, etc.) but requires manual configuration of dependencies.",
    nemoClaw: "One-command installation via the Agent Toolkit; optimized for RTX PCs, DGX Stations, and the cloud.",
  },
  {
    feature: "Ecosystem Focus",
    openClaw: "Rapid customization, vibrant community plugins (Claw Hub), and personal app integrations (WhatsApp, Telegram, etc.).",
    nemoClaw: "Stability, data protection, scalable orchestration, and controlled model inference (like Nemotron models).",
  },
];

const VsTableSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-8">
            NemoClaw <span className="text-muted-foreground italic font-normal text-2xl mx-1 text-primary">vs.</span> OpenClaw
          </h2>
          
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            Here is a straightforward comparison between OpenClaw and the NemoClaw Toolkit. It is important to note that they aren't entirely separate competitors; rather, <strong className="text-foreground">OpenClaw</strong> is the core AI assistant, while <strong className="text-foreground">NemoClaw</strong> is an orchestration and security layer designed to run OpenClaw safely at an enterprise level.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="py-6 pr-6 font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider w-1/4">Feature</th>
                  <th className="py-6 px-6 font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider w-3/8">OpenClaw</th>
                  <th className="py-6 pl-6 font-display text-sm font-semibold text-primary uppercase tracking-wider w-3/8">NemoClaw (Toolkit)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, i) => (
                  <tr key={item.feature} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                    <td className="py-8 pr-6 font-bold text-foreground text-sm sm:text-base leading-snug">{item.feature}</td>
                    <td className="py-8 px-6 text-muted-foreground text-sm sm:text-base leading-relaxed">{item.openClaw}</td>
                    <td className="py-8 pl-6 text-foreground/90 text-sm sm:text-base leading-relaxed font-medium">{item.nemoClaw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VsTableSection;
