import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Code, ExternalLink, Sparkles, Star, GitFork, Eye, Calendar } from "lucide-react";
import { fetchGitHubStats, getGitHubOGImage, getGitHubShields } from '../../lib/data';

const ProjectCard = ({ project, isHovered = false }) => {
  const [gitHubStats, setGitHubStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (project.githubRepo) {
      fetchGitHubStats(project.githubRepo)
        .then(stats => {
          setGitHubStats(stats);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [project.githubRepo]);

  const ogImage = project.githubRepo ? getGitHubOGImage(project.githubRepo) : null;
  const shields = project.githubRepo ? getGitHubShields(project.githubRepo, gitHubStats?.language) : null;

  return (
    <motion.div
      className="project-card bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl relative z-10 border border-gray-700/50 hover:border-primary/30"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      data-category={project.categories.join(" ")}
    >
      {/* Animated border glow effect */}
      <motion.div 
        className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary via-violet-500 to-primary opacity-0 blur-md"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Enhanced image section with GitHub OG image */}
      <div className="relative h-48 bg-gray-900 overflow-hidden">
        {ogImage && !imageError ? (
          <div className="relative h-full">
            <img 
              src={ogImage}
              alt={`${project.title} repository preview`}
              className={`w-full h-full object-cover transition-all duration-500 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-gray-900/30" />
            
            {/* Featured badge */}
            {project.featured && (
              <motion.div 
                className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full flex items-center"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <Star className="w-3 h-3 mr-1" />
                Featured
              </motion.div>
            )}
            
            {/* GitHub stats overlay */}
            {gitHubStats && !isLoading && (
              <motion.div 
                className="absolute bottom-3 right-3 flex space-x-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center px-2 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-yellow-400 text-xs">
                  <Star className="w-3 h-3 mr-1" />
                  {gitHubStats.stars}
                </div>
                <div className="flex items-center px-2 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-blue-400 text-xs">
                  <GitFork className="w-3 h-3 mr-1" />
                  {gitHubStats.forks}
                </div>
              </motion.div>
            )}
            
            {/* Project title overlay */}
            <motion.h3 
              className="absolute bottom-4 left-4 text-xl font-bold text-white flex items-center"
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
                  <Sparkles className="h-4 w-4 text-yellow-400" />
                </motion.span>
              )}
              {project.title}
            </motion.h3>
          </div>
        ) : (
          // Fallback gradient design when no OG image
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
            
            {project.featured && (
              <motion.div 
                className="absolute top-3 left-3 px-2 py-1 bg-white/20 text-white text-xs font-semibold rounded-full flex items-center"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <Star className="w-3 h-3 mr-1" />
                Featured
              </motion.div>
            )}

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
        )}
      </div>

      <div className="relative p-6 z-10 bg-gray-800/90 backdrop-blur-sm">
        {/* GitHub language badge and updated info */}
        {gitHubStats && !isLoading && (
          <motion.div 
            className="flex justify-between items-center mb-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              {gitHubStats.language && (
                <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                  {gitHubStats.language}
                </span>
              )}
            </div>
            {gitHubStats.updatedAt && (
              <div className="flex items-center text-xs text-gray-400">
                <Calendar className="w-3 h-3 mr-1" />
                {new Date(gitHubStats.updatedAt).toLocaleDateString()}
              </div>
            )}
          </motion.div>
        )}
        
        <p className="text-gray-300 mb-4 line-clamp-3">
          {gitHubStats?.description || project.description}
        </p>

        {/* GitHub topics if available */}
        {gitHubStats?.topics && gitHubStats.topics.length > 0 && (
          <motion.div 
            className="flex flex-wrap gap-1 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {gitHubStats.topics.slice(0, 4).map((topic, index) => (
              <span 
                key={topic}
                className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600/50"
              >
                #{topic}
              </span>
            ))}
            {gitHubStats.topics.length > 4 && (
              <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-md border border-gray-600/50">
                +{gitHubStats.topics.length - 4}
              </span>
            )}
          </motion.div>
        )}

        <motion.div 
          className="flex flex-wrap gap-2 mb-5"
        >
          {project.technologies.map((tech, index) => (
            <motion.span 
              key={index} 
              className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Enhanced action buttons */}
        <div className="flex space-x-3">
          {project.codeUrl && (
            <motion.a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 bg-gray-900/80 hover:bg-gray-700/80 text-white rounded-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden group border border-gray-600/50 hover:border-primary/50"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 -translate-x-full group-hover:animate-shimmer" />
              <Code className="h-4 w-4 mr-2" />
              <span className="font-medium">Code</span>
            </motion.a>
          )}
          
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white rounded-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden group shadow-lg hover:shadow-primary/25"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 25px rgba(139, 92, 246, 0.4)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shimmer" />
              <ExternalLink className="h-4 w-4 mr-2" />
              <span className="font-medium">Demo</span>
            </motion.a>
          )}
        </div>
        
        {/* GitHub shields at bottom */}
        {shields && gitHubStats && !isLoading && (
          <motion.div 
            className="flex justify-center space-x-2 mt-4 pt-4 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <img 
              src={shields.stars} 
              alt="GitHub Stars" 
              className="h-5 hover:scale-105 transition-transform cursor-pointer"
              loading="lazy"
            />
            <img 
              src={shields.forks} 
              alt="GitHub Forks" 
              className="h-5 hover:scale-105 transition-transform cursor-pointer"
              loading="lazy"
            />
            {gitHubStats.language && (
              <img 
                src={shields.language} 
                alt="Top Language" 
                className="h-5 hover:scale-105 transition-transform cursor-pointer"
                loading="lazy"
              />
            )}
          </motion.div>
        )}
        
        {/* Loading state */}
        {isLoading && (
          <motion.div 
            className="flex justify-center items-center py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
