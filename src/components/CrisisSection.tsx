import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DONATE_URL =
  "https://www.paypal.com/donate/?hosted_button_id=DH3NT9K8M2JG6";

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
      <div className="max-w-6xl mx-auto px-6 text-center" ref={ref}>
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
          className="bg-card rounded-2xl p-6 md:p-10 shadow-card max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start text-left"
        >
          <div className="flex-shrink-0 w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-card ring-1 ring-border/50">
            <img
              src="/images/crisis-child-portrait.png"
              alt="Child affected by poverty and lack of access to education"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              With 285 million children denied education globally and 828 million people facing hunger daily, the intersection of educational barriers and malnutrition traps entire generations in poverty, preventing 617 million young people from acquiring even basic literacy and math skills. Not surprisingly, almost all these kids are from minority communities, systemically discriminated against because of their race, caste, gender, or economic status.
            </p>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-warm text-primary-foreground px-8 py-3 rounded-full font-body font-bold text-base hover:opacity-90 transition-opacity shadow-elevated"
            >
              Donate Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CrisisSection;
