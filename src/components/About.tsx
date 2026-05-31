/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, Award, Code2, BookOpen, Star, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const stats = [
    { label: "WordPress Engineering", value: "8+ Years" },
    { label: "High-grade Plugins Built", value: "40+ Custom" },
    { label: "Database Speed Boosts", value: "300% Average" },
    { label: "WordPress Core Contributions", value: "12 Merges" }
  ];

  const timeline = [
    {
      year: "2024 - Present",
      title: "Senior WordPress Infrastructure Consultant",
      organization: "Bespoke digital agencies & enterprises",
      detail: "Specialize in React-driven custom Gutenberg design systems, secure e-commerce custom billing pipelines, and Headless WordPress architectures."
    },
    {
      year: "2021 - 2024",
      title: "Core Plugin Architect",
      organization: "WooCommerce Extension Partner",
      detail: "Led core development on modular Gutenberg visual products and lightweight custom subscription middleware, handling over $4M in monthly checkouts."
    },
    {
      year: "2018 - 2021",
      title: "Full-Stack Theme Developer",
      organization: "Elite ThemeForest Creators",
      detail: "Authored 10+ custom block-based themes with zero page builders, achieving flawless ratings and strict accessibility compatibility."
    }
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-gray-950 text-white overflow-hidden border-t border-gray-900/60"
    >
      {/* Background visual graphics */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Heading */}
        <div className="text-center md:text-left mb-16 md:mb-20 space-y-4 max-w-2xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-850/60 px-3 py-1.5 rounded-md inline-flex items-center space-x-1 px-4.5 py-2">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-cyan-400" />
            <span>Identity & Core Philosophy</span>
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Engineering Clean, Performant, Custom WP Infrastructure.
          </h2>
        </div>

        {/* Multi column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bio & Stat Cards (Col: 7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 font-sans text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Hello! I am <span className="text-white font-bold font-display">Alex Carver</span>, a veteran WordPress developer dedicated to dismantling the stereotype of slow, bloated WordPress installs. I build bespoke digital products tailored strictly around core velocity, beautiful usability, and scalable clean-code standards.
              </p>
              <p>
                My passion is developing native Gutenberg custom solutions in React, optimizing multi-million row WooCommerce databases, and building zero-vulnerability cloud deployments. By pairing WordPress with modern developer tools like TypeScript, Tailwind, and Node, I ensure clients receive modular code and incredible front-end speeds.
              </p>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl glass-panel glass-panel-hover border border-gray-900 flex flex-col space-y-1.5"
                >
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[11px] sm:text-xs text-gray-400 font-medium leading-normal">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Contribution Timelines */}
            <div className="pt-6 space-y-6">
              <h3 className="font-display font-semibold text-lg text-white flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-indigo-400" />
                <span>Professional Development Route</span>
              </h3>

              <div className="relative border-l border-gray-800 pl-6 space-y-8 ml-3">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative group/time">
                    {/* Circle timeline peg */}
                    <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-950 border border-gray-700 group-hover/time:border-cyan-400 group-hover/time:bg-cyan-950 duration-300 z-10" />
                    
                    <span className="font-mono text-[11px] font-bold text-cyan-400 tracking-wider">
                      {item.year}
                    </span>
                    <h4 className="font-display font-bold text-base text-white group-hover/time:text-indigo-300 duration-300">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-gray-400 font-semibold mb-1.5">
                      {item.organization}
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Avatar frame and custom highlights (Col: 5) */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Ambient Radial Mesh Background Glow */}
            <div className="absolute -inset-10 bg-indigo-500/5 blur-3xl pointer-events-none rounded-full" />

            {/* Custom geometric frame wrapper */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 group">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-65 z-10" />
              
              <img
                src="/src/assets/images/avatar_wp_dev_1780197256593.png"
                alt="Alex Carver WordPress Developer Portrait Avatar"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 duration-500 z-0"
                referrerPolicy="no-referrer"
              />

              {/* Glowing decorative indicator */}
              <div className="absolute top-4 right-4 z-20 bg-gray-950/80 backdrop-blur-md border border-gray-800/80 rounded-xl px-3 py-1.5 flex items-center space-x-1.5 text-xs font-mono text-cyan-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE DEV</span>
              </div>
            </div>

            {/* Quick endorsements box */}
            <div className="mt-8 w-full max-w-sm p-5 rounded-2xl glass-panel border border-gray-800/80 bg-slate-950/30 space-y-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="font-sans text-xs text-gray-300 font-bold ml-1.5">5.0 Customer Rating</span>
              </div>
              <p className="font-sans text-xs sm:text-sm italic text-gray-400 leading-relaxed">
                "Alex replaced our slow Elementor site with custom Gutenberg blocks. It now loads instantly, our SEO ranking jumped, and editors love the simple layouts."
              </p>
              <div className="flex items-center justify-between border-t border-gray-900 pt-3">
                <span className="font-display font-semibold text-xs text-white">CTO, Vertex Analytics</span>
                <span className="font-mono text-[10px] text-gray-500">Verified Client</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
