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
}

import { openciRunnerProject } from "./projects/openci-runner";
import { loadlabDeploybotProject } from "./projects/loadlab-deploybot";
import { dbmsSelfHealingProject } from "./projects/dbms-self-healing";
import { webloomProject } from "./projects/webloom";
import { codeweaveProject } from "./projects/codeweave";
import { lmsPlatformProject } from "./projects/lms-platform";
import { saylixTranslatorProject } from "./projects/saylix-translator";
import { smartTabOrganizerProject } from "./projects/smart-tab-organizer";
import { androidTaskManagerProject } from "./projects/android-task-manager";
import { whoIAmProject } from "./projects/who-i-am";
import { fcfsSchedulerSimulatorProject } from "./projects/fcfs-scheduler-simulator";
import { quizArenaProject } from "./projects/quiz-arena";

export const projects: Project[] = [
  openciRunnerProject,
  loadlabDeploybotProject,
  dbmsSelfHealingProject,
  webloomProject,
  codeweaveProject,
  lmsPlatformProject,
  saylixTranslatorProject,
  smartTabOrganizerProject,
  androidTaskManagerProject,
  whoIAmProject,
  fcfsSchedulerSimulatorProject,
  quizArenaProject,
];
