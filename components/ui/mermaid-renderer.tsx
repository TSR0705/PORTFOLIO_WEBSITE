"use client";

import { useEffect, useRef, useState } from "react";

interface MermaidRendererProps {
  chart: string;
  id: string;
}

export default function MermaidRenderer({ chart, id }: MermaidRendererProps) {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const loadAndRender = async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          securityLevel: "loose",
          themeVariables: {
            background: "#000000",
            primaryColor: "#E1E0CC",
            primaryTextColor: "#ffffff",
            lineColor: "#E1E0CC",
            secondaryColor: "#111111",
            tertiaryColor: "#1a1a1a",
          },
        });
        
        // Generate a valid element id
        const cleanId = `mermaid-svg-${id.replace(/[^a-zA-Z0-9]/g, "-")}`;
        const { svg: renderedSvg } = await mermaid.render(cleanId, chart);
        
        if (isMounted) {
          setSvg(renderedSvg);
          setError(null);
        }
      } catch (err: any) {
        console.error("Mermaid rendering failed:", err);
        if (isMounted) {
          setError("Failed to parse diagram.");
        }
      }
    };

    loadAndRender();

    return () => {
      isMounted = false;
    };
  }, [chart, id]);

  if (error) {
    return (
      <div className="p-4 rounded-xl border border-red-500/20 bg-red-950/10 text-red-400 font-mono text-xs max-w-full overflow-auto">
        <p className="font-semibold mb-2">Failed to render Mermaid diagram:</p>
        <pre className="whitespace-pre-wrap text-[10px] text-white/50">{chart}</pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="w-full h-72 rounded-xl border border-white/5 bg-[#030303] flex flex-col items-center justify-center p-6 space-y-4 animate-pulse">
        <div className="flex items-center space-x-3 opacity-25">
          <div className="w-14 h-8 rounded border border-white/20 bg-white/5" />
          <div className="w-6 h-[1px] bg-white/20" />
          <div className="w-14 h-8 rounded border border-white/20 bg-white/5" />
          <div className="w-6 h-[1px] bg-white/20" />
          <div className="w-14 h-8 rounded border border-white/20 bg-white/5" />
        </div>
        <span className="text-[10px] font-mono tracking-widest uppercase text-white/30">
          Compiling Architecture Schema...
        </span>
      </div>
    );
  }

  return (
    <div 
      className="w-full rounded-xl border border-white/5 bg-[#030303] p-4 md:p-8 overflow-x-auto flex justify-center shadow-inner"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
