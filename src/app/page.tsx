import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { TapeSection } from "@/sections/Tape";
import { ProjectsSection } from "@/sections/Projects";
import { ResearchSection } from "@/sections/Research";
import { AboutSection } from "@/sections/About";
import { AchievementsSection } from "@/sections/Achievements";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F0F0]">
      <Header />
      <main>
        <HeroSection />
        <TapeSection />
        <ProjectsSection />
        <ResearchSection />
        <AboutSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
