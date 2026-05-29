import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import * as Lucide from "lucide-react";
import { getProjectTheme } from "@/lib/project-design";
import { ProjectHeader, ProjectLinks, TechBadge } from "@/components/ui/project-components";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const theme = getProjectTheme(project.id);
  const IconComponent = (Lucide as any)[theme.iconName] || Lucide.Cpu;

  return (
    <main className="min-h-screen w-full bg-black text-white px-6 md:px-12 py-28 md:py-36 relative overflow-hidden flex flex-col items-center">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
      
      <div className="w-full max-w-4xl z-10 space-y-12">
        {/* Back Link */}
        <Link
          href="/#project-carousel"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#E1E0CC]/60 hover:text-white transition-colors uppercase tracking-[0.2em]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Projects Deck
        </Link>

        {/* Cinematic Header System */}
        <ProjectHeader project={project} theme={theme} />

        {/* Detail Matrix Grid */}
        <div className="grid md:grid-cols-12 gap-8 pt-4">
          {/* Main Narrative (Left) */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
              <IconComponent className={`w-3.5 h-3.5 ${theme.accentText}`} style={{ color: theme.primaryColor }} />
              Why It Matters
            </h3>
            <p className="text-white/80 text-sm sm:text-base font-sans leading-relaxed">
              {project.fullDescription}
            </p>
            
            {/* Tech stack */}
            <div className="space-y-3 pt-4">
              <h4 className="text-[10px] font-mono tracking-wider uppercase text-white/40">Technologies Employed</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>
          </div>

          {/* Core Features & Deliverables (Right) */}
          <div className="md:col-span-5 space-y-8 md:border-l md:border-white/10 md:pl-8">
            {/* Key Features */}
            <div className="space-y-4">
              <h3 className={`text-xs font-mono uppercase tracking-widest flex items-center gap-2 ${theme.accentText}`}>
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                Key Features
              </h3>
              <ul className="space-y-3 pl-1">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-white/70 text-xs md:text-sm font-sans leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Centralized Action Button Links */}
            <ProjectLinks
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              demoUrl={project.demoUrl}
              theme={theme}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
