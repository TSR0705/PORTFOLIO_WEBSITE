"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MorphingSquare } from "@/components/ui/morphing-square"

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

    const handleLoad = () => {
      setLoading(false)
      sessionStorage.setItem("portfolio-preloader-loaded", "true")
      document.body.style.overflow = ""
    }

    if (document.readyState === "complete") {
      const timeout = setTimeout(handleLoad, 400)
      return () => clearTimeout(timeout)
    } else {
      window.addEventListener("load", handleLoad)
      const fallback = setTimeout(handleLoad, 2000)
      return () => {
        window.removeEventListener("load", handleLoad)
        clearTimeout(fallback)
        document.body.style.overflow = ""
      }
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
            transition: { duration: 0.4, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black select-none"
        >
          <MorphingSquare message="Loading..." />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
