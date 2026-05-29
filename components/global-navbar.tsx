"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", target: "/" },
  { name: "About", target: "/about" },
  { name: "Projects", target: "/projects" },
  { name: "Skills", target: "/#skills" },
  { name: "Recognition", target: "/recognition" },
  { name: "Contact", target: "/#contact" },
];

export default function GlobalNavbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Hide navbar on 404 page (when pathname is not matching any defined routes)
  const validRoutes = ["/", "/about", "/projects", "/recognition"];
  const isProjectDetail = pathname ? pathname.startsWith("/projects/") : false;
  const showNavbar = pathname ? (validRoutes.includes(pathname) || isProjectDetail) : true;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    // Run immediately on mount
    handleScroll();
    handleResize();

    return () => {
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
                className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-[#E1E0CC]/80 uppercase hover:text-white transition-colors py-1 cursor-pointer focus:outline-none"
                aria-label="Toggle menu"
              >
                <span>{isOpen ? "Close" : "Menu"}</span>
                {isOpen ? (
                  <svg className="w-3 h-3 text-[#E1E0CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3 text-[#E1E0CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="flex flex-col gap-3.5 w-full border-t border-[#E1E0CC]/10 pt-4"
                >
                  {navItems.map((item) => {
                    const isActive = pathname === item.target;
                    return (
                      <Link
                        key={item.name}
                        href={item.target}
                        onClick={() => setIsOpen(false)}
                        className="text-[11px] font-mono uppercase tracking-[0.15em] py-1 text-left block w-full hover:text-white transition-colors"
                        style={{ color: isActive ? "#E1E0CC" : "rgba(225, 224, 204, 0.6)" }}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
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
                  style={{ color: isActive ? "#E1E0CC" : "rgba(225, 224, 204, 0.8)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)";
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </motion.nav>
    </header>
  );
}
