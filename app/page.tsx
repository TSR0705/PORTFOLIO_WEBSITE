import { PrismaHero } from "@/components/ui/prisma-hero";
import AboutSection from "@/components/about-section";
import ProjectsCardStack from "@/components/projects-card-stack";
import SkillsSection from "@/components/skills-section";
import AchievementsSection from "@/components/achievements-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black">
      <PrismaHero />
      <AboutSection />
      <ProjectsCardStack />
      <SkillsSection />
      <AchievementsSection />
    </main>
  );
}

