/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Globe, Coffee, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/60 shadow-lg shadow-black/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2.5">
            <a href="#home" className="group flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 duration-300">
                <span className="font-display font-extrabold text-white text-lg tracking-wider">W</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-wide text-white group-hover:text-cyan-400 duration-300">
                  Alex Carver
                </span>
                <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">
                  WordPress Engineer
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-300 relative ${
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/40"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="group px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-[13px] font-sans font-bold text-white shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 flex items-center space-x-1.5"
            >
              <span>Construct Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-gray-900/50 border border-gray-800 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-800 bg-gray-950/95 backdrop-blur-xl absolute left-0 w-full shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-5 space-y-2.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block px-4 py-3 rounded-xl font-sans text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 text-cyan-400 border-l-2 border-cyan-400 pl-3"
                        : "text-gray-300 hover:bg-gray-900 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-gray-800/80">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 font-sans font-bold text-white shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
