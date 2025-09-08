import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiTypescript,
  SiTensorflow,
  SiMongodb,
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiHtml5,
  SiTailwindcss,
  SiExpress,
  SiFlask
} from "react-icons/si";
import { Brain, BarChart3, Bot } from "lucide-react";
import { skillCategories, concepts } from "../lib/data";

const Skills = () => {
  // Map icon components
  const getIconComponent = (iconName) => {
    const iconMap = {
      javascript: SiJavascript,
      react: SiReact,
      python: SiPython,
      nodejs: SiNodedotjs,
      typescript: SiTypescript,
      tensorflow: SiTensorflow,
      mongodb: SiMongodb,
      git: SiGit,
      docker: SiDocker,
      aws: SiAmazonwebservices,
      html5: SiHtml5,
      tailwindcss: SiTailwindcss,
      express: SiExpress,
      flask: SiFlask,
      brain: Brain,
      chart: BarChart3,
      robot: Bot,
    };

    const IconComponent = iconMap[iconName.toLowerCase()];
    return IconComponent ? <IconComponent /> : null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Technical Expertise</h2>
        <div className="section-divider" />
        <p className="section-subtitle max-w-3xl mx-auto">
          A comprehensive overview of my technical skills organized by domain and expertise level.
        </p>
      </motion.div>

      {/* Modern Skill Categories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
      >
        {Object.entries(skillCategories).map(([categoryName, skills]) => (
          <motion.div
            key={categoryName}
            variants={categoryVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
            }}
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
              {categoryName}
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, 1, -1, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="group relative overflow-hidden"
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-10 border border-white/10 group-hover:border-white/20 transition-all duration-300`}>
                    <div className="flex flex-col items-center text-center">
                      <div className="text-2xl mb-2 text-white group-hover:scale-110 transition-transform duration-300">
                        {getIconComponent(skill.icon)}
                      </div>
                      <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Concepts Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <h3 className="text-2xl font-semibold mb-8 flex items-center justify-center">
          <Brain className="text-primary mr-3 h-6 w-6" />
          Core Concepts & Knowledge Areas
        </h3>
        
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)",
                borderColor: "hsl(var(--primary))"
              }}
              className="group px-4 py-2 bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-600 hover:bg-primary/10 transition-all duration-300 cursor-default"
            >
              <span className="text-sm font-medium text-gray-300 group-hover:text-primary transition-colors duration-300">
                {concept}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-24 h-24 bg-violet-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default Skills;
