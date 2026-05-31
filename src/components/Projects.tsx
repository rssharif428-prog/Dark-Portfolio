/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { ExternalLink, Github, Sparkles, X, Activity, Cpu, Milestone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const tabs = ["All", "WooCommerce", "Themes", "Plugins", "Optimization"];

  const filteredProjects = activeTab === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeTab);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 bg-gray-950 text-white overflow-hidden border-t border-gray-900/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Header */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-850/60 px-3 py-1.5 rounded-md inline-flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Showcase of work</span>
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Production Cases Deployed Worldwide.
          </h2>
          <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">
            Filter through architectural projects to discover how custom WordPress programming drives organic conversions, speeds, and usability.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all duration-300 relative ${
                activeTab === tab
                  ? "text-cyan-400 bg-cyan-950/50 border border-cyan-800/60"
                  : "text-gray-400 hover:text-white bg-transparent border border-transparent hover:bg-gray-900/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl overflow-hidden glass-panel border border-gray-800/80 bg-slate-900/30 flex flex-col justify-between glow-card duration-300 relative"
              >
                {/* Image and link container */}
                <div className="relative aspect-video overflow-hidden border-b border-gray-905 bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent opacity-85" />
                  
                  {/* Category tag bubble overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[9px] uppercase tracking-wider bg-gray-950/90 border border-gray-800 text-cyan-400 px-2.5 py-1 rounded-md font-bold">
                      {project.category}
                    </span>
                  </div>

                  {/* Highlights Metrics Bar */}
                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                    {project.metrics.slice(0, 3).map((metric, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-gray-950/90 border border-gray-850 backdrop-blur-sm flex flex-col items-center justify-center text-center">
                        <span className="font-mono text-xs sm:text-sm font-extrabold text-cyan-400 tracking-tight leading-none">
                          {metric.value}
                        </span>
                        <span className="font-sans text-[8px] sm:text-[9px] text-gray-400 uppercase tracking-wider mt-1 leading-none font-bold">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content body detail */}
                <div className="p-6 space-y-4">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-400 duration-300">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Technologies row tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] uppercase font-bold text-gray-400 bg-gray-900 border border-gray-850 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link / modal trigger action bar */}
                  <div className="pt-4 border-t border-gray-900 flex justify-between items-center text-sm">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-cyan-400 hover:text-cyan-300 font-sans font-bold flex items-center space-x-1 hover:underline cursor-pointer transition-colors"
                    >
                      <span>Examine Case File</span>
                      <span className="text-[11px] font-bold">→</span>
                    </button>
                    
                    <div className="flex items-center space-x-3 text-gray-400">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="hover:text-white duration-300"
                          aria-label="View Github Secrets"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="hover:text-white duration-300"
                          aria-label="Launch Project Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal of selected project case files */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backing layer blur cover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-gray-950/80 backdrop-blur-md"
              />

              {/* Modal Frame Body (responsive) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-3xl rounded-2xl glass-panel border border-gray-800 bg-gray-950 shadow-2xl overflow-y-auto max-h-[90vh] z-10 p-6 sm:p-8 space-y-6"
              >
                {/* Close Button Bubble */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-700 duration-300"
                  aria-label="Close Case File"
                >
                  <X className="w-4.5 h-4.5" />
                </button>

                {/* Modal Title Block */}
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider bg-indigo-950/50 border border-indigo-850 px-2.5 py-1 rounded-md text-indigo-400 font-bold">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-wide">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Cover High-Res Visual */}
                <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-850 bg-gray-900">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-60" />
                </div>

                {/* Analytics metrics row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedProject.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-gray-900 bg-slate-900/10 flex items-center space-x-3"
                    >
                      <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-850/60 flex items-center justify-center flex-shrink-0">
                        <Activity className="w-4.5 h-4.5 text-cyan-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-base font-extrabold text-cyan-400 leading-none">
                          {metric.value}
                        </span>
                        <span className="font-sans text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1.5 leading-none">
                          {metric.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Modular Case write up */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-8 space-y-4">
                    <h4 className="font-display font-bold text-sm text-white flex items-center space-x-1.5">
                      <Milestone className="w-4 h-4 text-cyan-400" />
                      <span>Case Challenge & Resolution Layout</span>
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Built with details */}
                  <div className="md:col-span-4 p-4.5 rounded-xl border border-gray-900 bg-slate-900/10 space-y-3 flex flex-col">
                    <h4 className="font-display font-semibold text-xs text-white uppercase tracking-wide flex items-center space-x-1.5">
                      <Cpu className="w-4.5 h-4.5 text-indigo-400" />
                      <span>Technologies used</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[9px] uppercase font-bold text-gray-350 bg-gray-950 border border-gray-850 px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer buttons row */}
                <div className="pt-4 border-t border-gray-900 flex justify-end space-x-3.5">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4.5 py-2.5 rounded-xl bg-transparent border border-gray-800 text-xs sm:text-sm font-sans font-bold text-gray-300 hover:text-white hover:bg-gray-900 hover:border-gray-700 transition"
                  >
                    Close Sheet
                  </button>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      className="px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-xs sm:text-sm font-sans font-bold text-white hover:opacity-90 flex items-center space-x-1.5 hover:shadow-lg shadow-cyan-500/10 duration-300"
                    >
                      <span>Launch Prototype</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
