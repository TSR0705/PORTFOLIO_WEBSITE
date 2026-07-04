"use client";

import React from "react";
import { 
  Cpu, 
  AlertCircle, 
  Sparkles, 
  CheckCircle, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  Users, 
  MessageSquare, 
  ArrowRight,
  Sparkle
} from "lucide-react";
import { Project } from "@/lib/projects";
import { ProjectTheme } from "@/lib/project-design";
import ZoomableImage from "@/components/ui/zoomable-image";

interface ComponentProps {
  project: Project;
  theme: ProjectTheme;
}

// 01. THE CORE PROBLEM
export function CodeWeaveCoreProblem({ theme }: ComponentProps) {
  return (
    <section id="problem" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20">
          <AlertCircle className="w-4 h-4 text-amber-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          The Core Problem
        </h3>
      </div>
      
      <div className="space-y-10 max-w-5xl">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.15]">
          Modern software development <br/>
          <span className="font-medium text-amber-400">rarely happens in isolation.</span>
        </h4>
        
        <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg font-sans max-w-4xl">
          Developers constantly switch between code editors, messaging platforms, version control systems, and AI assistants. This friction breaks focus and slows down collaboration. While collaborative editors solve real-time synchronization, they often treat communication, code editing, and AI assistance as separate workflows. The challenge was to design a browser-based workspace where multiple developers could edit code simultaneously, communicate in real time, and interact with an AI assistant—all within a single, synchronized environment.
        </p>

        {/* Three Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-amber-500/20 transition-all duration-300 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">01. Fragmented Collaboration</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Developers frequently switch between IDEs, chat applications, and AI tools, creating unnecessary context switching during collaborative development.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-amber-500/20 transition-all duration-300 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">02. Real-Time Sync</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Keeping multiple users synchronized while maintaining a consistent project state requires an event-driven communication model capable of handling concurrent updates.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-amber-500/20 transition-all duration-300 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">03. Disconnected AI</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Most AI coding assistants operate outside the collaborative environment. Developers must leave their workflow to generate code or debug, interrupting productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 02. WHY I BUILT THIS
export function CodeWeaveWhyIBuiltThis({ theme }: ComponentProps) {
  return (
    <section id="motivation" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20">
          <Sparkles className="w-4 h-4 text-amber-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Why I Built This
        </h3>
      </div>

      <div className="space-y-8 max-w-4xl">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.15]">
          Exploring the mechanics of <br />
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">real-time developer workspaces at scale.</span>
        </h4>

        <div className="space-y-6 text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl font-sans">
          <p>
            I wanted to understand how collaborative development platforms manage real-time communication at scale. Rather than building another online code editor, I focused on the systems that enable collaborative software engineering—WebSocket communication, shared state synchronization, persistent storage, and AI-assisted development.
          </p>
          <p>
            The goal was to explore how an event-driven architecture could combine collaborative editing, project management, and contextual AI assistance into a unified browser-based workspace.
          </p>
        </div>
      </div>
    </section>
  );
}

// 03. THE SOLUTION
export function CodeWeaveTheSolution({ theme }: ComponentProps) {
  return (
    <section id="solution" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20">
          <CheckCircle className="w-4 h-4 text-amber-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          The Solution
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            A decoupled client-server architecture.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            CodeWeave adopts a decoupled client-server architecture where each subsystem is responsible for a single concern. This separation allows the platform to remain modular, scalable, and responsive while supporting simultaneous collaboration across multiple users.
          </p>
        </div>

        {/* Core Component Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">React Frontend & Monaco</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Provides a modern web IDE experience powered by the Monaco Editor, supplying syntax layouts, file tree tabs, and team cursor positions.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">Express & Socket.IO Gateway</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Express exposes REST endpoints for application services, while Socket.IO maintains low-latency communication channels between collaborators.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">MongoDB & Redis Layer</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              MongoDB persists project structures and chat records, while Redis accelerates authentication workflows and validates active session tokens.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">Google Gemini API</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Integrates directly into active collaborative rooms to provide contextual coding assistance, debugging, and file generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 04. SYSTEM ARCHITECTURE
export function CodeWeaveSystemArchitecture({ theme }: ComponentProps) {
  return (
    <section id="architecture" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-amber-500/20 bg-amber-500/5">
          <Layers className="w-4 h-4 text-amber-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          System Architecture
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            An event-driven architecture designed around independent services.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            The system maps presentation elements directly to isolated communication layers, utilizing WebSockets for live states and HTTP REST endpoints for persistent project operations.
          </p>
        </div>

        {/* Visual Architecture Layers */}
        <div className="p-8 rounded-2xl border border-white/5 bg-[#080808] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 blur-[60px] rounded-full pointer-events-none" />
          <h5 className="text-[10px] font-mono uppercase tracking-widest text-[#E1E0CC]/40 mb-8 pb-3 border-b border-white/5">Layered Architecture Stack</h5>
          
          <div className="space-y-4 max-w-3xl mx-auto font-mono text-xs">
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-amber-400 font-semibold uppercase block text-[9px] mb-1">01. Presentation Layer</span>
              <span className="text-[#E1E0CC]/80">React SPA built with Vite, providing the collaborative IDE, explorer, tabs, and chat panels.</span>
            </div>

            <div className="flex justify-center text-[#E1E0CC]/30 py-0.5"><ArrowRight className="w-4 h-4 rotate-90" /></div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-amber-400 font-semibold uppercase block text-[9px] mb-1">02. Communication Layer</span>
              <span className="text-[#E1E0CC]/80">Socket.IO managing low-latency WebSocket streams and Express REST APIs handling system services.</span>
            </div>

            <div className="flex justify-center text-[#E1E0CC]/30 py-0.5"><ArrowRight className="w-4 h-4 rotate-90" /></div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-amber-400 font-semibold uppercase block text-[9px] mb-1">03. Application Layer</span>
              <span className="text-[#E1E0CC]/80">Express routers processing business logic, workspace authorization, and Gemini routing.</span>
            </div>

            <div className="flex justify-center text-[#E1E0CC]/30 py-0.5"><ArrowRight className="w-4 h-4 rotate-90" /></div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-amber-400 font-semibold uppercase block text-[9px] mb-1">04. Storage Layer</span>
              <span className="text-[#E1E0CC]/80">MongoDB storing user collections, JSON file trees, and chat logs. Redis validating tokens and active session variables.</span>
            </div>

            <div className="flex justify-center text-[#E1E0CC]/30 py-0.5"><ArrowRight className="w-4 h-4 rotate-90" /></div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-amber-400 font-semibold uppercase block text-[9px] mb-1">05. AI Layer</span>
              <span className="text-[#E1E0CC]/80">Google Gemini API evaluating active coding selections and writing code contextually.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 05. REAL-TIME COLLABORATION
export function CodeWeaveRealTimeCollaboration({ theme }: ComponentProps) {
  return (
    <section id="collaboration" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-amber-500/20 bg-amber-500/5">
          <Users className="w-4 h-4 text-amber-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Real-Time Collaboration
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Every workspace operates as a synchronized room.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl font-sans">
            When a developer edits code or sends a project message, the client emits a WebSocket event to the server. The server persists the update, broadcasts the change to all connected participants, and maintains a consistent workspace state across every active client. This event-driven model minimizes latency while ensuring every participant shares the same project context.
          </p>
        </div>

        {/* Working Demo 03 Screenshot */}
        <div className="space-y-6 pt-4 max-w-4xl">
          <ZoomableImage
            src="/PROJECTS/CODEWEAVE/WORKIND DEMO-03.webp"
            alt="Real-Time State Synchronization and Workspace Chat"
            wrapperClassName="w-full h-auto shadow-2xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </section>
  );
}

// 06. AI CODING WORKFLOW
export function CodeWeaveAICodingWorkflow({ theme }: ComponentProps) {
  return (
    <section id="ai-workflow" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-amber-500/20 bg-amber-500/5">
          <Sparkle className="w-4 h-4 text-amber-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          AI Coding Workflow
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Embedding AI directly into the collaboration loop.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl font-sans">
            Rather than treating AI as an external assistant, CodeWeave embeds it directly into the collaboration workflow. When a developer invokes @ai, the Socket Gateway detects the request, forwards the prompt to Gemini, stores the generated response, and broadcasts the result to every participant within the project room. The AI therefore becomes another active collaborator rather than a separate application.
          </p>
        </div>

        {/* Working Demo 04 Screenshot */}
        <div className="space-y-6 pt-4 max-w-4xl">
          <ZoomableImage
            src="/PROJECTS/CODEWEAVE/WORKIND DEMO-04.webp"
            alt="Context-Aware AI Assistant integration within Collaborative Editor"
            wrapperClassName="w-full h-auto shadow-2xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </section>
  );
}

// 07. SECURITY & COMMUNICATION
export function CodeWeaveSecurity({ theme }: ComponentProps) {
  return (
    <section id="security" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-amber-500/20 bg-amber-500/5">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Security & Communication
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Token-based authentication across REST and WebSocket connections.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl font-sans">
            Authentication is enforced through JWT verification across both REST endpoints and persistent WebSocket connections. Protected routes validate incoming requests before business logic executes, while Redis-backed token verification strengthens session management. This separation between authentication and application services keeps communication secure without increasing complexity inside the core collaboration engine.
          </p>
        </div>

        {/* Security & Workspace Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <h5 className="text-[10px] font-mono uppercase tracking-widest text-[#E1E0CC]/40">01. Workspace Authentication</h5>
            <ZoomableImage
              src="/PROJECTS/CODEWEAVE/LOGIN SIGNUP.webp"
              alt="Secure Login and Signup Screen"
              wrapperClassName="w-full h-auto shadow-xl ring-1 ring-white/10"
            />
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] font-mono uppercase tracking-widest text-[#E1E0CC]/40">02. Workspace Access Controls</h5>
            <ZoomableImage
              src="/PROJECTS/CODEWEAVE/MANAGE WORKSPACE.webp"
              alt="Manage Workspace and Member Access panel"
              wrapperClassName="w-full h-auto shadow-xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// 08. ENGINEERING HIGHLIGHTS
export function CodeWeaveHighlights({ theme }: ComponentProps) {
  return (
    <section id="highlights" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-amber-500/20 bg-amber-500/5">
          <Terminal className="w-4 h-4 text-amber-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Engineering Highlights
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Technical highlights of the collaboration workspace.
          </h4>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 font-mono text-xs">
          {[
            {
              title: "Event-Driven Sync",
              desc: "Employs Socket.IO WebSocket streams to synchronize keystrokes under 45ms."
            },
            {
              title: "Hybrid Communication",
              desc: "Blends REST endpoints with persistent WebSockets to manage session operations."
            },
            {
              title: "Monaco IDE Integration",
              desc: "Integrates VS Code's editor core for native syntax layouts and multi-cursor views."
            },
            {
              title: "Persistent Storage",
              desc: "Persists document states, folder nodes, and conversation threads in MongoDB."
            },
            {
              title: "Redis Session Caching",
              desc: "Implements transient Redis memory keys to accelerate validation and authentication."
            },
            {
              title: "Embedded Gemini API",
              desc: "Injects Google Gemini LLM directly inside WebSocket chat threads as a participant."
            },
            {
              title: "Decoupled Architecture",
              desc: "Maintains a modular Express.js server, decoupling auth, sockets, and AI routing."
            },
            {
              title: "Observability Logging",
              desc: "Utilizes Winston logs to track network requests and WebSocket exceptions."
            },
            {
              title: "Docker-Ready Setup",
              desc: "Packaged with Docker configurations to ensure consistent local development environments."
            },
            {
              title: "Scalable Client Design",
              desc: "Supports concurrent editing sessions across rooms without performance lag."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a] space-y-2">
              <span className="text-amber-400 font-semibold block uppercase tracking-wider">{item.title}</span>
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

// 09. LESSONS LEARNED
export function CodeWeaveLessons({ theme }: ComponentProps) {
  return (
    <section id="lessons" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-amber-500/20 bg-amber-500/5">
          <CheckCircle className="w-4 h-4 text-amber-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Lessons Learned
        </h3>
      </div>

      <div className="space-y-10 max-w-5xl">
        <div className="p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-semibold block">01. Designing for Consistency</span>
            <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-base">
              Building collaborative software requires designing for consistency rather than individual user interactions. Event-driven communication proved essential for synchronizing multiple developers without sacrificing responsiveness.
            </p>
          </div>
          
          <div className="space-y-2 pt-4 border-t border-white/5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-semibold block">02. Value of Layered Architecture</span>
            <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-base">
              Separating REST operations, WebSocket communication, AI services, and persistence into independent layers made the architecture significantly easier to extend and maintain.
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-semibold block">03. Context-Aware AI Assistants</span>
            <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-base">
              Integrating AI directly into collaborative workflows demonstrated that intelligent assistants become far more useful when they operate within the shared project context instead of existing as isolated external tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Default Export
export default function CodeweaveCaseStudy({ project, theme }: ComponentProps) {
  return (
    <div className="space-y-12 pb-24">
      <CodeWeaveCoreProblem project={project} theme={theme} />
      <CodeWeaveWhyIBuiltThis project={project} theme={theme} />
      <CodeWeaveTheSolution project={project} theme={theme} />
      <CodeWeaveSystemArchitecture project={project} theme={theme} />
      <CodeWeaveRealTimeCollaboration project={project} theme={theme} />
      <CodeWeaveAICodingWorkflow project={project} theme={theme} />
      <CodeWeaveSecurity project={project} theme={theme} />
      <CodeWeaveHighlights project={project} theme={theme} />
      <CodeWeaveLessons project={project} theme={theme} />
    </div>
  );
}
