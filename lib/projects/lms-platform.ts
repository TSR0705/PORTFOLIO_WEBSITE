import { Project } from "../projects";

export const lmsPlatformProject: Project = {
    id: "lms-platform",
    title: "Courselly",
    slug: "lms-platform",
    category: "Full Stack",
    shortDescription: "An enterprise-grade Learning Management System (LMS) built for high performance, secure content delivery, and seamless student enrollment.",
    fullDescription: "Courselly bridges a Headless CMS (Sanity) with Next.js 15 App Router to deliver extremely fast, dynamically rendered pages, utilizing Stripe payment fulfillment and Clerk authentication.",
    techStack: ["Next.js 15", "Sanity CMS", "Clerk", "Stripe", "Tailwind CSS", "TypeScript", "Vercel"],
    keyFeatures: [
      "Dynamic Content Management powered by Sanity CMS",
      "Secure Authentication and route protection via Clerk Middleware",
      "Automated payments and webhooks via Stripe Checkout",
      "Lesson completion tracking for students",
      "Draft content previews using Next.js Draft Mode"
    ],
    status: "completed",
    tags: ["Full Stack", "Product Engineering", "Education"],
    featured: true,
    githubUrl: "https://github.com/TSR0705/LMS-WEBSITE",
    liveUrl: "https://learnwithcoursely.vercel.app/",
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
      imageSrc: "/PROJECTS/LMS-WEBSITE-COURSELLY/home page.webp",
    },
    detailedScreenshots: [
      {
        url: "/PROJECTS/LMS-WEBSITE-COURSELLY/home page.webp",
        title: "Courselly Landing Interface",
        description: "Public landing page showcasing featured courses, descriptions, prices, and direct enrollments.",
        category: "Interface"
      },
      {
        url: "/PROJECTS/LMS-WEBSITE-COURSELLY/course page.webp",
        title: "Interactive Course player",
        description: "Dashboard layout with a course outline navigation drawer, custom video player, and lesson completion checkpoints.",
        category: "Learning View"
      }
    ]
  };
