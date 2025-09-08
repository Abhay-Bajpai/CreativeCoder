import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ui/ProjectCard';
import { projects } from '../lib/data';
import { Filter } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'full-stack', label: 'Full Stack' }
  ];
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.categories.includes(activeCategory)
        )
      );
    }
  }, [activeCategory]);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">My Projects</h2>
        <div className="section-divider" />
        <p className="section-subtitle max-w-3xl mx-auto">
          Explore a collection of my projects spanning web development, AI/ML applications, and more.
        </p>
      </motion.div>
      
      {/* Filter Categories */}
      <motion.div 
        className="mb-10 flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-full flex justify-center mb-4 text-gray-400 items-center gap-2">
          <Filter className="h-5 w-5" />
          <span>Filter by category:</span>
        </div>
        
        {categories.map(category => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="h-full"
            >
              <ProjectCard 
                project={project} 
                isHovered={hoveredProject === project.id}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-400 mb-4">No projects found in this category.</p>
          <button
            onClick={() => setActiveCategory('all')}
            className="px-4 py-2 bg-primary text-white rounded-md"
          >
            View All Projects
          </button>
        </motion.div>
      )}
      
      {/* More Projects Link */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.a 
          href="https://github.com/Abhay-Bajpai" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          View More on GitHub
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Projects;