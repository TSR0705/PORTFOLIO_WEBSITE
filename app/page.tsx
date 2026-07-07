import { PrismaHero } from "@/components/ui/prisma-hero";
import ProjectsCardStack from "@/components/projects-card-stack";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black">
      <PrismaHero />
      <ProjectsCardStack />
      <SkillsSection />
    </main>
  );
}

