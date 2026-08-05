"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, ExternalLink, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    const handleOpen = () => {
      setZoom(100);
      setIsOpen(true);
    };
    window.addEventListener("open-resume", handleOpen);
    return () => window.removeEventListener("open-resume", handleOpen);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 25, 200));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 25, 75));
  const handleResetZoom = () => setZoom(100);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl h-[92vh] sm:h-[88vh] bg-[#080808] border border-[#E1E0CC]/15 rounded-2xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(225,224,204,0.06)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header controls bar */}
            <div className="flex items-center justify-between px-3 sm:px-6 py-3 border-b border-white/10 bg-black/40 backdrop-blur-sm z-10 gap-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E1E0CC] animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-[#E1E0CC] uppercase hidden sm:inline">
                  TANMAY_SINGH_RESUME.pdf
                </span>
                <span className="text-xs font-mono tracking-widest text-[#E1E0CC] uppercase sm:hidden">
                  RESUME.pdf
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-3">
                {/* Zoom Controls */}
                <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1">
                  <button
                    onClick={handleZoomOut}
                    className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                    title="Zoom Out"
                    aria-label="Zoom out"
                  >
                    <ZoomOut size={13} />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="text-[10px] font-mono text-white/80 px-1 hover:text-white transition-colors select-none cursor-pointer"
                    title="Reset Zoom"
                  >
                    {zoom}%
                  </button>
                  <button
                    onClick={handleZoomIn}
                    className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                    title="Zoom In"
                    aria-label="Zoom in"
                  >
                    <ZoomIn size={13} />
                  </button>
                </div>

                {/* Open in New Tab Trigger */}
                <a
                  href="/resume/TANMAY_SINGH_RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/15 text-[11px] font-mono tracking-wider text-white/90 hover:bg-white/15 hover:text-white transition-all duration-300 uppercase"
                  title="Open PDF in new browser tab"
                >
                  <ExternalLink size={12} />
                  <span className="hidden sm:inline">Open Tab</span>
                </a>

                {/* Download PDF Trigger */}
                <a
                  href="/resume/TANMAY_SINGH_RESUME.pdf"
                  download="Tanmay_Singh_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#E1E0CC]/10 border border-[#E1E0CC]/30 text-[11px] font-mono tracking-wider text-[#E1E0CC] hover:bg-[#E1E0CC] hover:text-black transition-all duration-300 uppercase"
                >
                  <Download size={12} />
                  <span className="hidden sm:inline">Download</span>
                </a>

                {/* Close Modal Trigger */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* High-Performance Smooth Scrollable Resume Image Preview */}
            <div className="flex-grow w-full h-full bg-[#0d0d0d] relative overflow-y-auto overflow-x-auto p-2 sm:p-6 md:p-8 flex justify-center items-start scroll-smooth custom-scrollbar">
              <div 
                className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#121212] transition-all duration-200 origin-top flex-shrink-0"
                style={{
                  width: isMobile 
                    ? `${zoom}%` 
                    : `${(820 * zoom) / 100}px`,
                  maxWidth: isMobile ? "none" : "none",
                }}
              >
                <img
                  src="/resume/resume-page-1.webp"
                  alt="Tanmay Singh Resume"
                  className="w-full h-auto object-contain block select-none"
                  loading="eager"
                  decoding="sync"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
