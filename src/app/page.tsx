import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { ResearchSection } from "@/sections/Research";
import { AchievementsSection } from "@/sections/Achievements";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <TapeSection />
      <ProjectsSection />
      <ResearchSection />
      <AboutSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
