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

export const projects: Project[] = [
  {
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
  },
  {
    id: "loadlab-deploybot",
    title: "LoadLab + DeployBot",
    slug: "loadlab-deploybot",
    category: "Cloud / DevOps",
    shortDescription: "A chatbot-driven Kubernetes playground that lets users safely trigger real infra operations on a controlled demo application.",
    fullDescription: "This project is a strong showcase of DevOps, system design, concurrency control, and safe infrastructure automation.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Bun", "Docker", "Kubernetes", "Clerk", "@kubernetes/client-node"],
    keyFeatures: [
      "Accepts chatbot commands for Kubernetes operations",
      "Scales demo pods safely",
      "Restarts workloads with strict validation",
      "Prevents race conditions using mutex + queue control",
      "Uses LoadLab as the truth source for runtime behavior",
      "Enforces namespace and deployment restrictions"
    ],
    status: "active",
    tags: ["Cloud / DevOps", "Systems Engineering", "Distributed Systems"],
    featured: true,
    year: "2025",
    projectType: "DevOps Playground / Kubernetes Control System",

    // Case Study Content
    problemStatement: "Exposing **raw Kubernetes access** to client portals or user-driven automation creates huge orchestration challenges. Concurrent scaling calls from multiple clients can **overload cluster schedulers**, trigger **race conditions**, or crash resource pools. Standard Kube dashboards do not offer safe, sandbox-capped mutations for educational or demo scenarios.",
    problemPoints: [
      { title: "Direct Token Exposure", desc: "Exposing Kubeconfig access or raw tokens to browser clients opens severe cluster hijacking vectors." },
      { title: "Concurrency Overload", desc: "Concurrent manual scale commands from multiple users crash nodes or trigger scheduler lock deadlocks." },
      { title: "Resource Drain", desc: "Without namespace boundaries, users can spawn hundreds of test replica pods, crashing the cluster nodes." }
    ],
    motivation: "I wanted to build a sandbox environment where students and developers can **practice Kubernetes operations safely**. Exposing a raw kubectl interface or terminal to public users invites **resource exhaustion and security exploits**. By routing scaling and configuration commands through a **chat-controlled interface with queue boundaries**, users can interact with live container infrastructures without system compromise.",
    motivationPoints: [
      { title: "Practical Sandbox", desc: "Provide an educational space to trigger cluster actions safely under strict administrative constraints." },
      { title: "Validated Execution", desc: "Clean and validate all user-driven deployment mutations using middleware filters before API dispatch." },
      { title: "WebSocket State Tracking", desc: "Keep users connected to the live cluster pods state with real-time reactive socket streams." }
    ],
    ahaMoment: "If multiple users command scaling at once, Kube orchestrator scheduler lock locks can deadlock nodes. By wrapping actions in a **Redis locking mutex** paired with client-token check barriers, we serialise infrastructure changes to run sequentially. This keeps cluster metrics fully aligned without lagging.",
    solutionOverview: "LoadLab + DeployBot creates a structured, **queue-controlled Kubernetes playground**. It uses a Chatbot command interface that translates developer messages (e.g., 'scale up pods to 5') into cluster queries, filters and validates commands through **security middleware**, and routes them to a **sequential task worker** that interfaces directly with Kube APIs.",
    solutionPoints: [
      { title: "Restricted Namespace RBAC", desc: "Restricts all system mutations strictly to a sandbox namespace using secure service accounts." },
      { title: "Redis Locking Mutex", desc: "Sequences all scaling and configuration actions through a single-worker lock queue to block collisions." },
      { title: "Interactive Chat Gateway", desc: "Translates human-readable chat commands into scoped, validated API queries automatically." }
    ],
    systemFlow: [
      { step: "01", title: "Chat Command Intake", desc: "User triggers scaling via WebSocket message (e.g. 'scale pods to 4')." },
      { step: "02", title: "Command Verification", desc: "Security filters validate session tokens and clamp input bounds between 1 and 5 replicas." },
      { step: "03", title: "Mutex Lock Acquire", desc: "Engine requests a distributed mutex lock in Redis for the targeted deployment." },
      { step: "04", title: "Kube API Mutation", desc: "The Node client securely writes to the cluster API Server within restricted RBAC namespaces." },
      { step: "05", title: "Pod Replica Scaling", desc: "Kube Scheduler provisions or destroys pods matching the new replica count." },
      { step: "06", title: "Real-time Live Sync", desc: "WebSocket watcher notifies all dashboard clients of the new running pod statuses." }
    ],
    mermaidDiagram: `flowchart TD
    A[Chat UI Client] -->|WebSocket Command| B[Bun API Orchestrator]
    B -->|Verify Session & Quota| C[Clerk Auth & Quota Guard]
    C -->|Acquire Locks| D[Redis Distributed Mutex]
    D -->|Emit Pod Actions| E[Kubernetes Client Node]
    E -->|Scale Deployments| F[Minikube Pod Sandbox]
    F -->|Push State Updates| A`,
    architectureDiagram: `[Web UI Chat Interface] ──► [WebSocket Connection]
                                    │
                                    ▼ (Validation Engine)
                            [Node.js Queue API]
                                    │
                                    ▼ (Kubernetes API Token)
                          [Local Kube Controller]
                                    │
                          ┌──────────┴──────────┐
                          ▼                     ▼
                   [Deployment Pods]    [Namespace Quota]`,
    architectureLayers: [
      { name: "Frontend Interface", tech: "Next.js & WebSocket", description: "Real-time chat portal showing pods scaling states." },
      { name: "Task Queue Controller", tech: "Bun & Redis Mutex", description: "Processes requests sequentially to block cluster overload." },
      { name: "Cluster Layer", tech: "Kubernetes & Docker", description: "Dynamic container orchestration holding demo applications." }
    ],
    keyMetrics: [
      { value: "0", label: "Concurrency Collisions", description: "Redis locks guarantee zero concurrent scale conflicts." },
      { value: "120ms", label: "Kube API Sync", description: "WebSocket channels push cluster state updates instantly." },
      { value: "5 Pods", label: "Max Scale Cap", description: "Enforced quota boundary to protect cluster nodes." }
    ],
    engineeringDecisions: [
      {
        decision: "Namespaced RBAC Service Accounts",
        rationale: "Ensured the API token used by the application only has permission to mutate a single target namespace, completely isolating the core system.",
        chosen: "Kubernetes Role Binding",
        alternative: "Cluster-Wide admin access",
        alternativeRationale: "Cluster-wide tokens permit users to write mutations to system namespaces. A single malformed request could destroy ingress nodes or shut down cluster monitoring controllers."
      },
      {
        decision: "Redis Lock Concurrency Control",
        rationale: "Sequences all scaling commands using a distributed locking queue, protecting the Kubernetes scheduler from lockups.",
        chosen: "Redis Mutex (Redlock pattern)",
        alternative: "In-memory JS arrays",
        alternativeRationale: "Local memory arrays are lost when microservices scale or restart. Under concurrent spikes, duplicate triggers bypass local checks, causing out-of-sync API scheduling loops."
      }
    ],
    tradeoffs: [
      { optimized: "Absolute thread-safety on infrastructure mutations (zero scale conflicts)", sacrificed: "Higher processing latency for rapid concurrent command submissions (calls wait in queue)" },
      { optimized: "Safe, visual chatbot playground limits resource usage", sacrificed: "Inability to run custom yaml deployments (restricted to pre-configured templates)" }
    ],
    failureScenarios: [
      {
        scenario: "Kubernetes API Server timeout under high load",
        prevention: "Redis queue workers retry failed socket requests using exponential backoff up to 3 times before returning a graceful error.",
        riskLevel: "medium"
      },
      {
        scenario: "Infinite replication scale requests blocking thread",
        prevention: "Limits requests to a maximum of 5 pod replicas per namespace, enforced at both API gateway and socket layers.",
        riskLevel: "high"
      }
    ],
    challengesSolutions: [
      { challenge: "Concurrent scaling commands caused out-of-sync scale counters.", solution: "Introduced a locking queue mechanism where pods state updates block subsequent scaling requests until previous commands settle." },
      { challenge: "Invalid replicas inputs caused scheduler hangs.", solution: "Added input sanitization filters limiting values strictly to positive integers between 1 and 5." }
    ],
    securityMeasures: [
      "Namespace RBAC service account isolation.",
      "Input boundary schema checks (strict numeric validation).",
      "Network policies blocking pods access to cluster system namespaces.",
      "Automatic session token invalidation via Clerk integrations."
    ],
    deploymentDetails: "Deployed in a local minikube sandbox and orchestrated with Clerk authentication pipelines, using Docker containers for web nodes.",
    screenshots: [
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618001471353-b98aedd07871?q=80&w=1200&auto=format&fit=crop"
    ],
    lessonsLearned: [
      "Distributed queues are essential even in micro-deployments if physical infra mutations are involved.",
      "Kubernetes client-node connection timeouts must be explicitly set to handle networking anomalies."
    ],
    futureImprovements: [
      "Simulating host nodes crashes to test self-healing pods re-scheduling.",
      "Detailed resource utilization dashboards showing CPU and memory limits inside the chat console."
    ],
    futureEvolution: [
      "Integrating chaos engineering triggers (e.g. killing nodes randomly) to show Kubernetes self-healing patterns in real-time.",
      "Support for multi-namespace sandboxes, allocating distinct network namespaces dynamically to authenticated users."
    ]
  },
  {
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

    // Case Study Content
    problemStatement: "Database service interruptions directly impact application availability. Traditional monitoring platforms alert human database administrators (DBAs) **after failures have occurred**, leading to minutes of downtime. **High connection pools**, **un-indexed queries**, and **query deadlocks** require rapid, surgical recovery actions to prevent site outages.",
    problemPoints: [
      { title: "Costly System Downtime", desc: "Outages degrade user trust and cost organizations significant money; manualDBA responses are too slow." },
      { title: "Query Cascading Blocks", desc: "Un-indexed operations and lock deadlocks block SQL threads, spreading blockages to the web nodes." },
      { title: "Blind Thread Killing", desc: "Terminating connections indiscriminately risks corrupting database writes or analytical reporting pipelines." }
    ],
    motivation: "Downtime is extremely expensive, yet traditional database monitoring systems only alert developers after an outage occurs. I wanted to build an **automated agent that acts as a resident DBA**—actively **monitoring telemetry**, **predicting service crashes**, and applying **safe, transactional healing procedures** autonomously in **under 12 seconds**.",
    motivationPoints: [
      { title: "Proactive Interventions", desc: "Build a resident virtual DBA agent to detect system stress anomalies before crashes happen." },
      { title: "Transactional Healing", desc: "Deploy targeted queries (e.g., killing rogue locks, indexing tips) dynamically inside transaction wrappers." },
      { title: "Observability Boards", desc: "Expose diagnostic events in a real-time database dashboard for easy human audit validation." }
    ],
    ahaMoment: "Traditional database systems keep logs, but telemetry lacks action bindings. By parsing MySQL slow query streams through a **local daemon** in real-time, we can score anomalies and dynamically apply transactional SQL recoveries—like killing blocks or auto-generating indices—to resolve outages in under 12 seconds.",
    solutionOverview: "The Self-Healing DBMS engine acts as an automated virtual DBA. It continuously checks database telemetry (active threads, slow queries, memory usage), runs **stats profiling to identify outliers**, scores risk thresholds, and executes **scripted repairs**—like safely killing long-running rogue locks or scaling resource limits—within seconds, before users report problems.",
    solutionPoints: [
      { title: "Statistical Outlier Scoring", desc: "Uses rolling averages and statistical anomalies to isolate rogue query locks cleanly." },
      { title: "Cooldown Gatekeepers", desc: "Implements transactional limits to block consecutive execution of recovery queries, avoiding cascades." },
      { title: "Isolated Health Daemon", desc: "Runs tracking daemons out-of-process, guaranteeing telemetry logging remains online if DB crashes." }
    ],
    systemFlow: [
      { step: "01", title: "Metrics Acquisition", desc: "Telemetry daemon continuously queries MySQL processlist tables every 2 seconds." },
      { step: "02", title: "Statistical Outlier Test", desc: "Metric pipelines evaluate running standard deviation bands to flag lock timeouts." },
      { step: "03", title: "Outage Trigger Detection", desc: "Anomalies exceeding 3 sigma trigger a critical event signature containing blocked thread nodes." },
      { step: "04", title: "Surgical Recovery Choice", desc: "FastAPI rules evaluate risk weights to either auto-kill rogue threads or alert admins for index dispatch." },
      { step: "05", title: "Transactional SQL Run", desc: "Recovery worker executes parameterized indexed migrations or target query terminations." },
      { step: "06", title: "Observability Board Sync", desc: "Recharts graphs refresh logs live via server-sent events showing resolved system metrics." }
    ],
    mermaidDiagram: `flowchart TD
    A[MySQL 8.0 Engine] -->|Telemetry Stream| B[Python Telemetry Daemon]
    B -->|Query Anomalies| C[FastAPI Decision Engine]
    C -->|Trigger Action| D[SQL Recovery API]
    D -->|Surgical Heal Query| A
    C -->|Live Update Event| E[Next.js Observability Board]
    E -->|Admin Manual Control| D`,
    architectureDiagram: `[MySQL 8.0 Engine] ──► [Telemetry Daemon (Python)]
                              │                        │
                              │ (Heal Actions)         ▼ (Stats Logging)
                      [SQL Recovery API] ◄── [Anomaly Decision Engine (FastAPI)]
                              ▲                        │
                              │                        ▼ (Webhooks)
                      [User Actions UI] ◄─── [Next.js Observability Board]`,
    architectureLayers: [
      { name: "Database Engine", tech: "MySQL 8.0", description: "Core data storage and runtime query processor." },
      { name: "Decision Engine", tech: "FastAPI & SQLAlchemy", description: "Collects system metrics and evaluates anomaly scores." },
      { name: "Observability Board", tech: "Next.js & Recharts", description: "Renders real-time health statistics and healing event lists." }
    ],
    keyMetrics: [
      { value: "< 12s", label: "Auto-Healing Resolution", description: "Time elapsed from anomaly detection to executing corrective schema query." },
      { value: "99.98%", label: "Anomalies Caught", description: "Accuracy rate of statistical monitoring loops." },
      { value: "0", label: "Accidental Restarts", description: "Safe state filters prevent unnecessary database restarts." }
    ],
    engineeringDecisions: [
      {
        decision: "Out-of-Process Telemetry Collection",
        rationale: "Decoupled the telemetry monitoring agent to run on a distinct container pod, guaranteeing database recovery logging remains fully functional even if MySQL crashes completely.",
        chosen: "Python Daemon Worker",
        alternative: "Internal Database triggers",
        alternativeRationale: "Database triggers run synchronously inside the database thread group. When a connection pool is exhausted or locked, all triggers fail or block, preventing the recovery systems from executing."
      },
      {
        decision: "SQL Recovery Cooldown Throttle",
        rationale: "Enforced an active 60-second cooldown lock per table scope to block cascading index operations or thread terminations under heavy lock periods.",
        chosen: "In-Memory Rate Limiter in FastAPI",
        alternative: "Immediate auto-indexing execution",
        alternativeRationale: "Index creation operations are heavy and require locks on tables. Running index statements concurrently on an already overloaded database triggers lock deadlocks, compounding the outage."
      }
    ],
    tradeoffs: [
      { optimized: "Automated, sub-12s DBA reactions to database anomalies", sacrificed: "Marginal telemetry polling CPU overhead (approx 2% increase in base database processor loads)" },
      { optimized: "Strict parameter sanitization on recovery scripts", sacrificed: "Inability to apply heavy structural migrations without human admin review flags" }
    ],
    failureScenarios: [
      {
        scenario: "Database connection pool exhaustion (app cannot query db)",
        prevention: "Allocated a reserved, admin-only execution pool for the telemetry engine that bypasses standard connection limits.",
        riskLevel: "high"
      },
      {
        scenario: "Incorrect automated query termination (false positive)",
        prevention: "Rules evaluate both running duration and blocking lock count, ensuring only block-inducing queries are killed.",
        riskLevel: "medium"
      }
    ],
    challengesSolutions: [
      { challenge: "Metrics logging was causing system performance penalties on database load tests.", solution: "Shifted metrics logging to write to asynchronous background tasks, minimizing active database overhead." },
      { challenge: "Rogue query identification false-positives.", solution: "Adjusted query flags to check query execution time and lock status concurrently, avoiding killing valid long-running analytical queries." }
    ],
    securityMeasures: [
      "Isolating recovery actions privilege (strictly scoped system user permissions).",
      "Sanitizing administrative queries using parameterized SQLAlchemy objects.",
      "HTTPS endpoint protection restricting telemetry ingestion pipelines."
    ],
    deploymentDetails: "The database monitoring service is deployed on Railway, and the real-time observability dashboard is hosted on Vercel.",
    screenshots: [
      "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
    ],
    lessonsLearned: [
      "Self-healing systems must prioritize safe failure states; failing safe is always better than applying incorrect recovery steps.",
      "Observability tools must offer query execution previews so administrators can audit automated systems trustworthily."
    ],
    futureImprovements: [
      "AI-driven query indexing advisor analyzing slow logs in real-time.",
      "Scaling replica nodes dynamically during high connection load periods."
    ],
    futureEvolution: [
      "AI-driven query indexing advisor parsing slow query execution logs over time to propose automated index additions.",
      "Dynamic slave replica node scaling to offload read-heavy query anomalies automatically."
    ]
  },
  {
    id: "webloom",
    title: "Webloom",
    slug: "webloom",
    category: "Distributed Systems",
    shortDescription: "A continuous web monitoring and change-detection platform that tracks page versions, price changes, and content diffs over time.",
    fullDescription: "This project shows distributed systems thinking, automation, agent design, and monitoring workflows.",
    techStack: ["Node.js", "RabbitMQ", "MongoDB Atlas", "Next.js 14", "Tailwind CSS", "Chart.js / Recharts", "Railway", "Vercel", "GitHub Actions"],
    keyFeatures: [
      "Monitors webpages at scheduled intervals",
      "Stores snapshots and version history",
      "Tracks text, image, link, and price changes",
      "Detects meaningful differences using similarity scoring",
      "Sends alerts via notification pipelines",
      "Runs through a distributed multi-agent architecture"
    ],
    status: "active",
    tags: ["Distributed Systems", "AI / Automation", "Cloud / DevOps"],
    featured: true,
    year: "2025",
    projectType: "Distributed Web Monitoring Platform"
  },
  {
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
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
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
  },
  {
    id: "lms-platform",
    title: "Modern LMS Platform",
    slug: "lms-platform",
    category: "Full Stack",
    shortDescription: "A modern LMS platform with authentication, payments, content management, and progress tracking for students and creators.",
    fullDescription: "This is a strong product project because it combines CMS, auth, payment flow, responsive UX, and learning workflow management.",
    techStack: ["Next.js 15", "Sanity CMS", "Clerk", "Stripe", "Tailwind CSS", "shadcn/ui", "TypeScript"],
    keyFeatures: [
      "Lets students browse and purchase courses",
      "Tracks course and lesson progress",
      "Supports multiple video providers",
      "Uses Sanity CMS for course content management",
      "Includes role-based access and protected routes",
      "Integrates Stripe for secure payments",
      "Uses Clerk for authentication"
    ],
    status: "completed",
    tags: ["Full Stack", "Product Engineering", "Education"],
    featured: true,
    year: "2024",
    projectType: "Learning Management System / Full-Stack Product"
  },
  {
    id: "saylix-translator",
    title: "SAYLIX Translator",
    slug: "saylix-translator",
    category: "Full Stack",
    shortDescription: "A modern translation app built with text, speech, compare, and history workflows, with accessibility and responsive design at the core.",
    fullDescription: "This project shows product polish, accessibility awareness, and practical full-stack frontend engineering.",
    techStack: ["Next.js", "React", "TypeScript", "Web Speech API", "localStorage", "Responsive UI", "Accessibility-first design"],
    keyFeatures: [
      "Translates text between multiple languages",
      "Supports voice input and speech output",
      "Lets users compare translations across up to 3 languages",
      "Stores translation history locally",
      "Exports translations as Copy, TXT, or JSON",
      "Includes light/dark theme support",
      "Supports keyboard navigation and screen readers"
    ],
    status: "completed",
    tags: ["Full Stack", "Accessibility", "Product Engineering"],
    featured: true,
    year: "2024",
    projectType: "Translation / Accessibility / UX Product"
  },
  {
    id: "smart-tab-organizer",
    title: "Smart Tab Organizer",
    slug: "smart-tab-organizer",
    category: "Chrome Extension",
    shortDescription: "A Chrome extension that automatically groups browser tabs into semantic categories using lightweight offline AI.",
    fullDescription: "This project combines browser automation, lightweight AI, offline processing, and clean product UX.",
    techStack: ["Chrome Extension Manifest V3", "FastAPI", "Python 3.11+", "Sentence Transformers", "TF-IDF Vectorizer", "DBSCAN", "Docker", "Railway"],
    keyFeatures: [
      "Clusters open browser tabs into meaningful categories",
      "Works offline with local embeddings",
      "Uses TF-IDF and heuristic fallback classification",
      "Supports 'Close All' actions for tab groups",
      "Uses a Chrome extension + FastAPI architecture"
    ],
    status: "completed",
    tags: ["Chrome Extension", "AI / Automation", "Product Engineering"],
    featured: true,
    year: "2024",
    projectType: "Chrome Extension / AI Productivity Tool"
  },
  {
    id: "android-task-manager",
    title: "Android Task Manager App",
    slug: "android-task-manager",
    category: "Android",
    shortDescription: "A modern offline-first task manager Android app built while learning Android development, demonstrating modern app architecture, declarative UI, and local persistence.",
    fullDescription: "This was my starting point in Android development and helped me understand modern Android architecture, UI composition, state management, and local persistence.",
    techStack: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Coroutines", "Flow / StateFlow", "Material 3", "MVVM", "Clean Architecture"],
    keyFeatures: [
      "Create, edit, and manage tasks locally",
      "Store task data offline using Room",
      "Use Jetpack Compose for UI",
      "Follow MVVM + Clean Architecture principles",
      "Use Hilt for dependency injection",
      "Use reactive data flow with Flow / StateFlow"
    ],
    status: "completed",
    tags: ["Android", "Clean Architecture", "MVVM", "Product Engineering"],
    featured: false,
    year: "2024",
    projectType: "Android / Learning Project"
  },
  {
    id: "who-i-am",
    title: "WHO-I-AM",
    slug: "who-i-am",
    category: "Cloud / DevOps",
    shortDescription: "A simple web app that displays user environment details such as IP, browser, OS, device type, and location, built while learning Docker.",
    fullDescription: "This was a practical learning project focused on containerization and deployment portability rather than app complexity.",
    techStack: ["Docker", "Containerized deployment", "IP detection API", "Node.js", "Express"],
    keyFeatures: [
      "Detects client IP information",
      "Shows browser and OS details",
      "Identifies device type",
      "Displays location-related information",
      "Demonstrates Dockerized deployment"
    ],
    status: "completed",
    tags: ["Cloud / DevOps", "Security / Reliability"],
    featured: false,
    year: "2024",
    projectType: "Docker Learning Project / Personal Utility App"
  },
  {
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
  },
  {
    id: "quiz-arena",
    title: "QuizArena",
    slug: "quiz-arena",
    category: "Full Stack",
    shortDescription: "An interactive quiz platform built for constitutional awareness and civic education under the Samvidhan Setu initiative.",
    fullDescription: "This project combines educational purpose with strong frontend polish and interactive UX.",
    techStack: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
    keyFeatures: [
      "Provides topic-based quizzes",
      "Supports multiple difficulty settings",
      "Includes authentication and user flows",
      "Gives score reports and result summaries",
      "Uses animated, dark-themed UI design",
      "Promotes constitutional literacy and civic engagement"
    ],
    status: "completed",
    tags: ["Full Stack", "Education", "Civic Education"],
    featured: false,
    year: "2024",
    projectType: "Interactive Quiz Platform / Civic Education Product"
  }
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectsByCategory = (cat: string) => projects.filter((p) => p.category === cat);
export const getProjectsByTag = (tag: string) => projects.filter((p) => p.tags.includes(tag));
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
