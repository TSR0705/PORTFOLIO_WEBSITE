"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Highlight = {
  title: string;
  description: string;
};

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

// Inline SVG components for maximum robustness
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const DevfolioIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.828 12.828l-4 4A1.17 1.17 0 0 1 13 17.17v-10.34a1.17 1.17 0 0 1 .828.34l4 4a1.17 1.17 0 0 1 0 1.658zM6.828 6.83a1.17 1.17 0 0 1 1.658 0l4 4a1.17 1.17 0 0 1 0 1.658l-4 4a1.17 1.17 0 0 1-1.658-1.658L9.172 12 6.83 9.658a1.17 1.17 0 0 1 0-1.658z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const highlights: Highlight[] = [
  {
    title: "Academics",
    description:
      "B.Tech CSE (Cloud Computing) at SRMIST Kattankulathur (2024–2028). Focus on distributed systems and cloud architectures.",
  },
  {
    title: "Key Achievements",
    description:
      "Samsung PRISM 2026 Selection · Winner of GitHub OSSome Hacks 2.0 · 3rd Place at SRM Java Project Expo 2025.",
  },
  {
    title: "Core Focus",
    description:
      "AI automation, cloud-native orchestration (Docker/Kubernetes), DevOps (AWS/Redis), and resilient backend architectures.",
  },
];

const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    handle: "Tanmay Singh Rajput",
    href: "https://linkedin.com/in/tanmay-singh-rajput",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    handle: "TSR0705",
    href: "https://github.com/TSR0705",
    icon: GitHubIcon,
  },
  {
    label: "Devfolio",
    handle: "tanmay8246",
    href: "https://devfolio.co/@tanmay8246",
    icon: DevfolioIcon,
  },
  {
    label: "Twitter",
    handle: "@TanmaySinghRa18",
    href: "https://x.com/TanmaySinghRa18",
    icon: TwitterIcon,
  },
];

const listVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export function GlassmorphismPortfolioBlock() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-12 lg:py-20 flex items-center justify-center bg-black">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

      <div className="mx-auto max-w-6xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-2xl md:p-12"
        >
          {/* Glass gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            {/* Left column - Main content */}
            <div className="space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <Badge
                    variant="outline"
                    className="inline-flex items-center gap-2 rounded-full border-[#E1E0CC]/20 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[#E1E0CC] backdrop-blur transition-colors hover:bg-white/10"
                  >
                    About Me
                  </Badge>
                </div>

                <div className="space-y-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
                  >
                    Tanmay Singh, Full Stack Engineer & Cloud Specialist
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-xl text-base leading-relaxed text-white/70"
                  >
                    I’m a Full Stack Engineer specializing in Cloud Computing, scalable backend systems, and intelligent automation platforms. I focus on building production-oriented systems that combine modern web engineering, cloud infrastructure, and AI-driven workflows — with a strong emphasis on architecture, scalability, observability, and long-term maintainability.
                  </motion.p>
                </div>

                {/* Highlights grid */}
                <div className="grid gap-4 sm:grid-cols-1">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      whileHover={{ y: -4 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition-all hover:border-white/20 hover:bg-white/[0.04]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
                      <div className="relative space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#E1E0CC" }}>
                          {item.title}
                        </p>
                        <p className="text-sm leading-relaxed text-white/60">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-1 gap-4 pt-4"
              >
                <Button
                  size="lg"
                  onClick={() => {
                    const projectsSection = document.getElementById("projects");
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.location.href = "/#projects";
                    }
                  }}
                  className="h-12 w-full gap-2 rounded-full px-8 text-sm uppercase tracking-[0.25em] transition-all hover:shadow-lg sm:w-auto cursor-pointer bg-white text-black hover:bg-white/90 border-transparent"
                >
                  Explore Projects
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Right column - Profile card */}
            <div className="relative flex flex-col justify-center">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-[#E1E0CC]/5 via-transparent to-transparent blur-3xl" />
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.01] p-8 backdrop-blur-xl">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar with glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-6"
                  >
                    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E1E0CC]/10 blur-2xl" />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&q=80"
                      alt="Tanmay Singh"
                      className="relative h-32 w-32 rounded-full border border-white/10 object-cover shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-1"
                  >
                    <h3 className="text-2xl font-semibold tracking-tight text-white">
                      Tanmay Singh
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: "#E1E0CC" }}>
                      Cloud & Systems Engineer
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-4 max-w-sm text-sm leading-relaxed text-white/60"
                  >
                    Partnering with future-facing teams to design architectures that feel resilient, scalable, and optimized for automation.
                  </motion.p>
                </div>

                {/* Social links */}
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="mt-8 flex flex-col gap-3"
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        variants={itemVariants}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.985 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {social.label}
                            </p>
                            <p className="text-xs text-white/40">
                              {social.handle}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
