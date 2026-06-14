import { Project } from "../projects";

export const dbmsSelfHealingProject: Project = {
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
    projectType: "Systems / Database Reliability / AI-Assisted Automation",


    deploymentDetails: "The database monitoring service is deployed on Railway, and the real-time observability dashboard is hosted on Vercel.",
    screenshots: [
      "/PROJECTS/DBMS_SELF_HEALING/DASHBOARD-OVERVIEW-01.webp",
      "/PROJECTS/DBMS_SELF_HEALING/DASHBOARD-OVERVIEW-02.webp"
    ],
    flowImage: "/PROJECTS/DBMS_SELF_HEALING/Healing Lifecycle.webp",
    architectureImages: [
      {
        url: "/PROJECTS/DBMS_SELF_HEALING/Architecture Diagram.webp",
        title: "System Architecture Design",
        description: "Visual map of the decoupled telemetry system featuring out-of-process Python collection nodes, FastAPI decision engines, and Next.js frontend layers."
      },
      {
        url: "/PROJECTS/DBMS_SELF_HEALING/DIAGRAM-Dynamic Interaction Sequence.webp",
        title: "Dynamic Interaction Sequence Flow",
        description: "Unified sequence diagram showing the asynchronous telemetry collection cycles, threshold crossings, routing logic, and recovery executions."
      }
    ],
    detailedScreenshots: [
      {
        url: "/PROJECTS/DBMS_SELF_HEALING/DASHBOARD-OVERVIEW-01.webp",
        title: "Overview Dashboard - Dark Mode Theme",
        description: "Real-time visualization of CPU usage, active threads, system errors, database queries per second (QPS), and overall database engine health metrics.",
        category: "Overview"
      },
      {
        url: "/PROJECTS/DBMS_SELF_HEALING/DASHBOARD-OVERVIEW-02.webp",
        title: "Metric Threshold Monitoring",
        description: "Granular charts showing memory utilization, transaction commit latency, and lock wait times mapped against anomalous threshold boundaries.",
        category: "Overview"
      },
      {
        url: "/PROJECTS/DBMS_SELF_HEALING/DASHBOARD-SYSTEM-HEALTH.webp",
        title: "System Status & Service Log",
        description: "Consolidated views of active database node telemetry daemons, service response speeds, and daemon thread execution logs.",
        category: "Overview"
      },
      {
        url: "/PROJECTS/DBMS_SELF_HEALING/DASHBOARD-DETECTED-ISSUES.webp",
        title: "Anomalous Event Detection",
        description: "Lists flagged database anomalies like connection pool spikes or query blocks with their corresponding hazard level, timestamp, and active status.",
        category: "Detection & Decisions"
      },
      {
        url: "/PROJECTS/DBMS_SELF_HEALING/DASHBOARD-AI-ANALYSIS.webp",
        title: "Root Cause AI Analysis",
        description: "AI engine output analyzing slow logs and thread states to isolate the root cause, outputting standard deviation deviations and repair suggestions.",
        category: "Detection & Decisions"
      },
      {
        url: "/PROJECTS/DBMS_SELF_HEALING/DASHBOARD-DECISION.webp",
        title: "Decision Routing Matrix",
        description: "Decision pipeline evaluating whether an anomaly requires immediate automated transactional rollback/kill or escalates to human-in-the-loop admin approval.",
        category: "Detection & Decisions"
      },
      {
        url: "/PROJECTS/DBMS_SELF_HEALING/DASHBOARD-HEALING-ACTION.webp",
        title: "Autonomous Healing Execution",
        description: "Logs showing execution of surgical recovery tasks (e.g. terminating specific rogue locked threads or applying temporary indexes) complete with transaction rollback safety checks.",
        category: "Healing Actions"
      },
      {
        url: "/PROJECTS/DBMS_SELF_HEALING/DASHBOARD-ADMIN-REVIEW.webp",
        title: "Human-in-the-Loop Admin Review",
        description: "Interface for database administrators to review AI suggestions, manually approve indices, inspect proposed query changes, and override auto-actions.",
        category: "Healing Actions"
      },
        {
          url: "/PROJECTS/DBMS_SELF_HEALING/DASHBOARD-LEARNING_HISTORY.jpg",
          title: "Healing Learning History",
          description: "A detailed archive of past system incidents, recovery durations, action success rates, and reinforcement training logs to refine detection bounds.",
          category: "Healing Actions"
        }
      ],
      theme: {
        primaryColor: "#F43F5E",
        accentText: "text-rose-400",
        bgGlow: "bg-rose-500/5",
        borderMuted: "border-rose-500/10",
        borderActive: "hover:border-rose-500/40",
        gradient: "from-rose-950/15 via-neutral-950 to-neutral-950",
        shadow: "shadow-rose-500/20",
        iconName: "Database",
        imageSrc: "/PROJECTS/DBMS_SELF_HEALING/HERO_SECTION.webp",
      }
    };
