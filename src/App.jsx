import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'wouter';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'education', 'contact'];
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
        window.history.replaceState(null, null, `#${currentSection}`);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header activeSection={activeSection} />
      
      <main className="flex-grow">
        <Switch>
          <Route path="/" exact>
            <div className="flex flex-col space-y-24 pb-32">
              <section id="home" className="min-h-screen flex items-center">
                <Home />
              </section>
              
              <section id="about" className="min-h-screen flex items-center">
                <About />
              </section>
              
              <section id="projects" className="min-h-screen">
                <Projects />
              </section>
              
              <section id="skills" className="min-h-screen">
                <Skills />
              </section>
              
              <section id="education" className="min-h-screen">
                <Education />
              </section>
              
              <section id="contact" className="min-h-screen">
                <Contact />
              </section>
            </div>
          </Route>
          
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;