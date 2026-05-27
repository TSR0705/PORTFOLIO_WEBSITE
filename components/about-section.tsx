"use client";

import { motion } from "framer-motion";
import { academicDetails } from "@/lib/portfolio-data";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen w-full bg-black text-white px-6 py-20 md:py-32 flex items-center relative">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-8 md:gap-12 relative z-10">
        
        {/* Section Heading */}
        <div className="col-span-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-medium leading-[0.85] tracking-[-0.07em] text-[10vw] md:text-[6vw]" 
            style={{ color: "#E1E0CC" }}
          >
            ACADEMICS & PROFILE
          </motion.h2>
          <div className="h-[1px] w-full bg-white/10 mt-6 md:mt-8" />
        </div>

        {/* Left Column: Huge typographic metrics */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-10 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-[10px] tracking-widest uppercase font-mono text-white/50 mb-1">CGPA</div>
            <div className="text-[12vw] md:text-[6vw] font-bold leading-none tracking-tighter" style={{ color: "#E1E0CC" }}>
              {academicDetails.cgpa}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-[10px] tracking-widest uppercase font-mono text-white/50 mb-1">B.Tech Batch</div>
            <div className="text-[10vw] md:text-[5vw] font-bold leading-none tracking-tighter" style={{ color: "#E1E0CC" }}>
              {academicDetails.batch}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-[10px] tracking-widest uppercase font-mono text-white/50 mb-1">Specialization</div>
            <div className="text-xl md:text-2xl font-medium tracking-tight text-white/90">
              {academicDetails.specialization}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Narrative Biography & Details */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-white leading-snug">
              Pursuing Computer Science & Engineering at <span style={{ color: "#E1E0CC" }}>{academicDetails.college}</span>.
            </h3>
            
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans max-w-xl">
              I am highly project-driven with a strong builder mindset and a passion for engineering rigor. I specialize in cloud architectures, scalable backend products, and automated system frameworks. I constantly push boundaries by experimenting with agentic AI workflows and participate actively in hackathons.
            </p>

            <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans max-w-xl">
              Currently operating on a strict phase-by-phase building methodology to enforce code quality, architectural durability, and continuous validation in production systems.
            </p>
          </motion.div>

          {/* Academic Stats Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-md max-w-xl"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] tracking-widest uppercase font-mono text-white/40 block mb-1">Degree</span>
                <span className="text-sm md:text-base font-medium">{academicDetails.degree}</span>
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase font-mono text-white/40 block mb-1">Campus</span>
                <span className="text-sm md:text-base font-medium">Kattankulathur (KTR)</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
