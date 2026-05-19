import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const allNews = [
  {
    title: "Teen founder Anakh Sawhney tackles 'opportunity poverty' through integrated nutrition–education model",
    excerpt: "Anakh Sawhney, the 16-year-old Founder & CEO of Rice Kids, is redefining how interconnected challenges of hunger, education inequality are addressed.",
    link: "https://etedge-insights.com/resources/brands-speak/teen-founder-anakh-sawhney-tackles-opportunity-poverty-through-integrated-nutrition-education-model/",
    image: "/images/Rice-Kids-Volunteers.jpg",
  },
  {
    title: "Anakh Sawhney becomes youngest NJBiz 40 Under 40 honoree",
    excerpt: "Sixteen-year-old Indian-American student and nonprofit leader Anakh Sawhney made history as the youngest honoree.",
    link: "https://www.newindiaabroad.com/english/people/anakh-sawhney-becomes-youngest-njbiz-40-under-40-honoree",
    image: "/images/Anakh-Sawhney-NJBiz-Forty-Under-40-Award1-scaled.jpg",
  },
  {
    title: "Breaking Age Barriers in Leadership, with 16-year old Anakh Sawhney",
    excerpt: "In this inspiring episode, we sit down with Anakh Sawhney, the 16-year-old founder and CEO of Rice Kids — a global nonprofit.",
    link: "https://www.youtube.com/watch?v=53QXRJyFz-s",
    image: "/images/maxresdefault.jpg",
  },
  {
    title: "Meet Anakh Sawhney | CEO, Rice Kids",
    excerpt: "We had the good fortune of connecting with Anakh Sawhney and we've shared our conversation below.",
    link: "https://shoutoutmiami.com/meet-anakh-sawhney-ceo-rice-kids/",
    image: "/images/Rice-Kids-Classroom.jpg",
  },
  {
    title: "Rice Kids Expands Education and Nutrition Support in India",
    excerpt: "Rice Kids, a youth-led nonprofit founded by 16-year-old changemaker Anakh Sawhney, expands its reach across India.",
    link: "https://thecsruniverse.com/articles/rice-kids-expands-education-and-nutrition-support-in-india",
    image: "/images/IMG_9989-1-scaled.jpg",
  },
  {
    title: "Rice Kids, Sunaayy Foundation partner to boost education in India",
    excerpt: "The partnership will combine resources to support underprivileged children with learning, nutrition, and wellness programs across India.",
    link: "https://www.newindiaabroad.com/english/news/rice-kids-sunaayy-foundation-partner-to-boost-education-in-india",
    image: "/images/IMG_0039-scaled.jpg",
  },
  {
    title: "Rice Kids Grows Its India Presence with focus on kids learning",
    excerpt: "In a world where millions still sleep hungry, Rice Kids is proving that compassion can cross continents and scale impact.",
    link: "https://theprint.in/ani-press-releases/rice-kids-grows-its-india-presence-with-a-simple-focus-meals-that-keep-kids-learning/2715273/",
    image: "/images/IMG_9999-scaled.jpg",
  },
  {
    title: "Meet The Bernardsville Teen Tackling Poverty Since Age 9",
    excerpt: "In a world where millions still sleep hungry, Rice Kids is proving that compassion can cross continents and scale impact.",
    link: "/docs/Meet-The-Bernardsville-Teen-Tackling-Poverty-Since-Age-9.pdf",
    image: "/images/Rice-Kids-Why-Education-1-scaled.jpg",
  },
  {
    title: "Rice Kids Grows Its India Presence with a Simple Focus - Meals That Keep Kids Learning",
    excerpt: "16-year-old changemaker Anakh Sawhney's non-profit tackles hunger to help keep kids in school.",
    link: "https://www.business-standard.com/content/press-releases-ani/rice-kids-grows-its-india-presence-with-a-simple-focus-meals-that-keep-kids-learning-125080601269_1.html",
    image: "/images/IMG_0083h.jpg",
  },
  {
    title: "Bernardsville Teen CEO Leads Global Fight Against Hunger",
    excerpt: "BERNARDSVILLE, NJ - Anakh Sawhney, a 16 year-old Bernardsville resident, is not your typical teenager.",
    link: "https://www.tapinto.net/towns/bernardsville-and-bedminster/sections/giving-back/articles/bernardsville-teen-ceo-leads-global-fight-against-hunger",
    image: "/images/best_crop_dcc286151f7da8d76da7_IMG_5400.jpeg",
  },
  {
    title: "Rice Kids Expands in India with Nutritious Meals for Learning",
    excerpt: "The organization built its programs beyond meal distribution in India, integrating food support with education and vocational training.",
    link: "https://majestylifecoach.com/education/rice-kids-expands-in-india-with-nutritious-meals-for-learning/",
    image: "/images/IMG_9950-scaled.jpg",
  },
  {
    title: "Feeding Futures: Rice Kids' Global Compassion Revolution",
    excerpt: "Rice Kids, founded by Anakh Sawhney, is proving that compassion knows no boundaries.",
    link: "https://www.devdiscourse.com/article/business/3531523-feeding-futures-rice-kids-global-compassion-revolution",
    image: "/images/IMG_9989-1-scaled.jpg",
  },
  {
    title: "Bernardsville Siblings Embark on a Mission to Deliver Hot, Nutritious Food to the Hungry",
    excerpt: "When Anakh Sawhney and Prabir Sawhney were young, they remember feeling moved by the plight of those less fortunate.",
    link: "https://citylifestyle.com/articles/rice-kids",
    image: "/images/IMG_0034-scaled.jpg",
  },
  {
    title: "Rice Kids Grows Its India Presence — Meals That Keep Kids Learning",
    excerpt: "In a world where millions still sleep hungry, Rice Kids is proving that compassion can cross continents and scale impact.",
    link: "https://www.tribuneindia.com/news/business/rice-kids-grows-its-india-presence-with-a-simple-focus-meals-that-keep-kids-learning/",
    image: "/images/IMG_0131-scaled.jpg",
  },
  {
    title: "No One Sleeps Hungry — Meet the Bernardsville Teen Feeding the World",
    excerpt: "Walking the streets of New York City when she was only nine, Anakh was moved to make a difference.",
    link: "https://web.facebook.com/bernardsvillenews/posts/bernardsville-walking-the-streets-of-new-york-city-when-she-was-only-nine-anakh-/1340170961446564/",
    image: "/images/9504772634440036619.jpg",
  },
  {
    title: "Somerset Hills Feature",
    excerpt: "Rice Kids, founded by Anakh Sawhney, is proving that compassion knows no boundaries.",
    link: "https://issuu.com/lifestylepubs/docs/somerset_hills_2023_8_print/40",
    image: "/images/PXL_20230304_151453597-1.jpg",
  },
  {
    title: "Rice Kids Expands Education and Nutrition Support in India",
    excerpt: "Rice Kids, a youth-led nonprofit, expands its reach with education and nutrition programs across India.",
    link: "https://thecsruniverse.com/articles/rice-kids-expands-education-and-nutrition-support-in-india",
    image: "/images/IMG_9989-1-scaled.jpg",
  },
  {
    title: "Rice Kids Spreads Hope and Healthy Meals",
    excerpt: "Rice Kids, a youth-led nonprofit founded by 16-year-old changemaker Anakh Sawhney, spreads hope through nutritious meals.",
    link: "/docs/Anakh-Sawhney-Rice-Kids-Mendham-Neighbors-Article.pdf",
    image: "/images/PXL_20230122_192949801.jpg",
  },
];
const ITEMS_PER_PAGE = 9;

const NewsMedia = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const visibleNews = allNews.slice(0, visibleCount);
  const hasMore = visibleCount < allNews.length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="News & Media"
        breadcrumb="News & Media"
        backgroundImage="/images/Rice-Kids-Volunteers.jpg"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              In the Press
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Rice Kids News and Media Coverage
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleNews.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 + (i % ITEMS_PER_PAGE) * 0.04 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                    {item.excerpt}
                  </p>
                  <span className="font-body text-primary text-sm font-semibold flex items-center gap-1">
                    Read More <ExternalLink size={14} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
                className="bg-gradient-warm text-primary-foreground px-8 py-3 rounded-full font-body font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsMedia;
