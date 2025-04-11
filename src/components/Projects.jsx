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
        <a 
          href="https://github.com/abhaybajpai" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md inline-block transition-colors duration-300"
        >
          View More on GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;