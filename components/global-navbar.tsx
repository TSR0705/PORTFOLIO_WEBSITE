"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", target: "/" },
  { name: "About", target: "/about" },
  { name: "Projects", target: "/#projects" },
  { name: "Skills", target: "/#skills" },
  { name: "Recognition", target: "/recognition" },
  { name: "Contact", target: "/#contact" },
];

export default function GlobalNavbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run immediately on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enlarge state: Scrolled on home page OR on any subpage
  const isEnlarged = isScrolled || pathname !== "/";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 pointer-events-none flex justify-center">
      <motion.nav
        animate={{
          top: isEnlarged ? 16 : 0,
          paddingTop: isEnlarged ? "14px" : "8px",
          paddingBottom: isEnlarged ? "14px" : "8px",
          paddingLeft: isEnlarged ? "28px" : "16px",
          paddingRight: isEnlarged ? "28px" : "16px",
          borderRadius: isEnlarged ? "9999px" : "0px 0px 24px 24px",
          backgroundColor: isEnlarged ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 1)",
          backdropFilter: isEnlarged ? "blur(12px)" : "none",
          borderWidth: isEnlarged ? "1px" : "0px",
          borderColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: isEnlarged ? "0 10px 30px -10px rgba(0,0,0,0.5)" : "none",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 bg-black"
      >
        {navItems.map((item) => {
          // Check if link is active
          const isActive = pathname === item.target;
          return (
            <Link
              key={item.name}
              href={item.target}
              className="text-[10px] sm:text-xs md:text-sm font-medium transition-colors cursor-pointer select-none"
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
      </motion.nav>
    </header>
  );
}
