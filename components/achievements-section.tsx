"use client";

import { motion } from "framer-motion";
import { academicDetails } from "@/lib/portfolio-data";
import { CircularTestimonialsDemo } from "@/components/ui/circular-testimonials-demo";

const participations = [
  "Adobe India Hackathon",
  "CodeNex DayZero",
  "HackPick",
  "Ossome Hacks 3.0",
  "Impact-AI-Thon",
  "DevTrail"
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="min-h-screen w-full bg-black text-white px-6 py-20 md:py-32 relative">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-light leading-[0.85] tracking-[0.18em] text-[8vw] md:text-[5vw] text-[#E1E0CC]" 
          >
            RECOGNITION
          </motion.h2>
          <div className="h-[1px] w-full bg-white/10 mt-6 md:mt-8" />
        </div>

        {/* 3D Perspective Achievements Showcase Slider */}
        <div className="w-full">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#E1E0CC]/80 mb-6 block">
            Featured Honors & Achievements
          </h3>
          <CircularTestimonialsDemo />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-12 gap-8 md:gap-12 pt-8 border-t border-white/10">
          
          {/* Left Column: Hackathons Log */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40">Hackathons Log</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {participations.map((p, idx) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-neutral-900/10 hover:bg-neutral-900/35 hover:border-white/20 transition-all duration-300 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E1E0CC] flex-shrink-0" />
                  <span className="text-sm font-sans text-white/80">{p}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Foundation */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-6 lg:pl-12 lg:border-l lg:border-white/10">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40">Academic Foundation</h3>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl border border-white/5 bg-[#E1E0CC]/5 relative overflow-hidden"
            >
              {/* Radial glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E1E0CC]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <div>
                  <h4 className="text-lg md:text-xl font-medium text-white">{academicDetails.name}</h4>
                  <p className="text-[#E1E0CC] text-xs font-mono mt-0.5">{academicDetails.degree} &bull; {academicDetails.specialization}</p>
                </div>
                
                <div className="h-[1px] w-full bg-white/15" />
                
                <div className="grid grid-cols-2 gap-4 text-sm font-sans">
                  <div>
                    <span className="text-white/40 text-xs block font-mono uppercase tracking-wider">Institution</span>
                    <span className="text-white/80 font-medium">{academicDetails.college}</span>
                  </div>
                  <div>
                    <span className="text-white/40 text-xs block font-mono uppercase tracking-wider">Academic Period</span>
                    <span className="text-white/80 font-medium">{academicDetails.batch}</span>
                  </div>
                  <div>
                    <span className="text-white/40 text-xs block font-mono uppercase tracking-wider">Cumulative CGPA</span>
                    <span className="text-[#E1E0CC] font-bold text-lg">{academicDetails.cgpa}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
