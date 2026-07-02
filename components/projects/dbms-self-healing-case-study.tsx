"use client";

import React from "react";
import { 
  Sparkles, 
  Cpu, 
  AlertCircle, 
  CheckCircle, 
  Terminal, 
  Database,
  ArrowRight,
  XCircle,
  Zap,
  Activity
} from "lucide-react";
import { ProjectTheme } from "@/lib/project-design";
import { Project } from "@/lib/projects";
import PremiumGallery from "@/components/ui/premium-gallery";
import ZoomableImage from "@/components/ui/zoomable-image";

interface ComponentProps {
  theme: ProjectTheme;
}

// 01. THE CORE PROBLEM
export function DbmsCoreProblem({ theme }: ComponentProps) {
  return (
    <section id="problem" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/20">
          <AlertCircle className="w-4 h-4 text-rose-500" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-white/60">
          The Core Problem
        </h3>
      </div>
      
      <div className="space-y-10 max-w-5xl">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.15]">
          Monitoring tells you something broke. Healing fixes it before <span className="font-medium text-rose-400">anyone notices.</span>
        </h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-6 text-[#E1E0CC]/70 font-light leading-relaxed text-lg">
            <p>
              We are great at building dashboards that turn red when a database is struggling. But alerting isn't the same as fixing. When a deadlock occurs or a rogue query starts hogging the CPU, an alert goes out. Then, we wait for an on-call engineer to wake up, log in, diagnose the issue, and manually kill the bad query.
            </p>
            <p>
              By the time that human intervention happens, a minor bottleneck has already cascaded into a full-blown service outage. Under heavy traffic, issues like <span className="text-white font-normal">connection queue starvation and index fragmentation</span> rip through microservices instantly. Human reaction time is simply too slow to stop it.
            </p>
          </div>
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm group hover:border-white/20 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ backgroundColor: theme.primaryColor }} />
              <QuoteIcon className="w-10 h-10 text-white/10 absolute top-4 left-6" />
              <blockquote className="relative z-10 text-white/90 italic font-light text-xl leading-relaxed pt-4">
                "Dashboards don't fix databases. When traffic spikes and threads lock up, the gap between an alert firing and a system crashing is measured in milliseconds, not minutes."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 02. WHY I BUILT THIS
export function DbmsWhyIBuiltThis({ theme }: ComponentProps) {
  return (
    <section id="motivation" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20">
          <Sparkles className="w-4 h-4 text-amber-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-white/60">
          Why I Built This
        </h3>
      </div>

      <div className="space-y-8 max-w-4xl">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.15]">
          What happens if we teach a database <br className="hidden md:block"/>
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">to defend itself?</span>
        </h4>

        <div className="space-y-6 text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
          <p>
            I've always found it strange that we treat databases as passive storage buckets. We wrap them in external monitoring agents and assume that's enough. But if the monitoring daemon crashes, or the network drops during a massive workload spike, the database is left completely blind and defenseless.
          </p>
          <div className="p-6 rounded-xl border border-white/10 bg-black/50 text-white font-medium text-xl shadow-inner">
            Can the database participate directly in its own survival?
          </div>
          <p>
            I built this engine to explore a different approach. By moving the logic for detecting, deciding, and fixing issues <strong className="font-normal text-white">natively inside the database engine itself</strong>, we remove the fragile network hops between an alert and a fix. The database ceases to be a passive container and becomes an active, self-correcting system.
          </p>
        </div>
      </div>
    </section>
  );
}

// 03. THE SOLUTION
export function DbmsTheSolution({ theme }: ComponentProps) {
  return (
    <section id="solution" className="py-20 border-t border-white/5 space-y-16 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <CheckCircle className="w-4 h-4 text-emerald-500" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-white/60">
          The Solution
        </h3>
      </div>

      <div className="space-y-16 max-w-5xl">
        
        {/* Hero Statement */}
        <div className="py-20 px-8 rounded-[2rem] border border-white/10 bg-[#050505] relative overflow-hidden group shadow-2xl flex flex-col justify-center items-center text-center">
          <div 
            className="absolute inset-0 opacity-20 blur-[100px] transition-opacity duration-700 group-hover:opacity-30 pointer-events-none" 
            style={{ background: `radial-gradient(circle at 50% 50%, ${theme.primaryColor}, transparent 70%)` }}
          />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
          
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/50 mb-6 block z-10">Architectural Paradigm</span>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-extralight tracking-tight leading-tight text-white max-w-3xl z-10">
            "We don't monitor from <span className="font-medium text-white/50 line-through decoration-rose-500/50">outside</span>. <br className="hidden md:block"/>
            We heal from <span className="font-semibold drop-shadow-lg" style={{ color: theme.primaryColor }}>within</span>."
          </h3>
        </div>

        {/* Comparison Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h5 className="text-sm font-mono uppercase tracking-widest text-white/60">Operating Model Comparison</h5>
            <p className="text-white/40 text-sm font-light">How native healing eliminates the network bottleneck</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
            {/* VS Badge */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 items-center justify-center text-xs font-mono text-white/40 z-10">
              VS
            </div>

            {/* Left: Traditional */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <XCircle className="w-5 h-5 text-neutral-500" />
                <span className="text-sm font-mono uppercase tracking-wider text-neutral-400">Traditional Pull Model</span>
              </div>
              <ul className="space-y-4 text-sm text-neutral-400 font-light">
                {['External agents constantly poll the database for stats.', 'Alerts ping the on-call engineer at 3 AM.', 'Network hops and human reaction time add minutes of lag.', 'Engineers run high-risk remediation scripts manually.'].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Native (Highlighted) */}
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent relative overflow-hidden shadow-2xl transition-transform hover:-translate-y-1 duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none" style={{ backgroundColor: theme.primaryColor }} />
              
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 relative z-10">
                <Zap className="w-5 h-5" style={{ color: theme.primaryColor }} />
                <span className="text-sm font-mono uppercase tracking-wider font-semibold" style={{ color: theme.primaryColor }}>Database-Native Push Model</span>
              </div>
              
              <ul className="space-y-4 text-sm text-white/80 font-light mt-6 relative z-10">
                {[
                  'Stored Procedures natively monitor internal memory and thread states.', 
                  'The DB Event Scheduler runs checks without external triggers.', 
                  'Zero network latency between detecting a lock and resolving it.', 
                  'The database surgically kills rogue queries to save itself.'
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 transition-colors" style={{ color: theme.primaryColor }} />
                    <span className="leading-relaxed group-hover:text-white transition-colors">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 04. SYSTEM ARCHITECTURE
export function DbmsSystemArchitecture({ theme }: ComponentProps) {
  return (
    <section id="architecture" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border" style={{ backgroundColor: `${theme.primaryColor}15`, borderColor: `${theme.primaryColor}30` }}>
          <Cpu className="w-4 h-4" style={{ color: theme.primaryColor }} />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-white/60">
          System Architecture
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
          A decoupled, native-first orchestration engine.
        </h4>

        <div className="space-y-6 text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
          <p>
            The architecture is intentionally split. The critical execution loop—detecting anomalies, scoring severity, and executing recovery—runs <strong className="text-white font-normal">entirely inside MySQL</strong> using Stored Procedures and the Event Scheduler. 
          </p>
          <p>
            A lightweight FastAPI node sits on the outside, simply reading the database's internal logs and passing state vectors to a Next.js dashboard. This ensures the database can still heal itself even if the external dashboard or API goes completely offline.
          </p>
        </div>

        {/* Media Block 1 */}
        <div className="space-y-5 pt-8">
          <ZoomableImage
            src="/PROJECTS/DBMS_SELF_HEALING/Architecture Diagram.webp"
            alt="System Architecture & Telemetry Flow"
            wrapperClassName="w-full h-auto shadow-2xl ring-1 ring-white/10"
          />
          <div className="flex items-start gap-3 px-2">
            <ArrowRight className="w-4 h-4 text-white/40 mt-1 shrink-0" />
            <div>
              <h5 className="text-sm font-medium text-white">System Architecture & Telemetry Flow</h5>
              <p className="text-sm text-white/50 font-light mt-1">
                The architecture is split: native database logic guarantees survival, while a Next.js frontend provides human oversight.
              </p>
            </div>
          </div>
        </div>

        {/* Media Block 2 */}
        <div className="space-y-5 pt-8">
          <ZoomableImage
            src="/PROJECTS/DBMS_SELF_HEALING/DIAGRAM-Dynamic Interaction Sequence.webp"
            alt="Dynamic Interaction Sequence Diagram"
            wrapperClassName="w-full h-auto shadow-2xl ring-1 ring-white/10"
          />
          <div className="flex items-start gap-3 px-2">
            <Activity className="w-4 h-4 text-white/40 mt-1 shrink-0" />
            <div>
              <h5 className="text-sm font-medium text-white">Dynamic Interaction Sequence</h5>
              <p className="text-sm text-white/50 font-light mt-1">
                How a slow query triggers an internal baseline check, leading to a safe, automated rollback pathway.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// 05. STATISTICAL INTELLIGENCE ENGINE
export function DbmsStatisticalEngine({ theme }: ComponentProps) {
  return (
    <section id="statistics" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border" style={{ backgroundColor: `${theme.primaryColor}15`, borderColor: `${theme.primaryColor}30` }}>
          <Terminal className="w-4 h-4" style={{ color: theme.primaryColor }} />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-white/60">
          Intelligence Engine
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
          Teaching the system what "normal" actually looks like.
        </h4>

        <div className="space-y-6 text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
          <p>
            Hardcoded alerts—like triggering an error whenever CPU usage hits 90%—are practically useless in the real world. A heavy, scheduled backup job might spike the CPU naturally every night, and automatically killing that process would be a disaster. The system needed to understand context.
          </p>
          <p>
            So, I built an engine that continuously learns what normal behavior looks like for different times of the day. It calculates a rolling historical baseline and only triggers a healing action if the current database behavior mathematically deviates from that <span className="text-white">specific, time-weighted baseline</span>.
          </p>
        </div>

        {/* Mathematical Visualizations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          
          {/* Math Card 1 */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none" />
            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">Log-Normalized Z-Score</span>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  Helps the system measure how far a metric has strayed from the baseline, while safely ignoring massive, momentary spikes.
                </p>
              </div>
              <div className="p-6 bg-black/60 rounded-xl border border-white/5 flex justify-center items-center font-mono text-xl text-white/90 shadow-inner group-hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-4">
                  <span>Z =</span>
                  <div className="flex flex-col items-center">
                    <span className="px-3 pb-1 border-b border-white/20">ln(x_t) - &mu;_ln</span>
                    <span className="px-3 pt-1 text-white/60">&sigma;_ln</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Math Card 2 */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-32 h-32 bg-teal-500/10 blur-[50px] rounded-full pointer-events-none" />
            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">Dynamic Sensitivity</span>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  When traffic is naturally erratic, it loosens the rules to prevent false alarms. When traffic is steady, it tightens them.
                </p>
              </div>
              <div className="p-6 bg-black/60 rounded-xl border border-white/5 flex justify-center items-center font-mono text-xl text-white/90 shadow-inner group-hover:border-teal-500/30 transition-colors">
                <div className="flex items-center gap-4">
                  <span>CV =</span>
                  <div className="flex flex-col items-center">
                    <span className="px-3 pb-1 border-b border-white/20">&sigma;</span>
                    <span className="px-3 pt-1 text-white/60">&mu;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Screenshots Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          <div className="space-y-4 group">
            <div className="rounded-2xl border border-white/10 bg-[#030303] overflow-hidden p-2 shadow-2xl transition-colors group-hover:border-white/20">
              <img
                src="/PROJECTS/DBMS_SELF_HEALING/Healing Lifecycle.webp"
                alt="Healing Pipeline"
                className="w-full h-auto rounded-xl block object-cover aspect-[4/3] transform group-hover:scale-[1.03] transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="px-1">
              <h5 className="text-sm font-medium text-white">Closed-Loop Pipeline</h5>
              <p className="text-sm text-white/50 font-light mt-1">The step-by-step pipeline from spotting an anomaly to executing a fix and learning from it.</p>
            </div>
          </div>

          <div className="space-y-4 group">
            <div className="rounded-2xl border border-white/10 bg-[#030303] overflow-hidden p-2 shadow-2xl transition-colors group-hover:border-white/20">
              <img
                src="/PROJECTS/DBMS_SELF_HEALING/DASHBOARD-AI-ANALYSIS.webp"
                alt="AI Analysis Interface"
                className="w-full h-auto rounded-xl block object-cover aspect-[4/3] transform group-hover:scale-[1.03] transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="px-1">
              <h5 className="text-sm font-medium text-white">Severity Scoring UI</h5>
              <p className="text-sm text-white/50 font-light mt-1">A human-readable view of the database's internal mathematical bounds and anomaly scores.</p>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}

// 06. WALKTHROUGH
export function DbmsWalkthrough({ project, theme }: { project: Project; theme: ProjectTheme }) {
  if (!project.detailedScreenshots) return null;
  return (
    <section id="screenshots" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border" style={{ backgroundColor: `${theme.primaryColor}15`, borderColor: `${theme.primaryColor}30` }}>
          <Database className="w-4 h-4" style={{ color: theme.primaryColor }} />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-white/60">
          Product Walkthrough
        </h3>
      </div>
      <div className="max-w-6xl">
        <PremiumGallery screenshots={project.detailedScreenshots} theme={theme} />
      </div>
    </section>
  );
}

// Helper SVG for Blockquote
function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      {...props}
    >
      <path d="M14.017 21L16.41 14.925H10.846V3H21V11.238L16.326 21H14.017ZM3.068 21L5.461 14.925H-0.103V3H10.051V11.238L5.377 21H3.068Z" />
    </svg>
  );
}

// Main Default Export
export default function DbmsSelfHealingCaseStudy({ project, theme }: { project: Project; theme: ProjectTheme }) {
  return (
    <div className="space-y-12 pb-24">
      <DbmsCoreProblem theme={theme} />
      <DbmsWhyIBuiltThis theme={theme} />
      <DbmsTheSolution theme={theme} />
      <DbmsStatisticalEngine theme={theme} />
      <DbmsSystemArchitecture theme={theme} />
      <DbmsWalkthrough project={project} theme={theme} />
    </div>
  );
}