/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { SLIDER_ITEMS } from "../data";
import { ChevronLeft, ChevronRight, Zap, RefreshCw, Layout, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  const phrases = [
    "Elite Gutenberg Blocks",
    "Tailored WooCommerce Engines",
    "Headless WordPress Solutions",
    "100/100 Core Web Vitals"
  ];

  // Typing effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && typedText === currentPhrase) {
      // Hold at end
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentPhrase.substring(0, typedText.length - 1)
            : currentPhrase.substring(0, typedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  // Parallax scroll offset listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDER_ITEMS.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDER_ITEMS.length) % SLIDER_ITEMS.length);
  };

  const activeSlide = SLIDER_ITEMS[currentSlide];

  // Scroll to portfolio
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gray-950 text-white"
    >
      {/* Parallax Background Elements */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ transform: `translateY(${scrollOffset * 0.15}px)` }}
      >
        {/* Soft glowing mesh background spheres */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl glow-animation-1" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl glow-animation-2" />
        
        {/* Abstract code/grid backdrop */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Slide Text Panel (Col: 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-6">
            <div>
              <span className="font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-850/60 px-3 py-1.5 rounded-md inline-flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Available for elite projects</span>
              </span>
            </div>

            {/* Dynamic Sliding Title */}
            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] min-h-[140px] sm:min-h-[170px] lg:min-h-[220px]">
                I Architect WordPress <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                  {typedText}
                  <span className="absolute -right-1.5 bottom-1.5 h-10 w-[3px] bg-cyan-400 animate-pulse" />
                </span>
              </h1>
            </div>

            <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
              Specialized in high-grade WordPress core design. Crafting lightning-fast custom themes, fully optimized e-commerce architectures, and decoupled headless integrations.
            </p>

            {/* Slide Quick Navigation Context Display */}
            <div className="p-4.5 rounded-2xl glass-panel border border-gray-800/80 bg-slate-900/40 flex flex-col space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  Featured Case
                </span>
                <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded border ${activeSlide.accent}`}>
                  {activeSlide.badge}
                </span>
              </div>
              <p className="font-display font-bold text-base text-white">
                {activeSlide.title}
              </p>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                {activeSlide.subtitle}
              </p>
            </div>

            {/* Call to Action Button Row */}
            <div className="flex flex-wrap gap-4 items-center pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 To-purple-600 text-sm font-sans font-bold text-white shadow-lg shadow-cyan-500/15 hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center space-x-2"
              >
                <span>View Works</span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-gray-900 border border-gray-800 text-sm font-sans font-bold text-gray-300 hover:text-white hover:bg-gray-850 hover:border-gray-700 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Book Architecture</span>
              </a>
            </div>
          </div>

          {/* Slide Interactive Gallery Asset Showcase Panel (Col: 7) */}
          <div className="lg:col-span-7 relative flex items-center justify-center p-4">
            {/* Parallax layer responsive to scroll */}
            <div
              className="absolute -inset-4 border border-dashed border-gray-800/50 rounded-3xl pointer-events-none"
              style={{ transform: `translateY(${scrollOffset * -0.05}px)` }}
            />

            {/* Frame Backdrop Glow */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-cyan-500/10 via-indigo-600/10 to-transparent blur-2xl rounded-3xl pointer-events-none" />

            <div className="w-full relative aspect-video sm:aspect-auto sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-950/20 border border-gray-800 bg-gray-900 flex items-center justify-center group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.98, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeSlide.image}
                    alt={activeSlide.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80" />
                  
                  {/* Overlay Tags details inside Image card */}
                  <div className="absolute bottom-5 left-5 right-5 flex flex-col space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400 font-bold">
                      Interactive Live Simulation
                    </span>
                    <p className="font-display font-medium text-white text-base">
                      {activeSlide.title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Navigation Buttons */}
              <div className="absolute right-4 bottom-4 flex items-center space-x-1.5 z-20">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-lg bg-gray-950/80 border border-gray-800 text-gray-300 hover:text-white hover:bg-gray-900 hover:border-gray-700 hover:scale-105 duration-350 shadow-md"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="px-3 py-1 rounded-lg bg-gray-950/80 border border-gray-800 text-[10px] font-mono text-gray-400 font-semibold shadow-md">
                  {currentSlide + 1} / {SLIDER_ITEMS.length}
                </div>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg bg-gray-950/80 border border-gray-800 text-gray-300 hover:text-white hover:bg-gray-900 hover:border-gray-700 hover:scale-105 duration-350 shadow-md"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cues */}
        <div className="flex flex-col items-center justify-center pt-16">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center justify-center space-y-1.5 cursor-pointer text-gray-500 hover:text-cyan-400 duration-300"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest font-semibold">
              Explore Depth
            </span>
            <div className="w-6 h-10 border border-gray-700 group-hover:border-cyan-500/50 rounded-full flex justify-center p-1 duration-300">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-cyan-400"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
