import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Setup Kit",
    price: "$49.99",
    period: "one-time",
    description: "Expert setup toolkit & automation scripts",
    features: [
      "Automated Install Script (.sh)",
      "Security Policy Templates",
      "Hardening Guide (PDF)",
      "2 Pre-configured Blueprints",
      "Ready-to-use Docker configs",
      "30-Day Priority Support Ticket"
    ],
    cta: "Get Setup",
    featured: true,
    url: "https://buy.polar.sh/polar_cl_iOIqgNKmid5LFFmMwu56jM4gUWGjD5HlkAIyQ2xo12N"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4">
            Simple, Transparent <span className="text-gradient-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get your AI agents running securely with our professional automation kit.
          </p>
        </motion.div>

        <div className="flex justify-center max-w-5xl mx-auto">
          <div className="w-full max-w-md">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl p-6 flex flex-col ${
                  plan.featured
                    ? "glass-panel border-primary/40 glow-sm relative"
                    : "glass-panel"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-display font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.featured ? "hero" : "hero-outline"} 
                  className="w-full"
                  onClick={() => plan.url && window.open(plan.url, '_blank')}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
