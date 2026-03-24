import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import visionImg from "@/assets/vision-img.jpg";
import missionImg from "@/assets/mission-img.jpg";
import educationImg from "@/assets/education-img.jpg";

const cards = [
  {
    title: "Vision",
    description: "Every person lives with dignity and equal opportunity.",
    image: visionImg,
  },
  {
    title: "Mission",
    description:
      "Empower marginalized communities to break cycles of poverty by providing comprehensive nutrition, education, and health support that create sustainable pathways to economic independence.",
    image: missionImg,
  },
  {
    title: "Why Education?",
    description:
      "Education transforms lives and communities, but must be combined with holistic nutrition and health support. Education doesn't just change individual futures — it breaks generational cycles and builds stronger, more equitable communities.",
    image: educationImg,
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">About Rice Kids</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Over half a million lives touched
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            with an innovative model helping break the cycle of poverty. The unique approach relies on providing holistic support that removes all barriers so kids can remain in school and empowers the women in communities to drive scalable change. Established in 2018 to provide hot and nutritious meals, Anakh realized that simply feeding is not the solution and pivoted to focus on education for sustainable change. Working directly with children and youth, as well as through partnerships, we are helping kids remain in or return to mainstream education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
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
