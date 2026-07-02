"use client";

import React from "react";
import { 
  Sparkles, 
  Cpu, 
  AlertCircle, 
  CheckCircle, 
  Terminal, 
  ArrowRight,
  Database,
  Eye,
  Lock,
  Wallet,
  Compass
} from "lucide-react";
import { ProjectTheme } from "@/lib/project-design";
import { Project } from "@/lib/projects";
import PremiumGallery from "@/components/ui/premium-gallery";

interface ComponentProps {
  theme: ProjectTheme;
}

// 01. THE CORE PROBLEM
export function LmsCoreProblem({ theme }: ComponentProps) {
  return (
    <section id="problem" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20">
          <AlertCircle className="w-4 h-4 text-blue-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          The Core Problem
        </h3>
      </div>
      
      <div className="space-y-10 max-w-5xl">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.15]">
          Building an online learning platform is <span className="font-medium text-blue-400">not simply about displaying videos.</span>
        </h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-6 text-[#E1E0CC]/70 font-light leading-relaxed text-lg font-sans">
            <p>
              A production-ready Learning Management System must securely authenticate users, process payments, manage enrollments, protect premium content, and provide educators with an intuitive content management workflow—all while remaining fast and scalable.
            </p>
            <p>
              Most solutions solve these problems independently, resulting in disconnected systems that are difficult to maintain and expensive to scale. The challenge was to design a platform where authentication, content management, payments, and course delivery work together seamlessly without sacrificing performance or developer experience.
            </p>
          </div>
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative p-8 rounded-2xl border border-blue-500/10 bg-blue-500/[0.02] backdrop-blur-sm group hover:border-blue-500/20 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ backgroundColor: theme.primaryColor }} />
              <QuoteIcon className="w-10 h-10 text-white/10 absolute top-4 left-6" />
              <blockquote className="relative z-10 text-white/90 italic font-light text-xl leading-relaxed pt-4">
                "Isolated services create friction. If payments aren't tied directly to secure database states at the edge, student enrollments break and premium content leaks."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 02. WHY I BUILT THIS
export function LmsWhyIBuiltThis({ theme }: ComponentProps) {
  return (
    <section id="motivation" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20">
          <Sparkles className="w-4 h-4 text-blue-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Why I Built This
        </h3>
      </div>

      <div className="space-y-8 max-w-4xl">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.15]">
          Understanding how modern SaaS <br className="hidden md:block"/>
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">infrastructure is engineered.</span>
        </h4>

        <div className="space-y-6 text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
          <p>
            I wanted to understand how modern SaaS products are engineered behind the scenes. Rather than building another course-selling website, I focused on the infrastructure that powers it—secure authentication, server-side rendering, content management, payment automation, and protected course delivery.
          </p>
          <div className="p-6 rounded-xl border border-blue-500/10 bg-black/50 text-white font-medium text-xl shadow-inner">
            How do we decouple authentication, content rendering, and payment fulfillment?
          </div>
          <p>
            The goal wasn't just to ship a product. It was to design a modular system where every service has a single responsibility and the entire platform remains scalable, maintainable, and easy to extend.
          </p>
        </div>
      </div>
    </section>
  );
}

// 03. THE SOLUTION
export function LmsTheSolution({ theme }: ComponentProps) {
  return (
    <section id="solution" className="py-20 border-t border-white/5 space-y-16 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20">
          <CheckCircle className="w-4 h-4 text-blue-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
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
          <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")] opacity-[0.015] mix-blend-overlay pointer-events-none`}></div>
          
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E1E0CC]/50 mb-6 block z-10">System Architecture</span>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-extralight tracking-tight leading-tight text-white max-w-3xl z-10">
            "A serverless, service-oriented architecture, <br className="hidden md:block"/>
            allowing each technology to solve what it is <span className="font-semibold drop-shadow-lg" style={{ color: theme.primaryColor }}>best designed for</span>."
          </h3>
        </div>

        {/* Core Services Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[55px] rounded-full pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">Next.js App Router</span>
              <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
                Handles server-side rendering, API route handlers, and application routing to deliver instant page loads with minimal client JavaScript.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[55px] rounded-full pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">Sanity CMS</span>
              <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
                Serves as both the headless content management system and structured data store, powering course creation, modules, and lessons.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[55px] rounded-full pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">Clerk Identity</span>
              <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
                Manages secure authentication, identity verification, session state, and protects private dashboard routes at the edge.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[55px] rounded-full pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">Stripe Checkout</span>
              <p className="text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
                Processes credit card payments securely and automatically provisions student enrollments through cryptographic signed webhooks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 04. SYSTEM ARCHITECTURE
export function LmsSystemArchitecture({ theme }: ComponentProps) {
  return (
    <section id="architecture" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-blue-500/20 bg-blue-500/5">
          <Cpu className="w-4 h-4 text-blue-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          System Architecture
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Every request follows a clearly defined execution pipeline.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            This architecture minimizes client-side JavaScript, keeps sensitive operations on the server, and ensures course access is always determined by verified enrollment data rather than client state.
          </p>
        </div>

        {/* Execution Flow Diagram */}
        <div className="p-8 rounded-2xl border border-white/5 bg-[#080808] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 blur-[60px] rounded-full pointer-events-none" />
          <h5 className="text-[10px] font-mono uppercase tracking-widest text-[#E1E0CC]/40 mb-8 pb-3 border-b border-white/5">Request Pipeline Flow</h5>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono text-xs">
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-white/40 block mb-1 text-[9px]">STEP 01</span>
              <span className="text-white font-medium">Clerk Middleware</span>
              <span className="text-neutral-500 block mt-2 text-[10px]">Edge Route Protection</span>
            </div>
            
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-white/40 block mb-1 text-[9px]">STEP 02</span>
              <span className="text-white font-medium">Server Components</span>
              <span className="text-neutral-500 block mt-2 text-[10px]">RSC Static Rendering</span>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-white/40 block mb-1 text-[9px]">STEP 03</span>
              <span className="text-white font-medium">Sanity CMS</span>
              <span className="text-neutral-500 block mt-2 text-[10px]">Structured DB Read</span>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-white/40 block mb-1 text-[9px]">STEP 04</span>
              <span className="text-white font-medium">Server Actions</span>
              <span className="text-neutral-500 block mt-2 text-[10px]">Secure RPC Mutations</span>
            </div>
          </div>

          <div className="flex justify-center items-center my-6">
            <div className="h-px bg-white/10 w-full relative">
              <div className="absolute left-1/2 -translate-x-1/2 -top-2 px-3 py-0.5 rounded-full bg-neutral-900 border border-white/10 text-[9px] uppercase tracking-wider text-white/50">Transaction Scope</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center font-mono text-xs">
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-white/40 block mb-1 text-[9px]">STEP 05</span>
              <span className="text-white font-medium">Stripe Checkout</span>
              <span className="text-neutral-500 block mt-2 text-[10px]">Secure Gateway Session</span>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-white/40 block mb-1 text-[9px]">STEP 06</span>
              <span className="text-white font-medium">Webhook Verification</span>
              <span className="text-neutral-500 block mt-2 text-[10px]">Signed Signature POST</span>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <span className="text-white/40 block mb-1 text-[9px]">STEP 07</span>
              <span className="text-white font-medium">Enrollment Registry</span>
              <span className="text-neutral-500 block mt-2 text-[10px]">CMS Access Document</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 05. SECURE ENROLLMENT FLOW
export function LmsEnrollmentFlow({ theme }: ComponentProps) {
  return (
    <section id="enrollment" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-blue-500/20 bg-blue-500/5">
          <Lock className="w-4 h-4 text-blue-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Secure Enrollment
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Purchasing a course is only the beginning of the access lifecycle.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            When a student initiates enrollment, the application creates a Stripe Checkout Session through a Server Action. After payment is successfully completed, Stripe sends a signed webhook event back to the application. Only after verifying the webhook signature does the system create an Enrollment document inside Sanity, immediately granting access to the purchased course.
          </p>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            This asynchronous workflow keeps financial operations isolated while maintaining a secure enrollment process.
          </p>
        </div>

        {/* Code Block / Mathematical Verification Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          
          {/* Action Card 1: Math Gating */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full pointer-events-none" />
            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">Enrollment Gating Function</span>
                <p className="text-sm text-[#E1E0CC]/50 font-light leading-relaxed">
                  Validates course material access dynamically by ensuring a verified enrollment link document exists between student ID and course ID.
                </p>
              </div>
              <div className="p-6 bg-black/60 rounded-xl border border-white/5 flex justify-center items-center font-mono text-[11px] sm:text-xs text-white/90 shadow-inner group-hover:border-blue-500/20 transition-colors">
                <div className="text-center">
                  <span>Access(U, C) = ∃ E ∈ Enrollments | E.userId = U ∧ E.courseId = C</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Card 2: Server Action */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full pointer-events-none" />
            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">Stripe Webhook Verification</span>
                <p className="text-sm text-[#E1E0CC]/50 font-light leading-relaxed">
                  Cryptographically matches incoming Stripe event payloads with local endpoint secrets to verify origin authenticity.
                </p>
              </div>
              <div className="p-4 bg-black/60 rounded-xl border border-white/5 font-mono text-[10px] text-white/80 shadow-inner group-hover:border-blue-500/20 transition-colors space-y-1">
                <div>
                  <span className="text-[#E1E0CC]/80">const</span> event = stripe.webhooks.constructEvent(
                </div>
                <div className="pl-4">
                  body, signature, process.env.STRIPE_WEBHOOK_SECRET
                </div>
                <div>);</div>
              </div>
            </div>
          </div>

        </div>

        {/* Engineering Highlights */}
        <div className="py-12 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E1E0CC]/40">Engineering Highlights</span>
              <h5 className="text-xl text-white font-light">Engineered for security and speed.</h5>
              <p className="text-sm text-[#E1E0CC]/60 leading-relaxed font-light">
                By routing dynamic previews through Next.js Draft Mode and building server-first components, the system achieves maximum loading velocity while maintaining strict enrollment gates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "RSC server-first rendering",
                "Sanity CMS Headless core",
                "Clerk route gates",
                "Stripe signed webhooks",
                "Draft Mode live preview",
                "Type-safe Server Actions"
              ].map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#E1E0CC]/80 font-light font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lessons Learned Block */}
        <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1E0CC]/40">Lessons Learned</span>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-base">
            This project reinforced that scalable software is built by separating responsibilities rather than combining them. Using dedicated services for authentication, content management, and payments significantly simplifies application logic while improving security and maintainability.
          </p>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-base">
            It also demonstrated how modern Next.js features—such as React Server Components and Server Actions—can reduce client complexity without sacrificing user experience.
          </p>
        </div>

      </div>
    </section>
  );
}

// 06. WALKTHROUGH
export function LmsWalkthrough({ project, theme }: { project: Project; theme: ProjectTheme }) {
  if (!project.detailedScreenshots) return null;
  return (
    <section id="screenshots" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-blue-500/20 bg-blue-500/5">
          <Eye className="w-4 h-4 text-blue-400" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
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
export default function LmsPlatformCaseStudy({ project, theme }: { project: Project; theme: ProjectTheme }) {
  return (
    <div className="space-y-12 pb-24">
      <LmsCoreProblem theme={theme} />
      <LmsWhyIBuiltThis theme={theme} />
      <LmsTheSolution theme={theme} />
      <LmsSystemArchitecture theme={theme} />
      <LmsEnrollmentFlow theme={theme} />
      <LmsWalkthrough project={project} theme={theme} />
    </div>
  );
}
