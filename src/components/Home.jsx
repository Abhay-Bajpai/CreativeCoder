import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import FloatingElements from './ui/FloatingElements';
import TechIconsGrid from './ui/TechIconsGrid';

const Home = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <FloatingElements className="opacity-20" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen py-24">
        {/* Left column - Content */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Abhay Bajpai</span>
          </h1>
          
          <div className="text-2xl sm:text-3xl text-gray-300 mb-6 h-20">
            <TypeAnimation
              sequence={[
                'Software Developer', 1000,
                'AI/ML Explorer', 1000,
                'Problem Solver', 1000,
                'Tech Enthusiast', 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-light"
            />
          </div>
          
          <p className="text-gray-400 mb-8 max-w-md text-lg">
            Building innovative solutions with a passion for clean code, 
            user experience, and cutting-edge technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md flex items-center relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 -translate-x-full group-hover:animate-shimmer" />
              Get in Touch 
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            
            <motion.a
              href="https://drive.google.com/file/d/1YaCgtmZV6AuwZVSqylCN_309brGZJBP0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md flex items-center relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 -translate-x-full group-hover:animate-shimmer" />
              View Resume
              <Download className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
          
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/Abhay-Bajpai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300 social-icon"
              whileHover={{ scale: 1.2, color: 'hsl(var(--primary))' }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/abhay-bajpai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300 social-icon"
              whileHover={{ scale: 1.2, color: 'hsl(var(--primary))' }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:abhayofc59@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors duration-300 social-icon"
              whileHover={{ scale: 1.2, color: 'hsl(var(--primary))' }}
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
        
        {/* Right column - Tech stack card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          <div className="card-3d bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-white">Tech Stack</h3>
            <TechIconsGrid />
          </div>
          
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-violet-500/20 blur-xl opacity-30"
            animate={{ 
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;