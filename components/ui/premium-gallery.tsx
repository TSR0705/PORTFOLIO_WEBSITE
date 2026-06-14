"use client";

import React, { useState, useEffect } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectTheme } from "@/lib/project-design";

interface ScreenshotItem {
  url: string;
  title: string;
  description: string;
  category: string;
}

interface PremiumGalleryProps {
  screenshots: ScreenshotItem[];
  theme: ProjectTheme;
}

export default function PremiumGallery({ screenshots, theme }: PremiumGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  // Sync index if screenshots list changes
  useEffect(() => {
    setActiveIndex(0);
  }, [screenshots]);

  const activeItem = screenshots[activeIndex] || screenshots[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape" && lightboxOpen) setLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, screenshots.length]);

  return (
    <div className="space-y-6">
      {/* Ambient background glow behind the entire gallery container */}
      <div className="relative rounded-[32px] border border-white/5 bg-zinc-950/20 backdrop-blur-md p-6 lg:p-8 shadow-2xl overflow-hidden">
        
        {/* Dynamic ambient color wash */}
        <div 
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[140px] opacity-100 pointer-events-none -z-10 transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${theme.primaryColor}0f 0%, transparent 70%)`
          }} 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline Navigation (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/35 block mb-2 pl-2">
              Incidents & Views Timeline
            </span>
            
            {/* Styled Vertical Timeline Stepper */}
            <div className="relative border-l border-white/10 pl-5 ml-2.5 py-1 space-y-5 max-h-[360px] lg:max-h-none overflow-y-auto lg:overflow-y-visible scrollbar-thin">
              {screenshots.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.url}
                    onClick={() => setActiveIndex(idx)}
                    className="group relative flex flex-col items-start text-left w-full transition-all duration-300"
                  >
                    {/* Glowing Timeline Indicator Node */}
                    <div 
                      className="absolute -left-[26px] top-1 w-2.5 h-2.5 rounded-full bg-black border-2 transition-all duration-300 group-hover:scale-125" 
                      style={{ 
                        borderColor: isActive ? theme.primaryColor : "rgba(255,255,255,0.2)", 
                        boxShadow: isActive ? `0 0 10px ${theme.primaryColor}80, 0 0 4px ${theme.primaryColor}` : "none"
                      }} 
                    />
                    
                    <span className={`font-mono text-[9px] tracking-wider transition-colors ${isActive ? 'text-white font-bold' : 'text-[#E1E0CC]/35'}`}>
                      STEP 0{idx + 1}
                    </span>
                    <span className={`text-[11px] font-medium font-sans truncate w-full transition-colors ${isActive ? 'text-white' : 'text-[#E1E0CC]/40 group-hover:text-[#E1E0CC]/70'}`}>
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Viewport & Detailed Explanation (9 cols on lg) */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Visual Viewport: Hero Image display */}
            <div 
              className="w-full rounded-[20px] overflow-hidden border border-white/10 bg-black shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative transition-all duration-500 hover:border-white/25 p-1.5 cursor-zoom-in group"
              onClick={() => setLightboxOpen(true)}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[14px]">
                <img
                  src={activeItem.url}
                  alt={activeItem.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.005]"
                />
                
                {/* Sheen/Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none rounded-[14px]" />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-black/8 pointer-events-none rounded-[14px]" />
                
                {/* Floating zoom badge */}
                <div className="absolute bottom-4 right-4 p-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase">
                  <Maximize2 className="w-3.5 h-3.5" />
                  Maximize View
                </div>
              </div>
            </div>

            {/* Content & Narrative Explanation Panel below the image */}
            <div className="p-6 rounded-[20px] border border-white/5 bg-white/[0.01] space-y-4">
              
              {/* Category, slide index and simple arrow pagination triggers */}
              <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-[#E1E0CC]/40 border-b border-white/5 pb-3">
                <span className="uppercase text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                  {activeItem.category}
                </span>
                <div className="flex items-center gap-4">
                  <span>
                    SLIDE {activeIndex + 1} OF {screenshots.length}
                  </span>
                  <div className="flex gap-1 border border-white/10 rounded-lg p-0.5 bg-black/20">
                    <button
                      onClick={handlePrev}
                      className="p-1 text-[#E1E0CC]/60 hover:text-white transition-colors"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-1 text-[#E1E0CC]/60 hover:text-white transition-colors"
                      aria-label="Next Slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* HEADING and detailed descriptions */}
              <div className="space-y-2">
                <h4 className="text-xl sm:text-2xl font-semibold text-white tracking-wide uppercase leading-tight font-sans">
                  {activeItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#E1E0CC]/75 leading-relaxed font-sans font-light pt-1 max-w-4xl">
                  {activeItem.description}
                </p>
              </div>

              {/* Slide Navigation dots indicator */}
              <div className="flex justify-center gap-2 pt-2">
                {screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: idx === activeIndex ? theme.primaryColor : "rgba(255,255,255,0.12)",
                      transform: idx === activeIndex ? "scale(1.2)" : "scale(1)"
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/98 backdrop-blur-lg transition-all duration-300">
          
          {/* Header Toolbar */}
          <div className="absolute top-4 inset-x-6 flex justify-between items-center text-white/50 font-mono text-xs z-10">
            <div>
              <span className="uppercase">{activeItem.category}</span>
              <span className="mx-2 font-sans font-light">|</span>
              <span>{activeIndex + 1} OF {screenshots.length}</span>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 hidden md:block hover:scale-105 active:scale-95"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image content */}
          <div className="max-w-5xl max-h-[80vh] px-12 flex flex-col items-center justify-center space-y-5">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl relative max-w-full">
              <img
                src={activeItem.url}
                alt={activeItem.title}
                className="max-h-[65vh] max-w-full object-contain"
              />
            </div>
            <div className="text-center space-y-1.5 max-w-2xl px-4">
              <h3 className="text-base font-semibold text-white tracking-wide uppercase">
                {activeItem.title}
              </h3>
              <p className="text-xs text-[#E1E0CC]/80 font-normal leading-relaxed font-sans">
                {activeItem.description}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 hidden md:block hover:scale-105 active:scale-95"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Mobile controls */}
          <div className="absolute bottom-6 flex gap-8 md:hidden">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 text-white border border-white/10 active:bg-white/10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 text-white border border-white/10 active:bg-white/10"
              aria-label="Next Image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
