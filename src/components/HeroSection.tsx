import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  image: string;
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  cta?: { label: string; href: string };
  align?: "center" | "left";
};

const slides: Slide[] = [
  {
    image:
      "https://www.ricekids.org/wp-content/uploads/2025/09/IMG_0005-bg-scaled.jpg",
    eyebrow: "Creating Pathways from Poverty to Prosperity",
    title: (
      <>
        <span className="text-gradient-warm">Enabling pathways</span> from
        poverty to prosperity
      </>
    ),
    subtitle: "via education for marginalized communities",
    cta: {
      label: "Donate Now",
      href: "https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID",
    },
    align: "center",
  },
  {
    image:
      "https://www.ricekids.org/wp-content/uploads/2025/11/Featured-on-2.png",
    eyebrow: "FEATURED ON",
    title: (
      <>
        Anakh Sawhney becomes youngest
        <br />
        NJBiz 40 Under 40 honoree
      </>
    ),
    cta: {
      label: "Read Full Story",
      href: "https://www.newindiaabroad.com/english/people/anakh-sawhney-becomes-youngest-njbiz-40-under-40-honoree",
    },
    align: "left",
  },
  {
    image:
      "https://www.ricekids.org/wp-content/uploads/2025/09/maxresdefault.jpg",
    title: <>Watch our story</>,
    subtitle: "Over half a million lives touched through education & nutrition",
    cta: {
      label: "Watch Video",
      href: "https://www.youtube.com/watch?v=53QXRJyFz-s",
    },
    align: "center",
  },
  {
    image:
      "https://www.ricekids.org/wp-content/uploads/2025/11/Featured-on-3.png",
    eyebrow: "FEATURED ON",
    title: (
      <>
        Teen founder Anakh Sawhney tackles
        <br />
        ‘opportunity poverty’ through integrated
        <br />
        nutrition–education model
      </>
    ),
    cta: {
      label: "Read Full Story",
      href: "https://etedge-insights.com/resources/brands-speak/teen-founder-anakh-sawhney-tackles-opportunity-poverty-through-integrated-nutrition-education-model/",
    },
    align: "left",
  },
  {
    image:
      "https://www.ricekids.org/wp-content/uploads/2025/10/Featured-on-1-1.png",
    eyebrow: "FEATURED ON",
    title: (
      <>
        Rice Kids Expands Education
        <br />
        And Nutrition Support In India
      </>
    ),
    cta: {
      label: "Read Full Story",
      href: "https://thecsruniverse.com/articles/rice-kids-expands-education-and-nutrition-support-in-india",
    },
    align: "left",
  },
  {
    image:
      "https://www.ricekids.org/wp-content/uploads/2026/01/Featured-on.png",
    eyebrow: "FEATURED ON",
    title: (
      <>
        Meet The Bernardsville Teen
        <br />
        Tackling Poverty Since Age 9
      </>
    ),
    cta: {
      label: "Read Full Story",
      href: "https://www.ricekids.org/wp-content/uploads/2025/10/Meet-The-Bernardsville-Teen-Tackling-Poverty-Since-Age-9.pdf",
    },
    align: "left",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  const slide = slides[index];
  const alignLeft = slide.align === "left";

  return (
    <section
      id="home"
      className="relative h-[75vh] min-h-[560px] flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-6xl mx-auto px-6 pt-20 ${
          alignLeft ? "text-left" : "text-center"
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
            className={alignLeft ? "max-w-3xl" : "max-w-4xl mx-auto"}
          >
            {slide.eyebrow && (
              <p className="font-body text-primary-foreground/80 text-sm uppercase tracking-[0.3em] font-semibold mb-6">
                {slide.eyebrow}
              </p>
            )}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                {slide.subtitle}
              </p>
            )}
            {slide.cta && (
              <div
                className={`flex flex-col sm:flex-row gap-4 ${
                  alignLeft ? "justify-start" : "justify-center"
                }`}
              >
                <a
                  href={slide.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-warm text-primary-foreground px-10 py-4 rounded-full font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-elevated"
                >
                  {slide.cta.label}
                </a>
                {index === 0 && (
                  <a
                    href="#about"
                    className="border-2 border-primary-foreground/40 text-primary-foreground px-10 py-4 rounded-full font-body font-bold text-lg hover:bg-primary-foreground/10 transition-colors"
                  >
                    Learn More
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground flex items-center justify-center hover:bg-background/40 transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground flex items-center justify-center hover:bg-background/40 transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-8 bg-primary"
                : "w-2.5 bg-primary-foreground/50 hover:bg-primary-foreground/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
