import React, { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Initialize scroll reveal matching the reference website
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.transitionDelay = `${Math.min(i * 60, 240)}ms`;
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Skip link for keyboard / screen-reader accessibility */}
      <a href="#hero" className="skip-link">Skip to content</a>

      {/* Header Navbar */}
      <Navigation />

      <main>
        {/* Hero with live topology canvas */}
        <Hero />

        {/* About with narrative + sticky at-a-glance card */}
        <About />

        {/* Skills grid */}
        <Skills />

        {/* Featured Projects with filter & case studies */}
        <Projects />

        {/* Work Experience pipeline timeline & honors */}
        <Experience />

        {/* Education & Certifications */}
        <Education />

        {/* Conversion & Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
