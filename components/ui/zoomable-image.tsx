"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

export default function ZoomableImage({ src, alt, className = "", wrapperClassName = "" }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className={`relative group cursor-zoom-in overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 ${wrapperClassName}`}
      >
        {/* Main Image */}
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01] ${className}`}
        />

      </div>

      {/* Lightbox Portal */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md cursor-zoom-out p-4 md:p-8 animate-fade-in"
        >
          {/* Close button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all border border-white/10 hover:scale-105 cursor-pointer"
            aria-label="Close image"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Large Image Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] rounded-xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl cursor-default"
          >
            <img 
              src={src} 
              alt={alt} 
              className="max-w-full max-h-[80vh] object-contain block"
            />
          </div>

          {/* Description / Caption */}
          {alt && (
            <div className="mt-4 text-center text-xs text-[#E1E0CC]/80 font-mono tracking-wide max-w-xl">
              {alt}
            </div>
          )}
        </div>
      )}
    </>
  );
}
