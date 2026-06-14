import { Project } from "../projects";

export const quizArenaProject: Project = {
    id: "quiz-arena",
    title: "QuizArena",
    slug: "quiz-arena",
    category: "Full Stack",
    shortDescription: "An interactive quiz platform built for constitutional awareness and civic education under the Samvidhan Setu initiative.",
    fullDescription: "This project combines educational purpose with strong frontend polish and interactive UX.",
    techStack: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
    keyFeatures: [
      "Provides topic-based quizzes",
      "Supports multiple difficulty settings",
      "Includes authentication and user flows",
      "Gives score reports and result summaries",
      "Uses animated, dark-themed UI design",
      "Promotes constitutional literacy and civic engagement"
    ],
    status: "completed",
    tags: ["Full Stack", "Education", "Civic Education"],
    featured: false,
    year: "2024",
    projectType: "Interactive Quiz Platform / Civic Education Product",
    theme: {
      primaryColor: "#D946EF",
      accentText: "text-fuchsia-400",
      bgGlow: "bg-fuchsia-500/5",
      borderMuted: "border-fuchsia-500/10",
      borderActive: "hover:border-fuchsia-500/40",
      gradient: "from-fuchsia-950/15 via-neutral-950 to-neutral-950",
      shadow: "shadow-fuchsia-500/20",
      iconName: "Trophy",
      imageSrc: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop",
    }
  };
