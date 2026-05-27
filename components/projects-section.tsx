"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/portfolio-data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen w-full bg-black text-white px-6 py-20 md:py-32 relative">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-medium leading-[0.85] tracking-[-0.07em] text-[10vw] md:text-[6vw]" 
            style={{ color: "#E1E0CC" }}
          >
            SELECTED WORKS
          </motion.h2>
          <div className="h-[1px] w-full bg-white/10 mt-6 md:mt-8" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group border border-white/10 rounded-2xl p-6 bg-white/[0.02] backdrop-blur-md flex flex-col justify-between min-h-[300px] transition-colors hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div>
                {/* Header: Category & Status Badge */}
                <div className="flex justify-between items-start gap-4 mb-6">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-white/40 block">
                    {project.category.replace("-", " ")}
                  </span>
                  
                  <span 
                    className="text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border"
                    style={{ 
                      color: project.status === "hackathon-winner" ? "#E1E0CC" : "rgba(255, 255, 255, 0.6)",
                      borderColor: project.status === "hackathon-winner" ? "rgba(225, 224, 204, 0.4)" : "rgba(255, 255, 255, 0.15)"
                    }}
                  >
                    {project.status.replace("-", " ")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3 text-white group-hover:text-[#E1E0CC] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
