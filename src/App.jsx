import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <>
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="about" className="snap-start">
          <About />
        </section>
        <section id="contact" className="snap-start">
          <Contact />
        </section>
        <section id="footer" className="snap-start">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
