"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Section {
  id: string;
  label: string;
}

interface ProjectScrollRailProps {
  sections: Section[];
  primaryColor: string; // The hex accent color of the project
}

export default function ProjectScrollRail({ sections, primaryColor }: ProjectScrollRailProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  const activeIndex = sections.findIndex((s) => s.id === activeSection);
  const safeActiveIndex = activeIndex === -1 ? 0 : activeIndex;

  const isCompact = sections.length > 8;
  const gapClass = isCompact ? "gap-3" : "gap-5";
  const pyClass = isCompact ? "py-1" : "py-1.5";

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px", // Focus on the middle-upper part of the viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Fallback: Check scroll position on mount
    const checkInitialScroll = () => {
      let currentActive = "";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            currentActive = section.id;
            break;
          }
        }
      }
      if (currentActive) {
        setActiveSection(currentActive);
      } else if (sections.length > 0) {
        setActiveSection(sections[0].id);
      }
    };

    checkInitialScroll();

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  if (sections.length === 0) return null;

  return (
    <div 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end py-4 pointer-events-none w-48"
      role="navigation"
      aria-label="Case Study Section Rail"
    >
      {/* 1. Step Counter */}
      <div className="mb-6 text-right pr-1 pointer-events-auto select-none">
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#E1E0CC]/30 uppercase block mb-1">
          Progress
        </span>
        <span 
          className="font-mono text-sm font-semibold tracking-wider transition-colors duration-300"
          style={{ color: primaryColor }}
        >
          {String(safeActiveIndex + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}
        </span>
      </div>

      {/* 2. Interactive Rail Body Container */}
      <div className={`relative flex flex-col items-end ${gapClass} pr-1.5 w-full`}>
        {/* Continuous Vertical Rail Track */}
        <div className="absolute right-[4px] top-2 bottom-2 w-[1px] bg-white/15 rounded-full overflow-hidden">
          {/* Active progress fill */}
          <motion.div
            className="w-full origin-top"
            style={{ backgroundColor: primaryColor }}
            animate={{
              height: `${(safeActiveIndex / (sections.length - 1)) * 100}%`
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>

        {/* 3. Section Indicators */}
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;

          return (
            <div
              key={section.id}
              className={`group relative flex items-center justify-end pointer-events-auto cursor-pointer ${pyClass} w-full`}
              onClick={() => handleScrollToSection(section.id)}
            >
              {/* Tooltip Label (Spring transition via CSS micro-adjustments or classes) */}
              <span
                className={`mr-4 px-3 py-1 text-[10px] font-mono tracking-widest uppercase rounded bg-[#0a0a0a]/90 border border-white/10 text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none shadow-xl select-none backdrop-blur-sm ${
                  isActive ? "border-white/20 text-[#E1E0CC]" : ""
                }`}
                style={{
                  borderColor: isActive ? `${primaryColor}40` : "rgba(255,255,255,0.1)",
                }}
              >
                {section.label}
              </span>

              {/* Horizontal Dash Indicator (Framer-motion spring animated) */}
              <div className="relative flex items-center h-4 w-12 justify-end">
                <motion.div
                  animate={{
                    width: isActive ? 28 : 14,
                    height: isActive ? 2 : 1,
                    backgroundColor: isActive ? primaryColor : "rgba(255, 255, 255, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  className="rounded-full"
                  style={{
                    boxShadow: isActive ? `0 0 10px ${primaryColor}80, 0 0 4px ${primaryColor}` : "none",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
