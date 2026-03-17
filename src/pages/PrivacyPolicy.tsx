import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-8 text-gradient-primary">Privacy Policy</h1>
          
          <div className="glass-panel p-8 rounded-2xl border-primary/20 space-y-6 text-muted-foreground leading-relaxed">
            <p>At Nemo Claw Setup (nemoclawaiapp.com), we respect your privacy and are committed to protecting your personal data.</p>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                When you purchase the NemoClaw Premium Setup Kit, we collect information through our payment processor, Polar.sh. 
                This includes your email address and payment confirmation details. We do not store your credit card information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>
                We use your email address solely to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Deliver the digital assets and download links.</li>
                <li>Provide technical support for the setup kit.</li>
                <li>Send critical updates regarding the scripts or templates.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Data Security</h2>
              <p>
                We implement security measures to protect your information. Your purchase data is processed 
                securely by Polar.sh, following industry-standard encryption and security protocols.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Cookies</h2>
              <p>
                Our landing page uses minimal cookies necessary for the website's functionality and to analyze 
                traffic to improve our user experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:soylamistugce@gmail.com" className="text-primary hover:underline">soylamistugce@gmail.com</a>
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

export default PrivacyPolicy;
