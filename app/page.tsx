import AboutSection from "@/components/about-section";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import SkillsSection from "@/components/skills-section";
import AchievementsSection from "@/components/achievements-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black pt-20 md:pt-28">
      <AboutSection />
      <ProjectShowcase />
      <SkillsSection />
      <AchievementsSection />
    </main>
  );
}

