import { Button } from "@/components/ui/button";

const orbitRings = [
  // Ring 1 (Inner - 4 icons)
  [
    { logo: "/logos/react.svg", name: "React", color: "#61DAFB" },
    { logo: "/logos/nextdotjs.svg", name: "Next.js", color: "#FFFFFF" },
    { logo: "/logos/typescript.svg", name: "TypeScript", color: "#3178C6" },
    { logo: "/logos/nodedotjs.svg", name: "Node.js", color: "#339933" },
  ],
  // Ring 2 (Middle - 5 icons)
  [
    { logo: "/logos/docker.svg", name: "Docker", color: "#2496ED" },
    { logo: "/logos/kubernetes.svg", name: "Kubernetes", color: "#326CE5" },
    { logo: "/logos/mongodb.svg", name: "MongoDB", color: "#47A248" },
    { logo: "/logos/postgresql.svg", name: "PostgreSQL", color: "#4169E1" },
    { logo: "/logos/python.svg", name: "Python", color: "#3776AB" },
  ],
  // Ring 3 (Outer - 6 icons)
  [
    { logo: "/logos/tailwindcss.svg", name: "Tailwind CSS", color: "#06B6D4" },
    { logo: "/logos/git.svg", name: "Git", color: "#F05032" },
    { logo: "/logos/github.svg", name: "GitHub", color: "#FFFFFF" },
    { logo: "/logos/jenkins.svg", name: "Jenkins", color: "#D24939" },
    { logo: "/logos/postman.svg", name: "Postman", color: "#FF6C37" },
    { logo: "/logos/redis.svg", name: "Redis", color: "#DC382D" },
  ],
];

export default function FeatureSection() {
  const orbitGap = 7; // rem between orbits

  const handleProjectsScroll = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#projects";
    }
  };

  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto my-20 px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between min-h-[35rem] border border-white/10 bg-black overflow-hidden rounded-[2.5rem] shadow-[inset_0_2px_4px_rgba(255,255,255,0.03)]">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay rounded-[2.5rem]" />
      
      {/* Cinematic theme lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#E1E0CC]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Left side: Heading and Text */}
      <div className="w-full md:w-1/2 z-10 py-10 md:py-0 flex flex-col justify-center space-y-6">
        <div>
          <span className="inline-flex items-center rounded-full border border-[#E1E0CC]/20 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[#E1E0CC] mb-4">
            System Infrastructure
          </span>
          <h2 className="text-4xl sm:text-6xl font-light tracking-tighter leading-tight text-white">
            Build your ideas <span className="font-medium text-[#E1E0CC]">with scale.</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-lg text-sm sm:text-base leading-relaxed font-sans">
            Leveraging containerized orchestrations, highly resilient backend workflows, and optimized cloud architectures to build production-grade automation systems.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={handleProjectsScroll}
            className="bg-white text-black hover:bg-white/90 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-[0.15em] transition-transform active:scale-95 cursor-pointer shadow-lg"
          >
            Explore Projects
          </Button>
          <Button
            variant="outline"
            onClick={handleContactScroll}
            className="border border-white/15 bg-transparent hover:bg-white/10 hover:border-white/30 text-white px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-[0.15em] transition-transform active:scale-95 cursor-pointer"
          >
            Let's Connect
          </Button>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/2 */}
      <div className="relative w-full md:w-1/2 h-[20rem] md:h-full flex items-center justify-center md:justify-start overflow-hidden">
        <div className="relative w-[38rem] h-[38rem] translate-y-[20%] md:translate-y-0 md:translate-x-[40%] flex items-center justify-center">
          {/* Center Circle */}
          <div className="w-20 h-20 rounded-full bg-neutral-900 border border-[#E1E0CC]/20 shadow-2xl flex items-center justify-center z-20">
            <div
              className="w-10 h-10 flex-shrink-0"
              style={{
                backgroundColor: "#61DAFB",
                maskImage: "url(/logos/react.svg)",
                WebkitMaskImage: "url(/logos/react.svg)",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
              role="img"
              aria-label="React logo"
            />
          </div>

          {/* Generate Orbits */}
          {orbitRings.map((ring, orbitIdx) => {
            const size = `${8 + orbitGap * (orbitIdx + 1)}rem`;
            const angleStep = (2 * Math.PI) / ring.length;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border border-dotted border-white/20"
                style={{
                  width: size,
                  height: size,
                  animation: `orbit-spin ${15 + orbitIdx * 8}s linear infinite`,
                }}
              >
                {ring.map((cfg, iconIdx) => {
                  const angle = iconIdx * angleStep;
                  const x = (50 + 50 * Math.cos(angle)).toFixed(4);
                  const y = (50 + 50 * Math.sin(angle)).toFixed(4);

                  return (
                    <div
                      key={iconIdx}
                      className="absolute bg-neutral-900/90 border border-white/15 rounded-full p-2.5 shadow-lg transition-all duration-300 hover:scale-115 hover:border-white/40 cursor-default"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      title={cfg.name}
                    >
                      <div
                        className="w-6 h-6 flex-shrink-0 relative z-10"
                        style={{
                          backgroundColor: cfg.color,
                          maskImage: `url(${cfg.logo})`,
                          WebkitMaskImage: `url(${cfg.logo})`,
                          maskSize: "contain",
                          WebkitMaskSize: "contain",
                          maskRepeat: "no-repeat",
                          WebkitMaskRepeat: "no-repeat",
                          maskPosition: "center",
                          WebkitMaskPosition: "center",
                        }}
                        role="img"
                        aria-label={`${cfg.name} logo`}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes orbit-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
