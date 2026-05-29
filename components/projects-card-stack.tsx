"use client";

import React, { useMemo } from "react";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import { projectsData } from "@/lib/portfolio-data";
import { Sparkles, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Map real projects to matching premium images
const PROJECT_IMAGES: Record<string, string> = {
  webloom: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  "loadlab-deploybot": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  "samvidhan-setu": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
  indisure: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
  "multiplayer-chess": "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1200&auto=format&fit=crop",
  margsetu: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop",
  "quiz-arena": "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1200&auto=format&fit=crop",
  "lms-platform": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1200&auto=format&fit=crop",
  filex: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop",
};

interface CustomCardItem extends CardStackItem {
  techStack: string[];
  category: string;
  status: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectsCardStack() {
  // Convert our projectsData into the custom items array
  const stackItems = useMemo<CustomCardItem[]>(() => {
    return projectsData.map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      imageSrc: PROJECT_IMAGES[project.id] || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      href: project.liveUrl || project.githubUrl,
      techStack: project.techStack,
      category: project.category,
      status: project.status,
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl,
    }));
  }, []);

  return (
    <section id="project-carousel" className="w-full bg-black text-white px-6 py-20 relative border-t border-white/5 overflow-hidden">
      {/* Background glow styling */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E1E0CC]/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Title Block */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-4 bg-[#E1E0CC]" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#E1E0CC]/80 uppercase">DECK VIEW</span>
            <span className="h-[1px] w-4 bg-[#E1E0CC]" />
          </div>
          <h2 className="font-medium tracking-tight text-3xl md:text-5xl text-[#E1E0CC] mb-3">
            PROJECT DECK
          </h2>
          <p className="text-white/40 text-xs md:text-sm max-w-lg mx-auto font-sans leading-relaxed">
            Swipe or use arrow keys to browse through my portfolio of products, services, and experimental designs.
          </p>
        </div>

        {/* CardStack Container */}
        <div className="w-full max-w-2xl flex justify-center">
          <CardStack
            items={stackItems}
            initialIndex={0}
            cardWidth={520}
            cardHeight={340}
            maxVisible={5}
            overlap={0.52}
            spreadDeg={35}
            autoAdvance={false}
            showDots={true}
            renderCard={(item, { active }) => (
              <div className="relative h-full w-full bg-neutral-900 overflow-hidden flex flex-col justify-between">
                
                {/* Background Image with overlay gradient */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="h-full w-full object-cover opacity-35 filter brightness-75 group-hover:scale-105 transition-transform duration-700"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/30 z-10" />
                </div>

                {/* Card Content Header */}
                <div className="relative z-20 p-5 flex justify-between items-start gap-4">
                  <span className="text-[9px] font-mono tracking-wider uppercase text-white/50 bg-black/40 border border-white/10 px-2 py-0.5 rounded-md">
                    {item.category.replace("-", " ")}
                  </span>
                  
                  <span className={`text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border bg-black/30 ${
                    item.status === "hackathon-winner"
                      ? "border-[#E1E0CC]/40 text-[#E1E0CC]"
                      : "border-white/10 text-white/50"
                  }`}>
                    {item.status.replace("-", " ")}
                  </span>
                </div>

                {/* Card Content Footer & Details */}
                <div className="relative z-20 p-6 pt-0 space-y-4">
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-white flex items-center gap-2 mb-1.5">
                      {item.title}
                      {item.status === "hackathon-winner" && <Sparkles className="w-4 h-4 text-[#E1E0CC]" />}
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed font-sans line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Tech stack & Action buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/5">
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1">
                      {item.techStack.slice(0, 3).map((tech) => (
                        <span 
                          key={tech} 
                          className="text-[9px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                      {item.githubUrl && (
                        <a 
                          href={item.githubUrl}
                          target="_blank" 
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                          title="GitHub Code"
                          onClick={(e) => e.stopPropagation()} // Prevent card swiping/activating trigger
                        >
                          <FaGithub className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {item.liveUrl && (
                        <a 
                          href={item.liveUrl}
                          target="_blank" 
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-[#E1E0CC] hover:bg-[#E1E0CC]/95 text-black transition-colors"
                          title="Live Demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            )}
          />
        </div>

      </div>
    </section>
  );
}
