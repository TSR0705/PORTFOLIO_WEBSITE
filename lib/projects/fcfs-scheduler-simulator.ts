import { Project } from "../projects";

export const fcfsSchedulerSimulatorProject: Project = {
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
    status: "completed",
    tags: ["Desktop App", "Systems Engineering", "Education"],
    featured: false,
    year: "2023",
    projectType: "Desktop App / OS Visualization Tool"
  };
