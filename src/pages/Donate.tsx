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
              href="https://www.paypal.com/donate/?hosted_button_id=ricekids"
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

      {/* Campaign Progress */}
      <section className="py-24 bg-gradient-warm relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-foreground/5" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary-foreground/5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="font-body text-primary-foreground/70 text-sm uppercase tracking-wider mb-2">Current Campaign</p>
          <h3 className="font-display text-2xl md:text-4xl font-bold text-primary-foreground mb-8">
            Holistic Education Support for Kids
          </h3>
          <div className="max-w-md mx-auto bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex justify-between font-body text-sm text-primary-foreground/80 mb-3">
              <span>$48,000 raised</span>
              <span>$50,000 goal</span>
            </div>
            <div className="w-full bg-primary-foreground/20 rounded-full h-3">
              <div className="bg-primary-foreground h-3 rounded-full transition-all duration-1000" style={{ width: "96%" }} />
            </div>
            <p className="font-body text-primary-foreground/60 text-xs mt-3">96% of our goal reached</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
