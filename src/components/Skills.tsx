/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SKILL_CATEGORIES } from "../data";
import { Terminal, Database, Code, ShieldCheck, CheckSquare, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Skills() {
  const iconMap = [
    <Code className="w-5 h-5 text-cyan-400" />,
    <Terminal className="w-5 h-5 text-indigo-400" />,
    <Database className="w-5 h-5 text-emerald-400" />
  ];

  const highlights = [
    "Native Full Site Editing (FSE)",
    "PHP 8.2 Strict Type Safety",
    "Gutenberg Block React APIs",
    "Tailwind WP Theme Integrations",
    "Object Cache Pro (Redis)",
    "GraphQL WP Schema Designs"
  ];

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-gray-950 text-white overflow-hidden border-t border-gray-900/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Heading */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="font-mono text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-950/40 border border-indigo-850/60 px-3 py-1.5 rounded-md inline-flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Premium Tooling Expertise</span>
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Crafting Scalable, Modern WP Tech Stacks.
          </h2>
          <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">
            Structuring complete web platforms by marrying traditional WordPress stability with cutting-edge front-end libraries.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start mb-16">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={category.title}
              className="p-6.5 rounded-2xl glass-panel border border-gray-800/80 bg-slate-900/40 space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-850">
                <div className="w-10 h-10 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center">
                  {iconMap[index % iconMap.length]}
                </div>
                <h3 className="font-display font-bold text-base text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Progress Bars */}
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center font-sans text-xs">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-bold font-mono">{skill.level}%</span>
                    </div>
                    
                    {/* Meter bar container */}
                    <div className="h-2 rounded-full bg-gray-900 border border-gray-850 overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tech Checklist */}
        <div className="p-8 rounded-2xl border border-gray-800 bg-gradient-to-tr from-gray-950 via-slate-950 to-gray-900 text-center max-w-4xl mx-auto space-y-6">
          <h3 className="font-display font-bold text-lg text-white">
            Core Implementation Standards I Guarantee on Every Build
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 text-left">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center space-x-2 font-sans text-xs sm:text-sm text-gray-400">
                <div className="w-5 h-5 rounded-full bg-indigo-950 border border-indigo-800 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] text-cyan-400 font-bold">✔</span>
                </div>
                <span className="font-medium text-gray-300">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
