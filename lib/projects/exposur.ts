import { Project } from "../projects";

export const exposurProject: Project = {
    id: "exposur",
    title: "EXPOSUR",
    slug: "exposur",
    category: "Cloud / DevOps",
    shortDescription: "A simple web app that displays user environment details such as IP, browser, OS, device type, and location, built while learning Docker.",
    fullDescription: "This was a practical learning project focused on containerization and deployment portability rather than app complexity.",
    techStack: ["Docker", "Containerized deployment", "IP detection API", "Node.js", "Express"],
    keyFeatures: [
      "Detects client IP information",
      "Shows browser and OS details",
      "Identifies device type",
      "Displays location-related information",
      "Demonstrates Dockerized deployment"
    ],
    status: "completed",
    tags: ["Cloud / DevOps", "Security / Reliability"],
    featured: false,
    year: "2024",
    projectType: "Docker Learning Project / Personal Utility App",
    theme: {
      primaryColor: "#E1E0CC",
      accentText: "text-[#E1E0CC]",
      bgGlow: "bg-[#E1E0CC]/5",
      borderMuted: "border-[#E1E0CC]/10",
      borderActive: "hover:border-[#E1E0CC]/40",
      gradient: "from-[#E1E0CC]/10 via-neutral-950 to-neutral-950",
      shadow: "shadow-[#E1E0CC]/20",
      iconName: "UserCheck",
      imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    }
  };
