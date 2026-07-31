import React from "react";
import {
  Code,
  Layers,
  Sparkles,
  Server,
  Globe,
  Database,
  Cpu,
  Shield,
  Zap,
  Activity,
  GitBranch,
  Send,
  Lock,
  CreditCard,
  FileText,
  Smartphone,
  Triangle,
  BarChart3,
  Mic,
  Eye,
  Share2,
  Repeat,
  CheckCircle2,
  Box
} from "lucide-react";

export interface ProjectTheme {
  primaryColor: string;     // Hex color code (e.g. #10B981)
  accentText: string;       // Tailwind class for accented text
  bgGlow: string;           // Tailwind class for glowing backgrounds
  borderMuted: string;      // Tailwind class for subtle borders
  borderActive: string;      // Tailwind class for highlighted borders
  gradient: string;          // Tailwind gradient from top/bottom to transparent
  shadow: string;            // Tailwind shadow color
  iconName: string;          // Lucide icon component name
  imageSrc: string;          // Project banner image URL
}

// Clean 0kb inline SVG icons for brand badges using React.createElement for TS files
const SvgReact = (props: React.SVGProps<SVGSVGElement>) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("circle", { cx: 12, cy: 12, r: 2, fill: "currentColor" }),
    React.createElement("ellipse", { cx: 12, cy: 12, rx: 9, ry: 4 }),
    React.createElement("ellipse", { cx: 12, cy: 12, rx: 9, ry: 4, transform: "rotate(60 12 12)" }),
    React.createElement("ellipse", { cx: 12, cy: 12, rx: 9, ry: 4, transform: "rotate(120 12 12)" })
  );

const SvgNextJs = (props: React.SVGProps<SVGSVGElement>) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...props },
    React.createElement("path", { d: "M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.4 17.5l-5.6-7.8v7.8h-1.8V7.5h1.8l5.6 7.8V7.5h1.8v10z" })
  );

const SvgNode = (props: React.SVGProps<SVGSVGElement>) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...props },
    React.createElement("path", { d: "M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm-1 14.5l-5-2.8v-5.4l5 2.8v5.4zm2 0v-5.4l5-2.8v5.4l-5 2.8z" })
  );

const SvgDocker = (props: React.SVGProps<SVGSVGElement>) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...props },
    React.createElement("path", { d: "M13.98 11.08h2.12v2.13h-2.12zm-3.18 0h2.12v2.13h-2.12zm-3.18 0h2.12v2.13H7.62zm-3.18 0h2.12v2.13H4.44zm9.54-3.18h2.12v2.13h-2.12zm-3.18 0h2.12v2.13h-2.12zm-3.18 0h2.12v2.13H7.62zm6.36-3.18h2.12v2.13h-2.12zM.5 14.26c.86 3.19 3.9 5.48 7.37 5.48 4.41 0 8.04-3.4 8.27-7.79.88-.38 1.93-.19 2.58.46.75.76 1.76.94 2.7.53 0 0-.66-1.57-2.31-2.09-.85-.27-1.74-.08-2.45.39-.06-.5-.22-.98-.47-1.42H.5v4.44z" })
  );

const SvgGithub = (props: React.SVGProps<SVGSVGElement>) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...props },
    React.createElement("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" })
  );

const SvgJava = (props: React.SVGProps<SVGSVGElement>) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...props },
    React.createElement("path", { d: "M4.6 18.5c1.4.1 3.5.2 5.4.2 4.1 0 7.8-.8 7.8-2.6 0-1.3-2.1-2.1-5.1-2.4.6-.7 1.1-1.5 1.4-2.5 3.4.5 5.7 1.8 5.7 3.9 0 3-4.9 4.3-10.2 4.3-2.4 0-4.4-.3-5.7-.6l.7-.3zM12 2C8.7 2 6 4.7 6 8c0 1.8.8 3.4 2.1 4.5-.4.6-.9 1.4-1.4 2.3C5.1 13.5 4 11.4 4 9c0-4.4 3.6-8 8-8s8 3.6 8 8c0 2.4-1.1 4.5-2.7 5.8-.5-.9-1-1.7-1.4-2.3 1.3-1.1 2.1-2.7 2.1-4.5 0-3.3-2.7-6-6-6z" })
  );

const SvgKubernetes = (props: React.SVGProps<SVGSVGElement>) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...props },
    React.createElement("path", { d: "M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.3l6.5 3.8v7.6L12 19.5l-6.5-3.8V8.1L12 4.3z" })
  );

const SvgMongodb = (props: React.SVGProps<SVGSVGElement>) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...props },
    React.createElement("path", { d: "M12 0s-4 4.5-4 10.5c0 4.1 2.5 7.5 4 8.5 1.5-1 4-4.4 4-8.5C16 4.5 12 0 12 0zm0 17c-.8-.7-2-2.8-2-6.5 0-3.5 1.6-6.5 2-7.3.4.8 2 3.8 2 7.3 0 3.7-1.2 5.8-2 6.5z" })
  );

const SvgPython = (props: React.SVGProps<SVGSVGElement>) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...props },
    React.createElement("path", { d: "M11.9 2c-4.4 0-4.1 1.9-4.1 1.9v2h4.2v.6H6.1S4 6.2 4 10.6s1.8 4.2 1.8 4.2h1.1v-1.6s-.1-1.8 1.8-1.8h4.2s1.7 0 1.7-1.6V5.9s.4-3.9-3.5-3.9zm-1.8 1.3c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm1.8 18.7c4.4 0 4.1-1.9 4.1-1.9v-2h-4.2v-.6h5.9s2.1.3 2.1-4.1-1.8-4.2-1.8-4.2h-1.1v1.6s.1 1.8-1.8 1.8h-4.2s-1.7 0-1.7 1.6v3.8s-.4 3.9 3.5 3.9zm1.8-1.3c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" })
  );

export interface SkillDetail {
  logo: string;
  bg: string;
  text: string;
  border?: string;
}

// Detailed brand background, text color, and official SVG logo file mapping
export const skillDetails: Record<string, SkillDetail> = {
  "HTML": { logo: "/logos/html5.svg", bg: "bg-[#E34F26]", text: "text-white" },
  "HTML5": { logo: "/logos/html5.svg", bg: "bg-[#E34F26]", text: "text-white" },
  "CSS": { logo: "/logos/css.svg", bg: "bg-[#1572B6]", text: "text-white" },
  "JavaScript": { logo: "/logos/javascript.svg", bg: "bg-[#F7DF1E]", text: "text-black" },
  "React": { logo: "/logos/react.svg", bg: "bg-[#61DAFB]", text: "text-black" },
  "React.js": { logo: "/logos/react.svg", bg: "bg-[#61DAFB]", text: "text-black" },
  "Next.js": { logo: "/logos/nextdotjs.svg", bg: "bg-[#000000]", text: "text-white", border: "border-white/20" },
  "Next.js 14": { logo: "/logos/nextdotjs.svg", bg: "bg-[#000000]", text: "text-white", border: "border-white/20" },
  "Next.js 15": { logo: "/logos/nextdotjs.svg", bg: "bg-[#000000]", text: "text-white", border: "border-white/20" },
  "Tailwind CSS": { logo: "/logos/tailwindcss.svg", bg: "bg-[#06B6D4]", text: "text-white" },
  
  "Node.js": { logo: "/logos/nodedotjs.svg", bg: "bg-[#339933]", text: "text-white" },
  "Express.js": { logo: "/logos/express.svg", bg: "bg-[#000000]", text: "text-white", border: "border-white/25" },
  "Express": { logo: "/logos/express.svg", bg: "bg-[#000000]", text: "text-white", border: "border-white/25" },
  "REST APIs": { logo: "/logos/fastapi.svg", bg: "bg-[#0052CC]", text: "text-white" },
  "MySQL": { logo: "/logos/mysql.svg", bg: "bg-[#00758F]", text: "text-white" },
  "MySQL 8.0": { logo: "/logos/mysql.svg", bg: "bg-[#00758F]", text: "text-white" },
  "MongoDB": { logo: "/logos/mongodb.svg", bg: "bg-[#47A248]", text: "text-white" },
  "MongoDB Atlas": { logo: "/logos/mongodb.svg", bg: "bg-[#47A248]", text: "text-white" },
  
  "Docker": { logo: "/logos/docker.svg", bg: "bg-[#2496ED]", text: "text-white" },
  "Containerized deployment": { logo: "/logos/docker.svg", bg: "bg-[#2496ED]", text: "text-white" },
  "Kubernetes": { logo: "/logos/kubernetes.svg", bg: "bg-[#326CE5]", text: "text-white" },
  "@kubernetes/client-node": { logo: "/logos/kubernetes.svg", bg: "bg-[#326CE5]", text: "text-white" },
  "Jenkins": { logo: "/logos/jenkins.svg", bg: "bg-[#D24939]", text: "text-white" },
  "GitHub Actions": { logo: "/logos/githubactions.svg", bg: "bg-[#000000]", text: "text-white", border: "border-white/20" },
  "AWS EC2": { logo: "/logos/docker.svg", bg: "bg-[#FF9900]", text: "text-white" },
  "AWS IAM": { logo: "/logos/docker.svg", bg: "bg-[#232F3E]", text: "text-white" },
  "RabbitMQ": { logo: "/logos/socketdotio.svg", bg: "bg-[#FF6600]", text: "text-white" },
  "Grafana": { logo: "/logos/soundcharts.svg", bg: "bg-[#F46800]", text: "text-white" },
  
  "Git": { logo: "/logos/git.svg", bg: "bg-[#F05032]", text: "text-white" },
  "GitHub": { logo: "/logos/github.svg", bg: "bg-[#181717]", text: "text-white", border: "border-white/20" },
  "Postman": { logo: "/logos/postman.svg", bg: "bg-[#FF6C37]", text: "text-white" },
  "PostgreSQL": { logo: "/logos/postgresql.svg", bg: "bg-[#4169E1]", text: "text-white" },
  "GeoLite2": { logo: "/logos/homeassistant.svg", bg: "bg-[#3182CE]", text: "text-white" },
  "Python": { logo: "/logos/python.svg", bg: "bg-[#3776AB]", text: "text-white" },
  "Python 3.11+": { logo: "/logos/python.svg", bg: "bg-[#3776AB]", text: "text-white" },
  "Java": { logo: "/logos/apachemaven.svg", bg: "bg-[#B07219]", text: "text-white" },
  "JavaFX": { logo: "/logos/apachemaven.svg", bg: "bg-[#B07219]", text: "text-white" },
  "C++": { logo: "/logos/c.svg", bg: "bg-[#00599C]", text: "text-white" },
  "C": { logo: "/logos/c.svg", bg: "bg-[#00599C]", text: "text-white" },
  "Hugging Face": { logo: "/logos/googlegemini.svg", bg: "bg-[#FFD21E]", text: "text-black" },
  "Sentence Transformers": { logo: "/logos/googlegemini.svg", bg: "bg-[#FFD21E]", text: "text-black" },

  // Project Stack Mappings
  "TypeScript": { logo: "/logos/typescript.svg", bg: "bg-[#3178C6]", text: "text-white" },
  "Bun": { logo: "/logos/vite.svg", bg: "bg-[#FBF0DF]", text: "text-black", border: "border-[#E8D4BA]" },
  "Clerk": { logo: "/logos/clerk.svg", bg: "bg-[#6C47FF]", text: "text-white" },
  "Stripe": { logo: "/logos/stripe.svg", bg: "bg-[#635BFF]", text: "text-white" },
  "Solidity": { logo: "/logos/c.svg", bg: "bg-[#363636]", text: "text-white" },
  "FastAPI": { logo: "/logos/fastapi.svg", bg: "bg-[#009688]", text: "text-white" },
  "Maven": { logo: "/logos/apachemaven.svg", bg: "bg-[#C71A36]", text: "text-white" },
  "Kotlin": { logo: "/logos/c.svg", bg: "bg-[#7F52FF]", text: "text-white" },
  "Vite": { logo: "/logos/vite.svg", bg: "bg-[#646CFF]", text: "text-white" },
  "Framer Motion": { logo: "/logos/lucide.svg", bg: "bg-[#0055FF]", text: "text-white" },
  "React Router": { logo: "/logos/react.svg", bg: "bg-[#CA4245]", text: "text-white" },
  "Redis": { logo: "/logos/redis.svg", bg: "bg-[#DC382D]", text: "text-white" },
  "Socket.io": { logo: "/logos/socketdotio.svg", bg: "bg-[#010101]", text: "text-white", border: "border-white/20" },
  "Gemini API": { logo: "/logos/googlegemini.svg", bg: "bg-[#8E75C8]", text: "text-white" },
  "Sanity CMS": { logo: "/logos/sanity.svg", bg: "bg-[#F03E2F]", text: "text-white" },
  "Chrome Extension Manifest V3": { logo: "/logos/vercel.svg", bg: "bg-[#4285F4]", text: "text-white" },
  "Jetpack Compose": { logo: "/logos/c.svg", bg: "bg-[#3DDC84]", text: "text-black" },
  "Material 3": { logo: "/logos/css.svg", bg: "bg-[#757575]", text: "text-white" },
  "Railway": { logo: "/logos/vercel.svg", bg: "bg-[#131313]", text: "text-white", border: "border-white/20" },
  "Vercel": { logo: "/logos/vercel.svg", bg: "bg-[#000000]", text: "text-white", border: "border-white/20" },
  "Lucide Icons": { logo: "/logos/lucide.svg", bg: "bg-[#F97316]", text: "text-white" },
  "SQLAlchemy": { logo: "/logos/sqlalchemy.svg", bg: "bg-[#E2E8F0]", text: "text-black" },
  "Pydantic": { logo: "/logos/pydantic.svg", bg: "bg-[#E92063]", text: "text-white" },
  "shadcn/ui": { logo: "/logos/nextdotjs.svg", bg: "bg-[#000000]", text: "text-white", border: "border-white/20" },
  "Recharts": { logo: "/logos/soundcharts.svg", bg: "bg-[#2563EB]", text: "text-white" },
  "Chart.js / Recharts": { logo: "/logos/soundcharts.svg", bg: "bg-[#2563EB]", text: "text-white" },

  // Newly mapped custom tags
  "Sandbox execution model": { logo: "/logos/docker.svg", bg: "bg-[#1E1F22]", text: "text-white" },
  "Monaco Editor": { logo: "/logos/typescript.svg", bg: "bg-[#007ACC]", text: "text-white" },
  "Winston logging": { logo: "/logos/nodedotjs.svg", bg: "bg-[#1C1C1E]", text: "text-white/90", border: "border-white/10" },
  "Web Speech API": { logo: "/logos/javascript.svg", bg: "bg-[#0070F3]", text: "text-white" },
  "localStorage": { logo: "/logos/javascript.svg", bg: "bg-[#F39C12]", text: "text-white" },
  "Responsive UI": { logo: "/logos/css.svg", bg: "bg-[#3498DB]", text: "text-white" },
  "Accessibility-first design": { logo: "/logos/html5.svg", bg: "bg-[#2ECC71]", text: "text-white" },
  "TF-IDF Vectorizer": { logo: "/logos/python.svg", bg: "bg-[#8E44AD]", text: "text-white" },
  "DBSCAN": { logo: "/logos/python.svg", bg: "bg-[#1ABC9C]", text: "text-white" },
  "Room": { logo: "/logos/c.svg", bg: "bg-[#4285F4]", text: "text-white" },
  "Hilt": { logo: "/logos/c.svg", bg: "bg-[#00E676]", text: "text-black" },
  "Coroutines": { logo: "/logos/c.svg", bg: "bg-[#7F52FF]", text: "text-white" },
  "Flow / StateFlow": { logo: "/logos/c.svg", bg: "bg-[#3F51B5]", text: "text-white" },
  "MVVM": { logo: "/logos/c.svg", bg: "bg-[#9C27B0]", text: "text-white" },
  "Clean Architecture": { logo: "/logos/c.svg", bg: "bg-[#607D8B]", text: "text-white" },
  "IP detection API": { logo: "/logos/postman.svg", bg: "bg-[#E74C3C]", text: "text-white" }
};

export const DEFAULT_THEME: ProjectTheme = {
  primaryColor: "#E1E0CC",
  accentText: "text-[#E1E0CC]",
  bgGlow: "bg-[#E1E0CC]/5",
  borderMuted: "border-[#E1E0CC]/10",
  borderActive: "hover:border-[#E1E0CC]/40",
  gradient: "from-[#E1E0CC]/10 via-neutral-950 to-neutral-950",
  shadow: "shadow-[#E1E0CC]/20",
  iconName: "Code",
  imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
};
