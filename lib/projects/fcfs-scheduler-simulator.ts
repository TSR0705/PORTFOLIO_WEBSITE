import { Project } from "../projects";

export const fcfsSchedulerSimulatorProject: Project = {
    id: "fcfs-scheduler-simulator",
    title: "FCFS Scheduler Simulator",
    slug: "fcfs-scheduler-simulator",
    githubUrl: "https://github.com/TSR0705/FCFS-SCHEDULING-SIMULATOR",
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
    status: "completed",
    tags: ["Desktop App", "Systems Engineering", "Education"],
    featured: false,
    year: "2023",
    projectType: "Desktop App / OS Visualization Tool",
    theme: {
      primaryColor: "#F97316",
      accentText: "text-orange-400",
      bgGlow: "bg-orange-500/5",
      borderMuted: "border-orange-500/10",
      borderActive: "hover:border-orange-500/40",
      gradient: "from-orange-950/15 via-neutral-950 to-neutral-950",
      shadow: "shadow-orange-500/20",
      iconName: "Cpu",
      imageSrc: "/PROJECTS/FCFS Scheduler Simulator/HERO.webp",
    },
    detailedScreenshots: [
      {
        url: "/PROJECTS/FCFS Scheduler Simulator/HERO.webp",
        title: "FCFS Simulator Main Interface",
        description: "Visualizes process queues, Gantt chart construction, and step-by-step CPU execution states.",
        category: "Simulation View"
      },
      {
        url: "/PROJECTS/FCFS Scheduler Simulator/DASHBOARD.webp",
        title: "Simulation Dashboard & Performance Analytics",
        description: "Renders real-time execution statistics, process parameter inputs, and final metrics comparison charts.",
        category: "Analytics Dashboard"
      }
    ]
  };
