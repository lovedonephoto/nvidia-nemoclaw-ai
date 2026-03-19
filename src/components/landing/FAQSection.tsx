import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is NemoClaw and how does NVIDIA Nemo Claw work?",
    answer:
      "NemoClaw (also known as NVIDIA Nemo Claw) is a GPU-accelerated AI agent platform built on NVIDIA Nemo. It deploys autonomous AI agents that reason, plan, and execute complex tasks using neural networks optimized for NVIDIA hardware.",
  },
  {
    question: "How do I install NVIDIA Nemo Claw on my Mac?",
    answer:
      "Our Setup Kit includes a dedicated 'NemoClaw Mac' installation script. It automates the environment setup for Apple Silicon (M1/M2/M3), handles GPU acceleration dependencies, and gets the core NemoClaw AI agents running on macOS in about 5 minutes.",
  },
  {
    question: "How do I install NemoClaw on Ubuntu or Docker?",
    answer:
      "The Premium Setup Kit provides one-command installation scripts for Ubuntu and pre-built Docker images. The toolkit automates CUDA driver setup, dependency resolution, and service configuration across all platforms.",
  },
  {
    question: "What is the difference between NemoClaw and OpenClaw?",
    answer:
      "OpenClaw is the open-source foundation. NemoClaw extends it with enterprise security, automated install scripts, ClawBot drag-and-drop builder, NVIDIA Nemotron integration, and professional deployment templates powered by our setup kit.",
  },
  {
    question: "What is OpenClaw AI and the Open Claw GitHub project?",
    answer:
      "Open Claw is the official open-source community project on GitHub. OpenClaw AI provides the core framework for building custom AI agents, with 12K+ GitHub stars and 200+ community plugins powering the ecosystem.",
  },
  {
    question: "What is NemoClaw ClawBot?",
    answer:
      "NemoClaw ClawBot is the bot-building framework that enables developers to create intelligent bots and autonomous AI agents with drag-and-drop tools — no deep ML expertise required. It runs on NVIDIA GPU infrastructure for real-time inference.",
  },
  {
    question: "What is NanoClaw and how does it relate to NemoClaw?",
    answer:
      "NanoClaw is the lightweight edge runtime for NemoClaw, designed for IoT devices, NVIDIA Jetson, and resource-constrained environments. It brings NemoClaw AI agent capabilities to edge computing with optimized inference.",
  },
  {
    question: "Can I use NemoClaw with NVIDIA Nemotron models?",
    answer:
      "Yes. NemoClaw has native integration with NVIDIA Nemotron models for enhanced reasoning and language understanding. You can also bring your own models (BYOM) and deploy them alongside built-in models.",
  },
  {
    question: "How does NemoClaw pricing work?",
    answer:
      "We offer a Premium Setup Kit for a one-time payment of $49.99, including automated installation scripts, security templates, and expert documentation to get your AI agents running securely in minutes.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about NemoClaw and our platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-panel rounded-xl px-6 border-border/40 hover:border-primary/20 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground font-display font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
