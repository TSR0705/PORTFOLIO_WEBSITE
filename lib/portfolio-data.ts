export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: 'backend' | 'devops-cloud' | 'fullstack' | 'ai-systems' | 'blockchain-web3';
  status: 'active' | 'hackathon-winner' | 'completed' | 'experimental';
  githubUrl?: string;
  liveUrl?: string;
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

export const projectsData: Project[] = [
  {
    id: "webloom",
    title: "Webloom",
    description: "AI-assisted distributed web scraping platform designed for scalable and automated data harvesting.",
    techStack: ["Node.js", "AI Integration", "Distributed Architecture"],
    category: "ai-systems",
    status: "active"
  },
  {
    id: "loadlab-deploybot",
    title: "LoadLab + DeployBot",
    description: "A chatbot-controlled DevOps playground helping developers test deployments and verify loads.",
    techStack: ["Docker", "AWS", "DevOps", "Chatbot Interfaces"],
    category: "devops-cloud",
    status: "active"
  },
  {
    id: "samvidhan-setu",
    title: "Samvidhan Setu",
    description: "A digital access platform focused on legal and constitutional literacy.",
    techStack: ["React", "Node.js", "MongoDB"],
    category: "fullstack",
    status: "hackathon-winner"
  },
  {
    id: "indisure",
    title: "IndiSure",
    description: "AI + Blockchain collaboration for modern automated decentralized insurance workflows.",
    techStack: ["Blockchain", "AI Models", "Next.js"],
    category: "blockchain-web3",
    status: "experimental"
  },
  {
    id: "multiplayer-chess",
    title: "Real-time Multiplayer Chess Game",
    description: "Real-time chess game supporting simultaneous multiplayer lobbies and live matchmaking.",
    techStack: ["Node.js", "WebSockets", "Express.js"],
    category: "backend",
    status: "completed"
  },
  {
    id: "margsetu",
    title: "MargSetu",
    description: "Roadway mapping and frontend accessibility dashboard.",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    category: "fullstack",
    status: "completed"
  },
  {
    id: "quiz-arena",
    title: "QuizArena",
    description: "Competitive real-time quizzing arena with automated leaderboards.",
    techStack: ["React", "Express.js", "MongoDB"],
    category: "fullstack",
    status: "completed"
  },
  {
    id: "lms-platform",
    title: "LMS Platform",
    description: "Learning Management System featuring secure authentication and course progression tracking.",
    techStack: ["Node.js", "Express.js", "MySQL"],
    category: "backend",
    status: "completed"
  },
  {
    id: "filex",
    title: "FileX",
    description: "A phase-based project workflow file explorer and manager.",
    techStack: ["Next.js", "TypeScript", "Node.js"],
    category: "fullstack",
    status: "active"
  }
];

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
    title: "Ossome Hacks 2.0 Winner",
    award: "1st Place Winner",
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
