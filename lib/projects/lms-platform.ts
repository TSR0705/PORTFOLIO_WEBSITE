import { Project } from "../projects";

export const lmsPlatformProject: Project = {
    id: "lms-platform",
    title: "Modern LMS Platform",
    slug: "lms-platform",
    category: "Full Stack",
    shortDescription: "A modern LMS platform with authentication, payments, content management, and progress tracking for students and creators.",
    fullDescription: "This is a strong product project because it combines CMS, auth, payment flow, responsive UX, and learning workflow management.",
    techStack: ["Next.js 15", "Sanity CMS", "Clerk", "Stripe", "Tailwind CSS", "shadcn/ui", "TypeScript"],
    keyFeatures: [
      "Lets students browse and purchase courses",
      "Tracks course and lesson progress",
      "Supports multiple video providers",
      "Uses Sanity CMS for course content management",
      "Includes role-based access and protected routes",
      "Integrates Stripe for secure payments",
      "Uses Clerk for authentication"
    ],
    status: "completed",
    tags: ["Full Stack", "Product Engineering", "Education"],
    featured: true,
    year: "2024",
    projectType: "Learning Management System / Full-Stack Product",
    theme: {
      primaryColor: "#3B82F6",
      accentText: "text-blue-400",
      bgGlow: "bg-blue-500/5",
      borderMuted: "border-blue-500/10",
      borderActive: "hover:border-blue-500/40",
      gradient: "from-blue-950/15 via-neutral-950 to-neutral-950",
      shadow: "shadow-blue-500/20",
      iconName: "GraduationCap",
      imageSrc: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop",
    }
  };
