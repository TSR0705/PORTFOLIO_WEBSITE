"use client";

import React from "react";
import { 
  Cpu, 
  Terminal, 
  ArrowRight,
  Globe,
  Eye,
  Server,
  ShieldAlert,
  FileCode,
  Shuffle,
  Lock
} from "lucide-react";
import { ProjectTheme } from "@/lib/project-design";
import { Project } from "@/lib/projects";
import PremiumGallery from "@/components/ui/premium-gallery";
import ZoomableImage from "@/components/ui/zoomable-image";

interface ComponentProps {
  theme: ProjectTheme;
}

// Helper component for Code Block / Config Block
function NginxConfigBlock() {
  return (
    <div className="relative rounded-xl border border-white/5 bg-[#080808] font-mono text-[11px] sm:text-xs leading-relaxed overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.01]">
        <div className="flex items-center gap-2">
          <FileCode className="w-3.5 h-3.5 text-[#E1E0CC]/50" />
          <span className="text-white/60 font-mono text-[10px]">nginx.conf</span>
        </div>
        <span className="text-[10px] text-white/30 uppercase tracking-wider">Proxy Headers</span>
      </div>
      <div className="p-4 sm:p-5 overflow-x-auto text-white/80 space-y-1">
        <div className="text-neutral-500 font-light">// Forward verified client network metadata</div>
        <div>
          <span className="text-[#E1E0CC]/90">proxy_set_header</span> <span className="text-neutral-400">X-Real-IP</span> <span className="text-[#E1E0CC]/60">$remote_addr;</span>
        </div>
        <div>
          <span className="text-[#E1E0CC]/90">proxy_set_header</span> <span className="text-neutral-400">X-Forwarded-For</span> <span className="text-[#E1E0CC]/60">$proxy_add_x_forwarded_for;</span>
        </div>
        <div>
          <span className="text-[#E1E0CC]/90">proxy_set_header</span> <span className="text-neutral-400">X-Forwarded-Proto</span> <span className="text-[#E1E0CC]/60">$scheme;</span>
        </div>
        <div>
          <span className="text-[#E1E0CC]/90">proxy_set_header</span> <span className="text-neutral-400">Host</span> <span className="text-[#E1E0CC]/60">$http_host;</span>
        </div>
        <div className="text-neutral-500 font-light mt-2">// Strip cloud-provider proxy headers to prevent tampering</div>
        <div>
          <span className="text-[#E1E0CC]/90">proxy_set_header</span> <span className="text-neutral-400">CF-Connecting-IP</span> <span className="text-[#E1E0CC]/60">"";</span>
        </div>
        <div>
          <span className="text-[#E1E0CC]/90">proxy_set_header</span> <span className="text-neutral-400">True-Client-IP</span> <span className="text-[#E1E0CC]/60">"";</span>
        </div>
      </div>
    </div>
  );
}

// Helper component for Terminal Telemetry Output
function TerminalFingerprintOutput() {
  return (
    <div className="relative rounded-xl border border-white/5 bg-[#080808] font-mono text-[11px] sm:text-xs leading-relaxed overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.01]">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#E1E0CC]/50" />
          <span className="text-white/60 font-mono text-[10px]">entropy_audit.json</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E1E0CC]/40 animate-pulse" />
          <span className="text-[10px] text-white/30 uppercase tracking-wider">Fingerprint Hash</span>
        </div>
      </div>
      <div className="p-4 sm:p-5 overflow-x-auto text-neutral-400 font-light space-y-1">
        <div><span className="text-white">{"{"}</span></div>
        <div className="pl-4">
          <span className="text-[#E1E0CC]/80">"hash"</span>: <span className="text-neutral-300">"a9c8f1e56b4d32a9f4c3b2d1e0a8f9c7"</span>,
        </div>
        <div className="pl-4">
          <span className="text-[#E1E0CC]/80">"entropyBits"</span>: <span className="text-neutral-300">18.42</span>, <span className="text-neutral-600">// Highly Unique</span>
        </div>
        <div className="pl-4">
          <span className="text-[#E1E0CC]/80">"connection"</span>: <span className="text-white">{"{"}</span>
        </div>
        <div className="pl-8">
          <span className="text-[#E1E0CC]/80">"tcpWindowSize"</span>: <span className="text-neutral-300">64240</span>,
        </div>
        <div className="pl-8">
          <span className="text-[#E1E0CC]/80">"rtt"</span>: <span className="text-neutral-300">42</span>
        </div>
        <div className="pl-4">
          <span className="text-white">{"}"}</span>,
        </div>
        <div className="pl-4">
          <span className="text-[#E1E0CC]/80">"webgl"</span>: <span className="text-white">{"{"}</span>
        </div>
        <div className="pl-8">
          <span className="text-[#E1E0CC]/80">"vendor"</span>: <span className="text-neutral-300">"Google Inc. (NVIDIA)"</span>,
        </div>
        <div className="pl-8">
          <span className="text-[#E1E0CC]/80">"renderer"</span>: <span className="text-neutral-300">"ANGLE (NVIDIA, GeForce RTX 4070...)"</span>
        </div>
        <div className="pl-4">
          <span className="text-white">{"}"}</span>
        </div>
        <div><span className="text-white">{"}"}</span></div>
      </div>
    </div>
  );
}

// 01. REVERSE PROXY & ROUTING
export function ExposurProxyRouting({ theme }: ComponentProps) {
  return (
    <section id="architecture" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5">
          <Cpu className="w-4 h-4 text-[#E1E0CC]/80" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Proxy & Routing
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Docker NAT isolation with Nginx reverse proxy header scrubbing.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            When running network audits inside virtualized containers, Docker's default Network Address Translation (NAT) bridge masks the client's actual incoming IP. Without a dedicated routing proxy, the web server only detects the internal Docker gateway IP (e.g. <code className="text-white">172.18.0.1</code>), leaving client geolocation audits completely broken.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6 space-y-6 text-[#E1E0CC]/70 font-light leading-relaxed text-base">
            <p>
              To solve this, EXPOSUR routes all inbound connections through an Nginx proxy layer at the edge. The Nginx server strips arbitrary headers injected by CDN routing layers, extracts the client's socket connection IP, and propagates verified <code className="text-white">X-Real-IP</code> and <code className="text-white">X-Forwarded-For</code> tags.
            </p>
            <p>
              This setup ensures the downstream Node.js app receives clean network metadata. Geolocation database mapping resolves client IPs locally within milliseconds against maxmind databases mounted into the container volume, avoiding third-party APIs.
            </p>
            <NginxConfigBlock />
          </div>

          <div className="lg:col-span-6 space-y-4">
            <ZoomableImage
              src="/PROJECTS/EXPOSUR/Architecture-diagram.webp"
              alt="EXPOSUR Architecture Diagram"
              wrapperClassName="w-full h-auto shadow-2xl ring-1 ring-white/5"
            />
            <div className="flex items-start gap-2.5 px-1">
              <ArrowRight className="w-4 h-4 text-white/40 mt-1 shrink-0" />
              <p className="text-xs text-white/50 font-light leading-relaxed">
                Telemetry routing pipeline: Client requests traverse Nginx edge proxy translation, forwarding verified header parameters to the containerized Express collector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 02. DNS LEAK ENGINE
export function ExposurDnsLeakEngine({ theme }: ComponentProps) {
  return (
    <section id="dns-leak" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5">
          <Globe className="w-4 h-4 text-[#E1E0CC]/80" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          DNS Leak Engine
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Intercepting resolver routing anomalies via unique subdomain challenges.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            A DNS leak occurs when a VPN fails to route client queries through its encrypted tunnel, routing them instead to default ISP nameservers. Because standard web requests don't show the user's active DNS resolvers, catching these leaks requires an active verification pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6 space-y-4">
            <ZoomableImage
              src="/PROJECTS/EXPOSUR/DNS-LEAK-TEST-PROCEDURE-DIAGRAM.webp"
              alt="DNS Leak Test Procedure Diagram"
              wrapperClassName="w-full h-auto shadow-2xl ring-1 ring-white/5"
            />
            <div className="flex items-start gap-2.5 px-1">
              <Shuffle className="w-4 h-4 text-white/40 mt-1 shrink-0" />
              <p className="text-xs text-white/50 font-light leading-relaxed">
                DNS Verification Loop: The browser fetches resource blocks from randomly-generated subdomains, forcing client resolvers to trigger lookup queries on our authoritative nameserver.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-[#E1E0CC]/70 font-light leading-relaxed text-base">
            <p>
              When a leak audit starts, the browser receives 10 dynamically generated unique subdomains (e.g. <code className="text-white">check-8f2c.exposur.net</code>). The client browser fetches resource assets from these subdomains.
            </p>
            <p>
              Since these subdomains are unique, the client's current DNS nameservers must ask our authoritative nameserver for resolution details. The nameserver captures the resolver IP addresses and matches them against the client's public IP address. Any mismatches indicate leaked DNS resolvers.
            </p>

            {/* Math Card / Equation */}
            <div className="p-6 rounded-xl border border-white/10 bg-[#0a0a0a] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E1E0CC]/5 blur-[45px] rounded-full pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#E1E0CC] font-semibold">Resolver Leak Definition</span>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    Identifies nameservers resolving client subdomains that do not match the client's detected public IP.
                  </p>
                </div>
                <div className="p-4 bg-black/60 rounded-lg border border-white/5 flex justify-center items-center font-mono text-xs sm:text-sm text-white/90 shadow-inner group-hover:border-[#E1E0CC]/20 transition-colors">
                  <span>Leaks = {'{ d_res ∈ Resolvers | d_res ≠ IP_client }'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 03. CLIENT FINGERPRINTING
export function ExposurFingerprinting({ theme }: ComponentProps) {
  return (
    <section id="fingerprint" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5">
          <ShieldAlert className="w-4 h-4 text-[#E1E0CC]/80" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Client Fingerprinting
        </h3>
      </div>

      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4">
          <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Measuring browser entropy and Webgl canvas signatures.
          </h4>
          <p className="text-[#E1E0CC]/70 font-light leading-relaxed text-lg max-w-3xl">
            Modern trackers do not require cookies to recognize you. Instead, they compile browser characteristics to construct a high-entropy fingerprint. The EXPOSUR engine audits these client indicators to show users exactly what they reveal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6 space-y-6 text-[#E1E0CC]/70 font-light leading-relaxed text-base">
            <p>
              The application scans multiple client parameters, including window sizes, hardware concurrency, language configurations, and rendering engines (WebGl GPU drivers). These details are converted into entropy scores representing fingerprint uniqueness.
            </p>
            <p>
              EXPOSUR also parses TCP parameters (like packet Window Size and TTL) to detect operating system details. This double verification catches mismatches, showing if a client's user-agent string has been spoofed.
            </p>

            {/* Math Card / Entropy Equation */}
            <div className="p-6 rounded-xl border border-white/10 bg-[#0a0a0a] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#E1E0CC]/5 blur-[45px] rounded-full pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#E1E0CC] font-semibold">Information Entropy Formula</span>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    Calculates fingerprint uniqueness based on parameter frequency across public data pools.
                  </p>
                </div>
                <div className="p-4 bg-black/60 rounded-lg border border-white/5 flex justify-center items-center font-mono text-xs sm:text-sm text-white/90 shadow-inner group-hover:border-[#E1E0CC]/20 transition-colors">
                  <span>H(X) = - Σ P(x_i) log_2 P(x_i)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <TerminalFingerprintOutput />
          </div>
        </div>
      </div>
    </section>
  );
}

// 04. WALKTHROUGH
export function ExposurWalkthrough({ project, theme }: { project: Project; theme: ProjectTheme }) {
  if (!project.detailedScreenshots) return null;
  return (
    <section id="screenshots" className="py-20 border-t border-white/5 space-y-12 scroll-mt-28">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5">
          <Eye className="w-4 h-4 text-[#E1E0CC]/80" />
        </div>
        <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E1E0CC]/60">
          Product Walkthrough
        </h3>
      </div>
      <div className="max-w-6xl">
        <PremiumGallery screenshots={project.detailedScreenshots} theme={theme} />
      </div>
    </section>
  );
}

// Helper SVG for Blockquote
function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      {...props}
    >
      <path d="M14.017 21L16.41 14.925H10.846V3H21V11.238L16.326 21H14.017ZM3.068 21L5.461 14.925H-0.103V3H10.051V11.238L5.377 21H3.068Z" />
    </svg>
  );
}

// Main Default Export
export default function ExposurCaseStudy({ project, theme }: { project: Project; theme: ProjectTheme }) {
  return (
    <div className="space-y-12 pb-24">
      <ExposurProxyRouting theme={theme} />
      <ExposurDnsLeakEngine theme={theme} />
      <ExposurFingerprinting theme={theme} />
      <ExposurWalkthrough project={project} theme={theme} />
    </div>
  );
}
