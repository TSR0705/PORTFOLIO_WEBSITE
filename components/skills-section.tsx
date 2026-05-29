"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Cpu, Cloud, Database, BrainCircuit, Check } from "lucide-react";

const techStack = [
  { name: "React", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", category: "frontend" },
  { name: "Next.js", url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", category: "frontend" },
  { name: "Node.js", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", category: "backend" },
  { name: "TypeScript", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", category: "backend" },
  { name: "Java", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Java_programming_language_logo.svg", category: "backend" },
  { name: "Python", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", category: "backend" },
  { name: "Docker", url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg", category: "devops" },
  { name: "Kubernetes", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg", category: "devops" },
  { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", category: "devops" },
  { name: "PostgreSQL", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_class.svg", category: "database" },
  { name: "Redis", url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Logo-redis.svg", category: "database" },
  { name: "MongoDB", url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoebus_MongoDB_Logo.svg", category: "database" },
  { name: "Git", url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg", category: "devops" },
  { name: "GitHub", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", category: "devops" },
  { name: "Jenkins", url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg", category: "devops" },
  { name: "Linux", url: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg", category: "backend" },
];

const skillCategories = [
  {
    title: "Backend & Systems",
    icon: <Cpu className="w-4 h-4 text-amber-400" />,
    description: "Designing low-latency API architectures, distributed system components, and robust multithreaded workflows.",
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-4 h-4 text-cyan-400" />,
    description: "Automating CI/CD pipelines, containerizing applications, and managing cloud services with AWS, Docker, and Kubernetes.",
  },
  {
    title: "Databases & Storage",
    icon: <Database className="w-4 h-4 text-emerald-400" />,
    description: "Optimizing database schemas and scaling storage structures with relational (MySQL/PostgreSQL) and non-relational databases.",
  },
  {
    title: "AI & Automation Platforms",
    icon: <BrainCircuit className="w-4 h-4 text-purple-400" />,
    description: "Developing intelligent agentic systems, parsing high-throughput workloads, and deploying automation pipelines.",
  },
];

export default function SkillsSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  const handleProjectsScroll = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#projects";
    }
  };

  return (
    <section id="skills" className="min-h-screen w-full bg-black text-white px-6 py-20 md:py-32 relative overflow-hidden flex items-center">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

      {/* Cinematic theme lighting */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[#E1E0CC]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid gap-12 lg:grid-cols-12 items-center">
        
        {/* Left Side: Headline, Manifesto & Categories (Spans 7 columns) */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-mono tracking-[0.3em] uppercase text-[#E1E0CC]/60"
            >
              Expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-2 tracking-tight leading-tight"
            >
              Architecting production-ready software systems.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/60 mt-4 text-sm md:text-base font-sans max-w-xl"
            >
              Focused on constructing highly resilient backend layers, scalable cloud pipelines, and database workflows. Exploring the capabilities of automated systems and cloud scaling.
            </motion.p>
          </div>

          {/* Interactive Core Categories */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-sm tracking-tight text-white/95">{category.title}</h3>
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-sans">{category.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Action Trigger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
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
              Let's Connect <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
            </Button>
          </motion.div>
        </div>

        {/* Right Side: Interactive Polygonal Stack Grid (Spans 5 columns) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
          <div className="text-center">
            <span className="text-[10px] font-mono tracking-widest text-[#E1E0CC]/40 uppercase">
              {hoveredTech ? `focusing_on // ${hoveredTech.toLowerCase()}` : "hover_tech_node // info"}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-4 p-6 rounded-3xl border border-white/5 bg-white/[0.01] relative backdrop-blur-sm">
            <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.3] mix-blend-overlay rounded-3xl" />
            
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className="relative w-14 h-14 md:w-16 md:h-16 p-2 bg-neutral-900 border border-white/10 shadow-lg cursor-pointer transition-colors duration-300 hover:border-amber-400/60"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <div className="w-full h-full relative flex items-center justify-center p-1 bg-[#121212]/80 rounded-[20%] transition-colors duration-300 hover:bg-black/60">
                  <Image
                    src={tech.url}
                    alt={tech.name}
                    fill
                    className="object-contain p-2 filter brightness-90 contrast-110 hover:brightness-100 transition-all duration-300"
                    sizes="(max-width: 768px) 48px, 64px"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Interactive Label */}
          <div className="h-6 flex items-center justify-center">
            {hoveredTech ? (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-mono text-amber-300 flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Proven proficiency in {hoveredTech}
              </motion.p>
            ) : (
              <p className="text-xs font-mono text-white/30">
                Hover over a node to query verification status
              </p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
