import { PrismaHero } from "@/components/ui/prisma-hero";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black">
      <PrismaHero />
      <SkillsSection />
    </main>
  );
}

