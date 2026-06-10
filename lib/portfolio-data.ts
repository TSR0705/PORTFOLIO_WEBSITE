import { projects } from "./projects";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  status: string;
  githubUrl?: string;
  liveUrl?: string;
  longDescription?: string;
  challenge?: string;
  solution?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  award: string;
  organization: string;
  year: string;
  description?: string;
}

export interface AcademicDetails {
  name: string;
  degree: string;
  specialization: string;
  college: string;
  batch: string;
  cgpa: string;
}

export const academicDetails: AcademicDetails = {
  name: "Tanmay Singh",
  degree: "B.Tech CSE",
  specialization: "Cloud Computing",
  college: "SRM Institute of Science and Technology (SRMIST), KTR",
  batch: "2024–2028",
  cgpa: "9.37+",
};

export const skillsData: SkillCategory[] = [
  {
    title: "Backend & Systems",
    skills: ["Node.js", "Express.js", "Java", "Backend architecture", "Full-stack development"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "Jenkins", "AWS (EC2, IAM)", "Git", "Cloud engineering", "DevOps basics"]
  },
  {
    title: "Databases & Libraries",
    skills: ["MongoDB", "MySQL", "React", "Next.js"]
  },
  {
    title: "AI & Experimentation",
    skills: ["AI/agentic systems experimentation", "Automation", "System architecture", "Scalable systems"]
  }
];

export const projectsData: Project[] = projects.map(p => ({
  id: p.id,
  title: p.title,
  description: p.shortDescription,
  techStack: p.techStack,
  category: p.category.toLowerCase().replace(/ & /g, "-").replace(/ \/ /g, "-").replace(/ /g, "-"),
  status: p.status,
  githubUrl: p.githubUrl,
  liveUrl: p.liveUrl || p.demoUrl,
  longDescription: p.fullDescription,
  challenge: p.keyFeatures.join("\n"),
  solution: p.techStack.join(", ")
}));

export const achievementsData: Achievement[] = [
  {
    id: "samsung-prism",
    title: "Samsung PRISM Selected",
    award: "Selected Researcher",
    organization: "Samsung India",
    year: "2026",
    description: "Selected to work on research projects under Samsung PRISM."
  },
  {
    id: "ossome-hacks-winner",
    title: "Ossome Hacks 2.0",
    award: "Best Freshers Team",
    organization: "Ossome Hacks",
    year: "2025"
  },
  {
    id: "srm-java-expo",
    title: "SRM Java Expo",
    award: "3rd Prize",
    organization: "SRMIST",
    year: "2025"
  },
  {
    id: "github-hackathon",
    title: "GitHub Hackathon Winner",
    award: "Winner",
    organization: "GitHub Community",
    year: "2025"
  },
  {
    id: "codenex-dayzero",
    title: "Top 10 @ CodeNex DayZero",
    award: "Top 10 Finalist",
    organization: "CodeNex",
    year: "2025"
  }
];
