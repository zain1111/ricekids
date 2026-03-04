import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Driving Equity through Financial Literacy",
    period: "Mar – Apr 2026",
    raised: 1150,
    goal: 7500,
    image: "https://www.ricekids.org/wp-content/uploads/2026/01/Rice-Kids-Why-Education-1-1-scaled.jpg",
  },
  {
    title: "New Year's School Supply Drive",
    period: "Jan – Feb 2026",
    raised: 4250,
    goal: 6000,
    image: "https://www.ricekids.org/wp-content/uploads/2026/01/School-Supply-Drive-SAGE-Rice-Kids-Anakh-Sawhney.png",
  },
  {
    title: "Winter Coat Drive For Newark and Plainfield Schools",
    period: "Dec 25 – Jan 26",
    raised: 13500,
    goal: 15000,
    image: "https://www.ricekids.org/wp-content/uploads/2026/01/Winter-Coat-Drive.jpg",
  },
  {
    title: "Educational Resources for NJ Kids",
    period: "Nov – Dec 2025",
    raised: 5000,
    goal: 5000,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/PXL_20230301_193531408-2.jpg",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">Making Impact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Recent Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => {
            const pct = Math.round((project.raised / project.goal) * 100);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-500"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm text-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                    {project.period}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-foreground mb-4 leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-warm h-2 rounded-full transition-all duration-1000"
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
      </div>
    </section>
  );
};

export default ProjectsSection;
