import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is this Setup Kit for NemoClaw?",
    answer:
      "This is a premium automation toolkit designed to help developers and enterprises install, secure, and optimize NVIDIA's open-source NemoClaw platform. It provides tested scripts and security templates that reduce setup time from hours to minutes.",
  },
  {
    question: "What types of data can NemoClaw process?",
    answer:
      "NemoClaw supports a wide range of data types including structured databases, unstructured text, images, audio streams, real-time API feeds, and cloud storage. Our multi-model orchestration allows you to combine different AI models for complex, multi-modal workflows.",
  },
  {
    question: "Is this toolkit suitable for production use?",
    answer:
      "Yes. Our templates include zero-trust architecture recommendations and sandbox configurations specifically designed to help you secure NemoClaw agents in professional environments.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "We offer a single high-value 'Premium Setup Kit' for a one-time payment of $49.99. This kit includes automated installation scripts, security policy templates, and comprehensive documentation to get your AI agents running securely in minutes.",
  },
  {
    question: "Can I bring my own AI models to NemoClaw?",
    answer:
      "Yes. NemoClaw supports bring-your-own-model (BYOM) workflows. You can upload custom models, fine-tune pre-trained models with your own data, and deploy them alongside our built-in models — all through a simple API or web interface.",
  },
  {
    question: "What kind of support does NemoClaw offer?",
    answer:
      "Starter users get access to community support and documentation. Pro users receive priority email and chat support. Enterprise customers get 24/7 dedicated support with SLA guarantees, a dedicated success manager, and custom onboarding.",
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
