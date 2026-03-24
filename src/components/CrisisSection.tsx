import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CrisisSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3"
        >
          The Crisis
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8"
        >
          A Global Emergency
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "285M", text: "children denied education globally" },
            { number: "828M", text: "people facing hunger daily" },
            { number: "617M", text: "young people lacking basic literacy" },
          ].map((item, i) => (
            <div key={i} className="bg-accent rounded-2xl p-8">
              <p className="font-display text-4xl font-bold text-gradient-warm mb-2">{item.number}</p>
              <p className="font-body text-muted-foreground text-sm">{item.text}</p>
            </div>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="font-body text-muted-foreground mt-8 max-w-3xl mx-auto leading-relaxed"
        >
          With 285 million children denied education globally and 828 million people facing hunger daily, the intersection of educational barriers and malnutrition traps entire generations in poverty, preventing 617 million young people from acquiring even basic literacy and math skills. Not surprisingly, almost all these kids are from minority communities, systemically discriminated against because of their race, caste, gender, or economic status.
        </motion.p>
      </div>
    </section>
  );
};

export default CrisisSection;
