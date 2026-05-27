"use client"

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Award, 
  BookOpen, 
  MapPin, 
  Briefcase, 
  Sparkles,
  Terminal,
  Activity,
  CheckCircle2,
  Bookmark
} from "lucide-react";

export function GlassmorphismPortfolioBlock() {
  const [imgError, setImgError] = useState(false);

  const technicalFocus = [
    "AI Systems",
    "Cloud Infrastructure",
    "Backend Engineering",
    "DevOps Automation",
    "System Design",
    "Scalable Full Stack Applications"
  ];

  const quickMetrics = [
    "10+ Engineering Projects",
    "Multiple Research / Product Builds",
    "Hackathon Winner",
    "Industry Research Experience"
  ];

  const logEntries = [
    {
      title: "Backend Engineering Intern",
      subtitle: "MedGency",
      type: "role",
      highlight: true
    },
    {
      title: "Samsung PRISM Research Contributor",
      subtitle: "Samsung India",
      type: "role",
      highlight: true
    },
    {
      title: "Winner — GitHub OSSome Hacks 2.0",
      subtitle: "1st Place Winner",
      type: "achievement",
      highlight: false
    },
    {
      title: "3rd Place — SRM Java Project Expo 2025",
      subtitle: "SRMIST",
      type: "achievement",
      highlight: false
    },
    {
      title: "Top 10 Finalist — CodeNex DayZero",
      subtitle: "Systems Track",
      type: "achievement",
      highlight: false
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-20 lg:py-32 flex items-center justify-center bg-black text-white">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.75] mix-blend-overlay" />

      {/* Cinematic theme lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#E1E0CC]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.01] p-6 sm:p-10 md:p-14 backdrop-blur-3xl"
        >
          {/* Glass glare overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />

          <div className="relative grid gap-12 lg:grid-cols-12 items-stretch">
            
            {/* LEFT COLUMN: Identity + Technical Focus + Experience & Achievements Log + CTA */}
            <div className="space-y-8 lg:col-span-7 flex flex-col justify-between">
              
              <div className="space-y-6">
                
                {/* Core Header Badge */}
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="inline-flex items-center gap-2 rounded-full border-[#E1E0CC]/30 bg-[#E1E0CC]/5 px-4 py-1 text-[10px] font-mono uppercase tracking-[0.25em] text-[#E1E0CC]"
                  >
                    <Terminal className="h-3 w-3 animate-pulse" />
                    2nd Year B.Tech CSE Student · SRMIST
                  </Badge>
                  <div className="h-[1px] flex-grow bg-white/10" />
                </div>

                {/* Main Name & Subtitles */}
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
                    Tanmay Singh
                  </h1>
                  <p className="text-lg sm:text-xl font-medium tracking-tight text-white/80" style={{ color: "#E1E0CC" }}>
                    Full Stack Engineer | Cloud Systems Builder
                  </p>
                </div>

                {/* Short Manifesto Biography */}
                <p className="text-white/70 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
                  I focus on designing and building reliable, scalable backend architectures, cloud-native systems, and intelligent automation platforms. I prioritize developer tooling and observability, turning complex workflow demands into maintainable systems built for production scale.
                </p>

                {/* Technical Focus Grid */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40 block">
                    technical_focus // areas
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {technicalFocus.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-white/85 font-sans"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Professional Log Timeline (Unified Experience & Achievements) */}
                <div className="space-y-4 pt-2">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40 flex items-center gap-2">
                    <Activity className="h-3.5 w-3.5 text-[#E1E0CC]" />
                    professional_log // achievements & roles
                  </span>
                  
                  <div className="relative border-l border-white/10 pl-5 space-y-4">
                    {logEntries.map((entry, index) => (
                      <div key={index} className="relative group">
                        {/* Dot indicator */}
                        <div 
                          className={`absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border border-black transition-all group-hover:scale-125 ${
                            entry.highlight 
                              ? "bg-[#E1E0CC] ring-4 ring-[#E1E0CC]/20" 
                              : "bg-white/30"
                          }`} 
                        />
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <h4 className={`text-xs font-semibold leading-none ${entry.highlight ? "text-white" : "text-white/80"}`}>
                              {entry.title}
                            </h4>
                            <p className="text-[10px] text-white/40 font-mono mt-1">{entry.subtitle}</p>
                          </div>
                          {entry.type === "role" ? (
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/60">
                              EXPERIENCE
                            </span>
                          ) : (
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-[#E1E0CC]/20 bg-[#E1E0CC]/5 text-[#E1E0CC]">
                              AWARD
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Primary Action Call */}
              <div className="pt-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const projectsSection = document.getElementById("projects");
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.location.href = "/#projects";
                    }
                  }}
                  className="h-12 w-full sm:w-auto gap-2 rounded-full px-8 text-xs font-mono uppercase tracking-[0.25em] transition-all hover:scale-[1.02] cursor-pointer bg-white text-black hover:bg-white/90"
                >
                  Explore Projects
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>

            </div>

            {/* RIGHT COLUMN: Polaroid Frame + Education (with GPA) + Quick Metrics Panel + Facts */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              {/* Profile Photo Frame */}
              <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.01] p-5 flex flex-col items-center">
                
                {/* Active LED Pulse (Status indicator) */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/50 border border-white/5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping absolute" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 relative" />
                  <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase">
                    online // chn
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

                {/* Photo Element */}
                <div className="relative w-full aspect-square max-w-[220px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                  {!imgError ? (
                    <img
                      src="/profile.jpg"
                      alt="Tanmay Singh"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center h-full w-full bg-[#080808]">
                      <svg className="w-12 h-12 text-[#E1E0CC]/20 mb-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#E1E0CC]/40 font-mono">
                        Add photo in
                      </span>
                      <span className="text-[10px] text-white/60 font-mono select-all bg-white/5 px-2 py-0.5 rounded mt-1 border border-white/5">
                        public/profile.jpg
                      </span>
                    </div>
                  )}
                </div>

                <div className="relative z-20 mt-4 text-center">
                  <h4 className="font-semibold text-sm tracking-tight text-white">
                    Tanmay Singh
                  </h4>
                  <p className="text-[9px] font-mono tracking-[0.25em] text-[#E1E0CC]/80 uppercase mt-0.5">
                    Bihar ➔ Chennai, India
                  </p>
                </div>

              </div>

              {/* Education Card & CGPA Spotlight */}
              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.01] space-y-4">
                <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em] block">
                  academic_node // credentials
                </span>
                
                <div className="flex justify-between items-center gap-4">
                  <div className="flex items-start gap-3">
                    <div className="h-7 w-7 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-[#E1E0CC] mt-0.5">
                      <BookOpen className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white leading-tight">SRM Institute of Science & Technology</h4>
                      <p className="text-[10px] text-white/40 font-mono mt-1">Cloud Computing · 2024–2028</p>
                    </div>
                  </div>

                  {/* GPA Box */}
                  <div className="px-3 py-1.5 rounded-xl border border-[#E1E0CC]/20 bg-[#E1E0CC]/5 text-center flex flex-col justify-center">
                    <span className="text-xs font-mono text-white/40 uppercase leading-none block">CGPA</span>
                    <span className="text-sm font-bold text-white mt-1 leading-none">9.37 / 10</span>
                  </div>
                </div>
              </div>

              {/* Quick Proof Metrics Checklist */}
              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.01] space-y-3.5">
                <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em] block">
                  quick_metrics // verification
                </span>
                
                <div className="grid gap-2.5">
                  {quickMetrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-2.5 text-xs text-white/80">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span className="font-sans leading-none">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Geographic Context (Minor footer fact) */}
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center gap-2.5 text-[10px] text-white/50 font-mono">
                <MapPin className="h-3.5 w-3.5 text-[#E1E0CC]" />
                Originally from Bihar, India · Currently studying in Chennai
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
