"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-5 py-4 pointer-events-none"
      role="navigation"
      aria-label="Case Study Section Rail"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <div
            key={section.id}
            className="group relative flex items-center justify-end pointer-events-auto cursor-pointer py-1.5"
            onClick={() => handleScrollToSection(section.id)}
          >
            {/* Tooltip Label */}
            <span
              className="mr-4 px-3 py-1 text-[10px] font-mono tracking-widest uppercase rounded bg-[#0a0a0a]/90 border border-white/10 text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none shadow-xl select-none backdrop-blur-sm"
              style={{
                borderColor: isActive ? `${primaryColor}30` : "rgba(255,255,255,0.1)",
              }}
            >
              {section.label}
            </span>

            {/* Horizontal Line Indicator */}
            <div className="relative flex items-center h-4 w-12 justify-end">
              <motion.div
                animate={{
                  width: isActive ? 28 : 12,
                  height: isActive ? 2 : 1,
                  backgroundColor: isActive ? primaryColor : "rgba(255, 255, 255, 0.12)",
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
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
  );
}
