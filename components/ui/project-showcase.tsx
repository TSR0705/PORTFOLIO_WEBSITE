"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  year: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Lumina",
    description: "AI-powered design system generator.",
    year: "2024",
    link: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Flux",
    description: "Real-time collaboration for creative teams.",
    year: "2024",
    link: "#",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Prism",
    description: "Color palette extraction from any image.",
    year: "2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Vertex",
    description: "3D modeling toolkit for the web.",
    year: "2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
  },
];

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

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
    <section ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full max-w-4xl mx-auto px-6 py-20">
      
      {/* Premium Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-[1px] w-6 bg-[#E1E0CC]" />
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#E1E0CC]/80 uppercase">PORTFOLIO LOG</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-[#E1E0CC] leading-none mb-4">SELECTED WORKS</h1>
        <p className="text-white/40 text-xs md:text-sm font-sans max-w-lg leading-relaxed">
          A dynamic archive of interactive designs, real-time collaboration engines, and spatial computing constructs.
        </p>
      </div>

      {/* Hover Image Preview Card */}
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
                  absolute inset-0 -mx-4 px-4 bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-xl
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
              />

              <div className="relative flex items-center justify-between gap-4 z-10">
                <div className="flex-1 min-w-0">
                  {/* Title with animated underline */}
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-white font-medium text-xl md:text-2xl tracking-tight transition-colors duration-300 group-hover:text-[#E1E0CC]">
                      <span className="relative">
                        {project.title}
                        {/* Animated underline */}
                        <span
                          className={`
                            absolute left-0 -bottom-1 h-[2px] bg-[#E1E0CC]
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                        />
                      </span>
                    </h3>

                    {/* Arrow that slides in */}
                    <ArrowUpRight
                      className={`
                        w-5 h-5 text-[#E1E0CC]
                        transition-all duration-300 ease-out
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-0 -translate-x-2 translate-y-2"
                        }
                      `}
                    />
                  </div>

                  {/* Description with fade effect */}
                  <p
                    className={`
                      text-white/40 text-xs md:text-sm mt-2 leading-relaxed max-w-xl
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-[#E1E0CC]/80" : "text-white/40"}
                    `}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Year badge */}
                <span
                  className={`
                    text-xs md:text-sm font-mono text-white/30 tabular-nums
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? "text-[#E1E0CC]/80" : ""}
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
