import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  Sparkles, 
  FolderCode,
  Link2
} from "lucide-react";
import * as Lucide from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getProjectTheme } from "@/lib/projects";
import {
  ProjectBadge,
  TechBadge
} from "@/components/ui/project-components";
import ProjectScrollRail from "@/components/ui/project-scroll-rail";
import DbmsSelfHealingCaseStudy from "@/components/projects/dbms-self-healing-case-study";
import CodeweaveCaseStudy from "@/components/projects/codeweave-case-study";
import AndroidTaskManagerCaseStudy from "@/components/projects/android-task-manager-case-study";
import FcfsSchedulerSimulatorCaseStudy from "@/components/projects/fcfs-scheduler-simulator-case-study";
import LmsPlatformCaseStudy from "@/components/projects/lms-platform-case-study";
import SaylixTranslatorCaseStudy from "@/components/projects/saylix-translator-case-study";
import ExposurCaseStudy from "@/components/projects/exposur-case-study";

const CaseStudyComponents: Record<string, React.ComponentType<{ project: any; theme: any }>> = {
  "dbms-self-healing": DbmsSelfHealingCaseStudy,
  "codeweave": CodeweaveCaseStudy,
  "android-task-manager": AndroidTaskManagerCaseStudy,
  "fcfs-scheduler-simulator": FcfsSchedulerSimulatorCaseStudy,
  "lms-platform": LmsPlatformCaseStudy,
  "saylix-translator": SaylixTranslatorCaseStudy,
  "exposur": ExposurCaseStudy,
};

import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tanmaysinghrajput.vercel.app";
  const projectUrl = `${siteUrl}/projects/${project.id}`;
  const theme = getProjectTheme(project.id);
  const ogImageUrl = theme?.imageSrc ? (theme.imageSrc.startsWith("http") ? theme.imageSrc : `${siteUrl}${theme.imageSrc}`) : `${siteUrl}/MY_IMAGE.webp`;

  return {
    title: `${project.title} | Software Engineering Case Study`,
    description: project.shortDescription,
    keywords: [
      project.title,
      project.category,
      ...project.tags,
      "Software Engineering Case Study",
      "Tanmay Singh Projects",
      "Backend Systems",
      "System Architecture"
    ],
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: projectUrl,
      title: `${project.title} | Software Engineering Case Study`,
      description: project.shortDescription,
      siteName: "Tanmay Singh Portfolio",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Technical Case Study`,
      description: project.shortDescription,
      creator: "@TanmaySinghRa18",
      images: [ogImageUrl],
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Helper function to render text containing markdown **bold** markers as React nodes
function renderBoldText(text: string) {
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

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const theme = getProjectTheme(project.id);


  const IconComponent = (Lucide as any)[theme.iconName] || Lucide.Cpu;

  // Dynamic Case Study Rails Section Array
  const sections = project.id === "dbms-self-healing" ? [
    { id: "overview", label: "Executive Summary" },
    { id: "problem", label: "Core Problem" },
    { id: "motivation", label: "Why I Built This" },
    { id: "solution", label: "The Solution" },
    { id: "architecture", label: "System Architecture" },
    { id: "statistics", label: "Statistical Engine" },
    ...(project.screenshots || project.detailedScreenshots ? [{ id: "screenshots", label: "Walkthrough" }] : []),
  ] : project.id === "exposur" ? [
    { id: "overview", label: "Executive Summary" },
    { id: "architecture", label: "Reverse Proxy & Routing" },
    { id: "dns-leak", label: "DNS Leak Engine" },
    { id: "fingerprint", label: "Client Fingerprinting" },
    { id: "screenshots", label: "Walkthrough" },
  ] : project.id === "lms-platform" ? [
    { id: "overview", label: "Executive Summary" },
    { id: "problem", label: "The Core Problem" },
    { id: "motivation", label: "Why I Built This" },
    { id: "solution", label: "The Solution" },
    { id: "architecture", label: "System Architecture" },
    { id: "enrollment", label: "Secure Enrollment" },
    { id: "screenshots", label: "Walkthrough" },
  ] : project.id === "fcfs-scheduler-simulator" ? [
    { id: "overview", label: "Executive Summary" },
    { id: "problem", label: "The Core Problem" },
    { id: "motivation", label: "Why I Built This" },
    { id: "solution", label: "The Solution" },
    { id: "architecture", label: "System Architecture" },
    { id: "algorithm", label: "Scheduling Algorithm" },
    { id: "workflow", label: "Simulation Workflow" },
    { id: "analytics", label: "Performance Analytics" },
    { id: "visualization", label: "Interactive Visualization" },
    { id: "highlights", label: "Engineering Highlights" },
    { id: "lessons", label: "Lessons Learned" },
  ] : project.id === "codeweave" ? [
    { id: "overview", label: "Executive Summary" },
    { id: "problem", label: "The Core Problem" },
    { id: "motivation", label: "Why I Built This" },
    { id: "solution", label: "The Solution" },
    { id: "architecture", label: "System Architecture" },
    { id: "collaboration", label: "Real-Time Collaboration" },
    { id: "ai-workflow", label: "AI Coding Workflow" },
    { id: "security", label: "Security & Communication" },
    { id: "screenshots", label: "Walkthrough" },
    { id: "lessons", label: "Lessons Learned" },
  ] : [
    { id: "overview", label: "Executive Summary" },
    ...(project.problemStatement ? [{ id: "problem", label: "Core Problem" }] : []),
    ...(project.motivation ? [{ id: "motivation", label: "Motivation" }] : []),
    ...(project.ahaMoment ? [{ id: "aha", label: "Aha Moment" }] : []),
    ...(project.solutionOverview ? [{ id: "solution", label: "Solution Strategy" }] : []),

    ...(project.systemFlow ? [{ id: "flow", label: "System Flow" }] : []),
    ...(project.mermaidDiagram || project.architectureDiagram || project.architectureLayers || project.architectureImages ? [{ id: "architecture", label: "Architecture" }] : []),
    ...(project.engineeringDecisions ? [{ id: "decisions", label: "Decisions" }] : []),
    ...(project.tradeoffs ? [{ id: "tradeoffs", label: "Tradeoffs" }] : []),
    ...(project.failureScenarios ? [{ id: "failures", label: "Failure Modes" }] : []),
    ...(project.challengesSolutions ? [{ id: "challenges", label: "Challenges" }] : []),
    ...(project.securityMeasures ? [{ id: "security", label: "Security & Guardrails" }] : []),
    ...(project.screenshots || project.detailedScreenshots ? [{ id: "screenshots", label: "Walkthrough" }] : []),
    ...(project.keyMetrics ? [{ id: "metrics", label: "Metrics" }] : []),
    ...(project.lessonsLearned ? [{ id: "lessons", label: "Lessons" }] : []),
    ...(project.futureEvolution || project.futureImprovements ? [{ id: "future", label: "Roadmap" }] : []),
  ];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tanmaysinghrajput.vercel.app";
  const projectUrl = `${siteUrl}/projects/${project.id}`;
  const ogImageUrl = theme?.imageSrc ? (theme.imageSrc.startsWith("http") ? theme.imageSrc : `${siteUrl}${theme.imageSrc}`) : `${siteUrl}/MY_IMAGE.webp`;
  
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${projectUrl}/#software`,
    "name": project.title,
    "description": project.shortDescription,
    "applicationCategory": "DeveloperApplication",
    "applicationSubCategory": "DeveloperTool",
    "operatingSystem": "All",
    "programmingLanguage": project.techStack,
    "softwareVersion": "1.0.0",
    "url": projectUrl,
    "image": ogImageUrl,
    "author": {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Tanmay Singh",
      "url": siteUrl
    },
    "creator": {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Tanmay Singh",
      "url": siteUrl
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    ...(project.githubUrl ? { "codeRepository": project.githubUrl } : {})
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${projectUrl}/#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": `${siteUrl}/projects`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": projectUrl
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${projectUrl}/#article`,
    "headline": `${project.title} | Software Engineering Case Study`,
    "description": project.shortDescription,
    "image": ogImageUrl,
    "datePublished": `${project.year}-01-01T00:00:00Z`,
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Tanmay Singh",
      "url": siteUrl
    },
    "publisher": {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Tanmay Singh",
      "url": siteUrl
    },
    "about": {
      "@type": "SoftwareApplication",
      "name": project.title
    },
    "inLanguage": "en-US"
  };

  return (
    <main className="min-h-screen w-full bg-black text-white px-6 md:px-12 py-28 md:py-36 relative overflow-hidden flex flex-col items-center">
      {/* Inject Rich Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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

              <p className="text-[#E1E0CC]/95 text-lg md:text-xl font-normal leading-relaxed tracking-wide max-w-2xl font-sans">
                {renderBoldText(project.shortDescription)}
              </p>

              {project.fullDescription && (
                <p className="text-[#E1E0CC]/90 text-sm md:text-base font-normal leading-relaxed tracking-wide max-w-2xl pt-2">
                  {renderBoldText(project.fullDescription)}
                </p>
              )}
            </div>

            {/* Right Column: Project Access Card (Premium Sidebar Layout) */}
            <div className={`lg:col-span-4 p-7 rounded-3xl border ${theme.borderMuted} bg-neutral-950/85 backdrop-blur-md relative overflow-hidden space-y-6 transition-all duration-500 ${theme.borderActive} shadow-2xl`}>
              
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
            </div>
          </div>
        </section>
      </div>

      {/* MASSIVE HERO PRODUCT IMAGE (Breaks out of container, Apple/Stripe Style) */}
      <div className="w-full max-w-[80vw] lg:max-w-[900px] z-10 my-12 relative flex flex-col items-center justify-center">
        {/* Ambient Project Accent Glow Layer (10-15% subtle atmosphere) */}
        <div 
          className="absolute inset-0 rounded-[32px] blur-[120px] opacity-100 pointer-events-none -z-20"
          style={{
            background: project.id === "dbms-self-healing"
              ? "radial-gradient(circle at center, rgba(0, 255, 180, 0.08) 0%, transparent 70%)"
              : `radial-gradient(circle at center, ${theme.primaryColor}14, transparent 70%)`
          }} 
        />

        {/* Shadow Layer & Screenshot Frame (No browser mockup header or container) */}
        <div className={`w-full rounded-[32px] overflow-hidden border ${theme.borderMuted} bg-black shadow-[0_30px_100px_rgba(0,0,0,0.95)] transition-all duration-500 hover:border-white/10 relative group p-1 sm:p-2`}>
          <div className="relative w-full overflow-hidden rounded-[24px]">
            <img
              src={theme.imageSrc}
              alt={`${project.title} - ${project.shortDescription}`}
              className="w-full h-auto block object-contain"
            />
            {/* Edge-blending subtle vignette (12% fade at edges) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-black/12 pointer-events-none rounded-[24px]" />
          </div>
        </div>
      </div>

      <article id="case-study-article" className="w-full max-w-4xl z-10 space-y-16">
        {(() => {
          const CaseStudyComponent = CaseStudyComponents[project.id];
          return CaseStudyComponent ? (
            <CaseStudyComponent project={project} theme={theme} />
          ) : null;
        })()}
      </article>
    </main>
  );
}
