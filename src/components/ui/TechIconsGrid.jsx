import React from 'react';
import { motion } from 'framer-motion';

// SVG icons for the tech stack
const techIcons = [
  {
    name: 'React',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82c.63.6 1.28-.19 1.1-.95-.18-.75.42-1.3 1.13-1.3 1.44.01 2.35-1.11 2.03-2.13-.54-1.7-1.67-8.05-5.37-7.94-3.7.1-5.63 6.8-5.94 8.54-.1.52.1 1.25.73 1.34s1.65-.2 2-1.04"></path><path d="M2 12c0 1.64 2.17 3.3 5.3 4.18"></path><path d="M8.35 4.74C9.4 3.95 10.7 3.5 12 3.5c3.7 0 6.7 3 6.7 6.7 0 1.56-.54 3.01-1.43 4.15"></path></svg>`,
    color: '#61DAFB'
  },
  {
    name: 'TypeScript',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M7 11.5V14m0-2.5h7m-7 0v-7a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4z"></path></svg>`,
    color: '#3178C6'
  },
  {
    name: 'TailwindCSS',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 6.5C8 6.5 7 10 7 12c2-2 4-1.5 4 0.5c-2.5 0-4 1-4 2.5c0 0.5 0.5 2 2.5 3c1.5 0.75 4 1 8.5-0.5"></path><path d="M12 6.5C16 6.5 17 10 17 12c-2-2-4-1.5-4 0.5c2.5 0 4 1 4 2.5c0 0.5-0.5 2-2.5 3c-1.5 0.75-4 1-8.5-0.5"></path></svg>`,
    color: '#38B2AC'
  },
  {
    name: 'JavaScript',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M18.9 19c-.8.8-2.3 1-3.9 1-1.6 0-3.1-.3-3.8-1.1-.6-.7-.8-1.6-1-2.9l2-.8c.1.9.2 1.6.5 2 .3.4 1 .6 1.7.6.7 0 1.9-.1 1.9-1.2 0-.5-.2-.8-.5-1-.2-.1-.7-.2-2-.5-1.4-.3-2.2-.7-2.7-1.2-.5-.5-.8-1.1-.8-1.9 0-1.6 1.2-2.8 3.5-2.8 1.1 0 2.2.3 2.9.9.8.7 1 1.5 1.1 2.2l-2.1.9c0-.7-.3-1.8-1.7-1.8-1.1 0-1.5.6-1.5 1 0 .4.2.7.5.8.3.1.9.3 1.6.4 1.5.3 2.3.6 2.9 1.1.7.7 1 1.6 1 2.6 0 1.2-.4 2-1.1 2.7"></path><path d="M9 9h-3v10h3v-10z"></path></svg>`,
    color: '#F7DF1E'
  },
  {
    name: 'Node.js',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 22v-4"></path><path d="M9 8l-2 2"></path><path d="M15 8l2 2"></path><path d="M9 12H4"></path><path d="M20 12h-5"></path><path d="M8 16l-1-1"></path><path d="M16 16l1-1"></path><circle cx="12" cy="12" r="4"></circle></svg>`,
    color: '#339933'
  },
  {
    name: 'Python',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 12c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2s2 .9 2 2v4c0 1.1-.9 2-2 2z"></path><path d="M12 17c0 1.7-1.3 3-3 3-1.7 0-3-1.3-3-3s1.3-3 3-3h3v3z"></path><path d="M13 22H9C3 22 3 16 3 16v-5h6V9c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v7h-2v-1"></path><path d="M21.1 8.4C19.6 6.4 14 6.9 14 6.9l.1-1.8C14.1 5.1 19 3 21 5.1c1.3 1.3 1.4 3 .1 3.3"></path></svg>`,
    color: '#3776AB'
  },
  {
    name: 'Git',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M12 5m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M12 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M12 8l0 8"></path><path d="M12 5l6 6"></path><path d="M12.01 14l5.99 -5.99"></path></svg>`,
    color: '#F05032'
  },
  {
    name: 'AI/ML',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M5 5l3 3"></path><path d="M16 16l3 3"></path><path d="M16 5l3 -3"></path><path d="M5 19l3 -3"></path><circle cx="12" cy="12" r="4"></circle></svg>`,
    color: '#FF6B6B'
  }
];

const TechIconsGrid = () => {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 100
      }
    }),
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4 rounded-xl">
      {techIcons.map((icon, index) => (
        <motion.div
          key={icon.name}
          className="relative p-3 rounded-lg backdrop-blur-sm bg-gray-800/30 border border-gray-700 hover:border-primary/50 transition-colors duration-300 group"
          custom={index}
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.3)" }}
        >
          <motion.div 
            className="w-10 h-10 mx-auto"
            style={{ color: icon.color }}
            dangerouslySetInnerHTML={{ __html: icon.svg }}
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.div 
            className="mt-2 text-xs text-center text-gray-400 group-hover:text-primary transition-colors duration-300"
          >
            {icon.name}
          </motion.div>
          <motion.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-lg transition-opacity duration-500"
            animate={{ 
              background: ["linear-gradient(to right, rgba(139, 92, 246, 0), rgba(139, 92, 246, 0.05), rgba(139, 92, 246, 0))", 
                          "linear-gradient(to right, rgba(139, 92, 246, 0), rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0))"],
            }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TechIconsGrid;