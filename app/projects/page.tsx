import ProjectsSection from "@/components/projects-section";
import ProjectShowcase from "@/components/project-showcase";
import { ProfessionalConnect } from "@/components/ui/get-in-touch";

export const metadata = {
  title: "Projects | Tanmay Singh",
  description: "Browse the engineering portfolio, selected works, and build logs of Tanmay Singh.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-black pt-20">
      <ProjectsSection />
      <ProjectShowcase />
      <ProfessionalConnect />
    </main>
  );
}
