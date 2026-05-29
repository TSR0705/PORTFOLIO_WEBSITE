"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaReact,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaGithub,
  FaJava,
  FaPython,
  FaLinux
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiKubernetes,
  SiJenkins,
  SiExpress
} from "react-icons/si";

const fallbackUrls = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
];

const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB", name: "React" },
  { Icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
  { Icon: FaNodeJs, color: "#339933", name: "Node.js" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { Icon: FaJava, color: "#F89820", name: "Java" },
  { Icon: FaPython, color: "#3776AB", name: "Python" },
  { Icon: FaDocker, color: "#2496ED", name: "Docker" },
  { Icon: SiKubernetes, color: "#326CE5", name: "Kubernetes" },
  { Icon: FaAws, color: "#FF9900", name: "AWS" },
  { Icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
  { Icon: SiRedis, color: "#DC382D", name: "Redis" },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: FaGithub, color: "#FFFFFF", name: "GitHub" },
  { Icon: SiJenkins, color: "#D24939", name: "Jenkins" },
  { Icon: FaLinux, color: "#FCC624", name: "Linux" },
  { Icon: SiExpress, color: "#FFFFFF", name: "Express" },
  { Icon: null, img: fallbackUrls[0], name: "React fallback" },
];

export default function FeatureSection() {
  const orbitCount = 3;
  const orbitGap = 7; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  const handleProjectsScroll = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#projects";
    }
  };

  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto my-20 px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between min-h-[35rem] border border-white/10 bg-black overflow-hidden rounded-[2.5rem] shadow-[inset_0_2px_4px_rgba(255,255,255,0.03)]">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay rounded-[2.5rem]" />
      
      {/* Cinematic theme lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#E1E0CC]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Left side: Heading and Text */}
      <div className="w-full md:w-1/2 z-10 py-10 md:py-0 flex flex-col justify-center space-y-6">
        <div>
          <span className="inline-flex items-center rounded-full border border-[#E1E0CC]/20 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[#E1E0CC] mb-4">
            System Infrastructure
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Build your ideas with scale.
          </h2>
          <p className="text-white/60 mt-4 max-w-lg text-sm sm:text-base leading-relaxed font-sans">
            Leveraging containerized orchestrations, highly resilient backend workflows, and optimized cloud architectures to build production-grade automation systems.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={handleProjectsScroll}
            className="bg-white text-black hover:bg-white/90 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-[0.15em] transition-transform active:scale-95 cursor-pointer shadow-lg"
          >
            Explore Projects
          </Button>
          <Button
            variant="outline"
            onClick={handleContactScroll}
            className="border border-white/15 hover:bg-white/10 hover:border-white/30 text-white px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-[0.15em] transition-transform active:scale-95 cursor-pointer"
          >
            Let's Connect
          </Button>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/2 */}
      <div className="relative w-full md:w-1/2 h-[20rem] md:h-full flex items-center justify-center md:justify-start overflow-hidden">
        <div className="relative w-[38rem] h-[38rem] translate-y-[20%] md:translate-y-0 md:translate-x-[40%] flex items-center justify-center">
          {/* Center Circle */}
          <div className="w-20 h-20 rounded-full bg-neutral-900 border border-[#E1E0CC]/20 shadow-2xl flex items-center justify-center z-20">
            <FaReact className="w-10 h-10 text-[#61DAFB]" />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${8 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border border-dotted border-white/20"
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${15 + orbitIdx * 8}s linear infinite`,
                }}
              >
                {iconConfigs
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = (50 + 50 * Math.cos(angle)).toFixed(4);
                    const y = (50 + 50 * Math.sin(angle)).toFixed(4);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-neutral-900 border border-white/10 hover:border-amber-400/50 rounded-full p-2 shadow-lg transition-transform hover:scale-110"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        title={cfg.name}
                      >
                        {cfg.Icon ? (
                          <cfg.Icon className="w-6 h-6" style={{ color: cfg.color }} />
                        ) : (
                          <img
                            src={cfg.img}
                            alt={cfg.name}
                            className="w-6 h-6 object-contain"
                          />
                        )}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
