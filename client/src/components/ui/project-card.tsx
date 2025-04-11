import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import { Project } from "../../lib/data";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className="project-card bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      whileHover={{ y: -5 }}
      data-category={project.categories.join(" ")}
    >
      <div className="relative h-48 bg-gray-700 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientColor} opacity-90 flex items-center justify-center`}>
          <h3 className="text-xl font-bold text-white px-4 text-center">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap mb-5">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag mb-2">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-md transition-colors duration-300 flex items-center"
            >
              <Code className="h-5 w-5 mr-2" />
              View Code
            </a>
          )}
          
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors duration-300 flex items-center"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
