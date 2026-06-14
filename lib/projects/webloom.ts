import { Project } from "../projects";

export const webloomProject: Project = {
    id: "webloom",
    title: "Webloom",
    slug: "webloom",
    category: "Distributed Systems",
    shortDescription: "A continuous web monitoring and change-detection platform that tracks page versions, price changes, and content diffs over time.",
    fullDescription: "This project shows distributed systems thinking, automation, agent design, and monitoring workflows.",
    techStack: ["Node.js", "RabbitMQ", "MongoDB Atlas", "Next.js 14", "Tailwind CSS", "Chart.js / Recharts", "Railway", "Vercel", "GitHub Actions"],
    keyFeatures: [
      "Monitors webpages at scheduled intervals",
      "Stores snapshots and version history",
      "Tracks text, image, link, and price changes",
      "Detects meaningful differences using similarity scoring",
      "Sends alerts via notification pipelines",
      "Runs through a distributed multi-agent architecture"
    ],
    status: "active",
    tags: ["Distributed Systems", "AI / Automation", "Cloud / DevOps"],
    featured: true,
    year: "2025",
    projectType: "Distributed Web Monitoring Platform",
    theme: {
      primaryColor: "#8B5CF6",
      accentText: "text-violet-400",
      bgGlow: "bg-violet-500/5",
      borderMuted: "border-violet-500/10",
      borderActive: "hover:border-violet-500/40",
      gradient: "from-violet-950/15 via-neutral-950 to-neutral-950",
      shadow: "shadow-violet-500/20",
      iconName: "Eye",
      imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    }
  };
