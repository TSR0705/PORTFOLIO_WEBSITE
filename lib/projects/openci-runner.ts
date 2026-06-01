import { Project } from "../projects";

export const openciRunnerProject: Project = {
    id: "openci-runner",
    title: "OpenCI Runner",
    slug: "openci-runner",
    category: "Systems Engineering",
    shortDescription: "A public, secure CI execution demo platform that runs tests and lint checks on public GitHub repositories inside isolated Docker runners.",
    fullDescription: "This project demonstrates honest, secure CI design with isolation, correctness, and verifiable execution instead of fake screenshots or unsafe user code execution.",
    techStack: ["Docker", "Jenkins", "Node.js", "Python", "Sandbox execution model"],
    keyFeatures: [
      "Accepts public GitHub repository URLs",
      "Detects project type automatically",
      "Runs tests and linting in isolated containers",
      "Captures logs and metadata during execution",
      "Publishes verifiable results",
      "Uses Jenkins only for internal platform CI/CD"
    ],
    status: "active",
    tags: ["Systems Engineering", "Cloud / DevOps", "Security / Reliability", "Distributed Systems"],
    featured: true,
    year: "2025",
    projectType: "Secure CI Demo Platform",

    // Case Study Content
    problemStatement: "Exposing public cloud instances to **untrusted user code** during CI pipeline execution creates massive security loops. **Runaway CPU tasks**, **host environment data leaks**, and **local file system tampering** are constant threats. Standard virtual machines are too slow to boot on-demand, while containerized systems easily leak host privileges if configured incorrectly.",
    problemPoints: [
      { title: "Host Privileges Leakage", desc: "Untrusted build scripts can exploit root permissions to access the host kernel and filesystem." },
      { title: "Resource Exhaustion", desc: "Infinite CPU loops and memory leaks in user code hang nodes, degrading cloud cluster performance." },
      { title: "Vulnerability Breakout", desc: "Provisioning full VMs is too slow for quick commits, but standard containers easily leak network boundaries." }
    ],
    motivation: "I built OpenCI Runner to solve the security vulnerability of running untrusted third-party code. While platforms like GitHub Actions or Travis CI exist, they are optimized for trusted development pipelines. Developers needed a **secure, sandbox-isolated system** to execute public check scripts on on-demand test environments **without risking host system integrity** or leaking API credentials.",
    motivationPoints: [
      { title: "Sandboxed Isolation", desc: "Build a secure execution platform that locks user scripts inside unprivileged container pods." },
      { title: "Verifiable Outcomes", desc: "Ensure developers can review real-time execution logs securely without exposing backend variables." },
      { title: "Commit Agility", desc: "Offer sub-5s cold boot sandboxes that compile and analyze commits immediately upon submission." }
    ],
    ahaMoment: "If container escape vulnerabilities are fundamentally kernel exploits, we don't need a heavy VM. By matching **rootless User Namespaces (UID mapping)** with restricted system profiles, we can isolate code blocks at the process boundary. This gives sub-second startup speeds with high execution fencing.",
    solutionOverview: "OpenCI Runner addresses this by building an **ephemeral, sandboxed container orchestration pipeline**. When a developer submits a GitHub repository, the orchestrator pulls the codebase, spawns an **isolated container with zero host root privileges**, mounts **cgroup CPU limits**, runs checks, dumps streams in real-time, and destroys the container instantly.",
    solutionPoints: [
      { title: "Rootless Execution Model", desc: "Runs all sandbox tasks under non-root user IDs, blocking kernel breakout exploits at the system boundary." },
      { title: "Strict CGroups & Limits", desc: "Caps resource allocations strictly at 512MB RAM and automatically terminates tasks exceeding 120 seconds." },
      { title: "Fenced Networking", desc: "Disables container default network cards during the run phase to block port-scanning on host private nets." }
    ],
    systemFlow: [
      { step: "01", title: "Git Repository Pull", desc: "Worker fetches the source code files and configuration schemas onto an ephemeral workspace folder." },
      { step: "02", title: "Sandbox Config Resolve", desc: "Orchestrator parses execution runtime environments (Node, Python, Bun) and configures container constraints." },
      { step: "03", title: "Namespace Isolation", desc: "Docker daemon maps host namespaces into unprivileged UIDs, isolating the sandbox boundary." },
      { step: "04", title: "CGroup Constraints", desc: "Pipes strict 512MB RAM memory fences and 1 Core CPU quota directly into runtime sockets." },
      { step: "05", title: "Log Output Pipe", desc: "Streams stdout and stderr buffer lines directly to secure S3 storage buckets." },
      { step: "06", title: "Instant Teardown", desc: "Destroys container interfaces, cleans active memory buffers, and wipes workspace folders immediately." }
    ],
    mermaidDiagram: `flowchart TD
    A[Web Client] -->|Submit Repo URL| B[Node.js Orchestrator]
    B -->|Enqueue Job| C[(Redis Job Queue)]
    C -->|Execute Task| D[Rootless Docker Worker]
    D -->|Spawn Sandbox Container| E[Isolated Pod cgroups]
    E -->|Capture Logs| F[Secure Storage S3]
    F -->|Stream Console Output| A`,
    architectureDiagram: `[Developer CLI / Web Client]
           │
           ▼ (HTTPS / Repo Submission)
[Node.js Orchestrator & Task Queue]
           │
           ├─► [S3 / Persistent Logging] (Store run metadata)
           │
           ▼ (Docker Socket API - Restricted Access)
[Ephemeral Sandbox Pods (cgroup & network limits)]
           │
           ▼ (Fenced Environment)
    [User Tests Executed]` ,
    architectureLayers: [
      { name: "Orchestration & Queue", tech: "Node.js", description: "Accepts task payloads, resolves repo metadata, and schedules tasks." },
      { name: "Sandbox Engine", tech: "Docker Engine API", description: "Spawns ephemeral containers dynamically with custom cgroup limits." },
      { name: "Logging Pipe", tech: "AWS S3 / Streams", description: "Pipes real-time container log outputs to secure external files." }
    ],
    keyMetrics: [
      { value: "100%", label: "Container Isolation", description: "Zero shared access to the host's root file system." },
      { value: "< 4.2s", label: "Cold Boot Spawning", description: "Spawns a sandboxed check pipeline within seconds." },
      { value: "120s", label: "Hard Execution Cap", description: "Automatic cgroup termination to block execution loops." }
    ],
    engineeringDecisions: [
      {
        decision: "Rootless Container Execution",
        rationale: "Ensures kernel exploits cannot escape the container context by mapping root inside the sandbox to an unprivileged sub-UID on the host system.",
        chosen: "Docker Rootless Daemon",
        alternative: "Standard Docker (privileged root)",
        alternativeRationale: "Standard daemon executions run nested processes as host root. Any directory mounts or container escape exploits grant host-level root control, exposing all peer node networks."
      },
      {
        decision: "Process Daemon Monitoring Hook",
        rationale: "Requires active cgroup execution heartbeats to terminate infinite loops synchronously before memory thresholds crash nodes.",
        chosen: "Node.js Process Daemon wrapper",
        alternative: "Cron-based container sweeps",
        alternativeRationale: "Cron execution cycles run at coarse-grained intervals (minimum 1 minute). During spike periods, containers running recursive fork bombs would crash the host memory before the cron sweeps fire."
      }
    ],
    tradeoffs: [
      { optimized: "Ultra-fast execution startup (cold boots under 4 seconds)", sacrificed: "Higher host kernel dependency compared to full hypervisor VM isolation" },
      { optimized: "Zero network port scanning risk inside sandbox run", sacrificed: "Inability to pull external package dependencies during the build run (requires cached image bundles)" }
    ],
    failureScenarios: [
      {
        scenario: "Container Fork Bomb (infinite process spawning)",
        prevention: "Enforced process limits (pids.max = 64) in container cgroup profiles to block system thread pool starvation.",
        riskLevel: "high"
      },
      {
        scenario: "Infinite Loop execution hanging resources",
        prevention: "Hard timeout watchdog running out-of-process forcibly destroys container pods after exactly 120 seconds.",
        riskLevel: "medium"
      }
    ],
    challengesSolutions: [
      { challenge: "Runaway CPU loops hung containers indefinitely.", solution: "Implemented a heartbeat loop worker in the Node manager that terminates any container exceeding the 120-second threshold via `docker kill`." },
      { challenge: "Network card spoofing on shared networks.", solution: "Disabled container link networking (`--network none`) during the execution phase so code cannot scan the host network." }
    ],
    securityMeasures: [
      "Rootless container engine isolation.",
      "Disabled container default network interface during the running phase.",
      "Strict cgroup memory limits (capped at 512MB RAM per task).",
      "Read-only root container file system overlay."
    ],
    deploymentDetails: "Hosted on AWS EC2 instances inside virtual private cloud limits. Task orchestration is built on top of Node microservices, and system deployments are automated using Jenkins pipelines.",
    screenshots: [
      "https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop"
    ],
    lessonsLearned: [
      "Configuring cgroup namespaces directly prevents noisy neighbor scenarios.",
      "Log streaming requires active backpressure controls to prevent node process memory spikes."
    ],
    futureImprovements: [
      "Support for private repository builds using short-lived GitHub App installation keys.",
      "Distributed task execution across multiple agent pools."
    ],
    futureEvolution: [
      "Firecracker MicroVM integration for hardware-level isolation with container-like boot speeds.",
      "Decentralized distributed task execution across multiple secure node pools.",
      "Predictive pre-warming pools to bring container boot latency down to sub-100ms speeds."
    ]
  };
