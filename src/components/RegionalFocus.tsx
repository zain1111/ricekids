import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const RegionalFocus = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-5xl mx-auto px-6 text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3"
        >
          Where We Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          Our Regional Focus
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          {["United States", "India"].map((region, i) => (
            <motion.div
              key={region}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card flex items-center gap-4 min-w-[200px]"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <p className="font-display text-xl font-bold text-foreground">{region}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-card rounded-2xl p-8 shadow-card"
        >
          <p className="font-display text-6xl font-bold text-gradient-warm mb-2">100%</p>
          <p className="font-body text-muted-foreground text-sm max-w-md mx-auto">
            Our operational costs are covered by private donors, so 100% of donations go directly to help those in need.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RegionalFocus;
