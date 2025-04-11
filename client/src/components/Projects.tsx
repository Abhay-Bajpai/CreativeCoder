import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ui/project-card";
import { projects } from "../lib/data";

type ProjectCategory = "all" | "web-dev" | "ai-ml" | "frontend" | "full-stack";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "web-dev", label: "Web Dev" },
    { id: "ai-ml", label: "AI/ML" },
    { id: "frontend", label: "Frontend" },
    { id: "full-stack", label: "Full Stack" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.categories.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-8 text-center">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A showcase of my recent work in web development, AI/ML, and more.
          </p>
        </div>

        {/* Project Filters */}
        <motion.div 
          className="flex flex-wrap justify-center mb-10 gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.id as ProjectCategory)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
