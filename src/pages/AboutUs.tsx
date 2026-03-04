import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import visionImg from "@/assets/vision-img.jpg";
import missionImg from "@/assets/mission-img.jpg";
import educationImg from "@/assets/education-img.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const founderImage = "https://www.ricekids.org/wp-content/uploads/2025/10/IMG_0054-scaled-500x700.jpg";

const AboutUs = () => {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="About Us"
        breadcrumb="About Us"
        backgroundImage={heroBg}
      />

      {/* How We Started */}
      <section className="py-24 bg-background" ref={storyRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={founderImage}
                  alt="Anakh Sawhney, Founder of Rice Kids"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-warm rounded-2xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">Our Story</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">How We Started</h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Rice Kids is an initiative run by the Pranakh Foundation, founded by Anakh Sawhney when she was just 9 years old. The organization was born from a powerful realization: children facing poverty don't just need meals — they need pathways to education and opportunity.
                </p>
                <p>
                  Inspired by Sikhism's core principles of equality and selfless service, "Vand Chakhna" (to share what one has with others), Anakh began by mobilizing her family, friends, and neighbors to participate in local community service.
                </p>
                <p>
                  She quickly recognized a critical gap: most efforts provided temporary relief without addressing why children were dropping out of school or why families couldn't break cycles of poverty. This insight transformed Rice Kids from a simple food initiative into an integrated nutrition-education model.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Why Education */}
      <section className="py-24 bg-muted/50" ref={cardsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vision",
                description: "Every person lives with dignity and equal opportunity.",
                image: visionImg,
              },
              {
                title: "Mission",
                description: "Empower marginalized communities to break cycles of poverty by providing comprehensive nutrition, education, and health support that create sustainable pathways to economic independence.",
                image: missionImg,
              },
              {
                title: "Why Education?",
                description: "Education transforms lives and communities, but must be combined with holistic nutrition and health support. Education doesn't just change individual futures — it breaks generational cycles and builds stronger, more equitable communities.",
                image: educationImg,
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
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

      {/* Values */}
      <section className="py-24 bg-background" ref={valuesRef}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3"
          >
            What Drives Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12"
          >
            Creating Pathways to Self-Sufficiency
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Holistic Support",
                desc: "We address nutrition, education, and health together — because tackling one without the others doesn't break the cycle.",
              },
              {
                title: "Community Empowerment",
                desc: "We empower women in communities to drive scalable change, building lasting impact from within.",
              },
              {
                title: "Youth Leadership",
                desc: "Founded by a young changemaker, we believe young people have the power to create transformative solutions.",
              },
              {
                title: "Building Communities of Impact",
                desc: "Through partnerships and grassroots action, we build networks of support that multiply our reach and effectiveness.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-accent rounded-2xl p-8 text-left"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Get In Touch
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg mb-8">
            Want to learn more, volunteer, or partner with us? We'd love to hear from you.
          </p>
          <a
            href="mailto:contact@ricekids.org"
            className="inline-block bg-primary-foreground text-primary px-10 py-4 rounded-full font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-elevated"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
