import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  CheckCircle, 
  Shield, 
  Wrench, 
  Sparkles, 
  BookOpen, 
  AlertCircle, 
  ArrowUpRight, 
  Cpu, 
  ListChecks, 
  PlusCircle, 
  MinusCircle, 
  ShieldCheck, 
  CheckSquare, 
  Terminal,
  FolderCode,
  Link2,
  Image as ImageIcon,
  BarChart2
} from "lucide-react";
import * as Lucide from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getProjectTheme } from "@/lib/project-design";
import {
  ProjectBadge,
  ProjectLinks,
  TechBadge,
  ArchitectureGrid
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
    { id: "overview", label: "Executive Summary" },
    ...(project.problemStatement ? [{ id: "problem", label: "Core Problem" }] : []),
    ...(project.motivation ? [{ id: "motivation", label: "Motivation" }] : []),
    ...(project.ahaMoment ? [{ id: "aha", label: "Aha Moment" }] : []),
    ...(project.solutionOverview ? [{ id: "solution", label: "Solution Strategy" }] : []),
    ...(project.systemFlow ? [{ id: "flow", label: "System Flow" }] : []),
    ...(project.mermaidDiagram || project.architectureDiagram || project.architectureLayers ? [{ id: "architecture", label: "Architecture" }] : []),
    ...(project.engineeringDecisions ? [{ id: "decisions", label: "Decisions" }] : []),
    ...(project.tradeoffs ? [{ id: "tradeoffs", label: "Tradeoffs" }] : []),
    ...(project.failureScenarios ? [{ id: "failures", label: "Failure Modes" }] : []),
    ...(project.screenshots ? [{ id: "screenshots", label: "Walkthrough" }] : []),
    ...(project.keyMetrics ? [{ id: "metrics", label: "Metrics" }] : []),
    ...(project.lessonsLearned ? [{ id: "lessons", label: "Lessons" }] : []),
    ...(project.futureEvolution || project.futureImprovements ? [{ id: "future", label: "Roadmap" }] : []),
  ];

  return (
    <main className="min-h-screen w-full bg-black text-white px-6 md:px-12 py-28 md:py-36 relative overflow-hidden flex flex-col items-center">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
      
      {/* Scroll-Aware Progress Rail (Sticky right) */}
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

        {/* 1. HERO SECTION (Overview) - Split Editorial Banner Layout */}
        <section id="overview" className="space-y-12 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Heading and pitch */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap gap-2.5 items-center">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                  <IconComponent className="w-3.5 h-3.5" style={{ color: theme.primaryColor }} />
                  {project.category}
                </span>
                <ProjectBadge status={project.status} theme={theme} />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tighter leading-none text-white">
                {project.title}{" "}
                {project.featured && (
                  <Sparkles className="inline-block w-8 h-8 text-amber-400 ml-2 align-middle animate-pulse" />
                )}
              </h1>

              <p className="text-[#E1E0CC]/95 text-lg md:text-xl font-light leading-relaxed tracking-wide max-w-2xl font-sans">
                {project.shortDescription}
              </p>

              {project.fullDescription && (
                <p className="text-[#E1E0CC]/75 text-sm md:text-base font-normal leading-relaxed tracking-wide max-w-2xl pt-2">
                  {project.fullDescription}
                </p>
              )}
            </div>

            {/* Right Column: Project Access Card (Premium Sidebar Layout) */}
            <div className={`lg:col-span-4 p-7 rounded-3xl border ${theme.borderMuted} bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md relative overflow-hidden space-y-6 transition-all duration-500 ${theme.borderActive} shadow-2xl`}>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ backgroundColor: theme.primaryColor }} />
              
              <div className="space-y-4">
                <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/40 flex items-center gap-2 border-b border-white/5 pb-2.5">
                  <FolderCode className="w-3.5 h-3.5" style={{ color: theme.primaryColor }} />
                  Tech Employed
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <TechBadge key={tech} tech={tech} variant="compact" />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/40 flex items-center gap-2 border-b border-white/5 pb-2.5">
                  <Link2 className="w-3.5 h-3.5" style={{ color: theme.primaryColor }} />
                  Project Access
                </h3>
                <div className="flex flex-col gap-2.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest py-3 px-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 hover:border-white/20 transition-all duration-300 text-center w-full text-white/80 hover:text-white"
                    >
                      <FaGithub className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest py-3 px-4 rounded-xl transition-all duration-300 text-center w-full text-black font-semibold hover:scale-[1.02] shadow-[0_4px_15px_var(--glow-color)] hover:shadow-[0_6px_20px_var(--hover-glow-color)]"
                      style={{ 
                        backgroundColor: theme.primaryColor,
                        "--glow-color": `${theme.primaryColor}25`,
                        "--hover-glow-color": `${theme.primaryColor}40`
                      } as React.CSSProperties}
                    >
                      Live Demo
                      <Lucide.ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest py-3 px-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 hover:border-white/20 transition-all duration-300 text-center w-full text-white/80 hover:text-white"
                    >
                      <Lucide.Play className="w-4 h-4 fill-white/10" />
                      Video Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 space-y-3.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#E1E0CC]/40">Released</span>
                  <span className="text-white font-medium font-mono">{project.year}</span>
                </div>
                <div className="flex flex-col gap-1 border-t border-white/5 pt-3 text-xs">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#E1E0CC]/40">Classification</span>
                  <span className="text-[#E1E0CC]/80 text-[11px] leading-relaxed font-sans font-normal">
                    {project.projectType}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Cinematic Banner */}
          <div className={`w-full aspect-video rounded-3xl overflow-hidden border ${theme.borderMuted} relative shadow-2xl transition-all duration-500 hover:shadow-3xl`}>
            <img
              src={theme.imageSrc}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            <div className={`absolute inset-0 opacity-[0.05] ${theme.bgGlow} mix-blend-color`} />
          </div>
        </section>

        {/* 2. THE CORE PROBLEM */}
        {project.problemStatement && (
          <section id="problem" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/50 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500/80" />
                The Core Problem
              </h3>
            </div>
            
            <div className="border-l-2 pl-4 border-red-500/40 space-y-4 max-w-3xl">
              <p className="text-lg md:text-xl font-light text-[#E1E0CC]/95 leading-relaxed font-sans">
                {project.problemStatement}
              </p>
            </div>

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

        {/* 3. MOTIVATION */}
        {project.motivation && (
          <section id="motivation" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/50 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400/80" />
                Motivation
              </h3>
            </div>

            <blockquote className="text-xl md:text-2xl font-light text-[#E1E0CC]/90 italic leading-relaxed max-w-3xl pl-4 border-l-2 border-white/10">
              &ldquo;{project.motivation.replace(/\*\*/g, "")}&rdquo;
            </blockquote>

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

        {/* 4. THE AHA MOMENT */}
        {project.ahaMoment && (
          <section id="aha" className="py-12 border-t border-white/5 scroll-mt-28">
            <div className="p-8 rounded-3xl border bg-white/[0.01] relative overflow-hidden group shadow-2xl transition-all duration-500" style={{ borderColor: `${theme.primaryColor}20` }}>
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse" style={{ backgroundColor: theme.primaryColor }} />
              <div className="relative z-10 space-y-4 max-w-3xl">
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase flex items-center gap-1.5" style={{ color: theme.primaryColor }}>
                  <Sparkles className="w-3.5 h-3.5" />
                  The Aha Moment
                </span>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white leading-snug">
                  {project.ahaMoment}
                </h3>
              </div>
            </div>
          </section>
        )}

        {/* 5. SOLUTION STRATEGY */}
        {project.solutionOverview && (
          <section id="solution" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/50 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500/80" />
                Solution Strategy
              </h3>
            </div>
            
            <p className="text-[#E1E0CC]/80 text-sm sm:text-base font-normal leading-relaxed tracking-wide max-w-3xl">
              {project.solutionOverview}
            </p>

            {project.solutionPoints && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {project.solutionPoints.map((point, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[2px] transition-colors" style={{ backgroundColor: theme.primaryColor }} />
                    <div className="space-y-2 pt-2">
                      <span className="font-mono text-[9px] tracking-widest block uppercase text-white/40">
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

        {/* 6. HOW SYSTEM WORKS (Timeline Flow) */}
        {project.systemFlow && (
          <section id="flow" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/50 flex items-center gap-2">
                <Cpu className="w-4 h-4" style={{ color: theme.primaryColor }} />
                Execution Pipeline
              </h3>
            </div>

            <div className="relative border-l border-white/10 pl-6 ml-4 space-y-12 py-2">
              {project.systemFlow.map((flow, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node */}
                  <div 
                    className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border-2 transition-all duration-300 group-hover:scale-125" 
                    style={{ 
                      borderColor: theme.primaryColor, 
                      boxShadow: `0 0 10px ${theme.primaryColor}80, 0 0 4px ${theme.primaryColor}`
                    }} 
                  />
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] tracking-widest text-white/30 block uppercase">
                      Phase {flow.step}
                    </span>
                    <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                      {flow.title}
                    </h4>
                    <p className="text-[#E1E0CC]/70 text-xs md:text-sm leading-relaxed max-w-2xl font-sans">
                      {flow.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. SYSTEM ARCHITECTURE & FLOW */}
        {(project.mermaidDiagram || project.architectureDiagram || project.architectureLayers) && (
          <section id="architecture" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/50 flex items-center gap-2">
                <Cpu className="w-4 h-4" style={{ color: theme.primaryColor }} />
                System Architecture
              </h3>
            </div>
            
            {project.mermaidDiagram ? (
              <MermaidRenderer chart={project.mermaidDiagram} id={project.id} />
            ) : project.architectureDiagram ? (
              <div className="rounded-xl border border-white/5 bg-[#050505] p-5 md:p-6 overflow-x-auto shadow-inner">
                <pre className="font-mono text-[10px] md:text-xs leading-relaxed text-[#E1E0CC]/80 whitespace-pre">
                  {project.architectureDiagram}
                </pre>
              </div>
            ) : null}

            {project.architectureLayers && (
              <div className="space-y-4 pt-4">
                <h4 className="font-mono text-[10px] tracking-widest text-[#E1E0CC]/40 uppercase block">
                  Interactive Architectural Layer Breakdown
                </h4>
                <ArchitectureGrid layers={project.architectureLayers} theme={theme} />
              </div>
            )}
          </section>
        )}

        {/* 8. ENGINEERING DECISIONS */}
        {project.engineeringDecisions && (
          <section id="decisions" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/50 flex items-center gap-2">
                <Wrench className="w-4 h-4" style={{ color: theme.primaryColor }} />
                Engineering Decisions
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.engineeringDecisions.map((d, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-white/5 bg-[#050505] space-y-4 relative overflow-hidden hover:border-white/10 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-mono tracking-widest uppercase text-white/30 block mb-1">
                        Decision 0{idx + 1}
                      </span>
                      <h4 className="text-base font-semibold text-white tracking-wide uppercase">
                        {d.decision}
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4 text-xs font-mono">
                    <div>
                      <span className="text-emerald-400 block mb-1 uppercase tracking-wider text-[9px]">✓ Selected Choice</span>
                      <span className="text-white font-bold">{d.chosen}</span>
                    </div>
                    <div>
                      <span className="text-red-400 block mb-1 uppercase tracking-wider text-[9px]">✗ Evaluated Alternative</span>
                      <span className="text-white/60">{d.alternative}</span>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-white/5 pt-4 text-xs leading-relaxed font-sans border-t border-white/5">
                    <p className="text-white/80">
                      <strong>Design Rationale:</strong> {d.rationale}
                    </p>
                    <p className="text-white/40 italic text-[11px]">
                      <strong>Rejected Drawback:</strong> {d.alternativeRationale}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 9. CONSTRAINTS & TRADEOFFS */}
        {project.tradeoffs && (
          <section id="tradeoffs" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/50 flex items-center gap-2">
                <Shield className="w-4 h-4" style={{ color: theme.primaryColor }} />
                Constraints & Tradeoffs
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {project.tradeoffs.map((t, idx) => (
                <div key={idx} className="border border-white/5 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 text-xs md:text-sm font-sans">
                  {/* Optimized side */}
                  <div className="bg-emerald-950/[0.04] p-5 border-b md:border-b-0 md:border-r border-white/5 space-y-2">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                      <PlusCircle className="w-3.5 h-3.5" /> Optimized Architecture
                    </span>
                    <p className="text-white/90 leading-relaxed font-medium">{t.optimized}</p>
                  </div>
                  {/* Sacrificed side */}
                  <div className="bg-red-950/[0.04] p-5 space-y-2">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-red-400 font-semibold flex items-center gap-1.5">
                      <MinusCircle className="w-3.5 h-3.5" /> Accepted Tradeoff
                    </span>
                    <p className="text-[#E1E0CC]/80 leading-relaxed">{t.sacrificed}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10. FAILURE SCENARIOS & GUARDRAILS */}
        {project.failureScenarios && (
          <section id="failures" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/50 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" style={{ color: theme.primaryColor }} />
                Failure Scenarios
              </h3>
            </div>

            <div className="space-y-4">
              {project.failureScenarios.map((fs, idx) => {
                const riskColors = {
                  low: "bg-blue-950/40 border-blue-900/50 text-blue-400",
                  medium: "bg-amber-950/40 border-amber-900/50 text-amber-400",
                  high: "bg-red-950/40 border-red-900/50 text-red-400"
                }[fs.riskLevel] || "bg-neutral-900 border-white/10 text-white/70";

                return (
                  <div key={idx} className="border border-white/5 bg-[#050505] rounded-2xl p-6 grid md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-5 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border ${riskColors}`}>
                          Risk: {fs.riskLevel}
                        </span>
                        <span className="text-xs font-mono text-white/30">Scenario 0{idx + 1}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white uppercase tracking-wider leading-snug">
                        {fs.scenario}
                      </h4>
                    </div>
                    <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6 space-y-1">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> Active Guardrail
                      </span>
                      <p className="text-[#E1E0CC]/80 text-xs md:text-sm leading-relaxed font-sans">
                        {fs.prevention}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 11. SCREENSHOTS & WALKTHROUGH */}
        {project.screenshots && (
          <section id="screenshots" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/50 flex items-center gap-2">
                <ImageIcon className="w-4 h-4" style={{ color: theme.primaryColor }} />
                Product Walkthrough
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.screenshots.map((img, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl relative group">
                    <img
                      src={img}
                      alt={`Walkthrough screenshot ${idx + 1}`}
                      className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <p className="text-[10px] font-mono text-[#E1E0CC]/40 uppercase tracking-widest block text-right pr-2">
                    Interface View 0{idx + 1}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 12. KEY METRICS */}
        {project.keyMetrics && (
          <section id="metrics" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/50 flex items-center gap-2">
                <BarChart2 className="w-4 h-4" style={{ color: theme.primaryColor }} />
                Metrics & Validation
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.keyMetrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm relative overflow-hidden group hover:border-[#E1E0CC]/20 hover:shadow-[0_0_20px_rgba(225,224,204,0.04)] transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ backgroundColor: theme.primaryColor }} />
                  <div className="relative z-10 space-y-2">
                    <span
                      className="text-4xl md:text-5xl font-light tracking-tighter block"
                      style={{ color: theme.primaryColor }}
                    >
                      {m.value}
                    </span>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-white/80 font-medium">
                      {m.label}
                    </h4>
                    <p className="text-white/40 text-[11px] leading-relaxed font-sans">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 13. LESSONS LEARNED */}
        {project.lessonsLearned && (
          <section id="lessons" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/50 flex items-center gap-2">
                <Terminal className="w-4 h-4" style={{ color: theme.primaryColor }} />
                Lessons Learned
              </h3>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#050505] p-6 font-mono text-xs md:text-sm leading-relaxed space-y-4">
              <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-white/30 text-[10px] ml-2">lessons_learned.log</span>
              </div>
              <div className="space-y-3 pt-2 text-[#E1E0CC]/80">
                {project.lessonsLearned.map((lesson, idx) => (
                  <p key={idx}>
                    <span className="text-white/30">0{idx + 1} //</span> {lesson}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 14. FUTURE EVOLUTION */}
        {(project.futureEvolution || project.futureImprovements) && (
          <section id="future" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/50 flex items-center gap-2">
                <ListChecks className="w-4 h-4" style={{ color: theme.primaryColor }} />
                Future Evolution
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {((project.futureEvolution || project.futureImprovements) as string[]).map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] text-xs md:text-sm">
                  <CheckSquare className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: theme.primaryColor }} />
                  <span className="text-[#E1E0CC]/80 font-sans leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
