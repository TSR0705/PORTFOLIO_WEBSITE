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

export const PROJECT_THEMES: Record<string, ProjectTheme> = {
  "openci-runner": {
    primaryColor: "#10B981",
    accentText: "text-emerald-400",
    bgGlow: "bg-emerald-500/5",
    borderMuted: "border-emerald-500/10",
    borderActive: "hover:border-emerald-500/40",
    gradient: "from-emerald-950/15 via-neutral-950 to-neutral-950",
    shadow: "shadow-emerald-500/20",
    iconName: "Terminal",
    imageSrc: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
  },
  "loadlab-deploybot": {
    primaryColor: "#06B6D4",
    accentText: "text-cyan-400",
    bgGlow: "bg-cyan-500/5",
    borderMuted: "border-cyan-500/10",
    borderActive: "hover:border-cyan-500/40",
    gradient: "from-cyan-950/15 via-neutral-950 to-neutral-950",
    shadow: "shadow-cyan-500/20",
    iconName: "Bot",
    imageSrc: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop",
  },
  "dbms-self-healing": {
    primaryColor: "#F43F5E",
    accentText: "text-rose-400",
    bgGlow: "bg-rose-500/5",
    borderMuted: "border-rose-500/10",
    borderActive: "hover:border-rose-500/40",
    gradient: "from-rose-950/15 via-neutral-950 to-neutral-950",
    shadow: "shadow-rose-500/20",
    iconName: "Database",
    imageSrc: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1200&auto=format&fit=crop",
  },
  "webloom": {
    primaryColor: "#8B5CF6",
    accentText: "text-violet-400",
    bgGlow: "bg-violet-500/5",
    borderMuted: "border-violet-500/10",
    borderActive: "hover:border-violet-500/40",
    gradient: "from-violet-950/15 via-neutral-950 to-neutral-950",
    shadow: "shadow-violet-500/20",
    iconName: "Eye",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  },
  "codeweave": {
    primaryColor: "#F59E0B",
    accentText: "text-amber-400",
    bgGlow: "bg-amber-500/5",
    borderMuted: "border-amber-500/10",
    borderActive: "hover:border-amber-500/40",
    gradient: "from-amber-950/15 via-neutral-950 to-neutral-950",
    shadow: "shadow-amber-500/20",
    iconName: "Code",
    imageSrc: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
  },
  "lms-platform": {
    primaryColor: "#3B82F6",
    accentText: "text-blue-400",
    bgGlow: "bg-blue-500/5",
    borderMuted: "border-blue-500/10",
    borderActive: "hover:border-blue-500/40",
    gradient: "from-blue-950/15 via-neutral-950 to-neutral-950",
    shadow: "shadow-blue-500/20",
    iconName: "GraduationCap",
    imageSrc: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop",
  },
  "saylix-translator": {
    primaryColor: "#14B8A6",
    accentText: "text-teal-400",
    bgGlow: "bg-teal-500/5",
    borderMuted: "border-teal-500/10",
    borderActive: "hover:border-teal-500/40",
    gradient: "from-teal-950/15 via-neutral-950 to-neutral-950",
    shadow: "shadow-teal-500/20",
    iconName: "Languages",
    imageSrc: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200&auto=format&fit=crop",
  },
  "smart-tab-organizer": {
    primaryColor: "#0EA5E9",
    accentText: "text-sky-400",
    bgGlow: "bg-sky-500/5",
    borderMuted: "border-sky-500/10",
    borderActive: "hover:border-sky-500/40",
    gradient: "from-sky-950/15 via-neutral-950 to-neutral-950",
    shadow: "shadow-sky-500/20",
    iconName: "Layers",
    imageSrc: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop",
  },
  "android-task-manager": {
    primaryColor: "#22C55E",
    accentText: "text-green-400",
    bgGlow: "bg-green-500/5",
    borderMuted: "border-green-500/10",
    borderActive: "hover:border-green-500/40",
    gradient: "from-green-950/15 via-neutral-950 to-neutral-950",
    shadow: "shadow-green-500/20",
    iconName: "Smartphone",
    imageSrc: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1200&auto=format&fit=crop",
  },
  "who-i-am": {
    primaryColor: "#E1E0CC",
    accentText: "text-[#E1E0CC]",
    bgGlow: "bg-[#E1E0CC]/5",
    borderMuted: "border-[#E1E0CC]/10",
    borderActive: "hover:border-[#E1E0CC]/40",
    gradient: "from-[#E1E0CC]/10 via-neutral-950 to-neutral-950",
    shadow: "shadow-[#E1E0CC]/20",
    iconName: "UserCheck",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  },
  "fcfs-scheduler-simulator": {
    primaryColor: "#F97316",
    accentText: "text-orange-400",
    bgGlow: "bg-orange-500/5",
    borderMuted: "border-orange-500/10",
    borderActive: "hover:border-orange-500/40",
    gradient: "from-orange-950/15 via-neutral-950 to-neutral-950",
    shadow: "shadow-orange-500/20",
    iconName: "Cpu",
    imageSrc: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop",
  },
  "quiz-arena": {
    primaryColor: "#D946EF",
    accentText: "text-fuchsia-400",
    bgGlow: "bg-fuchsia-500/5",
    borderMuted: "border-fuchsia-500/10",
    borderActive: "hover:border-fuchsia-500/40",
    gradient: "from-fuchsia-950/15 via-neutral-950 to-neutral-950",
    shadow: "shadow-fuchsia-500/20",
    iconName: "Trophy",
    imageSrc: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop",
  },
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

export const getProjectTheme = (id: string): ProjectTheme => {
  return PROJECT_THEMES[id] || DEFAULT_THEME;
};
