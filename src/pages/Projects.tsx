import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import missionImg from "@/assets/mission-img.jpg";

const allProjects = [
  { title: "Driving Equity through Financial Literacy", period: "March – April 2026", raised: 1150, goal: 7500, image: "https://www.ricekids.org/wp-content/uploads/2026/01/Rice-Kids-Why-Education-1-1-scaled.jpg" },
  { title: "New Year's School Supply Drive", period: "Jan – Feb 2026", raised: 4250, goal: 6000, image: "https://www.ricekids.org/wp-content/uploads/2026/01/School-Supply-Drive-SAGE-Rice-Kids-Anakh-Sawhney.png" },
  { title: "Winter Coat Drive For Newark and Plainfield Schools", period: "Nov – Dec 2025", raised: 13500, goal: 15000, image: "https://www.ricekids.org/wp-content/uploads/2026/01/Winter-Coat-Drive.jpg" },
  { title: "Educational Resources for NJ Kids", period: "Nov – Dec 2025", raised: 5000, goal: 5000, image: "https://www.ricekids.org/wp-content/uploads/2025/12/PXL_20230301_193531408-1.jpg" },
  { title: "Holistic Education Support for Kids", period: "Oct – Dec 2025", raised: 48000, goal: 50000, image: "https://www.ricekids.org/wp-content/uploads/2025/09/IMG_0006-scaled.jpg" },
  { title: "Rice Kids + Sunaayy", period: "Aug – Sep 2025", raised: 5050, goal: 5000, image: "https://www.ricekids.org/wp-content/uploads/2025/09/IMG_0039-scaled.jpg" },
  { title: "Education Supplies for Kids", period: "May – Jul 2025", raised: 2000, goal: 2000, image: "https://www.ricekids.org/wp-content/uploads/2025/09/IMG_9998-scaled.jpg" },
  { title: "Supporting Kids In Our Jharkhand Center", period: "Feb – Apr 2025", raised: 5050, goal: 5000, image: "https://www.ricekids.org/wp-content/uploads/2025/12/Rice-Kids-Jharkhand-Center.jpg" },
  { title: "NCR Street Education Program", period: "Feb – Apr 2025", raised: 7650, goal: 7500, image: "https://www.ricekids.org/wp-content/uploads/2025/09/IMG_9940-scaled.jpg" },
  { title: "Nanak's Gift", period: "Nov 24 – Jan 25", raised: 8200, goal: 7500, image: "https://www.ricekids.org/wp-content/uploads/2025/02/Rice-kids-nanaks-gift-20-30-poster-scaled.jpg" },
  { title: "Thanksgiving Drive-Thru", period: "November 2024", raised: 2600, goal: 3000, image: "https://www.ricekids.org/wp-content/uploads/2025/02/IMG-20241124-WA0023.jpg" },
  { title: "Sponsorship Program", period: "Oct – Dec 2024", raised: 2200, goal: 2000, image: "https://www.ricekids.org/wp-content/uploads/2025/12/IMG_0057-n.jpg" },
  { title: "Investing In Physical Education", period: "Oct – Nov 2024", raised: 3000, goal: 3000, image: "https://www.ricekids.org/wp-content/uploads/2025/12/IMG-20221231-WA0155-1.jpg" },
  { title: "Upper East Side Event", period: "October 2024", raised: 1355, goal: 1500, image: "https://www.ricekids.org/wp-content/uploads/2025/02/PXL_20241123_144443989-scaled.jpg" },
  { title: "Education Supplies Program", period: "Sep – Oct 2024", raised: 3000, goal: 3000, image: "https://www.ricekids.org/wp-content/uploads/2025/12/Rice-Kids-Teacher-Supplies-Program-1.jpg" },
  { title: "Establishing A New Center", period: "Aug – Sep 2024", raised: 6500, goal: 7000, image: "https://www.ricekids.org/wp-content/uploads/2025/12/IMG_0001.jpg" },
  { title: "Setting Up The Bengal Center", period: "Jun – Aug 2024", raised: 4500, goal: 4500, image: "https://www.ricekids.org/wp-content/uploads/2025/12/Rice-Kids-Bengal-School.jpg" },
  { title: "Delivering Packages of Hope", period: "Jul – Aug 2024", raised: 2800, goal: 3000, image: "https://www.ricekids.org/wp-content/uploads/2024/10/PXL_20240413_165642509-scaled.jpg" },
  { title: "KASA & South Amboy Partnership", period: "April – May 2024", raised: 6900, goal: 7500, image: "https://www.ricekids.org/wp-content/uploads/2024/10/PXL_20240413_135504026-scaled.jpg" },
  { title: "Hunger Heroes", period: "Jan – March 2024", raised: 5000, goal: 5000, image: "https://www.ricekids.org/wp-content/uploads/2024/10/Hunger-Heroes-Program-1-1.png" },
  { title: "Help At The Doorstep", period: "Oct – Nov 2023", raised: 2000, goal: 2000, image: "https://www.ricekids.org/wp-content/uploads/2024/10/PXL_20240413_162630587-scaled.jpg" },
  { title: "Sandwiches with a Smile!", period: "September 2023", raised: 2000, goal: 2000, image: "https://www.ricekids.org/wp-content/uploads/2023/11/IMG_4256-1.jpg" },
  { title: "Holistic Education Support", period: "Jul – Aug 2023", raised: 1600, goal: 1500, image: "https://www.ricekids.org/wp-content/uploads/2025/12/Rice-Kids-Visiting-Rural-Center.jpg" },
  { title: "New York City Homeless Drive", period: "April 2023", raised: 3000, goal: 3000, image: "https://www.ricekids.org/wp-content/uploads/2023/11/PXL_20230304_164543878.jpg" },
  { title: "Bags of Hope", period: "March 2023", raised: 5000, goal: 5000, image: "https://www.ricekids.org/wp-content/uploads/2023/11/IMG_2207.jpg" },
  { title: "Rural Center Project", period: "Jan – May 2023", raised: 3600, goal: 4000, image: "https://www.ricekids.org/wp-content/uploads/2025/12/Rice-Kids-Empowering-Women-1-1.jpg" },
  { title: "Feed 5K Program", period: "Nov 22 – Feb 23", raised: 15000, goal: 15000, image: "https://www.ricekids.org/wp-content/uploads/2022/12/Gray-Minimalist-Elegant-Fundraising-Disability-GoFundMe-Story-Image-2.png" },
  { title: "India Covid Relief Program", period: "April – July 2021", raised: 18750, goal: 15000, image: "https://www.ricekids.org/wp-content/uploads/2022/07/Project-6-3-543x407.jpg" },
  { title: "Serving The Homeless In New York", period: "Oct 28, 2018", raised: 1225, goal: 1000, image: "https://www.ricekids.org/wp-content/uploads/2020/02/Rice-Kids-Serving-Homeless-NY-Featured-Image.jpg" },
];

const ITEMS_PER_PAGE = 12;

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const visibleProjects = allProjects.slice(0, visibleCount);

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Projects"
        breadcrumb="Projects"
        backgroundImage={missionImg}
      />

      {/* Summary */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
            {allProjects.length} Projects &amp; Counting
          </h2>
          <p className="font-body text-primary-foreground/80">
            From feeding the homeless in New York to establishing education centers in India — every project creates lasting change.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, i) => {
              const pct = Math.round((project.raised / project.goal) * 100);
              const isComplete = pct >= 100;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: Math.min(i * 0.05, 0.6) }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-500"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm text-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                      {project.period}
                    </div>
                    {isComplete && (
                      <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-body font-bold px-3 py-1 rounded-full">
                        Complete ✓
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-bold text-foreground mb-4 leading-snug line-clamp-2 min-h-[2.75rem]">
                      {project.title}
                    </h3>
                    <div className="w-full bg-muted rounded-full h-2.5 mb-2">
                      <div
                        className={`h-2.5 rounded-full transition-all duration-1000 ${isComplete ? "bg-gradient-green" : "bg-gradient-warm"}`}
                        style={{ width: `${Math.min(pct, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center font-body text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">${project.raised.toLocaleString()}</span>
                      <span>of ${project.goal.toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {visibleCount < allProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                className="bg-gradient-warm text-primary-foreground px-10 py-4 rounded-full font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-elevated"
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
