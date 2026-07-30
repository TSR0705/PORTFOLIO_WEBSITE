import { PrismaHero } from "@/components/ui/prisma-hero";
import dynamic from "next/dynamic";

const ProjectsCardStack = dynamic(() => import("@/components/projects-card-stack"));
const SkillsSection = dynamic(() => import("@/components/skills-section"));

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black">
      <PrismaHero />
      <ProjectsCardStack />
      <SkillsSection />
    </main>
  );
}

