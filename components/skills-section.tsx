"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaGithub,
  FaJava,
  FaPython,
  FaChartLine,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiKubernetes,
  SiJenkins,
  SiRabbitmq,
  SiGrafana,
  SiPostman,
  SiHuggingface,
  SiExpress,
  SiSwagger,
  SiMysql,
  SiGithubactions,
  SiGit,
  SiCplusplus,
  SiC,
  SiTypescript,
  SiKotlin,
  SiFastapi,
  SiBun,
  SiApachemaven,
  SiSolidity,
  SiStripe,
  SiClerk,
  SiVite,
  SiFramer,
  SiReactrouter,
  SiRedis,
  SiSocketdotio,
  SiGooglegemini,
  SiSanity,
  SiGooglechrome,
  SiAndroid,
  SiMaterialdesign,
  SiRailway,
  SiVercel,
  SiLucide,
  SiSqlalchemy,
  SiPydantic,
  SiShadcnui
} from "react-icons/si";

// Curated icons for the Orbit visualizer - clean, flat, matching the project styling without custom glowing outlines
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

// Detailed brand background, text color, and icon configuration for solid badges
export const skillDetails: Record<string, { icon: any; bg: string; text: string; border?: string }> = {
  "HTML": { icon: SiHtml5, bg: "bg-[#E34F26]", text: "text-white" },
  "CSS": { icon: SiCss, bg: "bg-[#1572B6]", text: "text-white" },
  "JavaScript": { icon: SiJavascript, bg: "bg-[#F7DF1E]", text: "text-black" },
  "React": { icon: FaReact, bg: "bg-[#61DAFB]", text: "text-black" },
  "React.js": { icon: FaReact, bg: "bg-[#61DAFB]", text: "text-black" },
  "Next.js": { icon: SiNextdotjs, bg: "bg-[#000000]", text: "text-white", border: "border-white/20" },
  "Next.js 14": { icon: SiNextdotjs, bg: "bg-[#000000]", text: "text-white", border: "border-white/20" },
  "Next.js 15": { icon: SiNextdotjs, bg: "bg-[#000000]", text: "text-white", border: "border-white/20" },
  "Tailwind CSS": { icon: SiTailwindcss, bg: "bg-[#06B6D4]", text: "text-white" },
  
  "Node.js": { icon: FaNodeJs, bg: "bg-[#339933]", text: "text-white" },
  "Express.js": { icon: SiExpress, bg: "bg-[#000000]", text: "text-white", border: "border-white/25" },
  "Express": { icon: SiExpress, bg: "bg-[#000000]", text: "text-white", border: "border-white/25" },
  "REST APIs": { icon: SiSwagger, bg: "bg-[#0052CC]", text: "text-white" },
  "MySQL": { icon: SiMysql, bg: "bg-[#00758F]", text: "text-white" },
  "MySQL 8.0": { icon: SiMysql, bg: "bg-[#00758F]", text: "text-white" },
  "MongoDB": { icon: SiMongodb, bg: "bg-[#47A248]", text: "text-white" },
  "MongoDB Atlas": { icon: SiMongodb, bg: "bg-[#47A248]", text: "text-white" },
  
  "Docker": { icon: FaDocker, bg: "bg-[#2496ED]", text: "text-white" },
  "Containerized deployment": { icon: FaDocker, bg: "bg-[#2496ED]", text: "text-white" },
  "Kubernetes": { icon: SiKubernetes, bg: "bg-[#326CE5]", text: "text-white" },
  "@kubernetes/client-node": { icon: SiKubernetes, bg: "bg-[#326CE5]", text: "text-white" },
  "Jenkins": { icon: SiJenkins, bg: "bg-[#D24939]", text: "text-white" },
  "GitHub Actions": { icon: SiGithubactions, bg: "bg-[#000000]", text: "text-white", border: "border-white/20" },
  "AWS EC2": { icon: FaAws, bg: "bg-[#FF9900]", text: "text-white" },
  "AWS IAM": { icon: FaAws, bg: "bg-[#232F3E]", text: "text-white" },
  "RabbitMQ": { icon: SiRabbitmq, bg: "bg-[#FF6600]", text: "text-white" },
  "Grafana": { icon: SiGrafana, bg: "bg-[#F46800]", text: "text-white" },
  
  "Git": { icon: SiGit, bg: "bg-[#000000]", text: "text-white", border: "border-white/20" },
  "GitHub": { icon: FaGithub, bg: "bg-[#181717]", text: "text-white", border: "border-white/20" },
  "Postman": { icon: SiPostman, bg: "bg-[#FF6C37]", text: "text-white" },
  "Python": { icon: FaPython, bg: "bg-[#3776AB]", text: "text-white" },
  "Python 3.11+": { icon: FaPython, bg: "bg-[#3776AB]", text: "text-white" },
  "Java": { icon: FaJava, bg: "bg-[#B07219]", text: "text-white" },
  "JavaFX": { icon: FaJava, bg: "bg-[#B07219]", text: "text-white" },
  "C++": { icon: SiCplusplus, bg: "bg-[#00599C]", text: "text-white" },
  "C": { icon: SiC, bg: "bg-[#00599C]", text: "text-white" },
  "Hugging Face": { icon: SiHuggingface, bg: "bg-[#FFD21E]", text: "text-black" },
  "Sentence Transformers": { icon: SiHuggingface, bg: "bg-[#FFD21E]", text: "text-black" },

  // Project Stack Mappings
  "TypeScript": { icon: SiTypescript, bg: "bg-[#3178C6]", text: "text-white" },
  "Bun": { icon: SiBun, bg: "bg-[#FBF0DF]", text: "text-black", border: "border-[#E8D4BA]" },
  "Clerk": { icon: SiClerk, bg: "bg-[#6C47FF]", text: "text-white" },
  "Stripe": { icon: SiStripe, bg: "bg-[#635BFF]", text: "text-white" },
  "Solidity": { icon: SiSolidity, bg: "bg-[#363636]", text: "text-white" },
  "FastAPI": { icon: SiFastapi, bg: "bg-[#009688]", text: "text-white" },
  "Maven": { icon: SiApachemaven, bg: "bg-[#C71A36]", text: "text-white" },
  "Kotlin": { icon: SiKotlin, bg: "bg-[#7F52FF]", text: "text-white" },
  "Vite": { icon: SiVite, bg: "bg-[#646CFF]", text: "text-white" },
  "Framer Motion": { icon: SiFramer, bg: "bg-[#0055FF]", text: "text-white" },
  "React Router": { icon: SiReactrouter, bg: "bg-[#CA4245]", text: "text-white" },
  "Redis": { icon: SiRedis, bg: "bg-[#DC382D]", text: "text-white" },
  "Socket.io": { icon: SiSocketdotio, bg: "bg-[#010101]", text: "text-white", border: "border-white/20" },
  "Gemini API": { icon: SiGooglegemini, bg: "bg-[#8E75C8]", text: "text-white" },
  "Sanity CMS": { icon: SiSanity, bg: "bg-[#F03E2F]", text: "text-white" },
  "Chrome Extension Manifest V3": { icon: SiGooglechrome, bg: "bg-[#4285F4]", text: "text-white" },
  "Jetpack Compose": { icon: SiAndroid, bg: "bg-[#3DDC84]", text: "text-black" },
  "Material 3": { icon: SiMaterialdesign, bg: "bg-[#757575]", text: "text-white" },
  "Railway": { icon: SiRailway, bg: "bg-[#131313]", text: "text-white", border: "border-white/20" },
  "Vercel": { icon: SiVercel, bg: "bg-[#000000]", text: "text-white", border: "border-white/20" },
  "Lucide Icons": { icon: SiLucide, bg: "bg-[#F97316]", text: "text-white" },
  "SQLAlchemy": { icon: SiSqlalchemy, bg: "bg-[#E2E8F0]", text: "text-black" },
  "Pydantic": { icon: SiPydantic, bg: "bg-[#E92063]", text: "text-white" },
  "shadcn/ui": { icon: SiShadcnui, bg: "bg-[#000000]", text: "text-white", border: "border-white/20" },
  "Recharts": { icon: FaChartLine, bg: "bg-[#2563EB]", text: "text-white" },
  "Chart.js / Recharts": { icon: FaChartLine, bg: "bg-[#2563EB]", text: "text-white" }
};

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
      "AWS EC2",
      "AWS IAM",
      "RabbitMQ",
      "Grafana",
    ],
  },
  {
    title: "Tools & Languages",
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
        const baseDiagWidth = 352; // 22rem (22 * 16px)
        if (containerW < baseDiagWidth) {
          setScale(containerW / baseDiagWidth);
        } else {
          setScale(1);
        }
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const orbitGap = isMobile ? 3.5 : 6.5; // rem spacing between orbits
  const baseSize = isMobile ? 8 : 14;   // rem base size
  const iconsPerOrbit = Math.ceil(orbitIconConfigs.length / orbitCount);

  return (
    <section id="skills" className="w-full bg-black text-white px-6 md:px-16 py-24 relative overflow-hidden flex items-center">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.6] mix-blend-overlay" />

      <div className="max-w-[90rem] mx-auto w-full relative z-10 grid gap-12 lg:grid-cols-12 items-center">
        
        {/* Left Side: Header & Skills Grid (Spans 7 columns) */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Headline & Description */}
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#E1E0CC]/80 block">
              Technical Expertise
            </span>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tighter leading-none text-white">
              Engineering <span className="font-medium text-[#E1E0CC]">Toolkit.</span>
            </h2>
            <div className="h-[1px] w-28 bg-gradient-to-r from-[#E1E0CC]/60 to-transparent mt-3" />
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
                className="p-6 rounded-2xl border border-white/10 bg-neutral-900/20 backdrop-blur-sm flex flex-col justify-start min-h-[14rem]"
              >
                <h3 className="text-lg font-semibold tracking-tight text-[#E1E0CC] mb-5 flex items-center justify-between">
                  {cat.title}
                  <span className="text-[10px] font-mono text-white/20">0{idx + 1}</span>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => {
                    const details = skillDetails[skill] || { icon: FaReact, bg: "bg-neutral-800", text: "text-white" };
                    const IconComp = details.icon;
                    return (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg ${details.bg} ${details.text} ${details.border || "border border-transparent"} transition-all duration-200 cursor-default shadow-md`}
                      >
                        <IconComp className="w-4 h-4 flex-shrink-0" />
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Right Side: Orbit Visualization (Spans 5 columns) - scaled dynamically */}
        <div className="lg:col-span-5 relative w-full h-[22rem] lg:h-[42rem] flex items-center justify-center lg:justify-end overflow-hidden mt-8 lg:mt-0">
          <div 
            className={`absolute top-1/2 flex items-center justify-center transition-all duration-300 ${
              isMobile 
                ? "left-1/2 w-[22rem] h-[22rem]" 
                : "right-0 w-[55rem] h-[55rem]"
            }`}
            style={{
              transform: isMobile 
                ? `translate(-50%, -50%) scale(${scale})` 
                : "translate(43%, -50%)"
            }}
          >
            
            {/* Center Circle */}
            <div className={`${isMobile ? "w-16 h-16" : "w-24 h-24"} rounded-full bg-[#121212] border border-[#E1E0CC]/20 shadow-lg flex items-center justify-center z-20`}>
              <span className={`${isMobile ? "text-lg" : "text-2xl"} font-mono font-bold tracking-tighter text-[#E1E0CC]`}>
                TS
              </span>
            </div>

            {/* Generated Orbits - clean dotted circles */}
            {[...Array(orbitCount)].map((_, orbitIdx) => {
              const size = `${baseSize + orbitGap * (orbitIdx + 1)}rem`;
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
                          className="absolute bg-neutral-900 border border-white/10 rounded-full p-2 shadow-md flex items-center justify-center transition-colors pointer-events-auto"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <cfg.Icon className={`${isMobile ? "w-4 h-4" : "w-6 h-6"}`} style={{ color: cfg.color }} />
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
