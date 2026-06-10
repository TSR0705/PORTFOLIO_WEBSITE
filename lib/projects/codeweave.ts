import { Project } from "../projects";

export const codeweaveProject: Project = {
    id: "codeweave",
    title: "CodeWeave",
    slug: "codeweave",
    category: "Full Stack",
    shortDescription: "A production-grade collaborative coding workspace with real-time text synchronization, file tree organization, and embedded AI coding assistance.",
    fullDescription: "This project shows real-time collaboration, backend orchestration, AI integration, and workspace-level product thinking.",
    techStack: ["React", "Vite", "Tailwind CSS", "Monaco Editor", "Socket.io", "Node.js", "Express", "MongoDB", "Redis", "Gemini API", "Winston logging"],
    keyFeatures: [
      "Synchronizes edits in real time",
      "Manages a multi-file workspace with tabs",
      "Provides a collapsible team member drawer",
      "Integrates Monaco Editor for a full IDE-like experience",
      "Uses Gemini-powered AI assistance for debugging, explanations, and file generation",
      "Includes structured logging and health checks"
    ],
    status: "active",
    tags: ["Full Stack", "AI / Automation", "Distributed Systems", "Product Engineering"],
    featured: true,
    year: "2024",
    projectType: "Collaborative Web Sandbox / AI Coding Workspace",

    // Case Study Content
    problemStatement: "Asynchronous coding collaboration introduces **high data drift**. Standard text areas cannot track user edits in real-time, resulting in **text overwrite collisions**. Managing multi-file workspaces and launching file debugging pipelines requires **low-latency synchronization structures** and fast file state tracking.",
    problemPoints: [
      { title: "High Asynchronous Drift", desc: "Collaborators typing in raw text areas create overlapping sync edits, causing content overwrite bugs." },
      { title: "Network Lag & Stutter", desc: "Standard REST API polling is too slow to reflect dynamic cursor locations and typing streams smoothly." },
      { title: "LLM Context Resolution", desc: "Resolving and formatting active workspace multi-file structures into LLM inputs requires parsing file trees." }
    ],
    motivation: "Real-time code collaboration is prone to **sync conflicts**, **high latency**, and **complex workspace states**. I built CodeWeave to create a lightweight, collaborative IDE with **real-time text synchronization**, **multi-file code editing**, and **integrated AI assistance**, enabling engineers to work together interactively with **near-zero latency**.",
    motivationPoints: [
      { title: "Smooth Cooperative Typing", desc: "Build a fluid web workspace where developers type simultaneously with near-zero latency." },
      { title: "Sub-50ms keystroke sync", desc: "Keep remote cursors and text nodes synchronized in real time via fast server pipes." },
      { title: "Embedded Code Insights", desc: "Feed active code context directly into AI model API endpoints for fast, context-aware debugging." }
    ],
    ahaMoment: "Standard collaborative editors require heavy operational transformation (OT) libraries that are complex to deploy. By integrating VS Code's native **Monaco editor API** with room-fenced WebSocket events and a **Redis transient key cache**, we sync keystrokes and cursors instantly under 45ms without heavy conflicts.",
    solutionOverview: "CodeWeave addresses this by integrating **real-time Socket.io channels** with Monaco Editor. It uses a Node.js server backed by an **active Redis buffer** to synchronize workspace edits in real-time, stores files within structured JSON tree documents, and routes workspace metadata directly to Google's **Gemini API** for context-aware code debugging.",
    solutionPoints: [
      { title: "Keystroke Replicators", desc: "Orchestrates live Express and Socket.io instances to coordinate editor room connection state namespaces." },
      { title: "Redis Workspace Cache", desc: "Buffers editor room cursor positions in Redis memory logs before pushing state updates to databases." },
      { title: "File Tree Documents", desc: "Formats nested folder structures as single JSON state documents, making folder mutations easy to track." }
    ],
    systemFlow: [
      { step: "01", title: "Room Connection", desc: "Monaco client joins a specific workspace room via Socket.io namespaces." },
      { step: "02", title: "Document State Sync", desc: "Server retrieves current workspace JSON state from MongoDB and populates Monaco buffer." },
      { step: "03", title: "Keystroke Event Broadcast", desc: "User key inputs trigger local delta changes, streamed over WebSockets to peer sockets." },
      { step: "04", title: "Redis Position Cache", desc: "User cursor coordinates are cached inside temporary Redis hash indices to prevent write blockages." },
      { step: "05", title: "Gemini AI Analysis", desc: "Requests for code explanations pack workspace tree documents and stream output lines." },
      { step: "06", title: "Periodic DB Flush", desc: "Redis keys flush periodically to MongoDB collections, backing up workspace states securely." }
    ],
    mermaidDiagram: `flowchart TD
    A[React Monaco Client] <-->|Keystroke Sync| B[Socket.io WebSockets]
    B <-->|Session Control| C[Express.js Backend]
    C <-->|Active Buffer Caching| D[(Redis Memory Buffer)]
    C <-->|Workspace Sync State| E[(MongoDB Database)]
    C -->|Contextual Debug Queries| F[Gemini AI Engine]`,
    architectureDiagram: `[React Monaco Editor Client] ◄──► [Socket.io WebSockets]
                                              │
                                              ▼ (Operation Sync Buffer)
                                       [Node.js Server]
                                              │
                         ┌────────────────────┴────────────────────┐
                         ▼                                         ▼
                  [Redis Cache Buffer]                      [MongoDB Database]
                          │                                         │
                          ▼                                         ▼
                  [Gemini AI Ingest]                       [File Workspace State]`,
    architectureLayers: [
      { name: "Frontend Workspace", tech: "React & Monaco Editor", description: "Renders the visual coding editor with syntax highlights." },
      { name: "Sync Backend", tech: "Express.js & Socket.io", description: "Synchronizes file keystrokes and logs room states." },
      { name: "Cache Storage", tech: "Redis", description: "Maintains temporary operations logs and locks active work sessions." }
    ],
    keyMetrics: [
      { value: "< 45ms", label: "Sync Latency", description: "Keystroke replication sync time across concurrent sessions." },
      { value: "50+", label: "Concurrent Workspace Users", description: "Simulated load support without performance decay." },
      { value: "0", label: "Operational Conflicts", description: "Sync validation resolves overlapping keystroke events." }
    ],
    engineeringDecisions: [
      {
        decision: "Monaco Editor Component Binding",
        rationale: "Leveraged Monaco Editor for native support of visual syntax highlighting, autocompletion, map panels, and multi-cursor selections.",
        chosen: "Monaco Editor (VS Code core)",
        alternative: "Standard textarea inputs",
        alternativeRationale: "Standard textareas do not support syntax layouts, line numbers, or code autocompletions, making them unusable for professional developer workspaces."
      },
      {
        decision: "Transient Cursor Storage in Redis",
        rationale: "Cached user cursor coordinates inside Redis memory hashes to avoid overloaded database write queues during high concurrency spikes.",
        chosen: "Redis Cache Buffer",
        alternative: "MongoDB document updates",
        alternativeRationale: "Writing every cursor movement (often dozens per second per user) directly to MongoDB collections spikes database operations, locks IO, and crashes database nodes under concurrent loads."
      }
    ],
    tradeoffs: [
      { optimized: "Ultra-low latency keystroke synchronization (< 45ms)", sacrificed: "Lack of offline editing support (editor blocks edits if disconnected)" },
      { optimized: "Simplified JSON-based file tree serialization", sacrificed: "Inability to easily store binary file assets (limited strictly to text code files)" }
    ],
    failureScenarios: [
      {
        scenario: "WebSocket connection dropped due to network jitter",
        prevention: "Monaco client stores a local diff buffer and automatically replays offline edits upon socket re-connection.",
        riskLevel: "medium"
      },
      {
        scenario: "Concurrent edit overwrite on exact same line index",
        prevention: "Socket message payloads carry document edit versions, merging overlapping characters using index shift transformations.",
        riskLevel: "high"
      }
    ],
    challengesSolutions: [
      { challenge: "WebSocket latency spikes over generic hosting instances.", solution: "Migrated the Socket.io runtime backend to Render with cluster adapter plugins, decreasing overall message latency." },
      { challenge: "Conflict resolution in multi-file structures.", solution: "Created a room-based ID scheme where operations are verified and merged inside room scopes before writing to database states." }
    ],
    securityMeasures: [
      "Workspace private authorization tokens.",
      "Strict sanitization of user code before AI context ingestion.",
      "CORS controls limiting Socket.io connections to verified origins."
    ],
    deploymentDetails: "The web frontend is deployed on Vercel, the real-time node server is hosted on Render, and databases are managed via MongoDB Atlas.",
    screenshots: [
      "/window.svg",
      "/window.svg"
    ],
    lessonsLearned: [
      "Event-driven socket servers must handle server reboots cleanly by storing active sessions in memory state buffers.",
      "Observability logging is key when debugging asynchronous concurrency loops."
    ],
    futureImprovements: [
      "Integrating virtual terminal outputs directly into the workspace using secure runner sandboxes.",
      "Refined code diff viewers showing team member changes in different colors."
    ],
    futureEvolution: [
      "Secure sandboxed container runtimes to compile and run code files directly inside the workspace editor panel.",
      "Integrated visual Git branch comparison tool, highlighting code changes with side-by-side split panels."
    ]
  };
