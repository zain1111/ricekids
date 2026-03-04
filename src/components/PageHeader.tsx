import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
  backgroundImage: string;
}

const PageHeader = ({ title, breadcrumb, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={backgroundImage} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      <div className="relative z-10 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 font-body text-sm text-primary-foreground/70 uppercase tracking-wider"
        >
          <a href="/" className="hover:text-primary transition-colors">Homepage</a>
          <span>›</span>
          <span>{breadcrumb}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
