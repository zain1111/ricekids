import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Shield, Users, HandHeart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import heroBg from "@/assets/hero-bg.jpg";

const Donate = () => {
  const mainRef = useRef(null);
  const mainInView = useInView(mainRef, { once: true, margin: "-80px" });
  const waysRef = useRef(null);
  const waysInView = useInView(waysRef, { once: true, margin: "-80px" });
  const impactRef = useRef(null);
  const impactInView = useInView(impactRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Donate"
        breadcrumb="Donate"
        backgroundImage={heroBg}
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

      {/* Ways to Give */}
      <section className="py-24 bg-muted/50" ref={waysRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={waysInView ? { opacity: 1, y: 0 } : {}}
              className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3"
            >
              Ways to Give
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={waysInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-4xl font-bold text-foreground"
            >
              Every Contribution Counts
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "One-Time Donation",
                description: "Make a one-time tax-deductible gift of any amount through our secure PayPal portal. Every dollar helps provide meals, education materials, and health support to children in need.",
              },
              {
                icon: Users,
                title: "Monthly Giving",
                description: "Become a sustaining donor with a recurring monthly gift. Consistent support helps us plan ahead and ensure children receive uninterrupted nutrition and educational support.",
              },
              {
                icon: HandHeart,
                title: "Corporate & Group Giving",
                description: "Partner with Rice Kids through corporate sponsorships, matching gift programs, or group fundraising. Contact us to explore how your organization can make a lasting impact.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={waysInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-500"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-background" ref={impactRef}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3"
          >
            Your Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12"
          >
            Where Your Donation Goes
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Nutrition Programs", value: "40%" },
              { label: "Education Support", value: "30%" },
              { label: "Health Services", value: "20%" },
              { label: "Operations", value: "10%" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={impactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-muted/50 rounded-2xl p-6"
              >
                <p className="font-display text-3xl font-bold text-primary mb-2">{item.value}</p>
                <p className="font-body text-muted-foreground text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      Footer />
    </div>
  );
};

export default Donate;
