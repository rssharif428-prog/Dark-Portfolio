/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Twitter, Linkedin, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "Twitter", href: "#", icon: <Twitter className="w-4 h-4" /> },
    { name: "LinkedIn", href: "#", icon: <Linkedin className="w-4 h-4" /> },
    { name: "GitHub", href: "#", icon: <Github className="w-4 h-4" /> },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-900 text-gray-450 text-xs sm:text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand/Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-display font-extrabold text-white text-xs">
                W
              </div>
              <span className="font-display font-bold text-white tracking-wide">Alex Carver</span>
            </div>
            <p className="font-sans text-[11px] text-gray-500 max-w-xs leading-normal">
              High-performance custom WordPress developer making rapid block structures and e-commerce checkouts.
            </p>
          </div>

          {/* Social icons row */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-9 h-9 rounded-xl bg-gray-950 border border-gray-900 text-gray-400 hover:text-white hover:bg-gray-900 hover:border-gray-800 flex items-center justify-center transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Back to top anchor */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="font-sans text-[11px] text-gray-500 flex items-center">
              Made with <Heart className="w-3 h-3 text-red-500 mx-1 fill-red-500" /> and React.
            </span>
            <button
              onClick={handleScrollTop}
              className="p-2.5 rounded-xl bg-gray-900 border border-gray-850 text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-700 transition flex items-center justify-center cursor-pointer shadow-md"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4.5 h-4.5" />
            </button>
          </div>

        </div>

        <div className="border-t border-gray-900/60 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <p>© 2026 Alex Carver. All corporate rights reserved.</p>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-gray-300 duration-300">Privacy Protocols</a>
            <a href="#" className="hover:text-gray-300 duration-300">Contract Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
