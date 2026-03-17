import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect Your Data",
    description: "Plug in any data source — databases, APIs, cloud storage, or real-time streams.",
  },
  {
    number: "02",
    title: "Configure Your Models",
    description: "Choose from pre-trained models or bring your own. Fine-tune with a few clicks.",
  },
  {
    number: "03",
    title: "Deploy & Scale",
    description: "One-click deployment to global infrastructure. Auto-scales with your demand.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4">
            Three Steps to <span className="text-gradient-primary">Intelligence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Go from raw data to production-ready AI in minutes, not months.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="text-6xl font-display font-bold text-primary/10 mb-4">
                {step.number}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
