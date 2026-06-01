import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Shield, Wrench, Sparkles, BookOpen, AlertCircle, ArrowUpRight, Cpu, ListChecks } from "lucide-react";
import * as Lucide from "lucide-react";
import { getProjectTheme } from "@/lib/project-design";
import {
  ProjectHeader,
  ProjectLinks,
  TechBadge,
  MetricsDashboard,
  ArchitectureGrid,
  ScreenshotsGallery
} from "@/components/ui/project-components";
import ProjectScrollRail from "@/components/ui/project-scroll-rail";
import MermaidRenderer from "@/components/ui/mermaid-renderer";

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

  // Dynamic Case Study Rails Section Array
  const sections = [
    { id: "overview", label: "Overview" },
    ...(project.motivation ? [{ id: "motivation", label: "Motivation" }] : []),
    ...(project.problemStatement ? [{ id: "problem", label: "Problem" }] : []),
    ...(project.solutionOverview ? [{ id: "solution", label: "Solution" }] : []),
    ...(project.keyFeatures && project.keyFeatures.length > 0 ? [{ id: "features", label: "Features" }] : []),
    ...(project.mermaidDiagram || project.architectureDiagram || project.architectureLayers ? [{ id: "architecture", label: "Architecture" }] : []),
    ...(project.screenshots ? [{ id: "screenshots", label: "Screenshots" }] : []),
    ...(project.keyMetrics ? [{ id: "performance", label: "Performance" }] : []),
  ];

  return (
    <main className="min-h-screen w-full bg-black text-white px-6 md:px-12 py-28 md:py-36 relative overflow-hidden flex flex-col items-center">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
      
      {/* ChatGPT-style Progress Rail (Sticky right) */}
      <ProjectScrollRail sections={sections} primaryColor={theme.primaryColor} />

      <div className="w-full max-w-4xl z-10 space-y-16">
        
        {/* Back Link */}
        <Link
          href="/#project-carousel"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#E1E0CC]/60 hover:text-white transition-colors uppercase tracking-[0.2em]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Projects Deck
        </Link>

        {/* 1. HERO SECTION (Overview) */}
        <section id="overview" className="space-y-12 scroll-mt-28">
          <ProjectHeader project={project} theme={theme} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
            {/* Left Column: Tech Stack badges */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/50 flex items-center gap-2">
                <Lucide.FolderCode className="w-3.5 h-3.5" style={{ color: theme.primaryColor }} />
                Technologies Employed
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>

            {/* Right Column: Source Code / Live Demo buttons */}
            <div className="space-y-4 flex flex-col justify-start">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/50 flex items-center gap-2">
                <Lucide.Link2 className="w-3.5 h-3.5" style={{ color: theme.primaryColor }} />
                Project Access
              </h3>
              <ProjectLinks
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                demoUrl={project.demoUrl}
                theme={theme}
                className="!pt-0 !border-t-0"
              />
            </div>
          </div>

          {/* Simple project description fallback (Why It Matters) */}
          {!project.problemStatement && project.fullDescription && (
            <div className="space-y-4 pt-8 border-t border-white/5">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/50 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" style={{ color: theme.primaryColor }} />
                Why It Matters
              </h3>
              <p className="text-[#E1E0CC]/80 text-sm sm:text-base font-sans leading-relaxed tracking-wide">
                {project.fullDescription}
              </p>
            </div>
          )}
        </section>

        {/* 2. MOTIVATION */}
        {project.motivation && (
          <section id="motivation" className="py-12 border-t border-white/5 space-y-6 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/50 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400/80" />
                Motivation: Why I Built This
              </h3>
            </div>
            <p className="text-[#E1E0CC]/80 text-sm sm:text-base font-sans leading-relaxed tracking-wide">
              {project.motivation}
            </p>
            
            {project.motivationPoints && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {project.motivationPoints.map((point, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full transition-colors" style={{ backgroundColor: `${theme.primaryColor}20` }} />
                    <div className="space-y-2">
                      <span className="font-mono text-[9px] tracking-widest text-[#E1E0CC]/40 block uppercase">
                        Goal 0{idx + 1}
                      </span>
                      <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                        {point.title}
                      </h4>
                      <p className="text-white/60 text-xs leading-relaxed font-sans">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 3. PROBLEM STATEMENT */}
        {project.problemStatement && (
          <section id="problem" className="py-12 border-t border-white/5 space-y-6 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/50 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500/80" />
                The Core Problem
              </h3>
            </div>
            <p className="text-[#E1E0CC]/80 text-sm sm:text-base font-sans leading-relaxed tracking-wide">
              {project.problemStatement}
            </p>

            {project.problemPoints && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {project.problemPoints.map((point, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-red-950/20 bg-red-950/[0.01] hover:border-red-950/40 hover:bg-red-950/[0.03] transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-500/10 group-hover:bg-red-500/30 transition-colors" />
                    <div className="space-y-2">
                      <span className="font-mono text-[9px] tracking-widest text-red-400/50 block uppercase">
                        Symptom 0{idx + 1}
                      </span>
                      <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                        {point.title}
                      </h4>
                      <p className="text-[#E1E0CC]/70 text-xs leading-relaxed font-sans">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 4. SOLUTION OVERVIEW */}
        {project.solutionOverview && (
          <section id="solution" className="py-12 border-t border-white/5 space-y-6 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/50 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500/80" />
                Our Solution Strategy
              </h3>
            </div>
            <p className="text-[#E1E0CC]/80 text-sm sm:text-base font-sans leading-relaxed tracking-wide">
              {project.solutionOverview}
            </p>

            {project.solutionPoints && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {project.solutionPoints.map((point, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-emerald-950/20 bg-emerald-950/[0.01] hover:border-emerald-950/40 hover:bg-emerald-950/[0.03] transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full transition-colors" style={{ backgroundColor: `${theme.primaryColor}20` }} />
                    <div className="space-y-2">
                      <span className="font-mono text-[9px] tracking-widest text-emerald-400/50 block uppercase" style={{ color: `${theme.primaryColor}80` }}>
                        Strategy 0{idx + 1}
                      </span>
                      <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                        {point.title}
                      </h4>
                      <p className="text-[#E1E0CC]/70 text-xs leading-relaxed font-sans">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 5. KEY FEATURES */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <section id="features" className="py-12 border-t border-white/5 space-y-6 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/50 flex items-center gap-2">
                <ListChecks className="w-4 h-4 text-emerald-400/80" />
                Key Features
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((kf, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
                  <span className="text-xs md:text-sm font-sans text-white/80 leading-relaxed">{kf}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. SYSTEM ARCHITECTURE & FLOW (Mermaid Chart) */}
        {(project.mermaidDiagram || project.architectureDiagram || project.architectureLayers) && (
          <section id="architecture" className="py-12 border-t border-white/5 space-y-6 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/50 flex items-center gap-2">
                <Cpu className="w-4 h-4" style={{ color: theme.primaryColor }} />
                System Architecture
              </h3>
            </div>
            
            {/* Native Mermaid Canvas */}
            {project.mermaidDiagram ? (
              <MermaidRenderer chart={project.mermaidDiagram} id={project.id} />
            ) : project.architectureDiagram ? (
              <div className="rounded-xl border border-white/5 bg-[#050505] p-5 md:p-6 overflow-x-auto shadow-inner">
                <pre className="font-mono text-[10px] md:text-xs leading-relaxed text-[#E1E0CC]/80 whitespace-pre">
                  {project.architectureDiagram}
                </pre>
              </div>
            ) : null}

            {/* Structured Table Layers */}
            {project.architectureLayers && (
              <ArchitectureGrid layers={project.architectureLayers} theme={theme} />
            )}
          </section>
        )}

        {/* 7. SCREENSHOTS */}
        {project.screenshots && (
          <section id="screenshots" className="py-12 border-t border-white/5 space-y-6 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/50 flex items-center gap-2">
                <Lucide.Image className="w-4 h-4" style={{ color: theme.primaryColor }} />
                Visual Interface Preview
              </h3>
            </div>
            <ScreenshotsGallery images={project.screenshots} theme={theme} />
          </section>
        )}

        {/* 8. KEY METRICS */}
        {project.keyMetrics && (
          <section id="performance" className="py-12 border-t border-white/5 space-y-6 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/50 flex items-center gap-2">
                <Lucide.BarChart2 className="w-4 h-4" style={{ color: theme.primaryColor }} />
                Measurable Performance
              </h3>
            </div>
            <MetricsDashboard metrics={project.keyMetrics} theme={theme} />
          </section>
        )}

      </div>
    </main>
  );
}
