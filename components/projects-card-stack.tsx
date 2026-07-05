"use client";

import React, { useMemo, useState, useEffect } from "react";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import { projects } from "@/lib/projects";
import { useRouter } from "next/navigation";
import { getProjectTheme } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/project-components";

interface CustomCardItem extends CardStackItem {
  techStack: string[];
  category: string;
  status: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectsCardStack() {
  const router = useRouter();
  const [dimensions, setDimensions] = useState({ width: 520, height: 340 });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        // Very small screens (320px - 479px)
        const width = w - 48; // Allow 24px margins on each side
        setDimensions({
          width: width,
          height: Math.round(width * 0.7)
        });
      } else if (w < 640) {
        // Small screens (480px - 639px)
        const width = w - 64; // Allow 32px margins on each side
        setDimensions({
          width: width,
          height: Math.round(width * 0.66)
        });
      } else {
        // Desktop / tablets (>= 640px)
        setDimensions({ width: 520, height: 340 });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run immediately on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Convert our projects into the custom items array
  const stackItems = useMemo<CustomCardItem[]>(() => {
    return projects.filter((p) => p.featured).map((project) => ({
      id: project.id,
      title: project.title,
      description: project.shortDescription,
      imageSrc: getProjectTheme(project.id).imageSrc,
      href: project.liveUrl || project.githubUrl,
      techStack: project.techStack,
      category: project.category,
      status: project.status,
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl,
    }));
  }, []);

  return (
    <section id="projects" className="w-full bg-black text-white px-6 py-20 relative border-t border-white/5 overflow-hidden scroll-mt-28">
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
          <h2 className="text-3xl md:text-5xl font-light tracking-tighter leading-none text-white mb-4">
            Project <span className="font-medium text-[#E1E0CC]">Deck</span>
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
            cardWidth={dimensions.width}
            cardHeight={dimensions.height}
            maxVisible={5}
            overlap={0.52}
            spreadDeg={35}
            autoAdvance={false}
            showDots={true}
            renderCard={(item, { active }) => (
              <ProjectCard
                item={item}
                active={active}
                theme={getProjectTheme(String(item.id))}
                onClick={() => {
                  if (active) {
                    router.push(`/projects/${item.id}`);
                  }
                }}
              />
            )}
          />
        </div>

      </div>
    </section>
  );
}
