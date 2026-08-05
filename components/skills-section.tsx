"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { skillDetails } from "@/lib/project-design";
import { TechBadge } from "@/components/ui/project-components";

// Curated official SVG brand logos structured by 3 orbit rings with official brand colors
const orbitRings = [
  // Ring 1 (Inner - 4 icons)
  [
    { logo: "/logos/react.svg", name: "React", color: "#61DAFB" },
    { logo: "/logos/nextdotjs.svg", name: "Next.js", color: "#FFFFFF" },
    { logo: "/logos/typescript.svg", name: "TypeScript", color: "#3178C6" },
    { logo: "/logos/nodedotjs.svg", name: "Node.js", color: "#339933" },
  ],
  // Ring 2 (Middle - 5 icons)
  [
    { logo: "/logos/docker.svg", name: "Docker", color: "#2496ED" },
    { logo: "/logos/kubernetes.svg", name: "Kubernetes", color: "#326CE5" },
    { logo: "/logos/mongodb.svg", name: "MongoDB", color: "#47A248" },
    { logo: "/logos/postgresql.svg", name: "PostgreSQL", color: "#4169E1" },
    { logo: "/logos/python.svg", name: "Python", color: "#3776AB" },
  ],
  // Ring 3 (Outer - 6 icons)
  [
    { logo: "/logos/tailwindcss.svg", name: "Tailwind CSS", color: "#06B6D4" },
    { logo: "/logos/git.svg", name: "Git", color: "#F05032" },
    { logo: "/logos/github.svg", name: "GitHub", color: "#FFFFFF" },
    { logo: "/logos/jenkins.svg", name: "Jenkins", color: "#D24939" },
    { logo: "/logos/postman.svg", name: "Postman", color: "#FF6C37" },
    { logo: "/logos/redis.svg", name: "Redis", color: "#DC382D" },
  ],
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
        const baseDiagWidth = 464; // Orbit 2 diameter + icon width for zero mobile clipping
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

  return (
    <section id="skills" className="w-full bg-black text-white px-6 md:px-16 py-24 relative overflow-hidden flex items-center">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.6] mix-blend-overlay" />

      <div className="max-w-[90rem] mx-auto w-full relative z-10 grid gap-12 lg:grid-cols-12 items-center">
        
        {/* Left Side: Header & Skills Grid (Spans 7 columns) */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Headline & Description */}
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#E1E0CC]/95 font-medium block">
              Technical Expertise
            </span>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tighter leading-none text-white">
              Engineering <span className="font-medium text-[#E1E0CC]">Toolkit.</span>
            </h2>
            <div className="h-[1px] w-28 bg-gradient-to-r from-[#E1E0CC]/60 to-transparent mt-3" />
            <p className="text-white/85 text-sm sm:text-base leading-relaxed font-sans max-w-2xl pt-2">
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

            {/* Center Circle with Personal Brand Logo */}
            <div className={`${isMobile ? "w-20 h-20" : "w-24 h-24"} rounded-full bg-black border border-white/20 shadow-2xl flex items-center justify-center z-20 relative overflow-hidden group/center hover:border-white/50 transition-all duration-300`}>
              <img
                src="/MY_LOGO.webp"
                alt="Tanmay Singh logo"
                className="w-full h-full object-cover rounded-full scale-[1.2] relative z-10 transition-transform duration-300 group-hover/center:scale-125"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Generated Orbits - clean dotted circles */}
            {orbitRings.map((ring, orbitIdx) => {
              const size = `${baseSize + 2 * orbitGap * orbitIdx}rem`;
              const angleStep = (2 * Math.PI) / ring.length;

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
                  {ring.map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = (50 + 50 * Math.cos(angle)).toFixed(4);
                    const y = (50 + 50 * Math.sin(angle)).toFixed(4);

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
                        <div
                          title={cfg.name}
                          className="bg-neutral-900/90 border border-white/15 rounded-full p-2.5 shadow-md flex items-center justify-center transition-all duration-300 hover:scale-115 hover:border-white/40 cursor-default orbit-icon-anim"
                          style={{
                            animation: `counter-spin ${20 + orbitIdx * 10}s linear infinite`,
                          }}
                        >
                          <div
                            className={`${isMobile ? "w-5 h-5" : "w-6 h-6"} flex-shrink-0 relative z-10`}
                            style={{
                              backgroundColor: cfg.color,
                              maskImage: `url(${cfg.logo})`,
                              WebkitMaskImage: `url(${cfg.logo})`,
                              maskSize: "contain",
                              WebkitMaskSize: "contain",
                              maskRepeat: "no-repeat",
                              WebkitMaskRepeat: "no-repeat",
                              maskPosition: "center",
                              WebkitMaskPosition: "center",
                            }}
                            role="img"
                            aria-label={`${cfg.name} logo`}
                          />
                        </div>
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
