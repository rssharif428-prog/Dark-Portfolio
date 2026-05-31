/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Scroll spy implementation using simple IntersectionObserver
  useEffect(() => {
    const sections = ["home", "about", "skills", "services", "projects", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Focus triggers in mid-screen bounds
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div id="wp-site-root" className="min-h-screen bg-gray-950 font-sans text-gray-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Dynamic Header elements */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Modules */}
      <main>
        
        {/* Section 1: Hero view containing Interactive slider and typing indicators */}
        <section id="hero-wrapper" className="w-full">
          <Hero />
        </section>

        {/* Section 2: Personal Profile */}
        <section id="about-wrapper" className="w-full">
          <About />
        </section>

        {/* Section 3: Professional skills meters */}
        <section id="skills-wrapper" className="w-full">
          <Skills />
        </section>

        {/* Section 4: Operational Services deliverables */}
        <section id="services-wrapper" className="w-full">
          <Services />
        </section>

        {/* Section 5: Filterable Project Gallery Showcase */}
        <section id="projects-wrapper" className="w-full">
          <Projects />
        </section>

        {/* Section 6: Contact Parameter Specification workspace */}
        <section id="contact-wrapper" className="w-full">
          <Contact />
        </section>

      </main>

      {/* Corporate footer details */}
      <Footer />

    </div>
  );
}
