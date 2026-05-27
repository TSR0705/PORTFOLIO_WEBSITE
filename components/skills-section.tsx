"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/portfolio-data";

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen w-full bg-black text-white px-6 py-20 md:py-32 relative">
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
            ENGINEERING STACK
          </motion.h2>
          <div className="h-[1px] w-full bg-white/10 mt-6 md:mt-8" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-white/10 pt-6 flex flex-col gap-6"
            >
              {/* Category Header */}
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white/90">
                  {category.title}
                </h3>
                <span className="font-mono text-3xl font-bold tracking-tighter" style={{ color: "#E1E0CC" }}>
                  0{idx + 1}
                </span>
              </div>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="border border-white/10 rounded-full px-4 py-2 text-xs md:text-sm font-medium font-sans text-white/70 hover:text-black hover:bg-[#E1E0CC] hover:border-[#E1E0CC] transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
