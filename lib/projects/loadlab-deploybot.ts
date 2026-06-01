import { Project } from "../projects";

export const loadlabDeploybotProject: Project = {
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
  };
