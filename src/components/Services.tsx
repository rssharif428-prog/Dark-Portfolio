/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { SERVICES } from "../data";
import { LayoutGrid, ShoppingBag, Cpu, Zap, Radio, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  const iconMap: { [key: string]: React.ReactNode } = {
    LayoutGrid: <LayoutGrid className="w-6 h-6 text-cyan-400" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-indigo-400" />,
    Cpu: <Cpu className="w-6 h-6 text-purple-400" />,
    Zap: <Zap className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-gray-950 text-white overflow-hidden border-t border-gray-900/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="font-mono text-xs font-semibold tracking-widest text-emerald-400 uppercase bg-emerald-950/40 border border-emerald-850/60 px-3 py-1.5 rounded-md inline-flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Productive Capacities</span>
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Comprehensive Engineering for WordPress Platforms.
          </h2>
          <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">
            Eliminating third-party dependencies, slow themes, and bulk configurations. Custom, modular WordPress integrations built to convert.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl glass-panel glass-panel-hover border border-gray-800 bg-slate-900/30 flex flex-col justify-between space-y-6 relative group"
            >
              {/* Highlight card marker */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-500/0 via-cyan-400/0 to-indigo-500/0 group-hover:from-cyan-400 group-hover:via-indigo-500 group-hover:to-purple-500 duration-500 rounded-t-2xl" />

              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-gray-950 border border-gray-850 flex items-center justify-center shadow-md">
                  {iconMap[service.icon] || <Radio className="w-6 h-6 text-cyan-400" />}
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-wide">
                  {service.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Feature Tags List */}
              <div className="border-t border-gray-900 pt-5 space-y-2.5">
                <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase font-bold block mb-1">
                  Deliverable Checklist
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 font-sans text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span className="font-medium truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Call out paragraph */}
        <div className="mt-16 text-center">
          <p className="font-sans text-xs text-gray-400">
            Need a hyper-custom integration not categorized above?{" "}
            <a
              href="#contact"
              className="font-semibold text-cyan-400 hover:text-cyan-300 hover:underline duration-300"
            >
              Propose customized contract details.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
