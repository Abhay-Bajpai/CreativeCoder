import React from 'react';
import { motion } from "framer-motion";
import { Code, ExternalLink, Sparkles } from "lucide-react";

const ProjectCard = ({ project, isHovered = false }) => {
  return (
    <motion.div
      className="project-card bg-gray-800 rounded-lg overflow-hidden shadow-lg relative z-10"
      whileHover={{ y: -5 }}
      data-category={project.categories.join(" ")}
    >
      {/* Animated border glow effect */}
      <motion.div 
        className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary to-violet-500 opacity-0 blur-sm group-hover:opacity-100 transition duration-500"
        animate={{ opacity: isHovered ? 0.5 : 0 }}
      />

      <div className="relative h-48 bg-gray-700 overflow-hidden">
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${project.gradientColor} opacity-90 flex items-center justify-center`}
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            filter: isHovered ? "brightness(1.1)" : "brightness(1)"
          }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)"
            }}
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? [0.1, 0.2, 0.1] : 0.1
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />

          <motion.h3 
            className="text-xl font-bold text-white px-4 text-center relative z-10 flex items-center justify-center"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {isHovered && (
              <motion.span 
                className="mr-2"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5 text-white/80" />
              </motion.span>
            )}
            {project.title}
          </motion.h3>
        </motion.div>
      </div>

      <div className="relative p-6 z-10 bg-gray-800">
        <p className="text-gray-300 mb-4">{project.description}</p>

        <motion.div 
          className="flex flex-wrap mb-5"
        >
          {project.technologies.map((tech, index) => (
            <motion.span 
              key={index} 
              className="tech-tag mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(139, 92, 246, 0.3)",
                color: "#ffffff" 
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <div className="flex space-x-3">
          {project.codeUrl && (
            <motion.a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-md transition-colors duration-300 flex items-center relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 -translate-x-full group-hover:animate-shimmer" />
              <Code className="h-5 w-5 mr-2" />
              View Code
            </motion.a>
          )}
          
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors duration-300 flex items-center relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 -translate-x-full group-hover:animate-shimmer" />
              <ExternalLink className="h-5 w-5 mr-2" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
