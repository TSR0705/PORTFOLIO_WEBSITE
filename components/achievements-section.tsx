"use client";

import { motion } from "framer-motion";
import { achievementsData, academicDetails } from "@/lib/portfolio-data";
import { CircularAchievements } from "@/components/ui/circular-achievements";
import { CertificateGallery } from "@/components/ui/certificate-gallery";

const participations = [
  "Adobe India Hackathon",
  "CodeNex DayZero",
  "HackPick",
  "OSSome Hacks 3.0",
  "Impact-AI-Thon",
  "DevTrail"
];

// Local mapping for high-fidelity images and descriptions of achievements
const achievementsList = achievementsData
  .filter(item => ["ossome-hacks-winner", "srm-java-expo"].includes(item.id))
  .map((item) => {
  const images: Record<string, string> = {
    "samsung-prism": "/file.svg",
    "ossome-hacks-winner": "/achivements_pics/OSSOME_HACKS_2.0_GITHUB_HACKATHON_Picture.webp",
    "srm-java-expo": "/achivements_pics/JAVA_PROJECT_EXPO_GROUP_PICTURE.webp",
    "github-hackathon": "/achivements_pics/OSSOME_HACKS_2.0_GITHUB_HACKATHON_RECOGNITION_CERTIFICATE.webp",
    "codenex-dayzero": "/file.svg"
  };
  
  const quotes: Record<string, string> = {
    "samsung-prism": "Selected to collaborate on research and development projects under **Samsung PRISM**.",
    "ossome-hacks-winner": "Secured the **Best Freshers Team Award** at GitHub OSSome Hacks 2.0 for **Samvidhan Setu**, an AI-assisted legal research and dispute management platform. The project was recognized for its practical social impact, strong technical implementation, innovative problem-solving approach, and effective team collaboration throughout the hackathon.",
    "srm-java-expo": "Awarded **3rd Prize** at the SRM Java Project Expo 2025 for **FileX**, a security-focused file monitoring and insider-threat detection system designed to identify suspicious file activity, unauthorized access patterns, and potential data exfiltration risks through real-time monitoring and behavioral analysis.",
    "github-hackathon": "Recognized as a **hackathon winner** in the GitHub Community developer track, building open-source developer productivity tools and accessible automation plugins.",
    "codenex-dayzero": "Finished in the **top 10 finalists** out of competitive developer cohorts in the CodeNex DayZero hackathon, demonstrating exceptional debugging and high-performance algorithms."
  };

  return {
    quote: quotes[item.id] || item.description || "Special recognition award.",
    name: item.title,
    designation: `${item.award} @ ${item.organization} (${item.year})`,
    src: images[item.id] || "/file.svg"
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

      {/* Certificate Gallery Full Width Marquee */}
      <div className="relative z-10 mt-20 md:mt-32 w-full">
        <CertificateGallery />
      </div>
    </section>
  );
}
