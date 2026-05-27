"use client"

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  BookOpen, 
  MapPin, 
  Briefcase, 
  Sparkles,
  Terminal,
  Activity,
  CheckCircle2,
  GraduationCap,
  Award
} from "lucide-react";

export function GlassmorphismPortfolioBlock() {
  const [imgSrc, setImgSrc] = useState("/MY_IMAGE.jpeg");
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    if (imgSrc === "/MY_IMAGE.jpeg") {
      setImgSrc("/profile.jpg");
    } else {
      setImgError(true);
    }
  };

  const technicalFocus = [
    "AI Systems",
    "Cloud Infrastructure",
    "Backend Engineering",
    "DevOps Automation",
    "System Design",
    "Scalable Full Stack Applications"
  ];

  const quickMetrics = [
    "10+ Scalable Systems Built (Databases, Observability, AI)",
    "Samsung PRISM Selected Researcher",
    "Best Freshers Award — GitHub OSSome Hacks 2.0",
    "Multi-Domain Systems & Security Builds"
  ];

  const logEntries = [
    {
      title: "Backend Engineering Intern",
      subtitle: "MedGency",
      type: "role",
      highlight: false
    },
    {
      title: "Samsung PRISM Research Contributor",
      subtitle: "Samsung India",
      type: "role",
      highlight: true
    },
    {
      title: "Best Freshers Award — GitHub OSSome Hacks 2.0",
      subtitle: "Winner",
      type: "achievement",
      highlight: false
    },
    {
      title: "3rd Place — SRM Java Project Expo 2025",
      subtitle: "SRMIST",
      type: "achievement",
      highlight: false
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white px-6 md:px-12 py-20 md:py-32 flex items-center justify-center">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

      {/* Cinematic theme lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E1E0CC]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Full-Page Grid */}
      <div className="w-full max-w-7xl mx-auto z-10 grid gap-12 lg:grid-cols-12 items-start relative">
        
        {/* LEFT COLUMN: Core Profile, Tech Stack, & Achievements Timeline (Spans 7 cols) */}
        <div className="lg:col-span-7 space-y-10 flex flex-col justify-between h-full">
          
          <div className="space-y-8">
            
            {/* Header Identity Badge */}
            <div className="flex items-center gap-4">
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 rounded-full border-[#E1E0CC]/20 bg-white/5 px-4.5 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[#E1E0CC]"
              >
                <Terminal className="h-3.5 w-3.5 animate-pulse text-[#E1E0CC]" />
                B.Tech CSE (Cloud Computing) · 2nd Year
              </Badge>
              <div className="h-[1px] flex-grow bg-white/10" />
            </div>

            {/* Title & Stands */}
            <div className="space-y-4">
              {/* <span className="text-xs font-mono tracking-[0.3em] uppercase text-white/40 block">
                B.Tech CSE (Cloud Computing) · 2nd Year
              </span> */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none">
                Tanmay Singh
              </h1>
              <p className="text-xl sm:text-2xl font-medium tracking-tight bg-gradient-to-r from-amber-400 via-amber-200 to-white bg-clip-text text-transparent">
                Systems Engineer & Backend Architect
              </p>
              <div className="h-[2px] w-20 bg-gradient-to-r from-amber-400 to-[#E1E0CC]/30 rounded mt-4" />
            </div>

            {/* Manifesto Narrative */}
            <div className="text-white/80 text-base sm:text-lg leading-relaxed font-sans max-w-2xl space-y-4">
              <p>
                I design and engineer <span className="text-white font-semibold">reliable, scalable backend systems</span> and cloud-native infrastructures. Focusing on system observability, database automation, and AI pipelines, I translate complex technical requirements into maintainable, clean code built for production.
              </p>
            </div>

            {/* Technical Focus Areas */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-[#E1E0CC] flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" />
                Technical Expertise
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {technicalFocus.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm px-4 py-1.5 rounded-full border border-[#E1E0CC]/10 bg-[#E1E0CC]/5 text-white/90 font-sans hover:border-[#E1E0CC]/30 hover:bg-[#E1E0CC]/10 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional Timeline / Recognitions */}
            <div className="space-y-5 pt-2">
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-white/40 flex items-center gap-2">
                <Activity className="h-3.5 w-3.5 text-[#E1E0CC]" />
                Professional Experience & Recognitions
              </h3>
              
              <div className="relative border-l-2 border-white/10 pl-6 space-y-6">
                {logEntries.map((entry, index) => (
                  <div key={index} className="relative group flex items-start gap-4">
                    {/* Aligned dot indicator */}
                    <div 
                      className={`absolute -left-[33px] top-1.5 h-3 w-3 rounded-full border-2 border-black transition-all group-hover:scale-125 ${
                        entry.highlight 
                          ? "bg-amber-400 ring-4 ring-amber-400/25" 
                          : "bg-white/40"
                      }`} 
                    />
                    
                    <div className="flex-grow flex justify-between items-start gap-4">
                      <div>
                        <h4 className={`text-sm sm:text-base font-semibold leading-tight transition-colors group-hover:text-amber-300 ${entry.highlight ? "text-white" : "text-white/85"}`}>
                          {entry.title}
                        </h4>
                        <p className="text-xs text-white/45 font-sans mt-1">{entry.subtitle}</p>
                      </div>
                      
                      {entry.type === "role" ? (
                        <span className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded border border-white/10 bg-white/5 text-white/60 select-none flex-shrink-0">
                          Experience
                        </span>
                      ) : (
                        <span className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded border border-amber-500/25 bg-amber-500/5 text-amber-300 select-none flex-shrink-0">
                          Recognition
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Action Trigger */}
          <div className="pt-8">
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
              className="h-13 w-full sm:w-auto gap-3.5 rounded-full px-10 text-xs font-mono uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-white/5"
            >
              Explore Engineering Projects
              <ArrowUpRight className="h-4.5 w-4.5" />
            </Button>
          </div>

        </div>

        {/* RIGHT COLUMN: Profile Photo Frame + Education + Metrics Dashboard + Geographic facts (Spans 5 cols) */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between h-full">
          
          {/* Aligned Polaroid Portrait container */}
          <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.01] p-6 flex flex-col items-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.03)]">
            
            {/* Active Status Indicator */}
            <div className="absolute top-5 right-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping absolute" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 relative" />
              <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase">
                active // chn
              </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

            {/* Glowing Border Accents */}
            <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl -z-10" />

            {/* Photo Viewport */}
            <div className="relative w-full aspect-square max-w-[240px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
              {!imgError ? (
                <img
                  src={imgSrc}
                  alt="Tanmay Singh"
                  onError={handleImageError}
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
                  <span className="text-[10px] text-white/50 font-mono select-all bg-white/5 px-2 py-0.5 rounded mt-1 border border-white/5">
                    public/MY_IMAGE.jpeg
                  </span>
                </div>
              )}
            </div>

            {/* Caption Metadata */}
            <div className="relative z-20 mt-5 text-center">
              <h4 className="font-semibold text-sm tracking-tight text-white group-hover:text-amber-300 transition-colors">
                Tanmay Singh
              </h4>
              <p className="text-[10px] font-mono tracking-[0.25em] text-[#E1E0CC]/80 uppercase mt-1">
                Bihar ➔ Chennai, India
              </p>
            </div>

          </div>

          {/* Education & GPA Panel */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.01] space-y-4 shadow-[inset_0_2px_4px_rgba(255,255,255,0.03)]">
            <span className="text-xs font-mono text-white/30 uppercase tracking-[0.2em] block">
              Education Credentials
            </span>
            
            <div className="flex justify-between items-center gap-6">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-[#E1E0CC] mt-0.5">
                  <GraduationCap className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white leading-tight">SRM Institute of Science & Technology</h4>
                  <p className="text-xs text-white/45 font-sans mt-1">Cloud Computing Specialization (2024–2028)</p>
                </div>
              </div>

              {/* CGPA Spotlight Badge */}
              <div className="px-3.5 py-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 text-center flex flex-col justify-center min-w-[100px]">
                <span className="text-[9px] font-mono text-amber-400 uppercase leading-none block">CGPA</span>
                <span className="text-sm font-bold text-white mt-1.5 leading-none">9.37 / 10</span>
              </div>
            </div>
          </div>

          {/* Verified Engineering Metrics Checklist */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.01] space-y-4 shadow-[inset_0_2px_4px_rgba(255,255,255,0.03)]">
            <span className="text-xs font-mono text-white/30 uppercase tracking-[0.2em] block">
              Core Engineering Metrics
            </span>
            
            <div className="grid gap-3.5">
              {quickMetrics.map((metric) => (
                <div key={metric} className="flex items-center gap-3 text-xs sm:text-sm text-white/85">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0" />
                  <span className="font-sans leading-none">{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic facts */}
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center gap-2.5 text-xs text-white/50 font-mono">
            <MapPin className="h-4 w-4 text-[#E1E0CC]" />
            Originally from Bihar, India · Currently studying in Chennai
          </div>

        </div>

      </div>
    </section>
  );
}
