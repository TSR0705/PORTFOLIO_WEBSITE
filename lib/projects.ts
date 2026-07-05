import { ProjectTheme, DEFAULT_THEME } from "./project-design";

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
  theme: ProjectTheme;

  // Case Study Fields (Optional)
  motivation?: string;
  motivationPoints?: { title: string; desc: string }[];
  problemStatement?: string;
  problemPoints?: { title: string; desc: string }[];
  ahaMoment?: string;
  solutionOverview?: string;
  solutionPoints?: { title: string; desc: string }[];
  systemFlow?: { step: string; title: string; desc: string }[];
  mermaidDiagram?: string;
  architectureDiagram?: string;
  architectureLayers?: { name: string; tech: string; description: string }[];
  engineeringDecisions?: { decision: string; rationale: string; chosen: string; alternative: string; alternativeRationale: string }[];
  tradeoffs?: { optimized: string; sacrificed: string }[];
  failureScenarios?: { scenario: string; prevention: string; riskLevel: "low" | "medium" | "high" }[];
  challengesSolutions?: { challenge: string; solution: string }[];
  securityMeasures?: string[];
  deploymentDetails?: string;
  screenshots?: string[];
  keyMetrics?: { value: string; label: string; description: string }[];
  lessonsLearned?: string[];
  futureImprovements?: string[];
  futureEvolution?: string[];
  
  // Custom Media and Detail Sections
  flowImage?: string;
  architectureImages?: { url: string; title: string; description?: string }[];
  detailedScreenshots?: { url: string; title: string; description: string; category: string }[];
}

import { dbmsSelfHealingProject } from "./projects/dbms-self-healing";
import { codeweaveProject } from "./projects/codeweave";
import { lmsPlatformProject } from "./projects/lms-platform";
import { exposurProject } from "./projects/exposur";
import { fcfsSchedulerSimulatorProject } from "./projects/fcfs-scheduler-simulator";

export const projects: Project[] = [
  dbmsSelfHealingProject,
  codeweaveProject,
  lmsPlatformProject,
  exposurProject,
  fcfsSchedulerSimulatorProject,
];

export const getProjectTheme = (id: string): ProjectTheme => {
  const project = projects.find((p) => p.id === id);
  return project?.theme || DEFAULT_THEME;
};
