import React from "react";
import { motion } from "framer-motion";
import SkillProgress from "./ui/SkillProgress";
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
  SiFirebase,
  SiTailwindcss,
  SiCodeceptjs,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { programmingSkills, toolsAndTech, concepts } from "../lib/data";

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
      firebase: SiFirebase,
      tailwindcss: SiTailwindcss,
      vscode: SiCodeceptjs,
      figma: SiFigma,
      postman: SiPostman,
    };

    const IconComponent = iconMap[iconName.toLowerCase()];
    return IconComponent ? <IconComponent /> : null;
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
        <h2 className="section-title">My Skills</h2>
        <div className="section-divider" />
        <p className="section-subtitle max-w-3xl mx-auto">
          A showcase of my technical abilities, tools and technologies I work
          with, and key concepts I understand.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Programming Skills */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="text-primary mr-2">
              <SiJavascript className="inline-block" />
            </span>
            Programming Skills
          </h3>

          <div className="space-y-6">
            {programmingSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <SkillProgress
                  name={skill.name}
                  percentage={skill.percentage}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="text-primary mr-2">
              <SiDocker className="inline-block" />
            </span>
            Tools & Technologies
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {toolsAndTech.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, color: "hsl(var(--primary))" }}
                className="flex flex-col items-center text-gray-400 hover:text-primary transition-colors duration-300 skill-icon"
              >
                <div className="text-2xl mb-2">
                  {getIconComponent(tool.icon)}
                </div>
                <span className="text-xs">{tool.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Concepts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="text-primary mr-2">
                <span className="inline-block">🧠</span>
              </span>
              Concepts & Knowledge
            </h3>

            <div className="flex flex-wrap gap-3">
              {concepts.map((concept, index) => (
                <motion.div
                  key={concept}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 8px rgba(139, 92, 246, 0.3)",
                  }}
                  className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 hover:border-primary/30 transition-colors duration-300"
                >
                  {concept}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
