import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "285M", text: "children denied education globally" },
  { number: "828M", text: "people facing hunger daily" },
  { number: "617M", text: "young people lacking basic literacy" },
];

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
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          A Global Emergency
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {stats.map((item, i) => (
            <div key={i} className="bg-accent rounded-2xl p-8">
              <p className="font-display text-4xl font-bold text-gradient-warm mb-2">
                {item.number}
              </p>
              <p className="font-body text-muted-foreground text-sm">{item.text}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="bg-card rounded-2xl p-6 md:p-8 shadow-card max-w-4xl mx-auto flex flex-col sm:flex-row gap-6 items-center sm:items-start text-left"
        >
          <div className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-sm ring-1 ring-border/50">
            <img
              src="/images/crisis-child-portrait.png"
              alt="Child affected by poverty and lack of access to education"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
            With 285 million children denied education globally and 828 million people facing hunger daily, the intersection of educational barriers and malnutrition traps entire generations in poverty, preventing 617 million young people from acquiring even basic literacy and math skills. Not surprisingly, almost all these kids are from minority communities, systemically discriminated against because of their race, caste, gender, or economic status.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CrisisSection;
