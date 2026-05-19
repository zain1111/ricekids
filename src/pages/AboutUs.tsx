import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import visionImg from "@/assets/vision-img.jpg";
import missionImg from "@/assets/mission-img.jpg";
import educationImg from "@/assets/education-img.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const founderImage = "/images/IMG_0054-scaled-500x700.jpg";

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
                  Rice Kids is an initiative run by the Pranakh Foundation, founded by Anakh Sawhney when she was just 9 years old. The organization was born from a powerful realization: children facing poverty don't just need meals, they need pathways to education and opportunity.
                </p>
                <p>
                  Inspired by Sikhism's core principles of equality and selfless service, "Vand Chakhna" (to share what one has with others), Anakh began by mobilizing her family, friends, and neighbors to participate in local community service. But she quickly recognized a critical gap: most efforts provided temporary relief without addressing why children were dropping out of school or why families couldn't break cycles of poverty. In addition, almost all of these children were from minority and marginalized communities subjected to systemic discrimination.
                </p>
                <p>
                  This insight transformed Rice Kids from a simple food initiative into an integrated model designed for these communities that combines nutrition, education, and health and family support. By partnering with shelters, schools, community centers, and educational nonprofits, Rice Kids has evolved into a comprehensive approach that removes educational barriers and builds pathways to economic independence.
                </p>
                <p>
                  What started as local community drives has grown into a movement spanning five U.S. states and multiple regions in India, proving that sustainable change requires addressing interconnected challenges, not just feeding people today, but building their capacity for tomorrow.
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

      {/* What Drives Us - Two Column */}
      <section className="py-24 bg-background" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3"
          >
            What Drives Us
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={valuesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-muted/50 rounded-2xl p-8"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">
                Creating Pathways to Self-Sufficiency
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-sm">
                <p>
                  While numerous organizations work to address poverty, hunger, and education, Rice Kids recognized early that temporary relief doesn't solve the underlying problem. Children don't just need full stomachs; they need stable access to education, which is impossible when families are trapped in survival mode.
                </p>
                <p>
                  Our approach addresses what we call "opportunity poverty": the interconnected barriers that keep families locked in cycles of poverty. By ensuring children receive consistent support, we remove critical obstacles that force them out of classrooms and enable families to invest in education rather than just survival.
                </p>
                <p>
                  We work alongside partners to provide literacy programs, skills training, and health support, creating conditions where families can prioritize education and achieve economic independence. This integrated approach directly advances multiple UN Sustainable Development Goals: Quality Education, Reduced Inequalities, Zero Hunger, No Poverty, and Good Health & Well-being.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={valuesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-muted/50 rounded-2xl p-8"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">
                Building Communities of Impact
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-sm">
                <p>
                  Rice Kids operates through a network of over 300 local and international partnerships spanning five U.S. states and multiple regions in India. Our partners include educational nonprofits, schools, shelters, and community providers working together to advance educational equity and opportunity.
                </p>
                <p>
                  We work with local partners to ensure children receive consistent nutritional support while simultaneously providing access to literacy programs, skills training, and health services, creating opportunities to advance educational access.
                </p>
                <p>
                  Rice Kids is built on the belief that lasting change requires community champions. We engage volunteers of all ages, with a special focus on empowering women to become advocates within their communities. By partnering with community members, we're cultivating what we call "The Giving Generation": individuals who understand that they have the power to create positive change. This community-driven model ensures our work is culturally relevant, locally sustained, and capable of creating ripple effects that extend far beyond our direct reach.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">Get In Touch</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              We'd Love to Hear From You
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              Want to learn more, volunteer, or partner with us? Reach out and we'll get back to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  const name = formData.get("name");
                  const email = formData.get("email");
                  const message = formData.get("message");
                  window.location.href = `mailto:contact@ricekids.org?subject=Message from ${name}&body=${message}%0A%0AFrom: ${name} (${email})`;
                }}
                className="space-y-5"
              >
                <div>
                  <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-body font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-border space-y-3">
                <div className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:contact@ricekids.org" className="hover:text-foreground transition-colors">contact@ricekids.org</a>
                </div>
                <div className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Bernardsville, New Jersey, USA</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-card min-h-[400px]">
              <iframe
                title="Rice Kids Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24196.99663745!2d-74.59!3d40.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a3e3a7b3f3b7%3A0x1c2e3f4a5b6c7d8e!2sBernardsville%2C%20NJ!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
