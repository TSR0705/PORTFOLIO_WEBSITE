"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaReact,
  FaDocker,
  FaNodeJs,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiKubernetes,
  SiJenkins,
  SiPostman,
  SiMongodb,
  SiTypescript
} from "react-icons/si";
import { skillDetails } from "@/lib/project-design";
import { TechBadge } from "@/components/ui/project-components";

// Curated icons for the Orbit visualizer - clean, flat, matching the project styling without custom glowing outlines
const orbitIconConfigs = [
  { Icon: FaReact, color: "#61DAFB", name: "React" },
  { Icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
  { Icon: FaNodeJs, color: "#339933", name: "Node.js" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { Icon: FaJava, color: "#F89820", name: "Java" },
  { Icon: FaDocker, color: "#2496ED", name: "Docker" },
  { Icon: SiKubernetes, color: "#326CE5", name: "Kubernetes" },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: SiJenkins, color: "#D24939", name: "Jenkins" },
  { Icon: SiPostman, color: "#FF6C37", name: "Postman" },
  { Icon: FaGithub, color: "#FFFFFF", name: "GitHub" },
];

const categories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    title: "Tools & Languages",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Java",
      "C",
    ],
  },
];

export default function SkillsSection() {
  const orbitCount = 3;
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const mobile = w < 1024;
      setIsMobile(mobile);
      
      if (mobile) {
        // Calculate container width: screen width minus padding (approx 48px)
        const containerW = w - 48;
        const baseDiagWidth = 400; // 25rem (25 * 16px)
        if (containerW < baseDiagWidth) {
          setScale(containerW / baseDiagWidth);
        } else {
          setScale(1);
        }
      } else {
        // Desktop container width is roughly 5/12 of content area
        const contentW = Math.min(w, 1440) - 128; // max-w-90rem is 1440px, padding is px-16 (128px)
        const containerW = contentW * (5 / 12);
        const baseDiagWidth = 500; // Expected desktop width of the visible part of orbit
        if (containerW < baseDiagWidth) {
          setScale(containerW / baseDiagWidth);
        } else {
          setScale(1);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const orbitGap = isMobile ? 3.5 : 5.5; // rem spacing between orbits
  const baseSize = isMobile ? 10 : 16;   // rem base size
  const iconsPerOrbit = Math.ceil(orbitIconConfigs.length / orbitCount);

  return (
    <section id="skills" className="w-full bg-black text-white px-6 md:px-12 lg:px-16 py-24 md:py-32 relative overflow-hidden flex items-center">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.6] mix-blend-overlay" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid gap-12 lg:grid-cols-12 items-center">
        
        {/* Left Side: Header & Skills Grid (Spans 7 columns) */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Headline & Description */}
          <div className="space-y-4">
            <span className="text-[10px] md:text-xs font-mono tracking-[0.35em] text-[#E1E0CC]/60 uppercase block mb-3">
              Technical Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-[1.05] text-white">
              Engineering <span className="font-semibold text-[#E1E0CC]">Toolkit.</span>
            </h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#E1E0CC]/40 to-transparent mt-5 mb-6" />
            <p className="text-white/40 text-xs md:text-sm font-sans max-w-xl leading-relaxed">
              A curated stack of technologies, platforms, and tools used to design, build, and deploy scalable software systems.
            </p>
          </div>

          {/* 2x2 Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-neutral-900/20 backdrop-blur-sm flex flex-col justify-start"
              >
                <h3 className="text-lg font-semibold tracking-tight text-[#E1E0CC] mb-5 flex items-center justify-between">
                  {cat.title}
                  <span className="text-[10px] font-mono text-white/20">0{idx + 1}</span>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <TechBadge key={skill} tech={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Right Side: Orbit Visualization (Spans 5 columns) - scaled dynamically */}
        <div className="lg:col-span-5 relative w-full h-[22rem] lg:h-[42rem] flex items-center justify-center lg:justify-end overflow-hidden mt-8 lg:mt-0">
          <div 
            className={`absolute top-1/2 flex items-center justify-center transition-all duration-300 orbit-container-group ${
              isMobile 
                ? "left-1/2 w-[30rem] h-[30rem]" 
                : "right-0 w-[55rem] h-[55rem]"
             }`}
            style={{
              transform: isMobile 
                ? `translate(-50%, -50%) scale(${scale})` 
                : `translate(43%, -50%) scale(${scale})`
            }}
          >
            
            {/* Radial gradient background behind orbits */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,224,204,0.02)_0%,transparent_70%)] pointer-events-none rounded-full" />

            {/* Center Circle */}
            <div className={`${isMobile ? "w-24 h-24" : "w-32 h-32"} rounded-full bg-[#121212] border border-[#E1E0CC]/20 shadow-lg flex items-center justify-center z-20`}>
              <span className={`${isMobile ? "text-2xl" : "text-4xl"} font-mono font-bold tracking-tighter text-[#E1E0CC]`}>
                TS
              </span>
            </div>

            {/* Generated Orbits - clean dotted circles */}
            {[...Array(orbitCount)].map((_, orbitIdx) => {
              const size = `${baseSize + 2 * orbitGap * orbitIdx}rem`;
              const angleStep = (2 * Math.PI) / iconsPerOrbit;

              return (
                <div
                  key={orbitIdx}
                  className="absolute top-1/2 left-1/2 rounded-full border border-dotted border-[#E1E0CC]/15 pointer-events-none orbit-ring-anim"
                  style={{
                    width: size,
                    height: size,
                    transform: "translate(-50%, -50%)",
                    animation: `orbit-spin ${20 + orbitIdx * 10}s linear infinite`,
                  }}
                >
                  {orbitIconConfigs
                    .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                    .map((cfg, iconIdx) => {
                      const angle = iconIdx * angleStep;
                      const x = (50 + 50 * Math.cos(angle)).toFixed(4);
                      const y = (50 + 50 * Math.sin(angle)).toFixed(4);

                      const techToProjectMap: Record<string, string> = {
                        "Docker": "/projects/loadlab-deploybot",
                        "Kubernetes": "/projects/loadlab-deploybot",
                        "Jenkins": "/projects/loadlab-deploybot",
                        "GitHub Actions": "/projects/loadlab-deploybot",
                        "React": "/projects/codeweave",
                        "Next.js": "/projects/codeweave",
                        "TypeScript": "/projects/codeweave",
                        "MySQL": "/projects/dbms-self-healing",
                        "MongoDB": "/projects/codeweave",
                        "Express.js": "/projects/codeweave",
                        "Node.js": "/projects/codeweave",
                        "Java": "/projects/exposur",
                        "REST APIs": "/projects/exposur"
                      };

                      const projectUrl = techToProjectMap[cfg.name];
                      const iconEl = (
                        <div
                          title={cfg.name}
                          className="bg-neutral-900 border border-white/10 rounded-full p-2 shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-125 hover:border-white/30 cursor-pointer orbit-icon-anim"
                          style={{
                            animation: `counter-spin ${20 + orbitIdx * 10}s linear infinite`,
                          }}
                        >
                          <cfg.Icon className={`${isMobile ? "w-5 h-5" : "w-6 h-6"}`} style={{ color: cfg.color }} />
                        </div>
                      );

                      return (
                        <div
                          key={iconIdx}
                          className="absolute pointer-events-auto"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          {projectUrl ? (
                            <Link href={projectUrl}>
                              {iconEl}
                            </Link>
                          ) : (
                            iconEl
                          )}
                        </div>
                      );
                    })}
                </div>
              );
            })}

          </div>
        </div>

      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes orbit-spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes counter-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        @media (hover: hover) {
          .orbit-container-group:hover .orbit-ring-anim {
            animation-play-state: paused;
          }
          .orbit-container-group:hover .orbit-icon-anim {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}
