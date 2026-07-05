"use client";

import React, { useState, useEffect } from "react";

export const ProfessionalConnect = () => {
  const [, setHoveredIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const socialPlatforms = [
    {
      name: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      gradient: "from-blue-600 to-blue-400",
      shadowColor: "rgba(59, 130, 246, 0.4)",
      link: "https://www.linkedin.com/in/tanmay-singh-rajput",
      description: "Professional Network"
    },
    {
      name: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      gradient: "from-gray-700 to-gray-500",
      shadowColor: "rgba(75, 85, 99, 0.4)",
      link: "https://github.com/TSR0705",
      description: "Code Repository"
    },
    {
      name: "Twitter / X",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      gradient: "from-slate-800 to-slate-600",
      shadowColor: "rgba(51, 65, 85, 0.4)",
      link: "https://x.com/TanmaySinghRa18",
      description: "Social Updates"
    },
    {
      name: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
        </svg>
      ),
      gradient: "from-purple-600 via-pink-600 to-orange-500",
      shadowColor: "rgba(219, 39, 119, 0.4)",
      link: "https://www.instagram.com/tanmay_singhtrajput?igsh=end4dmpjaWUxaDMx",
      description: "Visual Stories"
    },
    {
      name: "Devfolio",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.828 12.828l-4 4A1.17 1.17 0 0 1 13 17.17v-10.34a1.17 1.17 0 0 1 .828.34l4 4a1.17 1.17 0 0 1 0 1.658zM6.828 6.83a1.17 1.17 0 0 1 1.658 0l4 4a1.17 1.17 0 0 1 0 1.658l-4 4a1.17 1.17 0 0 1-1.658-1.658L9.172 12 6.83 9.658a1.17 1.17 0 0 1 0-1.658z"/>
        </svg>
      ),
      gradient: "from-blue-600 to-indigo-600",
      shadowColor: "rgba(55, 112, 255, 0.4)",
      link: "https://devfolio.co/@tanmay8246",
      description: "Hackathon Portfolio"
    },
    {
      name: "YouTube",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      gradient: "from-red-600 to-red-400",
      shadowColor: "rgba(239, 68, 68, 0.4)",
      link: "https://www.youtube.com/@tanmaysingh6110",
      description: "Video Content"
    },
    {
      name: "LeetCode",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0L2.325 11.2c-.466-.45-.466-1.17 0-1.62l2.697-2.607c.466-.45 1.211-.45 1.677 0l9.403 9.09c.466.45.466 1.17 0 1.62zm1.677-1.62l2.697-2.607c.466-.45.466-1.17 0-1.62L11.073 2.99c-.466-.45-1.211-.45-1.677 0L6.7 5.597c-.466.45-.466 1.17 0 1.62l9.403 9.093c.466.45 1.211.45 1.677 0z" />
          <path d="M22.245 11.39l-2.697-2.607c-.466-.45-1.211-.45-1.677 0L8.468 17.873c-.466.45-.466 1.17 0 1.62l2.697 2.607c.466.45 1.211.45 1.677 0l9.403-9.09c.466-.45.466-1.17 0-1.62z" />
        </svg>
      ),
      gradient: "from-amber-600 to-yellow-500",
      shadowColor: "rgba(245, 158, 11, 0.4)",
      link: "https://leetcode.com/u/tanmay_singh_rajput/",
      description: "Algorithms & Problems"
    },
    {
      name: "Personal Mail",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      gradient: "from-emerald-600 to-teal-500",
      shadowColor: "rgba(16, 185, 129, 0.4)",
      link: "mailto:tanmaysingh8246@gmail.com",
      description: "tanmaysingh8246@gmail.com"
    },
    {
      name: "Academic Mail",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13c-2.76 0-5-2.24-5-5 0-1.25.47-2.4 1.24-3.28L12 11.23l3.76-3.51c.77.88 1.24 2.03 1.24 3.28 0 2.76-2.24 5-5 5z"/>
        </svg>
      ),
      gradient: "from-cyan-600 to-blue-500",
      shadowColor: "rgba(6, 182, 212, 0.4)",
      link: "mailto:ts7583@srmist.edu.in",
      description: "ts7583@srmist.edu.in"
    }
  ];

  return (
    <section id="contact" className="w-full bg-black overflow-hidden relative py-24 md:py-32 scroll-mt-28">
      {/* Cinematic Theme Background */}
      <div className="absolute inset-0">
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        {/* Warm Gold/Beige Ambient Spots */}
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-600/5 rounded-full blur-[128px] animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-[10px] md:text-xs font-mono tracking-[0.35em] text-[#E1E0CC]/60 uppercase block mb-3">
            Connect & Collaborate
          </span>
          
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-[1.05] text-white">
            Get in <span className="font-semibold text-[#E1E0CC]">Touch</span>
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-[#E1E0CC]/40 to-transparent mt-5 mb-6 mx-auto" />
          
          <p className="text-white/40 text-xs md:text-sm font-sans max-w-xl mx-auto leading-relaxed">
            Join my professional networks and directories to explore ongoing code pipelines, hackathons, and research updates.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
          {socialPlatforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Card Container */}
              <div className="relative bg-white/[0.02] backdrop-blur-md rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-white/20 hover:bg-white/[0.04] h-full flex flex-col justify-between">
                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${platform.shadowColor}, transparent 70%)`,
                    filter: "blur(40px)"
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Icon Container */}
                    <div className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${platform.gradient} text-white transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg`}>
                      {platform.icon}
                    </div>
                    
                    {/* Text */}
                    <h3 className="text-white font-semibold text-lg mb-1 transition-colors duration-300">
                      {platform.name}
                    </h3>
                    <p className="text-white/40 text-xs md:text-sm transition-colors duration-300 group-hover:text-white/60 font-sans break-all">
                      {platform.description}
                    </p>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="mt-6 flex items-center text-white/30 group-hover:text-white transition-all duration-300">
                    <span className="text-xs font-mono uppercase tracking-wider group-hover:translate-x-0 transition-all duration-300">
                      Connect
                    </span>
                    <svg 
                      className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>
            </a>
          ))}
        </div>
      </div>


    </section>
  );
};
