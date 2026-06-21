import { Project } from "../projects";

export const exposurProject: Project = {
    id: "exposur",
    title: "EXPOSUR",
    slug: "exposur",
    category: "Cloud / DevOps",
    shortDescription: "A simple web app that displays user environment details such as IP, browser, OS, device type, and location, built while learning Docker.",
    fullDescription: "This was a practical learning project focused on containerization and deployment portability rather than app complexity.",
    techStack: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Redis", "GeoLite2", "Vercel"],
    keyFeatures: [
      "Detects client IP information",
      "Shows browser and OS details",
      "Identifies device type",
      "Displays location-related information",
      "Demonstrates Dockerized deployment"
    ],
    githubUrl: "https://github.com/TSR0705/exposur",
    liveUrl: "https://tryexposur.vercel.app/",
    status: "completed",
    tags: ["Cloud / DevOps", "Security / Reliability"],
    featured: false,
    year: "2024",
    projectType: "Digital Footprint Intelligence & Threat Analysis Platform",
    theme: {
      primaryColor: "#E3FD79",
      accentText: "text-[#E3FD79]",
      bgGlow: "bg-[#E3FD79]/5",
      borderMuted: "border-[#E3FD79]/10",
      borderActive: "hover:border-[#E3FD79]/40",
      gradient: "from-[#E3FD79]/10 via-neutral-950 to-neutral-950",
      shadow: "shadow-[#E3FD79]/20",
      iconName: "Fingerprint",
      imageSrc: "/PROJECTS/EXPOSUR/HERO-SECTION.webp",
    },
    detailedScreenshots: [
      {
        url: "/PROJECTS/EXPOSUR/DASHBOARD-01.webp",
        title: "Environment Telemetry Dashboard",
        description: "Aggregated, real-time client diagnostics detailing user IP geolocation, browser headers, OS architecture, and device parameters in a unified interface.",
        category: "Interface"
      },
      {
        url: "/PROJECTS/EXPOSUR/DASHBOARD-02.webp",
        title: "DNS Diagnostics & Routing Integrity",
        description: "Deeper diagnostic tab highlighting connection status, active headers, and WebRTC proxy validation check logs.",
        category: "Diagnostics"
      }
    ]
  };
