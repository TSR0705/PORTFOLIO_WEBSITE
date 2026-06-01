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
    projectType: "Learning Management System / Full-Stack Product"
  };
