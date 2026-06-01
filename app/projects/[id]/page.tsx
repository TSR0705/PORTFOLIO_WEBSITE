import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Shield, Wrench, Sparkles, BookOpen, AlertCircle, ArrowUpRight, Cpu } from "lucide-react";
import * as Lucide from "lucide-react";
import { getProjectTheme } from "@/lib/project-design";
import {
  ProjectHeader,
  ProjectLinks,
  TechBadge,
  MetricsDashboard,
  ArchitectureGrid,
  EngineeringDecisions,
  ChallengesSolutions,
  ScreenshotsGallery
} from "@/components/ui/project-components";
import ProjectScrollRail from "@/components/ui/project-scroll-rail";

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
    ...(project.problemStatement ? [{ id: "problem", label: "Problem" }] : []),
    ...(project.solutionOverview ? [{ id: "solution", label: "Solution" }] : []),
    ...(project.architectureLayers || project.architectureDiagram ? [{ id: "architecture", label: "Architecture" }] : []),
    ...(project.keyMetrics ? [{ id: "metrics", label: "Metrics" }] : []),
    { id: "tech", label: "Tech Stack" },
    ...(project.engineeringDecisions ? [{ id: "decisions", label: "Decisions" }] : []),
    ...(project.challengesSolutions ? [{ id: "challenges", label: "Challenges" }] : []),
    ...(project.securityMeasures ? [{ id: "security", label: "Security" }] : []),
    ...(project.deploymentDetails ? [{ id: "deployment", label: "Deployment" }] : []),
    ...(project.screenshots ? [{ id: "screenshots", label: "Screenshots" }] : []),
    ...(project.lessonsLearned ? [{ id: "learnings", label: "Learnings" }] : []),
    ...(project.futureImprovements ? [{ id: "future", label: "Roadmap" }] : []),
    { id: "links", label: "Links" },
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
        <section id="overview" className="space-y-12">
          <ProjectHeader project={project} theme={theme} />
          
          <div className="space-y-4 pt-6 border-t border-white/5">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
              <IconComponent className={`w-3.5 h-3.5 ${theme.accentText}`} style={{ color: theme.primaryColor }} />
              Why It Matters
            </h3>
            <p className="text-white/80 text-sm sm:text-base font-sans leading-relaxed">
              {project.fullDescription}
            </p>
            
            {/* Display key features for simple projects as fallback */}
            {!project.problemStatement && project.keyFeatures && (
              <div className="space-y-3 pt-4">
                <h4 className="text-[10px] font-mono tracking-wider uppercase text-white/40">Core Deliverables</h4>
                <ul className="space-y-2">
                  {project.keyFeatures.map((kf, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-white/70 text-xs md:text-sm font-sans leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
                      {kf}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* 2. PROBLEM STATEMENT */}
        {project.problemStatement && (
          <section id="problem" className="py-12 border-t border-white/5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" />
              The Core Problem
            </h3>
            <p className="text-white/75 text-sm sm:text-base font-sans leading-relaxed">
              {project.problemStatement}
            </p>
          </section>
        )}

        {/* 3. SOLUTION OVERVIEW */}
        {project.solutionOverview && (
          <section id="solution" className="py-12 border-t border-white/5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2" style={{ color: theme.primaryColor }}>
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Our Solution Strategy
            </h3>
            <p className="text-white/75 text-sm sm:text-base font-sans leading-relaxed">
              {project.solutionOverview}
            </p>
          </section>
        )}

        {/* 4. SYSTEM ARCHITECTURE & FLOW */}
        {(project.architectureLayers || project.architectureDiagram) && (
          <section id="architecture" className="py-12 border-t border-white/5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
              <Cpu className={`w-3.5 h-3.5 ${theme.accentText}`} style={{ color: theme.primaryColor }} />
              System Architecture
            </h3>
            
            {/* Text Flowchart Blueprint */}
            {project.architectureDiagram && (
              <div className="rounded-xl border border-white/5 bg-[#050505] p-5 md:p-6 overflow-x-auto shadow-inner">
                <pre className="font-mono text-[10px] md:text-xs leading-relaxed text-[#E1E0CC]/80 whitespace-pre">
                  {project.architectureDiagram}
                </pre>
              </div>
            )}

            {/* Structured Table Layers */}
            {project.architectureLayers && (
              <ArchitectureGrid layers={project.architectureLayers} theme={theme} />
            )}
          </section>
        )}

        {/* 5. KEY METRICS */}
        {project.keyMetrics && (
          <section id="metrics" className="py-12 border-t border-white/5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
              <Lucide.BarChart2 className={`w-4 h-4 ${theme.accentText}`} style={{ color: theme.primaryColor }} />
              Measurable Performance
            </h3>
            <MetricsDashboard metrics={project.keyMetrics} theme={theme} />
          </section>
        )}

        {/* 6. TECH STACK */}
        <section id="tech" className="py-12 border-t border-white/5 space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
            <Lucide.FolderCode className={`w-4 h-4 ${theme.accentText}`} style={{ color: theme.primaryColor }} />
            Technologies Employed
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </section>

        {/* 7. ENGINEERING DECISIONS */}
        {project.engineeringDecisions && (
          <section id="decisions" className="py-12 border-t border-white/5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
              <Wrench className={`w-3.5 h-3.5 ${theme.accentText}`} style={{ color: theme.primaryColor }} />
              Engineering Decisions
            </h3>
            <EngineeringDecisions decisions={project.engineeringDecisions} theme={theme} />
          </section>
        )}

        {/* 8. CHALLENGES & RESOLUTIONS */}
        {project.challengesSolutions && (
          <section id="challenges" className="py-12 border-t border-white/5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
              <Wrench className={`w-3.5 h-3.5 ${theme.accentText}`} style={{ color: theme.primaryColor }} />
              Technical Roadblocks & Solutions
            </h3>
            <ChallengesSolutions challenges={project.challengesSolutions} theme={theme} />
          </section>
        )}

        {/* 9. SECURITY MEASURES */}
        {project.securityMeasures && (
          <section id="security" className="py-12 border-t border-white/5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              Security Architecture
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.securityMeasures.map((measure, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <Shield className="w-4 h-4 text-emerald-500/80 flex-shrink-0" />
                  <span className="text-xs md:text-sm font-sans text-white/80">{measure}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10. DEPLOYMENT */}
        {project.deploymentDetails && (
          <section id="deployment" className="py-12 border-t border-white/5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
              <Lucide.Server className={`w-4 h-4 ${theme.accentText}`} style={{ color: theme.primaryColor }} />
              Deployment Pipeline
            </h3>
            <p className="text-white/75 text-sm sm:text-base font-sans leading-relaxed">
              {project.deploymentDetails}
            </p>
          </section>
        )}

        {/* 11. SCREENSHOTS */}
        {project.screenshots && (
          <section id="screenshots" className="py-12 border-t border-white/5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
              <Lucide.Image className={`w-4 h-4 ${theme.accentText}`} style={{ color: theme.primaryColor }} />
              Visual Interface Preview
            </h3>
            <ScreenshotsGallery images={project.screenshots} theme={theme} />
          </section>
        )}

        {/* 12. LESSONS LEARNED */}
        {project.lessonsLearned && (
          <section id="learnings" className="py-12 border-t border-white/5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
              <BookOpen className={`w-3.5 h-3.5 ${theme.accentText}`} style={{ color: theme.primaryColor }} />
              Reflective Takeaways
            </h3>
            <div className="rounded-xl border border-white/5 bg-[#050505]/40 p-5 md:p-6 space-y-4">
              {project.lessonsLearned.map((learning, idx) => (
                <div key={idx} className="flex gap-3 text-xs md:text-sm font-sans leading-relaxed text-white/75">
                  <span className="font-mono text-[#E1E0CC]/55 select-none font-bold">0{idx + 1}.</span>
                  <p>{learning}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 13. FUTURE IMPROVEMENTS */}
        {project.futureImprovements && (
          <section id="future" className="py-12 border-t border-white/5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
              <Sparkles className={`w-3.5 h-3.5 ${theme.accentText}`} style={{ color: theme.primaryColor }} />
              Roadmap & Future Goals
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.futureImprovements.map((goal, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
                  <span className="text-xs md:text-sm font-sans text-white/80">{goal}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 14. LINKS */}
        <section id="links" className="py-12 border-t border-white/5 space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
            <Lucide.Link2 className={`w-4 h-4 ${theme.accentText}`} style={{ color: theme.primaryColor }} />
            Project Links & Resources
          </h3>
          <ProjectLinks
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            demoUrl={project.demoUrl}
            theme={theme}
          />
        </section>

      </div>
    </main>
  );
}
