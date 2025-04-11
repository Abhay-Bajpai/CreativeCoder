import { motion } from "framer-motion";
import { Code, Settings, Zap } from "lucide-react";
import SkillProgress from "./ui/skill-progress";
import { programmingSkills, toolsAndTech, concepts } from "../lib/data";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="absolute inset-0 -z-5 overflow-hidden opacity-20">
        {/* Animated code snippets in background */}
        {[...Array(15)].map((_, index) => (
          <motion.div 
            key={index}
            className="absolute text-primary/30 font-mono text-xs"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              transform: "scale(0.7)",
              opacity: 0.2 + Math.random() * 0.3
            }}
            animate={{
              y: [0, 100, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          >
            {`function() { return ${Math.random().toString(36).substring(2, 7)} }`}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title gradient-text inline-block">Skills & Expertise</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            I constantly try to improve my tech stack and skills to deliver the best solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Programming Languages */}
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#8b5cf6"
            glarePosition="all"
            glareBorderRadius="12px"
            scale={1.02}
            transitionSpeed={1500}
            className="h-full"
          >
            <motion.div
              className="bg-gray-800 p-8 rounded-lg shadow-lg h-full glow relative overflow-hidden backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.2)",
                borderColor: "rgba(139, 92, 246, 0.3)"
              }}
            >
              <div className="flex items-center mb-6 relative z-10">
                <motion.div 
                  className="bg-primary/20 p-3 rounded-lg mr-4 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-primary opacity-10 animate-pulse" />
                  <Code className="h-6 w-6 text-primary relative z-10" />
                </motion.div>
                <h3 className="text-xl font-semibold gradient-text">Programming Languages</h3>
              </div>

              <div className="space-y-5 relative z-10">
                {programmingSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <SkillProgress
                      name={skill.name}
                      percentage={skill.percentage}
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-xl"></div>
            </motion.div>
          </Tilt>

          {/* Tools & Tech */}
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#8b5cf6"
            glarePosition="all"
            glareBorderRadius="12px"
            scale={1.02}
            transitionSpeed={1500}
            className="h-full"
          >
            <motion.div
              className="bg-gray-800 p-8 rounded-lg shadow-lg h-full glow relative overflow-hidden backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.2)",
                borderColor: "rgba(139, 92, 246, 0.3)"
              }}
            >
              <div className="flex items-center mb-6 relative z-10">
                <motion.div 
                  className="bg-primary/20 p-3 rounded-lg mr-4 relative overflow-hidden"
                  animate={{ 
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    repeatType: "loop" 
                  }}
                >
                  <div className="absolute inset-0 bg-primary opacity-10 animate-pulse" />
                  <Settings className="h-6 w-6 text-primary relative z-10" />
                </motion.div>
                <h3 className="text-xl font-semibold gradient-text">Tools & Tech</h3>
              </div>

              <div className="grid grid-cols-3 gap-8 relative z-10">
                {toolsAndTech.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="flex flex-col items-center skill-icon group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.08 * index }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="mb-3 text-primary/80 relative p-2 bg-gray-700/30 rounded-full"
                      whileHover={{ 
                        boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
                        scale: 1.1
                      }}
                    >
                      <div className="relative z-10" dangerouslySetInnerHTML={{ __html: tool.icon }} />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-violet-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    </motion.div>
                    <span className="text-gray-300 text-sm group-hover:text-primary transition-colors duration-300">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative element */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-xl"></div>
            </motion.div>
          </Tilt>

          {/* Concepts */}
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#8b5cf6"
            glarePosition="all"
            glareBorderRadius="12px"
            scale={1.02}
            transitionSpeed={1500}
            className="h-full"
          >
            <motion.div
              className="bg-gray-800 p-8 rounded-lg shadow-lg h-full glow relative overflow-hidden backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.2)",
                borderColor: "rgba(139, 92, 246, 0.3)"
              }}
            >
              <div className="flex items-center mb-6 relative z-10">
                <motion.div 
                  className="bg-primary/20 p-3 rounded-lg mr-4 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-primary opacity-10"
                    animate={{ 
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                  <Zap className="h-6 w-6 text-primary relative z-10" />
                </motion.div>
                <h3 className="text-xl font-semibold gradient-text">Concepts</h3>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                {concepts.map((concept, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <motion.span
                      className="inline-block bg-primary/20 text-primary/90 px-4 py-2 rounded-full relative z-10"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(139, 92, 246, 0.3)",
                        color: "#ffffff",
                        y: -2
                      }}
                    >
                      {concept}
                    </motion.span>
                    <motion.div 
                      className="absolute inset-0 blur-sm bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                      animate={{ scale: [0.9, 1.1, 0.9] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-xl"></div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Skills;