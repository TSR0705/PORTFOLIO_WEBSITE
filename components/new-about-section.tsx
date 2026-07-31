"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { Instrument_Serif } from "next/font/google";

// Premium Serif Font
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

// Magnetic button wrapper
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.35);
    y.set((clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

function LiveClock() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setLocalTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span suppressHydrationWarning>IST: {localTime || "00:00:00 AM"}</span>;
}

export default function NewAboutSection() {
  const portraitX = useSpring(0, { damping: 20, stiffness: 80 });
  const portraitY = useSpring(0, { damping: 20, stiffness: 80 });
  const glowX = useSpring(0, { damping: 30, stiffness: 50 });
  const glowY = useSpring(0, { damping: 30, stiffness: 50 });

  // Parallax tracking directly via MotionValues (zero React re-renders)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const mouseX = clientX / innerWidth - 0.5;
      const mouseY = clientY / innerHeight - 0.5;
      portraitX.set(mouseX * -20);
      portraitY.set(mouseY * -20);
      glowX.set(mouseX * 40);
      glowY.set(mouseY * 40);
    };
    const mediaQuery = window.matchMedia("(min-width: 1024px) and (orientation: landscape)");
    if (mediaQuery.matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [portraitX, portraitY, glowX, glowY]);

  // Entrance animations
  const slideReveal = {
    hidden: { y: "115%" },
    visible: (custom: number) => ({
      y: 0,
      transition: {
        duration: 0.9,
        delay: custom * 0.08,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: custom * 0.1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section className={`relative min-h-[calc(100svh-80px)] md:min-h-[calc(100svh-140px)] w-full overflow-y-auto lg:landscape:overflow-hidden bg-black text-white flex items-center ${instrumentSerif.variable} py-8 md:py-16 lg:py-0`}>
      
      {/* Structural Hairlines (Desktop landscape only) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="mx-auto max-w-7xl h-full w-full px-6 md:px-12 grid grid-cols-1 md:landscape:grid-cols-12 gap-8">
          <div className="md:landscape:col-span-5 border-r border-white/[0.03] h-full hidden md:landscape:block" />
          <div className="md:landscape:col-span-7 h-full hidden md:landscape:block" />
        </div>
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/[0.02] w-full hidden md:landscape:block" />
      </div>

      {/* Atmospheric Ambient Glows */}
      <motion.div 
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_65%_55%,rgba(245,158,11,0.05),transparent_30%)] z-0" 
      />

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12 z-10">
        
        {/* Grid layout: Spans 5/7 split on desktop landscape to balance button layout */}
        <div className="grid grid-cols-1 md:landscape:grid-cols-12 gap-10 md:landscape:gap-8 lg:landscape:gap-12 items-center">
          
          {/* Left Side Content Column */}
          <div className="md:landscape:col-span-5 flex flex-col justify-center py-4 md:py-0 max-w-2xl md:landscape:max-w-none mx-auto md:landscape:mx-0">
            
            {/* Tag & Coordinates Header */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6 flex items-center justify-between border-b border-white/10 pb-4"
            >
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6 md:w-8 bg-white/30" />
                <span className="text-[9px] md:text-[10px] font-mono tracking-[0.45em] text-white/45 uppercase">
                  ABOUT ME
                </span>
              </div>
              <div className="flex flex-col items-end gap-0.5 font-mono text-[9px] text-white/30 tracking-wider">
                <span>LOC: 13.0827° N, 80.2707° E</span>
                <LiveClock />
              </div>
            </motion.div>

            {/* Title - Fixed italic clipping by introducing pr-8/pb-2 padding limits */}
            <h1 className="text-[clamp(2.5rem,6.5vw,6.5rem)] leading-[0.85] font-light tracking-tight">
              <div className="overflow-hidden block py-1.5">
                <motion.div
                  custom={1}
                  variants={slideReveal}
                  initial="hidden"
                  animate="visible"
                  className="font-serif italic text-amber-100/90 pr-8 pb-2 block"
                >
                  Tanmay
                </motion.div>
              </div>
              <div className="overflow-hidden block py-1.5">
                <motion.div
                  custom={2}
                  variants={slideReveal}
                  initial="hidden"
                  animate="visible"
                  className="font-semibold text-white block pr-2"
                >
                  Singh
                </motion.div>
              </div>
            </h1>

            {/* Role title */}
            <div className="overflow-hidden mt-4 md:mt-5">
              <motion.p
                custom={3}
                variants={slideReveal}
                initial="hidden"
                animate="visible"
                className="text-[clamp(0.85rem,1.4vw,1rem)] font-mono tracking-[0.24em] text-amber-300/80 uppercase"
              >
                Software Developer
              </motion.p>
            </div>

            {/* Brief description paragraph */}
            <div className="overflow-hidden mt-5 md:mt-6">
              <motion.p
                custom={4}
                variants={slideReveal}
                initial="hidden"
                animate="visible"
                className="max-w-xl border-l border-white/15 pl-4 md:pl-5 text-[clamp(0.92rem,1.2vw,1.05rem)] leading-7 md:leading-8 text-white/70"
              >
                Building full-stack applications, backend systems, developer tools,
                and production-oriented software while exploring cloud
                infrastructure, DevOps, and distributed systems.
              </motion.p>
            </div>
            {/* Socials Capsules */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="https://github.com/TSR0705"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-4.5 py-2 border border-white/15 bg-white/[0.04] hover:bg-[#181717] hover:border-white/40 rounded-full text-xs font-mono text-white/90 hover:text-white transition-all duration-300 backdrop-blur-md shadow-sm hover:scale-[1.03]"
              >
                <img src="/logos/github.svg" alt="GitHub logo" className="w-4 h-4 object-contain brightness-0 invert" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/tanmay-singh-rajput"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-4.5 py-2 border border-white/15 bg-white/[0.04] hover:bg-[#0A66C2] hover:border-[#0A66C2] rounded-full text-xs font-mono text-white/90 hover:text-white transition-all duration-300 backdrop-blur-md shadow-sm hover:scale-[1.03]"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:tanmaysingh8246@gmail.com"
                className="group inline-flex items-center gap-2.5 px-4.5 py-2 border border-white/15 bg-white/[0.04] hover:bg-[#EA4335] hover:border-[#EA4335] rounded-full text-xs font-mono text-white/90 hover:text-white transition-all duration-300 backdrop-blur-md shadow-sm hover:scale-[1.03]"
              >
                <img src="/logos/gmail.svg" alt="Gmail logo" className="w-4 h-4 object-contain" />
                <span>Email</span>
              </a>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 md:mt-9 flex flex-wrap items-center gap-4 md:gap-5"
            >
              <Magnetic>
                <a
                  href="/projects"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 md:px-7 py-3.5 text-xs md:text-sm font-semibold tracking-wider text-black transition-all duration-300 hover:bg-neutral-100 shadow-md hover:shadow-xl hover:scale-[1.02]"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Magnetic>

              <Magnetic>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-resume"))}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-6 md:px-7 py-3.5 text-xs md:text-sm font-semibold tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20 shadow-md hover:scale-[1.02]"
                >
                  <FileText className="h-4 w-4 text-white/70 transition-colors group-hover:text-white" />
                  <span>View Resume</span>
                </button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right Side Portrait Column - Spans 7 columns on desktop landscape */}
          <div className="md:landscape:col-span-7 h-full flex flex-col justify-end relative mt-10 md:landscape:mt-0">
            
            {/* Enlarged image container with premium smooth multi-stop mask fade */}
            <motion.div
              style={{ 
                x: portraitX, 
                y: portraitY,
                maskImage: "linear-gradient(to bottom, black 0%, black 65%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.3) 92%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 65%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.3) 92%, transparent 100%)"
              }}
              className="relative w-full max-w-[460px] md:max-w-[580px] md:landscape:max-w-none mx-auto md:landscape:mx-0 aspect-[4/5] md:landscape:aspect-auto h-[45vh] md:portrait:h-[58vh] md:landscape:h-[70vh] lg:landscape:h-[90vh] xl:landscape:h-[96vh] z-10 flex items-end overflow-hidden"
            >
              <motion.div
                variants={fadeUp}
                custom={2}
                initial="hidden"
                animate="visible"
                className="relative w-full h-full"
              >
                <Image
                  src="/MY_IMAGE.webp"
                  alt="Tanmay Singh portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 52vw"
                  className="object-contain object-bottom drop-shadow-[0_4px_36px_rgba(59,130,246,0.18)] select-none pointer-events-none"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}