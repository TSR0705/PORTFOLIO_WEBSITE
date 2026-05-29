import { ProjectShowcase } from "@/components/ui/project-showcase";

export const metadata = {
  title: "Projects | Tanmay Singh",
  description: "Browse the engineering portfolio, selected works, and build logs of Tanmay Singh.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-black flex items-center justify-center pt-24 pb-16">
      <ProjectShowcase />
    </main>
  );
}
