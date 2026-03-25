import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const DonateSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="donate" className="py-24 bg-gradient-warm relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-foreground/5" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary-foreground/5" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          className="w-16 h-16 mx-auto mb-6 bg-primary-foreground/15 rounded-2xl flex items-center justify-center"
        >
          <Heart className="w-8 h-8 text-primary-foreground" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          Donate
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-body text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto"
        >
          Join thousands of donors who have helped Rice Kids serve the needy. No donation is too small. Please click on the link below to make your tax-exempt donation to us.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=ricekids"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground text-primary px-10 py-4 rounded-full font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-elevated"
          >
            Donate Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8"
        >
          <p className="font-body text-primary-foreground/70 text-sm uppercase tracking-wider mb-2">Current Campaign</p>
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
            Holistic Education Support for Kids
          </h3>
          <div className="max-w-md mx-auto">
            <div className="flex justify-between font-body text-sm text-primary-foreground/80 mb-2">
              <span>$48,000 raised</span>
              <span>$50,000 goal</span>
            </div>
            <div className="w-full bg-primary-foreground/20 rounded-full h-3">
              <div className="bg-primary-foreground h-3 rounded-full" style={{ width: "96%" }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonateSection;
