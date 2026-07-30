"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GradientTracing } from "@/components/ui/gradient-tracing"

export default function AppPreloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Check session storage or reduced motion preference
    const hasLoaded = typeof window !== "undefined" && sessionStorage.getItem("portfolio-preloader-loaded")
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (hasLoaded || prefersReducedMotion) {
      setLoading(false)
      return
    }

    // Disable scroll during load
    document.body.style.overflow = "hidden"

    // Fast progress count for quick LCP
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 5
      })
    }, 25) // ~500ms to reach 100

    // Hide loader after short duration (650ms)
    const timeout = setTimeout(() => {
      setLoading(false)
      sessionStorage.setItem("portfolio-preloader-loaded", "true")
      document.body.style.overflow = ""
    }, 650)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timeout)
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -20,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#090909] select-none"
        >
          {/* Subtle warm glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#F1C40F] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col items-center justify-center gap-6 z-10">
            {/* The Lightning Bolt Gradient Tracing component */}
            <div className="scale-75 md:scale-100">
              <GradientTracing
                width={200}
                height={200}
                path="M100,0 L75,75 L125,75 L50,200 L100,100 L50,100 L100,0"
                gradientColors={["#F1C40F", "#F1C40F", "#E67E22"]}
                baseColor="#262624"
                strokeWidth={3}
                animationDuration={1.8}
              />
            </div>

            {/* Premium letters fading in */}
            <div className="flex flex-col items-center gap-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em]"
                style={{ color: "#E1E0CC" }}
              >
                TANMAY SINGH
              </motion.span>
              
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-white/40">
                <span className="h-1 w-1 rounded-full bg-[#F1C40F] animate-pulse" />
                <span>INITIALIZING SYSTEM... {progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
