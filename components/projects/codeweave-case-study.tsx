"use client";

import React from "react";
import { 
  Sparkles, 
  Cpu, 
  AlertCircle, 
  CheckCircle, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  Users, 
  Activity,
  Bot
} from "lucide-react";
import { ProjectTheme } from "@/lib/project-design";
import { Project } from "@/lib/projects";
import PremiumGallery from "@/components/ui/premium-gallery";
import ZoomableImage from "@/components/ui/zoomable-image";

interface ComponentProps {
  project: Project;
  theme: ProjectTheme;
}

// 01. THE CORE PROBLEM
export function CodeweaveCoreProblem({ theme }: { theme: ProjectTheme }) {
  return (
    <section id="problem" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20">
          <AlertCircle className="w-4 h-4 text-amber-500" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          The Core Problem
        </h3>
      </div>
      
      <div className="space-y-10 max-w-5xl">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.15]">
          Modern software development <span className="font-medium text-amber-400">rarely happens in isolation.</span>
        </h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-6 text-[#E1E0CC]/70 font-light leading-relaxed text-lg">
            <p>
              Developers constantly switch between code editors, messaging platforms, version control, and AI assistants, breaking focus and slowing collaboration. While collaborative editors solve real-time synchronization, they often treat communication, code editing, and AI assistance as separate workflows.
            </p>
            <p>
              The challenge was to design a browser-based workspace where multiple developers could edit code simultaneously, communicate in real time, and interact with an AI assistant—all within a single, synchronized environment.
            </p>
          </div>
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm group hover:border-white/20 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ backgroundColor: theme.primaryColor }} />
              <QuoteIcon className="w-10 h-10 text-white/10 absolute top-4 left-6" />
              <blockquote className="relative z-10 text-white/90 italic font-light text-xl leading-relaxed pt-4">
                "Context switching is the silent killer of engineering velocity. Moving between code, chat, and AI breaks developer flow and fractures collaboration."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Three Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-amber-500/20 transition-all duration-300 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">Problem 01 — Fragmented Collaboration</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Developers frequently switch between IDEs, chat applications, and AI tools, creating unnecessary context switching during collaborative development.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-amber-500/20 transition-all duration-300 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">Problem 02 — State Sync</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Keeping multiple users synchronized while maintaining a consistent project state requires an event-driven communication model capable of handling concurrent updates.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-amber-500/20 transition-all duration-300 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">Problem 03 — Disconnected AI</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Most AI coding assistants operate outside the collaborative environment. Developers must leave their workflow to generate code, debug, or seek explanations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 02. WHY I BUILT THIS
export function CodeweaveWhyIBuiltThis({ theme }: { theme: ProjectTheme }) {
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
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
          Exploring real-time communication <br/>
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">at scale.</span>
        </h4>

        <div className="space-y-6 text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
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
export function CodeweaveTheSolution({ theme }: { theme: ProjectTheme }) {
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
        <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-4xl">
          CodeWeave adopts a decoupled client-server architecture where each subsystem is responsible for a single concern. This separation allows the platform to remain modular, scalable, and responsive while supporting simultaneous collaboration across multiple users.
        </p>

        {/* Dynamic Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">React & Monaco Editor Frontend</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Provides a modern web-based IDE experience with full syntax highlights, multi-tab navigation, and workspace tree visualization.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">Express & Socket.IO Services</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Exposes REST endpoints for system queries and maintains persistent WebSocket communication channels for low-latency keystroke sync.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">MongoDB & Redis Storage Layer</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              MongoDB persists collaborative projects and user conversations, while a Redis cache accelerates session authentication.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">Embedded Gemini AI Engine</span>
            <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              Integrates directly into collaborative rooms to generate project files, debug code, and provide context-aware insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 04. SYSTEM ARCHITECTURE
export function CodeweaveSystemArchitecture({ theme }: { theme: ProjectTheme }) {
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
            The system communicates through dynamic HTTP queries and persistent WebSocket connections to coordinate and synchronize workspace states across all layers.
          </p>
        </div>

        {/* Layer Blocks */}
        <div className="p-8 rounded-2xl border border-white/5 bg-[#080808] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 blur-[60px] rounded-full pointer-events-none" />
          <h5 className="text-[10px] font-mono uppercase tracking-widest text-[#E1E0CC]/40 mb-8 pb-3 border-b border-white/5">Layered Architecture Model</h5>
          
          <div className="space-y-4 max-w-3xl mx-auto font-mono text-xs">
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
              <div>
                <span className="text-amber-400 font-semibold uppercase block text-[9px] mb-1">Presentation Layer</span>
                <span className="text-[#E1E0CC]/80">A React Single Page Application built with Vite provides the collaborative IDE, project explorer, editor tabs, and AI interaction interface.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
              <div>
                <span className="text-amber-400 font-semibold uppercase block text-[9px] mb-1">Communication Layer</span>
                <span className="text-[#E1E0CC]/80">REST APIs handle authentication and project operations, while Socket.IO manages real-time synchronization between connected developers.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
              <div>
                <span className="text-amber-400 font-semibold uppercase block text-[9px] mb-1">Application Layer</span>
                <span className="text-[#E1E0CC]/80">Express orchestrates business logic, authentication, project management, and AI request routing.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
              <div>
                <span className="text-amber-400 font-semibold uppercase block text-[9px] mb-1">Storage Layer</span>
                <span className="text-[#E1E0CC]/80">MongoDB persists users, projects, conversations, and workspace state, while Redis accelerates authentication workflows and token validation.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
              <div>
                <span className="text-amber-400 font-semibold uppercase block text-[9px] mb-1">AI Layer</span>
                <span className="text-[#E1E0CC]/80">Google Gemini acts as an intelligent participant within collaborative sessions, generating code, explanations, and project structures when explicitly invoked.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 05. REAL-TIME COLLABORATION
export function CodeweaveCollaboration({ theme }: { theme: ProjectTheme }) {
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
            Every workspace operates as a synchronized communication room.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            When a developer edits code or sends a project message, the client emits a WebSocket event to the server. The server persists the update, broadcasts the change to all connected participants, and maintains a consistent workspace state across every active client. This event-driven model minimizes latency while ensuring every participant shares the same project context.
          </p>
        </div>

        {/* Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 max-w-5xl">
          <div className="space-y-4">
            <ZoomableImage
              src="/PROJECTS/CODEWEAVE/WORKIND DEMO-01.webp"
              alt="Real-Time Typing Synchronization"
              wrapperClassName="w-full h-auto shadow-2xl ring-1 ring-white/10"
            />
            <p className="text-xs font-mono text-[#E1E0CC]/40 tracking-wider">TYPING SYNCHRONIZATION INTERFACE</p>
          </div>
          <div className="space-y-4">
            <ZoomableImage
              src="/PROJECTS/CODEWEAVE/WORKIND DEMO-02.webp"
              alt="Multi-File Editor Tabs"
              wrapperClassName="w-full h-auto shadow-2xl ring-1 ring-white/10"
            />
            <p className="text-xs font-mono text-[#E1E0CC]/40 tracking-wider">MULTI-FILE TAB SYNCHRONIZATION</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 06. AI CODING WORKFLOW
export function CodeweaveAiWorkflow({ theme }: { theme: ProjectTheme }) {
  return (
    <section id="ai-workflow" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-amber-500/20 bg-amber-500/5">
          <Bot className="w-4 h-4 text-amber-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          AI Coding Workflow
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Embedding intelligent assistance directly into the collaboration workspace.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            Rather than treating AI as an external assistant, CodeWeave embeds it directly into the collaboration workflow. When a developer invokes @ai, the Socket Gateway detects the request, forwards the prompt to Gemini, stores the generated response, and broadcasts the result to every participant within the project room. The AI therefore becomes another active collaborator rather than a separate application.
          </p>
        </div>

        {/* Visual Showcase */}
        <div className="space-y-4 max-w-4xl">
          <ZoomableImage
            src="/PROJECTS/CODEWEAVE/WORKIND DEMO-03.webp"
            alt="Embedded Gemini AI Assistant"
            wrapperClassName="w-full h-auto shadow-2xl ring-1 ring-white/10"
          />
          <p className="text-xs font-mono text-[#E1E0CC]/40 tracking-wider">CONTEXT-AWARE AI CHAT ASSISTANT</p>
        </div>
      </div>
    </section>
  );
}

// 07. SECURITY & COMMUNICATION
export function CodeweaveSecurity({ theme }: { theme: ProjectTheme }) {
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
            Securing persistent tunnels and API endpoints.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            Authentication is enforced through JWT verification across both REST endpoints and persistent WebSocket connections. Protected routes validate incoming requests before business logic executes, while Redis-backed token verification strengthens session management. This separation between authentication and application services keeps communication secure without increasing complexity inside the core collaboration engine.
          </p>
        </div>

        {/* Visual Showcase */}
        <div className="space-y-4 max-w-4xl">
          <ZoomableImage
            src="/PROJECTS/CODEWEAVE/WORKIND DEMO-04.webp"
            alt="Workspace State Synchronization"
            wrapperClassName="w-full h-auto shadow-2xl ring-1 ring-white/10"
          />
          <p className="text-xs font-mono text-[#E1E0CC]/40 tracking-wider">MONGODB WORKSPACE STATE PERSISTENCE</p>
        </div>
      </div>
    </section>
  );
}

// 08. ENGINEERING HIGHLIGHTS
export function CodeweaveHighlights({ theme }: { theme: ProjectTheme }) {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl font-mono text-xs">
        {[
          { title: "Real-Time Collaboration", desc: "Event-driven architecture using Socket.IO for real-time collaboration." },
          { title: "Hybrid Communication", desc: "REST and WebSocket hybrid communication model." },
          { title: "IDE Workspace Integration", desc: "Monaco Editor integration for a browser-based IDE experience." },
          { title: "Workspace Storage", desc: "Persistent project and conversation storage with MongoDB." },
          { title: "Session Cache", desc: "Redis-backed authentication and token verification." },
          { title: "Gemini AI Engine", desc: "Context-aware AI assistance powered by Google Gemini." },
          { title: "Modular Architecture", desc: "Modular Express backend with separated service responsibilities." },
          { title: "Logging & Health", desc: "Structured logging and observability using Winston." },
          { title: "Docker Container Ready", desc: "Docker-ready deployment architecture." },
          { title: "Client-Server Design", desc: "Scalable client-server design supporting collaborative development." }
        ].map((item, idx) => (
          <div key={idx} className="p-5 rounded-xl border border-white/5 bg-[#0a0a0a] space-y-2">
            <span className="text-amber-400 font-semibold block uppercase tracking-wider">{item.title}</span>
            <p className="text-[#E1E0CC]/60 font-light leading-relaxed text-[11px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// 09. WALKTHROUGH
export function CodeweaveWalkthrough({ project, theme }: ComponentProps) {
  if (!project.detailedScreenshots) return null;
  return (
    <section id="screenshots" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-amber-500/20 bg-amber-500/5">
          <Activity className="w-4 h-4 text-amber-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Walkthrough Gallery
        </h3>
      </div>
      <div className="max-w-6xl">
        <PremiumGallery screenshots={project.detailedScreenshots} theme={theme} />
      </div>
    </section>
  );
}

// 10. LESSONS LEARNED
export function CodeweaveLessons({ theme }: { theme: ProjectTheme }) {
  return (
    <section id="lessons" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20">
          <CheckCircle className="w-4 h-4 text-amber-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Lessons Learned
        </h3>
      </div>

      <div className="space-y-10 max-w-5xl">
        <div className="p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-semibold block">01. Consistency over Actions</span>
            <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-base">
              Building collaborative software requires designing for consistency rather than individual user interactions. Event-driven communication proved essential for synchronizing multiple developers without sacrificing responsiveness.
            </p>
          </div>
          
          <div className="space-y-2 pt-4 border-t border-white/5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-semibold block">02. Decoupled Subsystem Layering</span>
            <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-base">
              Separating REST operations, WebSocket communication, AI services, and persistence into independent layers made the architecture significantly easier to extend and maintain.
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-semibold block">03. Shared-Context AI Assistants</span>
            <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-base">
              Integrating AI directly into collaborative workflows demonstrated that intelligent assistants become far more useful when they operate within the shared project context instead of existing as isolated external tools.
            </p>
          </div>
        </div>
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
export default function CodeweaveCaseStudy({ project, theme }: ComponentProps) {
  return (
    <div className="space-y-12 pb-24">
      <CodeweaveCoreProblem theme={theme} />
      <CodeweaveWhyIBuiltThis theme={theme} />
      <CodeweaveTheSolution theme={theme} />
      <CodeweaveSystemArchitecture theme={theme} />
      <CodeweaveCollaboration theme={theme} />
      <CodeweaveAiWorkflow theme={theme} />
      <CodeweaveSecurity theme={theme} />
      <CodeweaveHighlights theme={theme} />
      <CodeweaveWalkthrough project={project} theme={theme} />
      <CodeweaveLessons theme={theme} />
    </div>
  );
}
