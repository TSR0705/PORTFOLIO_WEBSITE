"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", target: "/" },
  { name: "About", target: "/about" },
  { name: "Projects", target: "/projects" },
  { name: "Recognition", target: "/recognition" },
  { name: "Contact", target: "/contact" },
];

export default function GlobalNavbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Hide navbar on 404 page (when pathname is not matching any defined routes)
  const validRoutes = ["/", "/about", "/projects", "/recognition", "/contact"];
  const isProjectDetail = pathname ? pathname.startsWith("/projects/") : false;
  const showNavbar = pathname ? (validRoutes.includes(pathname) || isProjectDetail) : true;

  useEffect(() => {
    let scrollRafId: number | null = null;
    let resizeRafId: number | null = null;

    const handleScroll = () => {
      if (scrollRafId) return;
      scrollRafId = requestAnimationFrame(() => {
        const scrolled = window.scrollY > 50;
        setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
        scrollRafId = null;
      });
    };

    const handleResize = () => {
      if (resizeRafId) return;
      resizeRafId = requestAnimationFrame(() => {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
        if (!mobile) {
          setIsOpen(false);
        }
        resizeRafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    
    // Run immediately on mount
    handleScroll();
    handleResize();

    return () => {
      if (scrollRafId) cancelAnimationFrame(scrollRafId);
      if (resizeRafId) cancelAnimationFrame(resizeRafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Enlarge state: Scrolled on home page OR on any subpage
  const isEnlarged = isScrolled || pathname !== "/";

  if (!showNavbar) return null;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 pointer-events-none flex justify-center px-4">
      <motion.nav
        animate={{
          top: isEnlarged || isMobile ? 16 : 0,
          paddingTop: isMobile ? (isOpen ? "20px" : "12px") : (isEnlarged ? "14px" : "8px"),
          paddingBottom: isMobile ? (isOpen ? "20px" : "12px") : (isEnlarged ? "14px" : "8px"),
          paddingLeft: isMobile ? (isOpen ? "20px" : "16px") : (isEnlarged ? "28px" : "16px"),
          paddingRight: isMobile ? (isOpen ? "20px" : "16px") : (isEnlarged ? "28px" : "16px"),
          borderRadius: isMobile ? (isOpen ? "24px" : "9999px") : (isEnlarged ? "9999px" : "0px 0px 24px 24px"),
          backgroundColor: isEnlarged || isMobile ? "rgba(0, 0, 0, 0.92)" : "rgba(0, 0, 0, 1)",
          backdropFilter: isEnlarged || isMobile ? "blur(16px)" : "none",
          borderWidth: isEnlarged || isMobile ? "1px" : "0px",
          borderColor: "rgba(225, 224, 204, 0.15)",
          boxShadow: isEnlarged || isMobile ? "0 10px 30px -10px rgba(0,0,0,0.8)" : "none",
          width: isMobile ? (isOpen ? "260px" : "130px") : "auto",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex flex-col justify-center items-center overflow-hidden border-[#E1E0CC]/10"
      >
        {isMobile ? (
          <div className="w-full flex flex-col">
            {/* Header row in mobile closed/opened view */}
            <div className="flex items-center justify-between w-full">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#E1E0CC]">
                TS
              </span>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#E1E0CC]/80 uppercase hover:text-white transition-colors py-2 px-1 min-h-[44px] cursor-pointer focus:outline-none"
                aria-label="Toggle menu"
              >
                <span>{isOpen ? "Close" : "Menu"}</span>
                {isOpen ? (
                  <svg className="w-3.5 h-3.5 text-[#E1E0CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-[#E1E0CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu Links */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-1 w-full border-t border-[#E1E0CC]/10 pt-4"
                >
                  {navItems.map((item) => {
                    const isActive = pathname === item.target;
                    return (
                      <Link
                        key={item.name}
                        href={item.target}
                        onClick={() => setIsOpen(false)}
                        className="text-[11px] font-mono uppercase tracking-[0.15em] py-2.5 px-2 min-h-[44px] flex items-center w-full hover:text-white transition-colors rounded-lg active:bg-white/5"
                        style={{ color: isActive ? "#E1E0CC" : "rgba(225, 224, 204, 0.9)" }}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  
                  {/* Resume Action Mobile */}
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      window.dispatchEvent(new CustomEvent("open-resume"));
                    }}
                    className="text-[11px] font-mono uppercase tracking-[0.15em] py-1 text-left block w-full hover:text-white transition-colors cursor-pointer focus:outline-none"
                    style={{ color: "rgba(225, 224, 204, 0.9)" }}
                  >
                    Resume
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* Desktop Menu items */
          <div className="flex items-center gap-6 md:gap-10 lg:gap-14">
            {navItems.map((item) => {
              const isActive = pathname === item.target;
              return (
                <Link
                  key={item.name}
                  href={item.target}
                  className="text-xs md:text-sm font-medium transition-colors cursor-pointer select-none"
                  style={{ color: isActive ? "#E1E0CC" : "rgba(225, 224, 204, 0.9)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "rgba(225, 224, 204, 0.9)";
                  }}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Resume Action Desktop */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-resume"))}
              className="text-xs md:text-sm font-medium transition-colors cursor-pointer select-none focus:outline-none"
              style={{ color: "rgba(225, 224, 204, 0.9)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225, 224, 204, 0.9)")}
            >
              Resume
            </button>
          </div>
        )}
      </motion.nav>
    </header>
  );
}
