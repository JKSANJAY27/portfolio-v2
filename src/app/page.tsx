import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AchievementsSection } from "@/sections/Achievements";
import { AboutSection } from "@/sections/About";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <AchievementsSection />
      <AboutSection />
    </div>
  );
}
