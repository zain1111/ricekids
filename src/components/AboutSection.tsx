import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield } from "lucide-react";
const cards = [
  {
    title: "Vision",
    description:
      "Eliminate structural poverty by 2040 via education and holistic support.",
    image: "/images/IMG_9999-scaled.jpg",
  },
  {
    title: "Mission",
    description:
      "Break the cycle of poverty by providing education access and holistic support, including nutrition, health, and family resources, and empower local communities to scale and expand impact.",
    image: "/images/Newark-School-scaled.jpg",
  },
  {
    title: "Why Education?",
    description:
      "Education transforms lives and communities, but must be combined with holistic nutrition and health support. Education doesn't just change individual futures — it breaks generational cycles and builds stronger, more equitable communities.",
    image: "/images/Rice-Kids-Why-Education-1-scaled.jpg",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">About Rice Kids</p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug mb-6">
              Over half a million lives touched with an innovative model that break the cycle of poverty.
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              The unique approach relies on providing holistic support that removes all barriers so kids can remain in school and empowers the women in communities to drive scalable change. Established in 2018 to provide hot and nutritious meals, Anakh realized that simply feeding is not the solution and pivoted to focus on education for sustainable change. Working directly with children and youth, as well as through partnerships, we are helping kids remain in or return to mainstream education.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-card aspect-video"
          >
            <iframe
              src="https://www.youtube.com/embed/vR7fLui_UIY"
              title="Anakh Sawhney: Rice Kids Creating Pathways From Poverty to Prosperity Via Education"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 mb-8 flex items-center justify-center gap-2 font-body text-base md:text-lg text-primary text-center max-w-3xl mx-auto"
        >
          <Shield className="w-5 h-5 text-primary flex-shrink-0" />
          <span>
            Rice Kids is tax-exempt under the IRS 501(c)(3) classification. All donations are tax-exempt.
          </span>
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{card.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
