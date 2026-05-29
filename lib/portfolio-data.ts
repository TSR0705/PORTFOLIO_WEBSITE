export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: 'backend' | 'devops-cloud' | 'fullstack' | 'ai-systems' | 'blockchain-web3';
  status: 'active' | 'hackathon-winner' | 'completed' | 'experimental';
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

export const projectsData: Project[] = [
  {
    id: "webloom",
    title: "Webloom",
    description: "AI-assisted distributed web scraping platform designed for scalable and automated data harvesting.",
    techStack: ["Node.js", "AI Integration", "Distributed Architecture"],
    category: "ai-systems",
    status: "active",
    githubUrl: "https://github.com/TSR0705/webloom",
    liveUrl: "https://webloom.demo.dev",
    longDescription: "Webloom is a state-of-the-art distributed scraping platform. It leverages intelligent routing and proxy rotation alongside AI-based page parser generation, allowing developers to extract clean data from dynamic websites without writing custom selectors.",
    challenge: "Handling complex client-side rendered (CSR) websites that dynamically load content while avoiding IP bans and maintaining high throughput.",
    solution: "Implemented a distributed queue architecture utilizing Redis and Puppeteer clusters with automatic proxy rotation, coupled with LLM APIs to automatically generate robust parsing rules on-the-fly when layout shifts are detected."
  },
  {
    id: "loadlab-deploybot",
    title: "LoadLab + DeployBot",
    description: "A chatbot-controlled DevOps playground helping developers test deployments and verify loads.",
    techStack: ["Docker", "AWS", "DevOps", "Chatbot Interfaces"],
    category: "devops-cloud",
    status: "active",
    githubUrl: "https://github.com/TSR0705/loadlab-deploybot",
    longDescription: "An interactive DevOps sandbox environment that allows developers to trigger containerized deployments, execute load testing (using k6/Locust), and receive real-time analytics reports directly via chat commands.",
    challenge: "Isolating resources inside the playground so developers can spin up test containers without impacting the host system or incurring high AWS costs.",
    solution: "Designed a sandbox architecture using lightweight Docker-in-Docker (DinD) runtimes with strict CPU/memory limits, backed by auto-scaling AWS EC2 groups that terminate inactive resources after 15 minutes."
  },
  {
    id: "samvidhan-setu",
    title: "Samvidhan Setu",
    description: "A digital access platform focused on legal and constitutional literacy.",
    techStack: ["React", "Node.js", "MongoDB"],
    category: "fullstack",
    status: "hackathon-winner",
    githubUrl: "https://github.com/TSR0705/samvidhan-setu",
    liveUrl: "https://samvidhan-setu.org",
    longDescription: "Awarded top honors at a regional hackathon, Samvidhan Setu simplifies complex constitutional jargon and legal procedures into accessible multilingual cards, automated legal document drafting assistants, and interactive quizzes for citizens.",
    challenge: "Translating highly formal legal texts into simple, understandable terms in multiple local languages without losing the critical context and accuracy.",
    solution: "Partnered with law students to curate a custom constitutional database and integrated localized RAG (Retrieval-Augmented Generation) pipelines targeting simplified legal summaries."
  },
  {
    id: "indisure",
    title: "IndiSure",
    description: "AI + Blockchain collaboration for modern automated decentralized insurance workflows.",
    techStack: ["Blockchain", "AI Models", "Next.js"],
    category: "blockchain-web3",
    status: "experimental",
    githubUrl: "https://github.com/TSR0705/indisure",
    longDescription: "IndiSure leverages smart contracts on Solidity to automate claim verification. Real-time satellite or weather APIs feed data into an AI model which determines payouts automatically for crop/travel insurance claims.",
    challenge: "Ensuring off-chain weather data can be trusted when executing on-chain Solidity smart contracts without relying on a centralized authority.",
    solution: "Utilized Chainlink Oracles to securely pull data from verified external APIs, passing it through a multi-signature consensus validator network before execution."
  },
  {
    id: "multiplayer-chess",
    title: "Real-time Multiplayer Chess Game",
    description: "Real-time chess game supporting simultaneous multiplayer lobbies and live matchmaking.",
    techStack: ["Node.js", "WebSockets", "Express.js"],
    category: "backend",
    status: "completed",
    githubUrl: "https://github.com/TSR0705/multiplayer-chess",
    liveUrl: "https://chess.tsr-dev.in",
    longDescription: "A backend-focused project creating a fast chess matchmaking server. Uses WebSockets for low-latency communication, handling move validations on the server to prevent cheating, and maintaining spectator rooms.",
    challenge: "Scaling to support hundreds of concurrent active games without experiencing message lag or out-of-sync board states.",
    solution: "Designed a state synchronization pipeline on top of socket.io and Express, maintaining an in-memory game state cache and optimizing socket namespaces for independent game rooms."
  },
  {
    id: "margsetu",
    title: "MargSetu",
    description: "Roadway mapping and frontend accessibility dashboard.",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    category: "fullstack",
    status: "completed",
    githubUrl: "https://github.com/TSR0705/margsetu",
    longDescription: "MargSetu is an interactive mapping tool that identifies, catalogs, and displays accessibility-friendly routes in municipal areas, helping physically challenged users plan their commutes.",
    challenge: "Gathering and rendering real-time route accessibility information dynamically on top of standard map providers.",
    solution: "Customized Leaflet map layers with community-crowdsourced geo-tagged tags, utilizing a robust PostgreSQL/PostGIS database backend to store spatial coordinates."
  },
  {
    id: "quiz-arena",
    title: "QuizArena",
    description: "Competitive real-time quizzing arena with automated leaderboards.",
    techStack: ["React", "Express.js", "MongoDB"],
    category: "fullstack",
    status: "completed",
    githubUrl: "https://github.com/TSR0705/quiz-arena",
    longDescription: "A gamified multiplayer quiz platform where users compete in timed tests, climb global leaderboards, and create personalized quiz rooms for custom themes.",
    challenge: "Preventing race conditions when multiple players submit answers at the exact same millisecond.",
    solution: "Used atomic MongoDB updates along with Redis locking to secure leaderboard ranks and answer time stamps sequentially."
  },
  {
    id: "lms-platform",
    title: "LMS Platform",
    description: "Learning Management System featuring secure authentication and course progression tracking.",
    techStack: ["Node.js", "Express.js", "MySQL"],
    category: "backend",
    status: "completed",
    githubUrl: "https://github.com/TSR0705/lms-platform",
    longDescription: "A structured educational platform focusing on backend design with clean database schemas. Supports user roles (Student, Instructor), course enrollment, video playback checkpoints, and automated grading.",
    challenge: "Efficiently tracking individual student progress through hundreds of video checkpoints and quizzes without bogging down the database.",
    solution: "Structured normalization inside MySQL tables and optimized indexing on student-course relations, utilizing database transactions to ensure progress is saved atomicly."
  },
  {
    id: "filex",
    title: "FileX",
    description: "A phase-based project workflow file explorer and manager.",
    techStack: ["Next.js", "TypeScript", "Node.js"],
    category: "fullstack",
    status: "active",
    githubUrl: "https://github.com/TSR0705/filex",
    longDescription: "An advanced browser-based explorer enabling users to manage, preview, and organize files tied to project phase sequences. Ideal for software development milestones and document version tracking.",
    challenge: "Providing seamless real-time file tree updates and inline file previews for various file types.",
    solution: "Integrated a custom file watcher on the Node.js server to emit socket events on file mutations, paired with custom file parsers to render Markdown, code, and images in the client."
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
