import { Project } from "../projects";

export const smartTabOrganizerProject: Project = {
    id: "smart-tab-organizer",
    title: "Smart Tab Organizer",
    slug: "smart-tab-organizer",
    category: "Chrome Extension",
    shortDescription: "A Chrome extension that automatically groups browser tabs into semantic categories using lightweight offline AI.",
    fullDescription: "This project combines browser automation, lightweight AI, offline processing, and clean product UX.",
    techStack: ["Chrome Extension Manifest V3", "FastAPI", "Python 3.11+", "Sentence Transformers", "TF-IDF Vectorizer", "DBSCAN", "Docker", "Railway"],
    keyFeatures: [
      "Clusters open browser tabs into meaningful categories",
      "Works offline with local embeddings",
      "Uses TF-IDF and heuristic fallback classification",
      "Supports 'Close All' actions for tab groups",
      "Uses a Chrome extension + FastAPI architecture"
    ],
    status: "completed",
    tags: ["Chrome Extension", "AI / Automation", "Product Engineering"],
    featured: true,
    year: "2024",
    projectType: "Chrome Extension / AI Productivity Tool",
    theme: {
      primaryColor: "#0EA5E9",
      accentText: "text-sky-400",
      bgGlow: "bg-sky-500/5",
      borderMuted: "border-sky-500/10",
      borderActive: "hover:border-sky-500/40",
      gradient: "from-sky-950/15 via-neutral-950 to-neutral-950",
      shadow: "shadow-sky-500/20",
      iconName: "Layers",
      imageSrc: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop",
    }
  };
