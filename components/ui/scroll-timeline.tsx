"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "./card";
import { Calendar } from "lucide-react";

export interface TimelineEvent {
  id?: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

export interface ScrollTimelineProps {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
  animationOrder?: "sequential" | "staggered" | "simultaneous";
  cardAlignment?: "alternating" | "left" | "right";
  lineColor?: string;
  activeColor?: string;
  progressIndicator?: boolean;
  cardVariant?: "default" | "elevated" | "outlined" | "filled";
  cardEffect?: "none" | "glow" | "shadow" | "bounce";
  parallaxIntensity?: number;
  progressLineWidth?: number;
  progressLineCap?: "round" | "square";
  dateFormat?: "text" | "badge";
  className?: string;
  revealAnimation?: "fade" | "slide" | "scale" | "flip" | "none";
  connectorStyle?: "dots" | "line" | "dashed";
  perspective?: boolean;
  darkMode?: boolean;
  smoothScroll?: boolean;
}

const DEFAULT_EVENTS: TimelineEvent[] = [
  {
    year: "2024 - Present",
    title: "Samsung PRISM Research Contributor",
    subtitle: "Samsung India",
    description: "Selected researcher for cloud-native systems integration and AI performance optimizations.",
    color: "text-emerald-400",
  },
  {
    year: "2024",
    title: "Backend Engineering Intern",
    subtitle: "MedGency",
    description: "Optimized relational database queries, designed clean API routers, and established microservice orchestration workflows.",
    color: "text-cyan-400",
  },
  {
    year: "2024",
    title: "Best Freshers Award — GitHub OSSome Hacks 2.0",
    subtitle: "Best Freshers Team",
    description: "Won the Best Freshers Team Award at the rigorous 36-hour hackathon, recognized for exceptional teamwork, project execution, and rewarded with XYZ vouchers.",
    color: "text-amber-400",
  },
  {
    year: "2025",
    title: "3rd Place — SRM Java Project Expo 2025",
    subtitle: "SRMIST Expo",
    description: "Presented high-performance database management engines featuring self-healing recovery processes.",
    color: "text-purple-400",
  },
];

export const ScrollTimeline = ({
  events = DEFAULT_EVENTS,
  title = "Career Timeline",
  subtitle = "Scroll to explore my professional journey",
  animationOrder = "sequential",
  cardAlignment = "alternating",
  lineColor = "bg-white/10",
  activeColor = "bg-primary",
  progressIndicator = true,
  cardVariant = "outlined",
  cardEffect = "bounce",
  parallaxIntensity = 0.1,
  progressLineWidth = 2,
  progressLineCap = "round",
  dateFormat = "badge",
  revealAnimation = "fade",
  className = "",
  connectorStyle = "dashed",
  perspective = true,
  darkMode = true,
  smoothScroll = true,
}: ScrollTimelineProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const newIndex = Math.floor(v * events.length);
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < events.length
      ) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, events.length, activeIndex]);

  const getCardVariants = (index: number) => {
    const baseDelay =
      animationOrder === "simultaneous"
        ? 0
        : animationOrder === "staggered"
        ? index * 0.15
        : index * 0.25;

    const initialStates = {
      fade: { opacity: 0, y: 30 },
      slide: {
        x:
          cardAlignment === "left"
            ? -80
            : cardAlignment === "right"
            ? 80
            : index % 2 === 0
            ? -80
            : 80,
        opacity: 0,
      },
      scale: { scale: 0.9, opacity: 0 },
      flip: { rotateY: 45, opacity: 0 },
      none: { opacity: 1 },
    };

    return {
      initial: initialStates[revealAnimation],
      whileInView: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateY: 0,
        transition: {
          duration: 0.6,
          delay: baseDelay,
          ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
        },
      },
      viewport: { once: true, margin: "-100px" },
    };
  };

  const getConnectorClasses = () => {
    const baseClasses = "absolute left-1/2 transform -translate-x-1/2";
    switch (connectorStyle) {
      case "dots":
        return cn(baseClasses, "w-1 rounded-full bg-white/10");
      case "dashed":
        return cn(
          baseClasses,
          "w-[2px] bg-transparent border-l-2 border-dashed border-white/20"
        );
      case "line":
      default:
        return cn(baseClasses, "w-[2px] bg-white/15");
    }
  };

  const getCardClasses = (index: number) => {
    const baseClasses = "relative z-30 rounded-xl transition-all duration-300";
    const variantClasses = {
      default: "bg-white/5 border border-white/10 shadow-sm",
      elevated: "bg-[#0d0d0d] border border-white/10 shadow-lg shadow-black/80",
      outlined: "bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-white/20",
      filled: "bg-white/5 border border-transparent",
    };
    const effectClasses = {
      none: "",
      glow: "hover:shadow-[0_0_20px_rgba(225,224,204,0.1)]",
      shadow: "hover:shadow-xl hover:shadow-[#E1E0CC]/5 hover:-translate-y-1",
      bounce: "hover:scale-[1.02] active:scale-[0.98]",
    };
    const alignmentClassesDesktop =
      cardAlignment === "alternating"
        ? index % 2 === 0
          ? "lg:mr-[calc(50%+30px)]"
          : "lg:ml-[calc(50%+30px)]"
        : cardAlignment === "left"
        ? "lg:mr-auto lg:ml-0"
        : "lg:ml-auto lg:mr-0";

    return cn(
      baseClasses,
      variantClasses[cardVariant],
      effectClasses[cardEffect],
      alignmentClassesDesktop,
      "w-full lg:w-[calc(50%-50px)]"
    );
  };

  return (
    <div
      ref={scrollRef}
      className={cn(
        "relative w-full overflow-hidden bg-black text-white",
        className
      )}
    >
      <div className="text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-light tracking-tighter leading-none mb-4">
          Career <span className="font-semibold text-[#E1E0CC]">{title}</span>
        </h2>
        <p className="text-sm md:text-base font-mono tracking-widest text-white/40 uppercase">
          {subtitle}
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pb-32">
        <div className="relative mx-auto min-h-[600px]">
          {/* Connector Line Background */}
          <div
            className={cn(getConnectorClasses(), "h-full absolute top-0 z-10")}
          />

          {/* Traveling Glow & Filled Progress Line */}
          {progressIndicator && (
            <>
              {/* Filled progress line */}
              <motion.div
                className="absolute top-0 z-10"
                style={{
                  height: progressHeight,
                  width: progressLineWidth,
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius:
                    progressLineCap === "round" ? "9999px" : "0px",
                  background: `linear-gradient(to bottom, #a855f7, #6366f1, #22d3ee)`,
                  boxShadow: `
                    0 0 15px rgba(99,102,241,0.5),
                    0 0 25px rgba(168,85,247,0.3)
                  `,
                }}
              />
              {/* Traveling glow comet at the head */}
              <motion.div
                className="absolute z-20"
                style={{
                  top: progressHeight,
                  left: "50%",
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              >
                <motion.div
                  className="w-5 h-5 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(99,102,241,0.5) 40%, rgba(34,211,238,0) 70%)",
                    boxShadow: `
                      0 0 15px 4px rgba(168, 85, 247, 0.6),
                      0 0 25px 8px rgba(99, 102, 241, 0.4),
                      0 0 40px 15px rgba(34, 211, 238, 0.2)
                    `,
                  }}
                  animate={{
                    scale: [1, 1.25, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </>
          )}

          <div className="relative z-20 space-y-12 lg:space-y-0">
            {events.map((event, index) => {
              const yOffset = useTransform(
                smoothProgress,
                [0, 1],
                [parallaxIntensity * 100, -parallaxIntensity * 100]
              );
              return (
                <div
                  key={event.id || index}
                  ref={(el) => {
                    timelineRefs.current[index] = el;
                  }}
                  className={cn(
                    "relative flex items-center py-6",
                    "flex-col lg:flex-row lg:min-h-[220px]",
                    cardAlignment === "alternating"
                      ? index % 2 === 0
                        ? "lg:justify-start"
                        : "lg:flex-row-reverse lg:justify-start"
                      : cardAlignment === "left"
                      ? "lg:justify-start"
                      : "lg:flex-row-reverse lg:justify-start"
                  )}
                >
                  {/* Central Node Indicator */}
                  <div
                    className={cn(
                      "absolute top-6 lg:top-1/2 transform lg:-translate-y-1/2 z-30",
                      "left-1/2 -translate-x-1/2"
                    )}
                  >
                    <motion.div
                      className={cn(
                        "w-6 h-6 rounded-full border-4 bg-black flex items-center justify-center transition-all duration-300",
                        index <= activeIndex
                          ? "border-purple-400"
                          : "border-white/10"
                      )}
                      animate={
                        index <= activeIndex
                          ? {
                              scale: [1, 1.25, 1],
                              boxShadow: [
                                "0 0 0px rgba(168,85,247,0)",
                                "0 0 12px rgba(168,85,247,0.6)",
                                "0 0 0px rgba(168,85,247,0)",
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                  
                  {/* Parallax Content Card */}
                  <motion.div
                    className={cn(
                      getCardClasses(index),
                      "mt-14 lg:mt-0"
                    )}
                    variants={getCardVariants(index)}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-100px" }}
                    style={parallaxIntensity > 0 ? { y: yOffset } : undefined}
                  >
                    <Card className="bg-[#050505]/70 border border-white/10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.02)]">
                      <CardContent className="p-6">
                        {dateFormat === "badge" ? (
                          <div className="flex items-center mb-3">
                            {event.icon || (
                              <Calendar className={cn("h-4 w-4 mr-2", event.color || "text-[#E1E0CC]")} />
                            )}
                            <span
                              className={cn(
                                "text-xs font-mono tracking-wider",
                                event.color || "text-[#E1E0CC]"
                              )}
                            >
                              {event.year}
                            </span>
                          </div>
                        ) : (
                          <p className={cn("text-base font-mono mb-2", event.color || "text-[#E1E0CC]")}>
                            {event.year}
                          </p>
                        )}
                        <h3 className="text-lg font-semibold text-white leading-snug">
                          {event.title}
                        </h3>
                        {event.subtitle && (
                          <p className="text-xs text-white/50 font-sans mt-0.5 mb-3">
                            {event.subtitle}
                          </p>
                        )}
                        <p className="text-xs text-white/70 font-sans leading-relaxed">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
