import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, DollarSign, Users } from "lucide-react";

const stats = [
  { icon: Heart, value: "10k+", label: "Donations to feed hungry" },
  { icon: DollarSign, value: "$150k+", label: "Annually" },
  { icon: Users, value: "300+", label: "Partners" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-gradient-warm relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-foreground/5" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary-foreground/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-16"
        >
          Our Projects Are Powered By Grassroots Supporters Like You
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-foreground/15 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</p>
              <p className="font-body text-primary-foreground/80 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
