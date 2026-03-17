import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

const RefundPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-16 px-4 container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-8 text-gradient-primary">Refund Policy</h1>
          
          <div className="glass-panel p-8 rounded-2xl border-primary/20 space-y-6 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Digital Products Policy</h2>
              <p>
                Due to the nature of digital products, all sales of the NemoClaw Premium Setup Kit are final. 
                Once you have gained access to the digital assets (scripts, templates, and documentation) 
                via download or email delivery, we cannot offer a refund.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Exceptions</h2>
              <p>
                Refunds may only be considered under the following circumstances:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Double payment for the same product due to a technical error in the payment system.</li>
                <li>Failure to deliver the product access even after 48 hours of successful payment confirmation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Technical Support</h2>
              <p>
                We stand behind the quality of our setup kit. If you experience technical difficulties 
                setting up the environment using our scripts, please reach out to our priority support 
                team. We are committed to helping you get your AI agents running successfully.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. How to Request Help</h2>
              <p>
                If you encounter any issues or believe you qualify for an exception, please contact us 
                within 14 days of purchase at:
              </p>
              <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10 inline-block">
                <a 
                  href="mailto:soylamistugce@gmail.com" 
                  className="text-primary font-medium hover:underline"
                >
                  soylamistugce@gmail.com
                </a>
              </div>
            </section>

            <div className="pt-6 border-t border-border/40 text-sm italic">
              Last updated: March 17, 2026
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default RefundPolicy;
