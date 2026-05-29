import { PrismaHero } from "@/components/ui/prisma-hero";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ProjectShowcase from "@/components/project-showcase";
import { ProfessionalConnect } from "@/components/ui/get-in-touch";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black">
      <PrismaHero />
      <ProjectsSection />
      <SkillsSection />
      <ProjectShowcase />
      <ProfessionalConnect />
    </main>
  );
}

