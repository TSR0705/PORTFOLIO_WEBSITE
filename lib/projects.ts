export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  status: "active" | "completed" | "experimental" | "development";
  tags: string[];
  featured: boolean;
  year: string;
  projectType: string;
}

export const projects: Project[] = [
  {
    id: "openci-runner",
    title: "OpenCI Runner",
    slug: "openci-runner",
    category: "Systems Engineering",
    shortDescription: "A public, secure CI execution demo platform that runs tests and lint checks on public GitHub repositories inside isolated Docker runners.",
    fullDescription: "This project demonstrates honest, secure CI design with isolation, correctness, and verifiable execution instead of fake screenshots or unsafe user code execution.",
    techStack: ["Docker", "Jenkins", "Node.js", "Python", "Sandbox execution model"],
    keyFeatures: [
      "Accepts public GitHub repository URLs",
      "Detects project type automatically",
      "Runs tests and linting in isolated containers",
      "Captures logs and metadata during execution",
      "Publishes verifiable results",
      "Uses Jenkins only for internal platform CI/CD"
    ],
    status: "active",
    tags: ["Systems Engineering", "Cloud / DevOps", "Security / Reliability", "Distributed Systems"],
    featured: true,
    year: "2025",
    projectType: "Secure CI Demo Platform"
  },
  {
    id: "loadlab-deploybot",
    title: "LoadLab + DeployBot",
    slug: "loadlab-deploybot",
    category: "Cloud / DevOps",
    shortDescription: "A chatbot-driven Kubernetes playground that lets users safely trigger real infra operations on a controlled demo application.",
    fullDescription: "This project is a strong showcase of DevOps, system design, concurrency control, and safe infrastructure automation.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Bun", "Docker", "Kubernetes", "Clerk", "@kubernetes/client-node"],
    keyFeatures: [
      "Accepts chatbot commands for Kubernetes operations",
      "Scales demo pods safely",
      "Restarts workloads with strict validation",
      "Prevents race conditions using mutex + queue control",
      "Uses LoadLab as the truth source for runtime behavior",
      "Enforces namespace and deployment restrictions"
    ],
    status: "active",
    tags: ["Cloud / DevOps", "Systems Engineering", "Distributed Systems"],
    featured: true,
    year: "2025",
    projectType: "DevOps Playground / Kubernetes Control System"
  },
  {
    id: "dbms-self-healing",
    title: "AI-Powered DBMS Self-Healing Engine",
    slug: "dbms-self-healing",
    category: "Systems Engineering",
    shortDescription: "A self-healing database operations framework that detects anomalies, scores risk, and routes issues through autonomous or human-reviewed recovery flows.",
    fullDescription: "This is one of my strongest systems projects because it combines database reliability, anomaly detection, automation, safety controls, and dashboard-driven observability.",
    techStack: ["Next.js 14", "Tailwind CSS", "Recharts", "Lucide Icons", "Python", "FastAPI", "SQLAlchemy", "Pydantic", "MySQL 8.0"],
    keyFeatures: [
      "Monitors database health in real time",
      "Detects anomalies using statistical confidence scoring",
      "Routes issues to auto-heal or admin review",
      "Performs surgical healing actions with safety guards",
      "Tracks actions through a real-time dashboard",
      "Learns from outcomes over time"
    ],
    githubUrl: "https://github.com/TSR0705/DBMS_PROJECT_SELF-HEALING-DATABASE",
    liveUrl: "https://dbms-project-self-healing-database.vercel.app",
    status: "active",
    tags: ["Systems Engineering", "AI / Automation", "Security / Reliability"],
    featured: true,
    year: "2024",
    projectType: "Systems / Database Reliability / AI-Assisted Automation"
  },
  {
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
    projectType: "Distributed Web Monitoring Platform"
  },
  {
    id: "codeweave",
    title: "CodeWeave",
    slug: "codeweave",
    category: "Full Stack",
    shortDescription: "A production-grade collaborative coding workspace with real-time text synchronization, file tree organization, and embedded AI coding assistance.",
    fullDescription: "This project shows real-time collaboration, backend orchestration, AI integration, and workspace-level product thinking.",
    techStack: ["React", "Vite", "Tailwind CSS", "Monaco Editor", "Socket.io", "Node.js", "Express", "MongoDB", "Redis", "Gemini API", "Winston logging"],
    keyFeatures: [
      "Synchronizes edits in real time",
      "Manages a multi-file workspace with tabs",
      "Provides a collapsible team member drawer",
      "Integrates Monaco Editor for a full IDE-like experience",
      "Uses Gemini-powered AI assistance for debugging, explanations, and file generation",
      "Includes structured logging and health checks"
    ],
    githubUrl: "https://github.com/TSR0705/AGENTIC-AI-PROJECT",
    liveUrl: "https://codeweave-wheat.vercel.app",
    status: "active",
    tags: ["Full Stack", "AI / Automation", "Distributed Systems", "Product Engineering"],
    featured: true,
    year: "2024",
    projectType: "Collaborative Web Sandbox / AI Coding Workspace"
  },
  {
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
    githubUrl: "https://github.com/TSR0705/LMS-WEBSITE",
    demoUrl: "https://drive.google.com/file/d/103UvOWz5ZBfVC-xi9GxieflEXr6etn9V/view?usp=sharing",
    status: "completed",
    tags: ["Full Stack", "Product Engineering", "Education"],
    featured: true,
    year: "2024",
    projectType: "Learning Management System / Full-Stack Product"
  },
  {
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
    githubUrl: "https://github.com/TSR0705/SAYLIX-TRANSLATOR",
    liveUrl: "https://saylix-translator.vercel.app",
    status: "completed",
    tags: ["Full Stack", "Accessibility", "Product Engineering"],
    featured: true,
    year: "2024",
    projectType: "Translation / Accessibility / UX Product"
  },
  {
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
    githubUrl: "https://github.com/TSR0705/SMART-TAB-ORGANISER",
    status: "completed",
    tags: ["Chrome Extension", "AI / Automation", "Product Engineering"],
    featured: true,
    year: "2024",
    projectType: "Chrome Extension / AI Productivity Tool"
  },
  {
    id: "android-task-manager",
    title: "Android Task Manager App",
    slug: "android-task-manager",
    category: "Android",
    shortDescription: "A modern offline-first task manager Android app built while learning Android development, demonstrating modern app architecture, declarative UI, and local persistence.",
    fullDescription: "This was my starting point in Android development and helped me understand modern Android architecture, UI composition, state management, and local persistence.",
    techStack: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Coroutines", "Flow / StateFlow", "Material 3", "MVVM", "Clean Architecture"],
    keyFeatures: [
      "Create, edit, and manage tasks locally",
      "Store task data offline using Room",
      "Use Jetpack Compose for UI",
      "Follow MVVM + Clean Architecture principles",
      "Use Hilt for dependency injection",
      "Use reactive data flow with Flow / StateFlow"
    ],
    githubUrl: "https://github.com/TSR0705/Android-TaskManager-App",
    liveUrl: "https://github.com/TSR0705/Android-TaskManager-App/releases/tag/v1.0",
    status: "completed",
    tags: ["Android", "Clean Architecture", "MVVM", "Product Engineering"],
    featured: false,
    year: "2024",
    projectType: "Android / Learning Project"
  },
  {
    id: "who-i-am",
    title: "WHO-I-AM",
    slug: "who-i-am",
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
    githubUrl: "https://github.com/TSR0705/WHO-I-AM",
    liveUrl: "https://who-i-am-oidy.onrender.com",
    status: "completed",
    tags: ["Cloud / DevOps", "Security / Reliability"],
    featured: false,
    year: "2024",
    projectType: "Docker Learning Project / Personal Utility App"
  },
  {
    id: "fcfs-scheduler-simulator",
    title: "FCFS Scheduler Simulator",
    slug: "fcfs-scheduler-simulator",
    category: "Desktop App",
    shortDescription: "A JavaFX desktop tool that simulates the First-Come, First-Served CPU scheduling algorithm with real-time visualization and metrics.",
    fullDescription: "This is a strong core CSE project because it demonstrates operating system concepts through a polished simulation interface.",
    techStack: ["Java", "JavaFX", "Maven"],
    keyFeatures: [
      "Adds processes with arrival and burst times",
      "Simulates FCFS scheduling step-by-step or automatically",
      "Shows a dynamic Gantt chart",
      "Calculates waiting time, turnaround time, CPU utilization, and idle time",
      "Displays performance evolution and event logs"
    ],
    githubUrl: "https://github.com/TSR0705/FCFS-SCHEDULING-SIMULATOR",
    demoUrl: "https://www.youtube.com/watch?si=EezB81bGeXrtdo_Q&v=Ppm3BWCN66A&feature=youtu.be",
    status: "completed",
    tags: ["Desktop App", "Systems Engineering", "Education"],
    featured: false,
    year: "2023",
    projectType: "Desktop App / OS Visualization Tool"
  },
  {
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
    githubUrl: "https://github.com/TSR0705/Quiz-Arena",
    liveUrl: "https://quiz-arena-sepia.vercel.app/",
    status: "completed",
    tags: ["Full Stack", "Education", "Civic Education"],
    featured: false,
    year: "2024",
    projectType: "Interactive Quiz Platform / Civic Education Product"
  }
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectsByCategory = (cat: string) => projects.filter((p) => p.category === cat);
export const getProjectsByTag = (tag: string) => projects.filter((p) => p.tags.includes(tag));
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
