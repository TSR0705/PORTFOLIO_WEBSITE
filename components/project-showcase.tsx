"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, X, Cpu, Layers, Terminal, Sparkles, Filter } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project, projectsData } from "@/lib/portfolio-data";

export default function ProjectShowcase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Categories list extracted dynamically (with counts)
  const categories = useMemo(() => {
    const list = new Set<string>();
    projectsData.forEach(p => list.add(p.category));
    return ["all", ...Array.from(list)];
  }, []);

  // Statuses list
  const statuses = useMemo(() => {
    const list = new Set<string>();
    projectsData.forEach(p => list.add(p.status));
    return ["all", ...Array.from(list)];
  }, []);

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
      const matchesStatus = selectedStatus === "all" || project.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  return (
    <section id="showcase" className="min-h-screen w-full bg-black text-white px-6 py-20 md:py-32 relative border-t border-white/5">
      {/* Noise background */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.4] mix-blend-overlay" />
      
      {/* Glowing background meshes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E1E0CC]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-8 bg-[#E1E0CC]" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#E1E0CC]/80 uppercase">EXPLORE MY BUILD LOG</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-medium leading-[0.85] tracking-[-0.05em] text-[8vw] md:text-[5vw] mb-4 text-[#E1E0CC]"
          >
            INTERACTIVE SHOWCASE
          </motion.h2>
          <p className="text-white/50 text-sm md:text-base max-w-2xl font-sans leading-relaxed">
            Search, filter, and inspect detailed breakdowns of my engineering experiments, production systems, and hackathon wins.
          </p>
        </div>

        {/* Controls: Search and Filters */}
        <div className="flex flex-col gap-6 mb-12 p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            
            {/* Search Input */}
            <div className="lg:col-span-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 transition-colors duration-300 group-focus-within:text-[#E1E0CC]" />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E1E0CC]/50 focus:bg-white/[0.05] transition-all"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="lg:col-span-2 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono text-white/40 mr-2 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5" /> Category:
              </span>
              {categories.map((cat) => {
                const count = cat === "all" 
                  ? projectsData.length 
                  : projectsData.filter(p => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 border ${
                      selectedCategory === cat
                        ? "bg-[#E1E0CC] text-black border-[#E1E0CC]"
                        : "bg-white/[0.02] text-white/60 border-white/10 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {cat.replace("-", " ")} <span className="opacity-50 text-[10px]">({count})</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap gap-2 items-center pt-4 border-t border-white/5">
            <span className="text-xs font-mono text-white/40 mr-2">Status:</span>
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-3 py-1 rounded-full text-[11px] font-sans transition-all duration-300 ${
                  selectedStatus === status
                    ? "bg-white/15 text-white border border-white/30"
                    : "bg-transparent text-white/40 border border-transparent hover:text-white/60"
                }`}
              >
                {status.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveProject(project)}
                className="group border border-white/15 rounded-2xl p-6 bg-white/[0.02] backdrop-blur-md flex flex-col justify-between min-h-[280px] cursor-pointer hover:border-[#E1E0CC]/30 hover:bg-white/[0.04] transition-colors relative overflow-hidden"
              >
                {/* Visual hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#E1E0CC]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start gap-4 mb-5">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-white/40">
                      {project.category.replace("-", " ")}
                    </span>
                    <span 
                      className={`text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border ${
                        project.status === "hackathon-winner" 
                          ? "border-[#E1E0CC]/40 text-[#E1E0CC]" 
                          : "border-white/15 text-white/60"
                      }`}
                    >
                      {project.status.replace("-", " ")}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium tracking-tight mb-2 text-white group-hover:text-[#E1E0CC] transition-colors duration-300 flex items-center gap-2">
                    {project.title}
                    {project.status === "hackathon-winner" && <Sparkles className="w-4 h-4 text-[#E1E0CC]" />}
                  </h3>

                  <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6 font-sans line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[9px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[9px] font-mono text-white/30 px-1 py-0.5">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <span className="text-[10px] font-mono text-[#E1E0CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-end flex items-center gap-1">
                    Details →
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-white/10 rounded-2xl bg-white/[0.01]">
            <Terminal className="w-10 h-10 mx-auto text-white/20 mb-3" />
            <p className="text-white/40 font-mono text-sm">No projects found matching search query.</p>
          </div>
        )}

      </div>

      {/* Immersive Project Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/15 rounded-3xl overflow-hidden max-h-[85vh] flex flex-col shadow-2xl z-10"
            >
              {/* Top Bar / Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-black/40">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#E1E0CC]" />
                  <span className="text-xs font-mono text-white/60 tracking-wider">PROJECT DEEP-DIVE</span>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content Scrollable Area */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-6 font-sans">
                
                {/* Categories & Badges */}
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono uppercase bg-white/5 px-2.5 py-1 rounded text-white/60 border border-white/10">
                    {activeProject.category.replace("-", " ")}
                  </span>
                  <span className="text-xs font-mono uppercase bg-white/5 px-2.5 py-1 rounded text-white/60 border border-white/10">
                    {activeProject.status.replace("-", " ")}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-3xl font-medium tracking-tight text-white mb-2">
                    {activeProject.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {activeProject.longDescription || activeProject.description}
                  </p>
                </div>

                {/* Challenge & Solution Side-by-Side */}
                {(activeProject.challenge || activeProject.solution) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                    {activeProject.challenge && (
                      <div className="space-y-2">
                        <h4 className="text-[#E1E0CC] font-mono text-xs uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E1E0CC]" /> The Challenge
                        </h4>
                        <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                          {activeProject.challenge}
                        </p>
                      </div>
                    )}
                    {activeProject.solution && (
                      <div className="space-y-2">
                        <h4 className="text-white font-mono text-xs uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" /> The Solution
                        </h4>
                        <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                          {activeProject.solution}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="pt-6 border-t border-white/5 space-y-2">
                  <h4 className="text-white/40 font-mono text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> Full Stack & Infrastructure
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-white bg-white/5 border border-white/10 px-3 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Footer Actions */}
              <div className="flex flex-wrap justify-between items-center gap-4 px-6 py-4 border-t border-white/5 bg-black/40">
                <div className="flex gap-3 w-full sm:w-auto">
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-mono border border-white/10 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" /> GitHub Repo
                    </a>
                  )}
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 bg-[#E1E0CC] hover:bg-[#E1E0CC]/90 text-black rounded-xl text-xs font-mono transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Launch Live Demo
                    </a>
                  )}
                </div>
                
                <button
                  onClick={() => setActiveProject(null)}
                  className="w-full sm:w-auto text-center px-4 py-2 text-xs font-mono text-white/40 hover:text-white transition-colors"
                >
                  Close deep-dive
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
