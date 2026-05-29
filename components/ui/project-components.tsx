import React from "react";
import * as Lucide from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { skillDetails } from "@/components/skills-section";
import { ProjectTheme } from "@/lib/project-design";
import { Project } from "@/lib/projects";

// Renders a badge for the project status
export function ProjectBadge({
  status,
  theme,
  className = "",
}: {
  status: string;
  theme: ProjectTheme;
  className?: string;
}) {
  return (
    <span
      className={`text-[9px] md:text-[10px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full border bg-black/40 backdrop-blur-sm transition-colors ${theme.borderMuted} ${theme.accentText} ${className}`}
    >
      {status.replace("-", " ")}
    </span>
  );
}

// Reusable tech pill inheriting icons/colors from the Engineering Toolkit mapping
export function TechBadge({
  tech,
  variant = "default",
  className = "",
}: {
  tech: string;
  variant?: "default" | "compact";
  className?: string;
}) {
  const details = skillDetails[tech] || {
    icon: Lucide.Cpu,
    bg: "bg-neutral-900",
    text: "text-white/80",
    border: "border-white/10",
  };
  const IconComp = details.icon;

  if (variant === "compact") {
    return (
      <span
        className={`inline-flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded bg-neutral-950/80 border border-white/5 text-white/60 ${className}`}
      >
        <IconComp className="w-3 h-3 text-[#E1E0CC]/80 flex-shrink-0" />
        {tech}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg ${details.bg} ${details.text} ${details.border || "border border-transparent"} transition-all duration-200 cursor-default shadow-md hover:scale-[1.02] ${className}`}
    >
      <IconComp className="w-4 h-4 flex-shrink-0" />
      {tech}
    </span>
  );
}

// Renders list of filtering or detail tags
export function ProjectTags({
  tags,
  className = "",
}: {
  tags: string[];
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[9px] md:text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/50"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

// Renders external project URLs (GitHub, Live demo, Video demo)
export function ProjectLinks({
  githubUrl,
  liveUrl,
  demoUrl,
  theme,
  variant = "default",
  className = "",
}: {
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  theme: ProjectTheme;
  variant?: "default" | "compact";
  className?: string;
}) {
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-lg bg-neutral-900 border border-white/10 hover:bg-neutral-800 hover:border-white/30 text-white/70 hover:text-white transition-colors"
            title="GitHub Code"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="w-3.5 h-3.5" />
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-lg transition-colors"
            style={{ backgroundColor: theme.primaryColor, color: "#000" }}
            title="Live Demo"
            onClick={(e) => e.stopPropagation()}
          >
            <Lucide.ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10 ${className}`}>
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider py-3 px-6 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/45 transition-colors text-center w-full sm:flex-1"
        >
          <FaGithub className="w-4 h-4" />
          Source Code
        </a>
      )}
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300 text-center w-full sm:flex-1"
          style={{ backgroundColor: theme.primaryColor, color: "#000" }}
        >
          Live Demo
          <Lucide.ArrowUpRight className="w-4 h-4" />
        </a>
      )}
      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider py-3 px-6 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/45 transition-colors text-center w-full sm:flex-1"
        >
          <Lucide.Play className="w-4 h-4 fill-white/10" />
          Video Demo
        </a>
      )}
    </div>
  );
}

// Single card in the homepage CardStack Deck
export function ProjectCard({
  item,
  active,
  theme,
  onClick,
}: {
  item: any;
  active: boolean;
  theme: ProjectTheme;
  onClick: () => void;
}) {
  const IconComponent = (Lucide as any)[theme.iconName] || Lucide.Code;

  return (
    <div
      onClick={onClick}
      className={`relative h-full w-full bg-black overflow-hidden flex flex-col justify-between rounded-3xl border transition-all duration-500 ${
        active
          ? `cursor-pointer ${theme.borderActive} ${theme.shadow} shadow-2xl`
          : "cursor-default border-white/5"
      }`}
    >
      {/* Background Image with overlay gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={theme.imageSrc}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <div className={`absolute inset-0 opacity-[0.06] ${theme.bgGlow} mix-blend-color z-10`} />
      </div>

      {/* Card Content Header */}
      <div className="relative z-20 p-5 flex justify-between items-start gap-4">
        <span className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-wider uppercase text-white/50 bg-black/40 border border-white/10 px-2 py-0.5 rounded-md">
          <IconComponent className={`w-3 h-3 ${theme.accentText}`} />
          {item.category.replace("-", " ")}
        </span>

        <ProjectBadge status={item.status} theme={theme} />
      </div>

      {/* Card Content Footer & Details */}
      <div className="relative z-20 p-6 pt-0 space-y-4">
        <div>
          <h3 className="text-xl font-medium tracking-tight text-white flex items-center gap-2 mb-1.5">
            {item.title}
            {item.featured && <Lucide.Sparkles className={`w-4 h-4 ${theme.accentText}`} />}
          </h3>
          <p className="text-white/70 text-xs md:text-sm leading-relaxed font-sans line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Tech stack & Action buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/5">
          {/* Tech Pills */}
          <div className="flex flex-wrap gap-1">
            {item.techStack.slice(0, 3).map((tech: string) => (
              <TechBadge key={tech} tech={tech} variant="compact" />
            ))}
          </div>

          {/* Links */}
          <ProjectLinks
            githubUrl={item.githubUrl}
            liveUrl={item.liveUrl}
            theme={theme}
            variant="compact"
          />
        </div>
      </div>
    </div>
  );
}

// Cinematic Header for the Project Case Study View
export function ProjectHeader({
  project,
  theme,
}: {
  project: Project;
  theme: ProjectTheme;
}) {
  const IconComponent = (Lucide as any)[theme.iconName] || Lucide.Code;

  return (
    <>
      {/* Ambient background glows */}
      <div className={`absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] ${theme.bgGlow} opacity-30 rounded-full blur-[120px] pointer-events-none`} />
      <div className={`absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] ${theme.bgGlow} opacity-20 rounded-full blur-[140px] pointer-events-none`} />

      {/* Header Info */}
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2.5 items-center">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
            <IconComponent className={`w-3.5 h-3.5 ${theme.accentText}`} />
            {project.category}
          </span>
          <ProjectBadge status={project.status} theme={theme} />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter leading-none text-white">
          {project.title}{" "}
          {project.featured && (
            <Lucide.Sparkles className={`inline-block w-8 h-8 ${theme.accentText} ml-2 align-middle`} />
          )}
        </h1>

        <p className="text-white/60 text-sm sm:text-base font-sans max-w-2xl leading-relaxed">
          {project.shortDescription}
        </p>
      </div>

      {/* Cinematic Banner */}
      <div className={`w-full aspect-video rounded-3xl overflow-hidden border ${theme.borderMuted} relative shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-opacity-40`}>
        <img
          src={theme.imageSrc}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        <div className={`absolute inset-0 opacity-[0.05] ${theme.bgGlow} mix-blend-color`} />
      </div>
    </>
  );
}
