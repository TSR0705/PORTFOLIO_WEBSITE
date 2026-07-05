"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MorphingSquare } from "@/components/ui/morphing-square"

export default function AppPreloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Check session storage to see if preloader already ran in this session
    const hasLoaded = sessionStorage.getItem("portfolio-preloader-loaded")
    if (hasLoaded) {
      setLoading(false)
      return
    }

    // Disable scroll during load
    document.body.style.overflow = "hidden"

    // Simulate progress counting up
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 15) // ~1.5s to reach 100

    // Hide loader after a fixed timeout (e.g., 2.3 seconds)
    const timeout = setTimeout(() => {
      setLoading(false)
      sessionStorage.setItem("portfolio-preloader-loaded", "true")
      document.body.style.overflow = ""
    }, 2300)

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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#E1E0CC] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col items-center justify-center gap-10 z-10">
            {/* Morphing Square Loader */}
            <div className="scale-75 md:scale-100">
              <MorphingSquare className="w-12 h-12 bg-[#E1E0CC]" />
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
                <span className="h-1 w-1 rounded-full bg-[#E1E0CC] animate-pulse" />
                <span>INITIALIZING SYSTEM... {progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
