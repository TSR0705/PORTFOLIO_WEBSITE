import { projectsData } from "@/lib/portfolio-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles, AlertCircle, Cpu, CheckCircle } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Same mapping for illustrations
  const PROJECT_IMAGES: Record<string, string> = {
    webloom: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    "loadlab-deploybot": "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop",
    "samvidhan-setu": "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1200&auto=format&fit=crop",
    indisure: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    "multiplayer-chess": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
    margsetu: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200&auto=format&fit=crop",
    "quiz-arena": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop",
    "lms-platform": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop",
    filex: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1200&auto=format&fit=crop",
  };

  const imageSrc = PROJECT_IMAGES[project.id] || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop";

  return (
    <main className="min-h-screen w-full bg-black text-white px-6 md:px-12 py-28 md:py-36 relative overflow-hidden flex flex-col items-center">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#E1E0CC]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-4xl z-10 space-y-12">
        {/* Back Link */}
        <Link
          href="/#project-carousel"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#E1E0CC]/60 hover:text-white transition-colors uppercase tracking-[0.2em]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Projects Deck
        </Link>

        {/* Cinematic Title & Meta */}
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2.5 items-center">
            <span className="text-[10px] font-mono tracking-wider uppercase text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
              {project.category.replace("-", " ")}
            </span>
            <span className={`text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full border bg-white/5 ${
              project.status === "hackathon-winner"
                ? "border-[#E1E0CC]/40 text-[#E1E0CC]"
                : "border-white/10 text-white/50"
            }`}>
              {project.status.replace("-", " ")}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter leading-none text-white">
            {project.title} {project.status === "hackathon-winner" && <Sparkles className="inline-block w-8 h-8 text-[#E1E0CC] ml-2 align-middle" />}
          </h1>

          <p className="text-white/60 text-sm sm:text-base font-sans max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Image Banner */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl">
          <img
            src={imageSrc}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        </div>

        {/* Detail Matrix Grid */}
        <div className="grid md:grid-cols-12 gap-8 pt-4">
          {/* Main Narrative (Left) */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#E1E0CC]" />
              Detailed Narrative
            </h3>
            <p className="text-white/80 text-sm sm:text-base font-sans leading-relaxed">
              {project.longDescription || "No detailed long description available for this project yet."}
            </p>
            
            {/* Tech stack */}
            <div className="space-y-3 pt-4">
              <h4 className="text-[10px] font-mono tracking-wider uppercase text-white/40">Technologies Employed</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3.5 py-1.5 rounded-lg bg-neutral-900 border border-white/10 text-white/80 font-sans"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Challenges & Solutions (Right) */}
          <div className="md:col-span-5 space-y-8 md:border-l md:border-white/10 md:pl-8">
            {/* Challenge */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#E1E0CC] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                The Challenge
              </h3>
              <p className="text-white/70 text-xs md:text-sm font-sans leading-relaxed">
                {project.challenge || "Detailing the core system issues and scalability bottlenecks faced during implementation."}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                The Solution
              </h3>
              <p className="text-white/70 text-xs md:text-sm font-sans leading-relaxed">
                {project.solution || "Deploying automated pipelines, load-balanced backends, and caching protocols to solve performance issues."}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider py-3 px-6 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/45 transition-colors text-center w-full"
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
                  className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider py-3 px-6 rounded-full bg-[#E1E0CC] text-black hover:bg-[#E1E0CC]/90 transition-colors text-center w-full"
                >
                  Live Demo
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
