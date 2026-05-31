"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-6"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl h-[85vh] bg-[#080808] border border-[#E1E0CC]/15 rounded-2xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(225,224,204,0.06)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header controls bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-sm z-10">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E1E0CC] animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-[#E1E0CC] uppercase">
                  TANMAY_SINGH_RESUME.pdf
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Download PDF Trigger */}
                <a
                  href="/resume/TANMAY_SINGH_RESUME.pdf"
                  download="Tanmay_Singh_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E1E0CC]/5 border border-[#E1E0CC]/20 text-[11px] font-mono tracking-wider text-[#E1E0CC] hover:bg-[#E1E0CC] hover:text-black transition-all duration-300 uppercase"
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

            {/* Embedded IFrame Viewer */}
            <div className="flex-grow w-full h-full bg-[#0a0a0a] relative">
              <iframe
                src="/resume/TANMAY_SINGH_RESUME.pdf"
                className="w-full h-full border-none z-0"
                title="Tanmay Singh Resume"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
