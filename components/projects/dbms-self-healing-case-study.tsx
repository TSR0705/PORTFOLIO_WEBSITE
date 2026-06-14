"use client";

import React from "react";
import { Sparkles, Cpu, AlertCircle, CheckCircle, Terminal, Database } from "lucide-react";
import { ProjectTheme } from "@/lib/project-design";

interface ComponentProps {
  theme: ProjectTheme;
}

// 01. THE CORE PROBLEM
export function DbmsCoreProblem({ theme }: ComponentProps) {
  return (
    <section id="problem" className="py-16 border-t border-white/5 space-y-10 scroll-mt-28">
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
        <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-500/80" />
          The Core Problem
        </h3>
      </div>
      
      <div className="space-y-8 max-w-4xl">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white leading-tight">
          Reactive operations fail when milliseconds determine database survival.
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 text-[#E1E0CC]/80 font-light leading-relaxed text-base md:text-lg">
          <div className="md:col-span-8 space-y-6">
            <p>
              Traditional database monitoring models are fundamentally reactive. They rely on external telemetry agents to query status metrics, output log file sequences, and push event anomalies to paging services. By the time an incident triggers a notification and a database administrator logs in to diagnose the stack, the bottleneck has already cascaded.
            </p>
            <p>
              Under heavy transactional concurrency, issues like database deadlocks, slow execution plans, connection queue starvation, and index fragmentation propagate through microservices in seconds. Waiting for human assessment or external script runbooks introduces catastrophic latency, transforming minor database anomalies into global service outages.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col justify-center border-l border-white/5 pl-6">
            <blockquote className="text-white italic font-normal text-base md:text-lg leading-relaxed">
              "Alerting is not healing. In high-concurrency systems, the window between anomaly threshold crossing and service degradation is measured in milliseconds, not minutes."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

// 02. WHY I BUILT THIS
export function DbmsWhyIBuiltThis({ theme }: ComponentProps) {
  return (
    <section id="motivation" className="py-16 border-t border-white/5 space-y-10 scroll-mt-28">
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
        <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400/80" />
          Why I Built This
        </h3>
      </div>

      <div className="space-y-8 max-w-4xl">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white leading-tight">
          Challenging the assumption of out-of-process reliability.
        </h4>

        <div className="space-y-6 text-[#E1E0CC]/80 font-light leading-relaxed text-base md:text-lg max-w-3xl">
          <p>
            Most engineering teams treat databases as passive storage nodes monitored by external agents. This creates architectural vulnerabilities: if the monitoring daemon crashes, loses network routing, or consumes host CPU during a workload spike, the database is left completely blind and defenseless.
          </p>
          <p>
            I built this engine to explore a database-native paradigm. I wanted to answer a fundamental systems question: <strong className="font-normal text-white">Can the database participate directly in its own reliability lifecycle?</strong> 
          </p>
          <p>
            By embedding detection, routing, execution, and verification logic natively within the database engine itself, we decouple reliability from external network dependencies. The storage engine ceases to be a passive container; it becomes an active, self-correcting organism capable of preserving its own uptime under operational pressure.
          </p>
        </div>
      </div>
    </section>
  );
}

// 03. THE SOLUTION
export function DbmsTheSolution({ theme }: ComponentProps) {
  return (
    <section id="solution" className="py-16 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
        <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-500/80" />
          The Solution
        </h3>
      </div>

      <div className="space-y-12 max-w-4xl">
        <div className="space-y-4">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white leading-tight">
            Intelligence embedded directly inside the database kernel.
          </h4>
        </div>

        {/* Giant Graphic Text Statement */}
        <div className="py-14 px-8 rounded-3xl border border-white/5 bg-[#030303] relative overflow-hidden group shadow-2xl flex flex-col justify-center items-center text-center">
          <div 
            className="absolute inset-0 opacity-10 blur-3xl pointer-events-none" 
            style={{ background: `radial-gradient(circle, ${theme.primaryColor} 0%, transparent 60%)` }}
          />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-3 block">Architectural Paradigm</span>
          <h3 className="text-xl sm:text-2xl md:text-4xl font-extralight tracking-tight leading-snug text-white max-w-2xl">
            "We don't monitor from <span className="font-semibold text-white relative">outside<span className="absolute bottom-1 left-0 w-full h-[2px]" style={{ backgroundColor: theme.primaryColor }} /></span>. We heal from <span className="font-semibold" style={{ color: theme.primaryColor }}>within</span>."
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#E1E0CC]/80 font-light leading-relaxed text-base">
          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.primaryColor }} />
              Database-Native Execution
            </h5>
            <p className="text-sm md:text-base">
              Instead of log-scraping or polling queries from external hosts, the engine evaluates transactional health directly from MySQL system statistics and tables. Telemetry, baseline scoring, and recovery pipelines compile and execute natively inside the storage engine, reducing detection-to-remediation latency to zero network hops.
            </p>
          </div>
          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.primaryColor }} />
              Closed-Loop Reliability
            </h5>
            <p className="text-sm md:text-base">
              Every autonomous action executes inside a strict validation envelope. The database does not blind-kill threads. It evaluates anomalous context, schedules transaction safe rollbacks, executes remediation, verifies outcome metrics, and updates a statistical learning matrix to optimize future recovery actions.
            </p>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="pt-6 space-y-4">
          <h5 className="text-xs font-mono uppercase tracking-widest text-white/40 text-center">Architectural Comparison</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">Traditional Pull Model</span>
              <ul className="space-y-2 text-xs text-[#E1E0CC]/70 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                  External metrics scrapers query host stats
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                  Alert systems push notifications to on-call engineers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                  Network roundtrips introduce minutes of lag
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                  Remediation scripts execute in high-risk shell environments
                </li>
              </ul>
            </div>
            <div className="space-y-4 pl-4 border-l border-white/5 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[9px] font-mono uppercase tracking-widest text-white/40 block">Operating Domain</span>
                <span className="text-sm font-light text-white">Database Kernel / SRE</span>
              </div>
              <div className="p-6 rounded-2xl border border-white/10 bg-rose-950/[0.02] space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-40 pointer-events-none" style={{ backgroundColor: `${theme.primaryColor}20` }} />
                <span className="text-[10px] font-mono uppercase tracking-wider block font-semibold" style={{ color: theme.primaryColor }}>Database-Native Push Model</span>
                <ul className="space-y-2 text-xs text-white/90 font-light">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.primaryColor }} />
                    Stored Procedures monitor internal engine states
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.primaryColor }} />
                    Event Scheduler triggers dynamic baseline checks natively
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.primaryColor }} />
                    0ms network latency between anomaly detection & healing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.primaryColor }} />
                    Surgical SQL transactions isolate & terminate blockages safely
                  </li>
                </ul>
              </div>
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
    <section id="architecture" className="py-16 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
        <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
          <Cpu className="w-4 h-4" style={{ color: theme.primaryColor }} />
          System Architecture
        </h3>
      </div>

      <div className="space-y-8 max-w-4xl">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white leading-tight">
          A decoupled, telemetry-driven orchestration engine.
        </h4>

        <div className="space-y-6 text-[#E1E0CC]/80 font-light leading-relaxed text-base md:text-lg max-w-3xl">
          <p>
            The system operates as a hybrid architecture. The core execution loop (detection, anomaly scoring, and recovery execution) runs natively inside the database layer using MySQL Stored Procedures orchestrated by the Event Scheduler.
          </p>
          <p>
            This is wrapped by a lightweight FastAPI coordination node that handles out-of-process metric logging and sends real-time system state vectors to a Next.js observability dashboard, allowing human-in-the-loop overrides and live telemetry visualization.
          </p>
        </div>

        {/* Centerpiece 1: Architecture Diagram */}
        <div className="space-y-4 pt-6">
          <div className="rounded-3xl border border-white/5 bg-[#030303] overflow-hidden p-3 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />
            <img
              src="/PROJECTS/DBMS_SELF_HEALING/Architecture Diagram.webp"
              alt="DBMS Self Healing Engine System Architecture Diagram"
              className="w-full h-auto rounded-2xl border border-white/5 bg-black/50 block"
            />
          </div>
          <div className="px-2 space-y-1">
            <h5 className="text-xs font-mono uppercase tracking-wider text-white">System Architecture & Telemetry Flow</h5>
            <p className="text-xs text-[#E1E0CC]/70 font-light leading-relaxed">
              Visual map of the decoupled telemetry layout: database engine containing native Stored Procedures and the Event Scheduler, FastAPI orchestration node mapping metric logs, and a Next.js frontend rendering state updates.
            </p>
          </div>
        </div>

        {/* Centerpiece 2: Dynamic Interaction Sequence Diagram */}
        <div className="space-y-4 pt-8">
          <div className="rounded-3xl border border-white/5 bg-[#030303] overflow-hidden p-3 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />
            <img
              src="/PROJECTS/DBMS_SELF_HEALING/DIAGRAM-Dynamic Interaction Sequence.webp"
              alt="DBMS Self Healing Engine Dynamic Interaction Sequence Flow"
              className="w-full h-auto rounded-2xl border border-white/5 bg-black/50 block"
            />
          </div>
          <div className="px-2 space-y-1">
            <h5 className="text-xs font-mono uppercase tracking-wider text-white">Dynamic Interaction Sequence</h5>
            <p className="text-xs text-[#E1E0CC]/70 font-light leading-relaxed">
              Detailed flow showing telemetry polling, database-native detection triggers, FastAPI route coordination, and recovery action execution pathways.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 05. STATISTICAL INTELLIGENCE ENGINE
export function DbmsStatisticalEngine({ theme }: ComponentProps) {
  return (
    <section id="statistics" className="py-16 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: theme.primaryColor }} />
        <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/75 flex items-center gap-2">
          <Terminal className="w-4 h-4" style={{ color: theme.primaryColor }} />
          Statistical Intelligence Engine
        </h3>
      </div>

      <div className="space-y-8 max-w-4xl">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white leading-tight">
          Adaptive baseline calculation and mathematical anomaly detection.
        </h4>

        <div className="space-y-6 text-[#E1E0CC]/80 font-light leading-relaxed text-base md:text-lg max-w-3xl">
          <p>
            To prevent catastrophic false-positives—such as killing normal high-concurrency backup processes—the detection engine replaces static threshold alerts with dynamic baseline equations. The database continuously recalculates average behaviors and measures metric deviations using Log-Normalized Z-Scores and Interquartile Range (IQR) analyses.
          </p>
        </div>

        {/* Mathematical Visualizations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Equation 1 */}
          <div className="p-6 rounded-2xl border border-white/5 bg-[#030303] flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400">Log-Normalized Z-Score Formula</span>
              <p className="text-xs text-[#E1E0CC]/75 leading-relaxed font-light">
                Measures deviations from baseline while mitigating extreme spikes from dominating severity metrics.
              </p>
            </div>
            <div className="py-6 flex items-center justify-center bg-black/40 rounded-xl border border-white/5 font-mono text-lg text-white">
              <div className="flex items-center">
                <span className="mr-3">Z =</span>
                <div className="flex flex-col items-center">
                  <span className="px-2 pb-1 border-b border-white/40">ln(x_t) - &mu;_ln</span>
                  <span className="px-2 pt-1">&sigma;_ln</span>
                </div>
              </div>
            </div>
          </div>

          {/* Equation 2 */}
          <div className="p-6 rounded-2xl border border-white/5 bg-[#030303] flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400">Dynamic Threshold Adjuster</span>
              <p className="text-xs text-[#E1E0CC]/75 leading-relaxed font-light">
                Uses the Coefficient of Variation (CV) to adjust anomaly sensitivity based on workload volatility.
              </p>
            </div>
            <div className="py-6 flex items-center justify-center bg-black/40 rounded-xl border border-white/5 font-mono text-lg text-white">
              <div className="flex items-center">
                <span className="mr-3">CV =</span>
                <div className="flex flex-col items-center">
                  <span className="px-2 pb-1 border-b border-white/40">&sigma;</span>
                  <span className="px-2 pt-1">&mu;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-[#E1E0CC]/80 font-light leading-relaxed text-base md:text-lg max-w-3xl">
          <p>
            When database volatility (CV) is high, the engine expands anomaly thresholds to prevent alerts during expected peaks. When volatility is low, thresholds automatically tighten to intercept silent degradation signatures.
          </p>
        </div>

        {/* Anomaly Detection Centerpieces */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          <div className="space-y-3">
            <div className="rounded-2xl border border-white/5 bg-[#030303] overflow-hidden p-2 shadow-xl">
              <img
                src="/PROJECTS/DBMS_SELF_HEALING/Healing Lifecycle.webp"
                alt="DBMS Self Healing Engine Anomaly Detection & Healing Pipeline"
                className="w-full h-auto rounded-xl block object-cover aspect-[4/3]"
              />
            </div>
            <div className="px-2 space-y-1">
              <h5 className="text-xs font-mono uppercase tracking-wider text-white">Closed-Loop Healing Lifecycle</h5>
              <p className="text-[11px] text-[#E1E0CC]/70 font-light leading-relaxed">
                The system pipeline showing how metric collection outputs pass through anomaly detection, threshold scoring, decision routing, recovery, and learning feedback cycles.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-white/5 bg-[#030303] overflow-hidden p-2 shadow-xl">
              <img
                src="/PROJECTS/DBMS_SELF_HEALING/DASHBOARD-AI-ANALYSIS.webp"
                alt="DBMS Self Healing Engine Root Cause AI Analysis Interface"
                className="w-full h-auto rounded-xl block object-cover aspect-[4/3]"
              />
            </div>
            <div className="px-2 space-y-1">
              <h5 className="text-xs font-mono uppercase tracking-wider text-white">Anomaly Profiling & Severity Scoring</h5>
              <p className="text-[11px] text-[#E1E0CC]/70 font-light leading-relaxed">
                Real-time statistical evaluation dashboard graphing anomalies, baseline bounds, standard deviations, and isolation results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
