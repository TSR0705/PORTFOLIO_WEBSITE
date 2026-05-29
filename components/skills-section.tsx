"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaGithub,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiKubernetes,
  SiJenkins,
  SiRabbitmq,
  SiGrafana,
  SiPostman,
  SiHuggingface
} from "react-icons/si";

// Curated icons with custom colors for glow matching their brand identity
const orbitIconConfigs = [
  { Icon: FaReact, color: "#61DAFB", name: "React" },
  { Icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
  { Icon: FaNodeJs, color: "#339933", name: "Node.js" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { Icon: FaJava, color: "#F89820", name: "Java" },
  { Icon: FaPython, color: "#3776AB", name: "Python" },
  { Icon: FaDocker, color: "#2496ED", name: "Docker" },
  { Icon: SiKubernetes, color: "#326CE5", name: "Kubernetes" },
  { Icon: FaAws, color: "#FF9900", name: "AWS" },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: SiJenkins, color: "#D24939", name: "Jenkins" },
  { Icon: SiRabbitmq, color: "#FF6600", name: "RabbitMQ" },
  { Icon: SiGrafana, color: "#F46800", name: "Grafana" },
  { Icon: SiPostman, color: "#FF6C37", name: "Postman" },
  { Icon: SiHuggingface, color: "#FFD21E", name: "Hugging Face" },
  { Icon: FaGithub, color: "#FFFFFF", name: "GitHub" },
];

const categories = [
  {
    title: "Frontend",
    badgeStyle: "text-sky-400 bg-sky-400/5 border-sky-400/10 hover:border-sky-400/30 hover:bg-sky-400/10",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    badgeStyle: "text-emerald-400 bg-emerald-400/5 border-emerald-400/10 hover:border-emerald-400/30 hover:bg-emerald-400/10",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    title: "DevOps & Cloud",
    badgeStyle: "text-amber-400 bg-amber-400/5 border-amber-400/10 hover:border-amber-400/30 hover:bg-amber-400/10",
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "AWS EC2",
      "AWS IAM",
      "RabbitMQ",
      "Grafana",
    ],
  },
  {
    title: "Tools & Languages",
    badgeStyle: "text-violet-400 bg-violet-400/5 border-violet-400/10 hover:border-violet-400/30 hover:bg-violet-400/10",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Python",
      "Java",
      "C++",
      "C",
      "Hugging Face",
    ],
  },
];

export default function SkillsSection() {
  const orbitCount = 3;
  const orbitGap = 6.5; // rem spacing between orbits
  const iconsPerOrbit = Math.ceil(orbitIconConfigs.length / orbitCount);

  return (
    <section id="skills" className="w-full bg-black text-white px-6 md:px-16 py-24 relative overflow-hidden flex items-center">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.6] mix-blend-overlay" />

      {/* Cinematic theme lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto w-full relative z-10 grid gap-12 lg:grid-cols-12 items-center">
        
        {/* Left Side: Header & Skills Grid (Spans 7 columns) */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Headline & Description */}
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#E1E0CC]/80 block">
              Technical Expertise
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none">
              Engineering Toolkit.
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-amber-400 to-[#E1E0CC]/10 rounded mt-2" />
            <p className="text-white/60 text-sm sm:text-base leading-relaxed font-sans max-w-2xl pt-2">
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
                className="p-6 rounded-2xl border border-white/10 bg-neutral-950/40 backdrop-blur-md hover:border-[#E1E0CC]/20 hover:bg-neutral-900/30 transition-all duration-300 flex flex-col justify-start min-h-[14rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
              >
                <h3 className="text-lg font-semibold tracking-tight text-[#E1E0CC] mb-4 flex items-center justify-between">
                  {cat.title}
                  <span className="text-[10px] font-mono text-white/20">0{idx + 1}</span>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-sans transition-all duration-300 cursor-default ${cat.badgeStyle}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Right Side: Orbit Visualization (Spans 5 columns) */}
        <div className="lg:col-span-5 relative w-full h-[30rem] lg:h-[42rem] flex items-center justify-end overflow-hidden">
          <div 
            className="absolute right-0 top-1/2 w-[50rem] h-[50rem] flex items-center justify-center"
            style={{ transform: "translate(50%, -50%)" }}
          >
            
            {/* Center Circle - Personal Engineering Identity Monogram */}
            <div className="w-24 h-24 rounded-full bg-[#080808] border border-[#E1E0CC]/30 shadow-[0_0_50px_rgba(225,224,204,0.25)] flex items-center justify-center z-20 relative animate-pulse-slow">
              <span className="text-2xl font-mono font-bold tracking-tighter text-[#E1E0CC] drop-shadow-[0_0_10px_rgba(225,224,204,0.5)]">
                TS
              </span>
            </div>

            {/* Generated Orbits */}
            {[...Array(orbitCount)].map((_, orbitIdx) => {
              const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // spacing to fill the area
              const angleStep = (2 * Math.PI) / iconsPerOrbit;

              return (
                <div
                  key={orbitIdx}
                  className="absolute rounded-full border border-dotted border-white/10 pointer-events-none"
                  style={{
                    width: size,
                    height: size,
                    animation: `orbit-spin ${20 + orbitIdx * 10}s linear infinite`,
                  }}
                >
                  {orbitIconConfigs
                    .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                    .map((cfg, iconIdx) => {
                      const angle = iconIdx * angleStep;
                      const x = (50 + 50 * Math.cos(angle)).toFixed(4);
                      const y = (50 + 50 * Math.sin(angle)).toFixed(4);

                      return (
                        <div
                          key={iconIdx}
                          className="absolute bg-neutral-950 border rounded-full p-2.5 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 pointer-events-auto"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: "translate(-50%, -50%)",
                            borderColor: `${cfg.color}33`,
                            boxShadow: `0 0 20px ${cfg.color}22`,
                          }}
                          title={cfg.name}
                        >
                          <cfg.Icon className="w-6 h-6" style={{ color: cfg.color }} />
                        </div>
                      );
                    })}
                </div>
              );
            })}

          </div>
        </div>

      </div>

      {/* Animation keyframes & custom pulses */}
      <style>{`
        @keyframes orbit-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: translate(50%, -50%) scale(1);
          }
          50% {
            opacity: .85;
            transform: translate(50%, -50%) scale(0.98);
          }
        }
      `}</style>
    </section>
  );
}
