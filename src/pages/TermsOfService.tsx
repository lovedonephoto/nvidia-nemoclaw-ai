import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-8 text-gradient-primary">Terms of Service</h1>
          
          <div className="glass-panel p-8 rounded-2xl border-primary/20 space-y-6 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. License Grant</h2>
              <p>
                By purchasing the NemoClaw Premium Setup Kit, you are granted a non-exclusive, non-transferable 
                license to use the automation scripts and documentation for your personal or internal business 
                projects. Redistribution or resale of these assets is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Digital Product Delivery</h2>
              <p>
                The product is delivered digitally via Polar.sh. Access is granted immediately after 
                payment confirmation. No physical products will be shipped.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Limitation of Liability</h2>
              <p>
                The toolkit is provided "as is". While we follow security best practices, we are not liable 
                for any data loss, server downtime, or system errors resulting from the use of these scripts 
                on your specific hardware or cloud infrastructure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Support Policy</h2>
              <p>
                Purchase includes 30 days of priority email support for issues specifically related to 
                the provided setup kit scripts and configurations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Termination</h2>
              <p>
                We reserve the right to terminate access to support if these terms are violated, 
                particularly regarding the unauthorized sharing of the kit assets.
              </p>
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

export default TermsOfService;
