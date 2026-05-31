"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function GlobalFooter() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      // Format as "10:15 PM"
      const timeString = new Date().toLocaleTimeString("en-US", options);
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const directoryLinks = [
    { name: "Home", target: "/" },
    { name: "About", target: "/about" },
    { name: "Projects", target: "/projects" },
    { name: "Recognition", target: "/recognition" },
    { name: "Contact", target: "/contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/tanmay-singh-rajput" },
    { name: "GitHub", url: "https://github.com/TSR0705" },
    { name: "X", url: "https://x.com/TanmaySinghRa18" },
    { name: "LeetCode", url: "https://leetcode.com/u/tanmay_singh_rajput/" },
    { name: "Email", url: "mailto:tanmaysingh8246@gmail.com" },
  ];

  return (
    <footer className="w-full bg-black border-t border-[#E1E0CC]/10 text-white/50 relative z-30 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12 md:gap-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          
          {/* Col 1: Brand and Availability Status */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
            <div>
              <h3 className="text-white font-mono tracking-[0.25em] text-sm uppercase font-semibold">
                Tanmay Singh
              </h3>
              <p className="text-xs text-white/30 mt-1 font-mono uppercase tracking-wider">
                Systems Engineer & Cloud Specialist
              </p>
            </div>
            
            {/* Live Availability Status Card */}
            <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-xl p-3 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono tracking-wider text-white/75 uppercase">
                Available for opportunities
              </span>
            </div>

            {/* Live Time Clock */}
            {time && (
              <div className="text-xs font-mono text-white/30 uppercase tracking-widest">
                Chennai, IN &bull; <span className="text-white/70">{time}</span> (IST)
              </div>
            )}
          </div>

          {/* Col 2: Directory */}
          <div className="col-span-6 md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E1E0CC]/80 font-medium">
              Directory
            </h4>
            <ul className="flex flex-col gap-2.5">
              {directoryLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.target}
                    className="text-sm text-white/50 hover:text-white hover:underline transition-colors duration-300 decoration-[#E1E0CC]/50 decoration-1 underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Socials & Tech Info */}
          <div className="col-span-6 md:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E1E0CC]/80 font-medium">
              Connect
            </h4>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-white hover:underline transition-colors duration-300 decoration-[#E1E0CC]/50 decoration-1 underline-offset-4"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono uppercase tracking-wider text-white/30">
          <div>
            &copy; {new Date().getFullYear()} Tanmay Singh. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <span className="hidden md:inline hover:text-white/50 transition-colors cursor-default">
              Built with Next.js & Tailwind CSS
            </span>
            <button
              onClick={handleBackToTop}
              className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors cursor-pointer group"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <svg
                className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
