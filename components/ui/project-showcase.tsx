"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects as centralProjects } from "@/lib/projects";
import { ProjectTheme } from "@/lib/project-design";
import { getProjectTheme } from "@/lib/projects";

interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  link: string;
  image: string;
  theme: ProjectTheme;
}

const projects = centralProjects.map((p) => {
  const theme = getProjectTheme(p.id);
  return {
    id: p.id,
    title: p.title,
    description: p.shortDescription,
    year: p.year,
    link: `/projects/${p.id}`,
    image: theme.imageSrc,
    theme: theme,
  };
});

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsVisible(false);
  };

  return (
    <section id="projects" ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 scroll-mt-28">
      
      {/* Premium Header */}
      <div className="mb-16">
        <span className="text-[10px] md:text-xs font-mono tracking-[0.35em] text-[#E1E0CC]/60 uppercase block mb-3">
          PORTFOLIO LOG
        </span>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-[1.05] text-white">
          Selected <span className="font-semibold text-[#E1E0CC]">Works</span>
        </h2>
        <div className="h-[1px] w-24 bg-gradient-to-r from-[#E1E0CC]/40 to-transparent mt-5 mb-6" />
        <p className="text-white/40 text-xs md:text-sm font-sans max-w-xl leading-relaxed">
          A dynamic archive of interactive designs, real-time collaboration engines, and spatial computing constructs.
        </p>
      </div>

      {/* Hover Image Preview Card */}
      {!isMobile && (
        <div
          className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl border border-white/10 shadow-black/80"
          style={{
            left: containerRef.current?.getBoundingClientRect().left ?? 0,
            top: containerRef.current?.getBoundingClientRect().top ?? 0,
            transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.8,
            transition: "opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), scale 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="relative w-[320px] h-[200px] bg-neutral-950 rounded-xl overflow-hidden">
            {projects.map((project, index) => (
              <img
                key={project.title}
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 1.1,
                  filter: hoveredIndex === index ? "none" : "blur(10px)",
                }}
              />
            ))}
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      )}

      {/* Projects List */}
      <div className="space-y-0 border-b border-white/10">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className="group block relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-8 border-t border-white/10 transition-all duration-300 ease-out">
              {/* Background highlight on hover */}
              <div
                className={`
                  absolute inset-0 -mx-4 px-4 border backdrop-blur-sm rounded-xl
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? `opacity-100 scale-100 ${project.theme.bgGlow} ${project.theme.borderMuted}` : "opacity-0 scale-95 border-transparent"}
                `}
              />

              <div className="relative flex items-center justify-between gap-4 z-10">
                <div className="flex-1 min-w-0">
                  {/* Title with animated underline */}
                  <div className="inline-flex items-center gap-2">
                    <h3 className={`text-white font-medium text-xl md:text-2xl tracking-tight transition-colors duration-300 group-hover:${project.theme.accentText}`}>
                      <span className="relative">
                        {project.title}
                        {/* Animated underline */}
                        <span
                          className={`
                            absolute left-0 -bottom-1 h-[2px]
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                          style={{ backgroundColor: project.theme.primaryColor }}
                        />
                      </span>
                    </h3>

                    {/* Arrow that slides in */}
                    <ArrowUpRight
                      className={`
                        w-5 h-5
                        transition-all duration-300 ease-out
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-0 -translate-x-2 translate-y-2"
                        }
                      `}
                      style={{ color: project.theme.primaryColor }}
                    />
                  </div>

                  {/* Description with fade effect */}
                  <p
                    className={`
                      text-white/40 text-xs md:text-sm mt-2 leading-relaxed max-w-xl
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-white/70" : "text-white/40"}
                    `}
                  >
                    {project.description}
                  </p>

                  {isMobile && (
                    <div className={`mt-4 w-full aspect-[16/10] rounded-xl overflow-hidden border ${project.theme.borderMuted} relative shadow-md`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  )}
                </div>

                {/* Year badge */}
                <span
                  className={`
                    text-xs md:text-sm font-mono text-white/30 tabular-nums
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? project.theme.accentText : ""}
                  `}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
