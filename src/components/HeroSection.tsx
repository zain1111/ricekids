import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { studentWellnessProjectSlug } from "@/data/projects";

type SlideCta = { label: string; href: string };

type Slide = {
  image: string;
  imagePosition?: "top" | "center" | "bottom";
  eyebrow?: string;
  logo?: string;
  title: React.ReactNode;
  titleClassName?: string;
  subtitle?: React.ReactNode;
  subtitleClassName?: string;
  cta?: SlideCta;
  secondaryCta?: SlideCta;
  align?: "center" | "left";
  overlay?: boolean | "strong";
};

const primaryBtn =
  "w-fit bg-gradient-warm text-primary-foreground px-5 py-2.5 sm:px-8 sm:py-3 rounded-full font-body font-bold text-sm sm:text-base hover:opacity-90 transition-opacity shadow-elevated";
const secondaryBtn =
  "w-fit border-2 border-primary-foreground/40 text-primary-foreground px-5 py-2.5 sm:px-8 sm:py-3 rounded-full font-body font-bold text-sm sm:text-base hover:bg-primary-foreground/10 transition-colors";

const CtaLink = ({ href, label, className }: SlideCta & { className: string }) => {
  const isExternal = /^(https?:|mailto:)/.test(href) || href.startsWith("/docs/");
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link to={href} className={className}>
      {label}
    </Link>
  );
};

const slides: Slide[] = [
  {
    image: "/images/Rice-Kids-Classroom.jpg",
    overlay: "strong",
    title: (
      <>
        Flagship Program:
        <br />
        The 360 Student Wellness & Learning
      </>
    ),
    subtitle: "Delivered in partnership with Newark Public Schools and five leading community partners.",
    subtitleClassName: "text-lg sm:text-xl md:text-2xl",
    cta: {
      label: "About The Program",
      href: `/projects/${studentWellnessProjectSlug}`,
    },
    align: "center",
  },
  {
    image:
      "/images/IMG_0005-bg-scaled.jpg",
    title: (
      <>
        <span className="block">
          <span className="text-gradient-warm">Enabling pathways</span> from poverty to prosperity via education
        </span>
        <span className="block">for marginalized communities</span>
      </>
    ),
    cta: {
      label: "Donate Now",
      href: "https://www.paypal.com/donate/?hosted_button_id=DH3NT9K8M2JG6",
    },
    secondaryCta: { label: "Learn More", href: "#about" },
    align: "center",
  },
  {
    image:
      "/images/Featured-on-2.png",
    eyebrow: "FEATURED ON",
    logo: "/images/NIA-Logo-3.webp",
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
      "/images/maxresdefault.jpg",
    title: <>Watch our story</>,
    subtitle: "Over half a million lives touched through education & nutrition",
    overlay: true,
    cta: {
      label: "Watch Video",
      href: "https://www.youtube.com/watch?v=53QXRJyFz-s",
    },
    align: "center",
  },
  {
    image: "/images/india-abroad-impact-100-hero.png",
    imagePosition: "top",
    eyebrow: "FEATURED ON",
    logo: "/images/NIA-Logo-3.webp",
    title: (
      <>
        Anakh Sawhney named Top 100
        <br />
        Indian Americans Who Made
        <br />
        Transformational Impact in 2025
      </>
    ),
    titleClassName: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    cta: {
      label: "Read Full Story",
      href: "https://www.newindiaabroad.com/english/newspaper/-india-abroad-impact-100",
    },
    align: "left",
  },
  {
    image:
      "/images/Featured-on-3.png",
    eyebrow: "FEATURED ON",
    logo: "/images/etedge-insights-logon2-181x61-1.png",
    title: (
      <>
        Teen founder Anakh Sawhney tackles
        <br />
        ‘opportunity poverty’ through integrated
        <br />
        nutrition–education model
      </>
    ),
    titleClassName: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    cta: {
      label: "Read Full Story",
      href: "https://etedge-insights.com/resources/brands-speak/teen-founder-anakh-sawhney-tackles-opportunity-poverty-through-integrated-nutrition-education-model/",
    },
    align: "left",
  },
  {
    image:
      "/images/Featured-on-1-1.png",
    eyebrow: "FEATURED ON",
    logo: "/images/the-csr-universe-logo.png",
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
      "/images/Featured-on.png",
    eyebrow: "FEATURED ON",
    logo: "/images/my-central-jersey-logo.png",
    title: (
      <>
        Meet The Bernardsville Teen
        <br />
        Tackling Poverty Since Age 9
      </>
    ),
    cta: {
      label: "Read Full Story",
      href: "/docs/Meet-The-Bernardsville-Teen-Tackling-Poverty-Since-Age-9.pdf",
    },
    align: "left",
  },
  {
    image: "/images/rice-kids-sunaayy-partnership.jpg",
    eyebrow: "FEATURED ON",
    logo: "/images/new-india-abroad-logo.png",
    title: (
      <>
        Rice Kids, Sunaayy Foundation partner
        <br />
        to boost education in India
      </>
    ),
    titleClassName: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    cta: {
      label: "Read Full Story",
      href: "https://www.newindiaabroad.com/english/news/rice-kids-sunaayy-foundation-partner-to-boost-education-in-india",
    },
    align: "left",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 12000);
    return () => clearInterval(t);
  }, []);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  const slide = slides[index];
  const alignLeft = slide.align === "left";

  return (
    <section
      id="home"
      className="relative h-[55vh] min-h-[360px] md:h-[85vh] md:min-h-[640px] flex items-center overflow-hidden"
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
            className={`w-full h-full object-cover ${
              slide.imagePosition === "top"
                ? "object-top"
                : slide.imagePosition === "bottom"
                  ? "object-bottom"
                  : "object-center"
            }`}
          />
          {slide.overlay && (
            <div className="absolute inset-0 bg-gradient-hero" />
          )}
          {slide.overlay === "strong" && (
            <div className="absolute inset-0 bg-foreground/45" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-6xl mx-auto px-6 pt-20 ${
          alignLeft ? "text-left" : "text-center"
        }`}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={alignLeft ? "max-w-3xl" : "max-w-4xl mx-auto"}
          >
            {slide.eyebrow && (
              <p className="font-body text-primary-foreground/80 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-4">
                {slide.eyebrow}
              </p>
            )}
            {slide.logo && (
              <img
                src={slide.logo}
                alt="Publication logo"
                className={`h-10 md:h-12 lg:h-14 w-auto object-contain mb-5 ${
                  alignLeft ? "" : "mx-auto"
                } bg-white/90 rounded px-3 py-2`}
              />
            )}
            <h1
              className={`font-display font-bold text-primary-foreground leading-tight mb-5 ${
                slide.titleClassName ??
                "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              }`}
            >
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p
                className={`font-body text-primary-foreground/90 mb-8 leading-relaxed ${
                  slide.subtitleClassName ?? "text-base md:text-lg"
                }`}
              >
                {slide.subtitle}
              </p>
            )}
            {slide.cta && (
              <div
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${
                  alignLeft ? "items-start sm:justify-start" : "items-center sm:justify-center"
                }`}
              >
                <CtaLink href={slide.cta.href} label={slide.cta.label} className={primaryBtn} />
                {slide.secondaryCta && (
                  <CtaLink
                    href={slide.secondaryCta.href}
                    label={slide.secondaryCta.label}
                    className={secondaryBtn}
                  />
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
        className="hidden md:flex absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground items-center justify-center hover:bg-background/40 transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(1)}
        className="hidden md:flex absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground items-center justify-center hover:bg-background/40 transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 gap-2">
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
