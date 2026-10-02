import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Recognition } from './components/Recognition';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="portfolio-app">
      {/* Fixed Sticky Header Navbar */}
      <Navigation />

      {/* Natural Vertical Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Recognition />
        <Contact />
      </main>

      {/* Clean Recruiter Footer */}
      <Footer />
    </div>
  );
};

export default App;
