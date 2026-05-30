"use client";

import { motion } from "framer-motion";
import { achievementsData, academicDetails } from "@/lib/portfolio-data";
import { CircularAchievements } from "@/components/ui/circular-achievements";

const participations = [
  "Adobe India Hackathon",
  "CodeNex DayZero",
  "HackPick",
  "Ossome Hacks 3.0",
  "Impact-AI-Thon",
  "DevTrail"
];

// Local mapping for high-fidelity images and descriptions of achievements
const achievementsList = achievementsData.map((item) => {
  const images: Record<string, string> = {
    "samsung-prism": "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1368&auto=format&fit=crop",
    "ossome-hacks-winner": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1368&auto=format&fit=crop",
    "srm-java-expo": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1368&auto=format&fit=crop",
    "github-hackathon": "https://images.unsplash.com/photo-1618001471353-b98aedd07871?q=80&w=1368&auto=format&fit=crop",
    "codenex-dayzero": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1368&auto=format&fit=crop"
  };
  
  const quotes: Record<string, string> = {
    "samsung-prism": "Selected to collaborate on research and development projects under Samsung PRISM, focusing on advanced computing and systems research.",
    "ossome-hacks-winner": "Secured 1st Place out of hundreds of competitive project submissions at Ossome Hacks 2.0, demonstrating rapid systems engineering and robust execution under pressure.",
    "srm-java-expo": "Presented object-oriented Java concepts and highly optimized architectural patterns, winning 3rd prize at the SRM Java Expo.",
    "github-hackathon": "Recognized as a hackathon winner in the GitHub Community developer track, building open-source developer productivity tools and accessible automation plugins.",
    "codenex-dayzero": "Finished in the top 10 finalists out of competitive developer cohorts in the CodeNex DayZero hackathon, demonstrating exceptional debugging and high-performance algorithms."
  };

  return {
    quote: quotes[item.id] || item.description || "Special recognition award.",
    name: item.title,
    designation: `${item.award} @ ${item.organization} (${item.year})`,
    src: images[item.id] || "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1368&auto=format&fit=crop"
  };
});

export default function AchievementsSection() {
  return (
    <section id="achievements" className="min-h-screen w-full bg-black text-white px-6 py-20 md:py-32 relative overflow-hidden">
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
        <div className="w-full flex flex-col items-center">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#E1E0CC]/80 mb-6 self-start">
            Featured Honors & Achievements
          </h3>
          <div className="items-center justify-center relative flex w-full">
            <CircularAchievements
              achievements={achievementsList}
              autoplay={true}
              colors={{
                name: "#E1E0CC",
                designation: "rgba(225, 224, 204, 0.7)",
                quote: "#ffffff",
                arrowBackground: "#121212",
                arrowForeground: "#E1E0CC",
                arrowHoverBackground: "#E1E0CC",
              }}
              fontSizes={{
                name: "28px",
                designation: "18px",
                quote: "18px",
              }}
            />
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-12 gap-8 md:gap-12 pt-12 border-t border-white/10">
          
          {/* Left Column: Hackathons Log */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40">Hackathons Log</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {participations.map((p, idx) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01] backdrop-blur-sm hover:bg-[#E1E0CC]/5 hover:border-[#E1E0CC]/20 hover:shadow-[0_0_20px_rgba(225,224,204,0.05)] transition-all duration-500 cursor-default group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E1E0CC]/40 group-hover:bg-[#E1E0CC] group-hover:scale-125 transition-all duration-300 flex-shrink-0" />
                  <span className="text-sm font-sans text-white/80 group-hover:text-white transition-colors duration-300">{p}</span>
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm relative overflow-hidden hover:border-[#E1E0CC]/20 hover:shadow-[0_0_30px_rgba(225,224,204,0.06)] transition-all duration-700 group"
            >
              {/* Radial glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E1E0CC]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#E1E0CC]/10 transition-all duration-700" />
              
              <div className="space-y-5 relative z-10">
                <div>
                  <h4 className="text-lg md:text-xl font-medium text-white group-hover:text-[#E1E0CC] transition-colors duration-500">{academicDetails.name}</h4>
                  <p className="text-[#E1E0CC]/70 text-xs font-mono mt-1">{academicDetails.degree} &bull; {academicDetails.specialization}</p>
                </div>
                
                <div className="h-[1px] w-full bg-white/10" />
                
                <div className="grid grid-cols-2 gap-5 text-sm font-sans">
                  <div>
                    <span className="text-white/40 text-xs block font-mono uppercase tracking-wider mb-0.5">Institution</span>
                    <span className="text-white/80 font-medium">{academicDetails.college}</span>
                  </div>
                  <div>
                    <span className="text-white/40 text-xs block font-mono uppercase tracking-wider mb-0.5">Academic Period</span>
                    <span className="text-white/80 font-medium">{academicDetails.batch}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-white/40 text-xs block font-mono uppercase tracking-wider mb-0.5">Cumulative CGPA</span>
                    <span className="text-[#E1E0CC] font-semibold text-xl tracking-tight">{academicDetails.cgpa}</span>
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
