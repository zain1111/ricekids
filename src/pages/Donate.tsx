import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
const donateHeaderBg = "/images/donate-header.jpg";

const Donate = () => {
  const mainRef = useRef(null);
  const mainInView = useInView(mainRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Donate"
        breadcrumb="Donate"
        backgroundImage={donateHeaderBg}
      />

      {/* Main Donate Section */}
      <section className="py-24 bg-background" ref={mainRef}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={mainInView ? { opacity: 1, scale: 1 } : {}}
            className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center"
          >
            <Heart className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={mainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Make a Difference Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of donors who have helped Rice Kids serve the needy. No donation is too small. Please click on the link below to make your tax-exempt donation to us.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=DH3NT9K8M2JG6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-warm text-primary-foreground px-12 py-4 rounded-full font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-elevated"
            >
              Donate via PayPal
            </a>
          </motion.div>

          {/* Tax Exempt Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-2 font-body text-sm text-muted-foreground"
          >
            <Shield className="w-4 h-4 text-secondary" />
            <span>Rice Kids is a registered 501(c)(3) nonprofit. All donations are tax-deductible.</span>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
