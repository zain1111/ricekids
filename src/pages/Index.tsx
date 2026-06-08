import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CrisisSection from "@/components/CrisisSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";
import NewsSection from "@/components/NewsSection";
import RegionalFocus from "@/components/RegionalFocus";
import DonateSection from "@/components/DonateSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CrisisSection />
      <StatsSection />
      <NewsSection />
      <RegionalFocus />
      <ProjectsSection />
      <DonateSection />
      <Footer />
    </div>
  );
};

export default Index;
