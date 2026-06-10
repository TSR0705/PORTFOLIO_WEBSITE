"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";
import { createPortal } from "react-dom";

export interface Certificate {
  id: string;
  name: string;
  src: string;
}

const certificates: Certificate[] = [
  { id: "adobe", name: "Adobe India Hackathon", src: "/Participation_Certificate/ADOBE_INDIA_HACKATHON.webp" },
  { id: "altruisty", name: "Altruisty Hackathon", src: "/Participation_Certificate/ALTRUISTY_HACKATHON.webp" },
  { id: "devtrails", name: "DevTrails Hackathon", src: "/Participation_Certificate/DEVTRAILS_HACKATHON.webp" },
  { id: "ideathon", name: "Ideathon Pokiverse", src: "/Participation_Certificate/IDEATHON_POKIVERSE.webp" },
  { id: "impact", name: "Impact-AIThon", src: "/Participation_Certificate/Impact-AIThon.webp" },
  { id: "java-expo", name: "Java Project Expo 2025", src: "/achivements_pics/JAVA_PROJECT_EXPO_CERTIFICATE.webp" },
  { id: "nptel-dbms", name: "NPTEL DBMS", src: "/Participation_Certificate/NPTEL_DBMS.webp" },
  { id: "nptel", name: "NPTEL Java", src: "/Participation_Certificate/NPTEL_JAVA.webp" },
  { id: "ossome-2-app", name: "Ossome Hacks 2.0 Appreciation", src: "/achivements_pics/OSSOME_HACKS_2.0_GITHUB_HACKATHON_APPRECIATION.webp" },
  { id: "ossome-2", name: "Ossome Hacks 2.0 Winner", src: "/achivements_pics/OSSOME_HACKS_2.0_GITHUB_HACKATHON_RECOGNITION_CERTIFICATE.webp" },
  { id: "ossome", name: "Ossome Hacks 3.0", src: "/Participation_Certificate/OSSOME_HACKS_3.0.webp" },
  { id: "devsecops", name: "DevSecOps Workshop", src: "/Participation_Certificate/WORKSHOP_PARTICIPATION_DevSecOps.webp" },
];

export function CertificateGallery() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [mounted, setMounted] = useState(false);

  // Set mounted status on client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCert]);

  // Duplicate array for seamless infinite marquee
  const marqueeItems = [...certificates, ...certificates];

  return (
    <div className="w-full py-12 relative flex flex-col items-center overflow-hidden">
      <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-8 self-start">
        Event Certificates
      </h3>

      {/* CSS for Marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); } 
        }
        .animate-scroll-marquee {
          animation: scrollMarquee 45s linear infinite;
        }
        .marquee-wrapper:hover .animate-scroll-marquee {
          animation-play-state: paused;
        }
      `}} />

      {/* Marquee Wrapper */}
      <div className="w-full relative marquee-wrapper flex items-center">
        {/* Left/Right Fade Gradients for smooth entrance/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 px-4 w-max animate-scroll-marquee">
          {marqueeItems.map((cert, index) => (
            <motion.div
              key={`${cert.id}-${index}`}
              className="relative group cursor-pointer flex-shrink-0"
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Card Container - padded to float certificate nicely inside */}
              <div className="w-[280px] h-[200px] md:w-[420px] md:h-[290px] rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0c]/90 relative flex items-center justify-center p-4 transition-all duration-500 group-hover:border-[#E1E0CC]/30 group-hover:shadow-[0_0_30px_rgba(225,224,204,0.05)]">
                
                {/* Blurred Background to match the certificate colors */}
                <div className="absolute inset-0 opacity-20 blur-lg scale-110 transition-transform duration-700 group-hover:scale-120">
                  <Image
                    src={cert.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>

                {/* Subtle glassmorphic overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />

                {/* Contained Certificate Image - prevents any text or design cropping */}
                <div className="relative w-full h-full z-10 rounded-lg overflow-hidden shadow-lg border border-white/5">
                  <Image
                    src={cert.src}
                    alt={cert.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 280px, 420px"
                  />
                </div>
                
                {/* Overlay on hover: Slide up elegant caption */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center pb-6">
                  <Maximize2 className="w-5 h-5 text-[#E1E0CC] mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0" />
                  <span className="text-[#E1E0CC] text-xs md:text-sm font-medium tracking-wide font-sans text-center px-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 translate-y-4 group-hover:translate-y-0">
                    {cert.name}
                  </span>
                </div>
              </div>
              
              {/* Glow effect beneath */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#E1E0CC]/0 group-hover:bg-[#E1E0CC]/10 blur-xl rounded-full transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal rendered via Portal to break out of stacking context */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-12"
              onClick={() => setSelectedCert(null)}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.2 }}
                className="absolute top-6 right-6 md:top-8 md:right-8 z-[10000] w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:text-[#E1E0CC] transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCert(null);
                }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Modal Content Wrapper */}
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-6xl h-[70vh] md:h-[78vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image Container */}
                <div className="relative w-full flex-grow">
                  <Image
                    src={selectedCert.src}
                    alt={selectedCert.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    priority
                  />
                </div>
                
                {/* Title Bar outside the image */}
                <div className="mt-6 bg-[#0c0c0c]/80 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
                  <h4 className="text-[#E1E0CC] text-sm md:text-base font-medium tracking-wide">
                    {selectedCert.name}
                  </h4>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
