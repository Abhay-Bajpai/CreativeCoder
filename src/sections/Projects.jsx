import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ui/project-card";
import { projects } from "../lib/data";
import { Code, Microscope, Layout, Layers } from "lucide-react";
import Tilt from "react-parallax-tilt";

type ProjectCategory = "all" | "web-dev" | "ai-ml" | "frontend" | "full-stack";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [isHovered, setIsHovered] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const filters = [
    { id: "all", label: "All", icon: <Layers className="w-4 h-4 mr-2" /> },
    { id: "web-dev", label: "Web Dev", icon: <Code className="w-4 h-4 mr-2" /> },
    { id: "ai-ml", label: "AI/ML", icon: <Microscope className="w-4 h-4 mr-2" /> },
    { id: "frontend", label: "Frontend", icon: <Layout className="w-4 h-4 mr-2" /> },
    { id: "full-stack", label: "Full Stack", icon: <Layers className="w-4 h-4 mr-2" /> },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.categories.includes(activeFilter);
  });

  // Filter animation variants
  const filterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const filterItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Grid container variants for staggered animations
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const gridItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-background to-gray-900/80">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6" ref={containerRef}>
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title gradient-text inline-block">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A showcase of my recent work in web development, AI/ML, and more.
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-4"
          variants={filterContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? "active" : ""} flex items-center`}
              onClick={() => setActiveFilter(filter.id as ProjectCategory)}
              variants={filterItemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {filter.icon}
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={gridItemVariants}
                layout
                transition={{ 
                  duration: 0.6, 
                  type: "spring",
                  damping: 20
                }}
                className="card-3d"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(-1)}
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  glareEnable={true}
                  glareMaxOpacity={0.1}
                  glareColor="#8b5cf6"
                  glarePosition="all"
                  glareBorderRadius="12px"
                  className="h-full"
                >
                  <ProjectCard project={project} isHovered={isHovered === index} />
                </Tilt>
                
                {/* Decorative particles that appear when hovering */}
                {isHovered === index && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary rounded-full"
                        initial={{ 
                          x: "50%", 
                          y: "50%", 
                          opacity: 0.8 
                        }}
                        animate={{ 
                          x: `${30 + Math.random() * 40}%`, 
                          y: `${30 + Math.random() * 40}%`, 
                          opacity: 0 
                        }}
                        transition={{ 
                          duration: 1 + Math.random(), 
                          repeat: Infinity,
                          repeatType: "loop" 
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state if no projects match filter */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
            <motion.button
              onClick={() => setActiveFilter("all")}
              className="mt-4 px-6 py-2 bg-primary/20 text-primary rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View all projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
