"use client";

import React from "react";
import { 
  CheckCircle, 
  Shield, 
  Wrench, 
  Sparkles, 
  AlertCircle, 
  Cpu, 
  ListChecks, 
  PlusCircle, 
  MinusCircle, 
  ShieldCheck, 
  CheckSquare, 
  Terminal,
  Image as ImageIcon,
  BarChart2
} from "lucide-react";
import { Project } from "@/lib/projects";
import { ProjectTheme } from "@/lib/project-design";
import { ArchitectureGrid } from "@/components/ui/project-components";
import MermaidRenderer from "@/components/ui/mermaid-renderer";

interface ComponentProps {
  project: Project;
  theme: ProjectTheme;
}

function renderBoldText(text?: string) {
  if (!text) return null;
  const parts = text.split("**");
  return parts.map((part, index) => {
    return index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-white">{part}</strong>
    ) : (
      part
    );
  });
}

export default function CodeweaveCaseStudy({ project, theme }: ComponentProps) {
  return (
    <>
      {/* 01. CORE PROBLEM */}
      {project.problemStatement && (
        <section id="problem" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500/80" />
              The Core Problem
            </h3>
          </div>
          
          <div className="border-l-2 pl-4 border-red-500/40 space-y-4 max-w-3xl">
            <p className="text-lg md:text-xl font-normal text-[#E1E0CC]/95 leading-relaxed font-sans">
              {renderBoldText(project.problemStatement)}
            </p>
          </div>

          {project.problemPoints && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {project.problemPoints.map((point, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-red-950/20 bg-red-950/[0.01] hover:border-red-950/40 hover:bg-red-950/[0.03] transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-500/10 group-hover:bg-red-500/30 transition-colors" />
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] tracking-widest text-red-400/80 block uppercase">
                      Symptom 0{idx + 1}
                    </span>
                    <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                      {point.title}
                    </h4>
                    <p className="text-[#E1E0CC]/90 text-sm leading-relaxed font-sans">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 02. MOTIVATION */}
      {project.motivation && (
        <section id="motivation" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400/80" />
              Motivation
            </h3>
          </div>

          <blockquote className="text-xl md:text-2xl font-normal text-[#E1E0CC]/95 italic leading-relaxed max-w-3xl pl-4 border-l-2 border-white/10">
            &ldquo;{renderBoldText(project.motivation)}&rdquo;
          </blockquote>

          {project.motivationPoints && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {project.motivationPoints.map((point, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full transition-colors" style={{ backgroundColor: `${theme.primaryColor}20` }} />
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] tracking-widest text-[#E1E0CC]/70 block uppercase">
                      Goal 0{idx + 1}
                    </span>
                    <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                      {point.title}
                    </h4>
                    <p className="text-[#E1E0CC]/90 text-sm leading-relaxed font-sans">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 03. AHA MOMENT */}
      {project.ahaMoment && (
        <section id="aha" className="py-12 border-t border-white/5 scroll-mt-28">
          <div className="p-8 rounded-3xl border bg-white/[0.01] relative overflow-hidden group shadow-2xl transition-all duration-500" style={{ borderColor: `${theme.primaryColor}20` }}>
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse" style={{ backgroundColor: theme.primaryColor }} />
            <div className="relative z-10 space-y-4 max-w-3xl">
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase flex items-center gap-1.5" style={{ color: theme.primaryColor }}>
                <Sparkles className="w-3.5 h-3.5" />
                The Aha Moment
              </span>
              <h3 className="text-xl md:text-2xl font-normal tracking-tight text-[#E1E0CC]/95 leading-relaxed font-sans">
                {renderBoldText(project.ahaMoment)}
              </h3>
            </div>
          </div>
        </section>
      )}

      {/* 04. SOLUTION OVERVIEW */}
      {project.solutionOverview && (
        <section id="solution" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500/80" />
              Solution Strategy
            </h3>
          </div>
          
          <p className="text-[#E1E0CC]/90 text-sm sm:text-base font-normal leading-relaxed tracking-wide max-w-3xl">
            {renderBoldText(project.solutionOverview)}
          </p>

          {project.solutionPoints && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {project.solutionPoints.map((point, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] transition-colors" style={{ backgroundColor: theme.primaryColor }} />
                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-[9px] tracking-widest block uppercase text-white/70">
                      Strategy 0{idx + 1}
                    </span>
                    <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                      {point.title}
                    </h4>
                    <p className="text-[#E1E0CC]/90 text-sm leading-relaxed font-sans">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 05. SYSTEM FLOW */}
      {project.systemFlow && (
        <section id="flow" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
              <Cpu className="w-4 h-4" style={{ color: theme.primaryColor }} />
              Execution Pipeline
            </h3>
          </div>

          <div className="relative border-l border-white/10 pl-6 ml-4 space-y-12 py-2">
            {project.systemFlow.map((flow, idx) => (
              <div key={idx} className="relative group">
                <div 
                  className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border-2 transition-all duration-300 group-hover:scale-125" 
                  style={{ 
                    borderColor: theme.primaryColor, 
                    boxShadow: `0 0 10px ${theme.primaryColor}80, 0 0 4px ${theme.primaryColor}`
                  }} 
                />
                <div className="space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-white/70 block uppercase">
                    Phase {flow.step}
                  </span>
                  <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                    {flow.title}
                  </h4>
                  <p className="text-[#E1E0CC]/90 text-sm leading-relaxed max-w-2xl font-sans">
                    {flow.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 06. System Architecture */}
      {(project.mermaidDiagram || project.architectureDiagram || project.architectureLayers) && (
        <section id="architecture" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
              <Cpu className="w-4 h-4" style={{ color: theme.primaryColor }} />
              System Architecture
            </h3>
          </div>
          
          {project.mermaidDiagram ? (
            <MermaidRenderer chart={project.mermaidDiagram} id={project.id} />
          ) : project.architectureDiagram ? (
            <div className="rounded-xl border border-white/5 bg-[#050505] p-5 md:p-6 overflow-x-auto shadow-inner">
              <pre className="font-mono text-[10px] md:text-xs leading-relaxed text-[#E1E0CC]/95 whitespace-pre">
                {project.architectureDiagram}
              </pre>
            </div>
          ) : null}

          {project.architectureLayers && (
            <div className="space-y-4 pt-4">
              <h4 className="font-mono text-[10px] tracking-widest text-[#E1E0CC]/75 uppercase block">
                Interactive Architectural Layer Breakdown
              </h4>
              <ArchitectureGrid layers={project.architectureLayers} theme={theme} />
            </div>
          )}
        </section>
      )}

      {/* 07. Engineering Decisions */}
      {project.engineeringDecisions && (
        <section id="decisions" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
              <Wrench className="w-4 h-4" style={{ color: theme.primaryColor }} />
              Engineering Decisions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.engineeringDecisions.map((d, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/5 bg-[#050505] space-y-4 relative overflow-hidden hover:border-white/10 transition-all duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-white/50 block mb-1">
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
                    <span className="text-white/85">{d.alternative}</span>
                  </div>
                </div>

                <div className="space-y-2 border-t border-white/5 pt-4 text-xs leading-relaxed font-sans">
                  <p className="text-white/90">
                    <strong>Design Rationale:</strong> {d.rationale}
                  </p>
                  <p className="text-white/70 italic text-xs">
                    <strong>Rejected Drawback:</strong> {d.alternativeRationale}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 08. Constraints & Tradeoffs */}
      {project.tradeoffs && (
        <section id="tradeoffs" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
              <Shield className="w-4 h-4" style={{ color: theme.primaryColor }} />
              Constraints & Tradeoffs
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {project.tradeoffs.map((t, idx) => (
              <div key={idx} className="border border-white/5 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 text-xs md:text-sm font-sans">
                <div className="bg-emerald-950/[0.04] p-5 border-b md:border-b-0 md:border-r border-white/5 space-y-2">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                    <PlusCircle className="w-3.5 h-3.5" /> Optimized Architecture
                  </span>
                  <p className="text-white/95 leading-relaxed font-semibold">{t.optimized}</p>
                </div>
                <div className="bg-red-950/[0.04] p-5 space-y-2">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-red-400 font-semibold flex items-center gap-1.5">
                    <MinusCircle className="w-3.5 h-3.5" /> Accepted Tradeoff
                  </span>
                  <p className="text-[#E1E0CC]/95 leading-relaxed font-medium">{t.sacrificed}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 09. Failure Scenarios */}
      {project.failureScenarios && (
        <section id="failures" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
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
                      <span className="text-xs font-mono text-white/65">Scenario 0{idx + 1}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider leading-snug">
                      {fs.scenario}
                    </h4>
                  </div>
                  <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6 space-y-1">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Active Guardrail
                    </span>
                    <p className="text-[#E1E0CC]/95 text-sm leading-relaxed font-sans">
                      {fs.prevention}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 10. Challenges & Solutions */}
      {project.challengesSolutions && (
        <section id="challenges" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
              <Wrench className="w-4 h-4" style={{ color: theme.primaryColor }} />
              Challenges & Solutions
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.challengesSolutions.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/5 bg-[#050505] space-y-3 relative overflow-hidden hover:border-white/10 transition-all duration-300">
                <span className="text-[9px] font-mono tracking-widest uppercase text-white/50 block">
                  Challenge 0{idx + 1}
                </span>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider leading-snug">
                  {item.challenge}
                </h4>
                <div className="pt-2 border-t border-white/5 text-xs text-[#E1E0CC]/90 leading-relaxed font-sans">
                  <strong className="text-emerald-400 font-mono tracking-wider uppercase text-[9px] block mb-1">✓ Solution Approach</strong>
                  <p>{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 11. Security Measures */}
      {project.securityMeasures && (
        <section id="security" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" style={{ color: theme.primaryColor }} />
              Security & Guardrails
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.securityMeasures.map((measure, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                <span className="font-mono text-xs font-semibold text-[#E1E0CC]/40 mt-0.5">0{idx + 1}.</span>
                <span className="text-[#E1E0CC]/95 font-sans font-medium leading-relaxed text-xs md:text-sm">{measure}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 12. Walkthrough Gallery */}
      {project.screenshots && (
        <section id="screenshots" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
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
                <p className="text-[10px] font-mono text-[#E1E0CC]/70 uppercase tracking-widest block text-right pr-2">
                  Interface View 0{idx + 1}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 13. Metrics */}
      {project.keyMetrics && (
        <section id="metrics" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
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
                    className="text-4xl md:text-5xl font-normal tracking-tighter block"
                    style={{ color: theme.primaryColor }}
                  >
                    {m.value}
                  </span>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white/90 font-semibold">
                    {m.label}
                  </h4>
                  <p className="text-white/75 text-xs leading-relaxed font-sans">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 14. Lessons Learned */}
      {project.lessonsLearned && (
        <section id="lessons" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
              <Terminal className="w-4 h-4" style={{ color: theme.primaryColor }} />
              Lessons Learned
            </h3>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#050505] p-6 font-mono text-xs md:text-sm leading-relaxed space-y-4">
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-white/60 text-[10px] ml-2">lessons_learned.log</span>
            </div>
            <div className="space-y-3 pt-2 text-[#E1E0CC]/95">
              {project.lessonsLearned.map((lesson, idx) => (
                <p key={idx}>
                  <span className="text-white/70">0{idx + 1} //</span> {lesson}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 15. Future Evolution */}
      {(project.futureEvolution || project.futureImprovements) && (
        <section id="future" className="py-12 border-t border-white/5 space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
              <ListChecks className="w-4 h-4" style={{ color: theme.primaryColor }} />
              Future Evolution
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {((project.futureEvolution || project.futureImprovements) as string[]).map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] text-xs md:text-sm">
                <CheckSquare className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: theme.primaryColor }} />
                <span className="text-[#E1E0CC]/95 font-sans font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
