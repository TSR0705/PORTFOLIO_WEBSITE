import { Project } from "../projects";

export const saylixTranslatorProject: Project = {
    id: "saylix-translator",
    title: "SAYLIX Translator",
    slug: "saylix-translator",
    category: "Full Stack",
    shortDescription: "A modern translation app built with text, speech, compare, and history workflows, with accessibility and responsive design at the core.",
    fullDescription: "This project shows product polish, accessibility awareness, and practical full-stack frontend engineering.",
    techStack: ["Next.js", "React", "TypeScript", "Web Speech API", "localStorage", "Responsive UI", "Accessibility-first design"],
    keyFeatures: [
      "Translates text between multiple languages",
      "Supports voice input and speech output",
      "Lets users compare translations across up to 3 languages",
      "Stores translation history locally",
      "Exports translations as Copy, TXT, or JSON",
      "Includes light/dark theme support",
      "Supports keyboard navigation and screen readers"
    ],
    status: "completed",
    tags: ["Full Stack", "Accessibility", "Product Engineering"],
    featured: true,
    year: "2024",
    projectType: "Translation / Accessibility / UX Product",
    theme: {
      primaryColor: "#14B8A6",
      accentText: "text-teal-400",
      bgGlow: "bg-teal-500/5",
      borderMuted: "border-teal-500/10",
      borderActive: "hover:border-teal-500/40",
      gradient: "from-teal-950/15 via-neutral-950 to-neutral-950",
      shadow: "shadow-teal-500/20",
      iconName: "Languages",
      imageSrc: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200&auto=format&fit=crop",
    }
  };
