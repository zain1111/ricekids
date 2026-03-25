import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import missionImg from "@/assets/mission-img.jpg";
import { allProjects } from "@/data/projects";

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
              <Link to={`/projects/${project.slug}`} key={i}>
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: Math.min(i * 0.05, 0.6) }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-500 h-full"
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
              </Link>
            )}
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
