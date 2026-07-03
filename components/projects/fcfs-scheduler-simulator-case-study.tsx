"use client";

import React from "react";
import { 
  Cpu, 
  AlertCircle, 
  Sparkles, 
  CheckCircle, 
  Terminal, 
  ArrowRight,
  TrendingUp,
  Activity,
  Layers,
  Play,
  RotateCcw
} from "lucide-react";
import { ProjectTheme } from "@/lib/project-design";
import { Project } from "@/lib/projects";
import ZoomableImage from "@/components/ui/zoomable-image";

interface ComponentProps {
  theme: ProjectTheme;
}

// 01. THE CORE PROBLEM
export function FcfsCoreProblem({ theme }: ComponentProps) {
  return (
    <section id="problem" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20">
          <AlertCircle className="w-4 h-4 text-orange-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          The Core Problem
        </h3>
      </div>
      
      <div className="space-y-10 max-w-5xl">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.15]">
          Traditional CPU scheduling education <br/>
          <span className="font-medium text-orange-400">remains stuck in static textbook diagrams.</span>
        </h4>
        
        <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg font-sans max-w-4xl">
          Operating system scheduling is fundamentally dynamic. However, students typically learn these concepts through static tables, mathematical formulas, and final Gantt chart snapshots in textbooks. This static approach hides the step-by-step state transitions, queue alterations, and context switches that occur in real time as the CPU processes execution requests. Without an interactive representation, students struggle to build an accurate mental model of process state lifecycles and CPU utilization behaviors.
        </p>

        {/* Three Engineering Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-orange-500/20 transition-all duration-300 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold block">01. Static Learning</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Students cannot observe scheduling decisions as they happen. They see only the final computed waiting and turnaround times, missing the mid-execution queue state changes.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-orange-500/20 transition-all duration-300 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold block">02. Poor Visualization</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Most scheduling tool implementations lack interactive execution timelines and step-by-step Gantt chart rendering, making it difficult to trace queue processing chronologically.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-orange-500/20 transition-all duration-300 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold block">03. Limited Analytics</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Students struggle to understand how CPU Utilization, Idle Time, waiting patterns, and Turnaround metrics evolve organically without real-time metrics generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 02. WHY I BUILT THIS
export function FcfsWhyIBuiltThis({ theme }: ComponentProps) {
  return (
    <section id="motivation" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20">
          <Sparkles className="w-4 h-4 text-orange-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Why I Built This
        </h3>
      </div>

      <div className="space-y-8 max-w-4xl">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.15]">
          Making operating system concepts <br />
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">interactive rather than theoretical.</span>
        </h4>

        <div className="space-y-6 text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
          <p>
            I wanted to build an educational desktop application that makes operating system scheduling algorithms interactive rather than theoretical. The objective was to construct a robust tool where processes can be defined with varying arrival and burst times, and their path through the system is visible tick-by-tick.
          </p>
          <p>
            By combining simulation engines, interactive visualizations, and real-time analytical dashboards into a single application, the project provides a comprehensive learning environment. Students can pause, step, and analyze scheduling behaviors as they unfold, mapping abstract scheduling algorithms directly to physical visual execution states.
          </p>
        </div>
      </div>
    </section>
  );
}

// 03. THE SOLUTION
export function FcfsTheSolution({ theme }: ComponentProps) {
  return (
    <section id="solution" className="py-20 border-t border-white/5 space-y-16 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20">
          <CheckCircle className="w-4 h-4 text-orange-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          The Solution
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-4xl">
          The solution is a desktop-first JavaFX application configured for real-time CPU scheduling simulation. It features an interactive Gantt chart, step-by-step manual execution controls, and a live performance metrics dashboard. These components coordinate state changes to visualize processes moving from arrival to dispatch and completion.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold block">JavaFX Desktop App</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Built as a native client tool to ensure responsive visual rendering of charts, graphs, and simulation elements without network lag.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold block">Interactive Gantt Chart</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Displays process scheduling blocks chronologically, dynamically adding segments and markers representing CPU active and idle states.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold block">Manual Step Mode</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Allows students to control the simulation timer manually, moving cycle by cycle to observe queue states and scheduling transitions.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold block">Live Queue Visualization</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Provides a dynamic visual array of the Ready Queue, showing processes entering, waiting, and exiting in First-In, First-Out sequence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 04. SYSTEM ARCHITECTURE
export function FcfsSystemArchitecture({ theme }: ComponentProps) {
  return (
    <section id="architecture" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-orange-500/20 bg-orange-500/5">
          <Layers className="w-4 h-4 text-orange-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          System Architecture
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            A modular layered pipeline separating engine states from visual nodes.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            The application follows a unidirectional data flow architecture. UI inputs set the process queues, which feed into the simulation engine. The scheduling rules manipulate queue states, metrics engines calculate timing statistics, and the visualization drivers render the result onto the canvas.
          </p>
        </div>

        {/* Custom Layered Flowchart */}
        <div className="p-8 rounded-2xl border border-white/5 bg-[#080808] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 blur-[60px] rounded-full pointer-events-none" />
          <h5 className="text-[10px] font-mono uppercase tracking-widest text-[#E1E0CC]/40 mb-8 pb-3 border-b border-white/5">Layered Architecture Model</h5>
          
          <div className="space-y-4 max-w-3xl mx-auto font-mono text-xs">
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
              <div>
                <span className="text-orange-400 font-semibold uppercase block text-[9px] mb-1">01. UI Layer</span>
                <span className="text-[#E1E0CC]/80">JavaFX Scene Graph, custom controls, and process parameter input fields.</span>
              </div>
            </div>

            <div className="flex justify-center text-[#E1E0CC]/30 py-0.5"><ArrowRight className="w-4 h-4 rotate-90" /></div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
              <div>
                <span className="text-orange-400 font-semibold uppercase block text-[9px] mb-1">02. Simulation Engine</span>
                <span className="text-[#E1E0CC]/80">Manages the execution loop clock, state machines, and timeline play controls.</span>
              </div>
            </div>

            <div className="flex justify-center text-[#E1E0CC]/30 py-0.5"><ArrowRight className="w-4 h-4 rotate-90" /></div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
              <div>
                <span className="text-orange-400 font-semibold uppercase block text-[9px] mb-1">03. FCFS Scheduler</span>
                <span className="text-[#E1E0CC]/80">Implements CPU queue sorting, active job dispatching, and execution state checks.</span>
              </div>
            </div>

            <div className="flex justify-center text-[#E1E0CC]/30 py-0.5"><ArrowRight className="w-4 h-4 rotate-90" /></div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
              <div>
                <span className="text-orange-400 font-semibold uppercase block text-[9px] mb-1">04. Metrics Engine</span>
                <span className="text-[#E1E0CC]/80">Computes waiting times, turnaround, active execution blocks, and idle margins.</span>
              </div>
            </div>

            <div className="flex justify-center text-[#E1E0CC]/30 py-0.5"><ArrowRight className="w-4 h-4 rotate-90" /></div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
              <div>
                <span className="text-orange-400 font-semibold uppercase block text-[9px] mb-1">05. Visualization Engine</span>
                <span className="text-[#E1E0CC]/80">Drives Gantt chart canvas construction, process queues, and visual tickers.</span>
              </div>
            </div>

            <div className="flex justify-center text-[#E1E0CC]/30 py-0.5"><ArrowRight className="w-4 h-4 rotate-90" /></div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
              <div>
                <span className="text-orange-400 font-semibold uppercase block text-[9px] mb-1">06. Analytics Dashboard</span>
                <span className="text-[#E1E0CC]/80">Aggregates computed queue data to render summary tables and statistics.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 05. SCHEDULING ALGORITHM
export function FcfsAlgorithm({ theme }: ComponentProps) {
  return (
    <section id="algorithm" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-orange-500/20 bg-orange-500/5">
          <Terminal className="w-4 h-4 text-orange-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Scheduling Algorithm
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Implementing First-Come, First-Served scheduling step-by-step.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            First-Come, First-Served (FCFS) is a non-preemptive scheduling algorithm where the process that requests the CPU first is allocated the CPU first. The implementation divides this lifecycle into distinct stages to ensure accurate state logging and step-by-step observation.
          </p>
        </div>

        {/* Algorithm Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-2">
            <h5 className="text-base font-semibold text-white">1. Arrival Detection</h5>
            <p className="text-sm text-[#E1E0CC]/60 leading-relaxed font-light">
              As the simulation clock ticks forward, the system checks the pool of configured processes. Any process whose arrival time matches the current system clock is selected and moved from the inactive pool into the active scheduling pipeline.
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="text-base font-semibold text-white">2. Ready Queue Management</h5>
            <p className="text-sm text-[#E1E0CC]/60 leading-relaxed font-light">
              Newly arrived processes enter the back of the Ready Queue. This queue operates on a strict First-In, First-Out (FIFO) basis, preserving the exact chronological sequence of process arrivals.
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="text-base font-semibold text-white">3. FIFO Scheduling</h5>
            <p className="text-sm text-[#E1E0CC]/60 leading-relaxed font-light">
              When the CPU is idle, the scheduler dispatches the process at the front of the Ready Queue for execution. Because FCFS is non-preemptive, this process retains CPU control until its burst time expires.
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="text-base font-semibold text-white">4. Completion & Metrics calculation</h5>
            <p className="text-sm text-[#E1E0CC]/60 leading-relaxed font-light">
              Upon process completion, the system logs the completion time and immediately calculates its turnaround and waiting times. These metrics are then integrated into the aggregate statistics engine.
            </p>
          </div>
        </div>

        {/* Math Card */}
        <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold block">Mathematical Evaluation Formulas</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-center">
            <div className="p-4 rounded-xl border border-white/5 bg-black/60 shadow-inner">
              <span className="text-[#E1E0CC]/40 block mb-1 text-[9px]">TURNAROUND TIME</span>
              <span className="text-white text-sm font-medium">TAT = Completion - Arrival</span>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-black/60 shadow-inner">
              <span className="text-[#E1E0CC]/40 block mb-1 text-[9px]">WAITING TIME</span>
              <span className="text-white text-sm font-medium">WT = Turnaround - Burst</span>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-black/60 shadow-inner">
              <span className="text-[#E1E0CC]/40 block mb-1 text-[9px]">CPU UTILIZATION</span>
              <span className="text-white text-xs font-medium">Util = (Σ Burst / Total) × 100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 06. SIMULATION WORKFLOW
export function FcfsWorkflow({ theme }: ComponentProps) {
  return (
    <section id="workflow" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-orange-500/20 bg-orange-500/5">
          <Activity className="w-4 h-4 text-orange-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Simulation Workflow
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            The execution pipeline from input validation to final analysis.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            The simulation moves through a structured cycle of input validation, state modifications, and real-time visualization updates as the simulation timer advances.
          </p>
        </div>

        {/* Workflow Timeline */}
        <div className="relative border-l border-white/10 pl-8 ml-4 py-2 space-y-10">
          <div className="relative">
            <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-orange-500 flex items-center justify-center text-[8px] text-orange-500 font-mono">1</div>
            <h5 className="text-base font-semibold text-white">Process Creation & Validation</h5>
            <p className="text-sm text-[#E1E0CC]/60 leading-relaxed font-light mt-1">
              Users define process identifiers, arrival times, and execution bursts. The system validates that inputs are positive integers and that process IDs are unique before loading them into the simulation pool.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-orange-500 flex items-center justify-center text-[8px] text-orange-500 font-mono">2</div>
            <h5 className="text-base font-semibold text-white">Ready Queue Placement</h5>
            <p className="text-sm text-[#E1E0CC]/60 leading-relaxed font-light mt-1">
              When the simulation starts, the scheduler detects process arrivals cycle-by-cycle. Newly arrived processes are immediately pushed onto the Ready Queue, which displays their position visually.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-orange-500 flex items-center justify-center text-[8px] text-orange-500 font-mono">3</div>
            <h5 className="text-base font-semibold text-white">CPU Dispatch & Execution</h5>
            <p className="text-sm text-[#E1E0CC]/60 leading-relaxed font-light mt-1">
              The process at the head of the queue is dispatched to the CPU. Since FCFS is non-preemptive, the process executes continuously until its remaining burst time reaches zero.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-orange-500 flex items-center justify-center text-[8px] text-orange-500 font-mono">4</div>
            <h5 className="text-base font-semibold text-white">Gantt Chart Rendering & final stats</h5>
            <p className="text-sm text-[#E1E0CC]/60 leading-relaxed font-light mt-1">
              As cycles execute, the Gantt chart canvas renders active and idle blocks. Upon completion of all processes, the engine aggregates metrics to display average turnaround, waiting times, and CPU utilization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 07. PERFORMANCE ANALYTICS
export function FcfsPerformanceAnalytics({ theme }: ComponentProps) {
  return (
    <section id="analytics" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-orange-500/20 bg-orange-500/5">
          <TrendingUp className="w-4 h-4 text-orange-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Performance Analytics
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Real-time evaluation of key system scheduling metrics.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            The application continuously computes performance metrics as the simulation timer runs. These parameters are essential for evaluating scheduling efficiency and understanding algorithm performance.
          </p>
        </div>

        {/* Dashboard Screenshot Display */}
        <div className="space-y-6 pt-4 max-w-4xl">
          <ZoomableImage
            src="/PROJECTS/FCFS Scheduler Simulator/DASHBOARD.webp"
            alt="Simulation Dashboard and Performance Metrics"
            wrapperClassName="w-full h-auto shadow-2xl ring-1 ring-white/10"
          />
        </div>

        {/* Metrics details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-2">
            <h5 className="text-base font-semibold text-white">Waiting & Turnaround Time</h5>
            <p className="text-sm text-[#E1E0CC]/60 leading-relaxed font-light">
              Calculates waiting time (WT) and turnaround time (TAT) dynamically for each process. WT represents the total cycles a process spends in the ready queue, while TAT measures the duration from arrival to completion.
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="text-base font-semibold text-white">CPU Utilization & Idle Margin</h5>
            <p className="text-sm text-[#E1E0CC]/60 leading-relaxed font-light">
              Measures CPU efficiency. CPU Utilization tracks the percentage of execution cycles spent processing jobs, while Idle Time logs cycles when no processes are ready, identifying system bottlenecks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 08. INTERACTIVE VISUALIZATION
export function FcfsVisualization({ theme }: ComponentProps) {
  return (
    <section id="visualization" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-orange-500/20 bg-orange-500/5">
          <Cpu className="w-4 h-4 text-orange-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Interactive Visualization
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Mapping CPU execution cycles onto an active canvas.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            Interactive visualization makes it easier to trace algorithm states. By rendering processes in real time, the application provides immediate visual context for queue management and CPU dispatch operations.
          </p>
        </div>

        {/* HERO Screenshot Display */}
        <div className="space-y-6 pt-4 max-w-4xl">
          <ZoomableImage
            src="/PROJECTS/FCFS Scheduler Simulator/HERO.webp"
            alt="Dynamic Gantt Chart and Simulation Timeline"
            wrapperClassName="w-full h-auto shadow-2xl ring-1 ring-white/10"
          />
        </div>

        {/* Visualization Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs font-mono">
          <div className="p-6 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <span className="text-orange-400 font-semibold block mb-2">DYNAMIC GANTT CHART</span>
            <p className="text-[#E1E0CC]/60 font-light leading-relaxed">
              Updates dynamically, adding block segments as execution cycles progress, using colors to differentiate processes.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <span className="text-orange-400 font-semibold block mb-2">AUTO-EXPANDING CANVAS</span>
            <p className="text-[#E1E0CC]/60 font-light leading-relaxed">
              Resizes the rendering canvas automatically to display long execution sequences without clipping.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/5 bg-[#0a0a0a]">
            <span className="text-orange-400 font-semibold block mb-2">QUEUE DISPLAY</span>
            <p className="text-[#E1E0CC]/60 font-light leading-relaxed">
              Shows process cards within the ready queue in real time, illustrating arrivals and order adjustments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 09. ENGINEERING HIGHLIGHTS
export function FcfsHighlights({ theme }: ComponentProps) {
  return (
    <section id="highlights" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-orange-500/20 bg-orange-500/5">
          <Terminal className="w-4 h-4 text-orange-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Engineering Highlights
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Key implementation details of the desktop simulator.
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 font-mono text-xs">
          {[
            {
              title: "Desktop-First Architecture",
              desc: "Built as a JavaFX desktop tool for low-latency interface rendering."
            },
            {
              title: "Real-Time Engine",
              desc: "Manages state updates through an asynchronous simulation loop."
            },
            {
              title: "Interactive Controls",
              desc: "Allows stepping through process execution cycle-by-cycle manually."
            },
            {
              title: "Automatic Analytics",
              desc: "Computes turnaround, waiting, and utilization metrics automatically."
            },
            {
              title: "Dynamic Gantt Canvas",
              desc: "Renders process blocks on a canvas that resizes automatically."
            },
            {
              title: "Responsive JavaFX UI",
              desc: "Implements reactive controls to handle simulation state changes."
            },
            {
              title: "Educational Dashboard",
              desc: "Presents process logs and final statistics in structured tables."
            },
            {
              title: "Modular Scheduling Core",
              desc: "Decouples scheduling calculations from visual layout rendering."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a] space-y-2">
              <span className="text-orange-400 font-semibold block uppercase tracking-wider">{item.title}</span>
              <p className="text-[#E1E0CC]/60 font-light leading-relaxed text-[11px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 10. LESSONS LEARNED
export function FcfsLessons({ theme }: ComponentProps) {
  return (
    <section id="lessons" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-orange-500/20 bg-orange-500/5">
          <CheckCircle className="w-4 h-4 text-orange-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Lessons Learned
        </h3>
      </div>

      <div className="space-y-10 max-w-5xl">
        <div className="p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-400 font-semibold block">01. Simulation-Driven Learning</span>
            <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-base">
              Interactive simulators help students understand dynamic operating system concepts much better than static diagrams. Giving students control over the timer lets them observe scheduling operations at their own pace.
            </p>
          </div>
          
          <div className="space-y-2 pt-4 border-t border-white/5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-400 font-semibold block">02. Decoupling Engine Logic from Layout</span>
            <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-base">
              Decoupling the scheduling engine logic from the visual layout rendering simplifies development. The simulation engine manages pure queue states and statistics, which are then passed to the JavaFX scene graph for rendering.
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-400 font-semibold block">03. Real-Time Analytics in Educational Tools</span>
            <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-base">
              Real-time analytics help students connect process arrivals and CPU activity directly to final waiting times and CPU utilization percentages, reinforcing the underlying scheduling mechanics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Default Export
export default function FcfsSchedulerSimulatorCaseStudy({ project, theme }: { project: Project; theme: ProjectTheme }) {
  return (
    <div className="space-y-12 pb-24">
      <FcfsCoreProblem theme={theme} />
      <FcfsWhyIBuiltThis theme={theme} />
      <FcfsTheSolution theme={theme} />
      <FcfsSystemArchitecture theme={theme} />
      <FcfsAlgorithm theme={theme} />
      <FcfsWorkflow theme={theme} />
      <FcfsPerformanceAnalytics theme={theme} />
      <FcfsVisualization theme={theme} />
      <FcfsHighlights theme={theme} />
      <FcfsLessons theme={theme} />
    </div>
  );
}
