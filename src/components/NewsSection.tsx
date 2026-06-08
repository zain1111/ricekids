import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const newsItems = [
  {
    title: "Every Child Deserves More Than an Impossible Choice",
    excerpt:
      "Founder & CEO of Rice Kids, Anakh Sawhney argues education and community leadership break cycles of poverty",
    link: "https://www.newindiaabroad.com/english/opinion/every-child-deserves-more-than-an-impossible-choice",
    image: "/images/every-child-deserves-more.jpg",
  },
  {
    title: "Anakh Sawhney named Top 100 Indian Americans Who Made Transformational Impact in 2025",
    excerpt: "Anakh Sawhney named Top 100 Indian Americans Who Made Transformational Impact in 2025",
    link: "https://www.newindiaabroad.com/english/newspaper/-india-abroad-impact-100",
    image: "/images/india-abroad-impact-100.png",
  },
  {
    title: "Breaking Age Barriers in Leadership, with 16-year old Anakh Sawhney",
    excerpt: "In this inspiring episode, we sit down with Anakh Sawhney, the 16-year-old founder and CEO of Rice Kids — a global nonprofit.",
    link: "https://www.youtube.com/watch?v=53QXRJyFz-s",
    image: "/images/maxresdefault-1024x576.jpg",
  },
  {
    title: "Rice Kids Expands Education and Nutrition Support in India",
    excerpt: "Rice Kids, a youth-led nonprofit founded by 16-year-old changemaker Anakh Sawhney, expands its reach.",
    link: "https://thecsruniverse.com/articles/rice-kids-expands-education-and-nutrition-support-in-india",
    image: "/images/IMG_9989-1-1024x683.jpg",
  },
  {
    title: "Meet The Bernardsville Teen Tackling Poverty Since Age 9",
    excerpt: "In a world where millions still sleep hungry, Rice Kids is proving that compassion can cross continents and scale impact.",
    link: "/docs/Meet-The-Bernardsville-Teen-Tackling-Poverty-Since-Age-9.pdf",
    image: "/images/Rice-Kids-Classroom-1024x693.jpg",
  },
  {
    title: "Teen founder Anakh Sawhney tackles 'opportunity poverty' through integrated nutrition–education model",
    excerpt: "Anakh Sawhney, the 16-year-old Founder & CEO of Rice Kids, is redefining how interconnected challenges of hunger, education inequality are addressed.",
    link: "https://etedge-insights.com/resources/brands-speak/teen-founder-anakh-sawhney-tackles-opportunity-poverty-through-integrated-nutrition-education-model/",
    image: "/images/Rice-Kids-Volunteers-1024x688.jpg",
  },
  {
    title: "Anakh Sawhney becomes youngest NJBiz 40 Under 40 honoree",
    excerpt: "Sixteen-year-old Indian-American student and nonprofit leader Anakh Sawhney made history.",
    link: "https://www.newindiaabroad.com/english/people/anakh-sawhney-becomes-youngest-njbiz-40-under-40-honoree",
    image: "/images/Anakh-Sawhney-NJBiz-Forty-Under-40-Award1-1024x750.jpg",
  },
];

const NewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="news" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">In the Press</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            News & Media Coverage
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 flex flex-col sm:flex-row"
            >
              <div className="sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-3">{item.excerpt}</p>
                <span className="font-body text-primary text-sm font-semibold flex items-center gap-1">
                  Read More <ExternalLink size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
