"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import RippleWaveLoader from "@/components/ui/demo"

export default function AppPreloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check session storage to see if preloader already ran in this session
    const hasLoaded = sessionStorage.getItem("portfolio-preloader-loaded")
    if (hasLoaded) {
      setLoading(false)
      return
    }

    // Disable scroll during load
    document.body.style.overflow = "hidden"

    // Hide loader after a fixed timeout (e.g., 2.3 seconds)
    const timeout = setTimeout(() => {
      setLoading(false)
      sessionStorage.setItem("portfolio-preloader-loaded", "true")
      document.body.style.overflow = ""
    }, 2300)

    return () => {
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


          <div className="flex flex-col items-center justify-center gap-6 z-10">
            <RippleWaveLoader />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
