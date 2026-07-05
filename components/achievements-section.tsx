"use client";

import { motion } from "framer-motion";
import { achievementsData } from "@/lib/portfolio-data";
import { CircularAchievements } from "@/components/ui/circular-achievements";
import { CertificateGallery } from "@/components/ui/certificate-gallery";

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
    <section id="recognition" className="min-h-screen w-full bg-black text-white px-6 py-20 md:py-32 relative overflow-hidden scroll-mt-28">
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
      </div>

      {/* Certificate Gallery Full Width Marquee */}
      <div className="relative z-10 mt-20 md:mt-32 w-full">
        <CertificateGallery />
      </div>
    </section>
  );
}
