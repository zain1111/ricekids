import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Apple,
  BookOpen,
  Handshake,
  HeartPulse,
  Stethoscope,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heroImage = "/images/Rice-Kids-Classroom.jpg";
const donateUrl = "https://www.paypal.com/donate/?hosted_button_id=DH3NT9K8M2JG6";
const sponsorshipUrl =
  "mailto:teamricekids@gmail.com?subject=Corporate%20Sponsorship%20Inquiry%3A%20360%C2%B0%20Student%20Wellness%20%26%20Learning%20Program";

const pillars = [
  {
    icon: Apple,
    title: "Continuous Nutrition Support (Weekdays & Weekends)",
    intro:
      "Subsidized school lunches alone do not solve student food insecurity. Many children arrive at school having missed breakfast, experience afternoon energy depletion, or face acute hunger once school doors close on Friday afternoon.",
    items: [
      {
        title: "Weekday Nutrition Pantries",
        text: "High-protein snacks, whole fruits, and water stocked inside school guidance suites and counseling offices, providing immediate, stigma-free fuel during class hours.",
      },
      {
        title: "The Friday Weekend Bridge",
        text: "Discreet Friday distribution of take-home nutrition packs containing balanced shelf-stable proteins (beans, tuna, chicken), whole grains (rice, oats), shelf-stable milk, and fresh produce vouchers redeemable at local grocery stores to sustain families through Monday morning.",
      },
    ],
  },
  {
    icon: Stethoscope,
    title: "Clinical Follow-Up Access, Dental Care & Hygiene Relief",
    intro:
      "While schools conduct mandated annual health screenings, families often face steep financial and logistical hurdles turning a referral into treatment. We bridge the gap between initial assessment and actual care.",
    items: [
      {
        title: "Prescription Eyewear & Clinical Navigation",
        text: "Direct provision of free prescription eyewear vouchers and dedicated appointment coordination for students flagged with vision impairments.",
      },
      {
        title: "Asthma Care Coordination",
        text: "Direct linkage with local community clinics to ensure students with respiratory conditions secure maintenance inhalers, spacer devices, and personalized care action plans.",
      },
      {
        title: "Pediatric Oral Health Supplies",
        text: "Three seasonal distributions of complete oral health kits (brushes, fluoride toothpaste, flossers) alongside age-appropriate preventive education to prevent severe dental decay.",
      },
      {
        title: "Hygiene & Personal Dignity Kits",
        text: "Quarterly care packs containing deodorant, soap, dental essentials, menstrual care products, and laundry detergent pods so personal hygiene insecurity never keeps a student home from school.",
      },
    ],
  },
  {
    icon: BookOpen,
    title: "Dedicated Academic Tutoring",
    intro:
      "Focused academic interventions designed to close foundational learning gaps and build subject mastery:",
    items: [
      {
        title: "Small-Group Tutoring Labs",
        text: "Two 60-minute after-school sessions per week held at partner school sites and community centers, led by trained tutors focusing on reading comprehension, literacy fluency, and core mathematics.",
      },
      {
        title: "Classroom Toolkits",
        text: "Direct provision of grade-level reading books, notebooks, calculators, and instructional supplies to ensure every student has the tools required to complete coursework.",
      },
    ],
  },
  {
    icon: Users,
    title: "Near-Peer Mentorship",
    intro:
      "Academic progress accelerates when guided by relatable role models who understand student life:",
    items: [
      {
        title: "One-on-One Youth Pairing",
        text: "High school mentors matched with elementary and middle school students for weekly check-ins, goal tracking, and positive encouragement.",
      },
      {
        title: "Life Skills Workshops",
        text: "Practical, student-led workshops covering study organization, healthy daily routines, effective communication, and foundational financial literacy.",
      },
    ],
  },
];

const benchmarks = [
  {
    number: "2,000",
    title: "Students Reached",
    description:
      "Weekly food access, hygiene supplies, and wellness resources provided across four Title 1 Newark Public Schools.",
  },
  {
    number: "6,000",
    title: "Kits Distributed",
    description:
      "Three seasonal deliveries of comprehensive personal care and dental supplies to eliminate avoidable health-related absences.",
  },
  {
    number: "100%",
    title: "Care Follow-Through",
    description:
      "Guaranteed vouchers for prescription glasses and direct clinic navigation for students identified with unaddressed vision or chronic care needs.",
  },
  {
    number: "200+",
    title: "Tutoring Hours",
    description: "Focused small-group instruction in reading literacy and foundational mathematics.",
  },
  {
    number: "15–20%",
    title: "Absenteeism Drop",
    description:
      "Reduction in chronic absenteeism monitored directly against district attendance records across enrolled student cohorts.",
  },
];

const partners = [
  "Coalition for Healthy Food in Newark Schools",
  "Newark Trust for Education",
  "Community FoodBank of New Jersey",
  "United Community Corporation",
  "FoodCorps New Jersey",
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const StudentWellnessProgram = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative min-h-[640px] md:min-h-[720px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Students learning together in a classroom"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center pt-24 pb-16 px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block font-body text-xs md:text-sm uppercase tracking-[0.22em] font-semibold text-primary-foreground bg-primary-foreground/15 border border-primary-foreground/30 rounded-full px-4 py-2 mb-6"
          >
            District & Community Collaborative Program
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 leading-tight"
          >
            The 360° Student Wellness & Learning Program
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-body text-base md:text-lg text-primary-foreground/90 leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            An integrated model delivered in partnership with Newark Public Schools and five leading community partners.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mb-8"
          >
            <a
              href="#support"
              className="w-fit bg-gradient-warm text-primary-foreground px-6 py-3 sm:px-8 rounded-full font-body font-bold text-sm sm:text-base hover:opacity-90 transition-opacity shadow-elevated"
            >
              Support the Program
            </a>
            <a
              href="#pillars"
              className="w-fit border-2 border-primary-foreground/40 text-primary-foreground px-6 py-3 sm:px-8 rounded-full font-body font-bold text-sm sm:text-base hover:bg-primary-foreground/10 transition-colors"
            >
              Explore the Pillars
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 font-body text-sm text-primary-foreground/70 uppercase tracking-wider"
          >
            <Link to="/" className="hover:text-primary-foreground transition-colors">
              Homepage
            </Link>
            <span>›</span>
            <Link to="/projects" className="hover:text-primary-foreground transition-colors">
              Projects
            </Link>
            <span>›</span>
            <span className="truncate max-w-[220px] sm:max-w-none">360° Student Wellness</span>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div {...fadeUp} className="lg:col-span-7">
            <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              Context
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              The Challenge in Newark Classrooms
            </h2>
            <p className="font-body text-lg leading-relaxed text-muted-foreground mb-6">
              When students face basic physiological and health barriers, attendance drops and academic progress stalls. Across Newark Public Schools, more than 70% of health-related absences stem from treatable health conditions—including unmanaged chronic issues like asthma, unaddressed dental pain, and vision impairment—alongside chronic nutrition gaps throughout the week and over weekends.
            </p>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              Children cannot focus on reading or mathematics when dealing with physical discomfort or an empty stomach. The 360° Student Wellness & Learning Program operates within schools and local community learning hubs to systematically eliminate these obstacles, connecting students with continuous nutrition, clinical follow-up care, essential hygiene supplies, academic tutoring, and near-peer mentorship.
            </p>
          </motion.div>
          <motion.aside
            {...fadeUp}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 bg-card rounded-2xl shadow-card border border-border p-8 md:p-10"
          >
            <HeartPulse className="w-10 h-10 text-primary mb-5" />
            <p className="font-display text-5xl md:text-6xl font-bold text-primary mb-3">70%+</p>
            <p className="font-display text-xl font-bold text-foreground mb-4 leading-snug">
              of health-related absences come from treatable conditions
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Asthma, dental pain, vision impairment, and nutrition gaps keep students out of class. This program removes those barriers inside schools and community learning hubs.
            </p>
          </motion.aside>
        </div>
      </section>

      <section id="pillars" className="py-24 bg-muted scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-14">
            <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              Four Core Pillars
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              What the Program Delivers
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <motion.article
                key={pillar.title}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl shadow-card border border-border p-7 md:p-8"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-accent flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-1">
                      Pillar {i + 1}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-snug">
                      {pillar.title}
                    </h3>
                  </div>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">{pillar.intro}</p>
                <ul className="space-y-4">
                  {pillar.items.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-2 w-2 h-2 shrink-0 rounded-full bg-primary" />
                      <div>
                        <p className="font-body font-semibold text-foreground">{item.title}</p>
                        <p className="font-body text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-14">
            <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              12-Month Outcomes
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Measurable Impact Benchmarks
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {benchmarks.map((metric, i) => (
              <motion.div
                key={metric.title}
                {...fadeUp}
                transition={{ delay: i * 0.06 }}
                className={`bg-card rounded-2xl shadow-card border border-border p-7 lg:col-span-2 ${
                  i === 3 ? "lg:col-start-2" : ""
                }`}
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-3">
                  {metric.number}
                </p>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{metric.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-14">
            <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              Collaboration
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Our Community Partners
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {partners.map((name, i) => (
              <motion.div
                key={name}
                {...fadeUp}
                transition={{ delay: i * 0.06 }}
                className="bg-card rounded-2xl shadow-card border border-border p-6 text-center flex flex-col items-center justify-center min-h-[160px]"
              >
                <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center mb-4">
                  <Handshake className="w-5 h-5 text-primary" />
                </div>
                <p className="font-display text-base font-bold text-foreground leading-snug">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="py-24 bg-gradient-warm relative overflow-hidden scroll-mt-24">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-foreground/5" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary-foreground/5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeUp}>
            <p className="font-body text-sm uppercase tracking-[0.25em] text-primary-foreground font-semibold mb-3">
              Budget & Support
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-8">
              Support the Program
            </h2>
            <p className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-2">$200,000</p>
            <p className="font-body text-primary-foreground/85 uppercase tracking-[0.18em] text-sm font-semibold mb-8">
              Annual Program Operating Budget
            </p>
            <p className="font-body text-lg text-primary-foreground/90 leading-relaxed mb-4">
              100% of funding directly supports food procurement, clinic care coordination, hygiene kits, and academic supplies across four Newark school communities for the entire academic year.
            </p>
            <p className="font-body text-lg text-primary-foreground/90 leading-relaxed mb-10">
              Every dollar contributed delivers direct, tangible relief into the hands of Newark students, ensuring they have the health stability, daily nourishment, and academic encouragement needed to succeed in school.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
              <a
                href={donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit bg-primary-foreground text-primary px-6 py-3 sm:px-8 rounded-full font-body font-bold text-sm sm:text-base hover:opacity-90 transition-opacity shadow-elevated"
              >
                Donate to the 360° Program
              </a>
              <a
                href={sponsorshipUrl}
                className="w-fit border-2 border-primary-foreground/40 text-primary-foreground px-6 py-3 sm:px-8 rounded-full font-body font-bold text-sm sm:text-base hover:bg-primary-foreground/10 transition-colors"
              >
                Inquire About Corporate Sponsorship
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentWellnessProgram;
