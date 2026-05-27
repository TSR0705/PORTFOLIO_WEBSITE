"use client";

import { motion } from "framer-motion";
import { achievementsData } from "@/lib/portfolio-data";

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

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-12 gap-8 md:gap-12">
        
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
            RECOGNITION
          </motion.h2>
          <div className="h-[1px] w-full bg-white/10 mt-6 md:mt-8" />
        </div>

        {/* Left Column: Achievements List */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Selected Achievements</h3>
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-between items-start gap-4 border-b border-white/10 pb-6 group hover:border-[#E1E0CC]/50 transition-colors duration-300"
            >
              <div>
                <h4 className="text-lg md:text-xl font-medium text-white group-hover:text-[#E1E0CC] transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-white/50 text-xs md:text-sm font-sans mt-1">
                  {item.award} &bull; {item.organization}
                </p>
                {item.description && (
                  <p className="text-white/70 text-xs font-sans mt-3 max-w-lg leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
              <span className="font-mono text-sm text-[#E1E0CC] font-medium pt-1">
                {item.year}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Hackathon participations */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-white/10 lg:pl-12">
          <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Hackathons Log</h3>
          <div className="flex flex-col gap-4">
            {participations.map((p, idx) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 text-sm font-sans text-white/80 hover:text-white transition-colors cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E1E0CC]" />
                {p}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
