import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DollarSign, Users, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProjects } from "@/data/projects";

const projectDetailHeaderBg = "/images/IMG_9999-scaled.jpg";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center h-[60vh]">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
            <Link to="/projects" className="text-primary font-body font-semibold hover:underline">
              ← Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const pct = Math.round((project.raised / project.goal) * 100);
  const projectImages = project.images ?? [project.image];
  const useGrid = projectImages.length > 1;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[65vh] min-h-[480px] md:min-h-[580px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={projectDetailHeaderBg}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative z-10 text-center pt-20 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4 max-w-3xl mx-auto"
          >
            {project.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 font-body text-sm text-primary-foreground/70 uppercase tracking-wider"
          >
            <Link to="/" className="hover:text-primary-foreground transition-colors">Homepage</Link>
            <span>›</span>
            <Link to="/projects" className="hover:text-primary-foreground transition-colors">Projects</Link>
            <span>›</span>
            <span className="truncate max-w-[200px]">{project.title}</span>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  ${project.raised.toLocaleString()} Raised
                </h3>
                <p className="font-body text-sm text-muted-foreground">Out of ${project.goal.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">{project.donors}</h3>
                <p className="font-body text-sm text-muted-foreground">Donors</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">{project.period}</h3>
                <p className="font-body text-sm text-muted-foreground">Event Date</p>
              </div>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex justify-between items-center font-body text-sm text-muted-foreground mb-2">
              <span className="font-semibold text-foreground">Goal Progress</span>
              <span className="font-semibold text-foreground">{Math.min(pct, 100)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-1000 ${pct >= 100 ? "bg-gradient-green" : "bg-gradient-warm"}`}
                style={{ width: `${Math.min(pct, 100)}%` }}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="font-body text-lg leading-relaxed text-foreground font-medium">
              {project.description}
            </p>
            {project.additionalDescription && (
              <p className="font-body text-lg leading-relaxed text-foreground font-medium mt-6">
                {project.additionalDescription}
              </p>
            )}
          </motion.div>

          {/* Donate Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-8"
          >
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=DH3NT9K8M2JG6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-warm text-primary-foreground px-10 py-4 rounded-full font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-elevated"
            >
              Donate Now
            </a>
          </motion.div>

          {/* Project Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {useGrid ? (
              <div className="grid grid-cols-2 gap-4">
                {projectImages.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75 + i * 0.08 }}
                    className="group overflow-hidden rounded-2xl shadow-elevated aspect-[4/3]"
                  >
                    <img
                      src={src}
                      alt={`${project.title}${i > 0 ? ` ${i + 1}` : ""}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {projectImages.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="rounded-2xl overflow-hidden shadow-elevated"
                  >
                    <img
                      src={src}
                      alt={`${project.title}${i > 0 ? ` ${i + 1}` : ""}`}
                      className="w-full h-auto"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
